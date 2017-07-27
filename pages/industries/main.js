import {ContentSection, ContentPane, Body} from '../../components/content-section/content-section';

class IndustriesMain extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    const story = this.props.story;

    const removeActionOnLink = {
      transform: 'initial',
      color: '#fff'
    };

    return (
          <div>
            <div className="card card-with-image">
              <div className="card-wrapper">
                <a href={story.url}>
                  <div className="card-image" style={story.style}>
                    <div className="card-image-label">
                      {story.label}
                    </div>
                  </div>
                </a>
                <div className="card-action" style={removeActionOnLink}>
                  <a style={removeActionOnLink} className="card-action-link" href={story.url}>{story.cta}</a>
                </div>
              </div>
            </div>
          </div>
    )
  }
}

export default IndustriesMain;
