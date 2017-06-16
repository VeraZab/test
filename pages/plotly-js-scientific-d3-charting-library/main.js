import {ContentSection, ContentPane, Title, Subtitle, Body, Graphic} from '../../components/content-section/content-section';

export default () => (
    <div>
        <ContentSection>
            <ContentPane full center-vertically text center>
                <Title>
                    100% Free and Open-Source, Forever
                    <br />
                    <small>(MIT license)</small>
                </Title>
                <Body>
                <p>
                    Plotly.js is 100% Free and open-source. Licensed under the MIT open-source license, any company in
                    the world can download Plotly.js and use it for their products or internal tools without
                    restriction. Its all out there and free. <a
                    href="https://plot.ly/javascript/open-source-announcement/" target="_blank">Read about our
                    decision to go open-source.</a></p>

                </Body>
            </ContentPane>
        </ContentSection>


        <ContentSection>
            <ContentPane half graphic>
                <Graphic
                    video="https://plot.ly/static/enterprise/img/alternatives/videos/charts.64c819930e25.mp4"/>
            </ContentPane>
            <ContentPane half center-vertically text>
                <Title>
                    Statistical and engineering charts

                </Title>
                <Body>
                <p>
                    Histograms, error bars, box plots, and 3d surface plots. Plotly.js is the only JavaScript charting
                    library bringing science and engineering visualization to your browser.
                </p>
                </Body>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half center-vertically text>
                <Title>
                    Performance: Using WebGL for the Fastest Load Times with the Most Points
                </Title>
                <Body>
                <p>
                    Plotly.js WebGL charts with 1 million points load 1.6x faster than the same Highcharts
                    graph, even with the Highcharts “booster” library. We’ve optimized everything from min-max
                    decimation to <a href="https://github.com/plotly/fast-isnumeric" target="_blank">numerical type
                    checking</a>. The Plotly.js WebGL backend uses your computer’s graphics card to bypass CPU and
                    memory limitations in SVG or Canvas graphics backends.
                </p>
                </Body>
            </ContentPane>
            <ContentPane half graphic>
                <Graphic
                    image="https://plot.ly/static/enterprise/img/alternatives/highcharts/benchmark.236d4390a068.jpg"/>
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

        <ContentSection>
            <ContentPane full center center-vertically>
                <Title>
                    High-performance 3D
                </Title>
                <Body>
                <p>
                    Scientific-grade, 3D charts that even a JavaScript beginner can make. Plotly uses Stack.gl for
                    unparalleled interactive performance.
                </p>
                <div className="gutter-top">
                    <Graphic video="https://plot.ly/static/enterprise/img/alternatives/videos/3d.2de03f3a24c9.mp4"/>
                </div>
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


    </div>
)