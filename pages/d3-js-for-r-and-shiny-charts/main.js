import {
    ContentSection,
    ContentPane,
    Title,
    Subtitle,
    Body,
    Graphic
} from '../../components/content-section/content-section';

export default () => (
    <div>


        <ContentSection>
            <ContentPane half graphic>
                <Graphic image="https://camo.githubusercontent.com/09183b0e60c303d96a22e999cd69c81b1dcfe302/687474703a2f2f692e696d6775722e636f6d2f655671735a6d612e676966" />
            </ContentPane>
            <ContentPane half center-vertically text>
                <Title>
                    Supercharged graphics for R Shiny
                </Title>
                <Body>
                <p>
                    Love R Shiny? Try adding Plotly charts for supercharged interactive graphics and cross filtering.
                </p>
                </Body>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half center-vertically text>
                <Title>
                    Add interactivity to ggplot2 charts
                </Title>
                <Body>
                <p>
                    No need to learn a new chart syntax: One line of code converts a ggplot2 static chart to an interactive Plotly version.
                </p>
                </Body>
            </ContentPane>
            <ContentPane half graphic>
                <Graphic
                    image="https://plot.ly/static/enterprise/img/alternatives/highcharts/share.a9caa353cef7.jpg"/>
            </ContentPane>
        </ContentSection>


        <ContentSection>
            <ContentPane half graphic>
                <div className="flexed">
                    <a href="http://d3js.org/"><img
                        src="https://plot.ly/static/enterprise/img/alternatives/logo-d3js.ba761bd044ad.png"
                        alt="d3"/></a>
                    <a href="http://stack.gl/"><img
                        src="https://plot.ly/static/enterprise/img/alternatives/logo-stackgl.a45db7e74096.gif"
                        alt="stackgl"/></a>
                </div>
            </ContentPane>
            <ContentPane half center-vertically text>
                <Title>
                    World-class charts, maps, and interactivity
                </Title>
                <Body>
                <p>
                    Make D3.js and WebGL charts with the ease, power, and open-source ecosystem of R. Plotly charts and dashboards can be easily styled in R, or uploaded to Plotly’s online editor for point-&-click styling and collaboration.
                </p>
                </Body>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half center-vertically text>
                <Title>
                    GitHub-style Sharing
                </Title>
                <Body>
                <p>
                    Share your charts, maps, and dashboards through Plotly’s online platform, or work entirely offline.
                </p>
                <p>
                    Featured R user: @riddhiman
                </p>
                </Body>
            </ContentPane>
            <ContentPane half graphic>
                <Graphic
                    image="https://plot.ly/static/enterprise/img/alternatives/highcharts/share.a9caa353cef7.jpg"/>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half graphic>
                <div className="flexed">
                    <a href="http://d3js.org/"><img
                        src="https://plot.ly/static/enterprise/img/alternatives/logo-d3js.ba761bd044ad.png"
                        alt="d3"/></a>
                    <a href="http://stack.gl/"><img
                        src="https://plot.ly/static/enterprise/img/alternatives/logo-stackgl.a45db7e74096.gif"
                        alt="stackgl"/></a>
                </div>
            </ContentPane>
            <ContentPane half center-vertically text>
                <Title>
                    Collaborate with Tableau, Excel, and Python users
                </Title>
                <Body>
                <p>
                    With Plotly, there’s no need to choose between Python and R. R users can easily share Plotly charts to Python users (and vice versa) through Plotly Cloud, Plotly On-Premise, or entirely offline. Plotly charts are language agnostic and the best open-source choice for any language.
                </p>
                <p>
                    For code-free collaboration, Python charts and dashboards can also be shared with Tableau and Excel users through Plotly On-Premise and Plotly Cloud.
                </p>
                </Body>
            </ContentPane>
        </ContentSection>
        <ContentSection>
            <ContentPane half center-vertically text>
                <Title>
                    Plotly for R & Shiny Workshops
                </Title>
                <Body>
                <p>
                    Send your team to a <a href="https://plotcon.plot.ly/" target="_blank">PLOTCON workshop</a> to level up their skills in R visualization and Shiny app development. Workshops are, held twice per year in NYC and the West Coast. We can also hold custom workshops on-site at your company.
                </p>
                </Body>
            </ContentPane>
            <ContentPane half graphic>
                <Graphic
                    image="https://plot.ly/static/enterprise/img/alternatives/highcharts/share.a9caa353cef7.jpg"/>
            </ContentPane>
        </ContentSection>
        <ContentSection className="request-callback-section">

            <ContentPane full center center-vertically text>
                <div className="pre-title">
                   Conntect with us
                </div>
                <Title>
                    Learn how we can work together
                    <div className="buttons center gutter-top">
                        <div className="button button-primary">
                            <div className="button-wrapper">
                                <div className="button-label">
                                    Request a Callback
                                </div>
                            </div>
                        </div>
                    </div>
                </Title>
                <Body>
                <p>
                    A Plotly sales engineer will answer any questions, walk you through a demo, and support a trial deployment.
                </p>
                </Body>
            </ContentPane>
        </ContentSection>


    </div>
)