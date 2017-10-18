import {
  ContentSection,
  ContentPane,
  Title,
  Subtitle,
  Body,
  Graphic,
} from 'components/content-section'
import React from 'react'
import Link from 'next/link'
import styles from './webinars.styles.scss'
import Button from 'components/button'

const webinars = [
  {
    title: 'Dash: Plotly’s Pythonic Web Application Framework',
    date: 'October 25th, 2017 2PM EST',
    img:
      'https://images-plotly.imgix.net/static/marketing/dash/dash-hero-visual@2x.png?auto=compress&auto=format',
    presenter: {
      name: 'Chris Parmer',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      label: 'Register',
      subtitle: null,
      title: 'Register for this webinar',
      icon: null,
      target: '_blank',
      link: 'https://www.crowdcast.io/e/dash-plotlys-pythonic/register',
      button: {
        classes: 'button button-primary',
      },
    },
  },
  {
    title: 'Using Excel to Generate Online Dashboards in Plotly',
    date: 'December 6th, 2017 2PM EST',
    img:
      'https://marketing.plot.ly/static/marketing/assets/images/dashboards/dashboard.gif',
    presenter: {
      name: 'Branden Dunbar',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      label: 'Register',
      subtitle: null,
      title: 'Register for this webinar',
      icon: null,
      target: '_blank',
      link: 'https://www.crowdcast.io/e/using-excel-to-generate/register',
      button: {
        classes: 'button button-primary',
      },
    },
  },
  {
    title: 'Using Plolty’s Python API for Automatic Dashboards',
    date: 'August 29, 2017 2PM EST',
    img:
      'https://crowdcast-prod.imgix.net/-KeordaLkGx83O8xLUFe/event-cover-7133',
    presenter: {
      name: 'Chelsea Douglas',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      label: 'Watch Recording',
      subtitle: null,
      title: '',
      icon: null,
      target: '_blank',
      link: 'https://www.crowdcast.io/e/using-jupyter-notebooks/register',
      button: {
        classes: 'button button-primary',
      },
    },
  },
  {
    title: 'Using Plolty’s R API to Create and Update Online Dashboards',
    date: 'September 20th, 2017 2PM EST',
    img:
      'https://crowdcast-prod.imgix.net/-KeordaLkGx83O8xLUFe/event-cover-6164',
    presenter: {
      name: 'Charley Ferrari',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      label: 'Watch Recording',
      subtitle: null,
      title: '',
      icon: null,
      target: '_blank',
      link:
        'https://www.crowdcast.io/e/Using-Plotly-and%20-to-Create-and-Update-Dashboards/register',
      button: {
        classes: 'button button-primary',
      },
    },
  },
]

export default () => (
  <div className="sections">
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <ContentSection>
      <ContentPane full center center-vertically text>
        <Subtitle>Past & Upcoming</Subtitle>
        <Title>Webinars</Title>
        <Body>
          <div className="webinars">
            <div className="webinars-wrapper">
              {webinars.map((webinar, i) => {
                return (
                  <div className="webinar" key={i}>
                    <div className="webinar-wrapper">
                      <div className="webinar-section">
                        <div className="webinar-img">
                          {webinar.img ? (
                            <div
                              className="webinar-img-wrapper"
                              style={{
                                backgroundImage:
                                  'url(' +
                                  webinar.img +
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
                            {webinar.title}
                          </div>
                          <div className="webinar-details-row">
                            <div className="webinar-details-date">
                              <span>When:</span> {webinar.date}
                            </div>
                            <div className="webinar-details-presenter">
                              <span>Presented by:</span>{' '}
                              {webinar.presenter.name}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="webinar-section">
                        <div className="webinar-actions">
                          <Button item={webinar.action} />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Body>
      </ContentPane>
    </ContentSection>
  </div>
)
