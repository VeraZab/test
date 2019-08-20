class MailChimpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      formError: null,
      formSubmitted: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const params = {
      Emailpi_Email: this.state.emailValue,
    };

    this.setState({formSubmitted: true, subscribing: true});

    fetch('https://go.plot.ly/l/719653/2019-08-15/3fgqv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      mode: 'no-cors',
      body: new URLSearchParams(params).toString(),
    })
      .catch(() => this.setState({formError: true}))
      .then(() => {
        if (!this.state.formError) {
          // have to use this hack as not receiving response.ok upon success from the handler...
          this.setState({formError: false});
        }
        this.setState({subscribing: false});
      });
  }

  renderSubmissionResult() {
    return (
      <div style={{minHeight: '80px'}}>
        {this.state.formError && (
          <div>
            <span>Sorry, an unexpected error occured. </span>
            <a href="https://go.plot.ly/subscribe">Please try again here.</a>
          </div>
        )}

        {this.state.formError === false && (
          <div>
            <div> Thank you for subscribing! </div>
            <div>
              <a href="https://go.plot.ly/customize" target="_blank">
                Click here to customize your email experience.
              </a>
            </div>
          </div>
        )}
        {this.state.subscribing && <div>Subscribing...</div>}
      </div>
    );
  }

  render() {
    return (
      <div className="footer-subscription-section">
        <div className="footer-main-section-header">Join our mailing list</div>
        {this.state.formSubmitted ? (
          this.renderSubmissionResult()
        ) : (
          <>
            <p className="mailchimp-footer-text">
              {' '}
              Sign up to stay in the loop with all things Plotly—from Dash Club to product updates,
              webinars, and more!
            </p>
            <input
              type="text"
              placeholder="Your Email Address"
              value={this.state.emailValue}
              onChange={e => {
                this.setState({emailValue: e.target.value});
              }}
              autoCapitalize="off"
              autoCorrect="off"
              className="mc-input"
            />
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button button-primary"
              onClick={this.onSubmit}
            />
          </>
        )}

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
