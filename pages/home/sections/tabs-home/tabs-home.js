import React from "react";
import BrowserWrapper
    from "../../../../components/elements/browser-wrapper/browser-wrapper";
import styles from "./tabs-home.styles.scss";
import {StickyContainer, Sticky} from 'react-sticky';
import ReactSwipe from 'react-swipe';

const tabsData = [
    {
        id: "1",
        title: "Make a Chart",
        slug: "make-a-chart",
        icon: "https://images.plot.ly/plotly-marketing-pages/images/new-branding/icons/ create-items-icons/images/ic_chart_28@2x.png",
        content: {
            heading: "Expressive Charts",
            graphic_type: "image",
            graphic_src: "https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-marketing-pages/images/new-branding/graphics/plotly_home_graph.png",
            description: "Easily turn your data into eye-catching and informative graphics using our sophisticated, open source, visualization library and our online chart creation tool.",
            button_text: "Create your first chart",
            button_link: "https://plot.ly/create/"
        }
    },
    {
        id: "2",
        title: "Make a Dashboard",
        slug: "make-a-dashboard",
        icon: "https://images.plot.ly/plotly-marketing-pages/images/new-branding/icons/ create-items-icons/images/ic_dashboard_28@2x.png",
        content: {
            heading: "Dazzling Dashboards",
            graphic_type: "image",
            graphic_src: "https://now.plot.ly/static/images/powerful_dashboards.png",
            description: "These aren’t your dad’s dashboards. Plotly dashboards are web-based, scriptable in Python and R, and feature Plotly’s best-in-class D3 graphics.",
            button_text: "Create your first dashboard",
            button_link: "https://plot.ly/dashboard/create"
        }
    },
    {
        id: "3",
        title: "Make a Presentation",
        slug: "make-a-presentation",
        icon: "https://images.plot.ly/plotly-marketing-pages/images/new-branding/icons/ create-items-icons/images/ic_presentation_28@2x.png",
        content: {
            heading: "Spectacle Presentations",
            graphic_type: "image",
            graphic_src: "https://now.plot.ly/static/images/stunning-presentations.png",
            description: "Create, present, and share slide decks that have interactive Plotly charts. Coders can create presentations in Python and R or clickers can download Spectacle Editor.",
            button_text: "Create your first presentation",
            button_link: "https://plot.ly/organize/home?create=presentation"
        }
    }
];

const swipeOptions = {
    callback() {
        // console.log('slide changed');
    },
    transitionEnd() {
        // console.log('ended transition');
    }
};


