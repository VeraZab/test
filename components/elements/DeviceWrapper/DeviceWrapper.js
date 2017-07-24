import React from 'react';
import PropTypes from 'prop-types';

export class DeviceWrapper extends React.Component {
  render() {
    const { deviceType, deviceColor, image } = this.props,
      SpecificDeviceWrapper = devices[deviceType];

    return (
      <div className={'device-wrapper'} style={SpecificDeviceWrapper.deviceWrapperStyles}>
        <div
          className={'device-svg'}
          data-device-type={deviceType}
          data-device-color={deviceColor}
          dangerouslySetInnerHTML={{ __html: SpecificDeviceWrapper.svg }}
        />
        <SpecificDeviceWrapper image={image} deviceColor={deviceColor} />
      </div>
    );
  }
}

DeviceWrapper.propTypes = {
  deviceType: PropTypes.string,
  deviceColor: PropTypes.string,
  image: PropTypes.string
};

class BrowserContentFrame extends React.Component {
  static svg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="79.2 0 801.5 560" enable-background="new 79.2 0 801.5 560" xml:space="preserve"><path fill="#dcdddd" d="M868.7,72.8H91.3H79.2V60.7V31.5V12.1C79.2,5.4,84.6,0,91.3,0h777.3c6.7,0,12.1,5.4,12.1,12.1v19.4v29.1v12.1h-12V72.8z M878.4,60.7V51V12.1c0-5.4-4.4-9.7-9.7-9.7H91.3c-5.4,0-9.7,4.4-9.7,9.7V51v9.7v9.7h9.7h777.3h9.7v-9.7H878.4z"></path><path fill="#dcdddd" d="M117.9,46.1c-5.2,0-9.5-4.3-9.5-9.7s4.3-9.7,9.5-9.7c5.2,0,9.5,4.3,9.5,9.7S123.1,46.1,117.9,46.1zM117.9,28.6c-4.2,0-7.6,3.5-7.6,7.8s3.4,7.8,7.6,7.8c4.2,0,7.6-3.5,7.6-7.8S122.1,28.6,117.9,28.6z"></path><path fill="#dcdddd" d="M152.1,46.1c-5.2,0-9.5-4.3-9.5-9.7s4.3-9.7,9.5-9.7c5.2,0,9.5,4.3,9.5,9.7S157.3,46.1,152.1,46.1zM152.1,28.6c-4.2,0-7.6,3.5-7.6,7.8s3.4,7.8,7.6,7.8c4.2,0,7.6-3.5,7.6-7.8S156.3,28.6,152.1,28.6z"></path><path fill="#dcdddd" d="M186.3,46.1c-5.2,0-9.5-4.3-9.5-9.7s4.3-9.7,9.5-9.7c5.2,0,9.5,4.3,9.5,9.7S191.5,46.1,186.3,46.1zM186.3,28.6c-4.2,0-7.6,3.5-7.6,7.8s3.4,7.8,7.6,7.8c4.2,0,7.6-3.5,7.6-7.8S190.5,28.6,186.3,28.6z"></path><path fill="#dcdddd" d="M81.6,70.4v476c0,5.4,4.4,9.7,9.7,9.7h777.3c5.4,0,9.7-4.3,9.7-9.7v-476h2.4v476c0,6.7-5.4,12.1-12.1,12.1H91.3c-6.7,0-12.1-5.4-12.1-12.1v-476L81.6,70.4L81.6,70.4z"></path><path fill="none" stroke="#dcdddd" stroke-width="1.5" stroke-miterlimit="10" d="M229.8,14.5h631.6c2.7,0,4.9,2.2,4.9,4.9v34c0,2.7-4.6,4.9-7.3,4.9H229.8c-2.7,0-4.9-2.2-4.9-4.9v-34C225,16.7,227.1,14.5,229.8,14.5z"></path></svg>';

  static deviceWrapperStyles = {
    width: '115%',
    right: '10%'
  };

  render() {
    const { image, deviceColor } = this.props;
    return (
      <div className={`frame-content browser frame --${deviceColor}`}>
        <img className={''} src={image} />
      </div>
    );
  }
}

