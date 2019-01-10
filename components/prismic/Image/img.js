import React from 'react';
import shortid from 'shortid';

export default class Img extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const lozad = require('lozad');

    if (lozad) {
      const observer = lozad('.lozad', {
        threshold: 0.05,
        load: function(el) {
          if (el.dataset.src) {
            el.src = el.dataset.src;
            el.onload = function() {
              el.classList.add('image-loaded');
            };
          } else if (el.dataset.backgroundImage) {
            const img = new Image();
            img.src = el.dataset.backgroundImage;
            img.onload = function() {
              el.style.backgroundImage = `url('${el.dataset.backgroundImage}')`;
              el.classList.add('image-loaded');
            };
          }
        },
      });
      observer.observe();
    }
  }

  render() {
    const key = shortid.generate();
    const {data} = this.props;
    const {imageParams} = this.props;
    if (this.props.background) {
      const previewStyle = {
        backgroundImage: 'url(' + data.url + imageParams.preview + ')',
        backgroundSize: 'cover',
        backgroundPosition: this.props.position,
        backgroundAttachment: this.props.attachment,
      };
      const hqStyle = {
        backgroundSize: 'cover',
        backgroundPosition: this.props.position,
        backgroundAttachment: this.props.attachment,
      };
      return (
        <div className="image" style={this.props.styles} key={key}>
          <div className="image-wrapper">
            <div
              className="image-hq lozad"
              data-background-image={data.url + imageParams.hq}
              style={hqStyle}
              key={shortid.generate()}
            />
            <div className="image-preview" style={previewStyle} />
          </div>
          {data.copyright ? <copyright>&copy; {data.copyright}</copyright> : ''}
        </div>
      );
    }

    let classes = 'image';
    if (this.props.noBlur) {
      classes += ' no-blur';
    }
    return (
      <div className={classes} style={this.props.styles} key={key}>
        <div className="image-wrapper">
          <div className="image-hq">
            <img className="lozad" data-src={data.url + imageParams.hq} alt="" />
          </div>
          <div className="image-preview">
            <img src={data.url + imageParams.preview} alt="" />
          </div>
        </div>
        {data.copyright ? <copyright>&copy; {data.copyright}</copyright> : ''}
      </div>
    );
  }
}
