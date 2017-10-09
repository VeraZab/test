import React from 'react';

import Image from 'components/prismic/Image'

export default class LogosSlice extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        let {data} = this.props;
        return (<div className="logos-display">
            <div className="logos-display-wrapper">
                {data.items.map(logo => {
                    return (<div className="logo-item">
                        <img src={logo.image.url} alt=""/>
                    </div>)
                })}
            </div>
        </div>);
    }
}
