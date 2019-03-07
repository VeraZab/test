import React from 'react';
import Browser from 'components/browser';
import GithubStarsRepeatable from 'components/prismic/slices/github-stars-repeatable';

const Hero = props => {
  return (
    <>
      {props.data.data.hero_title ? (
        <div
          className="newHero"
          id={
            props.data.data.hero_title && props.data.data.hero_title.includes('Chart Studio')
              ? 'cs-hero'
              : null
          }
        >
          <div
            className="newHero-left"
            id={
              props.data.data.hero_title && props.data.data.hero_title === 'Dash Licensing'
                ? 'dash-pricing'
                : 'null'
            }
          >
            <h1 className="title-xl">{props.data.data.hero_title}</h1>
            <h2>{props.data.data.hero_messaging[0] && props.data.data.hero_messaging[0].text}</h2>
            <div className="buttons">
              {props.data.data.hero_buttons[0] && props.data.data.hero_buttons[0] ? (
                <a
                  className=" button button-primary"
                  href={props.data.data.hero_buttons[0].link.url}
                >
                  <div className="button-label">{props.data.data.hero_buttons[0].label}</div>
                </a>
              ) : null}
              {props.data.data.hero_buttons[1] ? (
                <a
                  className=" button button-secondary"
                  href={props.data.data.hero_buttons[1].link.url}
                >
                  <div className="button-label">{props.data.data.hero_buttons[1].label}</div>
                </a>
              ) : null}
            </div>
            {props.data.data.hero_messaging[0] &&
            props.data.data.hero_messaging[0].text.includes('Dash') ? (
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
          </div>
          {props.data.data.hero_graphic.url ? (
            <div className="newHero-right">
              {props.data.data.hero_graphic_style &&
              props.data.data.hero_graphic_style === 'browser' ? (
                <Browser>
                  <img src={props.data.data.hero_graphic.url} />
                </Browser>
              ) : (
                <img src={props.data.data.hero_graphic.url} />
              )}
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default Hero;
