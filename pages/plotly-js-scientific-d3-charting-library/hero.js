import React from 'react';
import {Hero, HeroTop, HeroMessaging, HeroTitle, HeroSubtitle, HeroActions, HeroBottom} from 'components/hero';
import Buttons from 'components/buttons';
import {ClientLogos} from 'components/global/client-logos';
import Head from 'next/head';
import CodeExplorer from './code-explorer/code-explorer';

const HeroButtons = [
    [


        {
            label: 'Custom Development',
            title: 'Advanced Development',
            icon: null,
            target: '_blank',
            link: '/products/consulting-and-oem/',
            button: {
                classes: 'button button-primary'
            }
        },
        {
            label: 'Documentation',
            title: '',
            icon: {
                type: 'mdi',
                src: 'page'
            },
            target: '_blank',
            link: 'https://plot.ly/javascript/',
            button: {
                classes: 'button button-secondary'
            }
        }

    ]
];

const HeroWrapperStyle = {
    backgroundImage: 'url(https://images-plotly.imgix.net/static/marketing/hero-pricing@2x.png?auto=compress&auto=format)',
    backgroundSize: '1640px',
    backgroundPosition: '50% 80%',
    backgroundRepeat: 'no-repeat'
};

const HeroBottomStyles = {
    paddingBottom: '80px',
    paddingTop: '40px'
};

export default () => (
    <Hero heroWrapperStyle={HeroWrapperStyle}>
        <HeroTop>
            <HeroMessaging>
                <HeroTitle>
                    Plotly.js
                </HeroTitle>
                <HeroSubtitle>
                    D3.js charting for science, engineering, and finance.
                </HeroSubtitle>

            </HeroMessaging>
            <HeroActions>
                <Buttons items={HeroButtons[0]}/>
                <div className="githubStar">
                    <iframe src="https://ghbtns.com/github-btn.html?user=plotly&repo=plotly.js&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
                </div>
                <div className="not-mobile">
                    <CodeExplorer/>
                </div>
            </HeroActions>
        </HeroTop>
        <HeroBottom style={HeroBottomStyles}>
            <ClientLogos />
        </HeroBottom>


    </Hero>
)