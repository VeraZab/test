import React from 'react';
import {
  Hero,
  HeroTop,
  HeroMessaging,
  HeroSubtitle,
  HeroTitle,
  HeroBottom,
} from 'components/hero';
import { ClientLogos } from 'components/global/client-logos';

const HeroWrapperStyle = {
  backgroundImage:
    'url(https://images-plotly.imgix.net/static/marketing/hero-pricing@2x.png?auto=compress&auto=format)',
  backgroundSize: '1640px',
  backgroundPosition: '50% 80%',
  backgroundRepeat: 'no-repeat',
};

const HeroBottomStyles = {
  paddingBottom: '270px'
};

export default () => (
  <Hero
    heroWrapperStyle={HeroWrapperStyle}
    className="hero-prismic hero-prismic-style--gradient_dark-blue"
  >
    <HeroTop>
      <HeroMessaging>
        <HeroTitle>Chart Studio Cloud</HeroTitle>
        <HeroSubtitle className="wider-subtitle">
        Modern visualization for the data era.
        </HeroSubtitle>
      </HeroMessaging>
    </HeroTop>
    <HeroBottom style={HeroBottomStyles}>
      <ClientLogos />
    </HeroBottom>
  </Hero>
);
