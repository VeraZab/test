import React from 'react'
import ContentSection from 'components/prismic/content-section'
import Image from 'components/prismic/Image'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/styles'

import { UnControlled as CodeMirror } from 'react-codemirror2'

import PrismicDOM from 'prismic-dom'
const shortid = require('shortid')
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Button from 'components/prismic/button'
/**
 * Tabs slice
 *
 */
export default class CodeExplorer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: null,
      tabs: [],
      loaded: false,
      copied: false,
    }
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
    this.setTab = this.setTab.bind(this)
  }

  componentWillMount() {
    this.props.data.items.map((item, i) => {
      item.uid = shortid.generate()
      item.layout = 'row-right'
      if (i === 0) {
        this.setState({
          activeTab: item.uid,
          index: 0,
        })
      }
      let tab = {
        slice_type: this.props.data.slice_type,
        primary: item,
      }

      this.state.tabs.push(tab)
    })
  }

  componentDidMount() {
    require('codemirror/mode/xml/xml')
    require('codemirror/mode/javascript/javascript')
    require('codemirror/mode/python/python')
    require('codemirror/mode/r/r')
    require('codemirror/mode/jsx/jsx')
    this.setState({
      loaded: true,
    })
  }

  next() {
    document.getElementById('code-explorer-header-tabs').scrollLeft += 100
    this.setState({
      activeTab: this.state.tabs[this.state.index + 1].primary.uid,
      index: this.state.index + 1,
      copied: false,
    })
  }

  prev() {
    document.getElementById('code-explorer-header-tabs').scrollLeft -= 100
    this.setState({
      activeTab: this.state.tabs[this.state.index - 1].primary.uid,
      index: this.state.index - 1,
      copied: false,
    })
  }

  setTab = (tab, i) => e => {
    this.setState({
      activeTab: tab.primary.uid,
      index: i,
      copied: false,
    })
  }

  render() {
    let lineNumberStyles = {
      opacity: '0.25',
      userSelect: 'none',
    }

    /**
     * Actions
     * These are our buttons
     */
    let actions = () => {
      let buttons = []

      if (tab.primary.button_one_label) {
        buttons.push({
          label: tab.primary.button_one_label,
          link: tab.primary.button_one_link,
          style: tab.primary.button_one_style,
        })
      }

      if (tab.primary.button_two_label) {
        buttons.push({
          label: tab.primary.button_two_label,
          link: tab.primary.button_two_link,
          style: tab.primary.button_two_style,
        })
      }

      if (buttons.length) {
        return (
          <div className=" buttons">
            {buttons.map((button, i) => {
              return <Button key={shortid.generate()} data={button} />
            })}
          </div>
        )
      } else {
        return null
      }
    }

    const tabs = this.state.tabs.map((tab, i) => (
      <div
        onClick={this.setTab(tab, i)}
        key={i}
        className={
          'code-explorer-slice__content__header__item not-mobile' +
          (this.state.index === i ? ' disabled active' : '')
        }
      >
        <div className="label">{tab.primary.label}</div>
      </div>
    ))

    let tab = this.state.tabs.find(
      tab => tab.primary.uid === this.state.activeTab
    )

    const mobileTab = (
      <div
        className={
          'code-explorer-slice__content__header__item mobile active disabled'
        }
      >
        <div className="label">{tab.primary.label}</div>
      </div>
    )

    const options = {
      lineNumbers: true,
      mode: 'javascript',
    }

    const codeImageStyle = {
      backgroundImage: 'url(' + tab.primary.graphic.url + ')',
    }
    return (
      <div className="code-explorer-slice" key={tab.primary.uid}>
        <div className="code-explorer-slice__wrapper">
          <div className="code-explorer-slice__content">
            <div
              className="code-explorer-slice__content__image"
              style={codeImageStyle}
            >
              {/*<Image background data={tab.primary.graphic}/>*/}
            </div>
            <div className="code-explorer-slice__content__code">
              <div className="code-explorer-slice__content__header">
                <div className="code-explorer-slice__content__header__wrapper">
                  <div
                    onClick={this.prev}
                    className={
                      this.state.index === 0
                        ? 'code-explorer-slice__pagination__prev disabled'
                        : 'code-explorer-slice__pagination__prev'
                    }
                  >
                    <i className="mdi mdi-chevron-left" />
                  </div>
                  <div
                    id="code-explorer-header-tabs"
                    className="code-explorer-slice__content__header__tabs"
                  >
                    {tabs}
                    <div className="mobile-only">{mobileTab}</div>
                  </div>

                  <div
                    onClick={this.next}
                    className={
                      this.state.index === this.state.tabs.length - 1
                        ? 'code-explorer-slice__pagination__next disabled'
                        : 'code-explorer-slice__pagination__next'
                    }
                  >
                    <i className="mdi mdi-chevron-right" />
                  </div>
                </div>
              </div>
              <div className="code-explorer-slice__content__code__container">
                <div className="code-explorer-slice__content__code__copy">
                  <CopyToClipboard
                    text={tab.primary.code[0].text}
                    onCopy={() => this.setState({ copied: true })}
                  >
                    <div className="code-explorer-slice__content__code__copy__content">
                      <div className="code-explorer-slice__content__code__copy__content__icon mdi mdi-content-copy" />
                      <div className="code-explorer-slice__content__code__copy__content__label">
                        {this.state.copied ? 'Copied!' : 'Copy'}
                      </div>
                    </div>
                  </CopyToClipboard>
                </div>
                <div className="code-explorer-slice__content__code__block">
                  <CodeMirror
                    value={tab.primary.code[0].text}
                    key={tab.primary.uid}
                    options={{
                      mode: tab.primary.language,
                      theme: 'material',
                      lineNumbers: true,
                    }}
                  />
                </div>
              </div>
              <div className="code-explorer-slice__content__code__footer">
                {actions()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
