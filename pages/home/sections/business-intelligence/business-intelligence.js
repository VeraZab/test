import React from 'react'
import {ContentSection} from '../../../../components/content-section/content-section'
const buttonStyles = {
    transform: 'translateX(-20px)'
};
export default () => (
    <ContentSection className="background-color-light-4 no-padding-mobile">
        <div className="panes">
            <div className="pane title-content gutter-right">
                <div className="content-section-header">

                    <h3 className="title-l">Plotly's agile BI platform
                        lets you create and share everything you need:</h3>
                </div>
            </div>
            <div className="pane column">
                <div className="grid grid-3x3">
                    <div className="grid-item">
                        <div className="card center
                                card-simple">
                            <div className="card-image">
                                <img
                                    src="https://marketing.plot.ly/static/marketing/assets/images/filetype-icons/datasets.svg"
                                    alt=""/>
                            </div>
                            <div className="card-label">
                                <div className="card-label-text">
                                    Datasets
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item">
                        <div className="card center
                                card-simple">
                            <div className="card-image">
                                <img
                                    src="https://marketing.plot.ly/static/marketing/assets/images/filetype-icons/dashboards.svg"
                                    alt=""/>
                            </div>
                            <div className="card-label">
                                <div className="card-label-text">
                                    D3.js Dashboards
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item">
                        <div className="card center
                                card-simple">
                            <div className="card-image">
                                <img
                                    src="https://marketing.plot.ly/static/marketing/assets/images/filetype-icons/charts.svg"
                                    alt=""/>
                            </div>
                            <div className="card-label">
                                <div className="card-label-text">
                                    D3.js Charts
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item">
                        <div className="card center
                                card-simple">
                            <div className="card-image">
                                <img
                                    src="https://marketing.plot.ly/static/marketing/assets/images/filetype-icons/dbconnector.svg"
                                    alt=""/>
                            </div>
                            <div className="card-label">
                                <div className="card-label-text">
                                    SQL Queries
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item">
                        <div className="card center
                                card-simple">
                            <div className="card-image">
                                <img
                                    src="https://marketing.plot.ly/static/marketing/assets/images/filetype-icons/spectacle.svg"
                                    alt=""/>
                            </div>
                            <div className="card-label">
                                <div className="card-label-text">
                                    Slide Decks
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card center
                                card-simple">
                            <div className="card-image">
                                <img
                                    src="https://marketing.plot.ly/static/marketing/assets/images/filetype-icons/notebook.svg"
                                    alt=""/>
                            </div>
                            <div className="card-label">
                                <div className="card-label-text">
                                    Jupyter Notebooks
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttons center padding-top">
                    <div className="button button-primary" style={buttonStyles}>
                        See all of our plans
                    </div>
                </div>
            </div>
        </div>
    </ContentSection>
)

