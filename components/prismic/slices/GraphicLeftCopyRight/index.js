import {renderPrismic} from 'lib/renderPrismicRichText';

const GraphicLeftCopyRight = props => {
  return (
    <div className="graphic-left-copy-right-container ">
      <div className="content-container">
        <div className="graphic-container">
          {props.data.primary.cta_graphic && <img src={props.data.primary.cta_graphic.url} />}
        </div>
        <div className="copy-wrapper">
          <div className="graphic-left-copy">
            {props.data.primary.cta_title && (
              <h1 className="hero-title">{props.data.primary.cta_title}</h1>
            )}
            {props.data.primary.cta_messaging && (
              <p className="hero-subtitle pale-blue">
                {renderPrismic(props.data.primary.cta_messaging)}
              </p>
            )}
            {props.data.primary.cta_url && props.data.primary.cta_label && (
              <div className="cta-buttons">
                <a className="button button-primary" href={props.data.primary.cta_url.url}>
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

export default GraphicLeftCopyRight;
