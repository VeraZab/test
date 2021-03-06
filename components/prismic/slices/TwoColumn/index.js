import {renderPrismic} from 'lib/renderPrismicRichText';

const TwoColumn = props => {
  return (
    <div className="two-column-container">
      <div className="two-column">
        <div className="os-left-container">
          <div className="os-left">
            {props.data.primary.os_title && (
              <h1 className="title">{props.data.primary.os_title}</h1>
            )}
            {props.data.primary.os_messaging && (
              <span className="os-messaging">{renderPrismic(props.data.primary.os_messaging)}</span>
            )}
            {props.data.primary.os_url && props.data.primary.os_label && (
              <>
                <div className="cta-buttons">
                  <a className="button button-primary" href={props.data.primary.os_url.url}>
                    <div className="button-label">{props.data.primary.os_label}</div>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="os-right-container">
          <div className="os-right">
            <h1 className="os-logo-title">{props.data.primary.os_logo_title}</h1>
            <span className="os-subtitle">
              {props.data.primary.os_subtitle && renderPrismic(props.data.primary.os_subtitle)}
            </span>
            <div className="logo-container">
              <div className="container-left">
                <img className="left-logo" src={props.data.items[0].os_logo.url} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumn;
