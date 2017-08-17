import {ContentSection, ContentPane, Title, Body} from '../../components/content-section/content-section';
import Buttons from '../../components/buttons/buttons';

const footer = {
  "title": "A Plotly sales engineer will answer any questions, walk you through a demo, and support a trial deployment.",
  "cta": [{
      "label": "Request a demo",
      "title": "See what you can create with Plotly!",
      "icon": null,
      "target": "_self",
      "link": "/products/cloud/",
      "button": {
        "classes": "button button-primary"
      }
    }],
    "twitter": [{
        "label": "<i class='mdi mdi-twitter'></i> Follow what we're working on",
        "title": "Follow what we're working on",
        "icon": null,
        "target": "_blank",
        "link": "http://twitter.com/plotlygraphs",
        "button": {
          "classes": "button button-secondary"
        }
      }]
    };

class IndustriesRequestDemo extends React.Component {

  render() {
      return (
        <ContentSection>
          <ContentPane full center center-vertically text>
              <Title>
                {footer.title}
              </Title>
              <Body>
              <Buttons align-center items={footer.cta}/>
              <Buttons align-center items={footer.twitter}/>
              </Body>
          </ContentPane>
      </ContentSection>
    )
  }
}

export default IndustriesRequestDemo;
