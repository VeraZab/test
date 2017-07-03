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
                value: 'Unlimited Dash Applications'
            },
            {
                value: 'Unlimited Dash App Viewers'
            },
            {
                value: 'Automatic Git Based Deployments of Dash Apps'
            },
            {
                value: "Shareable “Snapshot Views” of Dash Apps"
            }
        ],

    }
];


const actions = [
    {
        label: 'Request a Demo',
        link: 'https://plotly.typeform.com/to/seG7Vb',
        button: {
            classes: 'button button-primary'
        },
        target: '_blank'
    }
];

const meta = {
    title: 'Plotly On-Premise and Dash Pricing',
    description: 'Plotly On Premise provides the best of both worlds: web based collaboration and sharing capabilities with data and visualizations that never leave your corporate environment.',
    url: 'https://plot.ly/products/on-premise/',
    twitter: {
        label1: 'On-Premise',
        data1: '$9,950 per year, 5 user license',
        label2: 'On-Premise + Dash',
        data2: '$15,950 per year, 5 user license'
    }
};

export default class OnPrem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        (function () {
            let qs, js, q, s, d = document, gi = d.getElementById, ce = d.createElement,
                gt = d.getElementsByTagName, id = "typef_orm_share",
                b = "https://embed.typeform.com/";
            if (!gi.call(d, id)) {
                js = ce.call(d, "script");
                js.id = id;
                js.src = b + "embed.js";
                q = gt.call(d, "script")[0];
                q.parentNode.insertBefore(js, q)
            }
        })();
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
            <Layout meta={meta}>
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                <div className="on-prem-pricing">
                    <Hero />
                </div>
                <ContentSection className="onprem-pricing">
                    <ContentPane full center center-vertically text>
                        <Body>
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
                                            <div className="details">per year, <strong>
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
                                            <div className="details">per year, <strong>
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
                <ContentSection>
                    <ContentPane half center-vertically text>
                        <div className="pre-title">
                            Support Open-Source
                        </div>
                        <Title>
                            Built on the Shoulders of Giants
                        </Title>
                        <Body>
                        <p>
                            Plotly On-Premise is built on a foundation of open-source libraries that are constantly
                            improving. To name a few:
                        </p>

                        <ul className="body-list blue">
                            <li><a href="https://github.com/d3" target="_blank">D3.js</a> ⟶ SVG graphics</li>
                            <li><a href="https://github.com/sheetjs" target="_blank">SheetJS</a> ⟶ Excel file parsing
                            </li>
                            <li><a href="https://github.com/handsontable" target="_blank">Handsontable</a> ⟶ Online
                                spreadsheet editor
                            </li>
                            <li><a href="https://facebook.github.io/react/" target="_blank">React</a> ⟶ Facebook's
                                library for UI building
                            </li>
                            <li><a href="https://github.com/plotly/plotly.js" target="_blank">Plotly.js</a> ⟶
                                Performance charting library
                            </li>
                        </ul>

                        <a href="https://moderndata.plot.ly/all-oss-used-in-plotly-cloud-and-plotly-on-premise/"
                           className="center" target="_blank">See all OSS libraries and licenses</a>

                        </Body>
                    </ContentPane>
                    <ContentPane half graphic center-vertically>

                        <Graphic link="https://moderndata.plot.ly/all-oss-used-in-plotly-cloud-and-plotly-on-premise/"
                                 image="https://plot.ly/static/enterprise/img/alternatives/videos/3d.c876ca23cc00.jpg"/>
                    </ContentPane>
                </ContentSection>
            </Layout>
        )
    }
}