import React from 'react';
import {images} from 'config/constants';
import Img from './img';
import shortid from 'shortid';

export default class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;

    let aspectRatio, imageParams, image, style;

    let background = false;
    let position = '';

    if (this.props.background) {
      background = true;
      position = this.props.position;
    }

    if (this.props.size) {
      const aspectRatio = (this.props.size.h / this.props.size.w) * 100;
      imageParams = {
        ar: aspectRatio + '%',
        preview:
          '?w=' +
          Math.floor(this.props.size.w / images.preview.scale) +
          '&h=' +
          Math.floor(this.props.size.h / images.preview.scale) +
          '&fit=crop&crop=' +
          this.props.size.crop +
          '&blur=' +
          images.preview.blur +
          '&q=' +
          images.preview.quality +
          '&auto=format',
        hq:
          '?w=' +
          Math.round(this.props.size.w * images.hq.scale) +
          '&h=' +
          Math.round(this.props.size.h * images.hq.scale) +
          '&fit=crop&crop=' +
          this.props.size.crop +
          '&q=' +
          images.hq.quality +
          '&auto=format',
      };
      style = {
        height: '0',
        paddingBottom: imageParams.ar,
      };
      image = (
        <Img
          background={background}
          position={position}
          attachment={this.props.attachment}
          data={data}
          imageParams={imageParams}
          styles={style}
        />
      );
    } else {
      aspectRatio = (data.dimensions.height / data.dimensions.width) * 100;
      imageParams = {
        preview:
          '?w=' +
          Math.floor(data.dimensions.width / images.preview.scale) +
          '&h=' +
          Math.floor(data.dimensions.height / images.preview.scale) +
          '&fit=crop&blur=' +
          images.preview.blur +
          '&q=' +
          images.preview.quality +
          '&auto=format',
        hq:
          '?w=' +
          Math.round(data.dimensions.width * images.hq.scale) +
          '&h=' +
          Math.round(data.dimensions.height * images.hq.scale) +
          '&fit=crop&crop=top,left&q=' +
          images.hq.quality +
          '&auto=format',
      };
      style = {
        height: '0',
        paddingBottom: Math.floor(aspectRatio) + '%',
      };
      image = (
        <Img
          key={shortid.generate()}
          background={background}
          position={position}
          attachment={this.props.attachment}
          data={data}
          imageParams={imageParams}
          styles={style}
          noBlur={this.props.noBlur}
        />
      );
    }

    return image;
  }
}
