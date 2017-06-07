import React from "react";
import styles from "./home-hero.styles.scss";
import {Hero, HeroTop, HeroMessaging, HeroTitle, HeroSubtitle, HeroActions, HeroBottom} from '../../../../components/hero/hero';
import Buttons from '../../../../components/buttons/buttons';
import {Prismic} from 'prismic.io';
import Link from 'next/link';

const HeroWrapperStyle = {
    backgroundImage: 'url(https://images.plot.ly/plotly-marketing-pages/images/new-branding/illustrations/heroes/hero-home@2x.png)',
    backgroundSize: 'cover',
    backgroundPosition: '100% 65%',
    backgroundRepeat: 'no-repeat'
};
const HeroButtons = [
    {
        label: 'Try Community Edition',
        title: 'See what you can create with Plotly!',
        icon: null,
        target: '_self',
        link: '/products/cloud/',
        button: {
            classes: 'button button-secondary'
        }
    },
    {
        label: 'Buy now for $33/mo<sup>*</sup>',
        title: 'See what you can create with Plotly!',
        icon: null,
        target: '_self',
        link: '/products/cloud/',
        button: {
            classes: 'button button-primary'
        }
    }
];

export default class HomeHero extends React.Component {


    constructor(props) {

        super(props);


        // console.log(Prismic.parseDoc(this.props.prismic));
    }


    render() {


        let buttons = this.props.data.buttons.map((button, index) => {
            return (
                <Link href={button.data.link.value.url} key={index} prefetch>
                    <a className={'button button-' + button.data.variant.value }>
                        <div>
                            {button.data.label.value}
                        </div>
                    </a>
                </Link>
            );
        });


        let clients = this.props.data.clients.map((client, index) => {
            return (
                <div key={index} className={'logo-item'}>
                    <img src={client.data.logo.value.main.url}/>
                </div>
            );
        });

        return (

            <Hero heroWrapperStyle={HeroWrapperStyle}>
                <HeroTop>
                    <HeroMessaging>
                        <HeroTitle>
                            {this.props.data.title}
                        </HeroTitle>
                        <HeroSubtitle>
                            <div dangerouslySetInnerHTML={{__html: this.props.data.subtitle}}/>
                        </HeroSubtitle>
                    </HeroMessaging>
                    <HeroActions>
                        <Buttons items={HeroButtons}/>
                        <div className="footnote" dangerouslySetInnerHTML={{__html: this.props.data.footnote}}/>
                    </HeroActions>
                </HeroTop>
                <HeroBottom>
                    <h3 className="clients-heading">Trusted By</h3>
                    <div className="logos-display">
                        <div className="logos-display-wrapper">
                            {clients}
                        </div>
                    </div>
                </HeroBottom>
            </Hero>
        )
    }
}
