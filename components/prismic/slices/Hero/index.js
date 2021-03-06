import Browser from 'components/browser';
import {renderPrismic} from 'lib/renderPrismicRichText';

const Hero = props => {
  const renderLogos = () => (
    <div className="hero-logos">
      {props.content.hero_logos.map((logo, index) => {
        return <img className="hero-logo-item" src={logo.client_logo.url} key={index} />;
      })}
    </div>
  );

  const renderSiteHero = () => {
    return (
      <div id={props.content.keywords === 'privacy-policy' ? 'privacy-policy-bg' : ''}>
        {props.content.promo_banner && props.content.promo_banner.length > 0 && (
          <div className="promobanner">{renderPrismic(props.content.promo_banner)}</div>
        )}
        {props.content.hero_title || props.content.hero_rich_title ? (
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
            <div className="hero-top">
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
                    {props.content.hero_title
                      ? props.content.hero_title
                      : renderPrismic(props.content.hero_rich_title)}
                  </h1>
                  <div
                    className="hero-subtitle"
                    id={
                      props.content.keywords === 'privacy-policy' ? 'privacy-policy-subtitle' : ''
                    }
                  >
                    {props.content.hero_rich_message &&
                      renderPrismic(props.content.hero_rich_message)}
                  </div>
                </div>

                {props.content.hero_buttons.some(b => b.link.url) ? (
                  <div className="cta-buttons">
                    {props.content.hero_buttons[0] && props.content.hero_buttons[0] ? (
                      <a
                        className="button button-primary"
                        href={props.content.hero_buttons[0].link.url}
                      >
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
                ) : null}
                {props.content.keywords === 'dash-product' && (
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
                )}
              </div>
              <div
                className="hero-right"
                style={props.content.keywords === 'privacy-policy' ? {display: 'none'} : {}}
              >
                {props.content.hero_graphic.url ? (
                  <div style={{minHeight: '450px', display: 'flex', alignItems: 'center'}}>
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
            </div>
            {props.content.keywords === 'home' ? renderLogos() : null}
          </div>
        ) : null}
      </div>
    );
  };

  const renderPardotHero = () => {
    return (
      <>
        {props.content.hero_title || props.content.hero_rich_title ? (
          <div className="hero">
            <a name="demoForm"></a>
            <div>
              <div className="hero-top">
                <div className="hero-left" style={{marginTop: '50px'}}>
                  <div className="hero-copy-container" style={{marginTop: '-50px'}}>
                    <h1
                      className="hero-title"
                      id={props.content.keywords === 'privacy-policy' ? 'privacy-policy-title' : ''}
                    >
                      {props.content.hero_title
                        ? props.content.hero_title
                        : renderPrismic(props.content.hero_rich_title)}
                    </h1>
                    <div
                      className="hero-subtitle"
                      id={
                        props.content.keywords === 'privacy-policy' ? 'privacy-policy-subtitle' : ''
                      }
                    >
                      {props.content.hero_rich_message &&
                        renderPrismic(props.content.hero_rich_message)}
                    </div>
                  </div>

                  {props.content.keywords === 'dash-product' && (
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
                  )}
                </div>
                <div
                  className="hero-right-pardot"
                  style={props.content.keywords === 'privacy-policy' ? {display: 'none'} : {}}
                >
                  <iframe
                    src={props.content.pardot_form_url_key}
                    width="300px"
                    height="500px"
                    type="text/html"
                    frameborder="0"
                    allowTransparency="true"
                  ></iframe>
                </div>
              </div>
              {props.content.keywords === 'home' ? renderLogos() : null}
            </div>
          </div>
        ) : null}
      </>
    );
  };

  return (
    <div
      className="hero-container"
      id={props.content.keywords === 'privacy-policy' ? 'privacy-policy-bg' : ''}
    >
      {props.content.pardot_form_url_key ? renderPardotHero() : renderSiteHero()}
    </div>
  );
};

export default Hero;
