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
    'https://prismic-io.s3.amazonaws.com/plotly%2Fb2e12ce8-4091-454e-9486-4999f5a59bc0_dash-logo-large.png',
};

export default () => (
  <Layout meta={meta}>
    <style dangerouslySetInnerHTML={{__html: styles}} />
    <HeroSection />
    <DashMain />
  </Layout>
);
