import React from 'react'
import PrismicDOM from 'prismic-dom'
import Button from 'components/prismic/button'
import HeroTitle from './title'
import HeroSubtitle from './subtitle'
import HeroActions from './actions'
import Slices from 'components/prismic/slices'

import LogosSlice from 'components/prismic/slices/logos'

import GithubStarsSlice from 'components/prismic/slices/github_stars'

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

  findSlice = (slices, type) =>
    slices.find(slice => slice.slice_type === type)
      ? slices.find(slice => slice.slice_type === type)
      : false

  render() {
    let { data } = this.props

    let HeroTopStyles = {}

    if (this.props.style) {
      HeroTopStyles = this.props.style
    }
    /**
     * Hero Title
     */
    const Title = data.hero_title ? (
      <HeroTitle>{data.hero_title}</HeroTitle>
    ) : null
    /**
     * Display the subtitle if it has content
     */
    const Subtitle =
      data.hero_subtitle !== '' || data.hero_subtitle !== null ? (
        <HeroSubtitle>{data.hero_subtitle}</HeroSubtitle>
      ) : null
    /**
     * Hero Messaging
     */
    const Messaging = (
      <div
        dangerouslySetInnerHTML={{
          __html: PrismicDOM.RichText.asHtml(data.hero_messaging),
        }}
      />
    )
    /**
     * Hero Actions
     */
    const Actions = (
      <HeroActions>
        <div className="buttons">
          {data.hero_buttons.map((button, i) => {
            return <Button key={i} data={button} />
          })}
        </div>
      </HeroActions>
    )

    /**
     * Logos Slice
     *
     * An editor can add an array of logos to a hero
     * you should only add one slice of logos, so this
     * will find the first one and display it.
     *
     */
    const slice_Logos = this.findSlice(data.hero_slices, 'logos')
    const Logos = slice_Logos ? <LogosSlice data={slice_Logos} /> : null

    /**
     * Github Stars Slice
     *
     * An editor can add an array of Github Repo urls to display
     * the stars button and count. This will find the first instance of a
     * slice with the type 'github_stars' and then display it :)
     */
    const slice_GithubStars = this.findSlice(data.hero_slices, 'github_stars')
    const GithubStars = slice_GithubStars ? (
      <GithubStarsSlice slice={slice_GithubStars} />
    ) : null

    return (
      <div className="hero-prismic-details-section">
        <div className="hero-prismic-details-section-wrapper">
          <div className="hero-prismic-messaging">
            {Subtitle}
            {Title}
            {Messaging}
            {Actions}
          </div>
        </div>
        {GithubStars}
        {Logos}
      </div>
    )
  }
}
