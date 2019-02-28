import Layout from 'components/global/layout';
import HeroSection from './hero';
import Main from './main';
import Styles from './export.styles.scss';

const meta = {
  title: 'Export to Plotly',
  description:
    'Learn how you can build a data exporter for your site, to easily send data from your web site to graph in Plotly. Plotly offers a clean, simple, and beautiful visualization tool for your data and your users.',
  url: 'https://plot.ly/database-connectors/',
  image:
    'https://prismic-io.s3.amazonaws.com/plotly%2Fb2e12ce8-4091-454e-9486-4999f5a59bc0_dash-logo-large.png',
};

export default () => (
  <Layout meta={meta}>
    <style dangerouslySetInnerHTML={{__html: Styles}} />
    <HeroSection />
    <Main />
  </Layout>
);
