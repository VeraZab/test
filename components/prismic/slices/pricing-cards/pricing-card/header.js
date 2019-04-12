import {numberWithCommas} from 'lib/format-currency';

function PricingCardHeader(props) {
  const Title = props.data.title && (
    <div className="pricing__card__header__title">
      <h2>{props.data.title}</h2>
    </div>
  );

  const Frequency = props.data.frequency && (
    <div className="pricing__card__header__frequency">
      <h2>{props.data.frequency}</h2>
    </div>
  );

  const Price = props.data.price && (
    <div className="pricing__card__header__price">
      <h2 className="price">
        <span className="price__symbol">$</span>
        {numberWithCommas(
          parseInt(
            props.pricing_mode === 'On-Premises: Internet-Connected Install'
              ? props.data.toggle_state_second_price
              : props.pricing_mode === 'On-Premises: Air-Gapped Install'
              ? props.data.toggle_state_third_price
              : props.data.price,
            10
          )
        )}
      </h2>
    </div>
  );

  const Buttons = props.data.button_one_link &&
    props.data.button_one_label &&
    props.data.button_two_link &&
    props.data.button_two_label &&
    props.data.button_three_link &&
    props.data.button_three_label && (
      <div className="cta-buttons">
        {props.pricing_mode === 'On-Premises: Internet-Connected Install' ? (
          <a className="button button-primary" href={props.data.button_one_link.url}>
            <div className="button-label">{props.data.button_one_label}</div>
          </a>
        ) : props.pricing_mode === 'On-Premises: Air-Gapped Install' ? (
          <a className="button button-primary" href={props.data.button_two_link.url}>
            <button type="button">{props.data.button_two_label}</button>
          </a>
        ) : (
          <a className="button button-primary addon-button" href={props.data.button_three_link.url}>
            <div className="button-label">{props.data.button_three_label}</div>
          </a>
        )}
      </div>
    );

  return (
    <>
      {Title}
      {Price}
      {Frequency}
      {Buttons}
    </>
  );
}

export default PricingCardHeader;
