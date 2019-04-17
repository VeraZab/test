function PricingCardAddons(props) {
  function renderAddons(feature, index) {
    return (
      <div className="pricing__card__addon" key={index}>
        {Boolean(feature.addon_image && feature.addon_image.url) && (
          <div className="pricing__card__addon__image">
            <img src={feature.addon_image.url} />
          </div>
        )}
        {Boolean(feature.addon_title[0] && feature.addon_title[0].text.length > 1) && (
          <div className="pricing__card__addon__title">{feature.addon_title[0].text}</div>
        )}
        {Boolean(feature.addon_price[0] && feature.addon_price[0].text.length > 1) &&
          (feature.addon_price[0].text === 'Contact Us' ? (
            <div className="pricing__card__addon__contact__us">{feature.addon_price[0].text}</div>
          ) : (
            <div className="pricing__card__addon__price">{feature.addon_price[0].text}</div>
          ))}
        {Boolean(feature.addon_description[0] && feature.addon_description[0].text.length > 1) && (
          <div className="pricing__card__addon__description">
            {feature.addon_description[0].text}
          </div>
        )}
        {Boolean(feature.addon_url[0] && feature.addon_url[0].text.length > 1) && (
          <div className="pricing__card__addon__cta">
            <a className="button button-primary" href={feature.addon_url[0].text}>
              <div className="button-label">{feature.addon_cta_text[0].text}</div>
            </a>
          </div>
        )}
      </div>
    );
  }
  return (
    <>
      {Boolean(props.data[0].addons_label[0] && props.data[0].addons_label[0].text !== '') && (
        <div className="pricing__card__addons__section__label">
          {props.data[0].addons_label[0].text}
        </div>
      )}
      <div className="pricing__card__addons__section__addons_wrapper">
        {props.data.map((feature, index) => renderAddons(feature, index))}
      </div>
    </>
  );
}

export default PricingCardAddons;
