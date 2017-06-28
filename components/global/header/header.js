import React from "react";
import styles from './header.scss'
import Link from 'next/link';
import NProgress from 'nprogress'
import Router from 'next/router'
import Navigation from './navigation/navigation';

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
        return (
            <header className='header-main'>
                <style dangerouslySetInnerHTML={{__html: styles}}/>

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

