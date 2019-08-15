class MailChimpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      formSuccess: false,
      formError: null,
    };
  }

  render() {
    return (
      <div>
        <iframe
          name="hiddenFrame"
          style={{position: 'absolute', top: '-1px', left: '-1px', width: '1px', height: '1px'}}
          onLoad={() => this.setState({formSuccess: true})}
          onError={err => this.setState({formError: err})}
        ></iframe>

        <form
          className="footer-main-section"
          action="https://go.plot.ly/subscribe"
          method="POST"
          noValidate
          target="hiddenFrame"
        >
          <input
            style={{display: 'none'}}
            type="checkbox"
            name="719653_26097pi_719653_26097_326347"
            id="719653_26097pi_719653_26097_326347"
            value="326347"
            checked
          />
          <input
            style={{display: 'none'}}
            type="checkbox"
            name="719653_26097pi_719653_26097_326349"
            id="719653_26097pi_719653_26097_326349"
            value="326349"
            checked
          />
          <input
            style={{display: 'none'}}
            type="checkbox"
            name="719653_26097pi_719653_26097_326351"
            id="719653_26097pi_719653_26097_326351"
            value="326351"
            checked
          />
          <input
            style={{display: 'none'}}
            type="checkbox"
            name="719653_26097pi_719653_26097_326353"
            id="719653_26097pi_719653_26097_326353"
            value="326353"
            checked
          />

          <label htmlFor="MERGE0">
            <div className="footer-main-section-header">Join the Dash Club</div>
            {this.state.formSuccess ? (
              <div style={{color: 'white'}}>
                <div> Thank you for subscribing! </div>
                <div>
                  <a href="https://go.plot.ly/subscribe" target="_blank">
                    You can change your email preferences here.
                  </a>
                </div>
              </div>
            ) : this.state.formError ? (
              <div>{`Sorry, an unexpected error occured: ${this.state.formError}`}</div>
            ) : (
              <>
                <p className="mailchimp-footer-text">
                  {' '}
                  Dash Club is a no-fluff, twice-a-month email with links and notes on the latest
                  Dash developments and community happenings.
                </p>
                <input
                  type="text"
                  name="Emailpi_Email"
                  id="Emailpi_Email"
                  placeholder="Your Email Address"
                  value={this.state.emailValue}
                  onChange={e => {
                    this.setState({emailValue: e.target.value});
                  }}
                  autoCapitalize="off"
                  autoCorrect="off"
                  className="mc-input"
                />
              </>
            )}
          </label>
          {this.state.formSuccess ? null : (
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button button-primary"
            />
          )}
        </form>

        <div className="social-icons-wrapper">
          <div className="social-icons">
            <a href="https://github.com/plotly">
              <i className="social-icon mdi mdi-github-circle" />
            </a>
            <a href="https://twitter.com/plotlygraphs">
              <i className="social-icon mdi mdi-twitter" />
            </a>
            <a href="https://www.instagram.com/plotly/?hl=en">
              <i className="social-icon mdi mdi-instagram" />
            </a>
            <a href="https://www.facebook.com/Plotly/">
              <i className="social-icon mdi mdi-facebook" />
            </a>
            <a href="https://medium.com/@plotlygraphs">
              <i className="social-icon mdi mdi-medium" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MailChimpForm;
