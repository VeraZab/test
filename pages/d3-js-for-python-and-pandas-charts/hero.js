import React from 'react';
import {Hero, HeroTop, HeroMessaging, HeroTitle, HeroSubtitle, HeroActions, HeroBottom} from 'components/hero';
import Buttons from 'components/buttons';
import Head from 'next/head';
import CodeExplorer from './code-explorer/code-explorer';

const HeroButtons = [
    [


        {
            label: 'Custom Development',
            title: 'See what you can create with Plotly!',
            icon: null,
            target: '_self',
            link: '/products/consulting-and-oem/',
            button: {
                classes: 'button button-primary'
            }
        },
        {
            label: 'Developer Support Plans',
            title: 'See what you can create with Plotly!',
            icon: null,
            target: '_target',
            link: 'https://support.plot.ly/plans',
            button: {
                classes: 'button button-primary'
            }
        },
        {
            label: 'Documentation',
            title: 'See what you can create with Plotly!',
            icon: {
                type: 'mdi',
                src: 'page'
            },
            target: '_blank',
            link: 'https://plot.ly/python/',
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
    paddingBottom: '60px',
    paddingTop: '0px'
};

export default () => (
    <Hero heroWrapperStyle={HeroWrapperStyle}>
        <HeroTop>
            <HeroMessaging>
                <HeroTitle>
                    Plotly for Python
                </HeroTitle>
                <HeroSubtitle>
                    Open-source Python interface to D3-powered Plotly.js
                </HeroSubtitle>

            </HeroMessaging>
            <HeroActions>
                <Buttons items={HeroButtons[0]}/>
                <div className="githubStar">
                    <iframe src="https://ghbtns.com/github-btn.html?user=plotly&repo=plotly.py&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px" />
                </div>
                <CodeExplorer/>
            </HeroActions>
        </HeroTop>
        <HeroBottom style={HeroBottomStyles}>

        </HeroBottom>


    </Hero>
)