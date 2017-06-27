import Layout from '../../../components/global/layout/layout';
import Hero from './hero';

import {ContentSection, ContentPane, Title, Body} from '../../../components/content-section/content-section';
import Buttons from '../../../components/buttons/buttons';
import {Grid, GridItem} from '../../../components/grid/grid';
const meta = {
    title: 'Advanced Development • Plotly',
    description: "Plotly's engineering team has deep expertise in technical computing, open technologies and complex visualization.",
    image: '',
    twitter: {
        label1: 'Services Offered',
        data1: 'Custom Chart Types, Feature Development, Database Integrations, Open Source Consulting, and more.'
    }
};

const contentSectionStyles = {
    paddingTop: '0px'
};
const cardBoxStyles = {
    marginTop: '40px',
    width: '480px',
    marginRight: 'auto',
    marginLeft: 'auto'
};

const cardsStyles = {
    display: 'block'
};

const buttons = [
    {
        label: 'Contact Us',
        title: 'Find out how we can work together.',
        icon: null,
        target: '_blank',
        link: 'https://plotly.typeform.com/to/mH1Cpb',
        button: {
            classes: 'button button-primary'
        }
    }
];

const gridItemsData = [
    {
        graphic: 'https://images.plot.ly/plotly-marketing-pages/images/new-branding/advanced-development/expertise-icons/ic_expertise_custom_charts.svg',
        label: 'Custom Chart Types'
    },
    {
        graphic: 'https://images.plot.ly/plotly-marketing-pages/images/new-branding/advanced-development/expertise-icons/ic_expertise_features.svg',
        label: 'Feature Development'
    },
    {
        graphic: 'https://images.plot.ly/plotly-marketing-pages/images/new-branding/advanced-development/expertise-icons/ic_expertise_dev.svg',
        label: 'Plotly.js / Python / R / MATLAB Development'
    },
    {
        graphic: 'https://images.plot.ly/plotly-marketing-pages/images/new-branding/advanced-development/expertise-icons/ic_expertise_db.svg',
        label: 'Database Integrations'
    },
    {
        graphic: 'https://images.plot.ly/plotly-marketing-pages/images/new-branding/advanced-development/expertise-icons/ic_expertise_consulting.svg',
        label: 'Open Source Consulting'
    },
    {
        graphic: 'https://images.plot.ly/plotly-marketing-pages/images/new-branding/advanced-development/expertise-icons/ic_expertise_dash_dev.svg',
        label: 'Shiny (R) and Dash (Python) App Development'
    },
    {
        graphic: 'https://images.plot.ly/plotly-marketing-pages/images/new-branding/advanced-development/expertise-icons/ic_expertise_whitelabel.svg',
        label: 'White Labeling Plotly Products'
    },
    {
        graphic: 'https://images.plot.ly/plotly-marketing-pages/images/new-branding/advanced-development/expertise-icons/ic_expertise_integrated.svg',
        label: 'Advanced Integrations'
    }
];



export default class Consulting extends React.Component {
    constructor(props) {
        super(props);
    }


    static async getInitialProps({req, pathname}) {
        return {pathname: req && req.url || pathname}
    }


    render() {

        const gridItems = gridItemsData.map(item => {
            return (
                <GridItem>
                    <div className="grid-item-graphic">
                        <img src={item.graphic} alt={item.label} />
                    </div>
                    <div className="grid-item-label">
                        {item.label}
                    </div>
                </GridItem>
            )
        });

        return (
            <Layout meta={meta} pathname={this.props.pathname}>
                <Hero />

                <ContentSection style={contentSectionStyles} className="bottom-light-bg">
                    <ContentPane full center>
                        <Title>
                            Plotly's engineering team has deep expertise in technical computing, open technologies and
                            complex
                            visualization.
                        </Title>
                        <Body>
                        <p>
                            Whether you are interested in the development of a new chart type, or need help with a
                            commercial
                            application, our experienced engineering staff can provide the guidance and perspective to
                            ensure
                            that your project is a success. Contact us directly to learn more.
                        </p>
                        <div className="cards" style={cardsStyles}>
                            <div className="cards-wrapper center">
                                <div className="card-simple" style={cardBoxStyles}>
                                    <div className="card-simple-wrapper">
                                        <div className="card-simple-body">
                                            <div className="title-med">
                                                Introductory Engagement
                                            </div>
                                            <div className="title-med padding-top">
                                                $15,000
                                            </div>
                                            <Buttons items={buttons} align-center className="padding-top"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Body>
                    </ContentPane>
                </ContentSection>

                <ContentSection style={contentSectionStyles}>
                    <ContentPane full center>

                        <Body>
                        <Grid columns="4">
                            {gridItems}
                        </Grid>
                        </Body>
                    </ContentPane>
                </ContentSection>

            </Layout>
        )
    }
}

