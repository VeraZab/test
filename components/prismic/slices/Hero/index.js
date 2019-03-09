import React from 'react';
import Browser from 'components/browser';
import GithubStarsRepeatable from 'components/prismic/slices/github-stars-repeatable';

const Hero = props => {
  return (
    <>
      {props.content.data.hero_title ? (
        <div
          className="newHero"
          id={
            props.content.data.hero_title && props.content.data.hero_title.includes('Chart Studio')
              ? 'cs-hero'
              : null
          }
        >
          <div
            className="newHero-left"
            id={
              props.content.data.hero_title && props.content.data.hero_title === 'Dash Licensing'
                ? 'dash-pricing'
                : 'null'
            }
          >
            <h1 className="title-m">{props.content.data.hero_title}</h1>
            <h2>{props.content.data.hero_messaging[0] && props.content.data.hero_messaging[0].text}</h2>
            <div className="buttons">
              {props.content.data.hero_buttons[0] && props.content.data.hero_buttons[0] ? (
                <a
                  className=" button button-primary"
                  href={props.content.data.hero_buttons[0].link.url}
                >
                  <div className="button-label">{props.content.data.hero_buttons[0].label}</div>
                </a>
              ) : null}
              {props.content.data.hero_buttons[1] ? (
                <a
                  className=" button button-secondary"
                  href={props.content.data.hero_buttons[1].link.url}
                >
                  <div className="button-label">{props.content.data.hero_buttons[1].label}</div>
                </a>
              ) : null}
            </div>
            {props.content.data.hero_messaging[0] &&
            props.content.data.hero_messaging[0].text.includes('Dash') ? (
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
            {props.content.data.hero_messaging[0] &&
            props.content.data.hero_messaging[0].text.includes('D3 and WebGL charts in Python') ? (
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
            {props.content.data.hero_messaging[0] &&
            props.content.data.hero_messaging[0].text.includes('D3 and WebGL charts in R') ? (
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
            {props.content.data.hero_messaging[0] &&
            props.content.data.hero_messaging[0].text.includes(
              'sophisticated, interactive charts in JavaScript'
            ) ? (
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
          {props.content.data.hero_graphic.url ? (
            <div className="newHero-right">
              {props.content.data.hero_graphic_style &&
              props.content.data.hero_graphic_style === 'browser' ? (
                <Browser>
                  <img src={props.content.data.hero_graphic.url} />
                </Browser>
              ) : (
                <img src={props.content.data.hero_graphic.url} />
              )}
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default Hero;
