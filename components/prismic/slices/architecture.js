import React from 'react';
import {ContentSection, ContentPane, Title, Body} from 'components/content-section';
import shortid from 'shortid';

class Architecture extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderTextItem = position => {
      return (
        <div
          key={shortid.generate()}
          className={`text-item text-item--${position.x}-${position.y}`}
        >
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
            <img src={this.props.data.primary.image1.url} alt="An image to describe the enterprise architecture of Chart Studio Enterprise." />
          </Body>
        </ContentPane>
      </ContentSection>
    );
  }
}

export default Architecture;