class IpadContentFrame extends React.Component {
  static svg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="253.1 0 706.9 560" enable-background="new 253.1 0 706.9 560" xml:space="preserve"><g><path fill="#3785d3" d="M958,528.5V32.6c0-17.5-14-31.5-31.5-31.5H284.6c-17.5,0-31.5,14.3-31.5,31.5v495.9c0,17.5,14,31.5,31.5,31.5h641.8C943.9,560,958,546,958,528.5z M256.2,32.6c0-15.6,12.8-28.5,28.5-28.5h641.8c15.6,0,28.5,12.8,28.5,28.5v495.9c0,15.6-12.8,28.5-28.5,28.5H284.6c-15.6,0-28.5-12.8-28.5-28.5V32.6H256.2z"></path><path fill="#3785d3" d="M295.8,280.1c0-5-4.1-9.1-9.1-9.1c-5,0-9.1,4.1-9.1,9.1s4.1,9.1,9.1,9.1C291.8,289.1,295.8,285.1,295.8,280.1z M280.7,280.1c0-3.4,2.6-6,6-6c3.4,0,6,2.6,6,6c0,3.4-2.6,6-6,6C283.4,286.1,280.7,283.5,280.7,280.1z"></path><path fill="#3785d3" d="M945,279.5c0-10.2-8.3-18.5-18.5-18.5c-10.2,0-18.5,8.3-18.5,18.5s8.3,18.5,18.5,18.5C936.7,298,945,289.9,945,279.5z M911,279.5c0-8.6,7-15.5,15.5-15.5c8.6,0,15.5,7,15.5,15.5c0,8.6-7,15.5-15.5,15.5C918,295.2,911,288,911,279.5z"></path></g></svg>';

  static deviceWrapperStyles = {
    width: '100%',
    maxWidth: '600px'
  };

  render() {
    const { image, deviceColor } = this.props;
    return (
      <div className={`frame-content ipad frame --${deviceColor}`}>
        <img className={''} src={image} />
      </div>
    );
  }
}

class IpythonContentFrame extends React.Component {
  static svg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="253.1 0 706.9 560" enable-background="new 253.1 0 706.9 560" xml:space="preserve"><g><path fill="#3785d3" d="M958,528.5V32.6c0-17.5-14-31.5-31.5-31.5H284.6c-17.5,0-31.5,14.3-31.5,31.5v495.9c0,17.5,14,31.5,31.5,31.5h641.8C943.9,560,958,546,958,528.5z M256.2,32.6c0-15.6,12.8-28.5,28.5-28.5h641.8c15.6,0,28.5,12.8,28.5,28.5v495.9c0,15.6-12.8,28.5-28.5,28.5H284.6c-15.6,0-28.5-12.8-28.5-28.5V32.6H256.2z"></path><path fill="#3785d3" d="M295.8,280.1c0-5-4.1-9.1-9.1-9.1c-5,0-9.1,4.1-9.1,9.1s4.1,9.1,9.1,9.1C291.8,289.1,295.8,285.1,295.8,280.1z M280.7,280.1c0-3.4,2.6-6,6-6c3.4,0,6,2.6,6,6c0,3.4-2.6,6-6,6C283.4,286.1,280.7,283.5,280.7,280.1z"></path><path fill="#3785d3" d="M945,279.5c0-10.2-8.3-18.5-18.5-18.5c-10.2,0-18.5,8.3-18.5,18.5s8.3,18.5,18.5,18.5C936.7,298,945,289.9,945,279.5z M911,279.5c0-8.6,7-15.5,15.5-15.5c8.6,0,15.5,7,15.5,15.5c0,8.6-7,15.5-15.5,15.5C918,295.2,911,288,911,279.5z"></path></g></svg>';

  static deviceWrapperStyles = {
    width: '100%',
    right: '8%',
    maxWidth: '700px',
    minWidth: '600px',
    boxSizing: 'border-box'
  };

  render() {
    const { image, deviceColor } = this.props;
    return (
      <div className={`frame-content ipython  --${deviceColor}`}>
        <img className={''} src={image} />
      </div>
    );
  }
}

