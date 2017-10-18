import React from 'react'
import PrismicDOM from 'prismic-dom'
import Button from 'components/prismic/button'
import HeroTitle from './title'
import HeroSubtitle from './subtitle'
import HeroActions from './actions'
import Slices from 'components/prismic/slices'

/**
 * HeroDetails component **to rename**
 * Component that takes the title, body, and buttons for the hero.
 * @class
 *
 */

export default class HeroDetailsSection extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { data } = this.props

    let HeroTopStyles = {}

    if (this.props.style) {
      HeroTopStyles = this.props.style
    }
    return (
      <div className="hero-prismic-details-section">
        <div className="hero-prismic-details-section-wrapper">
          <div className="hero-prismic-messaging">
            {/**
                         * Display the subtitle if it has content
                         */}

            {data.hero_subtitle != '' || data.hero_subtitle != null ? (
              <HeroSubtitle>{data.hero_subtitle}</HeroSubtitle>
            ) : (
              ''
            )}

            {/**
                         * HeroTitle
                         */}
            <HeroTitle>{data.hero_title}</HeroTitle>

            {/**
                         * HeroMessaging (wysiwyg)
                         */}
            <div
              dangerouslySetInnerHTML={{
                __html: PrismicDOM.RichText.asHtml(data.hero_messaging),
              }}
            />

            {/**
                         * HeroActions (buttons)
                         */}
            <HeroActions>
              <div className="buttons">
                {data.hero_buttons.map((button, i) => {
                  return <Button key={i} data={button} />
                })}
              </div>
            </HeroActions>
          </div>
        </div>
      </div>
    )
  }
}
