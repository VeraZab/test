import React from 'react';

class Quotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {mode: 'whiteops'};

    this.handleWhiteOpsClick = this.handleWhiteOpsClick.bind(this);
    this.handleGojiClick = this.handleGojiClick.bind(this);
    this.handleInvescoClick = this.handleInvescoClick.bind(this);
    this.handleJupyterClick = this.handleJupyterClick.bind(this);
  }

  handleWhiteOpsClick() {
    if (this.state.mode != 'whiteops') {
      this.setState({mode: 'whiteops'});
      return;
    }
  }

  handleGojiClick() {
    if (this.state.mode != 'goji') {
      this.setState({mode: 'goji'});
      return;
    }
  }

  handleInvescoClick() {
    if (this.state.mode != 'invesco') {
      this.setState({mode: 'invesco'});
      return;
    }
  }

  handleJupyterClick() {
    if (this.state.mode != 'jupyter') {
      this.setState({mode: 'jupyter'});
      return;
    }
  }

  render() {
    const items = this.props.data.items;
    return (
      <>
        <div className="quotes">
          <h1 className="title">{this.props.data.primary.title1[0].text}</h1>
          <div className="quotesContainer">
            <div className={this.state.mode === 'whiteops' ? 'whiteops-active' : 'whiteops'}>
              <div className="logo">
                <img className="logoImage" alt="client logo" src={items[0].logo.url} />
              </div>
              <div className="cell">
                <div className="author">{items[0].author1[0].text}</div>
                <div>{items[0].quote1[0].text}</div>
              </div>
            </div>
            <div className={this.state.mode === 'goji' ? 'goji-active' : 'goji'}>
              <div className="logo">
                <img className="logoImage" alt="client logo" src={items[1].logo.url} />
              </div>
              <div className="cell">
                <div className="author">{items[1].author1[0].text}</div>
                <div>{items[1].quote1[0].text}</div>
              </div>
            </div>
            <div className={this.state.mode === 'invesco' ? 'invesco-active' : 'invesco'}>
              <div className="logo">
                <img className="logoImage" alt="client logo" src={items[2].logo.url} />
              </div>
              <div className="cell">
                <div className="author">{items[2].author1[0].text}</div>
                <div>{items[2].quote1[0].text}</div>
              </div>
            </div>
            <div className={this.state.mode === 'jupyter' ? 'jupyter-active' : 'jupyter'}>
              <div className="logo">
                <img className="logoImage" alt="client logo" src={items[3].logo.url} />
              </div>
              <div className="cell">
                <div className="author">{items[3].author1[0].text}</div>
                <div>{items[3].quote1[0].text}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-container">
          <div onClick={this.handleWhiteOpsClick} className="sliders">
            <img src="https://prismic-io.s3.amazonaws.com/plotly%2F5b06ec70-30aa-4a0e-babf-ecab7e594507_path.png" />
          </div>
          <div onClick={this.handleGojiClick} className="sliders">
            <img src="https://prismic-io.s3.amazonaws.com/plotly%2F5b06ec70-30aa-4a0e-babf-ecab7e594507_path.png" />
          </div>
          <div onClick={this.handleInvescoClick} className="sliders">
            <img src="https://prismic-io.s3.amazonaws.com/plotly%2F5b06ec70-30aa-4a0e-babf-ecab7e594507_path.png" />
          </div>
          <div onClick={this.handleJupyterClick} className="sliders">
            <img src="https://prismic-io.s3.amazonaws.com/plotly%2F5b06ec70-30aa-4a0e-babf-ecab7e594507_path.png" />
          </div>
        </div>
      </>
    );
  }
}

export default Quotes;
