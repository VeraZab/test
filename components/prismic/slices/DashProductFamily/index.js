import {renderPrismic} from 'lib/renderPrismicRichText';

const DashProductFamily = props => {
  const primary = props.data.primary;

  return (
    <div className="dash-product-family-container">
      <div className="dash-product-family-messaging-rectangle">
        <div className="dash-pretitle">{primary.pretitle}</div>
        <h1 className="hero-title">{primary.title1}</h1>
        <p className="subtitle">{renderPrismic(primary.messaging)}</p>
        <div className="cta-buttons">
          <a className="button button-primary" href={primary.cta_url}>
            <div className="button-label">{primary.cta_label}</div>
          </a>
        </div>
      </div>
      <div className="dash-product-family-graphic">
        <img src={primary.graphic.url} />
      </div>
    </div>
  );
};

export default DashProductFamily;
