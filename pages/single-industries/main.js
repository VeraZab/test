import {ContentSection, ContentPane, Body} from '../../components/content-section/content-section';
import {Grid, GridItem} from '../../components/grid/grid';

class IndustriesMain extends React.Component {

  constructor(props) {
      super(props);
  }

  // componentWillMount() {
  // }

  render() {
    const { sponsors } = this.props.mainData;

    console.log(this);
    const gridItems = sponsors.map(item => {
        return (
            <GridItem>
                <div className="grid-item-graphic">
                    <img src={item.graphic} alt={item.label} />
                </div>
                <div className="grid-item-label">
                    {item.label}
                </div>
            </GridItem>
        )
    });


    return (

      <ContentSection>
          <ContentPane full center>
              <Body>
                  {sponsors.length ? <Grid columns="5">{gridItems}</Grid> : ''}
              </Body>
          </ContentPane>
      </ContentSection>

    )
  }
}

export default IndustriesMain;
