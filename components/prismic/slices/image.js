import React from 'react';
import Image from 'components/prismic/Image';

export default function ImageSlice({data}) {
  const img = data && data.primary && data.primary.img;
  return img ? <Image data={img} /> : null;
}
