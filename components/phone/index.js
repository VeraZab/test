import React from 'react'

export default class Phone extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="phone">
                <div className="phone-wrapper">
                    <div className={"phone-header " + this.props.className}>
                        <div className="phone-header-wrapper">
                            <div className="phone-header-notch" />
                        </div>
                    </div>
                    <div className="phone-viewport">
                        <div className="phone-viewport-wrapper">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}