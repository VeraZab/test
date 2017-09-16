import React from 'react';
import {Hero, HeroTop, HeroMessaging, HeroTitle, HeroSubtitle, HeroActions, HeroBottom} from 'components/hero';


const HeroStyles = {
    minHeight: '600px'
};

const HeroWrapperStyle = {
    backgroundImage: 'url(https://images.plot.ly/static/marketing/consulting-header-bg.png)',
    backgroundSize: '1640px',
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat'
};

const HeroTopStyles = {
    paddingBottom: '200px',
    paddingTop: '80px'
};
const HeroBottomStyles = {
    paddingBottom: '0px',
    paddingTop: '20px'
};

export default () => (
    <Hero heroWrapperStyle={HeroWrapperStyle} style={HeroStyles} className="no-fade">
        <HeroTop style={HeroTopStyles}>
            <HeroMessaging>
                <HeroTitle>
                    Advanced Development
                </HeroTitle>
            </HeroMessaging>
            <HeroActions>
            </HeroActions>
        </HeroTop>
        <HeroBottom style={HeroBottomStyles}>

        </HeroBottom>
    </Hero>
)