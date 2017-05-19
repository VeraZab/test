import React from 'react';
import styles from './footer.scss';

const footerData = [
    {
        label: 'API',
        links: [
            {
                label: 'API',
                icon: null,
                url: 'https://plot.ly/api/'
            },
            {
                label: 'Python',
                icon: null,
                url: 'https://plot.ly/python/'
            },
            {
                label: 'R',
                icon: null,
                url: 'https://plot.ly/r/'
            },
            {
                label: 'MATLAB',
                icon: null,
                url: 'https://plot.ly/matlab/'
            },
            {
                label: 'Javascript',
                icon: null,
                url: 'https://plot.ly/javascript-graphing-library/'
            }
        ]
    },
    {
        label: 'About Us',
        links: [
            {
                label: 'Team',
                icon: null,
                url: 'https://plot.ly/company/team/'
            },
            {
                label: 'Careers',
                icon: null,
                url: 'https://plot.ly/company/jobs/'
            },
            {
                label: 'Plotly Blog',
                icon: null,
                url: 'http://blog.plot.ly/'
            },
            {
                label: 'Modern Data',
                icon: null,
                url: 'http://moderndata.plot.ly/'
            }
        ]
    },
    {
        label: 'Help',
        links: [
            {
                label: 'Plotly Support',
                icon: null,
                url: 'https://support.plot.ly/'
            },
            {
                label: 'Documentation',
                icon: null,
                url: 'http://help.plot.ly/'
            },
            {
                label: 'Plotly vs Tableau',
                icon: null,
                url: 'https://plot.ly/tableau-alternative/'
            },
            {
                label: 'Plotly.js vs Highcharts',
                icon: null,
                url: 'https://plot.ly/highcharts-alternative/'
            },
            {
                label: 'Dashboard Examples',
                icon: null,
                url: 'https://plot.ly/dashboards/'
            }
        ]
    },
    {
        label: 'Use Cases',
        links: [
            {
                label: 'By Industry',
                icon: null,
                url: 'https://plot.ly/products/industries/'
            },
            {
                label: 'Excel Reporting',
                icon: null,
                url: 'https://images.plot.ly/uses-cases/Excel+Reporting.pdf'
            },
            {
                label: 'Plotly for Dashboards',
                icon: null,
                url: 'https://images.plot.ly/uses-cases/Plotly+for+Dashboards.pdf'
            },
            {
                label: 'Ad Hoc Analysis',
                icon: null,
                url: 'https://images.plot.ly/uses-cases/Ad+Hoc+Analysis.pdf'
            }
        ]
    },
    {
        label: 'Connect',
        links: [
            {
                label: 'Twitter',
                icon: 'twitter',
                url: 'https://twitter.com/plotlygraphs'
            },
            {
                label: 'Instagram',
                icon: 'instagram',
                url: 'https://instagram.com/_u/plotly'
            },
            {
                label: 'LinkedIn',
                icon: 'linkedin',
                url: 'https://linkedin.com/company/plotly'
            },
            {
                label: 'Facebook',
                icon: 'facebook',
                url: 'https://www.facebook.com/Plotly'
            },
            {
                label: 'Github',
                icon: 'github-circle',
                url: 'https://github.com/plotly'
            }
        ]
    }
];
const footerNavLinkIcon = (icon) => (
    <div className="footer-main-section-link-icon"><i className={'mdi mdi-' + icon}/></div>
);

const generateFooterNavLinks = (links) => {
    return (
        links.map((link, i) => {
            return (
                <a className="footer-main-section-link" href={link.url} key={i} target="_blank">
                    <div className="footer-main-section-link-wrapper">
                        {link.icon ? footerNavLinkIcon(link.icon) : ''}
                        <div className="footer-main-section-link-label">
                            {link.label}
                        </div>
                    </div>
                </a>
            )

        })
    )
};

const assembleFooterNavigation = (data) => {
    return (
        data.map((section, i) => {
            return (
                <div className="footer-main-section" key={i}>
                    <div className="footer-main-section-wrapper">
                        <div className="footer-main-section-header">
                            {section.label}
                        </div>
                        <nav className="footer-main-section-links">
                            {generateFooterNavLinks(section.links)}
                        </nav>
                    </div>
                </div>
            )

        })
    )
};


class Footer extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {


        return (
            <footer className="footer-main">
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                <div className="footer-main-wrapper">
                    <div className="footer-main-top">
                        <div className="footer-main-top-wrapper">
                            {assembleFooterNavigation(footerData)}
                        </div>
                    </div>
                    <div className="footer-main-bottom">
                        <div className="footer-main-bottom-wrapper">
                            <div className="footer-main-bottom-section">
                                <copyright><span>Copyright &copy; 2017 Plotly.</span> <span>All rights reserved.</span></copyright>
                            </div>
                            <div className="footer-main-bottom-section">
                                <div className="footer-main-bottom-links">
                                    <a href="https://plot.ly/terms-of-service/" target="_blank">Terms of Service</a>
                                    <a href="https://plot.ly/privacy/" target="_blank">Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }

}
export default Footer;