import React from 'react';
import Hero from 'components/prismic/slices/Hero';

const buttons = [
  {label: 'Request Enterprise Trial', link: {url: 'https://plotly.typeform.com/to/seG7Vb'}},
  {
    label: 'Try Online Demo',
    link: {url: 'https://plot.ly/create'},
  },
];
const data = {
  slug: 'dash-product',
  hero_title: 'Chart Studio Cloud',
  hero_rich_message: [
    {
      type: 'paragraph',
      text: `Modern visualization for the data era.`,
    },
  ],
  hero_buttons: buttons,
  hero_graphic: {
    url:
      'https://prismic-io.s3.amazonaws.com/plotly%2F9b1795ba-d52d-4547-abef-528a5019e821_chart_studio_asset-01.png',
  },
};

export default () => (
  <div className="cs-product-hero">
    <Hero content={data} />
  </div>
);
