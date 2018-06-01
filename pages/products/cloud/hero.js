import React from 'react';
import {
  Hero,
  HeroTop,
  HeroMessaging,
  HeroTitle,
  HeroSubtitle,
  HeroActions,
  HeroBottom,
} from 'components/hero';
import Buttons from 'components/buttons';
import { ClientLogos } from 'components/global/client-logos';

const HeroButtons = [
  {
    label: 'Get Started For Free',
    title: 'See what you can create with Plotly!',
    icon: null,
    target: '_self',
    link: 'https://plot.ly/accounts/login/?action=signin',
    button: {
      classes: 'button button-primary',
    },
  },
  {
    label: 'Plotly On-Premises',
    title:
      'Looking for a behind-the-firewall solution? Deploy Plotly On-Premises on your secure, local network.',
    icon: null,
    target: '_self',
    link: '/products/on-premise/',
    button: {
      classes: 'button button-secondary',
    },
  },
];

const HeroWrapperStyle = {
  backgroundImage:
    'url(https://images-plotly.imgix.net/static/marketing/hero-pricing@2x.png?auto=compress&auto=format)',
  backgroundSize: '1640px',
  backgroundPosition: '50% 80%',
  backgroundRepeat: 'no-repeat',
};

const HeroBottomStyles = {
  paddingBottom: '270px',
  paddingTop: '20px',
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
          After you sign up for a plan, a plotly engineer will walk you through
          your first dashboard, report, slide deck, or SQL database connection.
        </HeroSubtitle>
      </HeroMessaging>
      {/*<HeroActions>*/}
      {/*<Buttons items={HeroButtons} />*/}
      {/*</HeroActions>*/}
    </HeroTop>
    <HeroBottom style={HeroBottomStyles}>
      <ClientLogos />
    </HeroBottom>
  </Hero>
);
