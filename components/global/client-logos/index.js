import React from 'react'

export class ClientLogos extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <div className="logos-display">
        <div className="logos-display-wrapper">
          <div className="logo-item">
            <img src="https://images.plot.ly/static/marketing/client-logos/google-logo.png" />
          </div>
          <div className="logo-item">
            <img src="https://images.plot.ly/static/marketing/client-logos/pg-logo.png" />
          </div>
          <div className="logo-item">
            <img src="https://images.plot.ly/static/marketing/client-logos/vtt-logo.png" />
          </div>
          <div className="logo-item">
            <img src="https://images.plot.ly/static/marketing/client-logos/goji-logo.png" />
          </div>
          <div className="logo-item">
            <img src="https://images.plot.ly/static/marketing/client-logos/smpl-bio-logo.png" />
          </div>
          <div className="logo-item">
            <img src="https://images.plot.ly/static/marketing/client-logos/shell-logo.png" />
          </div>
        </div>
      </div>
    )
  }
}
