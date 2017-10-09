import React from 'react'

// Components
import LogosSlice from 'components/prismic/slices/logos'

export default class Slices extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        let { data } = this.props;
        return (
            <div className="slices">
                <div className="slices-wrapper">
                    {
                        data.map((slice, i) => {
                            if (slice.slice_type === 'logos') {
                                return <LogosSlice key={i} data={slice} />
                            } else return
                        })
                    }
                </div>
            </div>

        )
    }
}