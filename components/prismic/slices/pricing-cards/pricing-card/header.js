import React from 'react';
import PropTypes from 'prop-types';
import {constructButtons} from 'lib/construct-buttons';
import {numberWithCommas} from 'lib/format-currency';
import Button from 'components/prismic/button';
import SwitchComponent from 'components/switch';
import {renderPrismic} from 'lib/renderPrismicRichText';

const shortid = require('shortid');

class PricingCardHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      content,
      content: {price, frequency, toggle_state_second_price},
    } = this.context;

    const Frequency = frequency && (
      <div className="pricing__card__header__frequency">
        <h2>{frequency}</h2>
      </div>
    );

    const Price = price && (
      <div className="pricing__card__header__price">
        <h2 className="price">
          <span className="price__symbol">$</span>
          {numberWithCommas(
            parseInt(this.props.pricingMode === 'Private Cloud' ? price : toggle_state_second_price)
          )}
        </h2>
      </div>
    );

    const buttons = constructButtons(content);

    const Buttons = (
      <div className="pricing__card__header__actions buttons">
        {this.props.pricingMode === 'Private Cloud' ? (
          <Button key={shortid.generate()} data={buttons[0]} />
        ) : (
          <Button key={shortid.generate()} data={buttons[1]} />
        )}
      </div>
    );

    return (
      <div className="pricing__card__header">
        {Price}
        {Frequency}
        {Buttons}
      </div>
    );
  }
}

PricingCardHeader.contextTypes = {
  content: PropTypes.object.isRequired,
};

export default PricingCardHeader;
