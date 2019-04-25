import React from 'react';
import {renderPrismic} from 'lib/renderPrismicRichText';

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
    if (this.props.nav.items) {
      const products = this.props.nav.items[0];
      const pricing = this.props.nav.items[1];
      const signUp = this.props.nav.items[2];
      return (
        <>
          <div onClick={this.toggleMobileMenu.bind(this)}>
            <a className="navigation-product-item hide-on-desktop">{this.mobileMenuButtonText()}</a>
          </div>
          <nav className={'site-header-nav ' + this.mobileMenuClasses()}>
            <div className="navigation-product-item-with-submenu">
              <div
                className="navigation-product-item"
                onClick={this.toggleProductSubmenu.bind(this)}
              >
                {products.dropdown_label} <i className="mdi mdi-chevron-down hide-on-mobile" />
              </div>
              <div
                id="productsDropdown"
                className={
                  this.state.productSubmenuActive
                    ? 'navigation-product-submenu submenu-active'
                    : 'navigation-product-submenu'
                }
              >
                <div className="navigation-product-submenu-left">
                  <div className="navigation-product-submenu-section">
                    <a href={products.submenu_url_link}>
                      <div className="navigation-product-submenu-section-title">
                        <span className="hide-on-mobile">{products.submenu_label}</span>
                        <a href="/products/dash/" className="hide-on-desktop">
                          {products.submenu_label}
                        </a>
                      </div>
                      <span className="navigation-product-submenu-item hide-on-mobile">
                        Build beautiful, analytical web applications. <br />
                        No JavaScript required.
                      </span>
                    </a>
                  </div>
                  <div className="navigation-product-submenu-section">
                    <a href={products.submenu_url_link2}>
                      <div className="navigation-product-submenu-section-title">
                        <span className="hide-on-mobile">{products.submenu_label2}</span>
                        <a href="/online-chart-maker/" className="hide-on-desktop">
                          {pricing.submenu_label2}
                        </a>
                      </div>
                      <span className="navigation-product-submenu-item hide-on-mobile">
                        {renderPrismic(products.submenu_messaging2)}
                      </span>
                    </a>
                  </div>
                </div>
                <div className="navigation-product-submenu-right">
                  <div className="navigation-product-submenu-section">
                    <a href={products.submenu_url_link3}>
                      <div className="navigation-product-submenu-item-header_image hide-on-mobile">
                        <img src={products.dropdown_graphic.url} />
                      </div>
                      <div className="navigation-product-submenu-section-title" id="dash-in-action">
                        See Dash in Action
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="navigation-product-item-with-submenu">
              <div
                className="navigation-product-item"
                onClick={this.togglePricingSubmenu.bind(this)}
              >
                {pricing.dropdown_label} <i className="mdi mdi-chevron-down hide-on-mobile" />
              </div>
              <div
                id="pricingDropdown"
                className={
                  this.state.pricingSubmenuActive
                    ? 'navigation-product-submenu submenu-active'
                    : 'navigation-product-submenu'
                }
              >
                <div className="navigation-product-submenu-left">
                  <div className="navigation-product-submenu-section">
                    <a href={pricing.submenu_url_link2}>
                      <div className="navigation-product-submenu-section-title">
                        <span className="hide-on-mobile">Chart Studio Cloud</span>
                        <a href={pricing.submenu_url_link2} className="hide-on-desktop">
                          Chart Studio Cloud
                        </a>
                      </div>
                      <span className="navigation-product-submenu-item hide-on-mobile">
                        Host and share charts in Plotly's cloud.
                      </span>
                    </a>
                  </div>
                  <div className="navigation-product-submenu-section">
                    <a href={pricing.submenu_url_link3}>
                      <div className="navigation-product-submenu-section-title">
                        <span className="hide-on-mobile">Chart Studio Enterprise</span>
                        <a href={pricing.submenu_url_link2} className="hide-on-desktop">
                          Chart Studio Enterprise
                        </a>
                      </div>
                      <span className="navigation-product-submenu-item hide-on-mobile">
                        Data visualization behind your firewall.
                      </span>
                    </a>
                  </div>
                </div>
                <div className="navigation-product-submenu-right">
                  <div className="navigation-product-submenu-section">
                    <a href="/dash/pricing/">
                      <div className="navigation-product-submenu-section-title">
                        <span className="hide-on-mobile">Dash</span>
                        <a href={pricing.submenu_url_link2} className="hide-on-desktop">
                          Dash
                        </a>
                      </div>
                      <span
                        id="dds-button"
                        className="navigation-product-submenu-item hide-on-mobile"
                      >
                        Build, test and deploy Dash Apps at any scale.
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="navigation-product-item-with-submenu">
              <div
                className="navigation-product-item"
                onClick={this.toggleSignUpSubmenu.bind(this)}
              >
                {signUp.dropdown_label} <i className="mdi mdi-chevron-down hide-on-mobile" />
              </div>
              <div
                id="signUpDropdown"
                className={
                  this.state.signUpSubmenuActive
                    ? 'navigation-product-submenu submenu-active'
                    : 'navigation-product-submenu'
                }
              >
                <div className="navigation-product-submenu-section" id="community-forum">
                  <a
                    href={signUp.submenu_url_link}
                    className="navigation-product-submenu-section-title"
                  >
                    {signUp.submenu_label}
                  </a>
                </div>
                <div className="navigation-product-submenu-section" id="chart-studio">
                  <a
                    href={signUp.submenu_url_link2}
                    className="navigation-product-submenu-section-title"
                  >
                    {signUp.submenu_label2}
                  </a>
                </div>
              </div>
            </div>
            <div className="cta-buttons">
              <a
                id="header-button"
                href={products.submenu_url_link3}
                className="button button-primary header-button"
              >
                <div className="button-label">{products.submenu_url_label3}</div>
              </a>
            </div>
          </nav>
        </>
      );
    }
    return (
      <>
        <div onClick={this.toggleMobileMenu.bind(this)}>
          <a className="navigation-product-item hide-on-desktop">{this.mobileMenuButtonText()}</a>
        </div>
        <nav className={'site-header-nav ' + this.mobileMenuClasses()}>
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
                </div>
                <div className="navigation-product-submenu-section">
                  <div className="navigation-product-submenu-section-title">
                    <span className="hide-on-mobile">Chart Studio</span>
                    <a href="/online-chart-maker/" className="hide-on-desktop">
                      Chart Studio Cloud
                    </a>
                  </div>
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
                    <button type="button hide-on-mobile">Schedule a Demo</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
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
              <div className="navigation-product-submenu-left">
                <div className="navigation-product-submenu-section">
                  <div className="navigation-product-submenu-section-title">
                    <span className="hide-on-mobile">Chart Studio</span>
                    <a href="/products/cloud/" className="hide-on-desktop">
                      Chart Studio Cloud
                    </a>
                  </div>
                  <div className="navigation-product-submenu-section-title">
                    <a href="/products/on-premise" className="hide-on-desktop">
                      Chart Studio Enterprise
                    </a>
                  </div>
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
            </div>
          </div>
          <div className="navigation-product-item-with-submenu">
            <div
              id="signUpLabel"
              className="navigation-product-item"
              onClick={this.toggleSignUpSubmenu.bind(this)}
            >
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
              </div>
              <div className="navigation-product-submenu-section">
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
          <a href="https://plotly.typeform.com/to/ECUfbT" className="button button-primary">
            <div className="button-label">Schedule a Demo</div>
          </a>
        </nav>
      </>
    );
  }
}
