import React from 'react'
import styles from './Buttons.scss'


export default class Buttons extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={"buttons " + this.props.className}>
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                    <div className="buttons-wrapper">
                    {this.props.children}
                    </div>
            </div>
        )
    }
}


