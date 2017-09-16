import Layout from 'components/global/layout';
import {ContentSection, ContentPane, Title, Body} from 'components/content-section';
import Buttons from 'components/buttons';
import data from  '../static/data/products/industries/tableau-alternative.json';
import TableauHero from './tableau-alternative/hero';
import TableauMain from './tableau-alternative/main';

export default () => (
    <Layout meta={data.meta}>
        <TableauHero header={data.header} />
        <ContentSection className="background-color-light-1 center">
          <ContentPane full center center-vertically>
              <Title align-center>
                  {data.meta.title}
              </Title>
              <Body align-center>
                <p>{data.meta.title}</p>
                  <div className="cards stories" style={data.style}>
                    {data.sections.map((story, i) => {
                      return (<TableauMain style={data.style} key={i} story={story} />);
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