class DesktopContentFrame extends React.Component {
  static svg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="133.4 0 693.2 560" enable-background="new 133.4 0 693.2 560" xml:space="preserve"><path fill="#dcdddd" d="M826.6,414.5H133.4v-2.4h693.2V414.5z"></path><path fill="#dcdddd" d="M807.5,480.3h-655c-10.6,0-19.1-8.6-19.1-19.2v-442C133.4,8.6,142,0,152.5,0h654.9c10.6,0,19.2,8.6,19.2,19.1v442C826.6,471.7,818,480.3,807.5,480.3z M152.5,2.4c-9.3,0-16.8,7.5-16.8,16.8v442c0,9.3,7.5,16.8,16.8,16.8h654.9c9.3,0,16.8-7.5,16.8-16.8v-442c0-9.3-7.5-16.8-16.8-16.8C807.4,2.4,152.5,2.4,152.5,2.4z"></path><path fill="#dcdddd" d="M557.3,480.3c3.1,34.2,4.9,47.3,7.1,50.2c1.7,2.1,6.2,5.3,13.6,10.4c5.3,3.6,14.2,9.8,15.6,11.9c-0.3,3-5.4,4.1-8.6,4.5c-1.1,0.1-9.7,0.4-55.2,0.4c-13.7,0-29.5,0-46.9-0.1c-23,0.1-40.3,0.1-54.8,0.1c-37.1,0-46.1-0.2-47.3-0.3c-3.2-0.4-8.3-1.6-8.6-4.6c1.3-2.1,10.2-8.3,15.6-11.9c7.4-5.1,11.9-8.3,13.6-10.4c2.2-2.8,4-15.9,7.1-50.1L557.3,480.3 M559.5,478H406.1c-1.3,14.4-4.1,47.6-6.8,51c-3.6,4.5-29.7,19.7-29.7,23.6c0,4.1,4.1,6.5,10.6,7.3c2.1,0.3,21.7,0.4,47.6,0.4c16.7,0,35.9,0,54.8-0.1c16,0,32.2,0.1,46.9,0.1c29.8,0,53.2-0.1,55.5-0.4c6.5-0.9,10.7-3.1,10.6-7.2c0-3.7-26-18.9-29.7-23.5C563.6,525.6,560.8,492.3,559.5,478L559.5,478z"></path></svg>';

  static deviceWrapperStyles = {
    width: '100%',
    right: '10%'
  };

  render() {
    const { image, deviceColor } = this.props;
    return (
      <div className={`frame-content desktop  --${deviceColor}`}>
        <img className={''} src={image} />
      </div>
    );
  }
}

class IphoneContentFrame extends React.Component {
  static svg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="344.6 0 270.8 560" enable-background="new 344.6 0 270.8 560" xml:space="preserve"><g><path fill="#b3bac9" d="M577.6,560H382.4c-20.8,0-37.8-17.1-37.8-37.9V37.8c0-20.8,17-37.8,37.8-37.8h195.2c20.8,0,37.8,17,37.8,37.8v484.3C615.4,542.9,598.4,560,577.6,560z M382.4,2.5c-19.4,0-35.3,15.8-35.3,35.3v484.3c0,19.4,15.8,35.4,35.4,35.4h195.2c19.4,0,35.4-15.8,35.4-35.4V37.8c0-19.4-15.8-35.4-35.4-35.4H382.4V2.5z"></path><path fill="#b3bac9" d="M480.6,538.8c-10.7,0-19.3-8.7-19.3-19.3c0-10.7,8.7-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3S491.2,538.8,480.6,538.8z M480.6,502.4c-9.3,0-17,7.6-17,17c0,9.3,7.6,17,17,17s17-7.6,17-17C497.6,510,490,502.4,480.6,502.4z"></path><path fill="#b3bac9" d="M507.1,39h-54.1c-3.2,0-5.9-2.6-5.9-5.9v-0.4c0-3.2,2.6-5.9,5.9-5.9h54.1c3.2,0,5.9,2.6,5.9,5.9v0.4C512.9,36.4,510.3,39,507.1,39z M452.9,29.3c-1.9,0-3.5,1.5-3.5,3.5v0.4c0,1.9,1.5,3.5,3.5,3.5h54.1c1.9,0,3.5-1.6,3.5-3.5v-0.4c0-1.9-1.5-3.5-3.5-3.5H452.9z"></path></g></svg>';

  static deviceWrapperStyles = {
    width: '50%'
  };

  render() {
    const { image, deviceColor } = this.props;
    return (
      <div className={`frame-content iphone  --${deviceColor}`}>
        <img className={''} src={image} />
      </div>
    );
  }
}

const devices = {
  browser: BrowserContentFrame,
  ipad: IpadContentFrame,
  ipython: IpythonContentFrame,
  desktop: DesktopContentFrame,
  iphone: IphoneContentFrame
};
