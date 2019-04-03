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
    if (this.props.background) {
      return (
        <div key={key}>
          <div>
            <img src={data.url} />
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
      <div className={classes} key={key}>
        <div>
          <div>
            <img src={data.url} />
          </div>
        </div>
        {data.copyright ? <copyright>&copy; {data.copyright}</copyright> : ''}
      </div>
    );
  }
}
