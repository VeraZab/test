import Layout from '../../../components/global/layout/layout';
import Hero from './hero';
import {ContentSection, ContentPane, Title, Subtitle, Body, Graphic} from '../../../components/content-section/content-section';
import Buttons from '../../../components/buttons/buttons';

import styles from '../cloud/pricing.styles.scss';
const onPremData = [
    {
        features: [{
            value: 'Includes everything in the <strong>Professional Plan</strong>'
        },
            {
                value: 'Unlimited public files'
            },
            {
                value: 'Unlimited private files'
            },
            {
                value: 'Community Support'
            },
            {
                value: 'Online chart creation & sharing'
            },
            {
                value: "Developer support for using Plotly's API with MATLAB, R, and Python"
            },
            {
                value: 'Excel, CSV, and xml upload'
            },
            {
                value: 'APIs (Python, R, MATLAB, Julia)'
            },
            {
                value: 'ggplot2, matplotlib, MATLAB chart conversion'
            },
            {
                value: 'Add / remove team members'
            },
            {
                value: 'Vector export (pdf, svg, eps)'
            },
            {
                value: 'Save custom themes'
            },
            {
                value: 'Centralized billing'
            },
            {
                value: 'HDF5, SAS, SPSS, MSAccess, zip file upload'
            },
            {
                value: 'Searchable company graph feed'
            },
            {
                value: 'LDAP, SAML, & Active Directory'
            },
            {
                value: 'Behind-the-firewall security'
            },
            {
                value: 'Configure default chart colors and fonts'
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
                            Hosted behind your firewall or by Plotly on a private AWS cloud
                        </Title>
                        <Body>
                        <p>
                            Plotly On-Premise comes with everything in Plotly Cloud, but also allows LDAP integration,
                            white
                            labeling, hosting and publishing Dash apps, and behind the firewall security.
                        </p>
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
                                                <span className="usd">$</span>829
                                            </div>
                                        </div>
                                        <div class="details">per month, <strong>covers
                                            5 users</strong></div>
                                        <div class="billed-amount"><span class="usd">$</span>9,550
                                            billed yearly.
                                        </div>
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

                        </Body>
                    </ContentPane>
                </ContentSection>
            </Layout>
        )
    }
}