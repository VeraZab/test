import React from 'react';
import Browser from 'components/browser';
import GithubStarsRepeatable from 'components/prismic/slices/github-stars-repeatable';
import {renderPrismic} from 'lib/renderPrismicRichText';

const Hero = props => {
  return (
    <>
      {props.content.hero_title ? (
        <div
          className="hero"
          id={
            props.content.hero_title && props.content.hero_title.includes('Chart Studio')
              ? 'cs-hero'
              : null
          }
        >
          <div
            className="hero-left"
            id={
              props.content.hero_title && props.content.hero_title === 'Dash Licensing'
                ? 'dash-pricing'
                : 'null'
            }
          >
            <h1 className="hero-title">{props.content.hero_title}</h1>
            <h2 className="hero-subtitle">
              {props.content.hero_messaging[0] && renderPrismic(props.content.hero_messaging)}
            </h2>
            <div className="cta-buttons">
              {props.content.hero_buttons[0] && props.content.hero_buttons[0] ? (
                <a className="button button-primary" href={props.content.hero_buttons[0].link.url}>
                  <div className="button-label">{props.content.hero_buttons[0].label}</div>
                </a>
              ) : null}
              {props.content.hero_buttons[1] ? (
                <a
                  className="button button-secondary"
                  href={props.content.hero_buttons[1].link.url}
                >
                  <div className="button-label">{props.content.hero_buttons[1].label}</div>
                </a>
              ) : null}
            </div>
            <div className="github-stars">
              {props.content.keywords === 'home' ||
              props.content.keywords === 'dash-services' ||
              props.content.slug === 'dash-product' ? (
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
              ) : null}
              {props.content.keywords === 'plotly-py' ? (
                <GithubStarsRepeatable
                  start
                  slice={{
                    items: [
                      {
                        repository_url: {url: 'https://github.com/plotly/plotly.py'},
                        label: null,
                      },
                    ],
                  }}
                />
              ) : null}
              {props.content.keywords === 'plotly-r' ? (
                <GithubStarsRepeatable
                  start
                  slice={{
                    items: [
                      {
                        repository_url: {url: 'https://github.com/ropensci/plotly'},
                        label: null,
                      },
                    ],
                  }}
                />
              ) : null}
              {props.content.keywords === 'plotly-js' ? (
                <GithubStarsRepeatable
                  start
                  slice={{
                    items: [
                      {
                        repository_url: {url: 'https://github.com/plotly/plotly.js'},
                        label: null,
                      },
                    ],
                  }}
                />
              ) : null}
            </div>
          </div>
          {props.content.hero_graphic.url ? (
            <div className="hero-right">
              {props.content.hero_graphic_style &&
              props.content.hero_graphic_style === 'browser' ? (
                <Browser>
                  <img src={props.content.hero_graphic.url} />
                </Browser>
              ) : (
                <img src={props.content.hero_graphic.url} />
              )}
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default Hero;
