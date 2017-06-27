import Head from '../head/head'
import Header from '../header/header'
import Footer from '../footer/footer'
import styles from './layout.scss'
import React from 'react';
import ReactGA from 'react-ga';


class Layout extends React.Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.body.classList.remove('no-scroll');
        // Plotly's code
        ReactGA.initialize('UA-39373211-1')
        ReactGA.pageview(document.location.pathname)
    }

    render() {

        if(this.props.hideHeader === "true"){
           return (
               <div>
                   <style dangerouslySetInnerHTML={{__html: styles}}/>
                   <Head meta={this.props.meta}/>
                   <div className="page">
                       { this.props.children }
                   </div>
                   <Footer />
               </div>
           )
        } else {
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
}
export
default
Layout;


