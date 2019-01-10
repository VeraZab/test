import React from 'react';
import shortid from 'shortid';

import SliceOuter from '../slice-elements/slice-outer';
import SliceInner from '../slice-elements/slice-inner';
import Body from '../slice-elements/body';
import Graphic from '../slice-elements/graphic';
import Actions from '../slice-elements/actions';
import AdvancedCard from './card/index';

export default class AdvancedCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data,
      data: {primary, items},
    } = this.props;

    return (
      <SliceOuter data={data}>
        <SliceInner data={data}>
          <Body primary={primary} />
          <Actions primary={primary} />
        </SliceInner>
        <Graphic primary={primary} />
        <div className="advanced-cards">
          <div className="advanced-cards__wrapper">
            {items.map(card => (
              <AdvancedCard variant={primary.card_variant} key={shortid.generate()} card={card} />
            ))}
          </div>
        </div>
      </SliceOuter>
    );
  }
}
