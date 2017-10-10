import React from 'react';
import PrismicDOM from 'prismic-dom';

import Graphic from './graphic'
import Button from "components/prismic/button";


/**
 * ContentSection component
 * Main wrapper component
 * @class
 *
 */

export default class ContentSection extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {

        const {data: {primary}} = this.props;
        const {data: {items}} = this.props;

        /**
         * Define the component class name
         */
        const componentClass = 'content-section-p';

        /**
         * The classes variable
         */
        let classes = componentClass;

        /**
         * If someone has added classes to this component,
         * let's append them to the classes variable
         */
        if (this.props.className) {
            classes += ' ' + this.props.className;
        }

        /**
         * Let's add the layout value to the classes
         *
         * Available values:
         *
         * row-auto                 -- will automatically alternate which side the graphic is on (even/odd)
         * row-graphic-left         -- manually designate graphic on left
         * row-graphic-right        -- manually designate graphic on right
         * column-graphic-top       -- vertical layout, graphic on top
         * column-graphic-bottom    -- vertical layout, graphic on bottom
         */
        classes += ' ' + componentClass + '-layout--' + primary.layout;

        /**
         * Let's add the alignment value to the classes
         *
         * Available values:
         *
         * left     -- default
         * center   -- center alignment
         * right    -- right alignment
         */
        classes += ' ' + componentClass + '-align--' + primary.alignment;

        return (
            <section className={classes}>
                <div className="content-section-p-wrapper">
                    <div className={componentClass + '-details ' + componentClass + '-area'}>
                        {/**
                         * If there's a subtitle,
                         * let's display it!
                         */
                            primary.subtitle.length ?
                                (<div className={"content-section-p-subtitle"}>
                                    <div className="content-section-p-subtitle-wrapper"
                                         dangerouslySetInnerHTML={{__html: PrismicDOM.RichText.asHtml(primary.subtitle)}}/>
                                </div>)
                                : null}
                        {/**
                         * If there's a title,
                         * let's display it!
                         */
                            primary.title.length ?
                                (<div className={"content-section-p-title"}>
                                    <div className="content-section-p-title-wrapper"
                                         dangerouslySetInnerHTML={{__html: PrismicDOM.RichText.asHtml(primary.title)}}/>
                                </div>)
                                : null}

                        {/**
                         * If there's content in the body,
                         * let's display it!
                         */
                            primary.body.length ?
                                (<div className={"content-section-p-body"}>
                                    <div className="content-section-p-body-wrapper"
                                         dangerouslySetInnerHTML={{__html: PrismicDOM.RichText.asHtml(primary.body)}}/>
                                </div>)
                                : null}

                        {/**
                         * If there are items, they are buttons
                         * let's display them!
                         */
                            items && items.length ?
                                (<div className={"content-section-p-actions"}>
                                    <div className="content-section-p-actions-wrapper buttons">
                                        {items.map((button, i) =>{
                                            return (<Button data={button} />)
                                        })}
                                    </div>
                                </div>)
                                : null}

                    </div>
                    {
                        primary.graphic && primary.graphic.url ? (
                            <div className={componentClass + '-graphic ' + componentClass + '-area'}><Graphic
                                data={primary}/></div>) : null
                    }


                </div>
            </section>
        );
    }
}