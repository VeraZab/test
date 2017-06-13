import Layout from '../../../components/global/layout/layout';
import Hero from './hero';
import Main from './main';

const meta = {
    title: 'Online Dashboards'
};

export default () => (
    <Layout meta={meta}>
        <Hero />
       <Main />
    </Layout>
)