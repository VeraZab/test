import React from 'react';
import {Hero, HeroTop, HeroMessaging, HeroActions, HeroBottom} from 'components/hero';

const HeroStyles = {
  minHeight: '600px',
};

const HeroWrapperStyle = {
  backgroundImage:
    'url(https://images-plotly.imgix.net/static/marketing/consulting-header-bg.png?auto=compress&auto=format)',
  backgroundSize: '1640px',
  backgroundPosition: 'center bottom',
  backgroundRepeat: 'no-repeat',
};

const HeroTopStyles = {
  paddingBottom: '200px',
  paddingTop: '80px',
};
const HeroBottomStyles = {
  paddingBottom: '0px',
  paddingTop: '20px',
};

export default () => (
  <Hero heroWrapperStyle={HeroWrapperStyle} style={HeroStyles} className="no-fade">
    <HeroTop style={HeroTopStyles}>
      <HeroMessaging>
        <h1 className="hero-title">Advanced Development</h1>
      </HeroMessaging>
      <HeroActions />
    </HeroTop>
    <HeroBottom style={HeroBottomStyles} />
  </Hero>
);
