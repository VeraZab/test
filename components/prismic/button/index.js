/**
 * @module Button
 */

import React from 'react'
import Link from 'next/link'

/**
 * Button component
 *
 * example: <Button data={button} />
 *
 * @class
 * @param {Object} data -                   Entry point, contains all the relevant props for the button
 * @param {string} data.label -             The button label
 * @param {string} data.title -             Optional title attr for the button (for accessibility)
 * @param {string} data.style -             String output from a select in prismic, options: primary || secondary
 * @param {string} data.mid_icon -          User entered icon name from Material Design Icons (https://materialdesignicons.com/)
 * @param {string} data.extra_classes -     User entered custom classes for the button (eg: "button--outline button-size--small")
 * @param {Object} data.icon -              Image object  // auto generated by prismic
 * @param {Object} data.link -              Link object  // auto generated by prismic
 * @param {string} data.link.link_type -    Usually "Web" // auto generated by prismic
 * @param {string} data.link.target -       "_blank" || "_self" // auto generated by prismic
 * @param {string} data.link.url -          The url for the link
 *
 */



export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    let {data} = this.props

    let classes = 'button'

    if (data.style) {
      classes += ' button-' + data.style
    }
    if (data.extra_classes) {
      classes += ' ' + data.extra_classes
    }

    let download = {};
    if (data.download) {
      download['download'] = '';
    }

    return (
      <a
        href={ data.link.url }
        target={ data.link.target }
        title={ data.title }
        className={ classes }
        { ...download }
      >
        { /* if: MDI icon field has content*/ }
        { data.mdi_icon ? (
          <div className="button-icon button-icon-mdi">
            <div className="button-icon-wrapper">
              <i className={ 'mdi mdi-' + data.mdi_icon }/>
            </div>
          </div>
        ) : null }
        { /* end if */ }
        <div
          className="button-label"
          dangerouslySetInnerHTML={ {__html: data.label} }
        />
      </a>
    )
  }
}
