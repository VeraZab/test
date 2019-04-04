import React from 'react';
import {Hero, HeroTop, HeroMessaging, HeroSubtitle, HeroActions, HeroBottom} from 'components/hero';
import Buttons from 'components/buttons';

const HeroButtons = [
  [
    {
      label: 'Follow the steps below',
      subtitle: null,
      title: '',
      icon: null,
      target: '_self',
      link: '#steps',
      button: {
        classes: 'button button-primary',
      },
    },
  ],
  [],
];

const HeroStyles = {
  minHeight: '0',
  paddingTop: '0px',
};

const HeroWrapperStyle = {
  backgroundImage:
    'url(https://prismic-io.s3.amazonaws.com/plotly%2F304097d0-9588-4b4a-a761-9436a8e0ffd8_hero-pricing%402x.png)',
  backgroundSize: '1640px',
  backgroundPosition: '50% 50%',
  backgroundRepeat: 'no-repeat',
};

const HeroBottomStyles = {
  paddingBottom: '0px',
  paddingTop: '50px',
};

export default class HeroSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Hero heroWrapperStyle={HeroWrapperStyle} style={HeroStyles}>
        <HeroTop>
          <HeroMessaging>
            <h1 className="hero-title">Export to Plotly</h1>
            <HeroSubtitle>
              Learn how you can build a data exporter for your site, to easily send data from your
              web site to graph in Plotly. Plotly offers a clean, simple, and beautiful
              visualization tool for your data and your users.
            </HeroSubtitle>
          </HeroMessaging>
          <HeroActions>
            <Buttons items={HeroButtons[0]} />
          </HeroActions>
        </HeroTop>
        <HeroBottom style={HeroBottomStyles}>
          <div className="logos-display logos-clickable">
            <h3>See how our partners integrate with Plotly</h3>
            <div className="logos-display-wrapper">
              <div className="logo-item">
                <a target="_blank" href="https://www.data.gov/meta/open-apps/">
                  <img src="https://prismic-io.s3.amazonaws.com/plotly%2Fc09e3635-f45c-4c8d-a7cc-f2bf5bcfc2a6_datagov_blue.b196bb1cdcf1.png" />
                </a>
              </div>
              <div className="logo-item">
                <a target="_blank" href="http://blog.import.io/post/plotly-integration">
                  <img src="https://prismic-io.s3.amazonaws.com/plotly%2Fc4058d09-7c95-4e9f-81d0-b0b94dc0df8b_importio_blue.921b16da2c11.png" />
                </a>
              </div>
              <div className="logo-item">
                <a target="_blank" href="https://www.quandl.com/help/plotly">
                  <img src="https://prismic-io.s3.amazonaws.com/plotly%2Fe3815180-5fc5-45c4-9fcc-305d4130c8d8_quandl_blue.88e7b8823a5c.png" />
                </a>
              </div>
              <div className="logo-item">
                <a
                  target="_blank"
                  href="http://www.vernier.com/news/2014/04/03/vernier-data-share-and-plot-ly/"
                >
                  <img src="https://prismic-io.s3.amazonaws.com/plotly%2Fb920c3b3-909b-4953-943b-d8cf0594fd6b_vernier_blue.4d3c32d41335.png" />
                </a>
              </div>
              <div className="logo-item">
                <a
                  target="_blank"
                  href="http://blog.plot.ly/post/70293893434/automatically-grab-data-from-an-image-with"
                >
                  <img src="https://prismic-io.s3.amazonaws.com/plotly%2Fb2781aa6-5f69-4f55-9216-1df097c6af79_webplotdigitizer_blue.043cf6f2b8f1.png" />
                </a>
              </div>
            </div>
          </div>
        </HeroBottom>
      </Hero>
    );
  }
}
