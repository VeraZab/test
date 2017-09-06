import Layout from '../../components/global/layout/layout';
import HeroSection from './hero';
import Main from './main';

const meta = {
    title: 'Plotly Webinars',
    description: 'Register for an upcoming live webinar to learn more about Plotly',
    url: 'https://plot.ly/webinars/'

};

export default () => (
    <Layout meta={meta}>
        <HeroSection data={meta} />
        <Main />
    </Layout>
)