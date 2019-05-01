import React from 'react';

const DEMO_FORM_URL = 'https://plotly.typeform.com/to/ECUfbT';
const MENU = {
  PRODUCTS: {
    LEFT: [
      {
        title: 'Dash',
        text: 'Build beautiful, analytical applications. No Javascript required.',
        link: '/products/dash',
      },
      {
        title: 'Chart Studio',
        text: 'Collaboratively create and publish charts.',
        link: '/online-chart-maker',
      },
      {
        title: 'Plotly OEM',
        text: 'Power commercial offerings with Plotly.',
        link: '/products/oem',
      },
    ],
    RIGHT: {
      image:
        'https://prismic-io.s3.amazonaws.com/plotly%2Fc62639f7-daf5-4bbd-a111-2495b779dd24_asset+1.png',
      items: [
        {
          title: 'See Dash In Action',
          text: 'Request A Demo',
          link: DEMO_FORM_URL,
        },
      ],
    },
  },
  PRICING: {
    LEFT: [
      {
        title: 'Chart Studio Cloud',
        text: "Host and share charts in Plotly's cloud.",
        link: '/products/cloud',
      },
      {
        title: 'Chart Studio Enterprise',
        text: 'Data visualization behind your firewall.',
        link: '/products/on-premise',
      },
    ],
    RIGHT: [
      {
        title: 'Dash',
        text: 'Build, test and deploy Dash Apps at any scale.',
        link: '/dash/pricing',
      },
    ],
  },
  SIGNUP: [
    {
      title: 'Community Forum',
      link: 'https://community.plot.ly',
    },
    {
      title: 'Chart Studio Cloud',
      link: 'https://plot.ly/Auth/login/?action=signup#/',
    },
  ],
  CTA: {
    link: DEMO_FORM_URL,
    title: 'Schedule A Demo',
  },
};

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
        <div onClick={this.toggleMobileMenu.bind(this)}>
          <a className="navigation-product-item hide-on-desktop">{this.mobileMenuButtonText()}</a>
        </div>

        <nav className={'site-header-nav ' + this.mobileMenuClasses()}>
          <div className="navigation-product-item-with-submenu">
            <div className="navigation-product-item" onClick={this.toggleProductSubmenu.bind(this)}>
              Products
              <i className="mdi mdi-chevron-down hide-on-mobile" />
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
                {MENU.PRODUCTS.LEFT.map(p => (
                  <div className="navigation-product-submenu-section">
                    <a href={p.link}>
                      <div className="navigation-product-submenu-section-title">
                        <span className="hide-on-mobile">{p.title}</span>
                        <a href={p.link} className="hide-on-desktop">
                          {p.title}
                        </a>
                      </div>
                      <span className="navigation-product-submenu-item hide-on-mobile">
                        {p.text}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
              <div className="navigation-product-submenu-right">
                <div
                  className="navigation-product-submenu-section"
                  style={{backgroundImage: `url(${MENU.PRODUCTS.RIGHT.image})`}}
                >
                  {MENU.PRODUCTS.RIGHT.items.map(p => (
                    <a href={p.link}>
                      <div className="navigation-product-submenu-section-title">
                        <span className="hide-on-mobile">{p.title}</span>
                        <a href={p.link} className="hide-on-desktop">
                          {p.title}
                        </a>
                      </div>
                      <span className="navigation-product-submenu-item hide-on-mobile">
                        {p.text}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="navigation-product-item-with-submenu">
            <div className="navigation-product-item" onClick={this.togglePricingSubmenu.bind(this)}>
              Pricing
              <i className="mdi mdi-chevron-down hide-on-mobile" />
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
                {MENU.PRICING.LEFT.map(p => (
                  <div className="navigation-product-submenu-section">
                    <a href={p.link}>
                      <div className="navigation-product-submenu-section-title">
                        <span className="hide-on-mobile">{p.title}</span>
                        <a href={p.link} className="hide-on-desktop">
                          {p.title}
                        </a>
                      </div>
                      <span className="navigation-product-submenu-item hide-on-mobile">
                        {p.text}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
              <div className="navigation-product-submenu-right">
                {MENU.PRICING.RIGHT.map(p => (
                  <div className="navigation-product-submenu-section">
                    <a href={p.link}>
                      <div className="navigation-product-submenu-section-title">
                        <span className="hide-on-mobile">{p.title}</span>
                        <a href={p.link} className="hide-on-desktop">
                          {p.title}
                        </a>
                      </div>
                      <span
                        id="dds-button"
                        className="navigation-product-submenu-item hide-on-mobile"
                      >
                        {p.text}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="navigation-product-item-with-submenu">
            <div className="navigation-product-item" onClick={this.toggleSignUpSubmenu.bind(this)}>
              Sign Up
              <i className="mdi mdi-chevron-down hide-on-mobile" />
            </div>

            <div
              id="signUpDropdown"
              className={
                this.state.signUpSubmenuActive
                  ? 'navigation-product-submenu submenu-active'
                  : 'navigation-product-submenu'
              }
            >
              {MENU.SIGNUP.map(i => (
                <div className="navigation-product-submenu-section" id="community-forum">
                  <a href={i.link} className="navigation-product-submenu-section-title">
                    {i.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="cta-buttons">
            <a
              id="header-button"
              href={MENU.CTA.link}
              className="button button-primary header-button"
            >
              <div className="button-label">{MENU.CTA.title}</div>
            </a>
          </div>
        </nav>
      </>
    );
  }
}
