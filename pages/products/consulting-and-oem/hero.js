import React from 'react';
import {Hero, HeroTop, HeroMessaging, HeroTitle, HeroSubtitle, HeroActions, HeroBottom} from '/components/hero/hero';
import Buttons from '/components/buttons/buttons';
import {Browser} from '/components/browser/browser';


const HeroStyles = {
    minHeight: '600px'
};

const HeroWrapperStyle = {
    backgroundImage: 'url(https://images-hoshi.nationalmachine.co/ineffable/uploads/9e5acef340ac4cc67905594162ebc8b4/consulting-header-bg.png)',
    backgroundSize: '1640px',
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat'
};

const HeroTopStyles = {
    paddingBottom: '200px',
    paddingTop: '20px'
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