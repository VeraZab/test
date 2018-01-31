import Layout from 'components/global/layout';
import Hero from './hero';
import {
  ContentSection,
  ContentPane,
  Title,
  Subtitle,
  Body,
  Graphic,
} from 'components/content-section';
import Buttons from 'components/buttons';
import styles from '../cloud/pricing.styles.scss';
import styled, { css } from 'styled-components';
import shortid from 'shortid';

const SwitchContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 120px;
`;

const HeadingContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 40px;
`;

const Switch = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 48px;
  width: 360px;
  height: 48px;
  background: white;
  border: 1px solid #dce4ed;
  box-shadow: rgba(80, 103, 132, 0.2) 0 2px 8px 0;
`;

const hoverSyles = css`
  &:hover {
    cursor: pointer;
    color: rgba(81, 103, 131, 1);
    font-weight: 400;

    span {
      &::before {
        transform: none;
      }
    }
  }
`;

const SwitchItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 50%;
  cursor: default;
  background-color: ${props => (props.active ? 'transparent' : 'transparent')};
  color: ${props => (props.active ? '#ffffff' : 'rgba(81, 103, 131, 0.75)')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  text-shadow: ${props =>
    props.active ? '0 1px 2px rgba(42, 63, 95, 0.5)' : 'none'};
  ${props => (props.active ? null : hoverSyles)};

  user-select: none;
  transition: 0.1s all ease-in-out;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 120%;
    height: 100%;
    opacity: ${props => (props.active ? '1' : '0')};
    background-color: #00cc96;
    top: 0;
    left: ${props => (props.second ? 'auto' : '-20%')};
    right: ${props => (props.second ? '-20%' : 'auto')};
    transform-origin: center center;
    will-change: transform;
    transition: 0.2s transform ease-in-out;
    transform: ${props =>
      props.active
        ? props.second ? 'skewX(-30deg)' : 'skewX(30deg)'
        : props.second ? 'skewX(30deg)' : 'skewX(-30deg)'};
  }

  span {
    display: inline-block;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 2px;
      border-radius: 4px;
      background-color: #00cc96;
      top: 100%;
      transform-origin: center center;
      transform: scaleX(0);
      transition: 0.1s all ease-in-out;
    }
  }
`;

const H1 = styled.h1`
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 40px;
  will-change: opacity, transform;
`;

const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 18px;
  line-height: 36px;
  max-width: 460px;
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
  color: rgba(81, 103, 131, 1);
  font-weight: 300;
  will-change: opacity, transform;
