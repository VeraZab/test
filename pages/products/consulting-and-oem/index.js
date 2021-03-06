import Layout from 'components/global/layout';
import Hero from './hero';
import {ContentSection, ContentPane, Title, Body} from 'components/content-section';
import Buttons from 'components/buttons';
import {Grid, GridItem} from 'components/grid';
import React from 'react';
import {fetchData} from 'lib/fetchData';
import getCookies from 'next-cookies';

const contentSectionStyles = {
  paddingTop: '0px',
};

const cardBoxStyles = {
  marginTop: '40px',
  minWidth: '280px',
  maxWidth: '480px',
  marginRight: 'auto',
  marginLeft: 'auto',
};

const cardsStyles = {
  display: 'block',
};

const buttons = [
  {
    label: 'Contact Sales',
    title: 'Find out how we can work together.',
    icon: null,
    target: '_blank',
    link: 'https://go.plot.ly/contact-sales',
    button: {
      classes: 'button button-primary',
    },
  },
];

const oemButton = [
  {
    label: 'Contact Sales',
    title: 'Find out how we can work together.',
    icon: null,
    target: '_blank',
    link: 'https://go.plot.ly/contact-sales',
    button: {
      classes: 'button button-primary',
    },
  },
];

const gridItemsData = [
  {
    graphic:
      'https://prismic-io.s3.amazonaws.com/plotly%2F9a55d917-7d6c-43b4-a21e-f0c5fc18de49_ic_expertise_custom_charts.svg',
    label: 'Custom Chart Types',
  },
  {
    graphic:
      'https://prismic-io.s3.amazonaws.com/plotly%2F02bd242d-8285-4abb-b77c-4a5a89afce15_ic_expertise_features.svg',
    label: 'Feature Development',
  },
  {
    graphic:
      'https://prismic-io.s3.amazonaws.com/plotly%2F999ac323-634a-42ed-8a78-4039df212a87_ic_expertise_dev.svg',
    label: 'Plotly.js / Python / R / MATLAB Development',
  },
  {
    graphic:
      'https://prismic-io.s3.amazonaws.com/plotly%2Ffb24351f-c15a-4813-9002-a815387f87d9_ic_expertise_db.svg',
    label: 'Database Integrations',
  },
  {
    graphic:
      'https://prismic-io.s3.amazonaws.com/plotly%2Ff98f0765-741b-4646-ad60-f9aec49bbfca_ic_expertise_consulting.svg',
    label: 'Open Source Consulting',
  },
  {
    graphic:
      'https://prismic-io.s3.amazonaws.com/plotly%2Fa71a4d89-98ac-4e18-a324-7df0d1c87a71_ic_expertise_dash_dev.svg',
    label: 'Shiny (R) and Dash (Python) App Development',
  },
  {
    graphic:
      'https://prismic-io.s3.amazonaws.com/plotly%2Ffd53528a-a735-4906-8db4-088d72bdf76f_ic_expertise_whitelabel.svg',
    label: 'White Labeling Plotly Products',
  },
  {
    graphic:
      'https://prismic-io.s3.amazonaws.com/plotly%2F37f3a75d-02f5-4966-b1e6-8d071c180ad6_ic_expertise_integrated.svg',
    label: 'Advanced Integrations',
  },
];

export default class Consulting extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({req, pathname}) {
    return {pathname: (req && req.url) || pathname};
  }

  render() {
    const gridItems = gridItemsData.map((item, i) => {
      return (
        <GridItem key={i}>
          <div className="grid-item-graphic">
            <img src={item.graphic} alt={item.label} />
          </div>
          <div className="grid-item-label">{item.label}</div>
        </GridItem>
      );
    });

    return (
      <Layout
        meta={this.props.meta}
        nav={this.props.nav}
        pathname={this.props.pathname}
        className="consulting--layout"
      >
        <Hero />
        <ContentSection style={contentSectionStyles}>
          <ContentPane full center>
            <Title>
              Plotly's engineering team has deep expertise in technical computing, open technologies
              and complex visualization.
            </Title>
            <Body>
              <p>
                Whether you are interested in the development of a new chart type, or need help with
                a commercial application, our experienced engineering staff can provide the guidance
                and perspective to ensure that your project is a success. Contact us directly to
                learn more.
              </p>
              <div style={{paddingTop: '24px'}}>
                <Buttons items={buttons} align-center className="padding-top" />
              </div>
            </Body>
          </ContentPane>
        </ContentSection>

        <ContentSection
          className="light-grey-bg"
          style={{
            ...contentSectionStyles,
            backgroundColor: '#f2f4f5',
            paddingTop: '50px',
          }}
        >
          <ContentPane full center>
            <Body>
              <Grid columns="4">{gridItems}</Grid>
            </Body>
          </ContentPane>
        </ContentSection>
        <ContentSection className="background--oem">
          <ContentPane half center-vertically text className="sixy-five">
            <Title>Use our platform, or build your own!</Title>
            <h2 className="content-section-h2">
              Plotly is the leading data visualization technology provider. With our open-source
              software, we help companies launch cutting edge, data visualization UIs in their
              products and internal analytics platforms.
            </h2>
            <Body>
              <p>
                Does your product have an ancient charting tool that needs to be replaced? Are your
                customers asking for more advanced data visualization? We’re here to help. Through
                Plotly.js, Dash, and years of launching successful data visualization products,
                we’re on a mission to make every analytics product have first-class data
                visualization frontends.
              </p>

              <Buttons items={oemButton} className="padding-top" />
            </Body>
          </ContentPane>
          <ContentPane half graphic center-vertically />
        </ContentSection>
      </Layout>
    );
  }
}

Consulting.getInitialProps = async context => {
  const meta = {
    title: 'Advanced Development',
    description:
      "Plotly's engineering team has deep expertise in technical computing, open technologies and complex visualization.",
    url: 'https://plot.ly/consulting-and-oem/',
    twitter: {
      label1: 'Services Offered',
      data1:
        'Custom Chart Types, Feature Development, Database Integrations, Open Source Consulting, and more.',
    },
    image:
      'https://plotly.cdn.prismic.io/plotly/d2d3df15f876ab585878dfb64733e55feab9ddb7_plotly-logo.png',
  };
  const response = await fetchData(getCookies(context)['io.prismic.preview']);
  const nav = response.find(doc => doc.type === 'nav');

  return {
    nav,
    meta,
  };
};
