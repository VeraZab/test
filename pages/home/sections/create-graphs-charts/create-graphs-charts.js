import React from 'react'
import BrowserWrapper from '../../../../components/elements/browser-wrapper/browser-wrapper'
import {ContentSection} from '../../../../components/content-section/content-section'

export default () => (
    <ContentSection className="background--dotted-lines">
        <div className="panes">
            <div className="pane pane-half">
                <div className="content-section-header">
                    <div className="pre-title">
                        Create
                    </div>
                    <h3 className="title-l">Create graphs and charts</h3>
                </div>
                <div className="content-section-body">
                    <p>Easily create stunning and informative graphics using our sophisticated, open source,
                        visualization
                        library and our online chart creation tool.</p>
                    <p>Take a look at the chart types that our APIs support and view our community feed.</p>
                    <div className="buttons">
                        <div className="button button-primary">
                            Create your first chart
                        </div>
                    </div>
                </div>
            </div>
            <div className="pane pane-half">
                <div className="graphic graphic-browser">
                    <BrowserWrapper>
                        <video
                            src="https://marketing.plot.ly/static/marketing/assets/images/mountain-cropped.mp4"
                            loop=""
                            autoPlay="true" className="not-mobile"></video>
                    </BrowserWrapper>
                </div>
            </div>
        </div>
    </ContentSection>
)

