import React from 'react';
import {
  Hero,
  HeroTop,
  HeroMessaging,
  HeroTitle,
  HeroSubtitle,
  HeroActions,
  HeroBottom,
} from 'components/hero';
import Head from 'components/global/head';

const HeroBottomStyles = {
  paddingBottom: '0px',
  paddingTop: '20px',
};

const HeroSubTitle = {
  textTransform: 'uppercase',
  color: '#9ce9ff',
  letterSpacing: '2px',
  fontWeight: 300,
  fontSize: '12px',
};

const HeroTopStyle = {
  padding: '120px 0',
};

class IndustriesHero extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.body.classList.remove('no-scroll');
  }

  render() {
    const header = this.props.header;
    const styles = this.props.style;
    styles.backgroundSize = 'cover';

    const meta = {
      title: `${header.title} | Industries`,
      description: `${header.desc}`,
    };

    return (
      <Hero heroWrapperStyle={styles} className="industries-hero">
        <Head meta={meta} />
        <HeroTop style={HeroTopStyle}>
          <HeroMessaging>
            <HeroSubtitle style={HeroSubTitle} children={header.group} />
            <HeroTitle children={header.title} />
            <HeroSubtitle children={header.desc} />
          </HeroMessaging>
          <HeroActions />
        </HeroTop>
        <HeroBottom style={HeroBottomStyles} />
      </Hero>
    );
  }
}
export default IndustriesHero;
