import React from 'react'
import lozad from 'lozad'

const shortid = require('shortid')

export default class Img extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // let observer = lozad('.lozad', {
    //   load: function(el) {
    //     el.src = el.dataset.src
    //     el.onload = function() {
    //       el.parentElement.parentElement.parentElement.classList.add(
    //         'hq-loaded'
    //       )
    //       el.classList.add('img-loaded')
    //     }
    //   },
    // })
    //
    // let bgImages = lozad('.lozad-bg', {
    //   load: function(el) {
    //     el.src = el.getAttribute('data-background-image')
    //     console.log(el.src)
    //     el.onload = function() {
    //       el.parentElement.parentElement.parentElement.classList.add(
    //         'hq-loaded'
    //       )
    //       el.classList.add('img-loaded')
    //     }
    //   },
    // })
    // bgImages.observe()
    // observer.observe()
  }

  render() {

    const key = shortid.generate()
    let { data } = this.props
    let { imageParams } = this.props
    if (this.props.background) {
      let previewStyle = {
        backgroundImage: 'url(' + data.url + imageParams.preview + ')',
        backgroundSize: 'cover',
        backgroundPosition: this.props.position,
        backgroundAttachment: this.props.attachment,
      }
      let hqStyle = {
        backgroundSize: 'cover',
        backgroundPosition: this.props.position,
        backgroundAttachment: this.props.attachment,
      }
      return (
        <div
          className="image"
          style={this.props.styles}
          key={Math.random()
            .toString(36)
            .substr(2, 5)}
        >
          <div className="image-wrapper">
            <div
              className="image-hq lozad"
              data-background-image={data.url + imageParams.hq}
              ref={key}
            />
            <div className="image-preview" style={previewStyle} />
          </div>
          {data.copyright ? <copyright>&copy; {data.copyright}</copyright> : ''}
        </div>
      )
    }

    let classes = 'image'
    if (this.props.noBlur) {
      classes += ' no-blur'
    }
    return (
      <div
        className={classes}
        style={this.props.styles}
        key={Math.random()
          .toString(36)
          .substr(2, 5)}
      >
        <div className="image-wrapper">
          <div className="image-hq">
            <img
              className={'lozad'}
              data-src={data.url + imageParams.hq}
              alt=""
            />
          </div>
          <div className="image-preview">
            <img src={data.url + imageParams.preview} alt="" />
          </div>
        </div>
        {data.copyright ? <copyright>&copy; {data.copyright}</copyright> : ''}
      </div>
    )
  }
}
