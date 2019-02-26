import React from 'react';
import {Hero, HeroTop, HeroMessaging, HeroTitle, HeroActions} from 'components/hero';
import GithubStarsRepeatable from 'components/prismic/slices/github-stars-repeatable';
import Buttons from 'components/buttons';
import Link from 'next/link';

const HeroButtons = [
  [
    {
      label: 'Get Started',
      subtitle: null,
      title: '',
      icon: null,
      target: '_blank',
      link: '/dash',
      button: {
        classes: 'button button-primary button-white',
      },
    },
    {
      label: 'Read the Announcement',
      subtitle: null,
      title: '',
      icon: null,
      target: '_blank',
      link: 'https://medium.com/@plotlygraphs/introducing-dash-5ecf7191b503',
      button: {
        classes: 'button button-secondary',
      },
    },
  ],
  [],
];

export default class HeroSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Hero className="no-dots dash-hero align-left split-half">
        <HeroTop>
          <HeroMessaging>
            <HeroTitle>Build beautiful web-based interfaces in&nbsp;Python</HeroTitle>
            <h3>
              Dash is a Python framework for building analytical web applications. No JavaScript
              required.
            </h3>
            <p>
              Built on top of Plotly.js, React, and Flask, Dash ties modern UI elements like
              dropdowns, sliders, and graphs to your analytical Python code.
            </p>
            <HeroActions>
              <Buttons items={HeroButtons[0]} />
              <Buttons items={HeroButtons[1]} />
              <GithubStarsRepeatable
                start
                slice={{
                  items: [
                    {
                      repository_url: {url: 'https://github.com/plotly/dash'},
                      label: null,
                    },
                  ],
                }}
              />
            </HeroActions>
          </HeroMessaging>
          <div className="hero-graphic dash dash-graphic">
            <img
              src="https://images-plotly.imgix.net/static/marketing/dash/dash-hero-visual@2x.png?auto=compress&auto=format"
              alt=""
            />
          </div>
        </HeroTop>
      </Hero>
    );
  }
}
