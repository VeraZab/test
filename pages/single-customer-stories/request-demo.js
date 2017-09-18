import {ContentSection, ContentPane, Title, Body} from 'components/content-section';
import Buttons from 'components/buttons';

const footer = {
  "title": "Interested in how Plotly can transform your business?",
  "cta": [{
      "label": "Request a demo",
      "title": "See what you can create with Plotly!",
      "icon": null,
      "target": "_self",
      "link": "/products/cloud/",
      "button": {
        "classes": "button button-secondary"
      }
    }
]
  };

class IndustriesRequestDemo extends React.Component {

  render() {
      return (
      <ContentSection className="background-color-light-4">
          <ContentPane full center center-vertically text>
              <Title>
                {footer.title}
              </Title>
              <Body>
                <Buttons align-center items={footer.cta}/>
              </Body>
          </ContentPane>
      </ContentSection>
    )
  }
}

export default IndustriesRequestDemo;
