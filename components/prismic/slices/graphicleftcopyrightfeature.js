import {renderPrismic} from 'lib/renderPrismicRichText';

const GraphicLeftCopyRightFeature = props => {
  return (
    <div className="graphicleftcopyrightfeature-container">
      <div className="content-container">
        {props.data.primary.graphic && props.data.primary.graphic.url && (
          <div
            className="graphic-container"
            style={{backgroundImage: `url(${props.data.primary.graphic.url})`}}
          />
        )}
        <div className="copy-wrapper">
          <div className="copy-container">
            {props.data.primary.title1 && <h1>{renderPrismic(props.data.primary.title1)}</h1>}
            {props.data.primary.copy && (
              <p className="copy">{renderPrismic(props.data.primary.copy)}</p>
            )}
            {props.data.primary.cta_url && props.data.primary.cta_label && (
              <div className="cta-buttons">
                <a className="button button-primary" href={props.data.primary.cta_url}>
                  <div className="button-label">{props.data.primary.cta_label}</div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicLeftCopyRightFeature;
