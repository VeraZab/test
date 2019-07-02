import React from 'react';

class RelatedPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.data.items;

    return (
      <div className="resources-wrapper">
        <h1 className="title resources-title">{this.props.data.primary.title1}</h1>
        <div className="resources" id="related-posts">
          {items.map((item, index) => {
            return (
              <div className="resources-item-fourth" key={index}>
                <div className="item-top">
                  <div className="item-category">{item.category}</div>
                  <div className="item-graphic">
                    <img src="https://plotly.cdn.prismic.io/plotly/b0a61864cbfa3f12a03c74bb95d8f5979159da1e_teal.png" />
                  </div>
                </div>
                <div className="shadow-wrapper">
                  <div className="item-bottom">
                    <div className="item-title">
                      <a target="_blank" href={item.story_url}>
                        {item.story_title}
                      </a>
                    </div>
                    <div className="meta-wrapper">
                      <div className="item-author">{item.story_presenter}</div>
                      <div className="item-date">{item.story_date}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default RelatedPosts;
