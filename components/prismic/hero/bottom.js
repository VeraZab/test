import React from 'react';
import PrismicDOM from 'prismic-dom';

/**
 * HeroBottom component
 * Wrapper
 * Takes the content for the bottom, spans the whole width of the hero
 * regardless of layout
 * @class
 *
 */
export default class HeroBottom extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {

        let HeroBottomStyles = {};

        if (this.props.style) {
            HeroBottomStyles = this.props.style;
        }
        return (
            <div className="hero-prismic-bottom" style={HeroBottomStyles}>
                <div className="hero-prismic-bottom-wrapper hidden hidden-fade">
                    {this.props.children}
                </div>
            </div>
        );
    }
}