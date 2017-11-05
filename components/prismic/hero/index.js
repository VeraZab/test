import React from 'react'
import HeroDetailsSection from './details'
import HeroGraphicSection from './graphicSection'
import lozad from 'lozad'
import { imgix } from 'config/functions'

const shortid = require('shortid')


/**
 * Hero component
 * Main wrapper component
 * @class
 *
 */
export default class Hero extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();
  }

  render() {
    let classes = ''

    let {data} = this.props

    if (this.props.className) {
      classes += ' ' + this.props.className
    }

    /**
     * Layout
     * This will default to the value of 'column'
     * These values will adjust the layout of the hero overall
     * column || row
     */
    if (data.hero_layout != null || data.hero_layout != '') {
      classes += ' hero-prismic-layout--' + data.hero_layout
    }
    /**
     * Background Style
     * This will default to the value of 'gradient_blue--with-dots'
     * These values will adjust the color of the background
     * An image can still be applied regardless of style chosen
     */
    if (
      data.hero_background_style != null ||
      data.hero_background_style != ''
    ) {
      classes += ' hero-prismic-style--' + data.hero_background_style
    }

    let HeroStyle = {}
    let HeroWrapperStyle = {}

    if (this.props.style) {
      HeroStyle = this.props.style
    }

    if (data.hero_background_image.url) {
      data.hero_background_image.url = imgix(data.hero_background_image.url)
    }
    const HeroWrapperBg = {
      backgroundImage: `url(${data.hero_background_image.url}?w=2200&auto=format)`,
      backgroundSize: data.hero_background_size,
      backgroundPosition: data.hero_background_position,
      backgroundRepeat: 'no-repeat',
    }
    if (this.props.heroWrapperStyle) {
      HeroWrapperStyle = this.props.heroWrapperStyle
    }

    return (
      <section className={ 'hero-prismic' + classes } style={ HeroStyle } key={ shortid.generate() }>
        <div className="hero-prismic-wrapper">
          <HeroDetailsSection data={ data }/>
          <HeroGraphicSection data={ data }/>
          <div className="hero-prismic-bottom">
            { /*<Slices data={data.hero_slices} />*/ }
          </div>
        </div>
        <div className="hero-prismic-background-image lozad"
             data-background-image={ `url(${data.hero_background_image.url}?w=2200&auto=format)` }
             key={ `hero_bg_${shortid.generate()}` }
             style={ HeroWrapperBg }/>
      </section>
    )
  }
}
