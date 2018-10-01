import React, { Component } from 'react';

import Layout from 'components/layoutHOC';
import Hero from 'components/prismic/hero';
import Slices from 'components/prismic/slices';
import Head from 'components/global/head';

const shortid = require('shortid');
import NotFound from 'components/404';

class P extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { doc } = this.props;

    if (doc === undefined) {
      return <NotFound />;
    } else {
      const meta = {
        title: `${doc.data.title}`,
        description: `${doc.data.description}`,
      };

      const hero = <Hero key={shortid.generate()} data={doc.data} />;
      const slices = <Slices data={doc.data.slices} />;
      const quotes = (
        <div>
            <br/><br/><br/>

            <h1 style={{textAlign:"center"}}>So, you've heard about Dash...</h1>

            <br/><br/><br/>
            <div>
                <div>
                    <table style={{marginLeft:"auto", marginRight:"auto"}}>
                        <tr>
                            <td style={{borderRight:"10px solid grey"}}><img style={{display:"block",
                        margin:"auto"}} height="100" src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/whiteops-16-march-2018.png"/></td>
                            <td>Some of the best ROI i've achieved for my time is from Plotly and Dash. Plotly is a <br/>major thought leader in data science right now. <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   -Dan Kaiminsky, Chief Scientist @ WhiteOps </td>
                        </tr>

                        <br/>
                        <br/>

                        <tr>
                            <td style={{borderRight:"10px solid grey"}}><img style={{display:"block",
                        margin:"auto"}} height="100" src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/goji_red179C.png"/></td>
                            <td>Plotly was the big business intelligence killer we'd been waiting for.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Lead Data Scientist @ Goji Auto Insurance</td>
                        </tr>

                        <br/>
                        <br/>

                        <tr>
                            <td style={{borderRight:"10px solid grey"}}><img style={{display:"block",
                        margin:"auto"}} height="100" src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/Invesco-log.png"/></td>
                            <td>Dash has given our quant team a powerful framework for next generation<br/> analytical apps.<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -Julio Guzman, Sr. Manager of Technology Investments @ Invesco</td>
                        </tr>

                        <br/>
                        <br/>

                        <tr>
                            <td style={{borderRight:"10px solid grey"}}><img style={{display:"block",
                        margin:"auto"}} height="100" src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/quotes-logos/squarelogo-greytext-orangebody-greymoons.png"/></td>
                            <td>Plotly and Dash bring data to life: interactive exploration tied to the source data and <br/> models pulls out insight and lets organizations maximize ROI. <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Fernando Pérez, co-founder of Project Jupyter and Plotly Advisor</td>
                        </tr>

                        <br/>
                        <br/>
                    </table>
                    </div>
                </div>
            </div>
        );

      return (
        <div className={'page' + ` page--${doc.uid}`}>
          <Head meta={meta} />
          {hero}
          {doc.uid != 'home' ? null : quotes }
          {slices}
        </div>
      );
    }
  }
}


export default Layout(P);
