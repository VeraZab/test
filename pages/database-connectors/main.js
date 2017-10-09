import {
    ContentSection,
    ContentPane,
    Title,
    Subtitle,
    Body,
    Graphic
} from 'components/content-section';
import React from 'react';
import Link from 'next/link';
import PrismicDOM from 'prismic-dom'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        let {slices} = this.props.doc.data;
        return (
            <div className="slices">
                {slices.map(slice => {
                    if (slice.primary.layout === 'row-graphic-right') {
                        return (
                            <ContentSection>
                                <ContentPane half center-vertically text>
                                    <Title>
                                        {slice.primary.title[0].text}
                                    </Title>
                                    <Body>
                                    <div
                                        dangerouslySetInnerHTML={{__html: PrismicDOM.RichText.asHtml(slice.primary.body)}}/>
                                    </Body>
                                </ContentPane>
                                <ContentPane half graphic>
                                    <Graphic
                                        label={slice.primary.graphic_link_caption}
                                        link={slice.primary.graphic_link.url}
                                        image={slice.primary.graphic.url}/>
                                </ContentPane>
                            </ContentSection>
                        )
                    } else if (slice.primary.layout === 'row-graphic-left') {
                        return (
                            <ContentSection>
                                <ContentPane half graphic>
                                    <Graphic
                                        label={slice.primary.graphic_link_caption}
                                        link={slice.primary.graphic_link.url}
                                        image={slice.primary.graphic.url}/>
                                </ContentPane>

                                <ContentPane half center-vertically text>
                                    <Title>
                                        {slice.primary.title[0].text}
                                    </Title>
                                    <Body>
                                    <div
                                        dangerouslySetInnerHTML={{__html: PrismicDOM.RichText.asHtml(slice.primary.body)}}/>
                                    </Body>
                                </ContentPane>
                            </ContentSection>
                        )
                    } else if (slice.primary.layout === 'column-graphic-bottom') {
                        return (
                            <ContentSection>
                                <ContentPane full center center-vertically text>
                                    <Title>
                                        {slice.primary.title[0].text}
                                    </Title>
                                    <Body>
                                    <div
                                        dangerouslySetInnerHTML={{__html: PrismicDOM.RichText.asHtml(slice.primary.body)}}/>
                                    <div style={{maxWidth: '680px', margin: '20px auto'}}>
                                        <Graphic
                                            label={slice.primary.graphic_link_caption}
                                            link={slice.primary.graphic_link.url}
                                            image={slice.primary.graphic.url}/>
                                    </div>
                                    </Body>
                                </ContentPane>
                            </ContentSection>
                        )
                    }
                })}
            </div>
        )
    }
}
