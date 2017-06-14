import {
    ContentSection,
    ContentPane,
    Title,
    Subtitle,
    Body,
    Graphic
} from '../../components/content-section/content-section';
import Buttons from '../../components/buttons/buttons';


const bg = {
    backgroundImage: "linear-gradient(27deg, #1E427D 0%, #1D9CFC 100%)"
};

const DemoButtons = [
    [
        {
            label: 'Live Demo →',
            subtitle: null,
            title: '',
            icon: null,
            target: '_self',
            link: '#',
            button: {
                classes: 'button button-primary'
            }
        }
    ],
    []
];

export default () => (
    <div>

        <ContentSection className="dash-section-productive">
            <ContentPane full center-vertically center text>
                <Title>
                    Dash is productive
                </Title>
                <Body>
                <p>
                    Before dash, apps like these would require an entire team of engineers and designers to create.
                </p>
                <div className="dash-graphics">
                    <div className="dash-graphics-wrapper">
                        <img src="/static/images/dash/productive-image.png" alt=""/>
                    </div>
                    <div className="graphics-wrapper">
                        <img src="/static/images/dash/Code.png" alt=""/>
                    </div>
                </div>
                </Body>
            </ContentPane>
        </ContentSection>
        {/*2 graphics*/}
        <ContentSection className="dash-section-features-thirds">
            <ContentPane thirds center-vertically>
                <div className="icon">
                    <img src="/static/images/dash/lightweight-icon.png" alt="Dash is Lightweight"/>
                </div>
                <div className="title">
                    Lightweight
                </div>
                <p>
                    An app like this weighs in at just 80 lines of pure Python, with graphs and dropdowns populated
                    directly from Pandas dataframes.
                </p>
            </ContentPane>
            <ContentPane thirds center-vertically>
                <div className="icon">
                    <img src="/static/images/dash/direct-control-icon.png" alt="Dash provides direct control"/>
                </div>
                <div className="title">
                    Direct Control
                </div>
                <p>
                    Dash provides a direct interface between your data analysis code and the UI controls required to
                    explore it.
                </p>
            </ContentPane>
            <ContentPane thirds center-vertically>
                <div className="icon">
                    <img src="/static/images/dash/composable-icon.png" alt="Dash is Composable and Modular"/>
                </div>
                <div className="title">
                    Composable & modular
                </div>
                <p>
                    Dash apps require very little boilerplate to get started but scale out into large apps with many
                    elements easily.
                </p>
            </ContentPane>
        </ContentSection>
        <ContentSection className="dash-section-dash-apps">
            <ContentPane full center center-vertically text>
                <Title>
                    Applications built with Dash
                </Title>
                <Body>
                <p>
                    Add a slider to chart, monitor your experiments, or roll your own business intelligence platform.
                </p>
                <p>
                    Dash enables data scientists, analysts, and scientists working in Python to build their own
                    interfaces.
                </p>
                </Body>
            </ContentPane>
        </ContentSection>


        <ContentSection>
            <ContentPane half center-vertically text>
                <div className="pre-title">
                    Example App #1
                </div>
                <Title>
                    Bank Repo Exploration
                </Title>
                <Body>
                <p>
                    Drill down into the World Bank’s data repository with this app that includes dropdowns, sliders, and
                    tables.
                </p>

                <Buttons className="gutter-top" items={DemoButtons[0]}/>

                </Body>
            </ContentPane>
            <ContentPane half graphic>
                <Graphic
                    image="/static/images/dash/example-app-1-graphic.png"/>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half graphic>
                <Graphic
                    image="/static/images/dash/example-app-2-graphic.png"/>
            </ContentPane>
            <ContentPane half center-vertically text>
                <div className="pre-title">
                    Example App #2
                </div>
                <Title>
                    Satelite Exploration
                </Title>
                <Body>
                <p>
                    Explore satellites in real-time.
                </p>
                <Buttons className="gutter-top" items={DemoButtons[0]}/>
                </Body>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half center-vertically text>
                <div className="pre-title">
                    Example App #3
                </div>
                <Title>
                    The recession in 255 charts
                </Title>
                <Body>
                <p>
                    How the recession reshaped the economy, in 255 charts. Build interactive reports and documents with
                    dash.
                </p>
                <Buttons className="gutter-top" items={DemoButtons[0]}/>
                </Body>
            </ContentPane>
            <ContentPane half graphic>
                <Graphic
                    image="/static/images/dash/example-app-3-graphic.png"/>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane half graphic>
                <Graphic
                    image="/static/images/dash/example-app-4-graphic.png"/>
            </ContentPane>
            <ContentPane half center-vertically text>
                <div className="pre-title">
                    Example App #4
                </div>
                <Title>
                    Web-based spreadsheets
                </Title>
                <Body>
                <p>
                    This dash app binds models to a web-based spreadsheet. We’re helping companies migrate away from VBA
                    and Excel to Python and Dash.
                </p>
                <Buttons className="gutter-top" items={DemoButtons[0]}/>
                </Body>
            </ContentPane>
        </ContentSection>

        <ContentSection className="dash-section-open-source">
            <ContentPane full center-vertically center text>
                <Title>
                    Open Source with Enterprise Addons
                </Title>
                <Body>
                <p>
                    We’re strong believers that the future of technical computing and business intelligence is open
                    source. Dash is MIT licensed. Run Dash on your desktop environment for free.
                </p>
                <p>
                    Using dash inside your enterprise? Plotly offers 1-click deployment, permissioning, and more. <a
                    href="#" className="special-link"><span className="special-link-label">Learn more →</span></a>
                </p>
                </Body>
            </ContentPane>
        </ContentSection>


        <ContentSection className="dash-section-more-details">
            <ContentPane full center-vertically center text>
                <Body>
                <div className="cards stories">
                    <div className="card card-with-image">
                        <div className="card-wrapper">
                            <div className="card-image" style={bg}>
                                <div className="card-image-label">
                                    Enterprise Deployment
                                </div>
                            </div>
                            <div className="card-body">
                                <blockquote>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque deleniti
                                    dolorem exercitationem explicabo fugiat id itaque laboriosam laborum maiores
                                    molestias provident quam quidem quos, repudiandae soluta, sunt temporibus tenetur?
                                </blockquote>
                            </div>
                            <div className="card-action">
                                <a className="card-action-link" href="#">Learn More →</a>
                            </div>
                        </div>
                    </div>
                    <div className="card card-with-image">
                        <div className="card-wrapper">
                            <div className="card-image" style={bg}>
                                <div className="card-image-label">
                                    Web-based Spreadsheets
                                </div>
                            </div>
                            <div className="card-body">
                                <blockquote>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque deleniti
                                    dolorem exercitationem explicabo fugiat id itaque laboriosam laborum maiores
                                    molestias provident quam quidem quos, repudiandae soluta, sunt temporibus tenetur?
                                </blockquote>
                            </div>
                            <div className="card-action">
                                <a className="card-action-link" href="#">Learn More →</a>
                            </div>
                        </div>
                    </div>
                </div>
                </Body>
            </ContentPane>
        </ContentSection>

    </div>
)
