/**
 * Pricing Cards component
 *
 * This component will take data in and render pricing cards from the pricing-cards
 * custom type from prismic.
 *
 * @class
 *
 */

import React from 'react';
import PricingCard from 'components/prismic/slices/pricing-cards/pricing-card';
import SwitchComponent from 'components/switch';
import {SwitchContainer, HeadingContainer, H1, H2} from 'components/styled/on-prem';
import shortid from 'shortid';

class PricingCardsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pricingMode: 'Private Cloud',
    };
  }

  togglePricingMode() {
    const {pricingMode} = this.state;
    if (pricingMode === 'Private Cloud') {
      this.setState({
        pricingMode: 'On-Premises',
      });
    } else {
      this.setState({
        pricingMode: 'Private Cloud',
      });
    }
  }

  render() {
    const {data} = this.props;
    const cards =
      data &&
      data.linked_items &&
      data.linked_items[0] &&
      data.linked_items[0].pricing_cards &&
      data.linked_items[0].pricing_cards.data &&
      data.linked_items[0].pricing_cards.data.body;
    if (!cards) {
      return null;
    }
    const Cards = cards.map((card, i) => (
      <PricingCard
        key={i}
        cardWidth={`${100 / cards.length}%`}
        card={card}
        pricingMode={this.state.pricingMode}
      />
    ));

    const toggle_content = {
      tabs: [
        {
          label: 'Private Cloud',
          action:
            this.state.pricingMode !== 'Private Cloud' ? () => this.togglePricingMode() : null,
        },
        {
          label: 'On-Premises',
          action: this.state.pricingMode !== 'On-Premises' ? () => this.togglePricingMode() : null,
        },
      ],
    };
    return (
      <>
        <SwitchContainer>
          <SwitchComponent active={this.state.pricingMode} data={toggle_content} />
          <HeadingContainer>
            <H1 key={shortid.generate()} className="animate--fade-in-from-top">
              {this.state.pricingMode === 'Private Cloud'
                ? `Private Cloud`
                : `On-Premises Installation`}
            </H1>
            <H2 key={shortid.generate()} className="animate--fade-in-from-bottom">
              {this.state.pricingMode === 'Private Cloud'
                ? cards[0].primary.private_cloud_copy[0].text
                : cards[0].primary.on_premise_copy[0].text}
            </H2>
          </HeadingContainer>
          <div className="content-section-wrapper hidden pricing__cards__content-section">
            {Cards}
          </div>
        </SwitchContainer>
      </>
    );
  }
}

export default PricingCardsContainer;
