import React from 'react';
import {
    Hero,
    HeroTop,
    HeroMessaging,
    HeroTitle,
    HeroSubtitle,
    HeroActions,
    HeroBottom
} from 'components/hero/hero';
import Buttons from 'components/buttons/buttons';

const HeroButtons = [
    [
        {
            label: 'Get Started',
            subtitle: null,
            title: '',
            icon: null,
            target: '_blank',
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
            target: '_blank',
            link: 'https://medium.com/@plotlygraphs/introducing-dash-5ecf7191b503',
            button: {
                classes: 'button button-secondary'
            }
        }
    ],
    []
];

const HeroStyles = {

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
                <div className="dash-header">
                  <div className="dash-header-wrapper">
                      <div className="dash-logo">
                          <div className="dash-logo-wrapper">
                              <img src="https://images.plot.ly/static/marketing/dash/dash-logo.png" alt="Dash by Plotly"/>
                          </div>
                      </div>
                      <div className="dash-navigation">
                          <a href="https://plotcon.plot.ly/workshops" target="_blank" className="dash-navigation-item">
                              MASTER CLASS
                          </a>
                          <a href="/products/on-premise/" target="_blank" className="dash-navigation-item">
                              Pricing
                          </a>
                          <a target="_blank" href="https://plot.ly/dash/" className="dash-navigation-item">
                              User Guide
                          </a>
                          <a target="_self" href="/" className="dash-navigation-item">
                              Plotly
                          </a>
                      </div>
                  </div>
                </div>
                <HeroTop>
                    <HeroMessaging>
                        <HeroTitle>
                            Build beautiful web-based interfaces in&nbsp;Python
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
                        <img src="https://images.plot.ly/static/marketing/dash/dash-hero-visual@2x.png" alt=""/>
                    </div>

                </HeroTop>
            </Hero>
        )
    }

}
