import {ContentSection, ContentPane, Body, Title} from '../../components/content-section/content-section';
import {Grid, GridItem} from '../../components/grid/grid';

class IndustriesMain extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {

    const data = this.props.mainData;
    const section = data.sections[0];



    return (
      <ContentSection className="background-color-light-2">
            <ContentPane graphic>
            <Title>{data.header.group}</Title>
            <img src={section.image} alt="Section Image"/>
            </ContentPane>

            <ContentPane>
              <p dangerouslySetInnerHTML={{__html: section.body}}/>
            </ContentPane>
            <ContentPane className="main-body" >
              <p dangerouslySetInnerHTML={{__html: data.mainBody}}/>
            </ContentPane>
      </ContentSection>
    )
  }
}

export default IndustriesMain;
