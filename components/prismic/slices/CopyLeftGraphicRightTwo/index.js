import {renderPrismic} from 'lib/renderPrismicRichText';

const CopyLeftGraphicRightTwo = props => {
  const primary = props.data.primary;

  return (
    <div className="copy-left-graphic-right-two-container">
      <div className="copy-left-graphic-right-two">
        <div className="content-container">
          <div className="copy-wrapper">
            <div className="copy-container">
              {primary.pretitle && <div className="pretitle">{primary.pretitle}</div>}
              {primary.title1 && <h1>{primary.title1}</h1>}
              {primary.title_rich && <h1>{renderPrismic(primary.title_rich)}</h1>}
              <div className="subtitle">{renderPrismic(primary.messaging)}</div>
              {Boolean(primary.cta_label) && (
                <div className="cta-buttons">
                  <a className="button button-primary" href={primary.cta_url}>
                    <div className="button-label">{primary.cta_label}</div>
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="graphic-container">
            <img src={primary.graphic.url} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyLeftGraphicRightTwo;
