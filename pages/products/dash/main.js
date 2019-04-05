import {ContentSection, ContentPane, Title, Body, Graphic} from 'components/content-section';
import Buttons from 'components/buttons';
import CodeExplorer from './code-explorer/code-explorer';

const demoAppStock = [
  {
    label: 'Live Demo →',
    subtitle: null,
    title: 'EXAMPLE APP #1 -- Stock Tickers',
    icon: null,
    target: '_blank',
    link: 'https://dash-hello-world.herokuapp.com/',
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

import React from 'react';

class DashMain extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    (function() {
      let js,
        q,
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
                Before dash, apps like these would require an entire team of engineers and designers
                to create.
              </p>
              <CodeExplorer />
            </Body>
          </ContentPane>
        </ContentSection>
        <ContentSection className="dash-section-features-thirds">
          <ContentPane thirds center-vertically>
            <div className="icon">
              <img
                src="https://prismic-io.s3.amazonaws.com/plotly%2Fb63b0f5c-bbcd-4bfb-b179-42687f614c73_lightweight-icon.png"
                alt="Dash is Lightweight"
              />
            </div>
            <div className="title">Lightweight</div>
            <p>
              Dash apps require very little boilerplate to get started: An app like this weighs in
              at just 40 lines of pure Python.
            </p>
          </ContentPane>
          <ContentPane thirds center-vertically>
            <div className="icon">
              <img
                src="https://prismic-io.s3.amazonaws.com/plotly%2F6d6a5517-6543-4ee3-919c-4e76b8841ab0_direct-control-icon.png"
                alt="Dash provides direct control"
              />
            </div>
            <div className="title">Direct Control</div>
            <p>
              Dash provides a simple interface for tying UI controls, like sliders, dropdowns, and
              graphs, with your Python data analysis code.
            </p>
          </ContentPane>
          <ContentPane thirds center-vertically>
            <div className="icon">
              <img
                src="https://prismic-io.s3.amazonaws.com/plotly%2F54f901a6-dc95-48da-bb2d-184c41a1735f_composable-icon.png"
                alt="Dash is Composable and Modular"
              />
            </div>
            <div className="title">Completely Customizable</div>
            <p>
              Every aesthetic element of a Dash app is customizable. Dash apps are built and
              published in the Web, so the full power of CSS is available.
            </p>
          </ContentPane>
        </ContentSection>

        <ContentSection className="dash-section-dash-apps">
          <ContentPane full center center-vertically text>
            <Title>Applications built with Dash</Title>
            <Body>
              <p>
                Explore data, tweak your models, monitor your experiments, or roll your own business
                intelligence platform. Dash is the frontend to your analytical Python backend.
              </p>
            </Body>
          </ContentPane>
        </ContentSection>

        <ContentSection>
          <ContentPane half center-vertically text>
            <div className="pre-title">Example App #1</div>
            <Title>Stock Tickers</Title>
            <Body>
              <p>Built in just 60 lines of code, this app renders interactive financial charts.</p>

              <Buttons className="gutter-top" items={demoAppStock} />
            </Body>
          </ContentPane>
          <ContentPane half graphic center-vertically>
            <Graphic
              link={demoAppStock[0].link}
              image="https://prismic-io.s3.amazonaws.com/plotly%2F439318bc-cf96-4007-9558-c8a31a254298_stock-ticker.png"
            />
          </ContentPane>
        </ContentSection>

        <ContentSection>
          <ContentPane half graphic center-vertically>
            <Graphic
              link={demoAppDrugs[0].link}
              image="https://prismic-io.s3.amazonaws.com/plotly%2Fe5cbdc96-2ff0-493a-98a4-ddeba7a40b58_optimize-drug-discovery.gif"
            />
          </ContentPane>
          <ContentPane half center-vertically text>
            <div className="pre-title">Example App #2</div>
            <Title>Drug Discovery</Title>
            <Body>
              <p>
                Explore chemical properties with this drug discovery app. As you hover over points,
                rich meta information about the drug is displayed in real-time. Buttons above the
                chart allow you to switch between visualizations.
              </p>
              <p>
                Dash enables you to build apps that are tailor-made to your datasets and exploratory
                process.
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
                This Dash App displays oil production in western New York. Filters at the top of the
                app update the graphs below. Selecting or hovering over data in one plot will update
                the other plots ("crossfiltering").
              </p>
              <p>
                Dash apps are powered by Plotly.js, a fully featured charting library including maps
                like these, financial charts, scientific graphs, and more.
              </p>
              <Buttons className="gutter-top" items={demoAppOil} />
            </Body>
          </ContentPane>
          <ContentPane half graphic center-vertically>
            <Graphic
              link={demoAppOil[0].link}
              image="https://prismic-io.s3.amazonaws.com/plotly%2F6cf7c1c3-e3c0-4028-b579-901f8428e242_plotly_a47b2fa1-0928-46cd-8bd7-d54d2bbceb96_oil-and-gas.png"
            />
          </ContentPane>
        </ContentSection>

        <ContentSection className="dash-section-open-source">
          <ContentPane full center-vertically center text>
            <Title>Open Source with Enterprise Addons</Title>
            <Body>
              <p>
                We’re strong believers that the future of technical computing and business
                intelligence is open source. Dash is MIT licensed. Run Dash on your desktop
                environment for free.
              </p>
              <p>
                Using Dash inside your enterprise? Plotly offers the Dash Deployment Server for
                1-click app deployment and app permissioning with LDAP and Active Directory, all
                behind your corporate firewall.&nbsp;
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
                          'url("https://prismic-io.s3.amazonaws.com/plotly%2Fcaabb8af-85c7-4b2b-8e2e-cc2593c54294_dash-enterprise-sharing.jpeg")',
                      }}
                    >
                      <div className="card-image-label" style={{width: '100%'}}>
                        Dash Deployment Server
                      </div>
                    </div>
                    <div className="card-body">
                      <p>
                        Managing apps and servers inside your enterprise is usually a full time job.
                        Our goal with the Dash Deployment Server is to make deploying and sharing a
                        Dash app internally as easy and secure as possible. No dev-ops required.
                      </p>

                      <p>
                        The Dash Deployment Server handles all of the hard parts about managing apps
                        for you: deployment, managing updates, error handling, URL routing, LDAP
                        integration, and more. Deploy and share an app behind your firewall in
                        minutes.
                      </p>
                    </div>
                    <div className="card-action">
                      <a
                        className="typeform-share link card-action-link"
                        href="https://plotly.typeform.com/to/mOAiug"
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
                          'url("https://prismic-io.s3.amazonaws.com/plotly%2Fe5cae283-98ee-45f4-9640-db07adffd797_dash-enterprise-portal.jpeg")',
                      }}
                    >
                      <div className="card-image-label" style={{width: '100%'}}>
                        Dash Deployment Server
                        <br />
                        App Portal
                      </div>
                    </div>
                    <div className="card-body">
                      <p>
                        The Dash Deployment Server ties into Chart Studio Enterprise, storing your
                        analytical Dash applications with plotly graphs, datasets, SQL queries, and
                        dashboards in one company-wide portal.
                      </p>
                    </div>
                    <div className="card-action">
                      <a
                        className="typeform-share link card-action-link"
                        href="https://plotly.typeform.com/to/mOAiug"
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
