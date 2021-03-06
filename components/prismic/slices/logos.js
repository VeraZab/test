import React from 'react';
import Image from 'components/prismic/Image';
import PrismicDOM from 'prismic-dom';

export default class LogosSlice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;
    let classes = 'logos-slice';

    if (this.props.className) {
      classes += ' ' + this.props.className;
    }
    if (data.primary.alignment !== null || data.primary.alignment !== '') {
      classes += ' logos-slice-align--' + data.primary.alignment;
    }

    const LogoItems = data.items.map((logo, i) => {
      return (
        <div className="logos-slice-logo" key={i}>
          <Image data={logo.image} />
        </div>
      );
    });
    return (
      <div className={classes}>
        <div className="logos-slice-wrapper">
          {data.primary.title.length || data.primary.body.length ? (
            <div className="logos-slice-header">
              <div
                className="logos-slice-title"
                dangerouslySetInnerHTML={{
                  __html: PrismicDOM.RichText.asHtml(data.primary.title),
                }}
              />
            </div>
          ) : null}
          <div className="logos">{LogoItems}</div>
        </div>
      </div>
    );
  }
}
