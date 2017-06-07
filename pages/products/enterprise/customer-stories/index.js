import Layout from '../../../../components/global/layout/layout';
import {ContentSection, ContentPane, Title, Body} from '../../../../components/content-section/content-section';
import Buttons from '../../../../components/buttons/buttons';
import data from  '../../../../data/products/customer-stories.json';
import CustomerServiceHero from './hero';
import CustomerServiceMain from './main';

export default () => (
    <Layout meta={data.meta}>
        <CustomerServiceHero header={data.header} />
        <ContentSection className="background-color-light-1 center">
          <Body>
            <div className="cards stories">
            {data.stories.map((story, i) => {
              console.log(story);
              return (<CustomerServiceMain key={i} story={story} />);
            })}
          </div>
          </Body>
        </ContentSection>
        <ContentSection>
            <ContentPane full center center-vertically text>
                <Title>
                  {data.footer.title}
                </Title>
                <Body>
                  <Buttons items={data.footer.cta}/>
                </Body>
            </ContentPane>
        </ContentSection>
    </Layout>
)
