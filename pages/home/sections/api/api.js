import React from 'react'
import {ContentSection, ContentPane, Title, Body} from '../../../../components/content-section/content-section'
import CodeExplorer from './code-explorer/code-explorer';

export default () => (
    <ContentSection className="background-color-light-1 center not-mobile">
        <ContentPane full center center-vertically>
            <div className="pre-title">
                Develop
            </div>
            <Title>
                The fastest growing charting libraries for R, Python, and Javascript
            </Title>
            <Body>
            <p>Plotly's open-source, interactive charting libraries for R, Python, and Javascript are the fastest
                growing charting libraries in each language. Work entirely offline in IDEs like RStudio or Jupyter
                notebook, or optionally host your work on Plotly Cloud or Plotly On-Premise. Hosting Plotly charts
                online allows developers and data scientists to collaborate effortlessly with analysts who do not
                code.</p>
            <CodeExplorer />
            </Body>
        </ContentPane>
    </ContentSection>
)