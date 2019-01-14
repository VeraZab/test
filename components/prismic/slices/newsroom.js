import React from 'react';
import {ContentSection, ContentPane, Body} from 'components/content-section';
import Button from 'components/button';

class Newsroom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sections">
        <ContentSection>
          <ContentPane full center center-vertically text>
            <Body>
              {this.props.data.items.map((item, i) => {
                return (
                  <div className="webinar-wrapper">
                    <div className="webinar-section" key={i}>
                      <div className="webinar-img">
                        {item.story_image ? (
                          <div
                            className="webinar-img-wrapper"
                            style={{
                              backgroundImage:
                                'url(' + item.story_image.url + '?w=100&h=100&fit=crop)',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center center',
                            }}
                          />
                        ) : (
                          ''
                        )}
                      </div>
                      <div className="webinar-details">
                        <div className="webinar-details-title">{item.story_title[0].text}</div>
                        <div className="webinar-details-row">
                          <div className="webinar-details-date">
                            <span>When:</span>
                            {item.story_date[0].text}
                          </div>
                          <div className="webinar-details-presenter">
                            <span>by:</span>
                            {item.story_presenter[0].text}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="webinar-section">
                      <div className="webinar-actions">
                        <Button
                          item={{
                            label: 'Read More',
                            subtitle: null,
                            title: 'Read More',
                            icon: null,
                            button: {classes: 'button button-primary'},
                            link: item.story_url[0].text,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </Body>
          </ContentPane>
        </ContentSection>
      </div>
    );
  }
}

export default Newsroom;
