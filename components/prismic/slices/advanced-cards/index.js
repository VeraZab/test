import React from 'react'
import Image from 'components/prismic/Image'
import PrismicDOM from 'prismic-dom'

const shortid = require('shortid')
import Button from 'components/prismic/button'
import { images } from 'config/constants'
import { imgix } from 'config/functions'

/**
 * Tabs slice
 *
 */
export default class AdvancedCards extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const Logo = data => {
      if (data.logo.url) {
        return (
          <div className="logo">
            <Image noBlur data={ data.logo }/>
          </div>
        )
      }
    }

    /**
     * Actions
     * These are our buttons
     */
    let actions = data => {
      let buttons = []

      if (data.button_one_label) {
        buttons.push({
          label: data.button_one_label,
          link: data.button_one_link,
          style: data.button_one_style,
        })
      }

      if (data.button_two_label) {
        buttons.push({
          label: data.button_two_label,
          link: data.button_two_link,
          style: data.button_two_style,
        })
      }

      if (buttons.length) {
        return (
          <div className=" buttons">
            { buttons.map((button, i) => {
              return <Button key={ shortid.generate() } data={ button }/>
            }) }
          </div>
        )
      } else {
        return null
      }
    }

    const cards = this.props.data.map((card, i) => {
      if (card.graphic && card.graphic.url) {
        card.graphic.url = imgix(card.graphic.url)
        const imageParams = {
          preview:
          '?w=' +
          Math.floor(card.graphic.dimensions.width / images.preview.scale) +
          '&h=' +
          Math.floor(card.graphic.dimensions.height / images.preview.scale) +
          '&fit=crop&blur=' +
          images.preview.blur +
          '&q=' +
          images.preview.quality +
          '&auto=format',
          hq:
          '?w=' +
          Math.round(card.graphic.dimensions.width * images.hq.scale) +
          '&h=' +
          Math.round(card.graphic.dimensions.height * images.hq.scale) +
          '&fit=crop&crop=top,left&q=' +
          images.hq.quality +
          '&auto=format',
        }
        let imageStyle = {
          backgroundImage: 'url(' + card.graphic.url + imageParams.hq + ')',
        }
      }

      if (card.display === 'true') {
        return (
          <div className="card card--with-image" key={ shortid.generate() }>
            <div className="card__wrapper">
              <div className="card__image">
                <div className="card__details">
                  <div className="card__details__meta">
                    <div className="card__title">
                      <h2>
                        <span>{ card.title }</span>
                      </h2>
                    </div>
                    <div className="card__subtitle">
                      <h3>{ card.subtitle }</h3>
                    </div>
                  </div>
                  { Logo(card) }
                </div>
              </div>

              <div className="card__body">
                <div
                  className="card__body__content"
                  dangerouslySetInnerHTML={ {
                    __html: PrismicDOM.RichText.asHtml(card.body),
                  } }
                />
                <div className="card__body__actions">{ actions(card) }</div>
              </div>
            </div>
          </div>
        )
      } else {
        return null
      }

    })
    return (
      <div className="advanced-cards">
        <div className="advanced-cards__wrapper">{ cards }</div>
      </div>
    )
  }
}
