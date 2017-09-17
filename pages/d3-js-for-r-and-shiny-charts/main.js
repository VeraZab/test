import {
    ContentSection,
    ContentPane,
    Title,
    Subtitle,
    Body,
    Graphic
} from 'components/content-section';

export default () => (
    <div>
        <ContentSection >

            <ContentPane half center-vertically text>
                <div className="pre-title">
                   Plotly for R and Shiny
                </div>
                <Title>
                    Features and Benefits
                </Title>
                <Body>
                <ul className="hero-list">
                    <li>Every chart that lattice or ggplot2 can do.</li>
                    <li>Interactive charts and maps out-of-the-box.</li>
                    <li>Get started working offline.</li>
                    <li>Optional hosted  sharing platform through <a href="/products/on-premise/" target="_blank">Plotly On-Premises</a> or <a href="/products/cloud/" target="_blank">Plotly Cloud</a>.</li>
                </ul>
                </Body>
            </ContentPane>
            <ContentPane half graphic>
                <Graphic image="https://images-plotly.imgix.net/static/marketing/chart_graphic.png?auto=compress&auto=format" />
            </ContentPane>
        </ContentSection>

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
                <p>
                    <a href="https://cpsievert.github.io/plotly_book/extending-ggplotly.html#extending-ggplotly" target="_blank">Learn More</a>
                </p>
                </Body>
            </ContentPane>
            <ContentPane half graphic>
                <Graphic
                    image="https://images-plotly.imgix.net/static/marketing/product/ggplot2.png?auto=compress&auto=format"/>
            </ContentPane>
        </ContentSection>


        <ContentSection>
            <ContentPane half graphic>
                <Graphic
                    image="https://images-plotly.imgix.net/static/marketing/product/world-class.png?auto=compress&auto=format"/>
            </ContentPane>
            <ContentPane half center-vertically text>
                <Title>
                    World-class charts, maps, and interactivity
                </Title>
                <Body>
                <p>
                    Make D3.js and WebGL charts with the ease, power, and open-source ecosystem of R. Plotly charts and dashboards can be easily styled in R, or uploaded to Plotly’s online editor for point-&-click styling and collaboration.
                </p>
                <p>
                    <a href="http://plot.ly/r" target="_blank">Learn More</a>
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
                    Featured R user: <a href="https://plot.ly/~riddhiman">@riddhiman</a>
                </p>
                </Body>
            </ContentPane>
            <ContentPane half graphic>
                <Graphic
                    image="https://images-plotly.imgix.net/static/marketing/product/map_styles.gif"/>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half graphic>
                <Graphic
                    image="https://images-plotly.imgix.net/plotly-marketing-pages/images/online-chart-maker/chart-maker-hero.png?auto=compress&auto=format"/>
            </ContentPane>
            <ContentPane half center-vertically text>
                <Title>
                    Collaborate with Tableau, Excel, and Python users
                </Title>
                <Body>
                <p>
                    With Plotly, there’s no need to choose between Python and R. R users can easily share Plotly charts to Python users (and vice versa) through Plotly Cloud, Plotly On-Premises, or entirely offline. Plotly charts are language agnostic and the best open-source choice for any language.
                </p>
                <p>
                    For code-free collaboration, Python charts and dashboards can also be shared with Tableau and Excel users through Plotly On-Premises and Plotly Cloud.
                </p>
                <p><a href="/products/cloud/">Plotly Cloud</a><br />
                    <a href="/products/on-premise/">Plotly On-Premises</a></p>
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
                    image="https://images-hoshi.nationalmachine.co/ineffable/uploads/95aa3dc80638bd314e7085f1f561e2d8/DSC02407.jpg?w=1800&h=1800&crop=fit&q=80"/>
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
                        <a className="button button-primary typeform-share" href="https://plotly.typeform.com/to/seG7Vb">
                            <div className="button-wrapper">
                                <div className="button-label">
                                    Request a Demo
                                </div>
                            </div>
                        </a>
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
