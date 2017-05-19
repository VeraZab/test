import Head from '../head/head'
import Header from '../header/header'
import Footer from '../footer/footer'
import styles from './layout.scss'
import React from 'react';


class Layout extends React.Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.body.classList.remove('no-scroll');
    }

    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                <Head meta={this.props.meta}/>
                <Header pathname={this.props.pathname} />
                <div className="page">
                    { this.props.children }
                </div>
                <Footer />
            </div>
        );
    }
}
export
default
Layout;

