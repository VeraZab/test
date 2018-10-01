import React from 'react'

class Quotes extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
            <br/><br/><br/>

            <h1 style={{textAlign:"center"}}>So, you've heard about Dash...</h1>

            <br/><br/><br/>
            <div>
                <div>
                    <table style={{marginLeft:"auto", marginRight:"auto"}}>
                        <tr>
                            <td style={{borderRight:"10px solid lightgrey"}}><img style={{display:"block",
                        margin:"auto"}} src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/whiteops.png"/></td>
                            <td style={{paddingLeft:"24px"}}>Some of the best ROI i've achieved for my time is from Plotly and Dash. Plotly is a <br/>major thought leader in data science right now. <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &mdash;<i> Dan Kaiminsky, Chief Scientist @ WhiteOps</i> </td>
                        </tr>

                        <br/>
                        <br/>

                        <tr>
                            <td style={{borderRight:"10px solid lightgrey"}}><img style={{display:"block",
                        margin:"auto"}} src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/goji.png"/></td>
                            <td style={{paddingLeft:"24px"}}>Plotly was the big business intelligence killer we'd been waiting for.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&mdash;<i> Lead Data Scientist @ Goji Auto Insurance</i><br/><br/></td>
                        </tr>

                        <br/>
                        <br/>

                        <tr>
                            <td style={{borderRight:"10px solid lightgrey"}}><img style={{display:"block",
                        margin:"auto"}} src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/Invesco.png"/></td>
                            <td style={{paddingLeft:"24px"}}>Dash has given our quant team a powerful framework for next generation<br/> analytical apps.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&mdash;<i> Julio Guzman, Sr. Manager of Technology Investments @ Invesco</i></td>
                        </tr>

                        <br/>
                        <br/>

                        <tr>
                            <td style={{borderRight:"10px solid lightgrey"}}><img style={{display:"block",
                        margin:"auto"}} src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/jupyter.png"/></td>
                            <td style={{paddingLeft:"24px"}}>Plotly and Dash bring data to life: interactive exploration tied to the source data and <br/> models pulls out insight and lets organizations maximize ROI. <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&mdash;<i> Fernando Pérez, co-founder of Project Jupyter and Plotly Advisor</i></td>
                        </tr>

                        <br/>
                        <br/>
                    </table>
                    </div>
                </div>
            </div>
    )
  }
}

export default Quotes
