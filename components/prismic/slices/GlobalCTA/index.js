import React from 'react';

const GlobalCTA = props => {
  return (
    <div className="globalCTA">
      <div className="graphic-container">
        <div className="cta-graphic">
          {props.data.primary.cta_graphic && <img src={props.data.primary.cta_graphic.url} />}
        </div>
      </div>
      <div className="cta-body">
        {props.data.primary.cta_title && (
          <h1 className="hero-title">{props.data.primary.cta_title}</h1>
        )}
        {props.data.primary.cta_messaging && (
          <p className="hero-subtitle pale-blue">{props.data.primary.cta_messaging}</p>
        )}
        {props.data.primary.cta_url && props.data.primary.cta_label && (
          <a className=" button button-primary" href={props.data.primary.cta_url.url}>
            <div className="button-label">{props.data.primary.cta_label}</div>
          </a>
        )}
      </div>
    </div>
  );
};

export default GlobalCTA;
