import React from 'react';
import Image from 'components/prismic/Image';

const ImageSectionSlice = ({ ...props }) => <Image data={props.primary.img} />;

export { ImageSectionSlice };
