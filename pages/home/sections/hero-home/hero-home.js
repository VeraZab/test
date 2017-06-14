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

const clientLogos = [
    {
        img: 'https://prismic-io.s3.amazonaws.com/plotly-marketing/789677ceae5feefc04eb68e9c4576a2841786d78_google.png'
    },
    {
        img: 'https://prismic-io.s3.amazonaws.com/plotly-marketing/dcebed6ba3f7c0e5c0a25958581beaaf7d8c5fec_pg.png'
    },
    {
        img: 'https://prismic-io.s3.amazonaws.com/plotly-marketing/4caece2b46bac6d8e824d6db6db9833b17910f13_vtt.png'
    },
    {
        img: 'https://prismic-io.s3.amazonaws.com/plotly-marketing/1ea67d8846c42f9d30c60745a38548148fe1f5ff_goji.png'
    },
    {
        img: 'https://prismic-io.s3.amazonaws.com/plotly-marketing/e023e2380e016f637d01d3d300abe992a1ff2eea_smplbio.png'
    },
    {
        img: 'https://prismic-io.s3.amazonaws.com/plotly-marketing/5b700008a45a206c99aabbcedb7984d87e5d7d9a_shell.png'
    }
];

export default class HomeHero extends React.Component {


    constructor(props) {

        super(props);

    }


    render() {


        let clients = clientLogos.map((client, index) => {
            return (
                <div key={index} className={'logo-item'}>
                    <img src={client.img}/>
                </div>
            );
        });

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
                            <p>* Billed annually. Discounted pricing for students and instructors <a href="http://#">available</a>.
                            </p>
                        </div>
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