import React from 'react';
import {ContentSection, ContentPane, Title, Body} from 'components/content-section';

class Architecture extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderTextItem = position => {
      return (
        <div className={`text-item text-item--${position.x}-${position.y}`}>
          <div className="text-item-wrapper">
            <div className="text-item-lines" />
            {position.title && (
              <div className="pre-title">
                {this.props.data.items[0][`${position.x}_${position.y}_pretitle`]}
              </div>
            )}
            <p>{this.props.data.items[0][`${position.x}_${position.y}`]}</p>
          </div>
        </div>
      );
    };

    return (
      <ContentSection className="architecture-section">
        <ContentPane full center center-vertically text>
          <div className="pre-title">{this.props.data.items[0].section_pretitle}</div>
          <Title>{this.props.data.items[0].section_title}</Title>
          <Body>
            <div className="image-with-complex-text-overlay architecture">
              <div className="image-with-complex-text-overlay-wrapper">
                <div className="image">
                  <img
                    src="https://images-plotly.imgix.net/static/marketing/product/on-premises/architecture.png?auto=compress&auto=format"
                    alt=""
                  />
                </div>
                <div className="text-overlay">
                  {[
                    {x: 'left', y: 'top', title: false},
                    {x: 'left', y: 'second', title: false},
                    {x: 'right', y: 'top', title: false},
                    {x: 'right', y: 'bottom', title: true},
                    {x: 'center', y: 'bottom', title: true},
                  ].map(n => {
                    return renderTextItem(n);
                  })}
                </div>
                <div className="image">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </Body>
        </ContentPane>
      </ContentSection>
    );
  }
}

export default Architecture;
