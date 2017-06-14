import React from "react";
import Home from "./home/home";
import 'isomorphic-fetch'
import {Prismic} from 'prismic.io';




class Index extends React.Component {


    static async getInitialProps() {

        const pageData = await Prismic.api("https://plotly-marketing.prismic.io/api").then(api => {
            // console.log(api.query(''));

            return api.getByUID('home', 'home');


        }).then(response => {

            let hero = {
                title: response.getText('home.hero_title'),
                    subtitle: response.getStructuredText('home.hero_subtitle').asHtml(),
                    buttons: response.getGroup('home.hero_buttons').toArray(),
                    footnote: response.getStructuredText('home.hero_footnote').asHtml(),
                    clients: response.getGroup('home.hero_clients').toArray()
            };
            return {response, hero};

        }, function (err) {

            console.log("Something went wrong: ", err);

        });

        return {
            pageData: pageData
        }
    }


    constructor(props) {
        super(props);

        this.state = {
            pagecontent: null,
            prismic: null
        }


    }

    componentDidMount(){
        const pageData =  Prismic.api("https://plotly-marketing.prismic.io/api").then(api => {
            // console.log(api.query(''));

            return api.getByUID('home', 'home');


        }).then(response => {


           this.setState({
               prismic: response
           })

        }, function (err) {

            console.log("Something went wrong: ", err);

        });

    }


    render() {
        return (<Home pageContent={this.props.pageData} prismic={this.props.pageData.response}/>)
    }
}


export
default
Index;
