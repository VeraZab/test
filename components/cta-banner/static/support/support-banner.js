import React from 'react';
import {CtaBanner, CtaBannerBody} from "../../cta-banner";


const columnData = [
    {
        title: 'Support Open Source',
        message: 'These libraries are free forever. Your support helps to keep them top notch.',
        graphic: 'https://now.plot.ly/static/images/illustrations/support_open_source@2x.png',
        actions: null
    },
    {
        title: 'Engineering Support',
        message: 'Get chat and support from our awesome engineering team.',
        graphic: 'https://now.plot.ly/static/images/illustrations/engineering_supoort@2x.png',
        actions: [
            {
                label: 'Get Advanced Support',
                title: 'We offer a number of paid support plans to service everyone from individual developers to the largest enterprises',
                icon: null,
                target: '_self',
                link: '/create',
                button: {
                    classes: 'button button-primary'
                }
            }
        ]
    },
    {
        title: 'Share Online',
        message: 'Share charts, dashboards, Jupyter notebooks, and presentations online.',
        graphic: 'https://now.plot.ly/static/images/illustrations/share_online@2x.png',
        actions: null
    }
];

export default class SupportBanner extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let renderColumns = (columnData) => {
            return (
                columnData.map((column, i) => {
                    return (
                        <div className="column">
                            <div className="column-wrapper">
                                <div className="column-graphic">
                                    <div className="column-graphic-wrapper">
                                        <img src={column.graphic} alt={column.title} />
                                    </div>
                                </div>
                                <div className="column-title">
                                    {column.title}
                                </div>
                                <div className="column-message">
                                    {column.message}
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        };
        return (

                <CtaBanner>
                    <CtaBannerBody>
                        <div className="columns">
                            <div className="columns-wrapper">
                                {renderColumns(columnData)}
                            </div>
                        </div>
                    </CtaBannerBody>
                </CtaBanner>

        )
    }
}

