import React from 'react';
import Hero from 'components/prismic/slices/Hero';

const HeroSection = () => {
  const buttons = [
    {label: 'Request Enterprise Trial', link: {url: 'https://plotly.typeform.com/to/rkO85m'}},
    {
      label: 'Start With Open Source',
      link: {url: 'https://dash.plot.ly/installation'},
    },
  ];
  const data = {
    slug: 'dash-product',
    hero_title: 'Build Beautiful Web-based Interfaces in Python',
    hero_messaging: [
      {
        type: 'paragraph',
        text: `Dash is a Python framework for building analytical web applications.

          No JavaScript required.`,
      },
    ],
    hero_buttons: buttons,
    hero_graphic: {
      url:
        'https://plotly.cdn.prismic.io/plotly/55bd9c53223dcbbce02b17f7bc2bf5be12741b48_dash-hero-visual2x.png',
    },
  };
  return <Hero content={data} />;
};

export default HeroSection;
