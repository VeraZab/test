import React from 'react';
import shortid from 'shortid';

import Pretitle from '../slice-elements/pretitle';
import Title from '../slice-elements/title';
import Subtitle from '../slice-elements/subtitle';
import {getComponentClass} from '../slice-elements/utils';

import AdvancedCard from './card/index';
import Body from '../slice-elements/body';
import Graphic from '../slice-elements/graphic';
import Actions from '../slice-elements/actions';

class AdvancedCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data: {primary, items, slice_type},
    } = this.props;

    const componentClass = 'content-section-p';
    const classes = getComponentClass(primary, slice_type);

    return (
      <section className={classes}>
        <div className="content-section-p-wrapper">
          <div className={componentClass + '-details ' + componentClass + '-area'}>
            {Boolean(primary.pretitle) && <Pretitle pretitle={primary.pretitle} />}
            {Boolean(primary.title && primary.title.length && primary.title[0].text !== '') && (
              <Title title={primary.title} />
            )}
            {Boolean(
              primary.subtitle && primary.subtitle.length && primary.subtitle[0].text !== ''
            ) && <Subtitle subtitle={primary.subtitle} />}
            <Body primary={primary} />
            <Actions primary={primary} />
          </div>
          <Graphic primary={primary} />
          <div className="advanced-cards">
            <div className="advanced-cards__wrapper">
              {items.map(card => (
                <AdvancedCard variant={primary.card_variant} key={shortid.generate()} card={card} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AdvancedCards;
