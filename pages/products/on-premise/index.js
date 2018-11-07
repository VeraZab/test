import Layout from 'components/global/layout';
import Hero from './hero';
import {
  ContentSection,
  ContentPane,
  Title,
  Body,
} from 'components/content-section';
import styles from '../cloud/pricing.styles.scss';
import {
  SwitchContainer,
  HeadingContainer,
  H1,
  H2,
} from 'components/styled/on-prem';
import shortid from 'shortid';
import SwitchComponent from 'components/switch';
import PricingCards from '../../../components/prismic/slices/pricing-cards';

const meta = {
  title: 'Chart Studio Enterprise and Dash Pricing',
  description:
    'Chart Studio Enterprise provides the best of both worlds: web based collaboration and sharing capabilities with data and visualizations that never leave your corporate environment.',
  url: 'https://plot.ly/products/on-premise/',
  twitter: {
    label1: 'Chart Studio Enterprise',
    data1: '$9,960 per year, 5 user license',
    label2: 'Chart Studio Enterprise + Dash Deployment Server',
    data2: '$15,960 per year, 5 user license',
  },
};

class OnPrem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pricingMode: 'Private Cloud',
    };
  }

  static getInitialProps() {
    return {
      loaded: true,
    };
  }

  togglePricingMode() {
    const { pricingMode } = this.state;
    if (pricingMode === 'Private Cloud') {
      this.setState({
        pricingMode: 'On-Premises',
      });
    } else {
      this.setState({
        pricingMode: 'Private Cloud',
      });
    }
  }

  render() {
    const { pricing_cards } = this.props.content;

    const pricingData = pricing_cards.find(
      (card) => card.uid === 'on-premises',
    );
    const cards = pricingData.data.body.map((card) => ({
      ...card,
      primary: {
        ...card.primary,
        price:
          this.state.pricingMode === 'Private Cloud'
            ? card.primary.price
            : card.primary.toggle_state_second_price,
      },
    }));

    //toggle button url and text based on this.state.pricingMode
    if (this.state.pricingMode === 'Private Cloud'){
      cards[0].primary.button_one_link.url = "https://plotly.typeform.com/to/mOAiug";
      cards[0].primary.button_one_label = "START A TRIAL";
      cards[1].primary.button_one_link.url = "https://plotly.typeform.com/to/mOAiug";
      cards[1].primary.button_one_label = "START A TRIAL";
    }

    if (this.state.pricingMode === 'On-Premises'){
      cards[0].primary.button_one_link.url = "https://plotly.typeform.com/to/seG7Vb";
      cards[0].primary.button_one_label = "REQUEST A DEMO";
      cards[1].primary.button_one_link.url = "https://plotly.typeform.com/to/rkO85m";
      cards[1].primary.button_one_label = "REQUEST A DEMO";
    }

    const pricingCardFeatures = (items) => {
      const pricingCardFeature = (items) => {
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

    const toggle_content = {
      tabs: [
        {
          label: 'Private Cloud',
          action:
            this.state.pricingMode !== 'Private Cloud'
              ? () => this.togglePricingMode()
              : null,
        },
        {
          label: 'On-Premises',
          action:
            this.state.pricingMode !== 'On-Premises'
              ? () => this.togglePricingMode()
              : null,
        },
      ],
    };

    return (
      <Layout meta={meta}>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="on-prem-pricing">
          <Hero togglePricingMode={() => this.togglePricingMode()} />
        </div>
        <ContentSection className="onprem-pricing">
          <SwitchContainer>
            <SwitchComponent
              active={this.state.pricingMode}
              data={toggle_content}
            />
            <HeadingContainer>
              <H1
                key={shortid.generate()}
                className="animate--fade-in-from-top"
              >
                {this.state.pricingMode === 'Private Cloud'
                  ? `Private Cloud`
                  : `On-Premises Installation`}
              </H1>
              <H2
                key={shortid.generate()}
                className="animate--fade-in-from-bottom"
              >
                {this.state.pricingMode === 'Private Cloud'
                  ? `Set up and managed by Plotly. The easiest way to set up your own Chart Studio Enterprise and Dash Deployment Server. Single sign-on through LDAP or AD is not possible with Private Cloud - see On-Premises if SSO is required.`
                  : `Installed and maintained by your IT staff on your company's server or AWS account.`}
              </H2>
            </HeadingContainer>
            <PricingCards cards={cards} />
          </SwitchContainer>
        </ContentSection>
        <ContentSection className="architecture-section">
          <ContentPane full center center-vertically text>
            <div className="pre-title">Chart Studio Enterprise</div>
            <Title>Our Enterprise Architecture</Title>
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
                          Chart Studio Enterprise ships as an easy-to-install Docker
                          container.
                        </p>
                      </div>
                    </div>
                    <div className="text-item text-item--left-second">
                      <div className="text-item-wrapper">
                        <div className="text-item-lines" />

                        <p>
                          Your app with plotly.js charts can easily export
                          charts and data to a white-labeled Chart Studio Enterprise
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
                          <p>External databases.</p>
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
                            Dash apps can be hosted and run on Dash Deployment Server.
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
      </Layout>
    );
  }
}

export default OnPrem;
