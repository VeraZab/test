import React from 'react';
import shortid from 'shortid';
import 'lib/find.polyfill';

import Image from 'components/prismic/Image';
import SliceOuter from './slice-elements/slice-outer';
import Pretitle from './slice-elements/pretitle';
import Title from './slice-elements/title';
import Subtitle from './slice-elements/subtitle';
import Graphic from './slice-elements/graphic';
import Body from './slice-elements/body';
import Actions from './slice-elements/actions';

export default class TabsSlice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: null,
      tabs: [],
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.setTab = this.setTab.bind(this);
  }

  async componentWillMount() {
    this.props.data.items.map((contentSection, i) => {
      contentSection.uid = shortid.generate();
      contentSection.layout = 'row-right';
      if (i === 0) {
        this.setState({
          activeTab: contentSection.uid,
          index: 0,
        });
      }
      const tab = {
        slice_type: this.props.data.slice_type,
        primary: contentSection,
      };

      this.state.tabs.push(tab);
    });
  }

  next() {
    this.setState({
      activeTab: this.state.tabs[this.state.index + 1].primary.uid,
      index: this.state.index + 1,
    });
  }

  prev() {
    this.setState({
      activeTab: this.state.tabs[this.state.index - 1].primary.uid,
      index: this.state.index - 1,
    });
  }

  setTab = (tab, i) => e => {
    this.setState({
      activeTab: tab.primary.uid,
      index: i,
    });
  };

  render() {
    const tabs = this.state.tabs.map((tab, i) => (
      <div
        key={shortid.generate()}
        onClick={this.setTab(tab, i)}
        className={
          'tabs__header__item not-mobile' + (this.state.index === i ? ' disabled active' : '')
        }
      >
        <div className="tabs__header__item__icon">
          <Image data={tab.primary.tab_icon} />
        </div>
        <div className="label">{tab.primary.label}</div>
      </div>
    ));
    const tab = this.state.tabs.find(tab => tab.primary.uid === this.state.activeTab);
    const mobileTab = (
      <div key={shortid.generate()} className={'tabs__header__item mobile-only  disabled active'}>
        <div className="tabs__header__item__icon">
          <Image data={tab.primary.tab_icon} />
        </div>
        <div className="label">{tab.primary.label}</div>
      </div>
    );

    const componentClass = 'content-section-p';

    return (
      <div className="tabs">
        <div className="tabs__wrapper">
          <div className="tabs__header">
            <div className="tabs__header__wrapper">
              {tabs}
              {mobileTab}
            </div>
            <div className="tabs__pagination">
              <div
                onClick={this.prev}
                className={
                  this.state.index === 0
                    ? 'tabs__pagination__prev disabled'
                    : 'tabs__pagination__prev'
                }
              >
                <i className="mdi mdi-chevron-left" />
              </div>
              <div
                onClick={this.next}
                className={
                  this.state.index === this.state.tabs.length - 1
                    ? 'tabs__pagination__next disabled'
                    : 'tabs__pagination__next'
                }
              >
                <i className="mdi mdi-chevron-right" />
              </div>
            </div>
          </div>
          <div className="tabs__content">
            <SliceOuter data={tab}>
              <Graphic primary={tab.primary} />
              <div className={componentClass + '-details ' + componentClass + '-area'}>
                {Boolean(tab.primary.pretitle) && <Pretitle pretitle={tab.primary.pretitle} />}
                {Boolean(
                  tab.primary.title && tab.primary.title.length && tab.primary.title[0].text !== ''
                ) && <Title title={tab.primary.title} />}
                {Boolean(
                  tab.primary.subtitle &&
                    tab.primary.subtitle.length &&
                    tab.primary.subtitle[0].text !== ''
                ) && <Subtitle subtitle={tab.primary.subtitle} />}
                <Body primary={tab.primary} />
                <Actions primary={tab.primary} />
              </div>
            </SliceOuter>
          </div>
        </div>
      </div>
    );
  }
}
