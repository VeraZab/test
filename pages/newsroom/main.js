import {
  ContentSection,
  ContentPane,
  Title,
  Subtitle,
  Body,
  Graphic,
} from 'components/content-section';
import React from 'react';
import Link from 'next/link';
import styles from './newsroom.styles.scss';
import Button from 'components/button';

const readMore = {
  label: 'Read More',
  subtitle: null,
  title: 'Read More',
  icon: null,
  target: '_blank',
  button: {
    classes: 'button button-primary',
  },
};

const articles = [
  {
    title: "Story",
    date: 'Thursday, Feb 15, 2018 2:00 PM EST',
    img:
      'https://crowdcast-prod.imgix.net/-KeordaLkGx83O8xLUFe/event-cover-1916?w=800',
    presenter: {
      name: 'Chelsea Douglas',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      ...readMore,
      link: 'https://www.crowdcast.io/e/automatic-email/register',
    },
  },
  {
    title: "Story",
    date: 'Wed, Jan 17, 2018 2:00 PM EST',
    img:
      'https://crowdcast-prod.imgix.net/-KeordaLkGx83O8xLUFe/event-cover-725?w=800',
    presenter: {
      name: 'Charley Ferrari',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      ...readMore,
      link: 'https://www.crowdcast.io/e/falcon-database-connector/register',
    },
  },
  {
    title: "Story",
    date: 'December 6th, 2017 2PM EST',
    img:
      'https://marketing.plot.ly/static/marketing/assets/images/dashboards/dashboard.gif',
    presenter: {
      name: 'Branden Dunbar',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      ...readMore,
      link: 'https://www.crowdcast.io/e/using-excel-to-generate',
    },
  },
  {
    title: "Story",
    date: 'Wed, Nov 15, 2017 2:00 PM EST',
    img:
      'https://crowdcast-prod.imgix.net/-KeordaLkGx83O8xLUFe/event-cover-9924?w=800',
    presenter: {
      name: 'Charley Ferrari',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      ...readMore,
      link: 'https://www.crowdcast.io/e/using-the-falcon-sql/register',
    },
  },
  {
    title: "Story",
    date: 'October 25th, 2017 2PM EST',
    img:
      'https://images-plotly.imgix.net/static/marketing/dash/dash-hero-visual@2x.png?auto=compress&auto=format',
    presenter: {
      name: 'Chris Parmer',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      ...readMore,
      link: 'https://www.crowdcast.io/e/dash-plotlys-pythonic/register',
    },
  },
  {
    title: "Story",
    date: 'August 29, 2017 2PM EST',
    img:
      'https://crowdcast-prod.imgix.net/-KeordaLkGx83O8xLUFe/event-cover-7133',
    presenter: {
      name: 'Chelsea Douglas',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      ...readMore,
      link: 'https://www.crowdcast.io/e/using-jupyter-notebooks/register',
    },
  },
  {
    title: "Story",
    date: 'September 20th, 2017 2PM EST',
    img:
      'https://crowdcast-prod.imgix.net/-KeordaLkGx83O8xLUFe/event-cover-6164',
    presenter: {
      name: 'Charley Ferrari',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      ...readMore,
      link:
        'https://www.crowdcast.io/e/Using-Plotly-and%20-to-Create-and-Update-Dashboards/register',
    },
  },
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
                              <span>Presented by:</span>{' '}
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
