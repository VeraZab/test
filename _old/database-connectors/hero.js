import React from 'react'
import Hero from 'components/prismic/hero'
import { Browser } from 'components/browser'
import PrismicDOM from 'prismic-dom'
import PrismicButton from 'components/prismic/button'

const HeroBottomStyles = {
  paddingBottom: '0px',
  paddingTop: '20px',
}

export default class HeroSection extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { doc } = this.props

    const HeroWrapperStyle = {
      backgroundImage: 'url(' + doc.data.hero_background_image.url + ')',
      backgroundSize: doc.data.hero_background_size,
      backgroundPosition: doc.data.hero_background_position,
      backgroundRepeat: 'no-repeat',
    }
    return <Hero data={doc.data} heroWrapperStyle={HeroWrapperStyle} />
  }
}
