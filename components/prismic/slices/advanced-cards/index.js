import React from 'react'
import ContentSection from 'components/prismic/content-section'
import Image from 'components/prismic/Image'

import SyntaxHighlighter from 'react-syntax-highlighter'
import {atomOneDark} from 'react-syntax-highlighter/dist/styles'

import {UnControlled as CodeMirror} from 'react-codemirror2'

import PrismicDOM from 'prismic-dom'
const shortid = require('shortid')
import {CopyToClipboard} from 'react-copy-to-clipboard'
import Button from 'components/prismic/button'
import {images} from 'config/constants'
import {imgix} from 'config/functions'

/**
 * Tabs slice
 *
 */
export default class AdvancedCards extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {

  }

  componentDidMount() {

  }


  render() {

    /**
     * Actions
     * These are our buttons
     */
    let actions = (data) => {
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
            {buttons.map((button, i) => {
              return <Button key={shortid.generate()} data={button}/>
            })}
          </div>
        )
      } else {
        return null
      }
    }


    const cards = this.props.data.map((card, i) => {
      card.graphic.url = imgix(card.graphic.url)
      const imageParams = {
        preview: '?w=' +
        Math.floor(card.graphic.dimensions.width / images.preview.scale) +
        '&h=' +
        Math.floor(card.graphic.dimensions.height / images.preview.scale) +
        '&fit=crop&blur=' +
        images.preview.blur +
        '&q=' +
        images.preview.quality +
        '&auto=format',
        hq: '?w=' +
        Math.round(card.graphic.dimensions.width * images.hq.scale) +
        '&h=' +
        Math.round(card.graphic.dimensions.height * images.hq.scale) +
        '&fit=crop&crop=top,left&q=' +
        images.hq.quality +
        '&auto=format',
      }
      const imageStyle = {
        backgroundImage: 'url(' + card.graphic.url + imageParams.hq + ')'
      }
      return (
        <div className="card card--with-image">
          <div className="card__wrapper">
            <div className="card__image" style={imageStyle}>
              <div className="card__details">
                <div className="card__details__meta">
                  <div className="card__title"><h2><span>{card.title}</span></h2></div>
                  <div className="card__subtitle"><h3>{card.subtitle}</h3></div>
                </div>
                {/*<div className="card__details__action">*/}
                  {/*<a*/}
                    {/*className="card-action-link"*/}
                    {/*href={card.button_one_link.url}*/}
                    {/*target="_blank"*/}
                  {/*>*/}
                    {/*{card.button_one_label}*/}
                  {/*</a>*/}
                {/*</div>*/}
              </div>
            </div>

            <div className="card__body">
              <div className="card__body__content"
                   dangerouslySetInnerHTML={{
                     __html: PrismicDOM.RichText.asHtml(card.body),
                   }}/>
              <div className="card__body__actions">
                {actions(card)}
              </div>
            </div>



          </div>
        </div>
      )
    })


    return (<div className="advanced-cards">
      <div className="advanced-cards__wrapper">
        {cards}
      </div>
    </div>)
  }
}
