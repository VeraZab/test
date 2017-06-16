import Layout from '../../../components/global/layout/layout';
import Hero from './hero';
import {
    ContentSection,
    ContentPane,
    Title,
    Subtitle,
    Body,
    Graphic
} from '../../../components/content-section/content-section';
import Buttons from '../../../components/buttons/buttons';

import styles from '../cloud/pricing.styles.scss';
const onPremData = [
    {
        features: [{
            value: 'Includes everything in the <strong>Professional Plotly Plan</strong>'
        },
            {
                value: 'Email and Phone Support'
            },
            {
                value: 'Unlimited Charts, Dashboards and Slide Decks'
            },
            {
                value: 'Unlimited Viewers'
            },
            {
                value: 'LDAP Integration'
            },
            {
                value: "Plotly On Line API Support"
            },
            {
                value: 'Behind your firewall Security'
            }
        ],

    }
];

const onPremDashata = [
    {
        features: [{
            value: 'Includes everything in the <strong>On Premise Plan</strong>'
        },
            {
                value: 'Email and Phone Support'
            },
            {
                value: 'Unlimited Applications'
            },
            {
                value: 'Unlimited Viewers'
            },
            {
                value: 'Automatic Git based Deployment'
            },
            {
                value: "Snapshot Application Views"
            }
        ],

    }
];


const actions = [
    {
        label: 'Contact Sales',
        link: 'https://plotly.typeform.com/to/seG7Vb',
        button: {
            classes: 'button button-primary'
        },
        target: '_blank'
    }
];

export default class OnPrem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {

        let pricingCardFeatures = (items) => {
            let pricingCardFeature = (items) => {
                return (
                    items.map((item, i) => {
                        return (
                            <div className="pricing-cards-feature-lists-item-value " key={i}>
                                <div dangerouslySetInnerHTML={{__html: item.value}} className="hidden delay-med"></div>
                            </div>
                        )
                    })
                )
            };
            return (
                items.map((item, i) => {
                    return (
                        <div className="pricing-cards-feature-lists-item" key={i}>
                            <div className="pricing-cards-feature-lists-item-wrapper">
                                {pricingCardFeature(item.features)}
                            </div>
                        </div>
                    )
                })
            )
        };

        return (
            <Layout>
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                <Hero />
                <ContentSection>
                    <ContentPane full center center-vertically text>
                        <Title>
                            Safe and secure, behind your firewall
                        </Title>
                        <Body>
                        <p>
                            Plotly On Premise provides the best of both worlds: web based collaboration and sharing
                            capabilities with data and visualizations that never leave your corporate environment.
                        </p>
                        <div className="on-prem-pricing-cards">

                            <div className="pricing-card-single full-width">
                                <div className="pricing-cards-headers-item">
                                    <div className="pricing-cards-headers-item-text hidden hidden-fade">
                                        On Premise
                                    </div>
                                </div>
                                <div className="pricing-cards-bodies-item">
                                    <div className="pricing-cards-bodies-item-wrapper hidden hidden-fade">
                                        <div className="pricing-cards-bodies-item-content">
                                            <div className="price">
                                                <div className="price-text">
                                                    <span className="usd">$</span>9,950
                                                </div>
                                            </div>
                                            <div class="details">per year, <strong>
                                                5 User License </strong></div>
                                        </div>
                                        <Buttons items={actions}
                                                 className="pricing-cards-bodies-item-actions"/>
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
                                        On Premise + Dash
                                    </div>
                                </div>
                                <div className="pricing-cards-bodies-item">
                                    <div className="pricing-cards-bodies-item-wrapper hidden hidden-fade">
                                        <div className="pricing-cards-bodies-item-content">
                                            <div className="price">
                                                <div className="price-text">
                                                    <span className="usd">$</span>15,950
                                                </div>
                                            </div>
                                            <div class="details">per year, <strong>
                                                5 User License </strong></div>

                                        </div>
                                        <Buttons items={actions}
                                                 className="pricing-cards-bodies-item-actions"/>
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
            </Layout>
        )
    }
}