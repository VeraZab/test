import React from 'react'
import styles from './browser.styles.scss'


export class Browser extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="browser">
                <div className="browser-wrapper">
                    <div className={"browser-header " + this.props.className}>
                        <style dangerouslySetInnerHTML={{__html: styles}}/>
                        <div className="browser-header-wrapper">
                            <div className="browser-header-buttons">
                                <div className="browser-header-button" />
                                <div className="browser-header-button" />
                                <div className="browser-header-button" />
                            </div>
                        </div>
                    </div>
                    <div className="browser-viewport">
                        <div className="browser-viewport-wrapper">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}