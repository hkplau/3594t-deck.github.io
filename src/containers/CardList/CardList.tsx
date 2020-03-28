import React from 'react';
import { General } from '3594t-deck';
import CardListBase, {
  StateBaseProps,
  DispatchBaseProps,
} from './CardListBase';
import GeneralCard from '../../components/GeneralCard';

export interface StateFromProps extends StateBaseProps {
  generals: General[];
  searchedGeneralIds: string[];
  showStrategyExplanation: boolean;
}

export interface DispatchFromProps extends DispatchBaseProps {
  showGeneralDetail: (general: General) => void;
}

export type Props = StateFromProps & DispatchFromProps;

export default class CardList extends CardListBase<Props> {
  private handleOnShowDetail = (general: General) => {
    this.props.showGeneralDetail(general);
  };

  protected createCardElements(): JSX.Element[] {
    const {
      generals,
      searchedGeneralIds,
      showStrategyExplanation,
    } = this.props;
    const generalCards: JSX.Element[] = [];
    generals.forEach((general) => {
      const show = searchedGeneralIds.includes(general.id);
      generalCards.push(
        <GeneralCard
          key={general.id}
          general={general}
          onShowDetail={this.handleOnShowDetail}
          show={show}
          showStrategyExplanation={showStrategyExplanation}
          showAddButtons={true}
        />
      );
    });
    return generalCards;
  }

  protected isChangedList(prevProps: Readonly<Props>): boolean {
    const next = this.props.searchedGeneralIds;
    const prev = prevProps.searchedGeneralIds;
    const notChanged =
      next.length === prev.length && next.every((v) => prev.includes(v));
    return !notChanged;
  }
}
