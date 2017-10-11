import React from 'react';
import PrismicDOM from 'prismic-dom';

import Graphic from './graphic'
import Button from "components/prismic/button";
import {Browser} from "components/browser";


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

        /** Destructure props */
        const {data: {primary}} = this.props;
        const {data: {items}} = this.props;

        /** Define the component class name */
        const componentClass = 'content-section-p';

        /** The classes variable */
        let classes = componentClass;

        /**
         * If someone has added classes to this component,
         * let's append them to the classes variable
         */
        if (this.props.className) {
            classes += ' ' + this.props.className;
        }

        /**
         * Layout
         *
         * These values will the arrangement of the elements in the content section.
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
         * Alignment
         *
         * These apply if the content section is in a column layout.
         * They are the standard justification settings, left, center, right...
         *
         * Available values:
         *
         * left     -- default
         * center   -- center alignment
         * right    -- right alignment
         */
        classes += ' ' + componentClass + '-align--' + primary.alignment;

        /**
         * Style
         *
         * These values will adjust classes that change the visual appearance of the content section.
         *
         * Available values:
         *
         * default -- The standard content section, which will alternate between white and $color-rhino-light-4 for its background color
         * gradient_purple -- Uses the same styling as the purple gradient used in hero sections
         * gradient_dark-blue -- Uses a darker blue gradient, white text
         * gradient_blue -- Uses a blue gradient for its background, white text
         * graphic_blue_pipes -- Uses a blue gradient and a pipe graphic for its background
         * graphic_white_dotted-lines -- White background with angled, different colored dotted lines in its background
         */
        classes += ' ' + componentClass + '-style--' + primary.style;


        /**
         * Body
         *
         * This checks to see if there are two columns (two enties for body, body + body_two),
         * and if so it will display both
         * otherwise it will just display the one
         */
        let body = () => {
            if (primary.body.length && primary.body_two.length && primary.body_two[0].text !== "") {
                return (<div className={"content-section-p-body content-section-p-body-columns"}>
                    <div className="content-section-p-body-wrapper">
                        <div className="content-section-p-body-column-one"
                             dangerouslySetInnerHTML={{__html: PrismicDOM.RichText.asHtml(primary.body)}}/>
                        <div className="content-section-p-body-column-two"
                             dangerouslySetInnerHTML={{__html: PrismicDOM.RichText.asHtml(primary.body_two)}}/>
                    </div>
                </div>)
            } else {
                return (<div className={"content-section-p-body"}>
                    <div className="content-section-p-body-wrapper"
                         dangerouslySetInnerHTML={{__html: PrismicDOM.RichText.asHtml(primary.body)}}/>
                </div>)
            }
        };

        /**
         * Graphic
         *
         */
        let graphic = () => {
            if (primary.graphic && primary.graphic.url) {
                if (primary.graphic_style === 'browser') {
                    return (<div className={componentClass + '-graphic ' + componentClass + '-area'}>
                        <Browser>
                            <Graphic
                                data={primary}/>
                        </Browser>
                    </div>)
                }
                return (<div className={componentClass + '-graphic ' + componentClass + '-area'}><Graphic
                    data={primary}/></div>)
            }


        };


        return (
            <section className={classes}>
                <div className="content-section-p-wrapper">
                    <div className={componentClass + '-details ' + componentClass + '-area'}>
                        {/**
                         * If there's a pretitle,
                         * let's display it!
                         */
                            primary.pretitle !== null ?
                                (<div className={"content-section-p-pretitle"}>
                                    <div className="content-section-p-pretitle-wrapper">
                                        <h3>{primary.pretitle}</h3>
                                    </div>
                                </div>)
                                : null}
                        {/**
                         * If there's a title,
                         * let's display it!
                         */
                            primary.title.length && primary.title[0].text !== "" ?
                                (<div className={"content-section-p-title"}>
                                    <div className="content-section-p-title-wrapper"
                                         dangerouslySetInnerHTML={{__html: PrismicDOM.RichText.asHtml(primary.title)}}/>
                                </div>)
                                : null}
                        {/**
                         * If there's a pretitle,
                         * let's display it!
                         */
                            primary.subtitle.length && primary.subtitle[0].text !== "" ?
                                (<div className={"content-section-p-subtitle"}>
                                    <div className="content-section-p-subtitle-wrapper"
                                         dangerouslySetInnerHTML={{__html: PrismicDOM.RichText.asHtml(primary.subtitle)}}/>
                                </div>)
                                : null}
                        {/**
                         * Display the body content
                         */
                            body()}

                        {/**
                         * If there are items, they are buttons
                         * let's display them!
                         */
                            items && items.length ?
                                (<div className={"content-section-p-actions"}>
                                    <div className="content-section-p-actions-wrapper buttons">
                                        {items.map((button, i) => {
                                            return (<Button data={button}/>)
                                        })}
                                    </div>
                                </div>)
                                : null}

                    </div>
                    {graphic()}


                </div>
            </section>
        );
    }
}