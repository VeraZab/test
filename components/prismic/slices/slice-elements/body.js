import React from 'react';
import PrismicDOM from 'prismic-dom';

export default function Body({primary}) {
  if (
    primary.body &&
    primary.body.length &&
    primary.body_two &&
    primary.body_two.length &&
    primary.body_two[0].text !== ''
  ) {
    return (
      <div className="content-section-p-body content-section-p-body-columns">
        <div className="content-section-p-body-wrapper">
          <div
            className="content-section-p-body-column-one"
            dangerouslySetInnerHTML={{
              __html: PrismicDOM.RichText.asHtml(primary.body),
            }}
          />
          <div
            className="content-section-p-body-column-two"
            dangerouslySetInnerHTML={{
              __html: PrismicDOM.RichText.asHtml(primary.body_two),
            }}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="content-section-p-body">
      <div
        className="content-section-p-body-wrapper"
        dangerouslySetInnerHTML={{
          __html: PrismicDOM.RichText.asHtml(primary.body),
        }}
      />
    </div>
  );
}