`;

const onPremData = [
  {
    features: [
      {
        value:
          'Includes everything in the <strong>Professional Plotly Plan</strong>',
      },
      {
        value: 'Email and Phone Support',
      },
      {
        value: 'Unlimited Charts, Dashboards and Slide Decks',
      },
      {
        value: 'Unlimited Viewers',
      },
      {
        value: 'LDAP Integration',
      },
      {
        value: 'Plotly On Line API Support',
      },
      {
        value: 'Behind your firewall Security',
      },
    ],
  },
];

const onPremDashata = [
  {
    features: [
      {
        value:
          'Includes everything in the <strong>On-Premises Plan</strong> + support for <a href="https://plot.ly/dash/pricing/">Dash Apps</a>',
      },
      {
        value: 'Email and Phone Support',
      },
      {
        value:
          'Unlimited <a href="https://plot.ly/dash/pricing/">Dash Applications</a>',
      },
      {
        value:
          'Unlimited <a href="https://plot.ly/dash/pricing/">Dash App</a> Viewers',
      },
      {
        value:
          '<a href="https://plot.ly/dash/pricing/">Automatic Git Based Deployments</a> of Dash Apps',
      },
      {
        value:
          '<a href="https://plot.ly/dash/pricing/">Learn More About Dash Deployment Server</a>',
      },
    ],
  },
];

const actions = [
  {
    label: 'Request a Demo',
    link: 'https://plotly.typeform.com/to/seG7Vb',
    button: {
      classes: 'button button-primary',
    },
    target: '_blank',
  },
];

const meta = {
  title: 'Plotly On-Premises and Dash Pricing',
  description:
    'Plotly On Premise provides the best of both worlds: web based collaboration and sharing capabilities with data and visualizations that never leave your corporate environment.',
  url: 'https://plot.ly/products/on-premise/',
  twitter: {
    label1: 'On-Premises',
    data1: '$9,960 per year, 5 user license',
    label2: 'On-Premises + Dash',
    data2: '$15,960 per year, 5 user license',
  },
};

export default class OnPrem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pricingMode: 'ON_CLOUD',
    };
  }

  togglePricingMode() {
    const { pricingMode } = this.state;
    if (pricingMode === 'ON_CLOUD') {
      this.setState({
        pricingMode: 'ON_SITE',
      });
    } else {
      this.setState({
        pricingMode: 'ON_CLOUD',
      });
    }
  }
  render() {
    const pricingCardFeatures = items => {
      const pricingCardFeature = items => {
        return items.map((item, i) => {
          return (
            <div className="pricing-cards-feature-lists-item-value " key={i}>
              <div
                dangerouslySetInnerHTML={{ __html: item.value }}
                className="hidden delay-med"
              />
            </div>
          );
        });
      };

      return items.map((item, i) => {
        return (
          <div className="pricing-cards-feature-lists-item" key={i}>
            <div className="pricing-cards-feature-lists-item-wrapper">
              {pricingCardFeature(item.features)}
            </div>
          </div>
        );
      });
    };

    return (
      <Layout meta={meta}>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="on-prem-pricing">
          <Hero togglePricingMode={() => this.togglePricingMode()} />
        </div>
        <ContentSection className="onprem-pricing">
          <SwitchContainer>
            <Switch>
              <SwitchItem
                active={this.state.pricingMode === 'ON_CLOUD'}
                onClick={
                  this.state.pricingMode !== 'ON_CLOUD'
                    ? () => this.togglePricingMode()
                    : null
                }
              >
                <span>Private Cloud</span>
              </SwitchItem>
              <SwitchItem
                second
                active={this.state.pricingMode === 'ON_SITE'}
                onClick={
                  this.state.pricingMode !== 'ON_SITE'
                    ? () => this.togglePricingMode()
                    : null
                }
              >
                <span>On-Site</span>
              </SwitchItem>
            </Switch>
            <HeadingContainer>
              <H1
                key={shortid.generate()}
                className="animate--fade-in-from-top"
              >
                {this.state.pricingMode === 'ON_CLOUD'
                  ? `Private Cloud`
                  : `On-Site Installation`}
              </H1>
              <H2
                key={shortid.generate()}
                className="animate--fade-in-from-bottom"
              >
                {this.state.pricingMode === 'ON_CLOUD'
                  ? `Automatically installed and maintained. Login to a dedicated,
              private cloud server with your work email.`
                  : `Installed and maintained by your IT staff on your company's server.`}
              </H2>
            </HeadingContainer>
          </SwitchContainer>

          <ContentPane full center center-vertically text>
            <Body>
              <div className="on-prem-pricing-cards">
                <div className="pricing-card-single full-width">
                  <div className="pricing-cards-headers-item">
                    <div className="pricing-cards-headers-item-text hidden hidden-fade">
                      On-Premises
                    </div>
                  </div>
                  <div className="pricing-cards-bodies-item">
                    <div className="pricing-cards-bodies-item-wrapper hidden hidden-fade">
                      <div className="pricing-cards-bodies-item-content">
                        <div className="price">
                          <div
                            className="price-text animate--fade-in-from-top"
                            key={shortid.generate()}
                          >
                            <span className="usd">$</span>
                            {this.state.pricingMode === 'ON_CLOUD'
                              ? `9,960`
                              : `14,940`}
                          </div>
                        </div>
                        <div className="details">
                          per year, <strong>5 Developer License </strong>
                        </div>
                      </div>
                      <Buttons
                        items={actions}
                        className="pricing-cards-bodies-item-actions"
                      />
                    </div>
                  </div>
                  <div className="pricing-cards-feature-lists">
                    <div className="pricing-cards-feature-lists-wrapper">
                      {pricingCardFeatures(onPremData)}
                    </div>
                  </div>
                </div>

                <div className="pricing-card-single full-width">
                  <div className="pricing-cards-headers-item">
                    <div className="pricing-cards-headers-item-text hidden hidden-fade">
                      On-Premises + Dash
                    </div>
                  </div>
                  <div className="pricing-cards-bodies-item">
                    <div className="pricing-cards-bodies-item-wrapper hidden hidden-fade">
                      <div className="pricing-cards-bodies-item-content">
                        <div className="price">
                          <div
                            className="price-text animate--fade-in-from-top"
                            key={shortid.generate()}
                          >
                            <span className="usd">$</span>
                            {this.state.pricingMode === 'ON_CLOUD'
                              ? `15,960`
                              : `24,960`}
                          </div>
                        </div>
                        <div className="details">
                          per year, <strong>5 Developer License </strong>
                        </div>
                      </div>
                      <Buttons
                        items={actions}
                        className="pricing-cards-bodies-item-actions"
                      />
                    </div>
                  </div>
                  <div className="pricing-cards-feature-lists">
                    <div className="pricing-cards-feature-lists-wrapper">
                      {pricingCardFeatures(onPremDashata)}
                    </div>
                  </div>
                </div>
              </div>
            </Body>
          </ContentPane>
        </ContentSection>
        <ContentSection className="architecture-section">
          <ContentPane full center center-vertically text>
            <div className="pre-title">Plotly On-Premises</div>
            <Title>Our On-Premises Architecture</Title>
            <Body>
              <div className="image-with-complex-text-overlay architecture">
                <div className="image-with-complex-text-overlay-wrapper">
                  <div className="image">
                    <img
                      src="https://images-plotly.imgix.net/static/marketing/product/on-premises/architecture.png?auto=compress&auto=format"
                      alt=""
                    />
                  </div>
                  <div className="text-overlay">
                    <div className="text-item text-item--left-top">
                      <div className="text-item-wrapper">
                        <div className="text-item-lines" />
                        <p>
                          Plotly On-Premises ships as an easy-to-install Docker
                          container.
                        </p>
                      </div>
                    </div>
                    <div className="text-item text-item--left-second">
                      <div className="text-item-wrapper">
                        <div className="text-item-lines" />

                        <p>
                          Your app with plotly.js charts can easily export
                          charts and data to a white-labeled Plotly On-Premises
                          for advanced editing, analytics and image export.
                        </p>
                      </div>
                    </div>
                    <div className="text-item text-item--right-top">
                      <div className="text-item-wrapper">
                        <div className="text-item-lines" />
                        <p>
                          Plotly’s chart editor and chart hosting service runs
                          on a Django webserver.
                        </p>
                      </div>
                    </div>
                    <div className="text-item text-item--right-bottom">
                      <div className="text-item-wrapper">
                        <div className="text-item-lines" />
                        <p>
                          <div className="pre-title">Optional</div>
                          <p>External databases</p>
                        </p>
                      </div>
                    </div>
                    <div className="text-item text-item--center-bottom">
                      <div className="text-item-wrapper">
                        <div className="text-item-lines" />
                        <p>
                          <div className="pre-title">Optional</div>
                          <p>
                            {' '}
                            Dash apps can be hosted and run on Plotly
                            On-Premises.
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="image">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </Body>
          </ContentPane>
        </ContentSection>
        <ContentSection className="plotlyjs-section">
          <ContentPane full center center-vertically text>
            <div className="pre-title">Plotly On-Premises</div>
            <Title>
              Link Plotly.js charts in your application to Plotly On-Premise
            </Title>
            <Body>
              <div className="image-with-complex-text-overlay plotlyjs">
                <div className="image-with-complex-text-overlay-wrapper">
                  <div className="text-overlay">
                    <div className="text-item text-item--right-top">
                      <div className="text-item-wrapper">
                        <div className="text-item-lines" />
                        <div className="text-item-lines-bottom" />

                        <div className="pre-title">
                          Users can 1-click import those charts into a
                          white-labeled chart editor for advanced editing,
                          analytics, and PDF export.
                        </div>
                        <div>
                          <p>
                            Built on React/Redux, Plotly’s chart editor is fully
                            customizable and has been continuously improved over
                            4&nbsp;years.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-item text-item--left-top">
                      <div className="text-item-wrapper">
                        <div className="text-item-lines" />
                        <div className="text-item-lines-bottom" />
                        <div className="pre-title">
                          Embed Plotly.js charts inside your application.
                        </div>
                        <div>
                          <p>
                            Plotly.js is an enterprise-ready, open-source
                            replacement for D3, Highcharts, or echarts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Body>
          </ContentPane>
        </ContentSection>

        <ContentSection>
          <ContentPane half center-vertically text>
            <div className="pre-title">Support Open-Source</div>
            <Title>Built on the Shoulders of Giants</Title>
            <Body>
              <p>
                Plotly On-Premises is built on a foundation of open-source
                libraries that are constantly improving. To name a few:
              </p>

              <ul className="body-list blue">
                <li>
                  <a href="https://github.com/d3" target="_blank">
                    D3.js
                  </a>{' '}
                  ⟶ SVG graphics
                </li>
                <li>
                  <a href="https://github.com/sheetjs" target="_blank">
                    SheetJS
                  </a>{' '}
                  ⟶ Excel file parsing
                </li>
                <li>
                  <a href="https://github.com/handsontable" target="_blank">
                    Handsontable
                  </a>{' '}
                  ⟶ Online spreadsheet editor
                </li>
                <li>
                  <a href="https://facebook.github.io/react/" target="_blank">
                    React
                  </a>{' '}
                  ⟶ Facebook's library for UI building
                </li>
                <li>
                  <a href="https://github.com/plotly/plotly.js" target="_blank">
                    Plotly.js
                  </a>{' '}
                  ⟶ Performance charting library
                </li>
              </ul>

              <a
                href="https://moderndata.plot.ly/all-oss-used-in-plotly-cloud-and-plotly-on-premise/"
                className="center"
                target="_blank"
              >
                See all OSS libraries and licenses
              </a>
            </Body>
          </ContentPane>
          <ContentPane half graphic center-vertically>
            <Graphic
              link="https://moderndata.plot.ly/all-oss-used-in-plotly-cloud-and-plotly-on-premise/"
              image="https://plot.ly/static/enterprise/img/alternatives/videos/3d.c876ca23cc00.jpg"
            />
          </ContentPane>
        </ContentSection>
      </Layout>
    );
  }
}
