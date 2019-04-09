import {renderPrismic} from 'lib/renderPrismicRichText';
import GithubStarsRepeatable from 'components/prismic/slices/github-stars-repeatable';

const OpenSource = props => {
  return (
    <div className="os">
      <div className="os-left-container">
        <div className="os-left">
          {props.data.primary.os_title && (
            <h1 className="hero-title">{props.data.primary.os_title}</h1>
          )}
          {props.data.primary.os_messaging && (
            <span className="os-messaging">{renderPrismic(props.data.primary.os_messaging)}</span>
          )}
          {props.data.primary.os_url && props.data.primary.os_label && (
            <>
              <div className="cta-buttons">
                <a className="button button-primary" href={props.data.primary.os_url.url}>
                  <div className="button-label">{props.data.primary.os_label}</div>
                </a>
              </div>
              <div className="os-gh-stars">
                <div className="dash-stars">
                  <GithubStarsRepeatable
                    start
                    slice={{
                      items: [
                        {
                          repository_url: {url: 'https://github.com/plotly/dash'},
                          label: 'DASH',
                        },
                      ],
                    }}
                  />
                </div>
                <div className="ploltyjs-stars">
                  <GithubStarsRepeatable
                    start
                    slice={{
                      items: [
                        {
                          repository_url: {url: 'https://github.com/plotly/plotly.js'},
                          label: 'PLOTLY.JS',
                        },
                      ],
                    }}
                  />
                </div>
                <div className="ploltypy-stars">
                  <GithubStarsRepeatable
                    start
                    slice={{
                      items: [
                        {
                          repository_url: {url: 'https://github.com/plotly/plotly.py'},
                          label: 'PLOTLY.PY',
                        },
                      ],
                    }}
                  />
                </div>
                <div className="ploltyjs-stars">
                  <GithubStarsRepeatable
                    start
                    slice={{
                      items: [
                        {
                          repository_url: {url: 'https://github.com/ropensci/plotly/'},
                          label: 'PLOTLY.R',
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="os-right-container">
        <div className="os-right">
          <h1 className="os-logo-title">{props.data.primary.os_logo_title}</h1>
          <span className="os-subtitle">
            {props.data.primary.os_subtitle && renderPrismic(props.data.primary.os_subtitle)}
          </span>
          <div className="logo-container">
            <div className="container-left">
              <img className="left-logo" src={props.data.items[0].os_logo.url} />
              <img className="left-logo" src={props.data.items[1].os_logo.url} />
              <img className="left-logo" src={props.data.items[2].os_logo.url} />
              <img className="left-logo" src={props.data.items[3].os_logo.url} />
              <img className="left-logo" src={props.data.items[4].os_logo.url} />
              <img className="left-logo" src={props.data.items[5].os_logo.url} />
              <img className="left-logo" src={props.data.items[6].os_logo.url} />
              <img className="left-logo" src={props.data.items[7].os_logo.url} />
              <img className="left-logo" src={props.data.items[8].os_logo.url} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
