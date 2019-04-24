import React from 'react';

class Quotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {mode: 'whiteops'};

    this.handleWhiteOpsRightClick = this.handleWhiteOpsRightClick.bind(this);

    this.handleGojiRightClick = this.handleGojiRightClick.bind(this);
    this.handleGojiLeftClick = this.handleGojiLeftClick.bind(this);

    this.handleInvescoRightClick = this.handleInvescoRightClick.bind(this);
    this.handleInvescoLeftClick = this.handleInvescoLeftClick.bind(this);
    
    this.handleJupyterLeftClick = this.handleJupyterLeftClick.bind(this);
  }

  handleWhiteOpsClick() {
    if (this.state.mode !== 'whiteops') {
      this.setState({mode: 'whiteops'});
      return;
    }
  }

  handleGojiClick() {
    if (this.state.mode !== 'goji') {
      this.setState({mode: 'goji'});
      return;
    }
  }

  handleInvescoClick() {
    if (this.state.mode !== 'invesco') {
      this.setState({mode: 'invesco'});
      return;
    }
  }

  handleJupyterClick() {
    if (this.state.mode !== 'jupyter') {
      this.setState({mode: 'jupyter'});
      return;
    }
  }

  handleWhiteOpsRightClick() {
    this.setState({mode: 'goji'});
    return;
  }

  handleGojiRightClick() {
    this.setState({mode: 'invesco'});
    return;
  }

  handleGojiLeftClick() {
    this.setState({mode: 'whiteops'});
    return;
  }

  handleInvescoRightClick() {
    this.setState({mode: 'jupyter'});
    return;
  }

  handleInvescoLeftClick() {
    this.setState({mode: 'goji'});
    return;
  }

  handleJupyterLeftClick() {
    this.setState({mode: 'invesco'});
    return;
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
              <div onClick={this.handleWhiteOpsRightClick} className="anchor-graphic">
                <img src="https://prismic-io.s3.amazonaws.com/plotly%2F3bc0f6a5-9d15-44de-8432-cfd56ee5bdc8_right+arrow.png" />
              </div>
            </div>
            <div className={this.state.mode === 'goji' ? 'goji-active' : 'goji'}>
              <div onClick={this.handleGojiLeftClick} className="anchor-graphic-left">
                <img src="https://prismic-io.s3.amazonaws.com/plotly%2Fd1efff3f-30da-4ed1-ad6c-4c861b9203fa_left+arrow.png" />{' '}
              </div>
              <div className="logo">
                <img className="logoImage" alt="client logo" src={items[1].logo.url} />
              </div>
              <div className="cell">
                <div className="author">{items[1].author1[0].text}</div>
                <div>{items[1].quote1[0].text}</div>
              </div>
              <div onClick={this.handleGojiRightClick} className="anchor-graphic">
                <img src="https://prismic-io.s3.amazonaws.com/plotly%2F3bc0f6a5-9d15-44de-8432-cfd56ee5bdc8_right+arrow.png" />
              </div>
            </div>
            <div className={this.state.mode === 'invesco' ? 'invesco-active' : 'invesco'}>
              <div onClick={this.handleInvescoLeftClick} className="anchor-graphic-left">
                <img src="https://prismic-io.s3.amazonaws.com/plotly%2Fd1efff3f-30da-4ed1-ad6c-4c861b9203fa_left+arrow.png" />{' '}
              </div>
              <div className="logo">
                <img className="logoImage" alt="client logo" src={items[2].logo.url} />
              </div>
              <div className="cell">
                <div className="author">{items[2].author1[0].text}</div>
                <div>{items[2].quote1[0].text}</div>
              </div>
              <div onClick={this.handleInvescoRightClick} className="anchor-graphic">
                <img src="https://prismic-io.s3.amazonaws.com/plotly%2F3bc0f6a5-9d15-44de-8432-cfd56ee5bdc8_right+arrow.png" />
              </div>
            </div>
            <div className={this.state.mode === 'jupyter' ? 'jupyter-active' : 'jupyter'}>
              <div onClick={this.handleJupyterLeftClick} className="anchor-graphic-left">
                <img src="https://prismic-io.s3.amazonaws.com/plotly%2Fd1efff3f-30da-4ed1-ad6c-4c861b9203fa_left+arrow.png" />{' '}
              </div>
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
