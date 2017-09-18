import React from 'react';
import {Hero, HeroTop, HeroMessaging, HeroTitle, HeroSubtitle, HeroActions, HeroBottom} from 'components/hero';
import Buttons from 'components/buttons';
import {Browser} from 'components/browser';

const HeroWrapperStyle = {
    // backgroundImage: 'url(/static/images/banner-splash.jpg)',
    backgroundSize: '1640px',
    backgroundPosition: '50% 80%',
    backgroundRepeat: 'no-repeat'
};

const HeroBottomStyles = {
    paddingBottom: '0px',
    paddingTop: '20px'
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
          <Hero heroWrapperStyle={HeroWrapperStyle}>
              <HeroTop>
                  <HeroMessaging>
                      <HeroTitle children={header.title} />
                      <HeroSubtitle children={header.desc} />
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
