import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { datalistActions, FilterCondition } from '../../modules/datalist';
import { deckActions, SameCardConstraint } from '../../modules/deck/reducer';
import { DeckCardGeneral, DeckQueryActions } from '../../modules/deck/query';
import { General, Strategy } from '../../interfaces';
import { State } from '../../store';
import CardList, { StateFromProps, DispatchFromProps } from './CardList';
import isEnabledAddDeck from '../Common/isEnabledAddDeck';
import satisfyStrategy from './satisfyStrategy';
import satisfyGeneral from './satisfyGeneral';

interface ContainerStateFromProps {
  generals: General[];
  strategies: Strategy[];
  currentPage: number;
  pageLimit: number;
  filterCondition: FilterCondition;
  activeIndex?: number;
  deckSearchCondition?: {
    belongState?: string;
    cost: string;
    unitType?: string;
  };
  sameCard: SameCardConstraint;
}

interface ContainerDispatchFromProps {
  clearActiveCard: () => void;
  decrementPage: () => void;
  incrementPage: () => void;
}

interface PropForMergedPropsEqual {
  deckPersonals: { personal: string; strat: string }[];
  enabledAddDeck: boolean;
  activeIndex?: number;
  sameCard: SameCardConstraint;
}

const arrayEquals = <V>(a: V[], b: V[]): boolean =>
  a.length === b.length && a.every(v => b.includes(v));

const objectArrayEquals = <V>(
  a: V[],
  b: V[],
  eq: (va: V, vb: V) => boolean
): boolean => a.length === b.length && a.every(va => b.some(vb => eq(va, vb)));

const container = connect<
  ContainerStateFromProps,
  ContainerDispatchFromProps,
  RouteComponentProps,
  StateFromProps & DispatchFromProps & PropForMergedPropsEqual
