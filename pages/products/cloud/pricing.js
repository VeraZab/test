import React from 'react';
import styles from './pricing.styles.scss';
import Buttons from '../../../components/buttons/buttons';

const pricingLevels = [
    {
        label: "Community",
        price: {
            monthly: '0',
            annually: null,
            frequency: 'per year',
            users: 'per user'
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
                value: 'The <strong>Community&nbsp;Plan</strong> includes the following:'
            },
            {
                value: 'Community Support'
            },
            {
                value: 'Unlimited Public Files'
            },
            {
                value: 'PNG & JPEG Export'
            },
            {
                value: '250 API Calls per day'
            },
            {
                value: 'Connect to 7 Data Sources'
            }
        ]
    },
    {
        label: "Student",
        message: "*.edu email required.",
        price: {
            monthly: '59',
            annually: '59',
            frequency: 'per year',
            users: 'per user'
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
                value: 'Includes everything in the <strong>Community Plan</strong>'
            },
            {
                value: 'Community Support'
            },
            {
                value: 'Unlimited Private Charts, Dashboards and Slide Decks'
            },
            {
                value: 'SVG,EPS, HTML, PDF, PNG & JPEG Export'
            },
            {
                value: '5000 API Calls per day'
            },
            {
                value: 'Connect to 11 Data Sources'
            }
        ]
    },
    {
        label: "Personal",
        message: null,
        price: {
            monthly: '33',
            annually: '396',
            frequency: 'per year',
            users: 'per user'
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
                value: 'Includes everything in the <strong>Community Plan</strong>'
            },
            {
                value: 'Community Support'
            },
            {
                value: 'Unlimited Private Charts, Dashboards and Slide Decks'
            },
            {
                value: 'SVG,EPS, HTML, PDF, PNG & JPEG Export'
            },
            {
                value: '5000 API Calls per day'
            },
            {
                value: 'Connect to 11 Data Sources'
            }
        ]
    },
    {
        label: "Professional",
        message: 'Our most popular plan!',
        price: {
            monthly: '79',
            annually: '948',
            frequency: 'per year',
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
                value: 'Chat, Email and Phone Support'
            },
            {
                value: 'Unlimited Private Charts, Dashboards and Slide Decks'
            }
            ,
            {
                value: 'SVG,EPS, HTML, PDF, PNG & JPEG Export'
            }
            ,
            {
                value: 'SVG,EPS, HTML, PDF, PNG & JPEG Export'
            }
            ,
            {
                value: '10,000 API Calls per day'
            }
            ,
            {
                value: 'Connect to 18 Data Sources'
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
                        <span className="usd">$</span>{item.price.annually}
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