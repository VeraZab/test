import React from 'react';
import {Hero, HeroTop, HeroMessaging, HeroTitle, HeroSubtitle, HeroActions, HeroBottom} from '../../../components/hero/hero';
import Buttons from '../../../components/buttons/buttons';
import {Browser} from '../../../components/browser/browser';

const HeroButtons = [
    [
        {
            label: 'Create a Dashboard',
            title: 'See what you can create with Plotly!',
            icon: {
                type: 'mdi',
                src: 'plus'
            },
            target: '_self',
            link: '/create',
            button: {
                classes: 'button button-primary'
            }
        },
        {
            label: 'Documentation',
            title: 'See what you can create with Plotly!',
            icon: null,
            target: '_self',
            link: '/create',
            button: {
                classes: 'button button-secondary'
            }
        }
    ],
    [


    ]
];

const HeroWrapperStyle = {
    backgroundImage: 'url(https://now.plot.ly/static/images/hero-pricing@2x.png)',
    backgroundSize: '1640px',
    backgroundPosition: '50% 80%',
    backgroundRepeat: 'no-repeat'
};

const HeroBottomStyles = {
    paddingBottom: '0px',
    paddingTop: '20px'
};

export default () => (
    <Hero heroWrapperStyle={HeroWrapperStyle}>
        <HeroTop>
            <HeroMessaging>
                <HeroTitle>
                    Plotly Dashboards
                </HeroTitle>
                <HeroSubtitle>
                    Create branded, online dashboards with D3.js Plotly charts.
                </HeroSubtitle>
            </HeroMessaging>
            <HeroActions>
                <Buttons items={HeroButtons[0]}/>
                <Buttons items={HeroButtons[1]}/>
            </HeroActions>
        </HeroTop>
        <HeroBottom style={HeroBottomStyles}>
            <Browser>
                <img src='http://marketing.plot.ly/static/marketing/assets/images/dashboards.png'/>
            </Browser>
        </HeroBottom>
    </Hero>
)