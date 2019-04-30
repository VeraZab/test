import React from 'react';
import Navigation from './navigation';
import shortid from 'shortid';

const Header = props => {
  let logo = '';

  if (props.prismicLogo) {
    logo = <img id="logo" src={props.prismicLogo} alt="Plotly Logo" />;
  }

  if (props.nextLogo) {
    logo = <img id="logo" src={props.nextLogo} alt="Plotly Logo" />;
  }
  return (
    <header
      id="site-header"
      className="site-header site-header-style--product"
      key={shortid.generate()}
    >
      <div className="site-header-wrapper">
        <div className="site-header--section-left">
          <div className="site-header-logo">
<<<<<<< HEAD
            <Link prefetch href="/">
              <a>{logo}</a>
            </Link>
=======
            <a href="/">{logo}</a>
>>>>>>> changing logo hyperlink from Link component to anchor element
          </div>
        </div>
        <div className="site-header--section-right">
          <Navigation nav={props.nav} />
        </div>
      </div>
    </header>
  );
};

export default Header;
