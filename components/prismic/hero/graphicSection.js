import React from 'react';
import PrismicDOM from 'prismic-dom';
import Button from 'components/prismic/button';
import {Browser} from 'components/browser'
import Image from 'components/prismic/Image'

/**
 * HeroGraphicSection component
 * Component that takes the various types of graphics (currently only one type)
 * @class
 *
 */


export default class HeroGraphicSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {data} = this.props;

        let styles = {};

        if (this.props.style) {
            styles = this.props.style;
        }

        let graphic = null;

        if (data.hero_graphic_style === 'browser') {
            graphic = (<Browser><Image data={data.hero_graphic}/></Browser>)
        } else {
            graphic = (<Image data={data.hero_graphic}/>)
        }
        return (
            <div className="hero-prismic-graphic-section" style={styles}>
                <div className="hero-prismic-graphic-section-wrapper">
                    {graphic}
                </div>
            </div>
        );
    }
}