import React from 'react';
import Link from 'next/link';
import Navigation from './navigation';
import shortid from 'shortid';

const dashLogo =
  'https://prismic-io.s3.amazonaws.com/plotly%2Fb2e12ce8-4091-454e-9486-4999f5a59bc0_dash-logo-large.png';
const dashLogoPrismic =
  'https://plotly.cdn.prismic.io/plotly/2ec32adb49fa1a87c422b2e6b24d6c4beffad18d_dash-logo-large.png';
const chartStudioLogo =
  'https://plotly.cdn.prismic.io/plotly/3258f4ec3a8868ea78956d0a0e6f4d4343768766_chart-studio-logo.png';
const plotlyLogo =
  'https://plotly.cdn.prismic.io/plotly/9963abe714d6794fa6189806ff82cbe442378600_plotly-logo-white.png';
const falconLogo = 'https://plotly.cdn.prismic.io/plotly%2Fc83c305c-b2b3-47c0-a2a5-28a4c969af41_download.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = 'site-header site-header-style--product';

    let logo = '';

    if (this.props.document && this.props.document.data.alt_logo.url) {
      console.log(this.props.document.data.alt_logo.url);
      classes += ' ' + this.props.document.data.hero_background_style;
      if (
        this.props.document.data.alt_logo.url == dashLogo ||
        this.props.document.data.alt_logo.url == dashLogoPrismic
      ) {
        logo = <img id="dash-logo" src={this.props.document.data.alt_logo.url} alt="Plotly" />;
      }

      if (this.props.document.data.alt_logo.url == chartStudioLogo) {
        logo = (
          <img id="chart-studio-logo" src={this.props.document.data.alt_logo.url} alt="Plotly" />
        );
      }

      if (this.props.document.data.alt_logo.url == falconLogo) {
        logo = (
          <img id="chart-studio-logo" src={this.props.document.data.alt_logo.url} alt="Plotly" />
        );
      }

      if (this.props.document.data.alt_logo.url == plotlyLogo) {
        logo = <img id="plotly-logo" src={this.props.document.data.alt_logo.url} alt="Plotly" />;
      }
    }

    if (this.props.logo) {
      logo = <img id="plotly-logo" src={this.props.logo} alt="Plotly" />;
    }

    return [
      <header id="site-header" className={classes} key={shortid.generate()}>
        <div className="site-header-wrapper">
          <div className="site-header--section-left">
            <div className="site-header-logo">
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
                <a>{logo}</a>
              </Link>
            </div>
          </div>
          <div className="site-header--section-right">
            <Navigation pathname={this.props.pathname} />
          </div>
        </div>
      </header>,
    ];
  }
}

export default Header;
