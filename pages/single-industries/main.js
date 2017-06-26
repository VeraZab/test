import {ContentSection, ContentPane, Body, Title} from '../../components/content-section/content-section';
import {Grid, GridItem} from '../../components/grid/grid';

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

    const quoteItemOne = (data.quotes[0]) ?
    <ContentSection>
        <ContentPane full center-vertically text center>
            <Title>
                "{data.quotes[0].desc}"
            </Title>
            <Body>
            <p>{data.quotes[0].author}</p>
            </Body>
        </ContentPane>
    </ContentSection> : null;

    const quoteItemTwo = (data.quotes[1]) ?
    <ContentSection className="background-color-light-2">
        <ContentPane full center-vertically text center>
            <Title>
                "{data.quotes[1].desc}"
            </Title>
            <Body>
            <p>{data.quotes[1].author}</p>
            </Body>
        </ContentPane>
    </ContentSection> : null;

    const quoteItemThree = (data.quotes[2]) ?
    <ContentSection className="background-color-light-2">
        <ContentPane full center-vertically text center>
            <Title>
                "{data.quotes[2].desc}"
            </Title>
            <Body>
            <p>{data.quotes[2].author}</p>
            </Body>
        </ContentPane>
    </ContentSection> : null;

    const quoteItemFour = (data.quotes[3]) ?
    <ContentSection className="background-color-light-2">
        <ContentPane full center-vertically text center>
            <Title>
                "{data.quotes[3].desc}"
            </Title>
            <Body>
            <p>{data.quotes[3].author}</p>
            </Body>
        </ContentPane>
    </ContentSection> : null;

    const sectionItems = (data.sections) ?
    data.sections.map( (section, key)=> {
      return(
        <ContentSection key={key}>
              <ContentPane half graphic>
                    <img src={section.image} alt="Section Image"/>
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

      {learnMoreItems}
    </div>
    )
  }
}

export default IndustriesMain;
