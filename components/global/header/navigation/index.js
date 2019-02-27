import React from 'react';
import Link from 'next/link';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false,
      productSubmenuActive: true,
      pricingSubmenuActive: true,
      signUpSubmenuActive: true,
      submenu: '',
    };
  }

  componentDidMount() {
    document.body.classList.remove('no-scroll');
  }

  mobileMenuClasses() {
    if (this.state.mobileMenu === true) {
      return 'mobile-menu-active';
    }
    if (this.state.mobileMenu === false) {
      return '';
    }
  }

  mobileMenuButtonText() {
    if (this.state.mobileMenu === true) {
      return <div id="close-menu">&times;</div>;
    }
    if (this.state.mobileMenu === false) {
      return 'Menu';
    }
  }

  toggleMobileMenu(event) {
    event.preventDefault();

    this.setState({
      mobileMenu: !this.state.mobileMenu,
    });
    document.body.classList.toggle('no-scroll', !this.state.mobileMenu);

    document
      .getElementById('site-header')
      .classList.toggle('mobile-menu-active', !this.state.mobileMenu);
  }

  toggleProductSubmenu(event) {
    event.preventDefault();
    if (this.state.productSubmenuActive) {
      this.setState({
        productSubmenuActive: false,
      });
    } else {
      this.setState({
        productSubmenuActive: true,
        pricingSubmenuActive: false,
        signUpSubMenuActive: false,
      });
    }
  }

  toggleSignUpSubmenu(event) {
    event.preventDefault();

    if (this.state.signUpSubmenuActive) {
      this.setState({
        signUpSubmenuActive: false,
      });
    } else {
      this.setState({
        signUpSubmenuActive: true,
        productSubmenuActive: false,
        pricingSubmenuActive: false,
      });
    }
  }

  togglePricingSubmenu(event) {
    event.preventDefault();
    if (this.state.pricingSubmenuActive) {
      this.setState({
        pricingSubmenuActive: false,
      });
    } else {
      this.setState({
        pricingSubmenuActive: true,
        productSubmenuActive: false,
        signUpSubMenuActive: false,
      });
    }
  }

  storeSubMenu(title) {
    this.setState({
      submenu: title,
    });
  }

  closeSubMenu() {
    this.setState({
      submenu: '',
    });
  }

  render() {
    return (
      <>
        {/** Begin Mobile Nav Menu */}
        <div onClick={this.toggleMobileMenu.bind(this)}>
          <a className="navigation-product-item hide-on-desktop">{this.mobileMenuButtonText()}</a>
        </div>
        {/** End Mobile Nav Menu */}

        {/** Begin Desktop Nav Menu */}
        <nav className={'site-header-nav ' + this.mobileMenuClasses()}>
          {/** Begin Products Nav Menu */}
          <div className="navigation-product-item-with-submenu">
            <div className="navigation-product-item" onClick={this.toggleProductSubmenu.bind(this)}>
              Products <i className="mdi mdi-chevron-down hide-on-mobile" />
            </div>
            <div
              id="productsDropdown"
              className={
                this.state.productSubmenuActive
                  ? 'navigation-product-submenu submenu-active'
                  : 'navigation-product-submenu'
              }
            >
              {/** Begin Dash Products Nav Menu */}
              <div className="navigation-product-submenu-left">
                <div className="navigation-product-submenu-section">
                  <div className="navigation-product-submenu-section-title">
                    <span className="hide-on-mobile">Dash</span>
                    <a href="/products/dash/" className="hide-on-desktop">
                      Dash
                    </a>
                  </div>
                  <span className="navigation-product-submenu-item hide-on-mobile">
                    Build beautiful, analytical web applications. <br />
                    No JavaScript required.
                  </span>
                  <a
                    href="/products/dash/"
                    className="navigation-product-submenu-item hide-on-mobile"
                  >
                    <button type="button">Learn More</button>
                  </a>
                </div>
                {/** End Dash Products Nav Menu */}

                {/** Begin Chart Studio Products Nav Menu */}
                <div className="navigation-product-submenu-section">
                  <div className="navigation-product-submenu-section-title">
                    <span className="hide-on-mobile">Chart Studio</span>
                    <a href="/online-chart-maker/" className="hide-on-desktop">
                      Chart Studio Cloud
                    </a>
                  </div>
                  {/** Products Submenu Items */}
                  <span className="navigation-product-submenu-item hide-on-mobile">
                    Collaboratively create and publish charts.
                  </span>
                  <a
                    href="/online-chart-maker/"
                    className="navigation-product-submenu-item hide-on-mobile"
                  >
                    <button type="button">Learn More</button>
                  </a>
                </div>
              </div>
              {/** End Chart Studio Products Nav Menu */}

              {/** Begin Dash Demo Nav Menu */}
              <div className="navigation-product-submenu-right">
                <div className="navigation-product-submenu-section">
                  <div className="navigation-product-submenu-item hide-on-mobile">
                    Want to see Dash in action?
                  </div>
                  <div className="navigation-product-submenu-item-header_image hide-on-mobile">
                    <img src="https://prismic-io.s3.amazonaws.com/plotly%2F478dbc54-98c2-4044-a0db-1999770472f3_header.png" />
                  </div>
                  <a
                    href="https://plotly.typeform.com/to/ECUfbT"
                    className="navigation-product-submenu-item hide-on-mobile"
                  >
                    <button type="button hide-on-mobile">Request a Demo</button>
                  </a>
                </div>
              </div>
              {/** End Dash Demo Nav Menu */}
            </div>
          </div>
          {/** End Products Nav Menu */}

          {/** Begin Pricing Nav Menu */}
          <div className="navigation-product-item-with-submenu">
            <div className="navigation-product-item" onClick={this.togglePricingSubmenu.bind(this)}>
              Pricing <i className="mdi mdi-chevron-down hide-on-mobile" />
            </div>
            <div
              id="pricingDropdown"
              className={
                this.state.pricingSubmenuActive
                  ? 'navigation-product-submenu submenu-active'
                  : 'navigation-product-submenu'
              }
            >
              {/** Begin Chart Studio Pricing Nav Menu */}
              <div className="navigation-product-submenu-left">
                <div className="navigation-product-submenu-section">
                  <div className="navigation-product-submenu-section-title">
                    <span className="hide-on-mobile">Chart Studio</span>
                    <a href="/online-chart-maker/" className="hide-on-desktop">
                      Chart Studio Cloud
                    </a>
                  </div>
                  <br className="hide-on-desktop" />
                  <div className="navigation-product-submenu-section-title">
                    <a href="/products/on-premise" className="hide-on-desktop">
                      Chart Studio Enterprise
                    </a>
                  </div>
                  <br className="hide-on-desktop" />
                  <div className="navigation-product-submenu-section-title">
                    <a href="/dash/pricing/" className="hide-on-desktop">
                      Dash Deployment Server
                    </a>
                  </div>
                  <span className="navigation-product-submenu-item hide-on-mobile">
                    Cloud and Enterprise solutions to meet <br /> your needs.
                  </span>
                  <a
                    href="/products/cloud/"
                    className="navigation-product-submenu-item hide-on-mobile"
                  >
                    <button type="button">Chart Studio Cloud</button>
                  </a>
                  <a
                    href="/products/on-premise/"
                    className="navigation-product-submenu-item hide-on-mobile"
                  >
                    <button type="button">Chart Studio Enterprise</button>
                  </a>
                </div>
              </div>
              {/** End Chart Studio Pricing Nav Menu */}

              {/** Begin Dash Pricing Nav Menu */}
              <div className="navigation-product-submenu-right">
                <div className="navigation-product-submenu-section">
                  <div className="navigation-product-submenu-section-title">
                    <span className="hide-on-mobile">Dash</span>
                  </div>
                  <span id="dds-button" className="navigation-product-submenu-item hide-on-mobile">
                    License Dash Deployment Server <br />
                    for easy app deployment in commercial <br />
                    applications.
                  </span>
                  <a
                    href="/dash/pricing/"
                    className="navigation-product-submenu-item hide-on-mobile"
                  >
                    <button type="button">Dash Deployment Server </button>
                  </a>
                </div>
              </div>
              {/** End Dash Pricing Nav Menu */}
            </div>
          </div>
          {/** End Pricing Nav Menu */}

          {/** Begin SIGN UP Section */}
          <div className="navigation-product-item-with-submenu">
            <div className="navigation-product-item" onClick={this.toggleSignUpSubmenu.bind(this)}>
              Sign Up <i className="mdi mdi-chevron-down hide-on-mobile" />
            </div>
            <div
              id="signUpDropdown"
              className={
                this.state.signUpSubmenuActive
                  ? 'navigation-product-submenu submenu-active'
                  : 'navigation-product-submenu'
              }
            >
              <div className="navigation-product-submenu-section">
                <a
                  href="https://community.plot.ly"
                  id="community-forum"
                  className="navigation-product-submenu-section-title"
                >
                  Community Forum
                </a>
                <br className="hide-on-desktop" />
                <a
                  href="/Auth/login/?action=signup#/"
                  id="chart-studio"
                  className="navigation-product-submenu-section-title"
                >
                  Chart Studio Cloud
                </a>
              </div>
            </div>
          </div>
          {/** End SIGN UP Section */}
          <a href="https://plotly.typeform.com/to/mOAiug" className="navigation-product-item">
            <button type="button">Request a Demo</button>
          </a>
        </nav>
        {/** End Desktop Nav Menu */}
      </>
    );
  }
}
