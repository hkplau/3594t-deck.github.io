import './DeckCard.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons/faMinusCircle';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import classNames from 'classnames';
import type { General } from '3594t-deck';

interface Props {
  index: number;
  genMain?: string;
  general: General;
  pocket: boolean;
  active: boolean;
  search: boolean;
  onSelectMainGen: (index: number, genMain?: string) => void;
  onActive: (index: number) => void;
  onRemoveDeck: (index: number) => void;
  onToggleSearch: (
    index: number,
    condition: {
      belongState: string;
      cost: string;
      unitType: string;
    }
  ) => void;
}

export default class DeckCard extends React.PureComponent<Props> {
  private handleSelectMainGen = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { index, onSelectMainGen } = this.props;
    let value: string | undefined = event.currentTarget.value;
    if (value == null || value === '') {
      value = undefined;
    }
    onSelectMainGen(index, value);
  };

  private handleActive = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    event.stopPropagation();
    const { index, onActive } = this.props;
    onActive(index);
  };

  private handleRemove = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    event.stopPropagation();
    const { index, onRemoveDeck } = this.props;
    onRemoveDeck(index);
  };

  private handleSearch = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    event.stopPropagation();
    const { index, onToggleSearch, general } = this.props;
    const condition = {
      cost: general.raw.cost,
      belongState: general.raw.state,
      unitType: general.raw.unit_type,
    };
    onToggleSearch(index, condition);
  };

  public render(): React.ReactNode {
    const { general, genMain, active, search, pocket } = this.props;
    const style: React.CSSProperties = {
      backgroundColor: general.state.thincolor,
    };
    const statecolor = general.state.color;
    const styleState: React.CSSProperties = {
      backgroundColor: statecolor,
    };
    const gradientcolors = [
      statecolor,
      `${statecolor} 30px`,
      'transparent 92px',
      'transparent',
    ].join(',');
    const styleShadow: React.CSSProperties = {
      background: `linear-gradient(-30deg, ${gradientcolors})`,
    };
    const skills: JSX.Element[] = [];
    general.skills.forEach((skill) => {
      skills.push(
        <span className="skill" key={skill.id}>
          {skill.nameShort}
        </span>
      );
    });
    if (skills.length === 0) {
      skills.push(
        <span className="no-skill" key={0}>
          特技なし
        </span>
      );
    }
    const genMains: JSX.Element[] = [];
    general.genMains.forEach((genMain, i) => {
      genMains.push(
        <option value={genMain.id} key={i}>
          {genMain.nameShort}
        </option>
      );
    });
    const selectedGenMain = genMain != null ? genMain : '';
    return (
      <div
        className={classNames('deck-card', { active })}
        style={style}
        onClick={this.handleActive}
      >
        <div className="deck-card-inner-top">
          <img className="general-thumb" src={general.thumbUrl(pocket)} />
          <div className="shadow" style={styleShadow} />
          <span className="state" style={styleState}>
            {general.state.nameShort}
          </span>
          <span className="version" style={styleState}>
            {general.version}
          </span>
          <span className="cost" data-label="コスト">
            {general.cost.name}
          </span>
          <span className="unit" data-label="兵種">
            {general.unitType.nameShort}
          </span>
          <span className="name">
            <span className="rarity">{general.rarity.name}</span>
            {general.name}
          </span>
        </div>
        <div className="deck-card-inner-bottom">
          <span className="force" data-label="武">
            {general.force}
          </span>
          <span className="intelligence" data-label="知">
            {general.intelligence}
          </span>
          <span className="conquest" data-label="制圧">
            {general.conquest}
          </span>
          <span className="skills">{skills}</span>
          <span className="gen-mains" data-label="主将器">
            <select
              className="gen-mains-select"
              value={selectedGenMain}
              onChange={this.handleSelectMainGen}
            >
              <option value="" />
              {genMains}
            </select>
          </span>
        </div>
        <div className="tool-box">
          <button className="remove" onClick={this.handleRemove}>
            <FontAwesomeIcon icon={faMinusCircle} />
          </button>
          <button
            className={classNames('search', { enable: search })}
            onClick={this.handleSearch}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    );
  }
}
