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
  paddingTop: '0px',
}

export default class HeroSection extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Hero heroWrapperStyle={HeroWrapperStyle} style={{ minHeight: '0px' }}>
        <HeroTop>
          <HeroMessaging>
            <HeroTitle>{this.props.data.title}</HeroTitle>
            <HeroSubtitle>{this.props.data.description}</HeroSubtitle>
          </HeroMessaging>
        </HeroTop>
        
      </Hero>
    )
  }
}
