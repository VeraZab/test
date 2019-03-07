import React from 'react';
import Hero from 'components/prismic/slices/Hero';

export default class HeroSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const buttons = [
      {label: 'Request Enterprise Trial', link: {url: 'https://plot.ly/dash'}},
      {
        label: 'Start With Open Source',
        link: {url: 'https://medium.com/@plotlygraphs/introducing-dash-5ecf7191b503'},
      },
    ];
    const data = {
      data: {
        hero_title: 'Build beautiful web-based interfaces in Python',
        hero_messaging: [
          {
            text:
              'Dash is a Python framework for building analytical web applications. No JavaScript required.',
          },
        ],
        hero_buttons: buttons,
        hero_graphic: {
          url:
            'https://images-plotly.imgix.net/static/marketing/dash/dash-hero-visual@2x.png?auto=compress&auto=format',
        },
      },
    };

    return (
      <>
        <Hero data={data} />
      </>
    );
  }
}
