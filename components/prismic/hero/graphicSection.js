import React from 'react'
import PrismicDOM from 'prismic-dom'
import Button from 'components/prismic/button'
import { Browser } from 'components/browser'
import Image from 'components/prismic/Image'

/**
 * HeroGraphicSection component
 * Component that takes the various types of graphics (currently only one type)
 * @class
 *
 */

export default class HeroGraphicSection extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { data } = this.props

    let styles = {}

    if (this.props.style) {
      styles = this.props.style
    }

    let graphic = null

    if (data.hero_slices.find(slice => slice.slice_type === 'multiple_graphics')) {
      let hero_graphics = data.hero_slices.find(
        slice => slice.slice_type === 'multiple_graphics'
      )
      return (
        <div className="hero-prismic-graphic-section" style={styles}>
          <div className="hero-prismic-graphic-section-wrapper">
            <div className="hero-prismic-graphic-many-items">
              {hero_graphics.items.map((item, i) => {
                return item.graphic_style === 'browser' ? (
                  <div key={i} className="hero-prismic-graphic-item">
                    <Browser>
                      <Image data={item.graphic} />
                    </Browser>
                  </div>
                ) : (
                  <div key={i} className="hero-prismic-graphic-item">
                    <Image data={item.graphic} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )
    }

    if (data.hero_slices.find(slice => slice.slice_type === 'two_graphics')) {
      let hero_graphics = data.hero_slices.find(
        slice => slice.slice_type === 'two_graphics'
      )
      return (
        <div className="hero-prismic-graphic-section" style={styles}>
          <div className="hero-prismic-graphic-section-wrapper">
            <div className="hero-prismic-graphic-two-items">
              {hero_graphics.items.map((item, i) => {
                return item.graphic_style === 'browser' ? (
                  <div key={i} className="hero-prismic-graphic-item">
                    <Browser>
                      <Image data={item.graphic} />
                    </Browser>
                  </div>
                ) : (
                  <div key={i} className="hero-prismic-graphic-item">
                    <Image data={item.graphic} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )
    }

    if (!data.hero_graphic.url) {
      return null
    }

    let hero_animation = <video height="550" id="sampleMovie" src="static/hero.mp4" loop="true" autoplay="autoplay" muted="true"></video>;

    if (data.hero_graphic_style === 'browser') {
      graphic = (
        <Browser>
          <Image data={data.hero_graphic} />
        </Browser>
      )
    } else if (data.hero_graphic_style === 'no-blur') {
      graphic = <Image noBlur data={data.hero_graphic} />
    } else if (data.title == 'Modern Analytics Apps for the Enterprise'){
      graphic = hero_animation;
    } else {
      graphic = <Image data={data.hero_graphic} />
    }
    return (
      <div className="hero-prismic-graphic-section" style={styles}>
        <div className="hero-prismic-graphic-section-wrapper">{graphic}</div>
      </div>
    )
  }
}
