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
                <Graphic
                         image="https://images.plot.ly/static/marketing/chart_graphic.png"/>
            </ContentPane>
            <ContentPane half center-vertically text>
                <Title>
                    World-class charts, maps, and interactivity
                </Title>
                <Body>
                <p>
                    Make any chart possible in matplotlib, but interactive and with a clean, declarative API!
                </p>
                <p>
                    Plotly lets you create D3.js and WebGL charts with the ease , power, and open-source ecosystem of
                    Python. Plotly charts and dashboards can be easily styled in Python, or uploaded to Plotly’s online
                    editor for point-&-click styling and collaboration.
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
                    Featured Python user: <a href="https://plot.ly/~empet" target="_blank">@empet</a>
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
                <Graphic
                    image="https://camo.githubusercontent.com/3e4bfa5441dec3dc16724744821efe95320c2517/687474703a2f2f692e696d6775722e636f6d2f3531426f4139302e676966"/>
            </ContentPane>
            <ContentPane half center-vertically text>
                <Title>
                    Python-Powered Dashboards
                </Title>
                <Body>
                <p>
                    Easily create and update <a href="/dashboards/">online dashboards</a> with the ease and power of
                    Python.
                </p>
                </Body>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half center-vertically text>
                <Title>
                    Live Streaming API
                </Title>
                <Body>
                <p>
                    Stream live data to hosted charts with Plotly’s streaming API for Python. Streaming is available for
                    <a href="/products/on-premise/">Plotly On-Premise</a>.
                </p>
                </Body>
            </ContentPane>
            <ContentPane half graphic>
                <Graphic
                    image="https://marketing.plot.ly/static/marketing/assets/images/database-connectors/database_connectors_animated.gif"/>
            </ContentPane>
        </ContentSection>


        <ContentSection>
            <ContentPane half graphic>
                <Graphic shadow="false"
                         image="https://images.plot.ly/static/marketing/dash/dash-hero-visual@2x.png"/>
            </ContentPane>
            <ContentPane half center-vertically text>
                <Title>
                    Dash: “R Shiny for Python”
                </Title>
                <Body>
                <p>
                    Love R Shiny but prefer not to work in R? Check out Dash for Python - an open-source Python
                    interface to create data exploration web apps. Applications with advanced UI, drilldowns, and
                    crossfilter have never been easier or more elegant in Python.
                </p>
                </Body>
            </ContentPane>
        </ContentSection>
        <ContentSection>
            <ContentPane half center-vertically text>
                <Title>
                    Dash and Python Workshops
                </Title>
                <Body>
                <p>
                    Send your team to a <a href="https://plotcon.plot.ly/" target="_blank">PLOTCON workshop</a> to level
                    up their skills in Python visualization and Dash app development. Workshops are held twice per year
                    in
                    NYC and the West Coast. We can also hold custom workshops on-site at your company.
                </p>
                </Body>
            </ContentPane>
            <ContentPane half graphic>
                <Graphic
                    image="https://images-hoshi.nationalmachine.co/ineffable/uploads/95aa3dc80638bd314e7085f1f561e2d8/DSC02407.jpg?w=1800&h=1800&crop=fit&q=80"/>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half graphic>
                <Graphic 
                         image="https://images.plot.ly/plotly-marketing-pages/images/online-chart-maker/chart-maker-hero.png"/>
            </ContentPane>
            <ContentPane half center-vertically text>
                <Title>
                    Collaborate with Tableau, Excel, and Python users
                </Title>
                <Body>
                <p>
                    With Plotly, there’s no need to choose between Python and R. R users can easily share Plotly charts
                    to Python users (and vice versa) through Plotly Cloud, Plotly On-Premise, or entirely offline.
                    Plotly charts are language agnostic and the best open-source choice for any language.
                </p>
                <p>
                    For code-free collaboration, Python charts and dashboards can also be shared with Tableau and Excel
                    users through Plotly On-Premise and Plotly Cloud.
                </p>
                </Body>
            </ContentPane>
        </ContentSection>
        <ContentSection>
            <ContentPane half center-vertically text>
                <Title>
                    First class support for nteract.io, Jupyter, and Dash
                </Title>
                <Body>
                <p>
                    Plotly for Python has first-class support for all of your favorite Python tools and IDEs - including
                    Dash, nteract.io,, and Jupyter notebook.
                </p>
                <p>
                    Upload your Jupyter notebooks to Plotly for secure, collaborative sharing of your Python code.
                </p>
                </Body>
            </ContentPane>
            <ContentPane half graphic>
                <Graphic shadow="false"
                         image="https://cloud.githubusercontent.com/assets/836375/18421299/d95ad398-783b-11e6-8b23-d54cf7caad1e.png"/>
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
                    A Plotly sales engineer will answer any questions, walk you through a demo, and support a trial
                    deployment.
                </p>
                </Body>
            </ContentPane>
        </ContentSection>


    </div>
)