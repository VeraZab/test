import Layout from 'components/global/layout/layout';
import HeroSection from './hero';
import DashMain from './main';

import styles from './dash.styles.scss';

const meta = {
    title: 'Dash by Plotly',
    description: 'Dash is a Python framework for building analytical web applications. No JavaScript required.',
    url: 'https://plot.ly/products/dash/',
    image: 'https://images.plot.ly/static/marketing/meta/dash-og@2x.png'
};

export default () => (
    <Layout meta={meta} hideHeader="true">
        <style dangerouslySetInnerHTML={{__html: styles}}/>
        <HeroSection />
        <DashMain />
    </Layout>
)