import React from 'react';

export class DeviceWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    let contentFrame, svg, deviceWrapperStyles;

    switch (this.props.deviceType) {
      case 'browser':
        contentFrame = (
          <BrowserContentFrame
            image={this.props.image}
            deviceColor={this.props.deviceColor}
          />
        );
        svg = BrowserContentFrame.svg;
        deviceWrapperStyles = BrowserContentFrame.deviceWrapperStyles;
        break;
      case 'ipad':
        contentFrame = (
          <IpadContentFrame
            image={this.props.image}
            deviceColor={this.props.deviceColor}
          />
        );
        svg = IpadContentFrame.svg;
        deviceWrapperStyles = IpadContentFrame.deviceWrapperStyles;
        break;
    }

    return (
      <div className={'device-wrapper'} style={deviceWrapperStyles}>
        <div
          className={'device-svg'}
          data-device-type={this.props.deviceType}
          data-device-color={this.props.deviceColor}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
        {contentFrame}
      </div>
    );
  };
}

class BrowserContentFrame extends React.Component {
  constructor(props) {
    super(props);
  }

  static svg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="79.2 0 801.5 560" enable-background="new 79.2 0 801.5 560" xml:space="preserve"><path fill="#dcdddd" d="M868.7,72.8H91.3H79.2V60.7V31.5V12.1C79.2,5.4,84.6,0,91.3,0h777.3c6.7,0,12.1,5.4,12.1,12.1v19.4v29.1v12.1h-12V72.8z M878.4,60.7V51V12.1c0-5.4-4.4-9.7-9.7-9.7H91.3c-5.4,0-9.7,4.4-9.7,9.7V51v9.7v9.7h9.7h777.3h9.7v-9.7H878.4z"></path><path fill="#dcdddd" d="M117.9,46.1c-5.2,0-9.5-4.3-9.5-9.7s4.3-9.7,9.5-9.7c5.2,0,9.5,4.3,9.5,9.7S123.1,46.1,117.9,46.1zM117.9,28.6c-4.2,0-7.6,3.5-7.6,7.8s3.4,7.8,7.6,7.8c4.2,0,7.6-3.5,7.6-7.8S122.1,28.6,117.9,28.6z"></path><path fill="#dcdddd" d="M152.1,46.1c-5.2,0-9.5-4.3-9.5-9.7s4.3-9.7,9.5-9.7c5.2,0,9.5,4.3,9.5,9.7S157.3,46.1,152.1,46.1zM152.1,28.6c-4.2,0-7.6,3.5-7.6,7.8s3.4,7.8,7.6,7.8c4.2,0,7.6-3.5,7.6-7.8S156.3,28.6,152.1,28.6z"></path><path fill="#dcdddd" d="M186.3,46.1c-5.2,0-9.5-4.3-9.5-9.7s4.3-9.7,9.5-9.7c5.2,0,9.5,4.3,9.5,9.7S191.5,46.1,186.3,46.1zM186.3,28.6c-4.2,0-7.6,3.5-7.6,7.8s3.4,7.8,7.6,7.8c4.2,0,7.6-3.5,7.6-7.8S190.5,28.6,186.3,28.6z"></path><path fill="#dcdddd" d="M81.6,70.4v476c0,5.4,4.4,9.7,9.7,9.7h777.3c5.4,0,9.7-4.3,9.7-9.7v-476h2.4v476c0,6.7-5.4,12.1-12.1,12.1H91.3c-6.7,0-12.1-5.4-12.1-12.1v-476L81.6,70.4L81.6,70.4z"></path><path fill="none" stroke="#dcdddd" stroke-width="1.5" stroke-miterlimit="10" d="M229.8,14.5h631.6c2.7,0,4.9,2.2,4.9,4.9v34c0,2.7-4.6,4.9-7.3,4.9H229.8c-2.7,0-4.9-2.2-4.9-4.9v-34C225,16.7,227.1,14.5,229.8,14.5z"></path></svg>';

  static deviceWrapperStyles = {
    width: '120%',
    'max-width': '800px',
    'min-width': ' 600px'
  };

  render = () => {
    return (
      <div className={`browser-content frame --${this.props.deviceColor}`}>
        <img className={''} src={this.props.image} />
      </div>
    );
  };
}

class IpadContentFrame extends React.Component {
  constructor(props) {
    super(props);
  }

  static svg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="253.1 0 706.9 560" enable-background="new 253.1 0 706.9 560" xml:space="preserve"><g><path fill="#3785d3" d="M958,528.5V32.6c0-17.5-14-31.5-31.5-31.5H284.6c-17.5,0-31.5,14.3-31.5,31.5v495.9c0,17.5,14,31.5,31.5,31.5h641.8C943.9,560,958,546,958,528.5z M256.2,32.6c0-15.6,12.8-28.5,28.5-28.5h641.8c15.6,0,28.5,12.8,28.5,28.5v495.9c0,15.6-12.8,28.5-28.5,28.5H284.6c-15.6,0-28.5-12.8-28.5-28.5V32.6H256.2z"></path><path fill="#3785d3" d="M295.8,280.1c0-5-4.1-9.1-9.1-9.1c-5,0-9.1,4.1-9.1,9.1s4.1,9.1,9.1,9.1C291.8,289.1,295.8,285.1,295.8,280.1z M280.7,280.1c0-3.4,2.6-6,6-6c3.4,0,6,2.6,6,6c0,3.4-2.6,6-6,6C283.4,286.1,280.7,283.5,280.7,280.1z"></path><path fill="#3785d3" d="M945,279.5c0-10.2-8.3-18.5-18.5-18.5c-10.2,0-18.5,8.3-18.5,18.5s8.3,18.5,18.5,18.5C936.7,298,945,289.9,945,279.5z M911,279.5c0-8.6,7-15.5,15.5-15.5c8.6,0,15.5,7,15.5,15.5c0,8.6-7,15.5-15.5,15.5C918,295.2,911,288,911,279.5z"></path></g></svg>';

  static deviceWrapperStyles = {
    width: '100%',
    right: '8%',
    'max-width': '700px',
    'min-width': ' 600px',
    'box-sizing': ' border-box'
  };

  render = () => {
    return (
      <div className={`ipad-content frame --${this.props.deviceColor}`}>
        <img className={''} src={this.props.image} />
      </div>
    );
  };
}
