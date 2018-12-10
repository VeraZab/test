import React from 'react';
import PricingCardContainer from 'components/prismic/slices/pricing-cards';

/**
 * Graphic component
 * for ContentSection component
 * @class
 *
 */
export default class PricingCardsSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    /** Destructure props */
    const {
      data,
      data: {primary, items, slice_type},
      className,
    } = this.props;

    return items && <PricingCardContainer cards={data.pricing_cards} />;
  }
}
