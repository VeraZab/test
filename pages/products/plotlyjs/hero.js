import React from 'react';
import {Hero, HeroTop, HeroMessaging, HeroTitle, HeroSubtitle, HeroActions, HeroBottom} from '../../../components/hero/hero';
import Buttons from '../../../components/buttons/buttons';
import Head from 'next/head';
import CodeExplorer from '../../home/sections/api/code-explorer/code-explorer';

const HeroButtons = [
    [


        {
            label: 'Custom Development',
            title: 'See what you can create with Plotly!',
            icon: null,
            target: '_self',
            link: '/create',
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
            target: '_self',
            link: '/create',
            button: {
                classes: 'button button-secondary'
            }
        }

    ]
];

const HeroWrapperStyle = {
    backgroundImage: 'url(/static/images/hero-pricing@2x.png)',
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
                    D3.js charting for science, engineering, and finance.
                </HeroSubtitle>

            </HeroMessaging>
            <HeroActions>
                <Buttons items={HeroButtons[0]}/>
                <div className="githubStar">
                    <iframe src="https://ghbtns.com/github-btn.html?user=plotly&repo=plotly.js&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
                </div>
                <CodeExplorer/>
            </HeroActions>
        </HeroTop>
        <HeroBottom style={HeroBottomStyles}>

        </HeroBottom>


    </Hero>
)