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
import { ClientLogos } from 'components/global/client-logos';
import Buttons from 'components/buttons';

const HeroButtons = [
  {
    label: 'Contact Us',
    title: 'A Plotly sales engineer will answer any questions you might have.',
    icon: null,
    target: '_blank',
    typeform: true,
    link: 'https://plotly.typeform.com/to/seG7Vb',
    button: {
      classes: 'button button-primary',
    },
  },
];

const HeroWrapperStyle = {
  backgroundImage:
    'url(https://images-plotly.imgix.net/plotly-marketing-pages/images/new-branding/backgrounds/bg-graph.svg)',
  backgroundSize: 'cover',
  backgroundPosition: '50% 80%',
  backgroundRepeat: 'no-repeat',
};

const HeroBottomStyles = {
  paddingBottom: '20px',
  paddingTop: '80px',
};

export default () => (
  <Hero heroWrapperStyle={HeroWrapperStyle}>
    <HeroTop>
      <HeroMessaging>
        <HeroTitle>Safe and secure, behind your firewall</HeroTitle>
        <HeroSubtitle className="wider-subtitle">
          Plotly On-Premises provides the best of both worlds: web based
          collaboration and sharing capabilities with data and visualizations
          that never leave your corporate environment.
        </HeroSubtitle>
      </HeroMessaging>
      <HeroActions>
        <Buttons items={HeroButtons} />
      </HeroActions>
    </HeroTop>
    <HeroBottom style={HeroBottomStyles}>
      <ClientLogos />
    </HeroBottom>
  </Hero>
);
