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

  const footerData = [
    {
      label: 'Products',
      labelColor: '#119DFF',
      links: [
        {
          label: 'Dash',
          url: '/dash/',
        },
        {
          label: 'Chart Studio',
          url: '/online-chart-maker',
        },
        {
          label: 'Plotly OEM',
          url: '/products/oem',
        },
      ],
    },
    {
      label: 'Pricing',
      labelColor: '#119DFF',
      links: [
        {
          label: 'Enterprise Pricing',
          url: 'https://go.plot.ly/get-pricing',
        },
      ],
    },
    {
      label: 'About Us',
      labelColor: '#119DFF',
      links: [
        {
          label: 'Careers',
          url: '/company/careers',
        },
        {
          label: 'Resources',
          url: '/resources',
        },
        {
          label: 'Blog',
          url: 'https://medium.com/@plotlygraphs',
        },
      ],
    },
    {
      label: 'Support',
      labelColor: '#119DFF',
      links: [
        {
          label: 'Community Support',
          url: 'https://community.plot.ly',
        },
        {
          label: 'Documentation',
          url: 'https://plot.ly/graphing-libraries',
        },
      ],
    },
  ];

  return (
    <div className="footer-container">
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
    </div>
  );
};

export default Footer;
