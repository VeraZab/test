import React from 'react';
import Image from 'components/prismic/Image';
import shortid from 'shortid';

export default class GraphicDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;

    let graphic,
      caption = null;

    let classes = 'content-section-p-graphic-item';

    if (this.props.className) {
      classes += ' ' + this.props.className;
    }
    if (data.graphic_blend_mode !== 'none') {
      classes += ' content-section-p-graphic-blend-mode--' + data.graphic_blend_mode;
    }
    classes += ' content-section-p-graphic-style--' + data.graphic_style;

    let img = <Image data={data.graphic} />;

    if (this.props.background) {
      if (data.graphic_background_position !== '') {
        img = (
          <Image
            background={true}
            position={data.graphic_background_position}
            attachment={data.graphic_background_attachment}
            data={data.graphic}
          />
        );
      } else {
        img = (
          <Image
            background={true}
            position={'center center'}
            attachment={data.graphic_background_attachment}
            data={data.graphic}
          />
        );
      }
    }
    if (data.graphic_link && data.graphic_link.url) {
      graphic = (
        <a key={shortid.generate()} href={data.graphic_link.url} target="_blank">
          {img}
        </a>
      );
    } else {
      graphic = img;
    }
    if (data.graphic_link_caption !== '') {
      if (data.graphic_link && data.graphic_link.url) {
        caption = (
          <a href={data.graphic_link.url} target="_blank">
            {data.graphic_link_caption}
          </a>
        );
      } else {
        caption = data.graphic_link_caption;
      }
    }
    return (
      <div className={classes}>
        {graphic}
        {caption}
      </div>
    );
  }
}
