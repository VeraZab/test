import React from 'react'

class Quotes extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const titleStyle = {paddingTop:"30px", paddingBottom:"30px", textAlign:"center"};

    const tableStyle = {marginLeft:"auto", marginRight:"auto", borderSpacing:"30px"};

    const cellStyle = {borderRight:"10px solid lightgrey"};

    const imageStyle = {display:"block",
    margin:"auto"};

    const logoStyle = {paddingLeft:"24px"};

    const authorStyle = {paddingTop:"24px", textAlign:"right"};
    return (
        <div>
            <h1 style={titleStyle}>So, you've heard about Dash...</h1>

                    <table style={tableStyle}>
                        <tr>
                            <td style={cellStyle}><img style={imageStyle} src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/whiteops.png"/></td>
                            <td style={logoStyle}>Some of the best ROI I've achieved for my time is from Plotly and Dash. Plotly is a major thought leader in data science right now. <div style={authorStyle}>&mdash;<i> Dan Kaiminsky, Chief Scientist @ WhiteOps</i> </div></td>
                        </tr>

                        <tr>
                            <td style={cellStyle}><img style={imageStyle} src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/goji.png"/></td>
                            <td style={logoStyle}>Plotly was the big business intelligence killer we'd been waiting for. <div style={authorStyle}>&mdash;<i> Lead Data Scientist @ Goji Auto Insurance</i></div></td>
                        </tr>

                        <tr>
                            <td style={cellStyle}><img style={imageStyle} src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/Invesco.png"/></td>
                            <td style={logoStyle}>Dash has given our quant team a powerful framework for next generation analytical apps.<div style={authorStyle}>&mdash;<i> Julio Guzman, Sr. Manager of Technology Investments @ Invesco</i></div></td>
                        </tr>

                        <tr>
                            <td style={cellStyle}><img style={imageStyle} src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/jupyter.png"/></td>
                            <td style={logoStyle}>Plotly and Dash bring data to life: interactive exploration tied to the source data and models pulls out insight and lets organizations maximize ROI.<div style={authorStyle}>&mdash;<i> Fernando Pérez, co-founder of Project Jupyter and Plotly Advisor</i></div></td>
                        </tr>

                    </table>
            </div>
    )
  }
}

export default Quotes
