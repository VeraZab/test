import React from 'react';
import {renderPrismic} from 'lib/renderPrismicRichText';

const FourBoxesOneRow = props => {
  const sectionTitle = props.data.primary['box-section-title'];
  const items = props.data.items;
  return (
    <div className="fourBoxesOneRow-container">
      <div className="fourBoxesOneRow-content">
        <h1 className="fourBoxesOneRow-title">{sectionTitle}</h1>
        {props.data.primary.cta_label && props.data.primary.cta_url && (
          <div className="cta-buttons">
            <a className="button button-primary" href={props.data.primary.cta_url}>
              <div className="button-label">{props.data.primary.cta_label}</div>
            </a>
          </div>
        )}
        <div className="fourBoxesOneRow-boxes-container">
          {items.map(i => (
            <div key={i} className="box">
              <div className="header">
                <img src={i['box-subsection-image'].url} />
                <h2 className="title">{i['box-subsection-title']}</h2>
              </div>
              <div className="content">
                <div className="description">{renderPrismic(i['box-subsection-description'])}</div>
              </div>
            </div>
          ))}
        </div>
        {props.data.primary.cta_label_bottom && props.data.primary.cta_url_bottom && (
          <div className="cta-buttons">
            <a className="button button-primary" href={props.data.primary.cta_url_bottom}>
              <div className="button-label">{props.data.primary.cta_label_bottom}</div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
export default FourBoxesOneRow;
