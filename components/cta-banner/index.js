import React from 'react'
import styles from './cta-banner.styles.scss'

export class CtaBanner extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let classes = ''
    if ('patterned-grey' in this.props) {
      classes += ' patterned-grey'
    }
    if (this.props.className) {
      classes += ' ' + this.props.className
    }
    return (
      <section className={'cta-banner' + classes}>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="cta-banner-wrapper hidden">{this.props.children}</div>
      </section>
    )
  }
}

export class CtaBannerTitle extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let classes = ''

    if (this.props.className) {
      classes += ' ' + this.props.className
    }
    return (
      <section className={'cta-banner-title' + classes}>
        <div className="cta-banner-title-wrapper hidden">
          {this.props.children}
        </div>
      </section>
    )
  }
}
export class CtaBannerBody extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let classes = ''

    if (this.props.className) {
      classes += ' ' + this.props.className
    }
    return (
      <section className={'cta-banner-body' + classes}>
        <div className="cta-banner-body-wrapper hidden">
          {this.props.children}
        </div>
      </section>
    )
  }
}
