import React from 'react';
import PropTypes from 'prop-types';
import {renderPrismic} from 'lib/renderPrismicRichText';
import shortid from 'shortid';

class PricingCardFeatures extends React.Component {
  render() {
    const features = this.props;
    const Features = (
      <>
        {[1, 2, 31, 4, 51].map(n => (
          <div className="pricing__card__feature">
            {renderPrismic(features.data.content['feature' + n])}
          </div>
        ))}
      </>
    );
    return <div className="pricing__card__features">{Features}</div>;
  }
}

PricingCardFeatures.contextTypes = {
  features: PropTypes.array.isRequired,
};

export default PricingCardFeatures;
