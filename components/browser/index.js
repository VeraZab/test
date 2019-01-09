import React from 'react';

export default class Browser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="browser">
        <div className="browser-wrapper">
          <div className={'browser-header ' + this.props.className}>
            <div className="browser-header-wrapper">
              <div className="browser-header-buttons">
                <div className="browser-header-button" />
                <div className="browser-header-button" />
                <div className="browser-header-button" />
              </div>
            </div>
          </div>
          <div className="browser-viewport">
            <div className="browser-viewport-wrapper">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
