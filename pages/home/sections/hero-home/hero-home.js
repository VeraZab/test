import React from "react";
import {
    Hero,
    HeroTop,
    HeroMessaging,
    HeroTitle,
    HeroSubtitle,
    HeroActions,
    HeroBottom
} from '../../../../components/hero/hero';
import Buttons from '../../../../components/buttons/buttons';
import {ClientLogos} from '../../../../components/global/client-logos/client-logos';

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
                            Plotly is a data visualization platform for clickers and coders alike.
                        </HeroSubtitle>
                    </HeroMessaging>
                    <HeroActions>
                        <Buttons items={HeroButtons}/>
                        <div className="footnote">
                            <p>* Billed annually. Discounted pricing for students and instructors <a href="/products/cloud/">available</a>.
                            </p>
                        </div>
                    </HeroActions>
                </HeroTop>
                <HeroBottom>
                    <h3 className="clients-heading">Trusted By</h3>
                    <ClientLogos />
                </HeroBottom>
            </Hero>
        )
    }
}