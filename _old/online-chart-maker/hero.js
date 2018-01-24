import React from 'react'
import {
  Hero,
  HeroTop,
  HeroMessaging,
  HeroTitle,
  HeroSubtitle,
  HeroActions,
  HeroBottom,
} from 'components/hero'
import Buttons from 'components/buttons'
import { Browser } from 'components/browser'

const HeroWrapperStyle = {
  backgroundImage:
    'url(https://images-plotly.imgix.net/static/marketing/hero-pricing@2x.png?auto=compress&auto=format)',
  backgroundSize: '1640px',
  backgroundPosition: '50% 80%',
  backgroundRepeat: 'no-repeat',
}

const HeroBottomStyles = {
  paddingBottom: '0px',
  paddingTop: '20px',
}

export default props => (
  <Hero heroWrapperStyle={HeroWrapperStyle}>
    <HeroTop>
      <HeroMessaging>
        <HeroTitle>Plotly Online Chart Maker</HeroTitle>
        <HeroSubtitle>
          Create D3.js charts online for business, science, engineering, OEM,
          and journalism.
        </HeroSubtitle>
      </HeroMessaging>
      <HeroActions>
        <Buttons items={props.buttons[0]} />
      </HeroActions>
    </HeroTop>
    <HeroBottom style={HeroBottomStyles}>
      <Browser>
        <img src="https://images-plotly.imgix.net/plotly-marketing-pages/images/online-chart-maker/chart-maker-hero.png?auto=compress&auto=format" />
      </Browser>
    </HeroBottom>
  </Hero>
)