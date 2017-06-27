import {ContentSection, ContentPane, Title, Body} from '../../components/content-section/content-section';
import Buttons from '../../components/buttons/buttons';

const footer = {
  "title": "Interested in how Plotly can transform your business?",
  "cta": {
      "label": "Request a demo",
      "title": "See what you can create with Plotly!",
      "icon": null,
      "target": "_self",
      "link": "/products/cloud/",
      "button": {
        "classes": "button button-secondary"
      }
    }
  };

class IndustriesRequestDemo extends React.Component {

  render() {
      return (
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
    )
  }
}

export default IndustriesRequestDemo;
