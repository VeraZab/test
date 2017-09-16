import Layout from 'components/global/layout';
import HeroSection from './hero';
import Main from './main';

const meta = {
    title: 'Database Connectors',
    description: 'Connect Plotly charts and dashboards to your SQL and Redshift databases',
    url: 'https://plot.ly/database-connectors/'

};

export default () => (
    <Layout meta={meta}>
        <HeroSection />
        <Main />
    </Layout>
)