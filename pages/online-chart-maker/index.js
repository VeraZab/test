import Layout from 'components/global/layout';
import Hero from './hero';
import {ContentSection, ContentPane, Graphic, Title, Subtitle, Body} from 'components/content-section';
import Buttons from 'components/buttons';
import {Grid, GridItem} from 'components/grid';


const meta = {
    title: 'Online Chart Maker',
    descrtiption: 'Create D3.js charts online for business, science, engineering, OEM, and journalism.',
    url: 'https://plot.ly/online-chart-maker/'
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
            target: '_blank',
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
                    image="https://images-plotly.imgix.net/plotly-marketing-pages/images/online-chart-maker/drill_down_2.gif"/>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half>
                <Graphic
                    image="https://images-plotly.imgix.net/plotly-marketing-pages/images/online-chart-maker/fitting_tools_3.gif"/>
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
                    image="https://images-plotly.imgix.net/plotly-marketing-pages/images/online-chart-maker/john_deer_3.png?auto=compress&auto=format"/>
                <Graphic
                    image="https://images-plotly.imgix.net/plotly-marketing-pages/images/online-chart-maker/mutiny_3.png?auto=compress&auto=format"/>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half>
                <Graphic
                    image="https://images-plotly.imgix.net/plotly-marketing-pages/images/online-chart-maker/publication_quality_4.png?auto=compress&auto=format"/>
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
                    Plotly On-Premises also works with LDAP, SAML, and Active Directory.
                </p>
                </Body>
            </ContentPane>
            <ContentPane half>
                <Graphic
                    image="https://images-plotly.imgix.net/plotly-marketing-pages/images/online-chart-maker/sharing_5.png?auto=compress&auto=format"/>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half>
                <Graphic
                    image="https://images-plotly.imgix.net/plotly-marketing-pages/images/online-chart-maker/chart_types_6.png?auto=compress&auto=format"/>
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
            <ContentPane half center-vertically text>
                <div className="pre-title">
                    Support Open-Source
                </div>
                <Title>
                    Built on the Shoulders of Giants
                </Title>
                <Body>
                <p>
                    Plotly's Online Chart Maker is built on a foundation of open-source libraries that are constantly
                    improving. To name a few:
                </p>

                <ul className="body-list blue">
                    <li><a href="https://github.com/d3" target="_blank">D3.js</a> ⟶ SVG graphics</li>
                    <li><a href="https://github.com/sheetjs" target="_blank">SheetJS</a> ⟶ Excel file parsing
                    </li>
                    <li><a href="https://github.com/handsontable" target="_blank">Handsontable</a> ⟶ Online
                        spreadsheet editor
                    </li>
                    <li><a href="https://facebook.github.io/react/" target="_blank">React</a> ⟶ Facebook's
                        library for UI building
                    </li>
                    <li><a href="https://github.com/plotly/plotly.js" target="_blank">Plotly.js</a> ⟶
                        Performance charting library
                    </li>
                </ul>

                <a href="https://moderndata.plot.ly/all-oss-used-in-plotly-cloud-and-plotly-on-premise/"
                   className="center" target="_blank">See all OSS libraries and licenses</a>

                </Body>
            </ContentPane>
            <ContentPane half graphic center-vertically>

                <Graphic link="https://moderndata.plot.ly/all-oss-used-in-plotly-cloud-and-plotly-on-premise/"
                         image="https://plot.ly/static/enterprise/img/alternatives/videos/3d.c876ca23cc00.jpg"/>
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
                            src="https://images-plotly.imgix.net/plotly-marketing-pages/images/online-chart-maker/sql-logos/amazon_s3.png?auto=compress&auto=format"
                            alt=""/></div>
                    </GridItem>
                    <GridItem>
                        <div className="grid-item-avatar"><img
                            src="https://images-plotly.imgix.net/plotly-marketing-pages/images/online-chart-maker/sql-logos/apache_drill.png?auto=compress&auto=format"
                            alt=""/></div>
                    </GridItem>
                    <GridItem>
                        <div className="grid-item-avatar"><img
                            src="https://images-plotly.imgix.net/plotly-marketing-pages/images/online-chart-maker/sql-logos/elastic.png?auto=compress&auto=format"
                            alt=""/></div>
                    </GridItem>
                    <GridItem>
                        <div className="grid-item-avatar"><img
                            src="https://images-plotly.imgix.net/plotly-marketing-pages/images/online-chart-maker/sql-logos/mysql.png?auto=compress&auto=format"
                            alt=""/></div>
                    </GridItem>
                    <GridItem>
                        <div className="grid-item-avatar"><img
                            src="https://images-plotly.imgix.net/plotly-marketing-pages/images/online-chart-maker/sql-logos/postgresql.png?auto=compress&auto=format"
                            alt=""/></div>
                    </GridItem>
                    <GridItem>
                        <div className="grid-item-avatar"><img
                            src="https://images-plotly.imgix.net/plotly-marketing-pages/images/online-chart-maker/sql-logos/parquet.png?auto=compress&auto=format"
                            alt=""/></div>
                    </GridItem>
                    <GridItem>
                        <div className="grid-item-avatar"><img
                            src="https://images-plotly.imgix.net/plotly-marketing-pages/images/online-chart-maker/sql-logos/redshift.png?auto=compress&auto=format"
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
