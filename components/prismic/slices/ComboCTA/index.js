import React from 'react';

class ComboCTA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mode: 'dash'};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.mode === 'dash') {
      this.setState({mode: 'cs'});
      return;
    }

    if (this.state.mode === 'cs') {
      this.setState({mode: 'dash'});
      return;
    }
  }

  render() {
    const items = this.props.data.items;
    return (
      <div className="combo-cta">
        <div
          className={
            this.state.mode === 'dash' ? 'dash-cta-container-active' : 'dash-cta-container'
          }
        >
          <div className="dash-cta-graphic">
            <img src={items[0].graphic.url} />
          </div>
          <div className="copy-container">
            <h3 className="pretitle">{items[0].pretitle}</h3>
            <h1 className="title">{items[0].title1}</h1>
            <h2 className="messaging">{items[0].messaging[0].text}</h2>
            <p>{items[0].messaging[1].text}</p>
            <div className="cta-buttons">
              <a className="button button-primary" href={items[0].url_link2}>
                <div className="button-label">{items[0].url_label2}</div>
              </a>
              <a className="button button-secondary" href={items[0].url_link}>
                <div className="button-label">{items[0].url_label}</div>
              </a>
            </div>
            <div className="dash-cta-anchor">
              <div className="anchor-link">
                <a onClick={this.handleClick}>{items[1].pretitle}</a>
              </div>
              <div onClick={this.handleClick} className="anchor-graphic">
                <img src="https://prismic-io.s3.amazonaws.com/plotly%2F3bc0f6a5-9d15-44de-8432-cfd56ee5bdc8_right+arrow.png" />
              </div>
            </div>
          </div>
        </div>
        <div className={this.state.mode === 'cs' ? 'cs-cta-container-active' : 'cs-cta-container'}>
          <div className="cs-cta-graphic">
            <img src={items[1].graphic.url} />
          </div>
          <div className="copy-container">
            <h3 className="pretitle">{items[1].pretitle}</h3>
            <h1 className="title">{items[1].title1}</h1>
            <div className="messaging">{items[1].messaging[0].text}</div>
            <div className="cta-buttons">
              <a className="button button-primary" href={items[1].url_link2}>
                <div className="button-label">{items[1].url_label2}</div>
              </a>
              <a className="button button-secondary" href={items[1].url_link}>
                <div className="button-label">{items[1].url_label}</div>
              </a>
            </div>
            <div className="cs-cta-anchor">
              <div onClick={this.handleClick} className="anchor-graphic">
                <img src="https://prismic-io.s3.amazonaws.com/plotly%2Fd1efff3f-30da-4ed1-ad6c-4c861b9203fa_left+arrow.png" />{' '}
              </div>
              <div className="anchor-link">
                <a onClick={this.handleClick}>{items[0].pretitle}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComboCTA;
