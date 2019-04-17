import PricingCardHeader from 'components/prismic/slices/pricing-cards/pricing-card/header';
import PricingCardFeatures from 'components/prismic/slices/pricing-cards/pricing-card/features';
import PricingCardAddons from 'components/prismic/slices/pricing-cards/pricing-card/addons';

function PricingCard(props) {
  const {card} = props;
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
      <div className="cta-buttons">
        <a
          className="button button-primary addon-button"
          href={
            card.primary.title.includes('Dash')
              ? '/dash/pricing#advanced-cards'
              : '/online-chart-maker'
          }
        >
          <div className="button-label">Learn More</div>
        </a>
      </div>
      <div className="pricing__card__addons__section">
        <PricingCardAddons data={card.items} />
      </div>
    </div>
  );
}

export default PricingCard;
