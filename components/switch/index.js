import React from 'react';

class SwitchComponent extends React.PureComponent {
  renderItems(items) {
    return items.map((item, i) => {
      const active = this.props.active === item.label;

      return (
        <div
          className={`toggle-switch-item${active ? ` active` : ''}`}
          key={i}
          onClick={() => item.action()}
        >
          <span>{item.label}</span>
        </div>
      );
    });
  }
  render() {
    const {
      data: {tabs},
    } = this.props;
    return (
      <div className="toggle-switch-container">
        <div className="toggle-switch">{this.renderItems(tabs)}</div>
      </div>
    );
  }
}

export default SwitchComponent;
