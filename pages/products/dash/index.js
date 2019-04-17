import Layout from 'components/global/layout';
import HeroSection from './hero';
import DashMain from './main';
import styles from './dash.styles.scss';
import {fetchData} from 'lib/fetchData';
import getCookies from 'next-cookies';

const ProductsDash = props => (
  <Layout meta={props.meta} nav={props.nav}>
    <style dangerouslySetInnerHTML={{__html: styles}} />
    <HeroSection />
    <DashMain />
  </Layout>
);

ProductsDash.getInitialProps = async context => {
  const meta = {
    title: 'Dash by Plotly',
    description:
      'Dash is a Python framework for building analytical web applications. No JavaScript required.',
    url: 'https://plot.ly/products/dash/',
    image:
      'https://prismic-io.s3.amazonaws.com/plotly%2F0285e588-4600-4f7d-8954-0999604356a5_dash+logo.png',
  };
  const response = await fetchData(getCookies(context)['io.prismic.preview']);
  const nav = response.find(doc => doc.type === 'nav');

  return {
    nav,
    meta,
  };
};

export default ProductsDash;
