import React from 'react'
import PrismicDOM from 'prismic-dom'
import HeroDetailsSection from './details'
import HeroGraphicSection from './graphicSection'
import Slices from '../slices/index'

//
// <HeroTop>
//     <HeroMessaging>
//         <HeroTitle>
//             {doc.data.hero_title}
//         </HeroTitle>
//         <HeroSubtitle>
//             <div className="hero-prismic-subitle-value"
//                  dangerouslySetInnerHTML={{__html: PrismicDOM.RichText.asHtml(doc.data.hero_subtitle)}}/>
//         </HeroSubtitle>
//     </HeroMessaging>
//     <HeroActions>
//         <div className="buttons">
//             {
//                 doc.data.hero_buttons.map(
//                     button => {
//                         return <PrismicButton data={button}/>
//                     }
//                 )
//             }
//         </div>
//     </HeroActions>
// </HeroTop>
// <HeroBottom style={HeroBottomStyles}>
// {doc.data.hero_graphic ? (
//     <Browser>
//         <img
//             src={doc.data.hero_graphic.url} />
//     </Browser>
// ) : null}
// </HeroBottom>

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

  componentDidMount() {}

  render() {
    let classes = ''

    let { data } = this.props

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
    const HeroWrapperBg = {
      backgroundImage: 'url(' + data.hero_background_image.url + ')',
      backgroundSize: data.hero_background_size,
      backgroundPosition: data.hero_background_position,
      backgroundRepeat: 'no-repeat',
    }
    if (this.props.heroWrapperStyle) {
      HeroWrapperStyle = this.props.heroWrapperStyle
    }

    return (
      <section className={'hero-prismic' + classes} style={HeroStyle}>
        <div className="hero-prismic-wrapper">
          <HeroDetailsSection data={data} />
          <HeroGraphicSection data={data} />
          <div className="hero-prismic-bottom">
            {/*<Slices data={data.hero_slices} />*/}
          </div>
        </div>
        <div
          className="hero-prismic-background-image"
          style={HeroWrapperBg}
        />
      </section>
    )
  }
}
