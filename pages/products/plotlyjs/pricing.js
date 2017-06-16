import React from 'react';
import styles from '../cloud/pricing.styles.scss';
import Buttons from '../../../components/buttons/buttons';

const pricingLevels = [
    {
        label: "Team Support",
        price: {
            monthly: '19,500',
            annually: null,
            frequency: 'one-time purchase',
            users: 'per team'
        },
        actions: [
            {
                label: 'Purchase',
                link: 'https://plot.ly/accounts/login/?action=signup',
                button: {
                    classes: 'button button-primary'
                },
                target: '_blank'
            }
        ],
        features: [
            {
                value: 'Includes the following:'
            },
            {
                value: 'Hands-on assistance with all of our Plotly API wrappers and PlotlyJS'
            },
            {
                value: 'Email, chat, and phone support for one year'
            },
            {
                value: '2 hour response time (9-5 EST)'
            },
            {
                value: 'API support for online and offline use'
            }
        ]
    },
    {
        label: "Developer Support",
        message: '<a href="#">Student Discount Available</a>',
        price: {
            monthly: '499',
            annually: '396',
            frequency: 'one-time purchase',
            users: 'per developer'
        },
        actions: [
            {
                label: 'Sign Up',
                link: 'https://plot.ly/accounts/login/?action=signup',
                button: {
                    classes: 'button button-primary'
                },
                target: '_blank'
            }
        ],
        features: [
            {
                value: 'Includes the following'
            },
            {
                value: 'Hands-on assistance with all of our Plotly API wrappers and PlotlyJS'
            },
            {
                value: 'Email and chat support for one year'
            },
            {
                value: '24 hour response time (9-5 EST)'
            },
            {
                value: 'API support for online and offline use'
            }
        ]
    },
    {
        label: "Plotly.js Team workshops",
        message: 'Our most popular plan!',
        price: {
            monthly: '79',
            annually: '948',
            frequency: 'per month',
            users: 'per user'
        },
        actions: [
            {
                label: 'Sign Up',
                link: 'https://plot.ly/accounts/login/?action=signup',
                button: {
                    classes: 'button button-emerald'
                },
                target: '_blank'
            }
        ],
        features: [
            {
                value: 'Includes everything in the <strong>Personal Plan</strong>'
            },
            {
                value: '10,000 API calls per day'
            },
            {
                value: 'Connect to 18 data sources including SQL databases, MS Excel, and CSV files'
            }
            ,
            {
                value: 'Unlimited private and public files'
            }
            ,
            {
                value: 'SVG, EPS, HTML & PDF Export'
            }
            ,
            {
                value: 'Chat, email, and phone support for Plotly 2.0: the online <a href="https://plot.ly/online-chart-maker/">chart maker</a> and <a href="https://plot.ly/dashboards/">dashboard tool</a>'
            }
        ]
    }
];

export default class PricingDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {



        let pricingCardBodyPrice = (item) => {
            if (item.price.monthly === '0') {
                return (<div className="price">
                    <div className="price-text">
                        Free
                    </div>
                </div>)
            } else {
                return (<div className="price">
                    <div className="price-text">
                        <span className="usd">$</span>{item.price.monthly}
                    </div>
                </div>)
            }

        };

        let pricingCardBodyNotes = (item) => {

            if (item.price.monthly === '0') {
                return (<div className="notes">
                    <div className="details">
                        {item.price.frequency}, <strong>{item.price.users}</strong>
                    </div>
                    <div className="billed-amount">
                        Free forever.
                    </div>
                </div>)
            } else {
                return (<div className="notes">
                    <div className="details">
                        {item.price.frequency}, <strong>{item.price.users}</strong>
                    </div>
                    <div className="billed-amount">
                        <span className="usd">$</span>{item.price.annually} billed yearly.
                    </div>
                </div>)
            }
        };

        let pricingCardHeaderMessage = (item) => {
            if (item.message) {
                return (<div className="pricing-cards-headers-item-message hidden hidden-fade">
                    <div className="pricing-cards-headers-item-message-text"
                         dangerouslySetInnerHTML={{__html: item.message}}/>
                </div>)
            } else {
                return '';
            }
        };
        let pricingCardHeader = (items) => {
            return (
                items.map((item, i) => {

                    return (
                        <div className="pricing-cards-headers-item" key={i}>
                            {pricingCardHeaderMessage(item)}
                            <div className="pricing-cards-headers-item-text hidden hidden-fade">
                                {item.label}
                            </div>
                        </div>
                    )
                })
            )
        };

        let pricingCardBody = (items) => {

            return (
                items.map((item, i) => {
                    return (
                        <div className="pricing-cards-bodies-item" key={i}>
                            <div className="pricing-cards-bodies-item-wrapper hidden hidden-fade">
                                <div className="pricing-cards-bodies-item-content">
                                    {pricingCardBodyPrice(item)}
                                    {pricingCardBodyNotes(item)}
                                </div>
                                <Buttons items={item.actions} className="pricing-cards-bodies-item-actions"/>
                            </div>
                        </div>
                    )
                })
            )
        };

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

        let mobilePricingCard = (items) => {
            return (
                items.map((item, i) => {

                    return (
                        <div className="pricing-card-single" key={i}>
                            <div className="pricing-cards-headers-item">
                                {pricingCardHeaderMessage(item)}
                                <div className="pricing-cards-headers-item-text hidden hidden-fade">
                                    {item.label}
                                </div>
                            </div>
                            <div className="pricing-cards-bodies-item" key={i}>
                                <div className="pricing-cards-bodies-item-wrapper hidden hidden-fade">
                                    <div className="pricing-cards-bodies-item-content">
                                        {pricingCardBodyPrice(item)}
                                        {pricingCardBodyNotes(item)}
                                    </div>
                                    <Buttons items={item.actions} className="pricing-cards-bodies-item-actions"/>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        };

        return (
            <div className="pricing-cards">
                <style dangerouslySetInnerHTML={{__html: styles}}/>

                <div className="pricing-cards-wrapper pricing-cards-mobile mobile-only">
                    {mobilePricingCard(pricingLevels)}
                </div>

                <div className="pricing-cards-wrapper desktop-only">
                    <div className="pricing-cards-headers">
                        <div className="pricing-cards-headers-wrapper">
                            {pricingCardHeader(pricingLevels)}
                        </div>


                    </div>
                    <div className="pricing-cards-bodies">
                        <div className="pricing-cards-bodies-wrapper ">
                            {pricingCardBody(pricingLevels)}
                        </div>
                    </div>
                    <div className="pricing-cards-feature-lists">
                        <div className="pricing-cards-feature-lists-wrapper">
                            {pricingCardFeatures(pricingLevels)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}