import PropTypes from 'prop-types';
import React from 'react';
import inPercy from '@percy-io/in-percy';
export class DeviceWrapper extends React.Component {
  render() {
    const { content } = this.props,
      device = devices[content.device],
      contentFrame = (
        <ContentFrame
          image={content.image}
          videoSources={content.sources}
          color={content.color}
          contentType={content.type}
          device={content.device}
        />
      );

    if (!device) return contentFrame;

    return (
      <div className={'device-wrapper'} style={device.styles}>
        <div
          className={`device-svg framecolor-${content.color} backgroundcolor-${
            content.background
          }`}
          data-device-type={content.device}
          dangerouslySetInnerHTML={{ __html: device.svg }}
        />
        {contentFrame}
      </div>
    );
  }
}

DeviceWrapper.propTypes = {
  content: PropTypes.object,
};

class ContentFrame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percy: false,
    };
  }
  componentDidMount() {
    const percy = inPercy();

    if (percy) {
      this.setState({
        percy: true,
      });
    }
  }
  render() {
    const { image, videoSources, contentType, color, device } = this.props;
    const { percy } = this.state;
    const autoplay = percy
      ? null
      : {
          autoPlay: 'autoplay',
        };
    let content =
      contentType === 'video' ? (
        <div className="video-wrapper">
          <video
            id="editor-video"
            preload="auto"
            loop="true"
            className="device-content"
            style={{ width: '100%' }}
            {...autoplay}
          >
            <source src={videoSources[0]} type="video/mp4" />
            <source src={videoSources[1]} type="video/webm" />
            <img src={videoSources[2]} />
          </video>
        </div>
      ) : (
        <img src={image} />
      );

    if (!device) return content;

    return (
      <div className={`frame-content ${device} frame --${color}`}>
        {content}
      </div>
    );
  }
}

