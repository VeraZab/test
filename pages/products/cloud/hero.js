import React from 'react';
import {
  Hero,
  HeroTop,
  HeroMessaging,
  HeroTitle,
  HeroSubtitle,
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
        <HeroTitle>Modern visualization for the data era</HeroTitle>
        <HeroSubtitle>
          When you sign up for a Professional or Personal plan, a Plotly engineer will walk you through
          your first chart, dashboard, or SQL database connection.
        </HeroSubtitle>
      </HeroMessaging>
    </HeroTop>
    <HeroBottom style={HeroBottomStyles}>
      <ClientLogos />
    </HeroBottom>
  </Hero>
);
