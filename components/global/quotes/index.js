import React from 'react'
import styles from './quotes.scss'

class Quotes extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    <style dangerouslySetInnerHTML={{ __html: styles }} />

    const quotes = [{text:"Some of the best ROI I've achieved for my time is from Plotly and Dash. Plotly is a major thought leader in data science right now.", author:"Dan Kaiminsky, Chief Scientist @ WhiteOps", logoImg:"https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/whiteops.png"},
    {text:"Plotly was the big business intelligence killer we'd been waiting for.", author:"Lead Data Scientist @ Goji Auto Insurance", logoImg:"https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/goji.png"},
    {text:"Dash has given our quant team a powerful framework for next generation analytical apps.", author:"Julio Guzman, Sr. Manager of Technology Investments @ Invesco", logoImg:"https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/Invesco.png"},
    {text:"Plotly and Dash bring data to life: interactive exploration tied to the source data and models pulls out insight and lets organizations maximize ROI.", author:"Fernando Pérez, co-founder of Project Jupyter and Plotly Advisor", logoImg:"https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/jupyter.png"}

    ];

    return (
        <div>
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            <div className="quotes">
                <h1 className="title">So, you've heard about Dash...</h1>
                <table className="quotesTable">
                    {
                        quotes.map((quote) => {
                            return (
                                <tr>
                                    <td className="logo"><img src={quote.logoImg}/></td>
                                    <td className="cell"><div>{quote.text}</div><div className="author">{quote.author}</div></td>
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
