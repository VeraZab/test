import Layout from 'components/global/layout';
import {ContentSection, ContentPane, Title, Body} from 'components/content-section';
import Buttons from 'components/buttons';
import data from  '../static/data/products/customer-stories.json';
import CustomerServiceHero from './customer-stories/hero';
import CustomerServiceMain from './customer-stories/main';
import styles from './customer-stories/customer-stories.styles.scss'


export default () => (
    <Layout meta={data.meta}>
      <style dangerouslySetInnerHTML={{__html: styles}}/>
        <CustomerServiceHero header={data.header} />
        <ContentSection className="background-color-light-1 center">
          <ContentPane full center center-vertically>
              <Body align-center>
                  <div className="cards stories" style={data.storyCard.style}>
                    {data.stories.map((story, i) => {
                      return (<CustomerServiceMain style={data.storyCard.style} key={i} story={story} />);
                    })}
                  </div>
              </Body>
            </ContentPane>
          </ContentSection>
        <ContentSection>
            <ContentPane full center center-vertically text>
                <Title>
                  {data.footer.title}
                </Title>
                <Body>
                  <Buttons align-center items={data.footer.cta}/>
                </Body>
            </ContentPane>
        </ContentSection>
    </Layout>
)
