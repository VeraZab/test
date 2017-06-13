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
                Outstanding API
            </Title>
            <Body>
            <p>Sample API text, one or even two paragraphs of text to highlighting plotly api awesomeness.
                Perform your analysis with the tools you know and love.</p>
            <CodeExplorer />
            </Body>
        </ContentPane>
    </ContentSection>
)