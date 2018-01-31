import React from 'react';
import PropTypes from 'prop-types';
import PricingCardHeader from 'components/prismic/slices/pricing-cards/card/header';
import PricingCardFeatures from 'components/prismic/slices/pricing-cards/card/features';

const shortid = require('shortid');

class PricingCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  getChildContext() {
    const { card: { primary: content, items: features } } = this.props;

    return {
      content,
      features,
    };
  }

  render() {
    const {
      style,
      className,
      card: { primary: content, items: features },
      cardWidth,
    } = this.props;

    let classes = 'pricing__card';

    if (content.style && content.style !== 'default') {
      classes += ` pricing__card--${content.style}`;
    }
    if (content.pretitle) {
      classes += ' pricing__card--has-pretitle';
    }
    if (content.has_toggle === 'true') {
      classes += ' pricing__card--has-toggle';
    }

    const styles = {
      ...style,
      width: cardWidth,
    };
    return (
      <div className={classes} style={styles}>
        <div className="pricing__card__wrapper">
          <PricingCardHeader />
          <PricingCardFeatures />
        </div>
      </div>
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
