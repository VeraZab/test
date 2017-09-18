import {
    ContentSection,
    ContentPane,
    Title,
    Subtitle,
    Body,
    Graphic
} from 'components/content-section';
import React from 'react';
import Link from 'next/link';

export default () => (
    <div>
        <ContentSection>
            <ContentPane half center-vertically text>
                <Title>
                    1. Connect your Databases
                </Title>
                <Body>
                <p>
                    Download Plotly's free <a href="#download">Database Connector App</a> to connect your databases to
                    Plotly. Check out the <a href="http://help.plot.ly/database-connectors/">database connector
                    tutorials</a> for help getting started.
                </p>
                </Body>
            </ContentPane>
            <ContentPane half graphic>
                <Graphic
                    image="https://marketing.plot.ly/static/marketing/assets/images/database-connectors/connect.png?auto=compress&auto=format"/>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half graphic>
                <Graphic
                    image="https://marketing.plot.ly/static/marketing/assets/images/database-connectors/write_sql.png?auto=compress&auto=format"/>
            </ContentPane>
            <ContentPane half center-vertically text>
                <Title>
                    2. Write SQL
                </Title>
                <Body>
                <p>
                    Write SQL queries in Plotly's online <a
                    href="https://plot.ly/alpha/workspace/?upload=sql" target="_blank">Chart Maker</a>. Use the
                    results from these queries to make charts.

                </p>
                </Body>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half center-vertically text>
                <Title>
                    3. Share in Dashboards
                </Title>
                <Body>
                <p>
                    Add your charts to Plotly's best-in-class <Link
                    href="/dashboards/"><a>dashboards</a></Link> and share them with simple, secure links.
                </p>
                </Body>
            </ContentPane>
            <ContentPane half graphic>
                <Graphic
                    image="https://marketing.plot.ly/static/marketing/assets/images/database-connectors/share.png?auto=compress&auto=format"/>
            </ContentPane>
        </ContentSection>


        <ContentSection>
            <ContentPane full center center-vertically text>
                <Title>
                    Screenshots
                </Title>
                <Body>
                <p>
                    The Plotly SQL editor embeds directly in the charting environment to get you from SQL to D3 chart in
                    seconds.
                </p>
                <div style={{maxWidth: '680px', margin: '20px auto'}}>
                    <Graphic label="MySQL: Tesla Supercharger Stations" link="https://plot.ly/~jackp/16939/"
                             image="https://marketing.plot.ly/static/marketing/assets/images/database-connectors/screenshot_tesla.png?auto=compress&auto=format"/>
                </div>
                </Body>
            </ContentPane>
        </ContentSection>
    </div>
)
