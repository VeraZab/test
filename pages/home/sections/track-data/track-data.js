import React from 'react'
import {
  ContentSection,
  ContentPane,
  Title,
  Subtitle,
  Body,
  Graphic,
} from 'components/content-section'

const buttons = [
  {
    label: 'Create your first chart',
    subtitle: null,
    title: 'Explore the Plotly Chart Maker',
    icon: null,
    target: '_blank',
    link: 'https://plot.ly/create/',
    button: {
      classes: 'button button-primary',
    },
  },
]

export default () => (
  <ContentSection>
    <ContentPane half center-vertically text>
      <div className="pre-title">Track</div>
      <Title>Charts linked to their data, authors, and version history.</Title>
      <Body>
        <p>Plotly Charts are fundamentally tied to their underlying data.</p>
        <p>
          As charts are shared and data changes hands through your organization,
          Plotly tracks how that data transforms. Think of it as GitHub for
          data.
        </p>
        <p>
          As a cloud platform, Plotly is the only business intelligence solution
          to provide heavily audited industries with fine-grained information on
          data provenance.
        </p>
      </Body>
    </ContentPane>
    <ContentPane half graphic center-vertically>
      <Graphic
        shadow="false"
        image="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-marketing-pages/images/new-branding/backgrounds/feature-illustration-data-provenance.svg"
      />
    </ContentPane>
  </ContentSection>
)
