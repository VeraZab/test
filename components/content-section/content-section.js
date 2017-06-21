import React from 'react'
import styles from './content-section.scss'

export class Title extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"content-section-title title-l " + this.props.className}>
                <div className="content-section-title-wrapper hidden">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export class Subtitle extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"content-section-subtitle  pre-title title-med " + this.props.className}>
                <div className="content-section-subtitle-wrapper hidden">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export class Body extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"content-section-body " + this.props.className}>
                <div className="content-section-body-wrapper hidden">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export class Graphic extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let classes = '';


        let graphic,
            label = () => ('');

        if (this.props.link) {
            graphic = graphic = () => (<a href={this.props.link} target="_blank"><img className="content-section-graphic-img" src={this.props.image}/></a>);
            classes += ' content-section-graphic-image';
        }
        if (this.props.image && !this.props.link) {
            graphic = graphic = () => (<img className="content-section-graphic-img" src={this.props.image}/>);
            classes += ' content-section-graphic-image';
        }
        if (this.props.video) {
            graphic = graphic = () => (
                <video autoPlay="true" preload="auto" loop="" className="content-section-graphic-video device-content">
                    <source src={this.props.video}
                            type="video/mp4"/>
                    <img
                        src={this.props.videoPlaceholder}/></video>);
            classes += ' content-section-graphic-video';
        }

        if (this.props.label) {
            if (this.props.link) {
                label = label = () => (
                    <div className="content-section-graphic-label"><a href={this.props.link}>{this.props.label}</a>
                    </div>);

            } else {
                label = label = () => (<div className="content-section-graphic-label">{this.props.label}</div>);
            }
        }

        if (this.props.className) {
            classes += ' ' + this.props.className;
        }
        return (
            <div className={"content-section-graphic " + classes}>
                <div className="content-section-graphic-wrapper hidden">
                    {graphic()}
                    {label()}
                </div>
            </div>
        )
    }
}


export class ContentPane extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let classes = '';


        if ('text' in this.props) {
            classes += ' content-section-pane-text';
        }
        if ('graphic' in this.props) {
            classes += ' content-section-pane-graphic';
        }
        if ('flex' in this.props) {
            classes += ' content-section-pane-flex';
        }
        if ('half' in this.props) {
            classes += ' content-section-pane-half';
        }
        if ('thirds' in this.props) {
            classes += ' content-section-pane-third';
        }
        if ('left' in this.props) {
            classes += ' content-section-pane-align-left';
        }
        if ('center' in this.props) {
            classes += ' content-section-pane-align-center';
        }
        if ('center-vertically' in this.props) {
            classes += ' content-section-pane-align-center-vertically';
        }
        if ('align-end' in this.props) {
            classes += ' layout-align-end';
        }
        if ('align-start' in this.props) {
            classes += ' layout-align-center';
        }
        if ('align-center' in this.props) {
            classes += ' layout-align-center';
        }
        if ('right' in this.props) {
            classes += ' content-section-pane-align-right';
        }
        if ('full' in this.props) {
            classes += ' content-section-pane-full';
        }
        if (this.props.className) {
            classes += ' ' + this.props.className;
        }

        return (
            <div className={"content-section-pane" + classes}>
                <div className="content-section-pane-wrapper hidden">
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export class ContentSection extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {

        let classes = '';
        let contentSectionStyles = null;

        if (this.props.style) {
            contentSectionStyles = this.props.style;
        }
        if (this.props.className) {
            classes += ' ' + this.props.className;
        }
        return (
            <section className={"content-section " + classes}>
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                <div className="content-section-wrapper hidden" style={contentSectionStyles}>
                    {this.props.children}
                </div>
            </section>
        )
    }
}


