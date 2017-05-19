import React from 'react';
import styles from './narrative.scss'

import {ContentSection, ContentPane, Title, Body} from '../../../../components/content-section/content-section'

const iconStyles = {
    width: '42px',
    display: 'block'
};

export default () => (

    <ContentSection className="center">
        <style dangerouslySetInnerHTML={{__html: styles}}/>
        <ContentPane center>
            <Title>
                Build your data visualization narratives<br />in three steps
            </Title>
            <Body>
            <div className="cards cards-narrative gutter-top">
                <div className="card hidden card-simple dark-blue">
                    <div className="card-wrapper">
                        <div className="card-avatar">
                            <img
                                src="https://images.plot.ly/plotly-marketing-pages/images/new-branding/icons/tour-icons/images/datasets@2x.png"
                                alt="" style={iconStyles}/>
                        </div>
                        <div className="card-details">
                            <h4 className="title-sm">Import</h4>
                            <div className="sub-title">Upload Excel/CSV data or query a SQL database.</div>
                        </div>
                    </div>
                    <div className="card-bg-element number">
                        1
                    </div>
                </div>
                <div className="card hidden card-simple dark-blue">
                    <div className="card-wrapper">
                        <div className="card-avatar">
                            <img
                                src="https://images.plot.ly/plotly-marketing-pages/images/new-branding/icons/tour-icons/images/create-charts@2x.png"
                                alt="" style={iconStyles}/>
                        </div>
                        <div className="card-details">
                            <h4 className="title-sm">Create</h4>
                            <div className="sub-title">
                                Create D3.js charts and dashboards by clicking, coding, or a little of both.
                            </div>
                        </div>
                    </div>
                    <div className="card-bg-element number">
                        2
                    </div>
                </div>
                <div className="card hidden card-simple dark-blue">
                    <div className="card-wrapper">
                        <div className="card-avatar">
                            <img
                                src="https://images.plot.ly/plotly-marketing-pages/images/new-branding/icons/tour-icons/images/data-provenance@2x.png"
                                alt="" style={iconStyles}/>
                        </div>
                        <div className="card-details">
                            <h4 className="title-sm">Share</h4>
                            <div className="sub-title">
                                Easy, secure sharing options similar to Google Docs.
                            </div>
                        </div>
                    </div>
                    <div className="card-bg-element number">
                        3
                    </div>
                </div>
            </div>

            </Body>
        </ContentPane>
    </ContentSection>

)