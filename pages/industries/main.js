import {ContentSection, ContentPane, Body} from '../../components/content-section/content-section';


class IndustriesMain extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    const story = this.props.story;

    const cardWithImageStyles = {
      width: '100%',
      marginBottom: '60px',
      maxWidth: '475px'
    };

    return (
            <div className="card card-with-image" style={cardWithImageStyles}>
              <div className="card-wrapper">
                <div className="card-image" style={story.style}>
                  <div className="card-image-label">
                    {story.label}
                  </div>
                </div>
                <div className="card-action">
                  <a className="card-action-link" href={story.url}>{story.cta}</a>
                </div>
              </div>
            </div>
    )
  }
}

export default IndustriesMain;
