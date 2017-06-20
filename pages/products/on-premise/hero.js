import React from 'react';
import {Hero, HeroTop, HeroMessaging, HeroTitle, HeroSubtitle, HeroActions, HeroBottom} from '../../../components/hero/hero';
import Buttons from '../../../components/buttons/buttons';

const HeroButtons = [
    {
        label: 'Contact Us',
        title: 'A Plotly sales engineer will answer any questions you might have.',
        icon: null,
        target: '_blank',
        link: 'https://plotly.typeform.com/to/seG7Vb',
        button: {
            classes: 'button button-primary'
        }
    }
];

const HeroWrapperStyle = {
    backgroundImage: 'url(https://images.plot.ly/plotly-marketing-pages/images/new-branding/backgrounds/bg-graph.svg)',
    backgroundSize: 'cover',
    backgroundPosition: '50% 80%',
    backgroundRepeat: 'no-repeat'
};

const HeroBottomStyles = {
    paddingBottom: '100px',
    paddingTop: '20px'
};

export default () => (
    <Hero heroWrapperStyle={HeroWrapperStyle}>
        <HeroTop>
            <HeroMessaging>
                <HeroTitle>
                    Safe and secure, behind your firewall
                </HeroTitle>
                <HeroSubtitle>
                    Plotly On Premise provides the best of both worlds: web based collaboration and sharing
                    capabilities with data and visualizations that never leave your corporate environment.
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