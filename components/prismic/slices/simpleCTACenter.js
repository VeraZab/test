import React from 'react';
import {renderPrismic} from 'lib/renderPrismicRichText';

const SimpleCTACenter = props => {
  return (
    <div className="simplectacenter-container">
      <div className="simplectacenter-content">
        {props.data.primary.title_rich && (
          <h1 className="title">{renderPrismic(props.data.primary.title_rich)}</h1>
        )}
        {props.data.primary.copy && (
          <div className="copy">{renderPrismic(props.data.primary.copy)}</div>
        )}
        {props.data.primary.cta_url && (
          <div className="cta-buttons">
            <a className="button button-primary" href={props.data.primary.cta_url}>
              <div className="button-label">{props.data.primary.cta_label}</div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
export default SimpleCTACenter;
