import React from 'react'
import styles from './navigation.styles.scss'
import Link from 'next/link'

export default class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileMenu: false,
            productSubmenuActive: false,
            pricingSubmenuActive: false,
            submenu: '',
        }
    }

    mobileMenuClasses() {
        if (this.state.mobileMenu === true) {
            return 'mobile-menu-active'
        }
        if (this.state.mobileMenu === false) {
            return ''
        }
    }
    mobileMenuButtonText() {
        if (this.state.mobileMenu === true) {
            return 'Close'
        }

        if (this.state.mobileMenu === false) {
            return 'Menu'
        }
    }

    toggleMobileMenu(event) {
        event.preventDefault()
        this.setState({
            mobileMenu: !this.state.mobileMenu,
        })
        document.body.classList.toggle('no-scroll', !this.state.mobileMenu)

        document
            .getElementById('site-header')
            .classList.toggle('mobile-menu-active', !this.state.mobileMenu)
    }

    toggleProductSubmenu(event) {

        event.preventDefault()

        if (this.state.productSubmenuActive) {

            this.setState({
                productSubmenuActive: false,
            })

        } else {

            this.setState({
                productSubmenuActive: true,
                pricingSubmenuActive: false,
            })

        }
    }

    togglePricingSubmenu(event) {
        event.preventDefault()
        if (this.state.pricingSubmenuActive) {
            this.setState({
                pricingSubmenuActive: false,
            })
        } else {
            this.setState({
                pricingSubmenuActive: true,
                productSubmenuActive: false,
            })
        }
    }

    storeSubMenu(title) {
        this.setState({
            submenu: title,
        })
    }

    closeSubMenu() {
        this.setState({
            submenu: '',
        })
    }

    render() {
        return (
            <div className="site-header-navigation">
                <style dangerouslySetInnerHTML={{__html: styles}}/>
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
                        {/** Consulting */}
                        <Link href="/products/consulting-and-oem/" prefetch>
                            <a className="navigation-product-item">Consulting</a>
                        </Link>

                        {/** Pricing */}
                        <div className="navigation-product-item-with-submenu">
                            <div className="navigation-product-item" onClick={this.togglePricingSubmenu.bind(this)}>
                                Pricing <i className="mdi mdi-chevron-down"/>
                            </div>
                            {/** Pricing Submenu */}
                            <div
                                className={this.state.pricingSubmenuActive ? 'navigation-product-submenu submenu-active' : "navigation-product-submenu"}>
                                <Link href="/products/cloud" prefetch>
                                    <a
                                        className="navigation-product-submenu-item"
                                        href="/products/cloud"
                                    >
                                        Plotly Cloud
                                    </a>
                                </Link>
                                <Link href="/products/on-premise" prefetch>
                                    <a className="navigation-product-submenu-item">
                                        Plotly On-Premises
                                    </a>
                                </Link>
                                <a
                                    className="navigation-product-submenu-item"
                                    href="https://support.plot.ly"
                                    target="_blank"
                                >
                                    Support Plans
                                </a>
                            </div>
                        </div>

                        {/** Products */}
                        <div className="navigation-product-item-with-submenu">
                            <div className="navigation-product-item" onClick={this.toggleProductSubmenu.bind(this)}>
                                Products <i className="mdi mdi-chevron-down"/>
                            </div>

                            {/** Products Submenu */}
                            <div
                                className={this.state.productSubmenuActive ? "navigation-product-submenu navigation-product-submenu--large submenu-active" : "navigation-product-submenu navigation-product-submenu--large "}>
                                {/** Products Submenu Section */}
                                <div className="navigation-product-submenu-section">
                                    <div className="navigation-product-submenu-section-title">
                                        Business<br />Intelligence
                                    </div>
                                    {/** Products Submenu Items */}
                                    <Link
                                        href={{pathname: '/prismic/chart-studio'}}
                                        as={'/online-chart-maker/'}
                                        prefetch
                                    >
                                        <a className="navigation-product-submenu-item">
                                            Chart Studio
                                        </a>
                                    </Link>
                                    <Link
                                        href={{pathname: '/prismic/dashboards-and-reporting'}}
                                        as={'/dashboards/'}
                                        prefetch
                                    >
                                        <a
                                            className="navigation-product-submenu-item"
                                            href="/dashboards"
                                        >
                                            Dashboard & Reporting
                                        </a>
                                    </Link>
                                    <Link
                                        href={{pathname: '/prismic/slide-decks'}}
                                        as={'/powerpoint-online/'}
                                        prefetch
                                    >
                                        <a
                                            className="navigation-product-submenu-item"
                                            href="/powerpoint-online/"
                                        >
                                            Slide Decks
                                        </a>
                                    </Link>
                                    <Link
                                        href={{pathname: '/prismic/falcon'}}
                                        as={'/database-connectors/'}
                                        prefetch
                                    >
                                        <a className="navigation-product-submenu-item">
                                            Falcon SQL Client (Free)
                                        </a>
                                    </Link>
                                </div>

                                {/** Products Submenu Section */}
                                <div className="navigation-product-submenu-section">
                                    <div className="navigation-product-submenu-section-title">
                                        Data Science &amp;<br />Open Source
                                    </div>
                                    {/** Products Submenu Items */}
                                    <a
                                        className="navigation-product-submenu-item"
                                        href="/products/dash"
                                    >
                                        Dash
                                    </a>
                                    <Link
                                        href="/plotly-js-scientific-d3-charting-library/"
                                        prefetch
                                    >
                                        <a className="navigation-product-submenu-item">Plotly.js</a>
                                    </Link>
                                    <Link href="/d3-js-for-python-and-pandas-charts/" prefetch>
                                        <a className="navigation-product-submenu-item">Plotly.py</a>
                                    </Link>
                                    <Link href="/d3-js-for-r-and-shiny-charts/" prefetch>
                                        <a className="navigation-product-submenu-item">Plotly.R</a>
                                    </Link>
                                </div>

                                {/** Products Submenu Section */}
                                <div
                                    className="navigation-product-submenu-section navigation-product-submenu-section--span-all">
                                    <div className="navigation-product-submenu-section-title">
                                        Platforms
                                    </div>

                                    {/** Products Submenu Items */}
                                    <Link href="/products/on-premise" prefetch>
                                        <a className="navigation-product-submenu-item">
                                            Plotly On-Premises
                                        </a>
                                    </Link>
                                    <Link href="/products/cloud" prefetch>
                                        <a className="navigation-product-submenu-item">
                                            Plotly Cloud
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/** Master Classes */}
                        <a
                            className="navigation-product-item"
                            href="https://plotcon.plot.ly/"
                        >
                            Master Classes
                        </a>
                    </nav>
                </div>
            </div>
        )
    }
}
