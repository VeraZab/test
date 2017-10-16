import React from "react";
import styles from './navigation.styles.scss'
import Link from 'next/link';


export default class Navigation extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            mobileMenu: false,
            productSubmenuActive: false,
            submenu: ''
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

        document.getElementById('main-nav').classList.toggle('mobile-menu-active', !this.state.mobileMenu);
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

    storeSubMenu(title) {
        this.setState({
            submenu: title
        });

    }

    closeSubMenu() {
        this.setState({
            submenu: ''
        });
    }


    render() {


        return (
            <div className="site-header-navigation">
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                <div className={'site-header-navigation-wrapper'}>
                    <div className='mobile-menu-button'
                         onClick={this.toggleMobileMenu.bind(this)}>
                        <a className="navigation-product-item">
                            {this.mobileMenuButtonText()}
                        </a>
                    </div>
                    <nav className={"site-header-nav" + this.mobileMenuClasses()}>
                        {/** Consulting */}
                        <a className="navigation-product-item" href="/products/consulting-and-oem/">Consulting</a>

                        {/** Pricing */}
                        <div className="navigation-product-item-with-submenu">

                            <div className="navigation-product-item">Pricing <i
                                className="mdi mdi-chevron-down"/></div>
                            {/** Pricing Submenu */}
                            <div className="navigation-product-submenu">
                                <a className="navigation-product-submenu-item" href="/products/cloud">Plotly
                                    Cloud</a>
                                <a className="navigation-product-submenu-item" href="/products/on-premises">Plotly
                                    On-Premises</a>
                                <a className="navigation-product-submenu-item" href="https://support.plot.ly"
                                   target="_blank">Support
                                    Plans</a>
                            </div>

                        </div>

                        {/** Products */}
                        <div className="navigation-product-item-with-submenu">
                            <div className="navigation-product-item">Products <i
                                className="mdi mdi-chevron-down"/></div>

                            {/** Products Submenu */}
                            <div className="navigation-product-submenu navigation-product-submenu--large">

                                {/** Products Submenu Section */}
                                <div className="navigation-product-submenu-section">
                                    <div className="navigation-product-submenu-section-title">
                                        Business<br />Intelligence
                                    </div>
                                    {/** Products Submenu Items */}
                                    <a className="navigation-product-submenu-item" href="/online-chart-maker/">Chart
                                        Studio</a>
                                    <a className="navigation-product-submenu-item" href="/dashboards">Dashboard
                                        & Reporting</a>
                                    <a className="navigation-product-submenu-item" href="/powerpoint-online/">Slide
                                        Decks</a>
                                    <a className="navigation-product-submenu-item" href="/database-connectors/">Falcon
                                        SQL
                                        Client (Free)</a>
                                </div>

                                {/** Products Submenu Section */}
                                <div className="navigation-product-submenu-section">
                                    <div className="navigation-product-submenu-section-title">
                                        Data Science &amp;<br />Open Source
                                    </div>
                                    {/** Products Submenu Items */}
                                    <a className="navigation-product-submenu-item" href="/products/dash">Dash</a>
                                    <a className="navigation-product-submenu-item"
                                       href="/plotly-js-scientific-d3-charting-library/">Plotly.js</a>
                                    <a className="navigation-product-submenu-item"
                                       href="/d3-js-for-python-and-pandas-charts/">Plotly.py</a>
                                    <a className="navigation-product-submenu-item"
                                       href="/d3-js-for-r-and-shiny-charts/">Plotly.R</a>
                                </div>

                                {/** Products Submenu Section */}
                                <div
                                    className="navigation-product-submenu-section navigation-product-submenu-section--span-all">
                                    <div className="navigation-product-submenu-section-title">
                                        Platforms
                                    </div>

                                    {/** Products Submenu Items */}
                                    <a className="navigation-product-submenu-item" href="/products/on-premises">Plotly
                                        On-Premises</a>
                                    <a className="navigation-product-submenu-item" href="/products/cloud">Plotly
                                        Cloud</a>
                                </div>
                            </div>
                        </div>
                        {/** Master Classes */}
                        <a className="navigation-product-item" href="https://plotcon.plot.ly/">Master Classes</a>
                    </nav>
                </div>
            </div>
        );

    }
}