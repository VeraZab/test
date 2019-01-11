import Layout from 'components/global/layout';
import HeroSection from './hero';
import {ContentSection, ContentPane, Body} from 'components/content-section';
import React from 'react';
import styles from './newsroom.styles.scss';

const meta = {
  title: 'TEMPLATE',
  description: '',
};

export default () => (
  <Layout meta={meta}>
    <HeroSection data={meta} />
    <div className="sections">
      <style dangerouslySetInnerHTML={{__html: styles}} />
      <ContentSection>
        <ContentPane full center center-vertically text>
          <Body>
            <div className="webinars">
              <p>content goes here</p>
            </div>
          </Body>
        </ContentPane>
      </ContentSection>
    </div>
  </Layout>
);
