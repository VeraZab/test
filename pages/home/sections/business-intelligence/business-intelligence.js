import React from 'react'
import {
    ContentSection,
    ContentPane,
    Title,
    Subtitle,
    Body,
    Graphic
} from 'components/content-section/content-section';
const buttonStyles = {
    transform: 'translateX(-20px)'
};
import Buttons from 'components/buttons/buttons';

const buttons = [
    {
        label: 'See all of our plans',
        subtitle: null,
        title: 'Get started now, pick a plan later.',
        icon: null,
        target: '_self',
        link: '/products/cloud/',
        button: {
            classes: 'button button-primary'
        }
    },
    {
        label: 'View our on-premise plans',
        subtitle: null,
        title: 'Safe and secure, behind your firewall',
        icon: null,
        target: '_self',
        link: '/products/on-premise/',
        button: {
            classes: 'button button-secondary'
        }
    }
];
export default () => (
    <ContentSection className="background-color-light-4 no-padding-mobile">

        <ContentPane half center-vertically text className="thirty-five">
            <div className="pre-title">
                Business Intelligence
            </div>
            <Title>
                Plotly's agile BI platform lets you create and share everything you need.
            </Title>
            <Body>
            <p>Plotly offers unlimited public file hosting through its free community&nbsp;plan. With paid plans, you can host unlimited private files on Plotly’s&nbsp;platform.</p>
            </Body>
        </ContentPane>
        <ContentPane half graphic center-vertically className="sixy-five">
            <div className="grids">

                <div className="grid grid-3x3">
                    <div className="grid-item">
                        <a href="https://plot.ly/organize/home?create=grid" className="card center
                                card-simple">
                            <div className="card-image">
                                <img
                                    src="https://marketing.plot.ly/static/marketing/assets/images/filetype-icons/datasets.svg"
                                    alt=""/>
                            </div>
                            <div className="card-label">
                                <div className="card-label-text">
                                    Data Sets
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="grid-item">
                        <a href="/dashboards/" className="card center
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
                        </a>
                    </div>

                    <div className="grid-item">
                        <a href="/online-chart-maker/" className="card center
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
                        </a>
                    </div>
                </div>
                <div className="grid grid-3x3">
                    <div className="grid-item">
                        <a href="/database-connectors/" className="card center
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
                        </a>
                    </div>

                    <div className="grid-item">
                        <a href="/powerpoint-online/" className="card center
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
                        </a>
                    </div>
                    <div className="grid-item">
                        <a href="https://plot.ly/~empet/14352" target="_blank" className="card center
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
                        </a>
                    </div>
                </div>
            </div>
            <Buttons className="gutter-top center" items={buttons}/>
        </ContentPane>
    </ContentSection>
)

