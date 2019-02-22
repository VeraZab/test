import React from 'react';
import shortid from 'shortid';
import PricingCard from 'components/prismic/slices/pricing-cards/pricing-card';
import SwitchComponent from 'components/switch';
import {SwitchContainer, HeadingContainer, H1, H2} from 'components/styled/on-prem';
import {renderPrismic} from 'lib/renderPrismicRichText';

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

    const switch_component_toggle_content = {
      tabs: [
        {
          label: 'Public Cloud Image (AMI)',
          action: () => this.setState({pricing_mode: 'Public Cloud Image (AMI)'}),
        },
        {
          label: 'On-Premises: Internet-Connected Install',
          action: () => this.setState({pricing_mode: 'On-Premises: Internet-Connected Install'}),
        },
        {
          label: 'On-Premises: Air-Gapped Install',
          action: () => this.setState({pricing_mode: 'On-Premises: Air-Gapped Install'}),
        },
      ],
    };

    return (
      <SwitchContainer>
        <SwitchComponent active={this.state.pricing_mode} data={switch_component_toggle_content} />
        <HeadingContainer>
          <H1 key={shortid.generate()} className="animate--fade-in-from-top">
            {this.state.pricing_mode === 'On-Premises: Internet-Connected Install'
              ? 'On-Premises: Internet-Connected Install'
              : this.state.pricing_mode === 'On-Premises: Air-Gapped Install'
              ? 'On-Premises: Air-Gapped Install'
              : 'Public Cloud Image (AMI)'}
          </H1>
          <H2 key={shortid.generate()} className="animate--fade-in-from-bottom">
            {this.state.pricing_mode === 'On-Premises: Internet-Connected Install'
              ? renderPrismic(pricing_card_data[0].primary.on_premise_copy)
              : this.state.pricing_mode === 'On-Premises: Air-Gapped Install'
              ? renderPrismic(pricing_card_data[0].primary.airgap_copy)
              : renderPrismic(pricing_card_data[0].primary.public_cloud_copy)}
          </H2>
        </HeadingContainer>
        <div className="content-section-wrapper hidden pricing__cards__content-section">
          {pricing_card_data.map((card, i) => (
            <PricingCard key={i} card={card} pricing_mode={this.state.pricing_mode} />
          ))}
        </div>
      </SwitchContainer>
    );
  }
}
