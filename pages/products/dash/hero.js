import React from 'react';
import {
    Hero,
    HeroTop,
    HeroMessaging,
    HeroTitle,
    HeroSubtitle,
    HeroActions,
    HeroBottom
} from '../../../components/hero/hero';
import Buttons from '../../../components/buttons/buttons';

const HeroButtons = [
    [
        {
            label: 'Get Started',
            subtitle: null,
            title: '',
            icon: null,
            target: '_self',
            link: '/dash',
            button: {
                classes: 'button button-primary button-white'
            }
        },
        {
            label: 'Read the Announcement',
            subtitle: null,
            title: '',
            icon: null,
            target: '_self',
            link: '/dash',
            button: {
                classes: 'button button-primary button-white'
            }
        }
    ],
    []
];

const HeroStyles = {
    minHeight: '70vh',
    background: 'linear-gradient(0deg, #3B9ACA 0%, #2D6CA5 39%, #222654 100%) !important'

};

const HeroBottomStyles = {
    paddingBottom: '0px',
    paddingTop: '20px'
};

export default class HeroSection extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Hero className="no-dots dash-hero align-left split-half" style={HeroStyles}>
                <HeroTop>
                    <HeroMessaging>
                        <div className="dash-logo">
                            <div className="dash-logo-wrapper">
                                <img src="/static/images/dash/dash-logo.png" alt="Dash by Plotly"/>
                            </div>
                        </div>
                        <HeroTitle>
                            Easily build beautiful web-based interfaces in&nbsp;Python
                        </HeroTitle>
                        <h3>
                            Dash is a Python framework for building analytical
                            web applications. No JavaScript required.
                        </h3>
                        <p>
                            Built on top of Plotly.js, React, and Flask,
                            Dash ties modern UI elements like dropdowns,
                            sliders, and graphs to your analytical
                            Python code.
                        </p>
                        <HeroActions>
                            <Buttons items={HeroButtons[0]}/>
                            <Buttons items={HeroButtons[1]}/>
                        </HeroActions>
                    </HeroMessaging>

                    <div className="hero-graphic dash dash-graphic">
                        <img src="/static/images/dash/dash-hero-visual@2x.png" alt=""/>
                    </div>

                </HeroTop>
            </Hero>
        )
    }

}
