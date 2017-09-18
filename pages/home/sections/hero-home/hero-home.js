import React from "react";
import {
    Hero,
    HeroTop,
    HeroMessaging,
    HeroTitle,
    HeroSubtitle,
    HeroActions,
    HeroBottom
} from 'components/hero';
import Buttons from 'components/buttons';
import {ClientLogos} from 'components/global/client-logos';
import styles from "./home-hero.styles.scss";
import Link from 'next/link';

const HeroWrapperStyle = {
    backgroundImage: 'url(https://images-plotly.imgix.net/plotly-marketing-pages/images/new-branding/illustrations/heroes/hero-home@2x.png?auto=compress&auto=format)',
    backgroundSize: 'cover',
    backgroundPosition: '100% 65%',
    backgroundRepeat: 'no-repeat'
};
const HeroButtons = [
    {
        label: 'Try Community Edition',
        title: 'See what you can create with Plotly!',
        icon: null,
        target: '_blank',
        link: 'https://plot.ly/accounts/login/?action=signup',
        button: {
            classes: 'button button-secondary'
        }
    },
    {
        label: 'See Plans + Pricing',
        title: 'See what you can create with Plotly!',
        icon: null,
        target: '_self',
        link: '/products/cloud/',
        button: {
            classes: 'button button-primary'
        }
    }
];

const HeroBottomStyles = {
    paddingBottom: '0px',
    paddingTop: '180px'
};


export default class HomeHero extends React.Component {


    constructor(props) {

        super(props);

    }


    render() {

        return (

            <Hero heroWrapperStyle={HeroWrapperStyle}>
                <HeroTop>
                    <HeroMessaging>
                        <HeroTitle>
                            Visualize Data, Together
                        </HeroTitle>
                        <HeroSubtitle>
                            Plotly lets users easily create interactive charts and dashboards to share online with their audience.
                        </HeroSubtitle>
                    </HeroMessaging>
                    <HeroActions>
                        <Buttons items={HeroButtons}/>
                    </HeroActions>
                </HeroTop>
                <HeroBottom style={HeroBottomStyles}>
                    <h3 className="clients-heading">Trusted By</h3>
                    <ClientLogos />
                </HeroBottom>
            </Hero>
        )
    }
}
