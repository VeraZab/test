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

const HeroWrapperStyle = {
  // backgroundImage: 'url(/static/images/banner-splash.jpg)',
  backgroundSize: '1640px',
  backgroundPosition: '50% 80%',
  backgroundRepeat: 'no-repeat',
}

const HeroBottomStyles = {
  paddingBottom: '0px',
  paddingTop: '20px',
}

class CustomerServiceHero extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    document.body.classList.remove('no-scroll')
  }

  render() {
    const header = this.props.header

    return (
      <Hero heroWrapperStyle={HeroWrapperStyle}>
        <HeroTop>
          <HeroMessaging>
            <HeroTitle children={header.title} />
            <HeroSubtitle children={header.desc} />
          </HeroMessaging>
          <HeroActions />
        </HeroTop>
        <HeroBottom style={HeroBottomStyles} />
      </Hero>
    )
  }
}

export default CustomerServiceHero
