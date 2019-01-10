import React from 'react';
import Image from 'components/prismic/Image';

export default function ImageSlice({primary: img}) {
  return <Image data={img} />;
}
