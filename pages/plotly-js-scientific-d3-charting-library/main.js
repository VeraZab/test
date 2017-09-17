import {
    ContentSection,
    ContentPane,
    Title,
    Subtitle,
    Body,
    Graphic
} from 'components/content-section';
import Pricing from './pricing';
import Button from "components/button";

const plotcon_button = {
    label: 'Learn More',
    title: 'PLOTCON NYC 2017',
    icon: null,
    target: '_blank',
    link: 'https://plotcon.plot.ly',
    button: {
        classes: 'button button-primary'
    }
}
export default () => (
    <div>
        <ContentSection className="plotlyjs-pricing">
            <ContentPane full center-vertically text center>
                <Body>
                <Pricing/>
                </Body>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half graphic>
                <Graphic
                    image="https://symposia.imgix.net/companies/7ec1c8/df095e/js-workshop.gif?auto=compress&auto=format"/>
            </ContentPane>
            <ContentPane half center-vertically text>
                <div className="pre-title">
                    PLOTCON NYC 2017
                </div>
                <Title>
                    Plotly.js Master Class
                </Title>
                <Body>
                <p>
                    Interested in getting instructed in Plotly.js from the people who made it? Alex and other Plotly.js
                    team members will walk you through Plotly.js basics and advanced usage.
                </p>
                <div className="buttons padding-top padding-bottom">
                    <Button item={plotcon_button} />
                </div>
                <p>
                    <h3 className="padding-top">Topics to be covered</h3>
                </p>
                <ul>
                    <li>WebGL for high-performance plotting</li>
                    <li>Plotly.js event handlers</li>
                    <li>Advanced hover text options</li>
                    <li>Performance tuning</li>
                    <li>Bring your own Plotly.js projects to get help and feedback from the Plotly.js creators.</li>
                </ul>
                </Body>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half graphic>
                <Graphic
                    image="https://marketing.plot.ly/static/marketing/assets/images/homepage/customer-stories/c12.png?auto=compress&auto=format"/>
            </ContentPane>
            <ContentPane half center-vertically text>
                <div className="pre-title">
                    Case Study
                </div>
                <Title>
                    How we reworked Highcharts for an oil & gas leader
                </Title>
                <Body>
                <p>
                    C12 Energy, a leader in carbon capture and sequestration, engaged Plotly for custom dashboards in
                    both its finance and engineering departments.
                </p>
                <blockquote className="">
                    Plotly is at the center of our business development platform, and serves as a starting point for
                    modeling and fitting tools. We can quickly comprehend and analyze huge amounts of data, and use the
                    results to make multi-million-dollar investment decisions.
                    <div className="quotee">
                        <div className="who">&mdash; Dr. Jenya Kirshtein</div>
                        <div className="title">
                            Scientific Software Engineer
                        </div>
                    </div>
                </blockquote>
                </Body>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half center-vertically text>
                <Title>
                    Plotly.js visual editor
                </Title>
                <Body>
                <p>
                    Use Plotly.js with <a href="/products/cloud/">Plotly Cloud</a> or <a href="/products/on-premise/">Plotly
                    On-Premises</a> for hosting, sharing, and visual editing of Plotly.js charts. Designers can create
                    charts in Plotly Cloud or Plotly On-Premises while programmers put them into production with
                    Plotly.js.
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
                        src="https://plot.ly/static/enterprise/img/alternatives/logo-d3js.ba761bd044ad.png?auto=compress&auto=format"
                        alt="d3"/></a>
                    <a href="http://stack.gl/"><img
                        src="https://plot.ly/static/enterprise/img/alternatives/logo-stackgl.a45db7e74096.gif"
                        alt="stackgl"/></a>
                </div>
            </ContentPane>
            <ContentPane half center-vertically text>
                <Title>
                    D3.js and Stack.gl: Stand on the shoulders of Giants
                </Title>
                <Body>
                <p>
                    Plotly.js’s SVG backend uses D3.js, the gold standard of SVG graphics for the Web. D3.js is
                    challenging to learn however and time-consuming for even JavaScript experts. With Plotly.js now even
                    a JavaScript beginner can create performance optimized, insanely complex D3.js charts in minutes.
                </p>
                </Body>
            </ContentPane>
        </ContentSection>

        <ContentSection className="request-callback-section">

            <ContentPane full center center-vertically text>
                <div className="pre-title">
                    Conntect with us
                </div>
                <Title>
                    Learn how we can work together
                    <div className="buttons center">
                        <a className="button button-primary typeform-share"
                           href="https://plotly.typeform.com/to/seG7Vb">
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
                    A Plotly sales engineer will answer any questions, walk you through a demo, and support a trial
                    deployment.
                </p>
                </Body>
            </ContentPane>
        </ContentSection>


    </div>
)