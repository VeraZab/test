import React from 'react';
const DEMO_FORM_URL = 'https://go.plot.ly/demo-dash';
const MENU = {
  PRODUCTS: {
    LEFT: [
      {
        title: 'Dash',
        text: (
          <>
            Build beautiful, analytical applications
            <br />
            No Javascript required.
          </>
        ),
        link: '/dash',
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
      items: [
        {
          title: 'See Dash In Action',
          text: 'Demo Dash',
          link: DEMO_FORM_URL,
        },
      ],
    },
  },
  INDUSTRIES: {
    LEFT: [
      {
        title: 'AI & Machine Learning',
        link: '/industries/AI-and-machine-learning/',
      },
      {
        title: 'Energy & Transportation',
        link: '/industries/energy-and-transportation/',
      },
      {
        title: 'Finance & Banking',
        link: '/industries/finance/',
      },
      {
        title: 'Manufacturing',
        link: '/industries/manufacturing/',
      },
      {
        title: 'Pharma & Bio',
        link: '/industries/pharma-and-bio/',
      },
    ],
    RIGHT: [],
  },
  RESOURCES: [
    {
      title: 'Blog',
      link: 'https://medium.com/@plotlygraphs',
    },
    {
      title: 'Content & News',
      link: '/resources',
    },
  ],
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
    title: 'Demo Dash',
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

  render() {
    return (
      <>
        <div onClick={this.toggleMobileMenu.bind(this)} className="mobile-navigation-anchor">
          <a className="navigation-product-item hide-on-desktop">{this.mobileMenuButtonText()}</a>
        </div>

        <nav className={'site-header-nav ' + this.mobileMenuClasses()}>
          <div className="navigation-product-item-with-submenu">
            <div className="navigation-product-item">
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
                {MENU.PRODUCTS.LEFT.map((p, i) => (
                  <div key={i} className="navigation-product-submenu-section">
                    <a href={p.link}>
                      <div className="navigation-product-submenu-section-title">
                        <span className="hide-on-mobile">{p.title}</span>
                        <span className="hide-on-desktop">{p.title}</span>
                      </div>
                      <span className="navigation-product-submenu-item hide-on-mobile">
                        {p.text}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
              <div className="navigation-product-submenu-right">
                {MENU.PRODUCTS.RIGHT.items.map((p, i) => (
                  <div key={i} className="navigation-product-submenu-section">
                    <a href={p.link}>
                      <div className="navigation-product-submenu-section-title">
                        <span className="hide-on-mobile">{p.title}</span>
                        <span className="hide-on-desktop">{p.title}</span>
                      </div>
                      <span className="navigation-product-submenu-item hide-on-mobile">
                        <div className="button button-secondary">{p.text}</div>
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="navigation-product-item-with-submenu">
            <div className="navigation-product-item">
              Industries
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
              {MENU.INDUSTRIES.LEFT.map((p, i) => (
                <div key={i} className="navigation-product-submenu-section">
                  <a href={p.link} className="navigation-product-submenu-section-title">
                    {p.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="navigation-product-item-with-submenu">
            <div className="navigation-product-item">
              Resources
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
              {MENU.RESOURCES.map((p, i) => (
                <div key={i} className="navigation-product-submenu-section">
                  <a href={p.link} className="navigation-product-submenu-section-title">
                    {p.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="navigation-product-item-with-submenu">
            <div className="navigation-product-item">
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
              {MENU.SIGNUP.map((p, i) => (
                <div key={i} className="navigation-product-submenu-section">
                  <a href={p.link} className="navigation-product-submenu-section-title">
                    {p.title}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="navigation-product-item-with-submenu">
            <div className="cta-buttons">
              <a
                id="header-button"
                href="https://go.plot.ly/demo-dash"
                className="button button-primary header-button"
              >
                <div className="button-label">{MENU.CTA.title}</div>
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
