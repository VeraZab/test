import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {renderPrismic} from 'lib/renderPrismicRichText';

class PricingCardAddons extends React.Component {
  renderAddons(feature, index) {
    return (
      <div className="pricing__card__addon" key={index}>
        {Boolean(feature.addon_title[0] && feature.addon_title[0].text.length > 1) && (
          <div className="pricing__card__addon_title">{feature.addon_title[0].text}</div>
        )}
        {Boolean(feature.addon_price[0] && feature.addon_price[0].text.length > 1) && (
          <div className="pricing__card__addon_price">{feature.addon_price[0].text}</div>
        )}
        {Boolean(feature.addon_description[0] && feature.addon_description[0].text.length > 1) && (
          <div className="pricing__card__addon_description">
            {feature.addon_description[0].text}
          </div>
        )}
        {Boolean(feature.addon_url[0] && feature.addon_url[0].text.length > 1) && (
          <div className="pricing__card__addon_url">
            {renderPrismic(Array(feature.addon_url[0]))}
          </div>
        )}
      </div>
    );
  }

  render() {
    const {features} = this.context;

    return (
      <div className="pricing__card__addons__section">
        {Boolean(features[0].addons_label[0] && features[0].addons_label[0].text !== '') && (
          <div className="pricing__card__addons__section__label">
            {features[0].addons_label[0].text}
          </div>
        )}
        {features.map((feature, index) => this.renderAddons(feature, index))}
      </div>
    );
  }
}

PricingCardAddons.contextTypes = {
  features: PropTypes.array.isRequired,
};

export default PricingCardAddons;
