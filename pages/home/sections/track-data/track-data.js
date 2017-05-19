
import React from 'react'
import {ContentSection} from '../../../../components/content-section/content-section'

export default () => (
    <ContentSection>
        <div className="panes">
            <div className="pane pane-half center gutter-right">
                <div className="graphic">
                    <img src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-marketing-pages/images/new-branding/backgrounds/feature-illustration-data-provenance.svg" alt=""/>
                </div>
            </div>
            <div className="pane pane-half">
                <div className="content-section-header">
                    <div className="pre-title">
                        Track
                    </div>
                    <h3 className="title-l">Charts linked to their data, authors, and version history.</h3>
                </div>
                <div className="content-section-body">
                    <p>Plotly Charts are fundamentally tied to their underlying data.</p>
                    <p>As charts are shared and data changes hands through your organization, Plotly tracks how that
                        data transforms. Think of it as GitHub for data.</p>
                    <p>As a cloud platform, Plotly is the only business intelligence solution to provide heavily audited
                        industries with fine-grained information on data provenance.</p>
                </div>
            </div>
        </div>
    </ContentSection>
)

