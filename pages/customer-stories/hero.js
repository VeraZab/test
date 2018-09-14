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
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage:
    'url("https://plotly.github.io/plotly-next/static/enterprise/img/customer-stories/enterprise-customer-stories-banner.jpg")',
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
        <HeroBottom />
      </Hero>
    )
  }
}
export default CustomerServiceHero
