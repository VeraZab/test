import React from 'react'
import BrowserWrapper from 'components/elements/browser-wrapper/browser-wrapper'
import {
    ContentSection,
    ContentPane,
    Title,
    Subtitle,
    Body,
    Graphic
} from 'components/content-section';
import Buttons from 'components/buttons';

const buttons = [
    {
        label: 'Create your first chart',
        subtitle: null,
        title: 'Explore the Plotly Chart Maker',
        icon: null,
        target: '_blank',
        link: 'https://plot.ly/create/',
        button: {
            classes: 'button button-primary'
        }
    }
];

export default () => (
    <ContentSection className="background--dotted-lines">

        <ContentPane half center-vertically text>
            <div className="pre-title">
                Create
            </div>
            <Title>
                Create graphs and charts
            </Title>
            <Body>
            <p>Easily create stunning and informative graphics using our sophisticated, open source,
                visualization
                library and our online chart creation tool.</p>
            <p>Take a look at the chart types that our APIs support and view our community feed.</p>

            <Buttons className="gutter-top" items={buttons}/>

            </Body>
        </ContentPane>
        <ContentPane half graphic center-vertically>

            <BrowserWrapper>
                <video
                    src="https://marketing.plot.ly/static/marketing/assets/images/mountain-cropped.mp4"
                    loop=""
                    autoPlay="true" className="not-mobile"></video>
            </BrowserWrapper>
        </ContentPane>
    </ContentSection>
)