const devices = {
  browser: {
    styles: {
      width: '115%',
      right: '10%',
    },
    svg:
      '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="79.2 0 801.5 560" enable-background="new 79.2 0 801.5 560" xml:space="preserve"><g/><g><path d="M868.7,72.8H91.3H79.2V60.7V31.5V12.1C79.2,5.4,84.6,0,91.3,0h777.3c6.7,0,12.1,5.4,12.1,12.1v19.4v29.1v12.1h-12V72.8z M878.4,60.7V51V12.1c0-5.4-4.4-9.7-9.7-9.7H91.3c-5.4,0-9.7,4.4-9.7,9.7V51v9.7v9.7h9.7h777.3h9.7v-9.7H878.4z"></path><path d="M117.9,46.1c-5.2,0-9.5-4.3-9.5-9.7s4.3-9.7,9.5-9.7c5.2,0,9.5,4.3,9.5,9.7S123.1,46.1,117.9,46.1zM117.9,28.6c-4.2,0-7.6,3.5-7.6,7.8s3.4,7.8,7.6,7.8c4.2,0,7.6-3.5,7.6-7.8S122.1,28.6,117.9,28.6z"></path><path d="M152.1,46.1c-5.2,0-9.5-4.3-9.5-9.7s4.3-9.7,9.5-9.7c5.2,0,9.5,4.3,9.5,9.7S157.3,46.1,152.1,46.1zM152.1,28.6c-4.2,0-7.6,3.5-7.6,7.8s3.4,7.8,7.6,7.8c4.2,0,7.6-3.5,7.6-7.8S156.3,28.6,152.1,28.6z"></path><path d="M186.3,46.1c-5.2,0-9.5-4.3-9.5-9.7s4.3-9.7,9.5-9.7c5.2,0,9.5,4.3,9.5,9.7S191.5,46.1,186.3,46.1zM186.3,28.6c-4.2,0-7.6,3.5-7.6,7.8s3.4,7.8,7.6,7.8c4.2,0,7.6-3.5,7.6-7.8S190.5,28.6,186.3,28.6z"></path><path d="M81.6,70.4v476c0,5.4,4.4,9.7,9.7,9.7h777.3c5.4,0,9.7-4.3,9.7-9.7v-476h2.4v476c0,6.7-5.4,12.1-12.1,12.1H91.3c-6.7,0-12.1-5.4-12.1-12.1v-476L81.6,70.4L81.6,70.4z"></path><pathstroke="#dcdddd" stroke-width="1.5" stroke-miterlimit="10" d="M229.8,14.5h631.6c2.7,0,4.9,2.2,4.9,4.9v34c0,2.7-4.6,4.9-7.3,4.9H229.8c-2.7,0-4.9-2.2-4.9-4.9v-34C225,16.7,227.1,14.5,229.8,14.5z"></path></g></svg>',
  },
  ipad: {
    styles: {
      width: '65%',
      position: 'absolute',
      bottom: '0',
      zIndex: '10',
      maxWidth: '500px',
    },
    svg:
      '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="253.1 0 706.9 560" enable-background="new 253.1 0 706.9 560" xml:space="preserve"><g/><g><path d="M958,528.5V32.6c0-17.5-14-31.5-31.5-31.5H284.6c-17.5,0-31.5,14.3-31.5,31.5v495.9c0,17.5,14,31.5,31.5,31.5h641.8C943.9,560,958,546,958,528.5z M256.2,32.6c0-15.6,12.8-28.5,28.5-28.5h641.8c15.6,0,28.5,12.8,28.5,28.5v495.9c0,15.6-12.8,28.5-28.5,28.5H284.6c-15.6,0-28.5-12.8-28.5-28.5V32.6H256.2z"></path><path d="M295.8,280.1c0-5-4.1-9.1-9.1-9.1c-5,0-9.1,4.1-9.1,9.1s4.1,9.1,9.1,9.1C291.8,289.1,295.8,285.1,295.8,280.1z M280.7,280.1c0-3.4,2.6-6,6-6c3.4,0,6,2.6,6,6c0,3.4-2.6,6-6,6C283.4,286.1,280.7,283.5,280.7,280.1z"></path><path d="M945,279.5c0-10.2-8.3-18.5-18.5-18.5c-10.2,0-18.5,8.3-18.5,18.5s8.3,18.5,18.5,18.5C936.7,298,945,289.9,945,279.5z M911,279.5c0-8.6,7-15.5,15.5-15.5c8.6,0,15.5,7,15.5,15.5c0,8.6-7,15.5-15.5,15.5C918,295.2,911,288,911,279.5z"></path></g></svg>',
  },
  ipython: {
    styles: {
      width: '100%',
      right: '8%',
      maxWidth: '700px',
      minWidth: '600px',
      boxSizing: 'border-box',
    },
    svg:
      '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="78.1 0 803.7 560" enable-background="new 78.1 0 803.7 560" xml:space="preserve"><g/><g><path d="M869.7,0H90.3c-6.7,0-12.2,5.4-12.2,12.2v19.4v29.3v12.2h12.2h779.3h12.2V60.9V31.6V12.2C881.9,5.4,876.4,0,869.7,0z M879.4,51.1v9.9v9.7h-9.7H90.3h-9.7v-9.7v-9.7v-39c0-5.3,4.4-9.7,9.7-9.7h779.3c5.4,0,9.7,4.4,9.7,9.7L879.4,51.1L879.4,51.1z"></path><path d="M879.4,70.6v477.2c0,5.3-4.4,9.7-9.7,9.7H90.3c-5.4,0-9.7-4.4-9.7-9.7V70.6h-2.5v477.2c0,6.7,5.4,12.2,12.2,12.2h779.3c6.7,0,12.2-5.4,12.2-12.2V70.6H879.4z"></path><path d="M148.7,20.2c-6.1-0.4-11.3,0-11.3,0v31.5h4V39.5l7.5-0.3c6.1-0.4,8.2-6,8.2-9.6C157.1,25.9,154.8,20.6,148.7,20.2z M148,36.2c-1.7,0-6.6,0-6.6,0V23.7c0,0,3.8,0.1,6.7,0c1.6,0,4.8,1.8,4.8,6.2C152.8,34.4,149.7,36.2,148,36.2z"></path><path d="M128.3,23.1h-16.5v-2.9h16.5V23.1z"></path><path d="M128.3,51.7h-16.5v-2.6h16.5V51.7z"></path><path d="M122.1,49.5h-4.1v-27h4.1V49.5z"></path><path d="M172.3,26.2v-2.6h-5.1h-2.7l0,0v27.9l0,0h2.7h5.1v-2.6h-5.1V26.2H172.3z"></path><path d="M191.3,26.2v-2.6h5.1h2.7l0,0v27.9l0,0h-2.7h-5.1v-2.6h5.1V26.2H191.3z"></path><path d="M178.5,29.8l3.5,9.5c0.4,1,0.8,2.3,1,3.2l0,0c0.3-0.9,0.6-2.2,1-3.4l3.1-9.3h3.1L186,41.2c-2.1,5.4-3,8.2-4.9,10c-1,0.9-4.5,0.6-5.3,0.6v-2.1c0.8-0.1,3.2,0.1,4-0.5c1.7-1.4,1.7-3.8,1.7-3.9s-0.1-0.4-0.3-0.8l-6-14.8H178.5z"></path><path d="M209.5,30.9c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3c0-1.3,1-2.3,2.3-2.3C208.6,28.5,209.5,29.6,209.5,30.9z"></path><path d="M209.5,44.7c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3c0-1.3,1-2.3,2.3-2.3C208.6,42.4,209.5,43.4,209.5,44.7z"></path><path d="M611.3,14.6c2.7,0,4.9,2.2,4.9,4.9v34.1c0,2.7-2.2,4.9-4.9,4.9h-34.1c-2.7,0-4.9-2.2-4.9-4.9V19.4c0-2.7,2.2-4.9,4.9-4.9h34.1 M611.3,12.2h-34.1c-4,0-7.3,3.2-7.3,7.3v34.1c0,4,3.2,7.3,7.3,7.3h34.1c4,0,7.3-3.2,7.3-7.3V19.4C618.6,15.4,615.3,12.2,611.3,12.2L611.3,12.2z"></path><path d="M694,14.6v43.8h-38.9c-2.7,0-4.9-2.2-4.9-4.9V19.4c0-2.7,2.2-4.9,4.9-4.9H694 M696.5,12.2h-41.4c-4,0-7.3,3.2-7.3,7.3v34.1c0,4,3.2,7.3,7.3,7.3h41.4C696.5,48.7,696.5,20.5,696.5,12.2L696.5,12.2z"></path><path d="M735.4,14.6c2.7,0,4.9,2.2,4.9,4.9v34.1c0,2.7-2.2,4.9-4.9,4.9h-38.9V14.6H735.4 M735.4,12.2H694c0,8.4,0,36.6,0,48.7h41.4c4,0,7.3-3.2,7.3-7.3V19.4C742.6,15.4,739.4,12.2,735.4,12.2L735.4,12.2z"></path><path d="M818.1,14.6v43.8h-38.9c-2.7,0-4.9-2.2-4.9-4.9V19.4c0-2.7,2.2-4.9,4.9-4.9h38.9 M820.4,12.2h-41.4c-4,0-7.3,3.2-7.3,7.3v34.1c0,4,3.2,7.3,7.3,7.3h41.4C820.4,48.7,820.4,20.5,820.4,12.2L820.4,12.2z"></path><path d="M859.3,14.6c2.7,0,4.9,2.2,4.9,4.9v34.1c0,2.7-2.2,4.9-4.9,4.9h-38.9V14.6H859.3 M859.3,12.2h-41.4c0,8.4,0,36.6,0,48.7h41.4c4,0,7.3-3.2,7.3-7.3V19.4C866.7,15.4,863.4,12.2,859.3,12.2L859.3,12.2z"></path></g></svg>',
  },
  desktop: {
    styles: {
      width: '100%',
      right: '10%',
    },
    svg:
      '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="133.4 0 693.2 560" enable-background="new 133.4 0 693.2 560" xml:space="preserve"><g/><g><path d="M826.6,414.5H133.4v-2.4h693.2V414.5z"></path><path d="M807.5,480.3h-655c-10.6,0-19.1-8.6-19.1-19.2v-442C133.4,8.6,142,0,152.5,0h654.9c10.6,0,19.2,8.6,19.2,19.1v442C826.6,471.7,818,480.3,807.5,480.3z M152.5,2.4c-9.3,0-16.8,7.5-16.8,16.8v442c0,9.3,7.5,16.8,16.8,16.8h654.9c9.3,0,16.8-7.5,16.8-16.8v-442c0-9.3-7.5-16.8-16.8-16.8C807.4,2.4,152.5,2.4,152.5,2.4z"></path><path d="M557.3,480.3c3.1,34.2,4.9,47.3,7.1,50.2c1.7,2.1,6.2,5.3,13.6,10.4c5.3,3.6,14.2,9.8,15.6,11.9c-0.3,3-5.4,4.1-8.6,4.5c-1.1,0.1-9.7,0.4-55.2,0.4c-13.7,0-29.5,0-46.9-0.1c-23,0.1-40.3,0.1-54.8,0.1c-37.1,0-46.1-0.2-47.3-0.3c-3.2-0.4-8.3-1.6-8.6-4.6c1.3-2.1,10.2-8.3,15.6-11.9c7.4-5.1,11.9-8.3,13.6-10.4c2.2-2.8,4-15.9,7.1-50.1L557.3,480.3 M559.5,478H406.1c-1.3,14.4-4.1,47.6-6.8,51c-3.6,4.5-29.7,19.7-29.7,23.6c0,4.1,4.1,6.5,10.6,7.3c2.1,0.3,21.7,0.4,47.6,0.4c16.7,0,35.9,0,54.8-0.1c16,0,32.2,0.1,46.9,0.1c29.8,0,53.2-0.1,55.5-0.4c6.5-0.9,10.7-3.1,10.6-7.2c0-3.7-26-18.9-29.7-23.5C563.6,525.6,560.8,492.3,559.5,478L559.5,478z"></path></g></svg>',
  },
  laptop: {
    styles: {
      width: '120%',
      maxWidth: '800px',
      minWidth: '600px',
    },
    svg:
      '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 960 560" enable-background="new 0 0 960 560" xml:space="preserve"><g/><g><path d="M866.3,508.9H91.1V18.7C91.1,8.4,100.6,0,112.4,0h735.3c11,0,18.7,7.7,18.7,18.7L866.3,508.9L866.3,508.9zM93.6,506.4h770.3V18.7c0-9.7-6.5-16.2-16.2-16.2H112.4c-9,0-18.7,6.2-18.7,16.2v487.7H93.6z"></path><path d="M956.2,522.5V540c0,8.4-5.8,17.5-14.9,17.5H21.2c-9,0-17.5-8.4-17.5-17.5v-17.5H956.2 M958.8,520.1c-28.7,0-922.5,0-957.5,0v20c0,10.4,9.6,20,20,20h920.1c10.4,0,17.5-9.6,17.5-20L958.8,520.1L958.8,520.1z"></path></g></svg>',
  },
  iphone: {
    styles: {
      width: '50%',
      width: '65%',
      position: 'absolute',
      bottom: '0',
      zIndex: 10,
      maxWidth: '200px',
      left: '4%',
      bottom: '10%',
    },
    svg:
      '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="344.6 0 270.8 560" enable-background="new 344.6 0 270.8 560" xml:space="preserve"><g><path d="M347,37.8v484.3c0,19.4,15.8,35.4,35.4,35.4h195.2c19.4,0,35.4-15.8,35.4-35.4V37.8c0-19.4-15.8-35.4-35.4-35.4H382.3v0.1C362.8,2.6,347,18.4,347,37.8z"></path></g><g><path d="M577.6,560H382.4c-20.8,0-37.8-17.1-37.8-37.9V37.8c0-20.8,17-37.8,37.8-37.8h195.2c20.8,0,37.8,17,37.8,37.8v484.3C615.4,542.9,598.4,560,577.6,560z M382.4,2.5c-19.4,0-35.3,15.8-35.3,35.3v484.3c0,19.4,15.8,35.4,35.4,35.4h195.2c19.4,0,35.4-15.8,35.4-35.4V37.8c0-19.4-15.8-35.4-35.4-35.4H382.4V2.5z"></path><path d="M480.6,538.8c-10.7,0-19.3-8.7-19.3-19.3c0-10.7,8.7-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3S491.2,538.8,480.6,538.8z M480.6,502.4c-9.3,0-17,7.6-17,17c0,9.3,7.6,17,17,17s17-7.6,17-17C497.6,510,490,502.4,480.6,502.4z"></path><path d="M507.1,39h-54.1c-3.2,0-5.9-2.6-5.9-5.9v-0.4c0-3.2,2.6-5.9,5.9-5.9h54.1c3.2,0,5.9,2.6,5.9,5.9v0.4C512.9,36.4,510.3,39,507.1,39z M452.9,29.3c-1.9,0-3.5,1.5-3.5,3.5v0.4c0,1.9,1.5,3.5,3.5,3.5h54.1c1.9,0,3.5-1.6,3.5-3.5v-0.4c0-1.9-1.5-3.5-3.5-3.5H452.9z"></path></g></svg>',
  },
  'iphone-90': {
    styles: {
      left: '20%',
      width: '85%',
    },
    svg:
      '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="200 144.6 560 270.8" enable-background="new 200 144.6 560 270.8" xml:space="preserve"><g/><g><path d="M200,377.6V182.4c0-20.8,17.1-37.8,37.9-37.8h484.3c20.8,0,37.8,17,37.8,37.8v195.2c0,20.8-17,37.8-37.8,37.8H237.9C217.1,415.4,200,398.4,200,377.6z M757.5,182.4c0-19.4-15.8-35.3-35.3-35.3H237.9c-19.4,0-35.4,15.8-35.4,35.4v195.2c0,19.4,15.8,35.4,35.4,35.4h484.3c19.4,0,35.4-15.8,35.4-35.4V182.4H757.5z"></path><path d="M221.2,280.6c0-10.7,8.7-19.3,19.3-19.3c10.7,0,19.3,8.7,19.3,19.3c0,10.7-8.7,19.3-19.3,19.3C229.9,299.9,221.2,291.2,221.2,280.6z M257.6,280.6c0-9.3-7.6-17-17-17c-9.3,0-17,7.6-17,17s7.6,17,17,17C250,297.6,257.6,290,257.6,280.6z"></path><path d="M721,307.1v-54.1c0-3.2,2.6-5.9,5.9-5.9h0.4c3.2,0,5.9,2.6,5.9,5.9v54.1c0,3.2-2.6,5.9-5.9,5.9h-0.4C723.6,312.9,721,310.3,721,307.1z M730.7,252.9c0-1.9-1.5-3.5-3.5-3.5h-0.4c-1.9,0-3.5,1.5-3.5,3.5v54.1c0,1.9,1.6,3.5,3.5,3.5h0.4c1.9,0,3.5-1.5,3.5-3.5V252.9z"></path></g></svg>',
  },
  newspapper: {
    styles: {
      'max-width': '500px',
      width: '95%',
    },
    svg:
      '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="201.5 0 557.1 560" enable-background="new 201.5 0 557.1 560" xml:space="preserve"><g/><g><path d="M692.6,560H241.1v-2.7l1.2-0.1c18.6-2.1,33.2-28.1,33.2-59.2V0h483.1v492.4C758.5,529.7,728.9,560,692.6,560z M250.9,557.3h441.7c35,0,63.4-29.2,63.4-64.9V2.7H278.1V498C278.1,525.7,266.7,549.5,250.9,557.3z"></path><path d="M239.7,560L239.7,560c-21.1,0-38.3-27.8-38.3-62V74.6h76.6V498C278.1,532.2,260.8,560,239.7,560zM204.1,77.3V498c0,32.7,16,59.3,35.8,59.3l0,0c19.7,0,35.8-26.6,35.8-59.3V77.3H204.1z"></path><path d="M276.7,125.4h-38.9v-2.7h38.9V125.4z"></path><path d="M732.9,76H297.5v-2.7h435.3L732.9,76L732.9,76z"></path><path d="M237.8,505.4V124h2.6v381.3H237.8z"></path></g></svg>',
  },
  report: {
    styles: {
      width: '75%',
    },
    svg:
      '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="264.1 0 431.7 560" enable-background="new 264.1 0 431.7 560" xml:space="preserve"><g/><g><path d="M622.9,2.4v68.4v2.2h2.4h68v484.6H266.6V2.4H622.9 M625.3,0H264.1v560h431.7V70.6h-70.5V0L625.3,0z"></path><path d="M640.4,6.1l49.8,51.2h-49.8V6.1 M638,0v59.7h58.1L638,0L638,0z"></path></g></svg>',
  },
};
