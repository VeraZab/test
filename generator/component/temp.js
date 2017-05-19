import React from 'react'
import styles from './<%= name %>.scss'


export default class <%= name %> extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={"<%= nameSlug %> " + this.props.className}>
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                    <div className="<%= nameSlug %>-wrapper">
                    {this.props.children}
                    </div>
            </div>
        )
    }
}


