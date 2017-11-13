import Layout from 'components/global/layout'
import { ContentSection, Body } from 'components/content-section'
import Industries from '../static/data/products/industries/industries.json'
import IndustriesHero from './industries/hero'
import IndustriesMain from './industries/main'
import styles from './industries/industries.styles.scss'

export default () => (
  <Layout meta={Industries.meta}>
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <IndustriesHero header={Industries.header} />
    <ContentSection className="background-color-light-1 center">
      <Body>
        <div className="cards stories">
          {Industries.stories.map((story, i) => {
            return <IndustriesMain key={i} story={story} />
          })}
        </div>
      </Body>
    </ContentSection>
  </Layout>
)
