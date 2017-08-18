import Layout from '../components/global/layout/layout';
import {ContentSection, ContentPane, Title, Body} from '../components/content-section/content-section';
import Buttons from '../components/buttons/buttons';
import data from  '../static/data/products/tableau-alternative.json';
import CustomerServiceHero from './tableau-alternative/hero';
import CustomerServiceMain from './tableau-alternative/main';

export default () => (
    <Layout meta={data.meta}>
        <CustomerServiceHero header={data.header} />
        <ContentSection className="background-color-light-1 center">
          <ContentPane full center center-vertically>
              <Title align-center>
                  {data.meta.title}
              </Title>
              <Body align-center>
                <p>{data.meta.title}</p>
                  <div className="cards stories" style={data.style}>
                    {data.sections.map((story, i) => {
                      return (<CustomerServiceMain style={data.style} key={i} story={story} />);
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
