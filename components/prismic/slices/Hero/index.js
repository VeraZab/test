import Browser from 'components/browser';
import {renderPrismic} from 'lib/renderPrismicRichText';

const Hero = props => {
  return (
    <div
      className="hero-container"
      id={props.content.keywords === 'privacy-policy' ? 'privacy-policy-bg' : ''}
    >
      {props.content.hero_title ? (
        <div
          className="hero"
          id={
            props.content.hero_title && props.content.hero_title.includes('Chart Studio')
              ? 'cs-hero'
              : null
          }
          style={
            props.content.keywords === 'privacy-policy'
              ? {width: '100%', margin: 'auto', paddingTop: '0'}
              : {}
          }
        >
          <div
            className="hero-left"
            id={
              props.content.hero_title && props.content.hero_title === 'Dash Licensing'
                ? 'dash-pricing'
                : props.content.keywords === 'privacy-policy'
                ? 'privacy-policy-hero'
                : ''
            }
          >
            <div className="hero-copy-container">
              <h1
                className="hero-title"
                id={props.content.keywords === 'privacy-policy' ? 'privacy-policy-title' : ''}
              >
                {props.content.hero_title}
              </h1>
              <div
                className="hero-subtitle"
                id={props.content.keywords === 'privacy-policy' ? 'privacy-policy-subtitle' : ''}
              >
                {props.content.hero_rich_message && renderPrismic(props.content.hero_rich_message)}
              </div>
            </div>

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
            <div className="dash-stars-wrapper">
              {props.content.keywords === 'dash-product' ? (
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=plotly&repo=dash&type=star&count=true&size=large"
                  frameBorder="0"
                  scrolling="0"
                  width="160px"
                  height="auto"
                />
              ) : null}
            </div>
          </div>
          <div
            className="hero-right"
            style={props.content.keywords === 'privacy-policy' ? {display: 'none'} : {}}
          >
            {props.content.hero_graphic.url ? (
              <>
                {props.content.hero_graphic_style &&
                props.content.hero_graphic_style === 'browser' ? (
                  <Browser>
                    <img src={props.content.hero_graphic.url} />
                  </Browser>
                ) : (
                  <img src={props.content.hero_graphic.url} />
                )}
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Hero;
