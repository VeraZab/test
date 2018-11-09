import React from 'react'
import styles from './footer.scss'
import MailChimpForm from '../mailchimp-form'

const footerData = [

  {
    label: 'DASH',
    labelColor: '#e763fa',
    links: [
      {
        label: 'Overview',
        icon: null,
        url: '/products/dash/'
      },
      {
        label: 'Dash DAQ',
        icon: null,
        url: 'https://www.dashdaq.io/'
      },
      {
        label: 'Dash Deployment Server',
        icon: null,
        url: '/dash/pricing/'
      }
    ]
  },
  {
    label: 'Company',
    labelColor: '#636efa',
    links: [
      {
        label: 'Careers',
        icon: null,
        url: '/company/careers/'
      },
      {
        label: 'Customer Contact',
        icon: null,
        url: 'https://plotly.typeform.com/to/r4OilH'
      },
      {
        label: '#plotlylife',
        icon: null,
        url: 'https://www.instagram.com/plotly/?hl=en'
      },
      {
        label: 'Twitter',
        icon: null,
        url: 'https://twitter.com/plotlygraphs'
      },
      {
        label: 'GitHub',
        icon: null,
        url: 'https://github.com/plotly'
      },
      {
        label: 'Newsroom',
        icon: null,
        url: '/newsroom'
      }
    ]
  },
  {
    label: 'Resources',
    labelColor: '#00cc96',
    links: [
      {
        label: 'Developer Support',
        icon: null,
        url: 'https://support.plot.ly/'
      },
      {
        label: 'Community Support',
        icon: null,
        url: 'https://community.plot.ly/'
      },
      {
        label: 'Documentation',
        icon: null,
        url: 'http://help.plot.ly/'
      }
    ]
  },
  {
    label: 'Graphing Libraries',
    labelColor: '#EF553B',
    links: [
      {
        label: 'Dash',
        icon: null,
        url: 'https://plot.ly/dash/'
      },
      {
        label: 'Plotly.js',
        icon: null,
        url: '/plotly-js-scientific-d3-charting-library/'
      },
      {
        label: 'Plotly.py',
        icon: null,
        url: '/d3-js-for-python-and-pandas-charts/'
      },
      {
        label: 'Plotly.R',
        icon: null,
        url: '/d3-js-for-r-and-shiny-charts/'
      }
    ]
  },
  {
    label: 'Embedded BI/OEM',
    labelColor: '#19d3f3',
    links: [
      {
        label: 'Chart Studio',
        icon: null,
        url: '/online-chart-maker/'
      },
      {
        label: 'Dashboards',
        icon: null,
        url: '/dashboards/'
      }
    ]
  }
];

const footerNavLinkIcon = (icon) => (
  <div className="footer-main-section-link-icon"><i className={ 'mdi mdi-' + icon }/></div>
);

const generateFooterNavLinks = links => {
  return links.map((link, i) => {
    return (
      <a
        className="footer-main-section-link"
        href={ link.url }
        key={ i }
        target={link.url && link.url[0] !== '/' ? "_blank" : null}
      >
        <div className="footer-main-section-link-wrapper">
          { link.icon ? footerNavLinkIcon(link.icon) : '' }
          <div className="footer-main-section-link-label">{ link.label }</div>
        </div>
      </a>
    )
  })
}

const assembleFooterNavigation = data => {
  return data.map((section, i) => {
    return (
      <div className="footer-main-section" key={ i }>
        <div className="footer-main-section-wrapper">
          <div className="footer-main-section-header" style={{color: section.labelColor}}>{ section.label }</div>
          <nav className="footer-main-section-links">
            { generateFooterNavLinks(section.links) }
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
        <style dangerouslySetInnerHTML={ {__html: styles} }/>
        <div className="footer-main-wrapper">
          <div className="footer-main-top">
            <div className="footer-main-top-wrapper">
              { assembleFooterNavigation(footerData) }
              <MailChimpForm/>
            </div>
          </div>
          <div className="footer-main-bottom">
            <div className="footer-main-bottom-wrapper">
              <div className="footer-main-bottom-section">
                <copyright>
                  <span>Copyright &copy; 2018 Plotly.</span>{ ' ' }
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
