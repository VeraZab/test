import Layout from '../../../components/global/layout/layout';
import Hero from './hero';
import PricingDetails from "./pricing";
import SupportBanner from '/components/cta-banner/static/support/support-banner';

const meta = {
    title: 'Pricing and Plans',
    twitter: {
        label1: 'Most Popular Plan',
        data1: 'Plotly Professional @ $79/mo'
    }
};

export default class CloudPricing extends React.Component {
    constructor(props) {
        super(props);
    }


    static async getInitialProps({req, pathname}) {
        return {pathname: req && req.url || pathname}
    }

    render() {
        return (
            <Layout meta={meta} pathname={this.props.pathname}>
                <Hero />
                <PricingDetails/>
                <SupportBanner />
            </Layout>
        )
    }
}