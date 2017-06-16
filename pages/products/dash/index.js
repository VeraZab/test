import Layout from '../../../components/global/layout/layout';
import HeroSection from './hero';
import Main from './main';

import styles from './dash.styles.scss';

const meta = {
    title: 'Dash by Plotly'
};

export default () => (
    <Layout meta={meta}>
        <style dangerouslySetInnerHTML={{__html: styles}}/>
        <HeroSection />
        <Main />
    </Layout>
)