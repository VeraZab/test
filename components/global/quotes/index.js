import React from 'react'
import styles from './quotes.scss'

class Quotes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <style dangerouslySetInnerHTML={{ __html: styles }} />

    return (
        <div>
            <style dangerouslySetInnerHTML={{ __html: styles }} />

            <div className="quotes">
                <h1 className="title">{this.props.title}</h1>
                <table className="quotesTable">
                    {
                        this.props.data.map((prop) => {
                            return (
                                <tr>
                                    <td className="logo"><img alt="client logo" src={prop.logo.url}/></td>
                                    <td className="cell"><div>{prop.quote1[0].text}</div><div className="author">{prop.author1[0].text}</div></td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
  }
}

export default Quotes
