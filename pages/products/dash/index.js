import Layout from 'components/global/layout';
import HeroSection from './hero';
import DashMain from './main';
import styles from './dash.styles.scss';

const meta = {
  title: 'Dash by Plotly',
  description:
    'Dash is a Python framework for building analytical web applications. No JavaScript required.',
  url: 'https://plot.ly/products/dash/',
  image:
    'https://prismic-io.s3.amazonaws.com/plotly%2F2ca29fb6-f903-4383-b92f-8c62c9c910d6_dash-logo.png',
};

export default () => (
  <Layout meta={meta}>
    <style dangerouslySetInnerHTML={{__html: styles}} />
    <HeroSection />
    <DashMain />
  </Layout>
);
