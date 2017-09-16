import React from 'react';
import Link from 'next/link';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
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
        // console.log(this.props);


        let icon = (item) => {
            if(item.icon.type === 'image'){
                return (<div className="button-icon button-icon-image">
                    <div className="button-icon-wrapper">
                        <img src={item.icon} alt={item.label}/>
                    </div>
                </div>)
            } else if(item.icon.type === 'mdi'){
                let className = 'mdi-' + item.icon.src;
                return (<div className="button-icon button-icon-mdi">
                    <div className="button-icon-wrapper">
                        <i className={'mdi ' + className } />
                    </div>
                </div>)
            }
        };


        if (this.props.item.link.includes('typeform.com')) {
            return (
                    <a target={this.props.item.target}
                       href={this.props.item.link}
                       data-mode="drawer_right"
                       data-hide-headers="true"
                       data-hide-footer="true"
                       data-submit-close-delay="2"
                       id="typef_orm_share"
                       title={this.props.item.title}
                       className={this.props.item.button.classes + ' typeform-share'}>
                        {this.props.item.icon ? icon(this.props.item) : null}
                        <div className="button-label" dangerouslySetInnerHTML={{__html: this.props.item.label}}/>
                    </a>
            )
        } else if (this.props.item.target === '_self') {
            return (
                <Link prefetch href={this.props.item.link}>
                    <a target={this.props.item.target}
                       title={this.props.item.title}
                       className={this.props.item.button.classes}>
                        {this.props.item.icon ? icon(this.props.item) : null}
                        <div className="button-label" dangerouslySetInnerHTML={{__html: this.props.item.label}}/>
                    </a>
                </Link>
            )
        } else if (this.props.item.target !== '_self') {
            return (
                <a href={this.props.item.link}
                   target={this.props.item.target}
                   title={this.props.item.title}
                   className={this.props.item.button.classes}>
                    {this.props.item.icon ? icon(this.props.item) : null}
                    <div className="button-label" dangerouslySetInnerHTML={{__html: this.props.item.label}}/>
                </a>
            )
        } else {
            return (<div>no buttons</div>);
        }
    }
}