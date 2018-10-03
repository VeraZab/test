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

            <div className="quotes">
                <h1 className="title">{this.props.data.primary.title1[0].text}</h1>
                <table className="quotesTable">
                    {
                        this.props.data.items.map((prop) => {
                            return (
                                <tr>
                                    <td className="logo"><img className="logoImage" alt="client logo" src={prop.logo.url}/></td>
                                    <td className="cell"><div>{prop.quote1[0].text}</div><div className="author">{prop.author1[0].text}</div></td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </React.Fragment>
    )
  }
}

export default Quotes
