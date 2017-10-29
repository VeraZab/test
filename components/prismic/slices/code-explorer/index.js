import React from "react";
import ContentSection from "components/prismic/content-section";
import Image from "components/prismic/Image";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/styles";

import { UnControlled as CodeMirror } from "react-codemirror2";

import PrismicDOM from "prismic-dom";
const shortid = require("shortid");
/**
 * Tabs slice
 *
 */
export default class CodeExplorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: null,
      tabs: [],
      loaded: false
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.setTab = this.setTab.bind(this);
  }

  componentWillMount() {
    this.props.data.items.map((item, i) => {
      item.uid = shortid.generate();
      item.layout = "row-right";
      if (i === 0) {
        this.setState({
          activeTab: item.uid,
          index: 0
        });
      }
      let tab = {
        slice_type: this.props.data.slice_type,
        primary: item
      };

      this.state.tabs.push(tab);
    });
  }

  componentDidMount() {
    require("codemirror/mode/xml/xml");
    require("codemirror/mode/javascript/javascript");
    require("codemirror/mode/python/python");
    require("codemirror/mode/r/r");
    require("codemirror/mode/jsx/jsx");
    this.setState({
      loaded: true
    });
  }

  next() {
    this.setState({
      activeTab: this.state.tabs[this.state.index + 1].primary.uid,
      index: this.state.index + 1
    });
  }

  prev() {
    this.setState({
      activeTab: this.state.tabs[this.state.index - 1].primary.uid,
      index: this.state.index - 1
    });
  }

  setTab = (tab, i) => e => {
    this.setState({
      activeTab: tab.primary.uid,
      index: i
    });
  };

  render() {
    let lineNumberStyles = {
      opacity: "0.25",
      userSelect: "none"
    };

    const tabs = this.state.tabs.map((tab, i) => (
      <div
        onClick={this.setTab(tab, i)}
        key={i}
        className={
          "code-explorer-slice__content__header__item" +
          (this.state.index === i ? " disabled active" : "")
        }
      >
        <div className="label">{tab.primary.label}</div>
      </div>
    ));
    let tab = this.state.tabs.find(
      tab => tab.primary.uid === this.state.activeTab
    );

    const options = {
      lineNumbers: true,
      mode: "javascript"
    };
    return (
      <div className="code-explorer-slice" key={tab.primary.uid}>
        <div className="code-explorer-slice__wrapper">
          <div className="code-explorer-slice__content">
            <div className="code-explorer-slice__content__image">
              <Image data={tab.primary.graphic} />
            </div>
            <div className="code-explorer-slice__content__code">
              <div className="code-explorer-slice__content__header">
                <div className="code-explorer-slice__content__header__wrapper">
                  <div
                    onClick={this.prev}
                    className={
                      this.state.index === 0
                        ? "code-explorer-slice__pagination__prev disabled"
                        : "code-explorer-slice__pagination__prev"
                    }
                  >
                    <i className="mdi mdi-chevron-left" />
                  </div>
                  {tabs}
                  <div
                    onClick={this.next}
                    className={
                      this.state.index === this.state.tabs.length - 1
                        ? "code-explorer-slice__pagination__next disabled"
                        : "code-explorer-slice__pagination__next"
                    }
                  >
                    <i className="mdi mdi-chevron-right" />
                  </div>
                </div>
              </div>
              <CodeMirror
                value={tab.primary.code[0].text}
                options={{
                  mode: tab.primary.language,
                  theme: "material",
                  lineNumbers: true
                }}
              />
              {/* <SyntaxHighlighter
                language={}
                style={atomOneDark}
                showLineNumbers={true}
                wrapLines={true}
                className="code-explorer-slice__content__code__block"
                lineNumberStyle={lineNumberStyles}
                lineStyle={lineNumber => {
                  let style = { display: "block" };
                  return style;
                }}
              >
                {tab.primary.code[0].text}
              </SyntaxHighlighter> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
