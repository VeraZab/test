import React from 'react'
import {images} from 'config/constants'
import {imgix} from 'config/functions'
import Img from './img'
import lozad from 'lozad'


export default class Image extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let observer = lozad('.lozad', {
            threshold: 0.1,
            load: function (el) {
                el.src = el.dataset.src;
                el.onload = function () {
                    el.parentElement.parentElement.parentElement.classList.add('hq-loaded')
                    el.classList.add('img-loaded')
                }
            }
        })
        observer.observe();
    }
    render() {
        let {data} = this.props;

        data.url = imgix(data.url);

        let aspectRatio, imageParams, image, style;


        if (this.props.size) {
            let aspectRatio = (this.props.size.h / this.props.size.w) * 100
            imageParams = {
                ar: aspectRatio + '%',
                preview: '?w=' + ( Math.floor(this.props.size.w / images.preview.scale) ) + '&h=' + ( Math.floor(this.props.size.h / images.preview.scale) ) + '&fit=crop&crop=' + this.props.size.crop + '&blur='+ images.preview.blur + '&q=' + images.preview.quality + '&auto=compress',
                hq: '?w=' +  Math.round(this.props.size.w * images.hq.scale) + '&h=' + Math.round(this.props.size.h * images.hq.scale) + '&fit=crop&crop=' + this.props.size.crop + '&q=' + images.hq.quality + '&auto=compress'
            }
            style = {
                height: '0',
                paddingBottom: imageParams.ar
            }
            image = (<Img data={data} imageParams={imageParams} styles={style} />)

        } else {
            aspectRatio = (data.dimensions.height / data.dimensions.width) * 100
            imageParams = {
                preview: '?w=' + ( Math.floor(data.dimensions.width / images.preview.scale)) + '&h=' + ( Math.floor(data.dimensions.height / images.preview.scale) ) + '&fit=crop&blur='+ images.preview.blur + '&q=' + images.preview.quality + '&auto=compress',
                hq: '?w=' +  Math.round(data.dimensions.width * images.hq.scale) + '&h=' + Math.round(data.dimensions.height * images.hq.scale) + '&fit=crop&crop=top,left&q=' + images.hq.quality + '&auto=compress'
            }
            style = {
                height: '0',
                paddingBottom: Math.floor(aspectRatio) + '%'
            }
            image = (<Img data={data} imageParams={imageParams} styles={style} />)
        }


        return (image)
    }
}