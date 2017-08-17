import React from 'react';
import {
    Hero,
    HeroTop,
    HeroMessaging,
    HeroTitle,
    HeroSubtitle,
    HeroActions,
    HeroBottom
} from '../../components/hero/hero';
import Buttons from '../../components/buttons/buttons';
import {Browser} from '../../components/browser/browser';

const HeroWrapperStyle = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url("/static/enterprise/img/customer-stories/enterprise-customer-stories-banner.jpg")'
};

const heroStyles = {
    minHeight: '400px'
}


const HeroBottomStyles = {
    paddingBottom: '0px',
    paddingTop: '0px'
};


const header = {
    sitename: 'Plotly',
    title: 'Visualize Data, Together',
    description: 'Plotly is the modern platform for agile business intelligence and data science.',
    url: 'https://plot.ly',
    image: '',
    tags: [],
    publisher: 'https://www.facebook.com/Plotly/',
    twitter: {
        label1: '',
        data1: '',
        label2: '',
        data2: '',
        site: '@plotlygraphs'
    }
};

class CustomerServiceHero extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.body.classList.remove('no-scroll');
    }

    render() {
        const header = this.props.header;

        return (
            <Hero styles={heroStyles} heroWrapperStyle={HeroWrapperStyle}>
                <HeroTop>
                    <HeroMessaging>
                        <HeroTitle children={header.title}/>
                        <HeroSubtitle children={header.desc}/>
                    </HeroMessaging>
                    <HeroActions>
                    </HeroActions>
                </HeroTop>
                <HeroBottom style={HeroBottomStyles}>
                </HeroBottom>
            </Hero>
        );
    }
}
export default CustomerServiceHero;
