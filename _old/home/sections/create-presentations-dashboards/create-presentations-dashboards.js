import React from 'react'
import BrowserWrapper from 'components/elements/browser-wrapper/browser-wrapper'
import {
  ContentSection,
  ContentPane,
  Title,
  Body,
} from 'components/content-section'

export default () => (
  <ContentSection className="dark-blue center">
    <ContentPane full center center-vertically>
      <div className="pre-title">Create</div>
      <Title>Make stunning slide decks and dashboards.</Title>
      <Body>
        <p>
          Easily share your findings by embedding them into a web page,
          exporting them into pdf, png, svg, eps formats, or creating custom{' '}
          <a href="https://plot.ly/powerpoint-online/" target="_blank">
            slide decks
          </a>{' '}
          and{' '}
          <a href="https://plot.ly/dashboards/" target="_blank">
            dashboards
          </a>.
        </p>
        <div className="graphics screen-offsets">
          <BrowserWrapper>
            <img
              src="https://marketing.plot.ly/static/marketing/assets/images/presentations.png?auto=compress&auto=format"
              alt=""
            />
          </BrowserWrapper>
          <BrowserWrapper>
            <img
              src="https://marketing.plot.ly/static/marketing/assets/images/dashboards.png?auto=compress&auto=format"
              alt=""
            />
          </BrowserWrapper>
        </div>
      </Body>
    </ContentPane>
  </ContentSection>
)
