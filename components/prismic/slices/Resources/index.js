import React from 'react';
import Select from 'react-select';

class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {moreLoaded: 0, selectedOption: 'All'};
  }

  render() {
    const maxItems = 8;
    const options = [{value: 'All', label: 'All'}];

    const items = this.props.data.items;
    const categories = new Set();

    items.map(item => {
      categories.add(item.category);
    });
    for (const item of categories) {
      options.push({value: item, label: item});
    }

    return (
      <div className="resources-wrapper">
        <Select
          value={this.state.selectedOption}
          onChange={selectedOption => this.setState({selectedOption: selectedOption.value})}
          options={options}
          placeholder={
            this.state.selectedOption === 'All' ? 'Categories...' : this.state.selectedOption
          }
          className="category-select"
        />
        <div className="resources">
          {items
            .filter(item => {
              return (
                item.category === this.state.selectedOption || this.state.selectedOption === 'All'
              );
            })
            .map((item, index) => {
              return (
                <div
                  className={index === 0 ? 'resources-item-full' : 'resources-item-third'}
                  id={index < maxItems || this.state.moreLoaded === 1 ? 'loaded' : 'notLoaded'}
                  key={index}
                >
                  <div className="item-top">
                    <div className="item-category">{item.category}</div>
                    <div className="item-graphic">
                      <img src={item.story_image.url} />
                    </div>
                  </div>
                  <div className="shadow-wrapper">
                    <div className="item-bottom">
                      <div className="item-title">
                        <a
                          target={item.story_url[0].text.includes('newsroom') ? '' : '_blank'}
                          href={item.story_url[0].text}
                        >
                          {item.story_title[0].text}
                        </a>
                      </div>
                      <div className="meta-wrapper">
                        <div className="item-author">{item.story_presenter[0].text}</div>
                        <div className="item-date">{item.story_date[0].text}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          {this.state.moreLoaded === 0 &&
          items.filter(item => {
            return (
              item.category === this.state.selectedOption || this.state.selectedOption === 'All'
            );
          }).length > maxItems ? (
            <div className="loadMore-button">
              <a onClick={() => this.setState({moreLoaded: 1})} className="button button-primary">
                <div className="button-label">LOAD MORE</div>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Resources;
