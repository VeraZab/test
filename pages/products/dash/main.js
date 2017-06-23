import {
    ContentSection,
    ContentPane,
    Title,
    Subtitle,
    Body,
    Graphic
} from '../../../components/content-section/content-section';
import Buttons from '../../../components/buttons/buttons';

import CodeExplorer from './code-explorer/code-explorer';


const bg = {
    backgroundImage: "linear-gradient(27deg, #1E427D 0%, #1D9CFC 100%)"
};

const demoAppStock = [
    {
        label: 'Live Demo →',
        subtitle: null,
        title: 'EXAMPLE APP #1 -- Stock Tickers',
        icon: null,
        target: '_blank',
        link: 'https://plot.ly/dash/gallery/stock-tickers/',
        button: {
            classes: 'button button-primary'
        }
    }
];

const demoAppDrugs =  [
    {
        label: 'Live Demo →',
        subtitle: null,
        title: 'EXAMPLE APP #2 -- Drug Discovery',
        icon: null,
        target: '_blank',
        link: 'https://plot.ly/dash/gallery/drug-explorer/',
        button: {
            classes: 'button button-primary'
        }
    }
];
const demoAppGold = [
    {
        label: 'Live Demo →',
        subtitle: null,
        title: 'EXAMPLE APP #3 -- Goldman Sachs Interactive Report',
        icon: null,
        target: '_blank',
        link: 'https://plot.ly/dash/gallery/goldman-sachs-report/',
        button: {
            classes: 'button button-primary'
        }
    }
];

const demoAppUber = [
    {
        label: 'Live Demo →',
        subtitle: null,
        title: 'EXAMPLE APP #4 -- NYC Uber Rides',
        icon: null,
        target: '_blank',
        link: 'https://plot.ly/dash/gallery/uber-rides/',
        button: {
            classes: 'button button-primary'
        }
    }
];



const ExampleCodeBlock = `import dash
from dash.dependencies import Input, Output
import dash_core_components as dcc
import dash_html_components as html
from pandas_datareader import data as web
from datetime import datetime as dt

app = dash.Dash()

app.layout = html.Div([
    html.H1('Stock Tickers'),
    dcc.Dropdown(
        id='my-dropdown',
        options=[
            {'label': 'Coke', 'value': 'COKE'},
            {'label': 'Tesla', 'value': 'TSLA'},
            {'label': 'Apple', 'value': 'AAPL'}
        ],
        value='COKE'
    ),
    dcc.Graph(id='my-graph')
])

@app.callback(Output('my-graph', 'figure'), [Input('my-dropdown', 'value')])
def update_graph(selected_dropdown_value):
    df = web.DataReader(
        selected_dropdown_value, data_source='google',
        start=dt(2017, 1, 1), end=dt.now())
    return {
        'data': [{
            'x': df.index,
            'y': df.Close
        }]
    }

if __name__ == '__main__':
    app.run_server()`;

