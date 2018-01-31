import React from 'react';
import PropTypes from 'prop-types';
import { constructButtons } from 'lib/construct-buttons';
import { numberWithCommas } from 'lib/format-currency';
import Button from 'components/prismic/button';
import SwitchComponent from 'components/switch';
import { renderPrismic } from 'lib/renderPrismicRichText';

const shortid = require('shortid');

class PricingCardHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      activeToggle:
        this.context.content.has_toggle === 'true'
          ? this.context.content.toggle_state_initial
          : false,
    });
  }

  componentDidMount() {}

  setToggleState(activeToggle) {
    if (activeToggle !== this.state.activeToggle) {
      this.setState({
        activeToggle,
      });
    }
  }

  render() {
    const { content, content: { pretitle, title, price } } = this.context;
    let toggle_content = {};
    if (content.has_toggle === 'true') {
      toggle_content = {
        tabs: [
          {
            label: content.toggle_state_initial,
            title: content.toggle_state_initial_title,
            description: content.toggle_state_initial_description,
            action: () => this.setToggleState(content.toggle_state_initial),
            price: content.price,
          },
          {
            label: content.toggle_state_second,
            title: content.toggle_state_second_title,
            description: content.toggle_state_second_description,
            action: () => this.setToggleState(content.toggle_state_second),
            price: content.toggle_state_second_price,
          },
        ],
      };
    }

    const Pretitle = pretitle && (
      <div className="pricing__card__header__pretitle">
        <h3 className="pre-title">{pretitle}</h3>
      </div>
    );

    const Title = title && (
      <div className="pricing__card__header__title">
        <h2 className="title">{title}</h2>
      </div>
    );

    const Price = price && (
      <div className="pricing__card__header__price">
        <h2 className="title price">
          <span className="price__symbol">$</span>
          {numberWithCommas(
            parseInt(
              this.state.activeToggle === content.toggle_state_second &&
              content.toggle_state_second_price
                ? content.toggle_state_second_price
                : price
            )
          )}
        </h2>
      </div>
    );

    const buttons = constructButtons(content);

    const Buttons = (
      <div className="pricing__card__header__actions buttons">
        {buttons.map(button => (
          <Button key={shortid.generate()} data={button} />
        ))}
      </div>
    );

    return (
      <div className="pricing__card__header">
        <div className="pricing__card__header__wrapper">
          {content.has_toggle === 'true' ? (
            <div className="pricing-card-toggle-container">
              <SwitchComponent
                active={this.state.activeToggle}
                data={toggle_content}
              />
            </div>
          ) : null}
          {Pretitle}
          {Title}
          {Price}
          {Buttons}
          {content.has_toggle === 'true' ? (
            <div className="toggle-messaging">
              <h2>
                {
                  toggle_content.tabs.find(
                    item => item.label === this.state.activeToggle
                  ).title
                }
              </h2>
              {renderPrismic(
                toggle_content.tabs.find(
                  item => item.label === this.state.activeToggle
                ).description
              )}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

PricingCardHeader.contextTypes = {
  content: PropTypes.object.isRequired,
};

export default PricingCardHeader;
