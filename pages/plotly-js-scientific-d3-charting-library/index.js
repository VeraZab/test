import Layout from 'components/global/layout';
import Hero from './hero';
import Main from './main';

const meta = {
    title: 'Plotly.js: D3.js and WebGL charting library',
    desc: "The world’s most ambitious companies in engineering, CPG, finance, and energy are using Plotly.js for their dashboards, online products, and internal tools.",
    url: 'https://plot.ly/plotly-js-scientific-d3-charting-library/'

};

export default () => (
    <Layout meta={meta}>
        <Hero />
        <Main />
    </Layout>
)