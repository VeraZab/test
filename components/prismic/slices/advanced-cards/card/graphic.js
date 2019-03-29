import {images} from '../../../../../config/constants';

if (card.graphic && card.graphic.url) {
  const imageParams = {
    preview:
      '?w=' +
      Math.floor(card.graphic.dimensions.width / images.preview.scale) +
      '&h=' +
      Math.floor(card.graphic.dimensions.height / images.preview.scale) +
      '&fit=crop&blur=' +
      images.preview.blur +
      '&q=' +
      images.preview.quality +
      '&auto=format',
    hq:
      '?w=' +
      Math.round(card.graphic.dimensions.width * images.hq.scale) +
      '&h=' +
      Math.round(card.graphic.dimensions.height * images.hq.scale) +
      '&fit=crop&crop=top,left&q=' +
      images.hq.quality +
      '&auto=format',
  };
  let imageStyle = {
    backgroundImage: 'url(' + card.graphic.url + imageParams.hq + ')',
  };
}
