import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from 'components/global/header'
import Footer from 'components/global/footer'
import styles from 'components/global/layout/layout.scss'
import metaHead from 'components/global/head'


function Layout(Child) {
    return class Layout extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                projects: [],
                appData: [],
                loaded: true
            }
        }

        static getInitialProps(context) {
            return Child.getInitialProps(context)
        }

        componentWillMount() {
            if (this.props.doc) {
                this.setState({
                    doc: this.props.doc
                });
            }
        }

        componentDidMount() {
            document.body.classList.remove('no-scroll');
        }

        render() {

            let classes = '';
            let layout_styles = {};


            return (
                <div className={'page-layout ' + classes} style={layout_styles}>

                    <div className="page-layout-wrapper">
                        <metaHead />
                        <Head>
                            <style dangerouslySetInnerHTML={{__html: styles}}/>
                            <title>{this.props.doc.data.title}</title>
                            <meta charSet='utf-8'/>
                            <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
                            <link href="/static/mdi/css/materialdesignicons.css" media="all" rel="stylesheet" type="text/css" />
                            <link href="https://plot.ly/favicon.ico?v=2" rel="shortcut icon" />
                        </Head>

                        <Header {...this.props} />


                        <Child {...this.props} state={this.state}/>
                        <Footer />
                    </div>
                </div>
            )
        }
    }
}

export default Layout