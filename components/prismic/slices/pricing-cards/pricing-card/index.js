import React from 'react';
import PricingCardHeader from 'components/prismic/slices/pricing-cards/pricing-card/header';
import PricingCardFeatures from 'components/prismic/slices/pricing-cards/pricing-card/features';
import PricingCardAddons from 'components/prismic/slices/pricing-cards/pricing-card/addons';
import Link from 'next/link';

function PricingCard(props) {
  const {card} = props;
  console.log(props.card.items);
  return (
    <div className="pricing__card__wrapper">
      <div className="pricing__card__header__and__features__section">
        <div className="pricing__card__header">
          <PricingCardHeader data={card.primary} pricing_mode={props.pricing_mode} />
        </div>
        <div className="pricing__card__features">
          <PricingCardFeatures data={card.primary} />
        </div>
      </div>
      <div className="pricing__card__header__and__features__cta">
        <Link
          href={card.primary.title.includes('Dash') ? '/products/dash/' : '/online-chart-maker'}
          prefetch
        >
          <button type="button">Learn More</button>
        </Link>
      </div>
      <div className="pricing__card__addons__section">
        <PricingCardAddons data={card.items} />
      </div>
    </div>
  );
}

export default PricingCard;
