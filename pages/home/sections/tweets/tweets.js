import React from 'react'
import {ContentSection} from 'components/content-section'

export default () => (
    <ContentSection className="white center">
        <div className="content-section-header">
            <div className="pre-title">
                Follow
            </div>
            <h3 className="title-l">Latest Tweets</h3>
        </div>
        <div className="content-section-body">
            <div className="tweets">
                <div className="cards">
                    <div className="card card-simple">
                        <div className="card-wrapper">
                            <div className="card-details">
                                <div className="sub-title">3 steps to set up Plotly's free and open-source
                                    chart-to-SQL
                                    connector: <a href="#">plot.ly/database-conne…</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-simple">
                        <div className="card-wrapper">
                            <div className="card-details">
                                <div className="sub-title">3 steps to set up Plotly's free and open-source
                                    chart-to-SQL
                                    connector: <a href="#">plot.ly/database-conne…</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-simple">
                        <div className="card-wrapper">
                            <div className="card-details">
                                <div className="sub-title">3 steps to set up Plotly's free and open-source
                                    chart-to-SQL
                                    connector: <a href="#">plot.ly/database-conne…</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttons center gutter-top">
                <div className="button button-primary">
                    Follow @plotlygraphs
                </div>
            </div>
        </div>
    </ContentSection>
)