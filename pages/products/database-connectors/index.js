import Layout from '../../../components/global/layout/layout';
import HeroSection from './hero';
import Main from './main';

const meta = {
    title: 'Database Connectors'
};

export default () => (
    <Layout meta={meta}>
        <HeroSection />
        <Main />
    </Layout>
)