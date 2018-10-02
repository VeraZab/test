import React from 'react'
import { LogicGateOrIcon } from 'mdi-react';

class Quotes extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const titleStyle = {paddingTop:"30px", paddingBottom:"30px", textAlign:"center"};

    const tableStyle = {width:"75%", marginLeft:"auto", marginRight:"auto", borderSpacing:"30px"};
    const logoStyle = {borderRight:"10px solid lightgrey"};

    const imageStyle = {display:"block", margin:"auto"};

    const cellStyle = {paddingLeft:"24px"};

    const authorStyle = {paddingTop:"24px", textAlign:"right", fontStyle:"italic"};

    const quotes = [{text:"Some of the best ROI I've achieved for my time is from Plotly and Dash. Plotly is a major thought leader in data science right now.", author:"Dan Kaiminsky, Chief Scientist @ WhiteOps", logoImg:"https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/whiteops.png"},
    {text:"Plotly was the big business intelligence killer we'd been waiting for.", author:"Lead Data Scientist @ Goji Auto Insurance", logoImg:"https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/goji.png"},
    {text:"Dash has given our quant team a powerful framework for next generation analytical apps.", author:"Julio Guzman, Sr. Manager of Technology Investments @ Invesco", logoImg:"https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/Invesco.png"},
    {text:"Plotly and Dash bring data to life: interactive exploration tied to the source data and models pulls out insight and lets organizations maximize ROI.", author:"Fernando Pérez, co-founder of Project Jupyter and Plotly Advisor", logoImg:"https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/jupyter.png"}

    ];

    const generateQuotesTable = () => {
        return quotes.map((quote) => {
            return (
                <table style={{tableStyle}}>
                    <tr>
                        <td style={{logoStyle}}><img style={{imageStyle}} src={quote.logoImg}/></td>
                        <td style={{cellStyle}}><div>{quote.text}</div><div style={{authorStyle}}>{quote.author}</div></td>
                    </tr>
                </table>
          )
        })
      };

    return (
        <div>
            <h1 style={titleStyle}>So, you've heard about Dash...</h1>
            {generateQuotesTable()}
        </div>
    )
  }
}

export default Quotes
