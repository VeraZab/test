import React from 'react';
import {renderPrismic} from 'lib/renderPrismicRichText';

const AdvancedExplanation = props => {
  return (
    <div className="advancedExplanation-container">
      <div className="advancedExplanation-content">
        <div className="intro">
          <div className="left">
            {props.data.primary.pretitle && (
              <div className="pretitle">{props.data.primary.pretitle}</div>
            )}
            <h1 className="title">{props.data.primary.title1}</h1>
            {props.data.primary.subtitle && (
              <h2 className="subtitle">{renderPrismic(props.data.primary.subtitle)}</h2>
            )}
            <div className="message">{renderPrismic(props.data.primary.message)}</div>
            <div className="cta-buttons">
              {props.data.primary.cta_label1 && (
                <a className="button button-secondary" href={props.data.primary.cta_url1}>
                  <div className="button-label">{props.data.primary.cta_label1}</div>
                </a>
              )}
              {props.data.primary.cta_label2 && (
                <a className="button button-secondary" href={props.data.primary.cta_url2}>
                  <div className="button-label">{props.data.primary.cta_label2}</div>
                </a>
              )}
            </div>
          </div>
          <div className="right">
            <img src={props.data.primary.graphic.url} />
          </div>
        </div>
        <div className="points">
          {props.data.items.map((item, index) => (
            <div className="point" key={index}>
              <div className="left">{item.icon.url ? <img src={item.icon.url} /> : null}</div>
              <div className="right">
                <h2 className="title">{item.title1}</h2>
                <div className="subtitle">{item.subtitle}</div>
                <div className="message">{renderPrismic(item.message)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AdvancedExplanation;
