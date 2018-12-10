import React from 'react';
import {ContentSection, ContentPane, Title, Body} from 'components/content-section';

class ArchitectureSection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <>
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
                    <div className="text-item text-item--left-top">
                      <div className="text-item-wrapper">
                        <div className="text-item-lines" />
                        <p>{this.props.data.items[0].left_top}</p>
                      </div>
                    </div>
                    <div className="text-item text-item--left-second">
                      <div className="text-item-wrapper">
                        <div className="text-item-lines" />
                        <p>{this.props.data.items[0].left_second}</p>
                      </div>
                    </div>
                    <div className="text-item text-item--right-top">
                      <div className="text-item-wrapper">
                        <div className="text-item-lines" />
                        <p>{this.props.data.items[0].right_top}</p>
                      </div>
                    </div>
                    <div className="text-item text-item--right-bottom">
                      <div className="text-item-wrapper">
                        <div className="text-item-lines" />
                        <div className="pre-title">
                          {this.props.data.items[0].right_bottom_pretitle}
                        </div>
                        <p>{this.props.data.items[0].right_bottom}</p>
                      </div>
                    </div>
                    <div className="text-item text-item--center-bottom">
                      <div className="text-item-wrapper">
                        <div className="text-item-lines" />
                        <div className="pre-title">
                          {this.props.data.items[0].center_bottom_pretitle}
                        </div>
                        <p> {this.props.data.items[0].center_bottom}</p>
                      </div>
                    </div>
                  </div>
                  <div className="image">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </Body>
          </ContentPane>
        </ContentSection>
      </>
    );
  }
}

export default ArchitectureSection;
