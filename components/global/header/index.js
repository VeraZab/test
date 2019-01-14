import React from 'react';
import Link from 'next/link';
import NProgress from 'nprogress';
import Router from 'next/router';
import Navigation from './navigation';

import shortid from 'shortid';

Router.onRouteChangeStart = url => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => NProgress.done();

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = 'site-header site-header-style--product';

    let logo = (
      <img
        src="https://tamarack-prismic.imgix.net/plotly/eb464d43-4ab4-427e-b617-482b62ba6c69_plotly-logo-white.png?w=300&auto=format"
        alt="Plotly"
      />
    );

    if (this.props.document && this.props.document.data.alt_logo) {
      classes += ' ' + this.props.document.data.hero_background_style;
      logo = <img src={this.props.document.data.alt_logo.url} alt="Plotly" />;
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
