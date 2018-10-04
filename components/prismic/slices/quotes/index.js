import React from 'react'
import styles from './quotes.scss'

class Quotes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <React.Fragment>
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            <h1 className="title">{this.props.data.primary.title1[0].text}</h1>

            <div className="flexContainer">
                    {
                        this.props.data.items.map((prop) => {
                            return (
                                <div className="flexItem">
                                    <div className="logo"><img className="logoImage" alt="client logo" src={prop.logo.url}/></div>
                                    <div className="cell"><div>{prop.quote1[0].text}</div><div className="author">{prop.author1[0].text}</div></div>
                                </div>
                            )
                        })
                    }
            </div>
        </React.Fragment>
    )
  }
}

export default Quotes
