import React from 'react';
import PricingCard from 'components/prismic/slices/pricing-cards/pricing-card';

export default class PricingCardsContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pricing_mode: 'Public Cloud Image (AMI)',
    };
  }

  render() {
    const {data} = this.props;
    const pricing_card_data =
      data &&
      data.linked_items &&
      data.linked_items[0] &&
      data.linked_items[0].pricing_cards &&
      data.linked_items[0].pricing_cards.data &&
      data.linked_items[0].pricing_cards.data.body;

    if (!pricing_card_data) {
      return null;
    }

    return (
      <div className="content-section-wrapper hidden pricing__cards__content-section">
        {pricing_card_data.map((card, i) => (
          <PricingCard key={i} card={card} pricing_mode={this.state.pricing_mode} />
        ))}
      </div>
    );
  }
}
