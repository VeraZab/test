import {renderPrismic} from 'lib/renderPrismicRichText';

const EnterpriseAddons = props => {
  const primary = props.data.primary;

  return (
    <div className="addons-container">
      <div className="addons-graphic">
        <img src={primary.graphic.url} />
      </div>
      <div className="addons-messaging">
        <h1 className="addons-title">{primary.title1}</h1>
        <div className="addons-copy">{renderPrismic(primary.messaging)}</div>
        <div className="cta-buttons">
          <a className="button button-primary" href={primary.cta_url}>
            {primary.cta_label}
          </a>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseAddons;
