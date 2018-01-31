import React from 'react';

class SwitchComponent extends React.PureComponent {
  renderItems(items) {
    return items.map((item, i) => {
      const active = this.props.active === item.label;

      return (
        <div
          className={`toggle-switch__switch__item${active ? ` active` : ''}`}
          key={i}
          onClick={() => item.action()}
        >
          <span>{item.label}</span>
        </div>
      );
    });
  }
  render() {
    const { data: { tabs } } = this.props;
    return (
      <div className="toggle-switch">
        <div className="toggle-switch__switch">{this.renderItems(tabs)}</div>
      </div>
    );
  }
}

export default SwitchComponent;
