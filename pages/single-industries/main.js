import {Body, ContentPane, ContentSection, Title} from 'components/content-section';
import {Grid, GridItem} from 'components/grid';

import {DeviceWrapper} from 'components/elements/DeviceWrapper/DeviceWrapper';

class IndustriesMain extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    const sponsorImage = {
      width: '100%'
    }

    const data = this.props.mainData;
    const sponsors = data.sponsors;

    const gridItems = (sponsors[0]) ?
     data.sponsors.map((item, key) => {
        return (
            <GridItem key={key}>
                <div style={sponsorImage} className="grid-item-graphic sponsors">
                    <img src={item.graphic} alt={item.label} />
                </div>
                <div className="grid-item-label">
                </div>
            </GridItem>
        )
    }) : null;

    const quoteItemOne = this.getQuoteWithIndexFromData(0, data);

    const quoteItemTwo = this.getQuoteWithIndexFromData(1, data);

    const quoteItemThree = this.getQuoteWithIndexFromData(2, data)

    const quoteItemFour = this.getQuoteWithIndexFromData(3, data);

    const quoteItemFive = this.getQuoteWithIndexFromData(4, data);

    const sectionItems = (data.sections) ?
    data.sections.map( (section, key)=> {
      return(
        <ContentSection className={`single-industries${section.content[0].showBackground ? ' showBackground' : ''}`} key={key} style={{background: section.content[0].showBackground ? `url(${section.content[0].image})` : ''}} >
              <ContentPane half graphic>
                    {
                      section.content[0].showBackground ? null :
                      section.content.map((item, index) => <DeviceWrapper key={index} content={item} alt={'Section Image'}></DeviceWrapper>)
                    }
              </ContentPane>
              <ContentPane half center-vertically text >
                  <Title> {section.title}</Title>
                  <p dangerouslySetInnerHTML={{__html: section.body}}/>
              </ContentPane>
        </ContentSection>
      )
    }) : null;

    const learnMoreItems = (data.learnMore) ?
        <ContentSection>
          <ContentPane full center-vertically text center>
              <div className="pre-title">
                  Resources
              </div>
              <Title>
                  {data.learnMore.name}
              </Title>
              <Body>
                <Grid columns={2} align-left className="learn-more-grid">
                {data.learnMore.links.map( (item, key)=> {
                    return (
                      <GridItem key={key}>
                          <div className="grid-item-label learn-more-link">
                            <a key={key} href={item.url}>{item.title}</a>
                          </div>
                      </GridItem>
                    )
                  })}
                </Grid>
              </Body>
          </ContentPane>
        </ContentSection>
     : null;

    return (
      <div>
        { gridItems ?
            <ContentSection>
              <ContentPane full center>
                  <Body>
                  <Grid columns={ (gridItems.length > 5) ? 4 : gridItems.length }>{gridItems}</Grid>
                </Body>
              </ContentPane>
            </ContentSection>

          : null
        }
      {quoteItemOne}

      {sectionItems}

      {quoteItemTwo}

      {quoteItemThree}

      {quoteItemFour}

      {quoteItemFive}

      {learnMoreItems}
    </div>
    )
  }

  getQuoteWithIndexFromData(index, data) {
    const contentSectionClass = (index % 2) ? 'background-color-light-2' : '';
    return (data.quotes[index]) ? <ContentSection className={contentSectionClass +  ' quote-section'}>
        <ContentPane full center-vertically text center>
            <Body>
            <div className="quote">
                "{data.quotes[index].desc}"
            </div>
            <div className="quotee">{data.quotes[index].author}</div>
            </Body>
        </ContentPane>
    </ContentSection> : null;
  }
}

export default IndustriesMain;
