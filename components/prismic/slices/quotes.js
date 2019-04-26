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
      <>
        <div className="quotes">
          <h1 className="title">{this.props.data.primary.title1[0].text}</h1>
          <div className="quotesContainer">
            {items.map((item, i) => {
              return (
                <div
                  key={i}
                  className={
                    this.state.customerQuoteIndex === i ? 'customer-quote-active' : 'customer-quote'
                  }
                >
                  <div onClick={this.handleLeftClick} className="anchor-graphic">
                    <img src="https://prismic-io.s3.amazonaws.com/plotly%2Fd1efff3f-30da-4ed1-ad6c-4c861b9203fa_left+arrow.png" />{' '}
                  </div>
                  <div className="quotes-copy-container">
                    <div className="logo">
                      <img className="logoImage" alt="client logo" src={item.logo.url} />
                    </div>
                    <div className="cell">
                      <div className="author">{item.author1[0].text}</div>
                      <div className="quote-text">{item.quote1[0].text}</div>
                    </div>
                  </div>
                  <div onClick={this.handleRightClick} className="anchor-graphic">
                    <img src="https://prismic-io.s3.amazonaws.com/plotly%2F3bc0f6a5-9d15-44de-8432-cfd56ee5bdc8_right+arrow.png" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Quotes;
