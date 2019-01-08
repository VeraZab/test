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
    const {data: {linked_items}} = this.props;
    return <PricingCardContainer cards={linked_items[0].pricing_cards.data.body} />;
  }
}
