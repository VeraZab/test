import React from 'react';
import ContentSection from 'components/prismic/content-section';
import Image from 'components/prismic/Image';
const shortid = require('shortid');
/**
 * Tabs slice
 *
 */
export default class TabsSlice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: null,
      tabs: []
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.setTab = this.setTab.bind(this);
  }

  next() {
    this.refs.reactSwipe.next();
  }

  prev() {
    this.refs.reactSwipe.prev();
  }

  async componentWillMount() {
    this.props.data.items.map((contentSection, i) => {
      contentSection.uid = shortid.generate();
      contentSection.layout = 'row-right';
      if (i === 0) {
        this.setState({
          activeTab: contentSection.uid,
          index: 0
        });
      }
      let tab = {
        slice_type: this.props.data.slice_type,
        primary: contentSection
      };

      this.state.tabs.push(tab);
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
    const tabs = this.state.tabs.map((tab, i) => (
      <div
        key={shortid.generate()}
        onClick={this.setTab(tab, i)}
        className={
          'tabs__header__item not-mobile' +
          (this.state.index === i ? ' disabled active' : '')
        }
      >
        <div className="tabs__header__item__icon">
          <Image data={tab.primary.tab_icon}/>
        </div>
        <div className="label">{tab.primary.label}</div>
      </div>
    ));
    let tab = this.state.tabs.find(
      tab => tab.primary.uid === this.state.activeTab
    );
    const mobileTab = (
      <div
        key={shortid.generate()}
        className={
          'tabs__header__item mobile-only  disabled active'
        }
      >
        <div className="tabs__header__item__icon">
          <Image data={tab.primary.tab_icon}/>
        </div>
        <div className="label">{tab.primary.label}</div>
      </div>
    );
    return (
      <div className="tabs">
        <div className="tabs__wrapper">
          <div className="tabs__header">
            <div className="tabs__header__wrapper">{tabs}{mobileTab}</div>
            <div className="tabs__pagination">
              <div
                onClick={this.prev}
                className={
                  this.state.index === 0
                    ? 'tabs__pagination__prev disabled'
                    : 'tabs__pagination__prev'
                }
              >
                <i className="mdi mdi-chevron-left"/>
              </div>
              <div
                onClick={this.next}
                className={
                  this.state.index === this.state.tabs.length - 1
                    ? 'tabs__pagination__next disabled'
                    : 'tabs__pagination__next'
                }
              >
                <i className="mdi mdi-chevron-right"/>
              </div>
            </div>
          </div>
          <div className="tabs__content">

            <ContentSection key={tab.primary.uid} data={tab}/>
          </div>
        </div>
      </div>
    );
  }
}
