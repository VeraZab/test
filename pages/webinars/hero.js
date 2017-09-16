import React from 'react';
import {Hero, HeroTop, HeroMessaging, HeroTitle, HeroSubtitle, HeroActions, HeroBottom} from 'components/hero/hero';
import Buttons from 'components/buttons/buttons';
import {Browser} from 'components/browser/browser';


const HeroWrapperStyle = {
    backgroundImage: 'url(https://images.plot.ly/static/marketing/hero-pricing@2x.png)',
    backgroundSize: '1640px',
    backgroundPosition: '50% 80%',
    backgroundRepeat: 'no-repeat'
};

const HeroBottomStyles = {
    paddingBottom: '0px',
    paddingTop: '0px'
};

export default class HeroSection extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Hero heroWrapperStyle={HeroWrapperStyle} style={{minHeight: '0px'}}>
                <HeroTop>
                    <HeroMessaging>
                        <HeroTitle>
                            {this.props.data.title}
                        </HeroTitle>
                        <HeroSubtitle>
                            {this.props.data.description}
                        </HeroSubtitle>
                    </HeroMessaging>
                </HeroTop>
                <HeroBottom style={HeroBottomStyles}>
                    <Browser>
                        <img
                            src='https://plotly.github.io/plotly-next/static/images/webinar-screen.png'/>
                    </Browser>
                </HeroBottom>
            </Hero>
        )
    }

}