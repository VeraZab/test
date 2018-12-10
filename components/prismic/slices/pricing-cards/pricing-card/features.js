import React from 'react';
import PropTypes from 'prop-types';
import {renderPrismic} from 'lib/renderPrismicRichText';
import shortid from 'shortid';

class PricingCardFeatures extends React.Component {
  render() {
    const features = this.props;

    const Features = (
      <div key={shortid.generate()} className="pricing__card__feature">
        <div className="pricing__card__feature pricing__card__feature__value">
          {renderPrismic(features.data.content.feature1)}
        </div>
        <div className="pricing__card__feature pricing__card__feature__value">
          {renderPrismic(features.data.content.feature2)}
        </div>
        <div className="pricing__card__feature pricing__card__feature__value">
          {renderPrismic(features.data.content.feature31)}
        </div>
        <div className="pricing__card__feature pricing__card__feature__value">
          {renderPrismic(features.data.content.feature4)}
        </div>
        <div className="pricing__card__feature pricing__card__feature__value">
          {renderPrismic(features.data.content.feature51)}
        </div>
        {Boolean(features.data.content.feature6.text) && (
          <div className="pricing__card__feature pricing__card__feature__value">
            {renderPrismic(features.data.content.feature6)}
          </div>
        )}
      </div>
    );

    return (
      <div className="pricing__card__features">
        <div className="pricing__card__features__wrapper">{Features}</div>
      </div>
    );
  }
}

PricingCardFeatures.contextTypes = {
  features: PropTypes.array.isRequired,
};

export default PricingCardFeatures;
