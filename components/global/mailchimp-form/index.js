class MailChimpForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          emailValue: '',
      };
    }

      render() {
          return (
            <form className="footer-main-section" action="https://plot.us12.list-manage.com/subscribe/post" method="POST" target="_blank" noValidate>
              <input type="hidden" name="u" value="28d7f8f0685d044fb51f0d4ee"/>
              <input type="hidden" name="id" value="0c1cb734d7"/>

              <label htmlFor='MERGE0'>
                <div className="footer-main-section-header">Join the Dash Club</div>
                <p className="mailchimp-footer-text"> Dash Club is a no-fluff, twice-a-month email with links and notes on the latest Dash developments and community happenings.</p>
                <input
                  type="email"
                  name="EMAIL"
                  id="MERGE0"
                  placeholder="Your Email Address"
                  value={this.state.emailValue}
                  onChange={ (e)=>{this.setState({emailValue: e.target.value});} }
                  autoCapitalize="off"
                  autoCorrect="off"
                  className="mc-input"
                />
            </label>
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button button-primary"/>
          </form>
          )
      }
  }

  export default MailChimpForm
