import React from 'react';
import Link from 'next/link';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const icon = item => {
      if (item.icon.type === 'image') {
        return (
          <div className="button-icon button-icon-image">
            <div className="button-icon-wrapper">
              <img src={item.icon} alt={item.label} />
            </div>
          </div>
        );
      } else if (item.icon.type === 'mdi') {
        const className = 'mdi-' + item.icon.src;
        return (
          <div className="button-icon button-icon-mdi">
            <div className="button-icon-wrapper">
              <i className={'mdi ' + className} />
            </div>
          </div>
        );
      }
    };

    if (this.props.item.target === '_self') {
      return (
        <Link prefetch href={this.props.item.link}>
          <a
            target={this.props.item.target}
            title={this.props.item.title}
            className={this.props.item.button.classes}
          >
            {this.props.item.icon ? icon(this.props.item) : null}
            <div
              className="button-label"
              dangerouslySetInnerHTML={{__html: this.props.item.label}}
            />
          </a>
        </Link>
      );
    } else if (this.props.item.target !== '_self') {
      return (
        <a
          href={this.props.item.link}
          target={this.props.item.target}
          title={this.props.item.title}
          className={this.props.item.button.classes}
        >
          {this.props.item.icon ? icon(this.props.item) : null}
          <div className="button-label" dangerouslySetInnerHTML={{__html: this.props.item.label}} />
        </a>
      );
    } else {
      return <div>no buttons</div>;
    }
  }
}
