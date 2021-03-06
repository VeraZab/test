import React from 'react';
import styles from './pricing.styles.scss';
import Buttons from 'components/buttons';

const pricingLevels = [
  {
    label: 'Student',
    message: null,
    messageHover: true,
    messageAction: null,
    price: {
      monthly: '33',
      annually: '99',
      frequency: 'per year',
      users: 'per user',
    },
    actions: [
      {
        label: 'Sign Up',
        link: 'https://plot.ly/settings/subscription?modal=subscription&plan=student',
        button: {
          classes: 'button button-primary',
        },
        target: '_blank',
      },
    ],
    features: [
      {
        value: '<strong>Includes:</strong>',
      },
      {
        value: '2500 Charts',
      },
      {
        value: 'Private or Public Charts, Dashboards and Slide Decks',
      },
      {
        value: 'Community Support for Online Workspace',
      },
      {
        value: 'SVG, EPS, HTML, PDF, PNG and JPEG&nbsp;Export',
      },
      {
        value: '<strong>1000</strong> Chart and Image Saves per day',
      },
      {
        value: 'Community support for <strong>Falcon Sql Client</strong>',
      },
    ],
  },
  {
    label: 'Personal',
    message: null,
    messageHover: true,
    messageAction: null,
    price: {
      monthly: '33',
      annually: '420',
      frequency: 'per year',
      users: 'per user',
    },
    actions: [
      {
        label: 'Sign Up',
        link: 'https://plot.ly/settings/subscription?modal=subscription&plan=personal',
        button: {
          classes: 'button button-primary',
        },
        target: '_blank',
      },
    ],
    features: [
      {
        value: '<strong>Includes:</strong>',
      },
      {
        value: '2500 Charts',
      },
      {
        value: 'Private or Public Charts, Dashboards and Slide Decks',
      },
      {
        value: 'Chat Support for Online Workspace',
      },
      {
        value: 'SVG, EPS, HTML, PDF, PNG and JPEG&nbsp;Export',
      },
      {
        value: '<strong>1000</strong> Chart and Image Saves per day',
      },
      {
        value:
          'Chat support for <strong>Falcon Sql Client</strong>, <em>not including</em> support for persistent connections or non-SQL databases',
      },
    ],
  },
  {
    label: 'Professional',
    message: 'Our most popular plan!',
    messageAction: null,
    price: {
      monthly: '79',
      annually: '840',
      frequency: 'per year',
      users: 'per user',
    },
    actions: [
      {
        label: 'Sign Up',
        link: 'https://plot.ly/settings/subscription?modal=subscription&plan=professional',
        button: {
          classes: 'button button-emerald',
        },
        target: '_blank',
      },
    ],
    features: [
      {
        value: '<strong>Includes:</strong>',
      },
      {
        value: 'Unlimited Charts',
      },
      {
        value: 'Private or Public Charts, Dashboards and Slide Decks',
      },
      {
        value: 'Chat and Phone Support for Online Workspace',
      },
      {
        value: 'SVG, EPS, HTML, PDF, PNG and JPEG&nbsp;Export',
      },
      {
        value: '<strong>10,000</strong> Chart and Image Saves per day',
      },
      {
        value:
          'Chat and phone support for <strong>Falcon Sql Client</strong>, <em>including</em> support for persistent connections or non-SQL databases',
      },
    ],
  },
];

export default class PricingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: false,
    };

    this.toggleStudentState = this.toggleStudentState.bind(this);
  }

  toggleStudentState() {
    this.setState({
      student: !this.state.student,
    });
  }

  render() {
    let pricingCardBodyPrice = item => {
      if (item.price.monthly === '0') {
        return (
          <div className="price">
            <div className="price-text">Free</div>
          </div>
        );
      } else {
        return (
          <div className="price">
            <div className="price-text">
              <span className="usd">$</span>
              {item.price.annually}
            </div>
          </div>
        );
      }
    };

    let pricingCardBodyNotes = item => {
      if (item.price.monthly === '0') {
        return (
          <div className="notes">
            <div className="details">
              {item.price.frequency}, <strong>{item.price.users}</strong>
            </div>
          </div>
        );
      } else {
        return (
          <div className="notes">
            <div className="details">
              {item.price.frequency}, <strong>{item.price.users}</strong>
            </div>
          </div>
        );
      }
    };

    let pricingCardHeaderMessage = item => {
      if (item.message && item.messageHover === true) {
        return (
          <div
            className="pricing-cards-headers-item-message hidden hidden-fade"
            onClick={item.messageAction}
          >
            <div
              className="pricing-cards-headers-item-message-text message-action"
              dangerouslySetInnerHTML={{__html: item.message}}
            />
          </div>
        );
      } else if (item.message) {
        return (
          <div className="pricing-cards-headers-item-message hidden hidden-fade">
            <div
              className="pricing-cards-headers-item-message-text"
              dangerouslySetInnerHTML={{__html: item.message}}
            />
          </div>
        );
      } else {
        return '';
      }
    };

    let pricingCardHeader = items => {
      return items.map((item, i) => {
        return (
          <div className="pricing-cards-headers-item" key={i}>
            {pricingCardHeaderMessage(item)}
            <div className="pricing-cards-headers-item-text hidden hidden-fade">{item.label}</div>
          </div>
        );
      });
    };

    let pricingCardBody = items => {
      return items.map((item, i) => {
        return (
          <div className="pricing-cards-bodies-item" key={i}>
            <div className="pricing-cards-bodies-item-wrapper hidden hidden-fade">
              <div className="pricing-cards-bodies-item-content">
                {pricingCardBodyPrice(item)}
                {pricingCardBodyNotes(item)}
              </div>
              <Buttons items={item.actions} className="pricing-cards-bodies-item-actions" />
            </div>
          </div>
        );
      });
    };

    let pricingCardFeatures = items => {
      let pricingCardFeature = items => {
        return items.map((item, i) => {
          return (
            <div className="pricing-cards-feature-lists-item-value " key={i}>
              <div dangerouslySetInnerHTML={{__html: item.value}} className="hidden delay-med" />
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

    let mobilePricingCard = items => {
      return items.map((item, i) => {
        return (
          <div className="pricing-card-single" key={i}>
            <div className="pricing-cards-headers-item">
              {pricingCardHeaderMessage(item)}
              <div className="pricing-cards-headers-item-text hidden hidden-fade">{item.label}</div>
            </div>
            <div className="pricing-cards-bodies-item" key={i}>
              <div className="pricing-cards-bodies-item-wrapper hidden hidden-fade">
                <div className="pricing-cards-bodies-item-content">
                  {pricingCardBodyPrice(item)}
                  {pricingCardBodyNotes(item)}
                </div>
                <Buttons items={item.actions} className="pricing-cards-bodies-item-actions" />
              </div>
            </div>
          </div>
        );
      });
    };

    return (
      <div className="pricing-cards">
        <style dangerouslySetInnerHTML={{__html: styles}} />

        <div className="pricing-cards-wrapper pricing-cards-mobile mobile-only">
          {mobilePricingCard(pricingLevels)}
        </div>

        <div className="pricing-cards-wrapper desktop-only">
          <div className="pricing-cards-headers">
            <div className="pricing-cards-headers-wrapper">{pricingCardHeader(pricingLevels)}</div>
          </div>
          <div className="pricing-cards-bodies">
            <div className="pricing-cards-bodies-wrapper ">{pricingCardBody(pricingLevels)}</div>
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
