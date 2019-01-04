import React from 'react';
import PropTypes from 'prop-types';
import {renderPrismic} from 'lib/renderPrismicRichText';
import shortid from 'shortid';

class PricingCardFeatures extends React.Component {
  render() {
    const features = this.props;

    const Features = (
      <>
        <div className="pricing__card__feature">
          {renderPrismic(features.data.content.feature1)}
        </div>
        <div className="pricing__card__feature">
          {renderPrismic(features.data.content.feature2)}
        </div>
        <div className="pricing__card__feature">
          {renderPrismic(features.data.content.feature31)}
        </div>
        <div className="pricing__card__feature">
          {renderPrismic(features.data.content.feature4)}
        </div>
        <div className="pricing__card__feature">
          {renderPrismic(features.data.content.feature51)}
        </div>
      </>
    );
    return <div className="pricing__card__features">{Features}</div>;
  }
}

PricingCardFeatures.contextTypes = {
  features: PropTypes.array.isRequired,
};

export default PricingCardFeatures;
