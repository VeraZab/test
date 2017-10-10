import React from 'react';
import Image from 'components/prismic/Image'

/**
 * Graphic component
 * for ContentSection component
 * @class
 *
 */
export default class Graphic extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        /**
         * Set the data as a easier thing to type
         */
        const {data} = this.props;

        let graphic, caption = null;

        let classes = 'content-section-p-graphic-item';

        /**
         * If someone has added classes to this component,
         * let's append them to the classes variable
         */
        if (this.props.className) {
            classes += ' ' + this.props.className;
        }

        /**
         * Let's add the graphic style to the classes
         */
        classes += ' content-section-p-graphic-style--' + data.graphic_style;


        /**
         * Let's check if there's a link, and if so
         * wrap the image in a link
         */
        if (data.graphic_link && data.graphic_link.url) {
            graphic = (<a href={data.graphic_link.url} target="_blank"><Image data={data.graphic}/></a>);
        } else {
            graphic = (<Image data={data.graphic}/>)
        }

        /**
         * Let's check if there's a caption,
         * and then check if there is a link,
         * if there is a link, wrap the caption
         * in a link otherwise return the caption
         */
        if (data.graphic_link_caption !== "") {
            if (data.graphic_link && data.graphic_link.url) {
                caption = (
                    <a href={data.graphic_link.url} target="_blank">{data.graphic_link_caption}</a>);
            } else {
                caption = data.graphic_link_caption;

            }
        }
        return (
            <div className={classes}>
                {[
                    graphic,
                    caption
                ]}
            </div>
        )
    }
}
