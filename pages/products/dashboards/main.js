import {ContentSection, ContentPane, Title, Subtitle, Body, Graphic} from '../../../components/content-section/content-section';

export default () => (
    <div>
        <ContentSection>
            <ContentPane half center-vertically text>
                <Title>
                    Drag and drop
                </Title>
                <Body>
                <p>
                    Make world-class, shareable charts and dashboards in hours instead of weeks.
                </p>
                <p>
                    All Plotly charts are built with D3.js or WebGL, guaranteeing the best quality online graphics.
                </p>
                </Body>
            </ContentPane>
            <ContentPane half graphic>
                <Graphic
                    image="https://marketing.plot.ly/static/marketing/assets/images/dashboards/dashboard.gif"/>
            </ContentPane>
        </ContentSection>
        {/*2 graphics*/}
        <ContentSection>
            <ContentPane half center-vertically>
                <Graphic label="Shell: Integrated Gas"
                         link="https://plot.ly/dashboard/jackp:16820/present"
                         image="https://marketing.plot.ly/static/marketing/assets/images/dashboards/shell.png"/>
            </ContentPane>
            <ContentPane half center-vertically>
                <Graphic
                    label="Mercedes: Cars Comparison"
                    link="https://plot.ly/dashboard/jackp:16818/present"
                    image="https://marketing.plot.ly/static/marketing/assets/images/dashboards/mercedes.png"/>
            </ContentPane>
        </ContentSection>
        <ContentSection>
            <ContentPane half graphic>
                <Graphic
                    image="https://marketing.plot.ly/static/marketing/assets/images/dashboards/embed.gif"/>
            </ContentPane>
            <ContentPane half center-vertically text>
                <Title>
                    Embed Plotly Charts
                </Title>
                <Body>
                <p>
                    Embed interactive, D3.js charts and tables from your Plotly account.
                </p>
                </Body>
            </ContentPane>
        </ContentSection>
        {/*2 graphics*/}
        <ContentSection>
            <ContentPane half center-vertically>
                <Graphic label="Wind Power Prospecting" link="https://plot.ly/dashboard/jackp:16821/present"
                         image="https://marketing.plot.ly/static/marketing/assets/images/dashboards/windpower.png"/>
            </ContentPane>
            <ContentPane half center-vertically>
                <Graphic
                    label="Air Traffic Control"
                    link="https://plot.ly/dashboard/jackp:16819/present"
                    image="https://marketing.plot.ly/static/marketing/assets/images/dashboards/air_traffic_control.png"/>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half center-vertically text>
                <Title>
                    Share Online
                </Title>
                <Body>
                <p>
                    Share your dashboard online with public or secret links. <a href="https://plot.ly/dashboard/create/" target="_blank">Create a Dashboard</a>.
                </p>
                </Body>
            </ContentPane>
            <ContentPane half graphic>
                <Graphic
                    image="https://marketing.plot.ly/static/marketing/assets/images/dashboards/share.png"/>
            </ContentPane>
        </ContentSection>

        {/*2 graphics*/}
        <ContentSection>
            <ContentPane half center-vertically>
                <Graphic label="Twitter: Marketing Campaign" link="https://plot.ly/dashboard/jackp:16823/present"
                    image="https://marketing.plot.ly/static/marketing/assets/images/dashboards/twitter.png"/>
            </ContentPane>
            <ContentPane half center-vertically>
                <Graphic
                    label="Q4 Sales KPIs"
                    link="https://plot.ly/dashboard/verazab:67/present"
                    image="https://marketing.plot.ly/static/marketing/assets/images/dashboards/q4_sales_kpis.png"/>
            </ContentPane>
        </ContentSection>
    </div>
)