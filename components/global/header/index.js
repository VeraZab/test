import React from "react";
import styles from './header.scss'
import Link from 'next/link';
import NProgress from 'nprogress'
import Router from 'next/router'
import Navigation from './navigation';

Router.onRouteChangeStart = (url) => {
    // console.log(`Loading: ${url}`);
    NProgress.start();
};
Router.onRouteChangeComplete = () => {
    NProgress.done();
};
Router.onRouteChangeError = () => NProgress.done();

class Header extends React.Component {


    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    render() {
        let {doc} = this.props;

        if(doc.data.header_style === 'product-header'){
            return (
                <header className={'header-main header-style--product ' + doc.data.hero_background_style}>
                    <style dangerouslySetInnerHTML={{__html: styles}}/>
                    <div className="header-message">
                        <div className="header-message-wrapper">
                            2 day master classes for Dash, R Shiny, and React/Plotly.js in NYC November 18-19 🎨 📈 🗽 <a href="https://plotcon.plot.ly/workshops" target="_blank">Learn More</a>
                        </div>
                    </div>
                    <div className='header-main-wrapper'>
                        <div className='header-main-left'>
                            <Link prefetch href="/">
                                <a className='logo'>
                                    <div className='logo-wrapper'>
                                        {doc.data.alt_logo.url ? (<img src={doc.data.alt_logo.url} alt={doc.data.title} />) : (<img
                                            src='https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-marketing-pages/images/new-branding/logo/images/plotly-logo-01-stripe%402x.png'
                                            alt='Plotly'/>)}

                                    </div>
                                </a>
                            </Link>

                        </div>
                        <div className="header-main-right">
                            <Navigation data={doc.data.header_navigation} pathname={this.props.pathname} />
                        </div>
                    </div>
                </header>
            );
        }
        return (
            <header className='header-main'>
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                <div className="header-message">
                    <div className="header-message-wrapper">
                        2 day master classes for Dash, R Shiny, and React/Plotly.js in NYC November 18-19 🎨 📈 🗽 <a href="https://plotcon.plot.ly/workshops" target="_blank">Learn More</a>
                    </div>
                </div>
                <div className='header-main-wrapper'>
                    <div className='header-main-left'>
                        <Link prefetch href="/">
                            <a className='logo'>
                                <div className='logo-wrapper'>
                                    <img
                                        src='https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-marketing-pages/images/new-branding/logo/images/plotly-logo-01-stripe%402x.png'
                                        alt='Plotly'/>
                                </div>
                            </a>
                        </Link>

                    </div>
                    <div className="header-main-right">
                        <Navigation pathname={this.props.pathname} />
                    </div>
                </div>
            </header>
        );
    }
}
export
default
Header;

