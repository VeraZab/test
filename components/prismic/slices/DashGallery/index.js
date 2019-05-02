import {renderPrismic} from 'lib/renderPrismicRichText';
import React from 'react';

class DashGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mode: 'oil'};
    this.handleOilClick = this.handleOilClick.bind(this);
    this.handleMLClick = this.handleMLClick.bind(this);
    this.handlePharmaClick = this.handlePharmaClick.bind(this);
  }

  handleOilClick() {
    if (this.state.mode !== 'oil') {
      this.setState({mode: 'oil'});
      return;
    }
  }

  handleMLClick() {
    if (this.state.mode !== 'ml') {
      this.setState({mode: 'ml'});
      return;
    }
  }

  handlePharmaClick() {
    if (this.state.mode !== 'pharma') {
      this.setState({mode: 'pharma'});
      return;
    }
  }

  render() {
    const items = this.props.data.items;
    return (
      <div className="gallery-container">
        <div className={this.state.mode === 'oil' ? 'oil-and-gas-active' : 'oil-and-gas'}>
          <div className="gallery-graphic">
            <img src={items[0].graphic.url} />
          </div>
          <div className="gallery-messaging">
            <div className="gallery-heading">{this.props.data.primary.title1}</div>
            <h1 className="title">{items[0].pretitle}</h1>
            <div className="gallery-copy">{renderPrismic(items[0].messaging)}</div>
            <div className="cta-buttons">
              <a className="button button-primary" href={items[0].cta_url}>
                <div className="button-label">{items[0].cta_label}</div>
              </a>
            </div>
          </div>
        </div>
        <div className={this.state.mode === 'ml' ? 'ml-active' : 'ml'}>
          <div className="gallery-graphic">
            <img src={items[1].graphic.url} />
          </div>
          <div className="gallery-messaging">
            <div className="gallery-heading">{this.props.data.primary.title1}</div>
            <h1 className="title">{items[1].pretitle}</h1>
            <div className="gallery-copy">{renderPrismic(items[1].messaging)}</div>
            <div className="cta-buttons">
              <a className="button button-primary" href={items[1].cta_url}>
                <div className="button-label">{items[1].cta_label}</div>
              </a>
            </div>
          </div>
        </div>
        <div className={this.state.mode === 'pharma' ? 'pharma-active' : 'pharma'}>
          <div className="gallery-graphic">
            <img src={items[2].graphic.url} />
          </div>
          <div className="gallery-messaging">
            <div className="gallery-heading">{this.props.data.primary.title1}</div>
            <h1 className="title">{items[2].pretitle}</h1>
            <div className="gallery-copy">{renderPrismic(items[2].messaging)}</div>
            <div className="cta-buttons">
              <a className="button button-primary" href={items[2].cta_url}>
                <div className="button-label">{items[2].cta_label}</div>
              </a>
            </div>
          </div>
        </div>
        <div className="slider-container">
          <div className="sliders">
            <div onClick={this.handleOilClick} className="oil-slider">
              <img src="https://prismic-io.s3.amazonaws.com/plotly%2F5b06ec70-30aa-4a0e-babf-ecab7e594507_path.png" />
            </div>
            <div onClick={this.handleMLClick} className="ml-slider">
              <img src="https://prismic-io.s3.amazonaws.com/plotly%2F5b06ec70-30aa-4a0e-babf-ecab7e594507_path.png" />
            </div>
            <div onClick={this.handlePharmaClick} className="pharma-slider">
              <img src="https://prismic-io.s3.amazonaws.com/plotly%2F5b06ec70-30aa-4a0e-babf-ecab7e594507_path.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashGallery;