>(
  (state: State) => ({
    generals: state.datalistReducer.generals,
    strategies: state.datalistReducer.strategies,
    currentPage: state.datalistReducer.currentPage,
    pageLimit: state.datalistReducer.pageLimit,
    filterCondition: state.datalistReducer.effectiveFilterCondition,
    activeIndex: state.deckReducer.activeIndex,
    deckSearchCondition: state.deckReducer.searchCondition,
    sameCard: state.deckReducer.deckConstraints.sameCard,
  }),
  (dispatch: Dispatch) =>
    bindActionCreators(
      {
        clearActiveCard: deckActions.clearActiveCard,
        decrementPage: datalistActions.decrementPage,
        incrementPage: datalistActions.incrementPage,
      },
      dispatch
    ),
  (state, actions, ownProps) => {
    const {
      generals,
      strategies,
      currentPage,
      pageLimit,
      filterCondition: rawFilterCondition,
      activeIndex,
      deckSearchCondition,
      sameCard,
    } = state;
    const deckQueryActions = new DeckQueryActions(ownProps, generals);
    const deckGenerals: string[] = [];
    const deckCards = deckQueryActions.deckCards;
    deckCards.forEach((deckCard, i) => {
      if (activeIndex === i) {
        return;
      }
      if ('general' in deckCard) {
        deckGenerals.push(deckCard.general);
      }
    });
    // デッキにいる武将(武将名-計略単位)
    const deckPersonals = generals
      .filter(general => {
        return deckGenerals.includes(general.id);
      })
      .map(v => {
        const { personal, strat } = v.raw;
        return { personal, strat };
      });
    let filterCondition = rawFilterCondition;
    if (deckSearchCondition) {
      filterCondition = {
        ...filterCondition,
        basic: {
          ...filterCondition.basic,
        },
      };
      if (deckSearchCondition.belongState != null) {
        filterCondition.basic.belongStates = [deckSearchCondition.belongState];
      }
      filterCondition.basic.costs = [deckSearchCondition.cost];
      if (deckSearchCondition.unitType != null) {
        filterCondition.basic.unitTypes = [deckSearchCondition.unitType];
      }
    }
    const searchedStrategies = strategies.filter(strategy => {
      return satisfyStrategy(strategy, filterCondition.strategies);
    });
    let searchedGeneralIds: string[] = [];
    if (searchedStrategies.length > 0) {
      // 計略が総計略数と同じなら計略IDによる絞り込みはしない
      const searchedStrategyIds: string[] | undefined =
        searchedStrategies.length !== strategies.length
          ? searchedStrategies.map(v => v.id)
          : undefined;
      searchedGeneralIds = generals
        .filter(general => {
          if (
            searchedStrategyIds &&
            !searchedStrategyIds.includes(general.strategy.id)
          ) {
            return false;
          }
          return satisfyGeneral(general, filterCondition);
        })
        .map(v => v.id);
    }
    const searchedAll = searchedGeneralIds.length;
    const searchedOffset = (currentPage - 1) * pageLimit;
    const hasPrev = searchedOffset > 0;
    const hasNext = searchedOffset + pageLimit < searchedAll;
    searchedGeneralIds = searchedGeneralIds.slice(
      searchedOffset,
      searchedOffset + pageLimit
    );
    const enabledAddDeck = isEnabledAddDeck(deckCards, activeIndex);
    let enabledAddDeckGeneral: (general: General) => boolean;
    if (!enabledAddDeck) {
      enabledAddDeckGeneral = () => false;
    } else if (sameCard === 'personal-strategy') {
      enabledAddDeckGeneral = general => {
        return (
          enabledAddDeck &&
          !deckPersonals.some(
            r =>
              r.personal === general.raw.personal &&
              r.strat === general.raw.strat
          )
        );
      };
    } else {
      enabledAddDeckGeneral = general => {
        return (
          enabledAddDeck &&
          !deckPersonals.some(r => r.personal === general.raw.personal)
        );
      };
    }
    return {
      activeIndex,
      sameCard,
      generals,
      searchedGeneralIds,
      deckPersonals,
      searchedAll,
      searchedOffset,
      searchedLimit: pageLimit,
      hasPrev,
      hasNext,
      enabledAddDeck,
      showStrategyExplanation:
        filterCondition.strategies.showStrategyExplanation,
      addDeckGeneral: (card: DeckCardGeneral) => {
        if (!enabledAddDeck) {
          return;
        }
        actions.clearActiveCard();
        if (activeIndex != null) {
          deckQueryActions.changeDeckGeneral(activeIndex, card);
        } else {
          deckQueryActions.addDeckGeneral(card);
        }
      },
      onPagePrev: actions.decrementPage,
      onPageNext: actions.incrementPage,
      enabledAddDeckGeneral,
    };
  },
  {
    areOwnPropsEqual: (nextOwnProps, prevOwnProps) => {
      const nextParams = new URLSearchParams(nextOwnProps.location.search);
      const prevParams = new URLSearchParams(prevOwnProps.location.search);
      const nextDeck = nextParams.get('deck');
      const prevDeck = prevParams.get('deck');
      if (nextDeck !== prevDeck) {
        return false;
      }
      return true;
    },
    areMergedPropsEqual: (nextMergedProps, prevMergedProps) => {
      if (nextMergedProps.activeIndex !== prevMergedProps.activeIndex) {
        return false;
      }
      if (nextMergedProps.sameCard !== prevMergedProps.sameCard) {
        return false;
      }
      if (nextMergedProps.enabledAddDeck !== prevMergedProps.enabledAddDeck) {
        return false;
      }
      if (
        nextMergedProps.showStrategyExplanation !==
        prevMergedProps.showStrategyExplanation
      ) {
        return false;
      }
      if (nextMergedProps.searchedAll !== prevMergedProps.searchedAll) {
        return false;
      }
      if (nextMergedProps.searchedOffset !== prevMergedProps.searchedOffset) {
        return false;
      }
      if (
        !arrayEquals(
          nextMergedProps.searchedGeneralIds,
          prevMergedProps.searchedGeneralIds
        )
      ) {
        return false;
      }
      if (
        !objectArrayEquals(
          nextMergedProps.deckPersonals,
          prevMergedProps.deckPersonals,
          (va, vb) => va.personal === vb.personal && va.strat === vb.strat
        )
      ) {
        return false;
      }
      return true;
    },
  }
)(CardList);

export default withRouter(container);
