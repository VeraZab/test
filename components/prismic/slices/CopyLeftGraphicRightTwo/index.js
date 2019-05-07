import {renderPrismic} from 'lib/renderPrismicRichText';

const CopyLeftGraphicRightTwo = props => {
  const primary = props.data.primary;

  return (
    <div className="copy-left-graphic-right-two">
      <div className="content-container">
        <div className="copy-left-copy">
          {Boolean(primary.pretitle) && <div className="dash-pretitle">{primary.pretitle}</div>}
          <h1 className="hero-title">{primary.title1}</h1>
          <div className="subtitle">{renderPrismic(primary.messaging)}</div>
          {Boolean(primary.cta_label) && (
            <div className="cta-buttons">
              <a className="button button-primary" href={primary.cta_url}>
                <div className="button-label">{primary.cta_label}</div>
              </a>
            </div>
          )}
        </div>
        <div className="graphic-container">
          <img src={primary.graphic.url} />
        </div>
      </div>
    </div>
  );
};

export default CopyLeftGraphicRightTwo;
