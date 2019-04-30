import React from 'react';

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {customerQuoteIndex: 0};
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
  }

  handleLeftClick() {
    if (this.state.customerQuoteIndex === 0) {
      this.setState({customerQuoteIndex: this.props.data.items.length - 1});
    } else {
      this.setState({customerQuoteIndex: this.state.customerQuoteIndex - 1});
    }
  }

  handleRightClick() {
    if (this.state.customerQuoteIndex === this.props.data.items.length - 1) {
      this.setState({customerQuoteIndex: 0});
    } else {
      this.setState({customerQuoteIndex: this.state.customerQuoteIndex + 1});
    }
  }

  render() {
    const items = this.props.data.items;
    return (
      <div className="customer-quotes-container">
        <h1 className="customer-quotes-title">{this.props.data.primary.title1[0].text}</h1>
        <div className="customer-quotes">
          {items.map((item, i) => {
            return (
              <div
                key={i}
                className={
                  this.state.customerQuoteIndex === i ? 'customer-quote-active' : 'customer-quote'
                }
              >
                <div onClick={this.handleLeftClick} className="customer-quotes-arrow">
                  <img src="https://prismic-io.s3.amazonaws.com/plotly%2Fd1efff3f-30da-4ed1-ad6c-4c861b9203fa_left+arrow.png" />{' '}
                </div>
                <div className="quotes-copy-container">
                  <div className="customer-logo-container">
                    <img alt="client logo" src={item.logo.url} />
                  </div>
                  <div className="customer-testimonial">
                    <div className="customer">{item.author1[0].text}</div>
                    <div>{item.quote1[0].text}</div>
                  </div>
                </div>
                <div onClick={this.handleRightClick} className="customer-quotes-arrow">
                  <img src="https://prismic-io.s3.amazonaws.com/plotly%2F3bc0f6a5-9d15-44de-8432-cfd56ee5bdc8_right+arrow.png" />
                </div>
              </div>
            );
          })}
          <div className="customer-quotes-arrow-container-mobile">
            <div onClick={this.handleLeftClick} className="customer-quotes-arrow-mobile">
              <img src="https://prismic-io.s3.amazonaws.com/plotly%2Fd1efff3f-30da-4ed1-ad6c-4c861b9203fa_left+arrow.png" />
            </div>
            <div onClick={this.handleRightClick} className="customer-quotes-arrow-mobile">
              <img src="https://prismic-io.s3.amazonaws.com/plotly%2F3bc0f6a5-9d15-44de-8432-cfd56ee5bdc8_right+arrow.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quotes;
