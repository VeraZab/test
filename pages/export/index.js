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
    'https://prismic-io.s3.amazonaws.com/plotly%2F4359caa7-42dd-4a63-95d2-e37a35a154f8_plotly+logo.png',
};

export default () => (
  <Layout meta={meta}>
    <style dangerouslySetInnerHTML={{__html: Styles}} />
    <HeroSection />
    <Main />
  </Layout>
);
