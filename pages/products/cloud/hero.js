import React from 'react';
import {Hero, HeroTop, HeroMessaging, HeroTitle, HeroSubtitle, HeroActions, HeroBottom} from '../../../components/hero/hero';
import Buttons from '../../../components/buttons/buttons';

const HeroButtons = [
    {
        label: 'Get Started For Free',
        title: 'See what you can create with Plotly!',
        icon: null,
        target: '_self',
        link: 'https://plot.ly/accounts/login/?action=signin',
        button: {
            classes: 'button button-primary'
        }
    }
];

const HeroWrapperStyle = {
    backgroundImage: 'url(/static/images/hero-pricing@2x.png)',
    backgroundSize: '1640px',
    backgroundPosition: '50% 80%',
    backgroundRepeat: 'no-repeat'
};

const HeroBottomStyles = {
    paddingBottom: '130px',
    paddingTop: '20px'
};

export default () => (
    <Hero heroWrapperStyle={HeroWrapperStyle}>
        <HeroTop>
            <HeroMessaging>
                <HeroTitle>
                    Get started now, pick a plan later.
                </HeroTitle>
                <HeroSubtitle>
                    Plotly is free to use for <em>public</em> charts and dashboards. Collaborate on unlimited <em>private</em> charts and dashboards with a paid plan.
                </HeroSubtitle>
            </HeroMessaging>
            <HeroActions>
                <Buttons items={HeroButtons}/>
            </HeroActions>
        </HeroTop>
        <HeroBottom style={HeroBottomStyles}>
            <div className="logos-display">
                <div className="logos-display-wrapper">
                    <div className="logo-item"><img
                        src="https://prismic-io.s3.amazonaws.com/plotly-marketing/789677ceae5feefc04eb68e9c4576a2841786d78_google.png" />
                    </div>
                    <div className="logo-item"><img
                        src="https://prismic-io.s3.amazonaws.com/plotly-marketing/dcebed6ba3f7c0e5c0a25958581beaaf7d8c5fec_pg.png" />
                    </div>
                    <div className="logo-item"><img
                        src="https://prismic-io.s3.amazonaws.com/plotly-marketing/4caece2b46bac6d8e824d6db6db9833b17910f13_vtt.png" />
                    </div>
                    <div className="logo-item"><img
                        src="https://prismic-io.s3.amazonaws.com/plotly-marketing/1ea67d8846c42f9d30c60745a38548148fe1f5ff_goji.png" />
                    </div>
                    <div className="logo-item"><img
                        src="https://prismic-io.s3.amazonaws.com/plotly-marketing/e023e2380e016f637d01d3d300abe992a1ff2eea_smplbio.png" />
                    </div>
                    <div className="logo-item"><img
                        src="https://prismic-io.s3.amazonaws.com/plotly-marketing/5b700008a45a206c99aabbcedb7984d87e5d7d9a_shell.png" />
                    </div>
                </div>
            </div>
        </HeroBottom>
    </Hero>
)