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
  hero_messaging: [
    {
      type: 'paragraph',
      text: `Modern visualization for the data era.`,
    },
  ],
  hero_buttons: buttons,
  hero_graphic: {
    url:
      'https://plotly.cdn.prismic.io/plotly/2b5e954984847d1addd810ba0c48e084b7a504cc_cs-ent-hero.png',
  },
};

export default () => (
  <div className="cs-product-hero">
    <Hero content={data} />
  </div>
);
