import React from 'react';
import {HeroTop, HeroMessaging, HeroTitle, HeroSubtitle, HeroActions} from '../../components/hero/hero';
import Buttons from '../../components/buttons/buttons';
import {Browser} from '../../components/browser/browser';

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

class IndustriesHero extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.body.classList.remove('no-scroll');
    }

    getQuoteWithIndexFromData(index, header) {
      return (header.quotes[index]) ? <p className="single-customer-stories__quote">"{header.quotes[index].desc}"</p>
       : null;
    }

    render() {
        const header = this.props.header;
        const sponsors = this.props.header.sponsors;
        const quoteItemOne = this.getQuoteWithIndexFromData(0, header);
        const quoteItemTwo = this.getQuoteWithIndexFromData(1, header);
        const gridItems = <img src={sponsors[0].graphic} alt={sponsors[0].label} />;

        return (
          <HeroTop>
              <HeroMessaging>
                  {gridItems}
                  <p className="single-customer-stories__desc">{header.desc}</p>
                  {quoteItemOne}
                  {quoteItemTwo}
              </HeroMessaging>
              <HeroActions>
              </HeroActions>
          </HeroTop>
        );
    }
}
export default IndustriesHero;
