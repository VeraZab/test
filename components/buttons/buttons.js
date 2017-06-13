import React from 'react';
import Button from '../button/button';

export default class Buttons extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let renderButtons = (items) => {
            return (
                items.map((item, i) => {
                    return (
                        <Button item={item} key={i}/>
                    )
                })
            )
        };
        let classes = '';

        if('align-end' in this.props){
            classes += ' layout-align-end';
        }
        if('align-start' in this.props){
            classes += ' layout-align-start';
        }
        if('align-center' in this.props){
            classes += ' layout-align-center';
        }

        if (this.props.className) {
            classes += ' ' + this.props.className;
        }
        if (this.props.items) {
            return (<div className={'buttons' + classes }>{renderButtons(this.props.items)}</div>);
        } else {
            return '';
        }
    }
}