export default () => (
    <div className="dash-content">

        <ContentSection className="dash-section-productive">
            <ContentPane full center-vertically center text>
                <Title>
                    Dash is productive
                </Title>
                <Body>
                <p>
                    Before dash, apps like these would require an entire team of engineers and designers to create.
                </p>
                <CodeExplorer></CodeExplorer>
                </Body>
            </ContentPane>
        </ContentSection>
        <ContentSection className="dash-section-features-thirds">
            <ContentPane thirds center-vertically>
                <div className="icon">
                    <img src="https://now.plot.ly/static/images/dash/lightweight-icon.png" alt="Dash is Lightweight"/>
                </div>
                <div className="title">
                    Lightweight
                </div>
                <p>
                    Dash apps require very little boilerplate to get started:
                    An app like this weighs in at just 40 lines of pure Python.
                </p>
            </ContentPane>
            <ContentPane thirds center-vertically>
                <div className="icon">
                    <img src="https://now.plot.ly/static/images/dash/direct-control-icon.png" alt="Dash provides direct control"/>
                </div>
                <div className="title">
                    Direct Control
                </div>
                <p>
                    Dash provides a simple interface for tying UI controls,
                    like sliders, dropdowns, and graphs, with
                    your Python data analysis code.
                </p>
            </ContentPane>
            <ContentPane thirds center-vertically>
                <div className="icon">
                    <img src="https://now.plot.ly/static/images/dash/composable-icon.png" alt="Dash is Composable and Modular"/>
                </div>
                <div className="title">
                    Completely Customizable
                </div>
                <p>
                    Every aesthetic element of a Dash app is customizable.
                    Dash apps are built and published in the Web, so the full
                    power of CSS is available.
                </p>
            </ContentPane>
        </ContentSection>
        <ContentSection className="dash-section-dash-apps">
            <ContentPane full center center-vertically text>
                <Title>
                    Applications built with Dash
                </Title>
                <Body>
                <p>
                    Explore data, tweak your models, monitor your experiments,
                    or roll your own business intelligence platform.
                    Dash is the frontend to your analytical Python backend.
                </p>
                </Body>
            </ContentPane>
        </ContentSection>


        <ContentSection>
            <ContentPane half center-vertically text>
                <div className="pre-title">
                    Example App #1
                </div>
                <Title>
                    Stock Tickers
                </Title>
                <Body>
                <p>
                    Built in just under 100 lines of code, this app queries
                    remote financial data from Google Finance and
                    renders interactive candlestick charts.
                    Pandas is used to compute upper and lower bollinger bands.
                </p>

                <Buttons className="gutter-top" items={demoAppStock}/>

                </Body>
            </ContentPane>
            <ContentPane half graphic center-vertically>

                    <Graphic link={demoAppStock[0].link}
                        image="https://now.plot.ly/static/images/dash/stock-tickers.png"/>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half graphic center-vertically>

                <Graphic link={demoAppDrugs[0].link}
                    image="https://now.plot.ly/static/images/dash/drug-discovery.gif"/>
            </ContentPane>
            <ContentPane half center-vertically text>
                <div className="pre-title">
                    Example App #2
                </div>
                <Title>
                    Drug Discovery
                </Title>
                <Body>
                <p>
                    Explore chemical properties with this drug discovery app.
                    As you hover over points, rich meta information about
                    the drug is displayed in real-time.
                    Buttons above the chart allow you to switch between
                    visualizations.
                </p>
                <p>
                    Dash enables you to build apps that are tailor-made to your
                    datasets and exploratory process.
                </p>
                <Buttons className="gutter-top" items={demoAppDrugs}/>
                </Body>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half center-vertically text>
                <div className="pre-title">
                    Example App #3
                </div>
                <Title>
                    Goldman Sachs Interactive Report
                </Title>
                <Body>
                <p>
                    This Dash App is branded just like a Goldman Sachs report
                    through the use of custom CSS. It includes a
                    "Print to PDF" button and is formatted to great on the web
                    and in PDF form. On the web version, the charts are
                    interactive.
                </p>
                <p>
                    With Dash, you can automate reports from Python and use
                    the same platform for the web and for print.
                </p>
                <Buttons className="gutter-top" items={demoAppGold}/>
                </Body>
            </ContentPane>
            <ContentPane half graphic center-vertically>

                <Graphic link={demoAppGold[0].link}
                    image="https://now.plot.ly/static/images/dash/goldman-sachs.png"/>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half graphic center-vertically>

                <Graphic
                    link={demoAppUber[0].link}
                    image="https://now.plot.ly/static/images/dash/uber-example.png"/>

            </ContentPane>
            <ContentPane half center-vertically text>
                <div className="pre-title">
                    Example App #4
                </div>
                <Title>
                    NYC Uber Rides
                </Title>
                <Body>
                <p>
                    This Dash App displays the departure of all Uber rides
                    in 2014. A histogram below map displays the popularity of
                    rides and selecting different hours filters data in the map.
                </p>
                <p>
                    Dash apps are powered by Plotly.js, a fully featured
                    charting library including maps like these, financial
                    charts, scientific graphs, and more.
                </p>
                <Buttons className="gutter-top" items={demoAppUber}/>
                </Body>
            </ContentPane>
        </ContentSection>

        <ContentSection className="dash-section-open-source">
            <ContentPane full center-vertically center text>
                <Title>
                    Open Source with Enterprise Addons
                </Title>
                <Body>
                <p>
                    We’re strong believers that the future of technical computing and business intelligence is open
                    source. Dash is MIT licensed. Run Dash on your desktop environment for free.
                </p>
                <p>
                    Using Dash inside your enterprise?
                    Plotly offers Dash On-Premise for 1-click app deployment and
                    App permissioning with LDAP and Active Directory,
                    all behind your corporate firewall.&nbsp;
                    <a href="https://plotly.typeform.com/to/seG7Vb" className="special-link"><span className="special-link-label">
                        Request a Demo →
                    </span></a>
                </p>
                </Body>
            </ContentPane>
        </ContentSection>


        <ContentSection className="dash-section-more-details">
            <ContentPane full center-vertically center text>
                <Body>
                <div className="cards stories">
                    <div className="card card-with-image">
                        <div className="card-wrapper">
                            <div className="card-image"
                                 style={{backgroundImage: 'url("/static/images/dash/dash-enterprise-sharing.png")'}}>
                                <div className="card-image-label">
                                    Dash On-Premise Deployment
                                </div>
                            </div>
                            <div className="card-body">
                                <p>
                                    Managing apps and servers inside your
                                    enterprise is usually a full time job.
                                    Our goal with Dash On-Premise is to make
                                    deploying and sharing a Dash app internally
                                    as easy and secure as possible.
                                    No dev-ops required.
                                </p>

                                <p>
                                    Dash On-Premise handles all of the hard
                                    parts about managing apps for you:
                                    deployingment, managing updates,
                                    error handling, URL routing, LDAP integration,
                                    and more.
                                    Deploy and share an app behind your
                                    firewall in minutes.
                                </p>
                            </div>
                            <div className="card-action">
                                <a className="card-action-link" href="#">Request a Demo →</a>
                            </div>
                        </div>
                    </div>
                    <div className="card card-with-image">
                        <div className="card-wrapper">
                            <div className="card-image"
                                 style={{backgroundImage: 'url("/static/images/dash/dash-enterprise-portal.png")'}}>
                                <div className="card-image-label">
                                    Dash On-Premise App Portal
                                </div>
                            </div>
                            <div className="card-body">
                                <p>
                                    Dash On-Premise ties into Plotly On-Premise,
                                    storing your
                                    analytical Dash applications
                                    with plotly graphs, datasets, SQL queries,
                                    and dashboards in one company-wide
                                    portal.
                                </p>
                            </div>
                            <div className="card-action">
                                <a className="card-action-link" href="#">Request a Demo →</a>
                            </div>
                        </div>
                    </div>
                </div>
                </Body>
            </ContentPane>
        </ContentSection>

    </div>
)
