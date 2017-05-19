import React from 'react';
import {Hero, HeroTop, HeroMessaging, HeroTitle, HeroSubtitle, HeroActions, HeroBottom} from '/components/hero/hero';
import Buttons from '/components/buttons/buttons';
import {Browser} from '/components/browser/browser';

const HeroButtons = [
    [
        {
            label: 'Download for Mac',
            subtitle: 'Requires 10.9 or newer',
            title: '',
            icon: {
                type: 'mdi',
                src: 'apple'
            },
            target: '_self',
            link: '/create',
            button: {
                classes: 'button button-primary'
            }
        },
        {
            label: 'Download for Windows',
            subtitle: 'Requires Windows 7 or newer',
            title: '',
            icon: {
                type: 'mdi',
                src: 'windows'
            },
            target: '_self',
            link: '/create',
            button: {
                classes: 'button button-primary'
            }
        }
    ],
    [


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
    paddingTop: '20px'
};

export default class HeroSection extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Hero heroWrapperStyle={HeroWrapperStyle}>
            <HeroTop>
                <HeroMessaging>
                    <HeroTitle>
                        Plotly Slide Decks
                    </HeroTitle>
                    <HeroSubtitle>
                        Create and share Powerpoint-like slide decks online that have interactive Plotly charts.
                    </HeroSubtitle>
                </HeroMessaging>
                <HeroActions>
                    <Buttons items={HeroButtons[0]}/>
                    <Buttons items={HeroButtons[1]}/>
                </HeroActions>
            </HeroTop>
            <HeroBottom style={HeroBottomStyles}>
                <Browser>
                    <img src='https://marketing.plot.ly/static/marketing/assets/images/presentations.png'/>
                </Browser>
            </HeroBottom>
        </Hero>
        )
    }

}