import React from 'react';
import {renderPrismic} from 'lib/renderPrismicRichText';

const TitlecenterImagebottom = props => {
  return (
    <div className="titlecenterimagebottom-container">
      <div className="titlecenterimagebottom-content">
        <h1 className="title">{props.data.primary.titlekt}</h1>
        <div className="copy">{renderPrismic(props.data.primary.copy1)}</div>
        <img src={props.data.primary.image1.url} />
      </div>
    </div>
  );
};
export default TitlecenterImagebottom;
