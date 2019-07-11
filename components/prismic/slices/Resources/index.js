import React from 'react';
import Select from 'react-select';

class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {moreLoaded: 0, selectedOption: 'All'};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({moreLoaded: 1});
  }

  handleChange = selectedOption => {
    this.setState({selectedOption: selectedOption.value});
  };

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
          onChange={this.handleChange}
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
                  className={`resources-item-${item.background_size}`}
                  id={index < maxItems || this.state.moreLoaded === 1 ? 'loaded' : 'notLoaded'}
                  key={index}
                >
                  <div className="item-top">
                    <div className="item-category">{item.category}</div>
                    <div className="item-graphic">
                      <img
                        src={
                          'https://plotly.cdn.prismic.io/plotly/b0a61864cbfa3f12a03c74bb95d8f5979159da1e_teal.png'
                        }
                      />
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
              <a onClick={this.handleClick} className="button button-primary">
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
