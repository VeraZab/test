import React from 'react';
import {Hero, HeroTop, HeroMessaging, HeroTitle, HeroSubtitle, HeroActions, HeroBottom} from '../../components/hero/hero';
import Buttons from '../../components/buttons/buttons';

const HeroButtons = [
    [

        {
            label: 'Documentation',
            title: 'See what you can create with Plotly!',
            icon: {
                type: 'mdi',
                src: 'page'
            },
            target: '_self',
            link: '/create',
            button: {
                classes: 'button button-secondary'
            }
        },
        {
            label: 'Request an Integration',
            title: 'See what you can create with Plotly!',
            icon: null,
            target: '_self',
            link: '/create',
            button: {
                classes: 'button button-primary'
            }
        },
        {
            label: 'Contribute',
            title: 'See what you can create with Plotly!',
            icon: null,
            target: '_self',
            link: '/create',
            button: {
                classes: 'button button-secondary'
            }
        }

    ],
    []
];

const HeroWrapperStyle = {
    backgroundImage: 'url(https://now.plot.ly/static/images/hero-pricing@2x.png)',
    backgroundSize: '1640px',
    backgroundPosition: '50% 80%',
    backgroundRepeat: 'no-repeat'
};

const HeroBottomStyles = {
    paddingBottom: '0px',
    paddingTop: '100px'
};

export default () => (
    <Hero heroWrapperStyle={HeroWrapperStyle}>
        <HeroTop>
            <HeroMessaging>
                <HeroTitle>
                    Plotly.js
                </HeroTitle>
                <HeroSubtitle>
                    An MIT licensed, D3.js and WebGL charting library for science, engineering, and finance.
                </HeroSubtitle>

            </HeroMessaging>
            <HeroActions>
                <Buttons items={HeroButtons[0]}/>
            </HeroActions>
        </HeroTop>
        <HeroBottom style={HeroBottomStyles}>

        </HeroBottom>
    </Hero>
)