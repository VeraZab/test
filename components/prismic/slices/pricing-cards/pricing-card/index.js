import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import PricingCardHeader from 'components/prismic/slices/pricing-cards/pricing-card/header';
import PricingCardFeatures from 'components/prismic/slices/pricing-cards/pricing-card/features';
import PricingCardAddons from 'components/prismic/slices/pricing-cards/pricing-card/addons';

class PricingCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    const {
      card: {primary: content, items: features},
    } = this.props;

    return {
      content,
      features,
    };
  }

  render() {
    return (
      <>
        <div className="pricing__card__title">
          <h2 className="title">{this.getChildContext().content.title}</h2>
        </div>
        <div className="pricing__card__wrapper">
          <div className="pricing__card__header__and__features__section">
            <PricingCardHeader pricingMode={this.props.pricingMode} />
            <PricingCardFeatures data={this.getChildContext()} />
          </div>
          <PricingCardAddons />
        </div>
      </>
    );
  }
}

PricingCard.propTypes = {
  card: PropTypes.object.isRequired,
};
PricingCard.childContextTypes = {
  content: PropTypes.object,
  features: PropTypes.array,
};

export default PricingCard;
