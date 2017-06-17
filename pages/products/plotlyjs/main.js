import {
    ContentSection,
    ContentPane,
    Title,
    Subtitle,
    Body,
    Graphic
} from '../../../components/content-section/content-section';
import Pricing from './pricing';

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
                <Graphic image="https://marketing.plot.ly/static/marketing/assets/images/homepage/customer-stories/c12.png" />
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
                    Share with Plotly’s online community
                </Title>
                <Body>
                <p>
                    Plotly.js charts can be easily published, saved, and shared on Plotly’s cloud for
                    free. <a href="https://plot.ly/~mutecamel/11/a-a-a-a-b-b-b-b-c-c-c-c-d-d-d-d/" target="_blank">Save
                    your Plotly.js chart creations</a> with simple URL chart links, <a
                    href="http://help.plot.ly/json-chart-schema/" target="_blank">translate your charts to
                    different languages</a>, and get stars and feedback from the Plotly community.

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