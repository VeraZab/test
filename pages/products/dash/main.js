import {
  ContentSection,
  ContentPane,
  Title,
  Subtitle,
  Body,
  Graphic,
} from 'components/content-section';
import Buttons from 'components/buttons';
import Button from 'components/button';
import CodeExplorer from './code-explorer/code-explorer';

const bg = {
  backgroundImage: 'linear-gradient(27deg, #1E427D 0%, #1D9CFC 100%)',
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
      classes: 'button button-primary',
    },
  },
];

const demoAppDrugs = [
  {
    label: 'Live Demo →',
    subtitle: null,
    title: 'EXAMPLE APP #2 -- Drug Discovery',
    icon: null,
    target: '_blank',
    link: 'https://plot.ly/dash/gallery/drug-explorer/',
    button: {
      classes: 'button button-primary',
    },
  },
];

const demoAppOil = [
  {
    label: 'Live Demo →',
    subtitle: null,
    title: 'EXAMPLE APP #3 -- Oil and Gas Dashboard',
    icon: null,
    target: '_blank',
    link: 'https://plot.ly/dash/gallery/new-york-oil-and-gas/',
    button: {
      classes: 'button button-primary',
    },
  },
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
const plotcon_button = {
  label: 'Buy a Ticket',
  title: 'PLOTCON WORKSHOPS 2018',
  icon: null,
  target: '_blank',
  link: 'https://plotcon.plot.ly/workshops',
  button: {
    classes: 'button button-primary',
  },
};

import React from 'react';

class DashMain extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    (function() {
      let qs,
        js,
        q,
        s,
        d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = 'typef_orm_share',
        b = 'https://embed.typeform.com/';
      if (!gi.call(d, id)) {
        js = ce.call(d, 'script');
        js.id = id;
        js.src = b + 'embed.js';
        q = gt.call(d, 'script')[0];
        q.parentNode.insertBefore(js, q);
      }
    })();
  }

  render() {
    return (
      <div className="dash-content">
        <ContentSection className="dash-section-productive">
          <ContentPane full center-vertically center text>
            <Title>Dash is productive</Title>
            <Body>
              <p>
                Before dash, apps like these would require an entire team of
                engineers and designers to create.
              </p>
              <CodeExplorer />
            </Body>
          </ContentPane>
        </ContentSection>
        <ContentSection className="dash-section-features-thirds">
          <ContentPane thirds center-vertically>
            <div className="icon">
              <img
                src="https://images-plotly.imgix.net/static/marketing/dash/lightweight-icon.png?auto=compress&auto=format"
                alt="Dash is Lightweight"
              />
            </div>
            <div className="title">Lightweight</div>
            <p>
              Dash apps require very little boilerplate to get started: An app
              like this weighs in at just 40 lines of pure Python.
            </p>
          </ContentPane>
          <ContentPane thirds center-vertically>
            <div className="icon">
              <img
                src="https://images-plotly.imgix.net/static/marketing/dash/direct-control-icon.png?auto=compress&auto=format"
                alt="Dash provides direct control"
              />
            </div>
            <div className="title">Direct Control</div>
            <p>
              Dash provides a simple interface for tying UI controls, like
              sliders, dropdowns, and graphs, with your Python data analysis
              code.
            </p>
          </ContentPane>
          <ContentPane thirds center-vertically>
            <div className="icon">
              <img
                src="https://images-plotly.imgix.net/static/marketing/dash/composable-icon.png?auto=compress&auto=format"
                alt="Dash is Composable and Modular"
              />
            </div>
            <div className="title">Completely Customizable</div>
            <p>
              Every aesthetic element of a Dash app is customizable. Dash apps
              are built and published in the Web, so the full power of CSS is
              available.
            </p>
          </ContentPane>
        </ContentSection>

        <ContentSection className="dash-section-dash-apps">
          <ContentPane full center center-vertically text>
            <Title>Applications built with Dash</Title>
            <Body>
              <p>
                Explore data, tweak your models, monitor your experiments, or
                roll your own business intelligence platform. Dash is the
                frontend to your analytical Python backend.
              </p>
            </Body>
          </ContentPane>
        </ContentSection>

        <ContentSection>
          <ContentPane half center-vertically text>
            <div className="pre-title">Example App #1</div>
            <Title>Stock Tickers</Title>
            <Body>
              <p>
                Built in just under 100 lines of code, this app queries remote
                financial data from Google Finance and renders interactive
                candlestick charts. Pandas is used to compute upper and lower
                bollinger bands.
              </p>

              <Buttons className="gutter-top" items={demoAppStock} />
            </Body>
          </ContentPane>
          <ContentPane half graphic center-vertically>
            <Graphic
              link={demoAppStock[0].link}
              image="https://images-plotly.imgix.net/static/marketing/dash/stock-tickers.png?auto=compress&auto=format"
            />
          </ContentPane>
        </ContentSection>

        <ContentSection>
          <ContentPane half graphic center-vertically>
            <Graphic
              link={demoAppDrugs[0].link}
              image="https://images-plotly.imgix.net/static/marketing/dash/drug-discovery.gif"
            />
          </ContentPane>
          <ContentPane half center-vertically text>
            <div className="pre-title">Example App #2</div>
            <Title>Drug Discovery</Title>
            <Body>
              <p>
                Explore chemical properties with this drug discovery app. As you
                hover over points, rich meta information about the drug is
                displayed in real-time. Buttons above the chart allow you to
                switch between visualizations.
              </p>
              <p>
                Dash enables you to build apps that are tailor-made to your
                datasets and exploratory process.
              </p>
              <Buttons className="gutter-top" items={demoAppDrugs} />
            </Body>
          </ContentPane>
        </ContentSection>

        <ContentSection>
          <ContentPane half center-vertically text>
            <div className="pre-title">Example App #3</div>
            <Title>Oil and Gas Dashboard</Title>
            <Body>
              <p>
                This Dash App displays oil production in western New York.
                Filters at the top of the app update the graphs below. Selecting
                or hovering over data in one plot will update the other plots
                ("crossfiltering").
              </p>
              <p>
                Dash apps are powered by Plotly.js, a fully featured charting
                library including maps like these, financial charts, scientific
                graphs, and more.
              </p>
              <Buttons className="gutter-top" items={demoAppOil} />
            </Body>
          </ContentPane>
          <ContentPane half graphic center-vertically>
            <Graphic
              link={demoAppOil[0].link}
              image="https://tamarack-prismic.imgix.net/plotly%2Fa47b2fa1-0928-46cd-8bd7-d54d2bbceb96_oil-and-gas.png?auto=compress&auto=format"
            />
          </ContentPane>
        </ContentSection>

        <ContentSection className="dash-section-open-source">
          <ContentPane full center-vertically center text>
            <Title>Open Source with Enterprise Addons</Title>
            <Body>
              <p>
                We’re strong believers that the future of technical computing
                and business intelligence is open source. Dash is MIT licensed.
                Run Dash on your desktop environment for free.
              </p>
              <p>
                Using Dash inside your enterprise? Plotly offers the Dash
                Deployment Server for 1-click app deployment and app permissioning
                with LDAP and Active Directory, all behind your corporate
                firewall.&nbsp;
              </p>
              <p>
                <a
                  className="link special-link"
                  href="https://plot.ly/dash/pricing/"
                  target="_blank"
                >
                  <span className="special-link-label">Learn More →</span>
                </a>
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
                    <div
                      className="card-image dark-fade"
                      style={{
                        backgroundImage:
                          'url("https://images-plotly.imgix.net/static/marketing/dash/dash-enterprise-sharing.png?auto=compress&auto=format")',
                      }}
                    >
                      <div
                        className="card-image-label"
                        style={{ width: '100%' }}
                      >
                        Dash Deployment Server
                      </div>
                    </div>
                    <div className="card-body">
                      <p>
                        Managing apps and servers inside your enterprise is
                        usually a full time job. Our goal with the Dash Deployment Server
                        is to make deploying and sharing a Dash app internally
                        as easy and secure as possible. No dev-ops required.
                      </p>

                      <p>
                        The Dash Deployment Server handles all of the hard parts about
                        managing apps for you: deployment, managing updates,
                        error handling, URL routing, LDAP integration, and more.
                        Deploy and share an app behind your firewall in minutes.
                      </p>
                    </div>
                    <div className="card-action">
                      <a
                        className="typeform-share link card-action-link"
                        href="https://plotly.typeform.com/to/seG7Vb"
                        data-mode="drawer_right"
                        data-hide-headers="true"
                        data-hide-footer="true"
                        data-submit-close-delay="2"
                        target="_blank"
                      >
                        Request a Demo →
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card card-with-image">
                  <div className="card-wrapper">
                    <div
                      className="card-image dark-fade"
                      style={{
                        backgroundImage:
                          'url("https://images-plotly.imgix.net/static/marketing/dash/dash-enterprise-portal.png?auto=compress&auto=format")',
                      }}
                    >
                      <div
                        className="card-image-label"
                        style={{ width: '100%' }}
                      >
                        Dash Deployment Server<br />App Portal
                      </div>
                    </div>
                    <div className="card-body">
                      <p>
                        The Dash Deployment Server ties into Plotly Enterprise, storing
                        your analytical Dash applications with plotly graphs,
                        datasets, SQL queries, and dashboards in one
                        company-wide portal.
                      </p>
                    </div>
                    <div className="card-action">
                      <a
                        className="typeform-share link card-action-link"
                        href="https://plotly.typeform.com/to/seG7Vb"
                        data-mode="drawer_right"
                        data-hide-headers="true"
                        data-hide-footer="true"
                        data-submit-close-delay="2"
                        target="_blank"
                      >
                        Request a Demo →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Body>
          </ContentPane>
        </ContentSection>
      </div>
    );
  }
}
export default DashMain;
