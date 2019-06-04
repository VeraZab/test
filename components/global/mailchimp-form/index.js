class MailChimpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
    };
  }

  render() {
    return (
      <div>
        <form
          className="footer-main-section"
          action="https://plot.us12.list-manage.com/subscribe/post"
          method="POST"
          target="_blank"
          noValidate
        >
          <input type="hidden" name="u" value="28d7f8f0685d044fb51f0d4ee" />
          <input type="hidden" name="id" value="0c1cb734d7" />

          <label htmlFor="MERGE0">
            <div className="footer-main-section-header">Join the Dash Club</div>
            <p className="mailchimp-footer-text">
              {' '}
              Dash Club is a no-fluff, twice-a-month email with links and notes on the latest Dash
              developments and community happenings.
            </p>
            <input
              type="email"
              name="EMAIL"
              id="MERGE0"
              placeholder="Your Email Address"
              value={this.state.emailValue}
              onChange={e => {
                this.setState({emailValue: e.target.value});
              }}
              autoCapitalize="off"
              autoCorrect="off"
              className="mc-input"
            />
          </label>
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button button-primary"
          />
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
