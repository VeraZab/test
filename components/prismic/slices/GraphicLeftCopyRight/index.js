import {renderPrismic} from 'lib/renderPrismicRichText';

const GraphicLeftCopyRight = props => {
  return (
    <div className="graphic-left-copy-right-container">
      <div className="graphic-left-copy-right">
        <div className="content-container">
          <div className="graphic-container">
            {props.data.primary.cta_graphic && <img src={props.data.primary.cta_graphic.url} />}
          </div>
          <div className="copy-wrapper">
            <div className="copy-container">
              {props.data.primary.pretitle && (
                <div className="pretitle">{props.data.primary.pretitle}</div>
              )}
              {props.data.primary.cta_title && <h1>{props.data.primary.cta_title}</h1>}
              {props.data.primary.cta_title_rich && (
                <h1>{renderPrismic(props.data.primary.cta_title_rich)}</h1>
              )}
              {props.data.primary.cta_messaging && (
                <span className="subtitle">{renderPrismic(props.data.primary.cta_messaging)}</span>
              )}
              {props.data.primary.cta_url.link_type === 'Web' && (
                <span className="cta-buttons">
                  <a className="button button-primary" href={props.data.primary.cta_url.url}>
                    <div className="button-label">{props.data.primary.cta_label}</div>
                  </a>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicLeftCopyRight;
