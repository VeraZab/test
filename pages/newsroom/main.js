import {
  ContentSection,
  ContentPane,
  Body,
} from 'components/content-section';
import React from 'react';
import styles from './newsroom.styles.scss';
import Button from 'components/button';

const readMore = {
  label: 'Read More',
  subtitle: null,
  title: 'Read More',
  icon: null,
  button: {
    classes: 'button button-primary',
  },
};

const articles = [
  {
    title: "Plotly and Université de Sherbrooke to develop genomic visualization with innovation funding",
    date: 'Wed, Jan 17, 2018 2:00 PM EST',
    img:
      'https://crowdcast-prod.imgix.net/-KeordaLkGx83O8xLUFe/event-cover-725?w=800',
    presenter: {
      name: 'Ashley Pace',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      ...readMore,
      link: '/newsroom/mitacs',
    },
  },
  {
    title: "Microsoft Faculty Connection: Data Science in Visual Studio Code using Neuron, a new VS Code extension",
    date: 'Mon, Oct 29, 2018 0:00 PM EST',
    img:
      'https://crowdcast-prod.imgix.net/-KeordaLkGx83O8xLUFe/event-cover-725?w=800',
    presenter: {
      name: 'Ashley Pace',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      ...readMore,
      link: 'https://blogs.msdn.microsoft.com/uk_faculty_connection/2018/10/29/data-science-in-visual-studio-code-using-neuron-a-new-vs-code-extension/',
    },
  },
  {
    title: "Forbes: Comparing Data Visualization Software: Here Are The 7 Best Tools for 2018",
    date: 'Wed, Jun 20, 2018 0:35 AM EST',
    img:
      'https://crowdcast-prod.imgix.net/-KeordaLkGx83O8xLUFe/event-cover-725?w=800',
    presenter: {
      name: 'Ashley Pace',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      ...readMore,
      link: 'https://www.forbes.com/sites/bernardmarr/2018/06/20/comparing-data-visualization-software-here-are-the-7-best-tools-for-2018/#6060bc886d0b',
    },
  },
  {
    title: "PLOTLY announces 2nd Annual Data Visualization Conference PLOTCON 2017",
    date: 'Tuesday, Apr 04, 2017 2:00 PM EST',
    img:
      'https://crowdcast-prod.imgix.net/-KeordaLkGx83O8xLUFe/event-cover-1916?w=800',
    presenter: {
      name: 'Ashley Pace',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      ...readMore,
      link: '/newsroom/plotcon',
    },
  }
];

export default () => (
  <div className="sections">
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <ContentSection>
      <ContentPane full center center-vertically text>
        <Body>
          <div className="webinars">
            <div className="webinars-wrapper">
              {articles.map((article, i) => {
                return (
                  <div className="webinar" key={i}>
                    <div className="webinar-wrapper">
                      <div className="webinar-section">
                        <div className="webinar-img">
                          {article.img ? (
                            <div
                              className="webinar-img-wrapper"
                              style={{
                                backgroundImage:
                                  'url(' +
                                  article.img +
                                  '?w=100&h=100&fit=crop)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                              }}
                            />
                          ) : (
                            ''
                          )}
                        </div>
                        <div className="webinar-details">
                          <div className="webinar-details-title">
                            {article.title}
                          </div>
                          <div className="webinar-details-row">
                            <div className="webinar-details-date">
                              <span>When:</span> {article.date}
                            </div>
                            <div className="webinar-details-presenter">
                              <span>by:</span>{' '}
                              {article.presenter.name}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="webinar-section">
                        <div className="webinar-actions">
                          <Button item={article.action} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Body>
      </ContentPane>
    </ContentSection>
  </div>
);
