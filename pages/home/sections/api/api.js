import React from 'react'
import {ContentSection, ContentPane, Title, Body} from '../../../../components/content-section/content-section'
import CodeExplorer from './code-explorer/code-explorer';
import Buttons from '../../../../components/buttons/buttons';
const oemButton = [
    {
        label: 'Inquire about an Oem',
        title: 'Find out how we can work together.',
        typeform: true,
        icon: null,
        target: '_blank',
        link: 'https://plotly.typeform.com/to/mH1Cpb',
        button: {
            classes: 'button button-primary typeform-share'
        }
    }
];

export default () => (
    <div>
        <ContentSection className="background-color-light-1 center not-mobile">
            <ContentPane full center center-vertically>
                <div className="pre-title">
                    Develop
                </div>
                <Title>
                    The fastest growing charting libraries for R, Python, and Javascript
                </Title>
                <Body>
                <p>Plotly's open-source, interactive charting libraries for R, Python, and JavaScript are the fastest
                    growing charting libraries in each language. Work entirely offline in IDEs like RStudio or Jupyter
                    notebook, or optionally host your work on Plotly Cloud or Plotly On-Premise. Hosting Plotly charts
                    online allows developers and data scientists to collaborate effortlessly with analysts who do not
                    code.</p>
                </Body>
            </ContentPane>
            <ContentPane full center center-vertically>
                <Body>
                <CodeExplorer />
                </Body>
            </ContentPane>
        </ContentSection>
        <ContentSection className="background--oem">
            <ContentPane half center-vertically text className="sixy-five">
                <Title>
                    Use our platform, or build your own!
                </Title>
                <h2 className="content-section-h2">
                    Plotly is the leading data visualization technology provider. With our open-source software,
                    we help companies launch cutting edge, data visualization UIs in their products and internal
                    analytics platforms.
                </h2>
                <Body>
                <p>
                    Does your product have an ancient charting tool that needs to be replaced? Are your
                    customers asking for more advanced data visualization? We’re here to help. Through
                    Plotly.js, Dash, and years of launching successful data visualization products, we’re on a
                    mission to make every analytics product have first-class data visualization frontends.
                </p>

                <Buttons items={oemButton} className="padding-top"/>
                </Body>
            </ContentPane>
            <ContentPane half graphic center-vertically>
            </ContentPane>
        </ContentSection>
    </div>

