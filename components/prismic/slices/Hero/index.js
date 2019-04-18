import Browser from 'components/browser';
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
            style={props.content.hero_graphic.url ? {} : {paddingLeft: '36px'}}
          >
            <h1 className="hero-title">{props.content.hero_title}</h1>
            <div className="hero-subtitle">
              {props.content.hero_rich_message && renderPrismic(props.content.hero_rich_message)}
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
          </div>
          <div className="hero-right">
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
    </>
  );
};

export default Hero;
