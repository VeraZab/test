import React from 'react';
import {Hero, HeroTop, HeroMessaging, HeroTitle, HeroSubtitle, HeroActions, HeroBottom} from '../../components/hero/hero';
import Buttons from '../../components/buttons/buttons';
import {Browser} from '../../components/browser/browser';

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
            target: '_blank',
            link: 'https://github.com/plotly/plotly-database-connector/releases/download/v2.1.0/2.1.0-mac.zip',
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
            target: '_blank',
            link: 'https://github.com/plotly/plotly-database-connector/releases/download/v2.1.0/2.1.0-win-64.zip',
            button: {
                classes: 'button button-primary'
            }
        },
        {
            label: 'Documentation',
            title: 'See what you can create with Plotly\'s Database Connector!',
            icon: null,
            target: '_blank',
            link: 'https://help.plot.ly/database-connectors/',
            button: {
                classes: 'button button-secondary'
            }
        }
    ],
    []
];

const HeroWrapperStyle = {
    backgroundImage: 'url(https://images.plot.ly/static/marketing/hero-pricing@2x.png)',
    backgroundSize: '1640px',
    backgroundPosition: '50% 80%',
    backgroundRepeat: 'no-repeat'
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
            <Hero heroWrapperStyle={HeroWrapperStyle}>
                <HeroTop>
                    <HeroMessaging>
                        <HeroTitle>
                            Database Connectors
                        </HeroTitle>
                        <HeroSubtitle>
                            Connect Plotly charts and dashboards to your SQL and Redshift databases
                        </HeroSubtitle>
                    </HeroMessaging>
                    <HeroActions>
                        <Buttons items={HeroButtons[0]}/>
                    </HeroActions>
                </HeroTop>
                <HeroBottom style={HeroBottomStyles}>
                    <Browser>
                        <img
                            src='https://marketing.plot.ly/static/marketing/assets/images/database-connectors/database_connectors_animated.gif'/>
                    </Browser>
                </HeroBottom>
            </Hero>
        )
    }

}