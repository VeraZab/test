import Layout from '../../components/global/layout/layout';
import Hero from './hero';
import {ContentSection, ContentPane, Graphic, Title, Subtitle, Body} from '../../components/content-section/content-section';
import Buttons from '../../components/buttons/buttons';
import {Grid, GridItem} from '../../components/grid/grid';

const meta = {
    title: 'Powerpoint Online'
};
const buttons = [
    [
        {
            label: 'Request an OEM',
            title: 'See what you can create with Plotly!',
            icon: null,
            target: '_self',
            link: '/products/consulting-and-oem/',
            button: {
                classes: 'button button-small button-secondary'
            }
        },
        {
            label: 'Create a Chart',
            title: 'See what you can create with Plotly!',
            icon: {
                type: 'mdi',
                src: 'plus'
            },
            target: '_self',
            link: '/create',
            button: {
                classes: 'button button-primary'
            }
        },
        {
            label: 'Documentation',
            title: 'See what you can create with Plotly!',
            icon: null,
            target: '_blank',
            link: 'https://help.plot.ly/tutorials/',
            button: {
                classes: 'button button-small button-secondary'
            }
        }
    ],
    []
];

const itemStyles = {
    margin: '20px',
    padding: '20px'
};
export default () => (
    <Layout meta={meta}>
        <Hero buttons={buttons}/>

        <ContentSection>
            <ContentPane half center-vertically>
                <Title>
                    Agile, Visual Analytics
                </Title>
                <Body>
                <p>
                    Make world-class, shareable charts and dashboards in hours instead of weeks.
                </p>
                <p>
                    All Plotly charts are built with D3.js or WebGL, guaranteeing the best quality online graphics.
                </p>
                </Body>
            </ContentPane>
            <ContentPane half>
                <Graphic
                    image="https://images.plot.ly/plotly-marketing-pages/images/online-chart-maker/drill_down_2.gif"/>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half>
                <Graphic
                    image="https://images.plot.ly/plotly-marketing-pages/images/online-chart-maker/fitting_tools_3.gif"/>
            </ContentPane>
            <ContentPane half center-vertically>
                <Title>
                    World-Class Fitting Tools
                </Title>
                <Body>
                <p>
                    Run regression analysis for moving averages, peak fitting, linear lines of best fit, Gaussian fits,
                    exponential curves, and more.
                </p>

                </Body>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half center-vertically>
                <Title>
                    Built for OEM
                </Title>
                <Body>
                <p>
                    White-label the Plotly chart maker in your brand and integrate it as part of your product suite. We
                    can host the Plotly chart maker for you in the cloud at a URL of your choice. Plotly integrates its
                    chart maker with products in these industries:
                </p>
                <ul className="body-list blue">
                    <li>Data Aggregation, Data Wrangling, and Data Cleaning Platforms</li>
                    <li>Scientific Instrumentation Software</li>
                    <li>Online Data Sheet and Spec. Sheets Repositories that heavily use charts</li>
                    <li>Scientific &amp; Engineering Journals</li>
                    <li>Online News Outlets</li>
                </ul>
                <p>Simply add an “<a href="https://plot.ly/export/" target="_blank">Export to Plotly</a>” button or menu
                    option in your existing application. Data will be sent from your application to a customized Plotly
                    server for chart creating, editing, regression analysis, and export.</p>

                </Body>
            </ContentPane>
            <ContentPane half>
                <Graphic
                    image="https://images.plot.ly/plotly-marketing-pages/images/online-chart-maker/john_deer_3.png"/>
                <Graphic
                    image="https://images.plot.ly/plotly-marketing-pages/images/online-chart-maker/mutiny_3.png"/>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half>
                <Graphic
                    image="https://images.plot.ly/plotly-marketing-pages/images/online-chart-maker/publication_quality_4.png"/>
            </ContentPane>
            <ContentPane half center-vertically>
                <Title>
                    Publication-Quality Export
                </Title>
                <Body>
                <p>
                    Export Plotly charts to PNG, PDF, EPS, online embeds, and online slide decks. Plotly charts have
                    appeared in Science, Nature, the Washington Post, VICE, Wired, and the Boston Globe.
                </p>
                </Body>
            </ContentPane>

        </ContentSection>

        <ContentSection>
            <ContentPane half center-vertically>
                <Title>
                    Delightful Sharing
                </Title>
                <Body>
                <p>
                    Share charts with your team for online discussion, collaborative editing, and version history. Or,
                    keep your data private to yourself.
                </p>
                <p>
                    Plotly On-Premise also works with LDAP, SAML, and Active Directory.
                </p>
                </Body>
            </ContentPane>
            <ContentPane half>
                <Graphic
                    image="https://images.plot.ly/plotly-marketing-pages/images/online-chart-maker/sharing_5.png"/>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half>
                <Graphic
                    image="https://images.plot.ly/plotly-marketing-pages/images/online-chart-maker/chart_types_6.png"/>
            </ContentPane>
            <ContentPane half center-vertically>
                <Title>
                    28 Chart Types and Counting
                </Title>
                <Body>
                <p>
                    Plotly is the leading visualization platform for any analysis:
                </p>
                <ul>
                    <li>Statistical</li>
                    <li>Financial</li>
                    <li>Engineering</li>
                    <li>Scientific</li>
                    <li>Business Intelligence</li>
                    <li>Clinical/Pharmaceutical</li>
                    <li>Journalism</li>
                </ul>
                </Body>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane full center center-vertically>
                <Title>
                    Connect to Data Sources
                </Title>
                <Body>
                <p>Plotly charts can connect to almost any data source. Connected charts always show the most recent
                    data after they’re set up. We also build <a href="/products/consulting-and-oem/">custom
                        connectors</a> for customers.</p>

                <Grid columns="4" align-center className="small-logos" itemStyle={itemStyles}>
                    <GridItem>
                        <div className="grid-item-avatar"><img
                            src="https://images.plot.ly/plotly-marketing-pages/images/online-chart-maker/sql-logos/amazon_s3.png"
                            alt=""/></div>
                    </GridItem>
                    <GridItem>
                        <div className="grid-item-avatar"><img
                            src="https://images.plot.ly/plotly-marketing-pages/images/online-chart-maker/sql-logos/apache_drill.png"
                            alt=""/></div>
                    </GridItem>
                    <GridItem>
                        <div className="grid-item-avatar"><img
                            src="https://images.plot.ly/plotly-marketing-pages/images/online-chart-maker/sql-logos/elastic.png"
                            alt=""/></div>
                    </GridItem>
                    <GridItem>
                        <div className="grid-item-avatar"><img
                            src="https://images.plot.ly/plotly-marketing-pages/images/online-chart-maker/sql-logos/mysql.png"
                            alt=""/></div>
                    </GridItem>
                    <GridItem>
                        <div className="grid-item-avatar"><img
                            src="https://images.plot.ly/plotly-marketing-pages/images/online-chart-maker/sql-logos/postgresql.png"
                            alt=""/></div>
                    </GridItem>
                    <GridItem>
                        <div className="grid-item-avatar"><img
                            src="https://images.plot.ly/plotly-marketing-pages/images/online-chart-maker/sql-logos/parquet.png"
                            alt=""/></div>
                    </GridItem>
                    <GridItem>
                        <div className="grid-item-avatar"><img
                            src="https://images.plot.ly/plotly-marketing-pages/images/online-chart-maker/sql-logos/redshift.png"
                            alt=""/></div>
                    </GridItem>
                </Grid>
                </Body>
            </ContentPane>

            <ContentPane full center center-vertically>
                <Body>
                <Buttons className="gutter-top" align-center items={buttons[0]}/>
                </Body>
            </ContentPane>
        </ContentSection>

    </Layout>
)