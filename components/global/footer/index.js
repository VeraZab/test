import React from 'react'
import styles from './footer.scss'

const footerData = [
  {
    label: 'Developers',
    links: [
      {
        label: 'Python',
        icon: null,
        url: 'https://plot.ly/python/',
      },
      {
        label: 'R & Shiny',
        icon: null,
        url: 'https://plot.ly/r/',
      },
      {
        label: 'MATLAB',
        icon: null,
        url: 'https://plot.ly/matlab/',
      },
      {
        label: 'Javascript',
        icon: null,
        url: 'https://plot.ly/javascript-graphing-library/',
      },
      {
        label: 'REST API',
        icon: null,
        url: 'https://api.plot.ly/v2/',
      },
    ],
  },
  {
    label: 'Company',
    links: [
      {
        label: 'About',
        icon: null,
        url: 'https://plot.ly/company/jobs/',
      },
      {
        label: 'Team',
        icon: null,
        url: 'https://plot.ly/company/team/',
      },
      {
        label: 'Blog',
        icon: null,
        url: 'https://blog.plot.ly/',
      },
      {
        label: 'Modern Data',
        icon: null,
        url: 'https://moderndata.plot.ly/',
      },
      {
        label: 'Industries',
        icon: null,
        url: 'https://plot.ly/products/industries/',
      },
      {
        label: 'PLOTCON',
        icon: null,
        url: 'https://plotcon.plot.ly/',
      },
    ],
  },
  {
    label: 'Resources',
    links: [
      {
        label: 'Developer Support',
        icon: null,
        url: 'https://support.plot.ly/',
      },
      {
        label: 'Community Support',
        icon: null,
        url: 'https://community.plot.ly/',
      },
      {
        label: 'Documentation',
        icon: null,
        url: 'http://help.plot.ly/',
      },
    ],
  },
  {
    label: 'Data Science',
    links: [
      {
        label: 'Dash',
        icon: null,
        url: 'https://plot.ly/dash/',
      },
      {
        label: 'Plotly.js',
        icon: null,
        url: 'https://plot.ly/javascript/',
      },
      {
        label: 'Plotly.R',
        icon: null,
        url: 'https://plot.ly/r/',
      },
      {
        label: 'Plotly.py',
        icon: null,
        url: 'https://plot.ly/python/',
      },
    ],
  },
  {
    label: 'Business Intelligence',
    links: [
      {
        label: 'Chart Studio',
        icon: null,
        url: 'https://plot.ly/online-chart-maker/',
      },
      {
        label: 'Dashboards & Reporting',
        icon: null,
        url: 'https://plot.ly/dashboards/',
      },
      {
        label: 'Slide Decks',
        icon: null,
        url: 'https://plot.ly/powerpoint-online/',
      },
      {
        label: 'Falcon SQL Client (Free)',
        icon: null,
        url: 'https://plot.ly/database-connectors/',
      },
    ],
  },
]
const footerNavLinkIcon = icon => (
  <div className="footer-main-section-link-icon">
    <i className={'mdi mdi-' + icon} />
  </div>
)

const generateFooterNavLinks = links => {
  return links.map((link, i) => {
    return (
      <a
        className="footer-main-section-link"
        href={link.url}
        key={i}
        target="_blank"
      >
        <div className="footer-main-section-link-wrapper">
          {link.icon ? footerNavLinkIcon(link.icon) : ''}
          <div className="footer-main-section-link-label">{link.label}</div>
        </div>
      </a>
    )
  })
}

const assembleFooterNavigation = data => {
  return data.map((section, i) => {
    return (
      <div className="footer-main-section" key={i}>
        <div className="footer-main-section-wrapper">
          <div className="footer-main-section-header">{section.label}</div>
          <nav className="footer-main-section-links">
            {generateFooterNavLinks(section.links)}
          </nav>
        </div>
      </div>
    )
  })
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer className="footer-main">
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="footer-main-wrapper">
          <div className="footer-main-top">
            <div className="footer-main-top-wrapper">
              {assembleFooterNavigation(footerData)}
            </div>
          </div>
          <div className="footer-main-bottom">
            <div className="footer-main-bottom-wrapper">
              <div className="footer-main-bottom-section">
                <copyright>
                  <span>Copyright &copy; 2017 Plotly.</span>{' '}
                  <span>All rights reserved.</span>
                </copyright>
              </div>
              <div className="footer-main-bottom-section">
                <div className="footer-main-bottom-links">
                  <a href="https://plot.ly/terms-of-service/" target="_blank">
                    Terms of Service
                  </a>
                  <a href="https://plot.ly/privacy/" target="_blank">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
