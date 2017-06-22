import Layout from '../../components/global/layout/layout';
import {ContentSection, Body} from '../../components/content-section/content-section';
import Industries from  '../../data/products/industries/industries.json';
import IndustriesHero from './hero';
import IndustriesMain from './main';

export default () => (
    <Layout meta={Industries.meta}>
        <IndustriesHero header={Industries.header} />
        <ContentSection className="background-color-light-1 center">
          <Body>
            <div className="cards stories">
            {Industries.stories.map((story, i) => {
              console.log(story);
              return (<IndustriesMain key={i} story={story} />);
            })}
          </div>
          </Body>
        </ContentSection>
    </Layout>
)
