import React from 'react';
import Image from 'components/prismic/Image'

import PrismicDOM from 'prismic-dom'

export default class LogosSlice extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        let {data} = this.props;
        return (<div className="logos-slice">
            <div className="logos-slice-wrapper">
                {data.primary.title.length || data.primary.body.length ?
                    (<div className="logos-slice-header">
                        <div className="logos-slice-title" dangerouslySetInnerHTML={{__html: PrismicDOM.RichText.asHtml(data.primary.title)}}/>
                    </div>)
                : null}
                <div className="logos">
                    {data.items.map(logo => {
                        return (<div className="logos-slice-logo">
                            <Image data={logo.image} />
                        </div>)
                    })}
                </div>
            </div>
        </div>);
    }
}
