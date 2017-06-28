import React from 'react';
import {Hero, HeroTop, HeroMessaging, HeroTitle, HeroSubtitle, HeroActions, HeroBottom} from '../../../components/hero/hero';
import Buttons from '../../../components/buttons/buttons';

const HeroButtons = [
    {
        label: 'Contact Us',
        title: 'A Plotly sales engineer will answer any questions you might have.',
        icon: null,
        target: '_blank',
        typeform: true,
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
                        src="https://images.plot.ly/static/marketing/client-logos/google-logo.png" />
                    </div>
                    <div className="logo-item"><img
                        src="https://images.plot.ly/static/marketing/client-logos/pg-logo.png" />
                    </div>
                    <div className="logo-item"><img
                        src="https://images.plot.ly/static/marketing/client-logos/vtt-logo.png" />
                    </div>
                    <div className="logo-item"><img
                        src="https://images.plot.ly/static/marketing/client-logos/goji-logo.png" />
                    </div>
                    <div className="logo-item"><img
                        src="https://images.plot.ly/static/marketing/client-logos/smpl-bio-logo.png" />
                    </div>
                    <div className="logo-item"><img
                        src="https://images.plot.ly/static/marketing/client-logos/shell-logo.png" />
                    </div>
                </div>
            </div>
        </HeroBottom>
    </Hero>
)