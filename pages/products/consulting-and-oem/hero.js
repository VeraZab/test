import React from 'react';
import {Hero, HeroTop, HeroMessaging, HeroActions, HeroBottom} from 'components/hero';

const HeroStyles = {
  minHeight: '600px',
};

const HeroWrapperStyle = {
  backgroundImage:
    'url(https://prismic-io.s3.amazonaws.com/plotly%2F6e4c70aa-48ca-4785-b59e-816616c2f83e_consulting-header-bg.png)',
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
