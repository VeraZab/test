import {renderPrismic} from 'lib/renderPrismicRichText';
import React from 'react';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentSliceIndex: 0};
    this.moveTo = this.moveTo.bind(this);
  }

  moveTo(sliceIndex) {
    if (this.state.currentSliceIndex !== sliceIndex) {
      this.setState({currentSliceIndex: sliceIndex});
    }
  }

  render() {
    const items = this.props.data.items;
    const slides = items.map((item, index) => {
      return (
        <div
          key={index}
          className={index === this.state.currentSliceIndex ? 'active-slide' : 'inactive-slide'}
        >
          <div className="gallery-graphic">
            <img src={item.graphic.url} />
          </div>
          <div className="gallery-messaging">
            <div className="gallery-heading">{this.props.data.primary.title1}</div>
            <h1 className="title">{item.pretitle}</h1>
            <div className="gallery-copy">{renderPrismic(item.messaging)}</div>
            <div className="cta-buttons">
              <a className="button button-primary" href={item.cta_url}>
                <div className="button-label">{item.cta_label}</div>
              </a>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="gallery-container">
        <div className="gallery">
          {slides}
          <div style={{display: 'flex'}}>
            <div className="point-container">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={
                    index === this.state.currentSliceIndex ? 'active-point' : 'inactive-point'
                  }
                  onClick={() => this.moveTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
