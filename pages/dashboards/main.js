import {
    ContentSection,
    ContentPane,
    Title,
    Subtitle,
    Body,
    Graphic
} from 'components/content-section/content-section';

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
                         link="https://plot.ly/dashboard/jackluo:3593/present"
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
                <Graphic label="Schizophrenia interactome with 504 novel protein–protein interactions"
                         link="https://plot.ly/dashboard/jackluo:3593/present"
                         image="https://images.plot.ly/static/marketing/product/DBlhl3NWAAARiLH.jpg"/>
            </ContentPane>
            <ContentPane half center-vertically>
                <Graphic
                    label="FiveThirtyEight"
                    link="https://plot.ly/dashboard/Dreamshot:8462/present"
                    image="https://images.plot.ly/static/marketing/product/C4KprMzWIAAX8m_.jpg"/>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half center-vertically text>
                <Title>
                    Share Online
                </Title>
                <Body>
                <p>
                    Share your dashboard online with public or secret links. <a href="https://plot.ly/dashboard/create/"
                                                                                target="_blank">Create a Dashboard</a>.
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
                    label="Molecular Weights of Therapeutic Small Molecules Compared to MW Distribution"
                    link="https://plot.ly/dashboard/jackp:17405/present"
                    image="https://images.plot.ly/static/marketing/product/C2kvbzBUQAA_XDR.jpg-.jpg"/>
            </ContentPane>
        </ContentSection>
        <ContentSection>
            <ContentPane half center-vertically text>
                <Title>
                    Automate Dashboard Creation through Python
                </Title>
                <Body>
                <p>
                    Plotly dashboards and charts can be made without coding, or you can make them entirely with Python.
                </p>
                <p>
                    <a href="https://plot.ly/python/create-online-dashboard/" target="_blank">Read the Python dashboard tutorial</a>
                </p>
                <p>
                    <a href="https://plot.ly/products/cloud/" target="_blank"> Get started with a cloud plan
                    </a>
                </p>
                </Body>
            </ContentPane>
            <ContentPane half graphic>
                <Graphic
                    image="https://images.plot.ly/static/marketing/product/C6qPQB-U4AAHGa3.jpg"/>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half graphic>
                <Graphic shadow="false"
                    image="https://images.plot.ly/static/marketing/dash/dash-hero-visual@2x.png"/>
            </ContentPane>
            <ContentPane half center-vertically text>
                <Title>
                    Dashboards with Advanced Controls
                </Title>
                <Body>
                <p>
                    Looking for dashboards with sliders, search boxes, filtering, and dropdowns?
                </p>
                <p>
                    Check out <a href="https://plot.ly/products/dash/">Dash for Python</a> or these <a href="https://moderndata.plot.ly/15-python-and-r-charts-with-interactive-controls-buttons-dropdowns-and-sliders/">15 dashboards</a> with interactive controls.
                </p>
                </Body>
            </ContentPane>
        </ContentSection>
    </div>
)