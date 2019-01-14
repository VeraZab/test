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

const HeroStyles = {};

export default class HeroSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Hero className="no-dots dash-hero align-left split-half" style={HeroStyles}>
        <div className="dash-header">
          <div className="dash-header-wrapper">
            <div className="dash-logo">
              <div className="dash-logo-wrapper">
                <Link
                  prefetch
                  href={{
                    pathname: '/prismic-generator',
                    query: {
                      slug: 'home',
                    },
                  }}
                  as="/"
                >
                  <a>
                    <img
                      src="https://images-plotly.imgix.net/static/marketing/dash/dash-logo.png?auto=compress&auto=format"
                      alt="Dash by Plotly"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="dash-navigation">
              <a href="/dash/pricing/" target="_blank" className="dash-navigation-item">
                Pricing
              </a>
              <a target="_blank" href="https://plot.ly/dash/" className="dash-navigation-item">
                User Guide
              </a>
              <a target="_self" href="/" className="dash-navigation-item">
                Plotly
              </a>
            </div>
          </div>
        </div>
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
