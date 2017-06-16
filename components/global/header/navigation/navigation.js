import React from "react";
import styles from './navigation.styles.scss'
import Link from 'next/link';

const navigationRight = [
    {
        id: 1,
        label: 'Create',
        slug: 'create',
        title: 'See what you can create with Plotly!',
        icon: null,
        target: '_self',
        link: 'https://plot.ly/create',
        button: {
            classes: 'button button-small button-primary'

        },
        submenu: null
    },
    {
        id: 2,
        label: 'Sign In',
        slug: 'signin',
        title: 'Sign in or Sign up with Plotly',
        icon: null,
        target: '_blank',
        link: 'https://plot.ly/accounts/login/?action=login',
        button: {
            classes: 'button button-small button-secondary'
        },
        submenu: null
    },
    {
        id: 3,
        label: 'Request a Demo',
        slug: 'request-a-demo',
        title: 'Request a demo or contact our sales team.',
        icon: null,
        target: '_blank',
        link: 'https://plotly.typeform.com/to/seG7Vb',
        button: {
            classes: 'button button-small button-secondary'
        },
        submenu: null
    }
];
const navigationLeft = [
    {
        id: 4,
        label: 'Pricing',
        slug: 'pricing',
        title: 'See all of our pricing options.',
        icon: null,
        target: null,
        link: null,
        button: null,
        submenu: {
            sections: [
                {
                    label: null,
                    items: [
                        {
                            id: 10,
                            label: 'Cloud',
                            slug: '/products/cloud/',
                            title: 'See all of our pricing options.',
                            icon: null,
                            target: '_self',
                            link: '/products/cloud/',
                        },
                        {
                            id: 11,
                            label: 'On Premise',
                            slug: '/products/on-premise/',
                            title: 'The behind-the-firewall version of Plotly Cloud.',
                            icon: null,
                            target: '_self',
                            link: '/products/on-premise/',
                        },
                        {
                            id: 12,
                            label: 'Support',
                            slug: '/products/cloud/',
                            title: 'Learn about our dedicated support plan options.',
                            icon: null,
                            target: '_blank',
                            link: 'http://support.plot.ly/'
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 5,
        label: 'Products',
        slug: 'products',
        title: 'See all of our pricing options.',
        icon: null,
        target: null,
        link: null,
        button: null,
        submenu: {
            sections: [
                {
                    label: 'Business Intelligence',
                    items: [
                        {
                            id: 6,
                            label: 'Chart Maker',
                            slug: 'chart-maker',
                            title: 'See all of our pricing options.',
                            icon: 'chart-maker',
                            target: '_self',
                            link: '/products/online-chart-maker/'
                        },
                        {
                            id: 7,
                            label: 'Dashboards',
                            slug: 'dashboards',
                            title: 'See all of our pricing options.',
                            icon: 'dashboards',
                            target: '_self',
                            link: '/products/dashboards/'
                        },
                        {
                            id: 8,
                            label: 'Presentations',
                            slug: 'presentations',
                            title: 'See all of our pricing options.',
                            icon: 'presentations',
                            target: '_self',
                            link: '/products/powerpoint-online/'
                        },
                        {
                            id: 9,
                            label: 'Database Connectors',
                            slug: 'database-connectors',
                            title: 'Connect Plotly charts and dashboards to your SQL and Redshift databases.',
                            icon: 'sql-connector',
                            target: '_self',
                            link: '/products/database-connectors/'
                        }
                    ]
                },
                {
                    label: 'Data Science and Open-Source',
                    items: [
                        {
                            id: 11,
                            label: 'Plotly.js',
                            slug: 'plotly-js',
                            title: 'The open source JavaScript graphing library that powers Plotly',
                            icon: 'js',
                            target: '_blank',
                            link: 'https://plot.ly/javascript/'
                        },
                        {
                            id: 12,
                            label: 'Plotly for Python',
                            slug: 'plotly-for-python',
                            title: "Plotly's Python graphing library makes interactive, publication-quality graphs online.",
                            icon: 'python',
                            target: '_blank',
                            link: 'https://plot.ly/python/'
                        },
                        {
                            id: 13,
                            label: 'Plotly for R and Shiny',
                            slug: 'plotly-for-r',
                            title: "Plotly's R graphing library makes interactive, publication-quality graphs online.",
                            icon: 'r',
                            target: '_blank',
                            link: 'https://plot.ly/r/'
                        },
                        {
                            id: 14,
                            label: 'Plotly for MATLAB',
                            slug: 'plotly-for-matlab',
                            title: 'Plotly brings interactive, online graphing to your MATLAB console.',
                            icon: 'matlab',
                            target: '_blank',
                            link: 'https://plot.ly/matlab/'
                        }
                    ]

                }
            ]
        }
    },
    {
        id: 16,
        label: 'Consulting',
        slug: 'consulting-and-oem',
        title: "Plotly's engineering team has deep expertise in technical computing, open technologies and complex visualization.",
        icon: null,
        target: '_self',
        link: '/products/consulting-and-oem/',
        button: null,
        submenu: null
    },
    {
        id: 17,
        label: 'Support Plans',
        slug: 'support',
        title: 'Learn about advanced support plans we offer.',
        icon: null,
        target: '_blank',
        link: 'https://support.plot.ly/',
        button: null,
        submenu: null
    },

];


export default class Navigation extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            mobileMenu: false,
            productSubmenuActive: false
        };

    }


    componentDidMount() {
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
    }

    toggleProductSubmenu(event) {
        event.preventDefault();
        if (this.state.productSubmenuActive) {
            this.setState({
                productSubmenuActive: false
            });
        } else {
            this.setState({
                productSubmenuActive: true
            });
        }
    }


    render() {


        let isActive = '';


        // this will generate our nav items
        let generateNavItem = (items) => {
            return (
                items.map((item, i) => {
                    if (item.submenu) {
                        return (
                            navItemWithSubmenu(item, i)
                        )
                    } else {
                        return (
                            navItemLink(item, i)
                        )
                    }

                })
            )
        };


        // this is a nav item with a submenu
        let navItemWithSubmenu = (item, i) => {

            // Generate our navigation submenu sections
            let navSubmenuSections = (sections) => {

                // if the nav submenu section has a label,
                // this will be the markup for it
                let navSubmenuSectionLabel = (section) => {
                    return (
                        <div className="nav-item-submenu-section-label">
                            {section.label}
                        </div>
                    )
                };

                // Return the submenu section with its navlinks
                return (
                    sections.map((section, i) => {
                        return (
                            <div className="nav-item-submenu-section" key={i}>
                                {section.label !== null ? navSubmenuSectionLabel(section) : ''}
                                {generateNavItem(section.items)}
                            </div>
                        );
                    })
                )
            };

            let classes = '';

            if (this.state.productSubmenuActive) {
                classes += ' active';
            }

            // Now let's build the nav item with submenu
            return (
                <div className='nav-item nav-item--with-submenu' key={item.id}>
                    <div title={item.title} className='nav-item-wrapper'>
                        <div className='nav-item-label' onClick={this.toggleProductSubmenu.bind(this)}>
                            <div className='nav-item-label-text'>
                                {item.label}
                            </div>
                        </div>
                    </div>
                    <div className={'nav-item-submenu' + classes}>
                        <div className="nav-item-submenu-wrapper">
                            <div className="mobile-only close submenu-close"
                                 onClick={this.toggleProductSubmenu.bind(this)}>
                                Close
                            </div>
                            {navSubmenuSections(item.submenu.sections)}
                        </div>
                    </div>
                </div>
            )
        };


        // this is the smallest piece, a nav link
        let navItemLink = (item, i) => {
            if (item.link === this.props.pathname) {
                isActive = ' active'
            } else {
                isActive = ''
            }
            if (!item.button && item.target !== '_self') {
                return (
                    <div className={'nav-item' + isActive} key={item.id}>
                        <a href={item.link} target={item.target} title={item.title} className='nav-item-wrapper'>
                            <div className='nav-item-label'>
                                <div className='nav-item-label-text'>
                                    {item.label}
                                </div>
                            </div>
                        </a>
                    </div>
                )
            } else if (!item.button && item.target === '_self') {

                if (item.link === this.props.pathname) {
                    isActive = ' active'
                } else {
                    isActive = ''
                }
                return (
                    <div className={'nav-item' + isActive} key={item.id}>
                        <Link prefetch href={item.link}>
                            <a target={item.target} title={item.title}
                               className='nav-item-wrapper'>
                                <div className='nav-item-label'>
                                    <div className='nav-item-label-text'>
                                        {item.label}
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                )
            } else if (item.button && item.target === '_self') {
                return (
                    <Link prefetch href={item.link} key={item.id}>
                        <a target={item.target}
                           title={item.title}
                           className={item.button.classes}>
                            {item.label}
                        </a>
                    </Link>
                )
            } else if (item.button && item.target !== '_self') {
                return (
                    <a href={item.link}
                       target={item.target}
                       title={item.title}
                       className={item.button.classes}
                       key={item.id}>
                        {item.label}
                    </a>
                )
            }

        };

        return (
            <div className="header-main-navigation">
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                <div className={'header-main-navigation-wrapper'}>
                    <div className='nav-item mobile-menu-button'
                         onClick={this.toggleMobileMenu.bind(this)}>
                        <div className='nav-item-wrapper'>
                            <div className='nav-item-label'>
                                <div className='nav-item-label-text'>
                                    {this.mobileMenuButtonText()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"header-main-navigations " + this.mobileMenuClasses()}>
                        <nav className={`nav-main`}>
                            <div className='nav-main-wrapper'>
                                {generateNavItem(navigationLeft)}
                            </div>
                        </nav>
                        <nav className={`nav-main-actions`}>
                            <div className='buttons'>
                                {generateNavItem(navigationRight)}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );

    }
}