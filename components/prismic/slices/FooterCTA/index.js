const FooterCTA = props => {
  return (
    <div className="footercta-copy-right-container">
      <div className="footercta-graphic-left-copy-right">
        <div className="footercta-content-container">
          <div className="graphic-container">
            <img src={props.data.primary.graphic.url} />
          </div>
          <div className="copy-wrapper">
            <div className="copy-container">
              {props.data.primary.cta_title && (
                <h1 className="hero-title">{props.data.primary.cta_title}</h1>
              )}
              {props.data.primary.cta_messaging && (
                <p className="subtitle">{props.data.primary.cta_messaging}</p>
              )}
              <a className="button button-primary" href={props.data.primary.cta_url}>
                <div className="button-label">{props.data.primary.cta_label}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;
