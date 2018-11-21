import React from 'react';
import styles from './navigation.styles.scss';
import Link from 'next/link';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false,
      productSubmenuActive: false,
      pricingSubmenuActive: false,
      signUpSubmenuActive: false,
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
      return 'Close';
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
        signUpSubMenuActive: false
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
      <div className="site-header-navigation">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className={'site-header-navigation-wrapper'}>
          <div
            className="mobile-menu-button"
            onClick={this.toggleMobileMenu.bind(this)}
          >
            <a className="navigation-product-item">
              {this.mobileMenuButtonText()}
            </a>
          </div>
          <nav className={'site-header-nav ' + this.mobileMenuClasses()}>

            {/** Products Drop Down Menu */}
            <div className="navigation-product-item-with-submenu">
              <div
                className="navigation-product-item"
                onClick={this.toggleProductSubmenu.bind(this)}
              >
                Products <i className="mdi mdi-chevron-down" />
              </div>

              {/** Products Submenu */}
              <div
                className={
                  this.state.productSubmenuActive
                    ? 'navigation-product-submenu submenu-active'
                    : 'navigation-product-submenu'
                }
              >
                {/** Products Submenu Section */}
                <div className="navigation-product-submenu-section">
                  <div className="navigation-product-submenu-section-title">
                    Dash
                  </div>
                  {/** Products Submenu Items */}
                  <div className="navigation-product-submenu-item"> #1 Python tool <br/> for analytic apps</div>                  <Link href="https://plot.ly/products/dash/" prefetch>
                    <a className="navigation-product-submenu-item">
                      Learn More
                    </a>
                  </Link>
                </div>
                {/** Products Submenu Section */}
                <div className="navigation-product-submenu-section">
                <div className="navigation-product-submenu-section-title">
                Chart Studio
                  </div>
                  {/** Products Submenu Items */}
                  <div className="navigation-product-submenu-item">Collaboratively create <br/> and publish charts</div>
                  <Link href="https://plot.ly/online-chart-maker/" prefetch>
                    <a className="navigation-product-submenu-item">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/** Pricing Drop Down Menu */}
            <div className="navigation-product-item-with-submenu">
              <div
                className="navigation-product-item"
                onClick={this.togglePricingSubmenu.bind(this)}
              >
                Pricing <i className="mdi mdi-chevron-down" />
              </div>

              {/** Pricing Submenu */}
              <div
                className={
                  this.state.pricingSubmenuActive
                    ? 'navigation-product-submenu submenu-active'
                    : 'navigation-product-submenu'
                }
              >
                {/** Pricing Submenu Section */}
                <div className="navigation-product-submenu-section">
                  <div className="navigation-product-submenu-section-title">
                    Dash
                  </div>
                  {/** Pricing Submenu Items */}
                  <div className="navigation-product-submenu-item"> #1 Python tool <br/> for analytic apps</div>
                  <Link href="#" prefetch>
                    <a className="navigation-product-submenu-item">
                      Design Kit
                    </a>
                  </Link>
                  <Link href="https://plot.ly/dash/pricing/" prefetch>
                    <a className="navigation-product-submenu-item">
                      Deployment Server
                    </a>
                  </Link>
                </div>
                {/** Pricing Submenu Section */}
                <div className="navigation-product-submenu-section">
                <div className="navigation-product-submenu-section-title">
                Chart Studio
                  </div>
                  {/** Pricing Submenu Items */}
                  <div className="navigation-product-submenu-item">Collaboratively create <br/> and publish charts</div>
                  <Link href="https://plot.ly/products/cloud/" prefetch>
                    <a className="navigation-product-submenu-item">
                      Cloud
                    </a>
                  </Link>
                  <Link href="https://plot.ly/products/on-premise/" prefetch>
                    <a className="navigation-product-submenu-item">
                      Enterprise
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            {/** Sign Up Drop Down Menu*/}
            <div className="navigation-product-item-with-submenu">
              <div
                className="navigation-product-item"
                onClick={this.toggleSignUpSubmenu.bind(this)}
              >
                Sign Up <i className="mdi mdi-chevron-down" />
              </div>
              <div
                className={
                  this.state.signUpSubmenuActive
                    ? 'navigation-product-submenu submenu-active'
                    : 'navigation-product-submenu'
                }
              >
              {/** Pricing Submenu Section */}
              <div className="navigation-product-submenu-section">
                  {/** Pricing Submenu Items */}
                  <Link href="https://community.plot.ly" prefetch>
                    <a className="navigation-product-submenu-item">
                      Community Forum
                    </a>
                  </Link>
                  <Link href="https://plot.ly/create/" prefetch>
                    <a className="navigation-product-submenu-item">
                      Chart Studio Cloud
                    </a>
                  </Link>
                </div>
            </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