export default class TabsHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: "1",
            tab: tabsData[0]
        };
    }

    setTab(tab) {
        this.setState({
            tab: tab
        });

        let index = tab.id - 1;

        this.refs.reactSwipe.slide(index, 0);
    }

    handleClick(event) {
        event.preventDefault();

        let el = event.target;

        this.setState({
            tabIndex: el.attributes.getNamedItem("data-tab-index").value
        });

        // console.log(el.attributes.getNamedItem("data-tab-index").value);
    }

    prev() {

        let currentIndex = this.state.tab.id - 1;
        let prevIndex;

        if (currentIndex !== 0) {
            prevIndex = currentIndex - 1;
        } else {
            prevIndex = 0;
        }

        this.setState({
            tab: tabsData[prevIndex]
        });

        this.refs.reactSwipe.prev();
    }

    next() {

        let currentIndex = this.state.tab.id - 1;
        let nextIndex;

        if (currentIndex !== tabsData.length) {
            nextIndex = currentIndex + 1;
        } else {
            nextIndex = tabsData.length;
        }

        this.setState({
            tab: tabsData[nextIndex]
        });

        this.refs.reactSwipe.next();
    }

    componentDidUpdate(){
        this.refs.reactSwipe.swipe.setup();
    }

    updateDimensions = () => {

        // let w = window,
        //     d = document,
        //     documentElement = d.documentElement,
        //     body = d.getElementsByTagName('body')[0],
        //     width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        //     height = w.innerHeight || documentElement.clientHeight || body.clientHeight;
        //
        // this.setState({width: width, height: height});


        // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
    };

    componentWillMount() {
        // ;
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.refs.reactSwipe.swipe.setup())
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.refs.reactSwipe.swipe.setup())
    }


    render() {


        let mobileTabsLeft = () => {
            if (this.state.tab.id > 1) {
                return (<div className="tab pagination active" onClick={() => {
                    this.prev()
                }}>
                    <div className="tab-label">
                        <svg viewBox="0 0 24 24">
                            <path fill="#000000" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
                        </svg>
                    </div>
                </div>)
            } else {
                return (<div className="tab pagination active not-clickable">
                    <div className="tab-label">
                        <svg viewBox="0 0 24 24">
                            <path fill="#000000" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
                        </svg>
                    </div>
                </div>)
            }
        };

        let mobileTabsRight = () => {

            if (this.state.tab.id < tabsData.length) {
                return (<div className="tab  pagination active" onClick={() => {
                    this.next()
                }}>
                    <div className="tab-label">
                        <svg viewBox="0 0 24 24">
                            <path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                        </svg>
                    </div>
                </div>)
            } else {
                return (<div className="tab pagination active not-clickable">
                    <div className="tab-label">
                        <svg viewBox="0 0 24 24">
                            <path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                        </svg>
                    </div>
                </div>)
            }
        };


        let mobileTabs = () => (
            <div
                className={`tab active`}>
                <div className="tab-icon">
                    <div className="img-wrap">
                        <img
                            src={this.state.tab.icon}
                            alt={this.state.tab.title}
                        />
                    </div>
                </div>
                <div className="tab-label">
                    {this.state.tab.title}
                </div>
            </div>
        );

        let tabs = tabsData.map(tab => {
            return (
                <div key={tab.id}
                     className={`tab ${this.state.tab.id === tab.id ? "active" : ""}`}
                     onClick={() => {
                         this.setTab(tab)
                     }}>
                    <div className="tab-icon">
                        <div className="img-wrap">
                            <img
                                src={tab.icon}
                                alt={tab.title}
                            />
                        </div>
                    </div>
                    <div className="tab-label">
                        {tab.title}
                    </div>
                </div>
            );
        });
        let tabsContent = tabsData.map(tab => {
            return (
                <div key={tab.id}
                     className={`tabs-content ${this.state.tab.id === tab.id ? "active" : ""}`}>
                    <div className="tabs-content-wrapper">
                        <div className="panes panes-half">
                            <div className="pane">
                                <div className="graphic graphic-browser">
                                    <BrowserWrapper>
                                        <img
                                            src={tab.content.graphic_src}
                                            alt={tab.title}
                                        />
                                    </BrowserWrapper>
                                </div>
                            </div>
                            <div className="pane padding-l">
                                <div className="pane-wrapper">
                                    <h3 className="title-sm padding-bottom">
                                        {tab.content.heading}
                                    </h3>
                                    <p>
                                        {tab.content.description}
                                    </p>
                                    <div className="buttons">
                                        <a href={tab.content.button_link} target="_blank" className="button button-primary">
                                            {tab.content.button_text}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className="hidden delay-med">
                <style dangerouslySetInnerHTML={{__html: styles}}/>

                <div className="tabs">
                    <StickyContainer>


                        <div className="tabs-header">
                            <div className="tabs-header-wrapper mobile-up">
                                {tabs}
                            </div>
                            <Sticky topOffset={-72} bottomOffset={148} className="sticky mobile-only">
                                <div className="tabs-header-wrapper mobile-only">
                                    {mobileTabsLeft()}{mobileTabs()}{mobileTabsRight()}
                                </div>
                            </Sticky>

                        </div>

                        <div className="mobile-up hidden delay-med">
                            {tabsContent}
                        </div>

                        <div className="mobile-tab-content">
                            <ReactSwipe ref="reactSwipe" className="hidden delay-med" swipeOptions={{
                                continuous: false,
                                callback: (i) => {
                                    // console.log(this); // refers to component
                                    // console.log(i); // index
                                    this.setTab(tabsData[i]);

                                }
                            }}

                                        key={tabsData.length}>
                                {tabsContent}
                            </ReactSwipe>
                        </div>

                    </StickyContainer>

                </div>
            </div>
        );
    }
}
