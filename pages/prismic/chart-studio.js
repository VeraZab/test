import React from 'react'

import {fetchData} from 'lib/fetchData'

import Layout from 'components/layoutHOC';
import Hero from 'components/prismic/hero';
import Slices from 'components/prismic/slices'

class ChartStudio extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps() {
        const data = await fetchData();
        const doc = await data.find(doc => doc.uid === 'chart-studio');
        return {
            doc: doc,
            data: data
        }
    }

    render() {
        let {doc} = this.props;

        const HeroWrapperStyle = {
            backgroundImage: 'url(' + doc.data.hero_background_image.url + ')',
            backgroundSize: doc.data.hero_background_size,
            backgroundPosition: doc.data.hero_background_position,
            backgroundRepeat: 'no-repeat'
        };

        return (
            <div className="page">
                <Hero data={doc.data} heroWrapperStyle={HeroWrapperStyle}/>
                <Slices data={doc.data.slices} />
            </div>
        )
    }
}

export default Layout(ChartStudio)