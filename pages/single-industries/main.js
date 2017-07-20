import {ContentSection, ContentPane, Body, Title} from '../../components/content-section/content-section';
import {Grid, GridItem} from '../../components/grid/grid';
import {DeviceWrapper} from '../../components/elements/DeviceWrapper/DeviceWrapper';

class IndustriesMain extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {

    const orderZero = {
      order: 0
    };

    const orderOne = {
      order: 1
    };

    const data = this.props.mainData;
    const sponsors = data.sponsors;

    const gridItems = (sponsors[0]) ?
     data.sponsors.map((item, key) => {
        return (
            <GridItem key={key}>
                <div className="grid-item-graphic sponsors">
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
        <ContentSection key={key}>
              <ContentPane half graphic>
                    <DeviceWrapper image={section.image} alt={'Section Image'} deviceType={'browser'} deviceColor={'lightgrey'}></DeviceWrapper>
              </ContentPane>
              <ContentPane half center-vertically text style={ (key % 2) ? orderOne : orderZero  }>
                  <Title> {section.title}</Title>
                  <p dangerouslySetInnerHTML={{__html: section.body}}/>
              </ContentPane>
        </ContentSection>
      )
    }) : null;

    const learnMoreItems = (data.learnMore) ?
        <ContentSection className="background-color-light-4">
          <ContentPane full center-vertically text center>
              <Title>
                  {data.learnMore.name}
              </Title>

              <Body>
                <Grid columns={2} align-left>
                {data.learnMore.links.map( (item, key)=> {
                    return (
                      <GridItem key={key}>
                          <div className="grid-item-label">
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
    return (data.quotes[index]) ? <ContentSection className={contentSectionClass}>
        <ContentPane full center-vertically text center>
            <Title>
                "{data.quotes[index].desc}"
            </Title>
            <Body>
            <p>{data.quotes[index].author}</p>
            </Body>
        </ContentPane>
    </ContentSection> : null;
  }
}

export default IndustriesMain;
