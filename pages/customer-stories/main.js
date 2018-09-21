class CustomerServiceMain extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const story = this.props.story

    return (
      <a href={story.url} className="enterprise-card">
        <div className="enterprise-card-wrapper">
          <div className="enterprise-card-image" style={story.style} />
          <div className="enterprise-card-details">
            <div className="enterprise-card-title">{story.label}</div>
          </div>
          <div className="enterprise-card-hover">
            <div className="enterprise-card-cta">{story.cta}</div>
          </div>
        </div>
      </a>
    )
  }
}

export default CustomerServiceMain
