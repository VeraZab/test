import React from 'react';
import {Hero, HeroTop, HeroMessaging, HeroTitle, HeroSubtitle, HeroActions, HeroBottom} from 'components/hero';
import Buttons from 'components/buttons';
import {ClientLogos} from 'components/global/client-logos';

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
    },
    {
        label: 'Plotly On-Premises',
        title: 'Looking for a behind-the-firewall solution? Deploy Plotly On-Premises on your secure, local network.',
        icon: null,
        target: '_self',
        link: '/products/on-premise/',
        button: {
            classes: 'button button-secondary'
        }
    }
];

const HeroWrapperStyle = {
    backgroundImage: 'url(https://images.plot.ly/static/marketing/hero-pricing@2x.png)',
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
            <ClientLogos />
        </HeroBottom>
    </Hero>
)