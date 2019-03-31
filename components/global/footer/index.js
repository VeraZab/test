import React from 'react';
import MailChimpForm from '../mailchimp-form';

const Footer = props => {
  const footerNavLinkIcon = icon => (
    <div className="footer-main-section-link-icon">
      <i className={'mdi mdi-' + icon} />
    </div>
  );

  const generateFooterNavLinks = links => {
    return links.map((link, i) => {
      return (
        <a
          className="footer-main-section-link"
          href={link.url}
          key={i}
          target={link.url && link.url[0] !== '/' ? '_blank' : null}
        >
          <div className="footer-main-section-link-wrapper">
            {link.icon ? footerNavLinkIcon(link.icon) : ''}
            <div className="footer-main-section-link-label">{link.label}</div>
          </div>
        </a>
      );
    });
  };

  const assembleFooterNavigation = data => {
    return data.map((section, i) => {
      return (
        <div className="footer-main-section" key={i}>
          <div className="footer-main-section-wrapper">
            <div className="footer-main-section-header" style={{color: section.labelColor}}>
              {section.label}
            </div>
            <nav className="footer-main-section-links">{generateFooterNavLinks(section.links)}</nav>
          </div>
        </div>
      );
    });
  };

  let footerData;
  if (props.nav.items) {
    const footer = props.nav.items;
    footerData = [
      {
        label: footer[0].label,
        labelColor: '#119DFF',
        links: [
          {
            label: footer[0].item1,
            icon: null,
            url: footer[0].item_url1,
          },
          {
            label: footer[0].item2,
            icon: null,
            url: footer[0].item_url2,
          },
          {
            label: footer[0].item3,
            icon: null,
            url: footer[0].item3_url,
          },

          {
            label: footer[0].item4,
            icon: null,
            url: footer[0].item4_url,
          },
        ],
      },
      {
        label: footer[1].label,
        labelColor: '#119DFF',
        links: [
          {
            label: footer[1].item1,
            icon: null,
            url: footer[1].item_url1,
          },
          {
            label: footer[1].item2,
            icon: null,
            url: footer[1].item_url2,
          },
          {
            label: footer[1].item3,
            icon: null,
            url: footer[1].item3_url,
          },
        ],
      },
      {
        label: footer[2].label,
        labelColor: '#119DFF',
        links: [
          {
            label: footer[2].item1,
            icon: null,
            url: footer[2].item_url1,
          },
          {
            label: footer[2].item2,
            icon: null,
            url: footer[2].item_url2,
          },
        ],
      },
      {
        label: footer[3].label,
        labelColor: '#119DFF',
        links: [
          {
            label: footer[3].item1,
            icon: null,
            url: footer[3].item_url1,
          },
          {
            label: footer[3].item2,
            icon: null,
            url: footer[3].item_url2,
          },
          {
            label: footer[3].item3,
            icon: null,
            url: footer[3].item3_url,
          },
        ],
      },
    ];
  } else {
    footerData = [
      {
        label: 'Products',
        labelColor: '#119DFF',
        links: [
          {
            label: 'Dash',
            icon: null,
            url: '/products/dash/',
          },
          {
            label: 'Chart Studio',
            icon: null,
            url: '/online-chart-maker',
          },
          {
            label: 'plotly.js',
            icon: null,
            url: '/plotly-js-scientific-d3-charting-library/',
          },

          {
            label: 'plotly.py',
            icon: null,
            url: '/d3-js-for-python-and-pandas-charts/',
          },
        ],
      },
      {
        label: 'Pricing',
        labelColor: '#119DFF',
        links: [
          {
            label: 'Chart Studio Cloud',
            icon: null,
            url: '/products/cloud/',
          },
          {
            label: 'Chart Studio Enterprise',
            icon: null,
            url: '/products/on-premise',
          },
          {
            label: 'Dash Deployment Server',
            icon: null,
            url: '/dash/pricing',
          },
        ],
      },
      {
        label: 'About Us',
        labelColor: '#119DFF',
        links: [
          {
            label: 'Careers',
            icon: null,
            url: '/company/careers',
          },
          {
            label: 'Newsroom',
            icon: null,
            url: '/newsroom',
          },
        ],
      },
      {
        label: 'Support',
        labelColor: '#119DFF',
        links: [
          {
            label: 'Developer Support',
            icon: null,
            url: 'https://support.plot.ly/',
          },
          {
            label: 'Community Support',
            icon: null,
            url: 'https://community.plot.ly',
          },
          {
            label: 'Documentation',
            icon: null,
            url: 'https://plot.ly/graphing-libraries',
          },
        ],
      },
    ];
  }

  return (
    <footer className="footer-main">
      <div className="footer-main-wrapper">
        <div className="footer-main-top">
          <div className="footer-main-top-wrapper">
            {assembleFooterNavigation(footerData)}
            <MailChimpForm />
          </div>
        </div>
        <div className="footer-main-bottom">
          <div className="footer-main-bottom-wrapper">
            <div className="footer-main-bottom-section">
              <div className="copyright">
                <span>Copyright &copy; {new Date().getFullYear()} Plotly.</span>{' '}
                <span>All rights reserved.</span>
              </div>
            </div>
            <div className="footer-main-bottom-section">
              <div className="footer-main-bottom-links">
                <a href="/terms-of-service/" target="_blank">
                  Terms of Service
                </a>
                <a href="/privacy/" target="_blank">
                  Privacy Policy
                </a>
                <a href="/fr/">Français</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
