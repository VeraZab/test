import React from 'react';
import Link from 'next/link';
import Navigation from './navigation';
import shortid from 'shortid';

class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    let classes = 'site-header site-header-style--product';

    let logo = (
      <img
        style={{maxWidth: '180px'}}
        src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/assets/logo.png"
        alt="Plotly"
      />
    );

    if (this.props.document && this.props.document.data.alt_logo.url) {
      classes += ' ' + this.props.document.data.hero_background_style;
      logo = (
        <img style={{maxWidth: '180px'}} src={this.props.document.data.alt_logo.url} alt="Plotly" />
      );
    }

    if (this.props.logo) {
      logo = <img style={{paddingTop: '20px'}} src={this.props.logo} alt="Plotly" />;
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
