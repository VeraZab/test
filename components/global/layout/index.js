import Head from '../head'
import Header from '../header'
import Footer from '../footer'
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
        ReactGA.initialize('UA-39373211-1');
        ReactGA.pageview(document.location.pathname);
        (function () {
            let qs, js, q, s, d = document, gi = d.getElementById, ce = d.createElement,
                gt = d.getElementsByTagName, id = "typef_orm_share",
                b = "https://embed.typeform.com/";
            if (!gi.call(d, id)) {
                js = ce.call(d, "script");
                js.id = id;
                js.src = b + "embed.js";
                q = gt.call(d, "script")[0];
                q.parentNode.insertBefore(js, q)
            }
        })();
    }

    render() {

        if (this.props.hideHeader === "true") {
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
                    <Header pathname={this.props.pathname}/>
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

