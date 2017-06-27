import Layout from '../../components/global/layout/layout';
import Hero from './hero';
import Main from './main';

const meta = {
    title: 'Plotly.js: D3.js and WebGL charting library',
    desc: "The world’s most ambitious companies in engineering, CPG, finance, and energy are using Plotly.js for their dashboards, online products, and internal tools."
};

export default () => (
    <Layout meta={meta}>
        <Hero />
        <Main />
    </Layout>
)