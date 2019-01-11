import {
  ContentSection,
  ContentPane,
  Title,
  Subtitle,
  Body,
  Graphic,
} from 'components/content-section';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {github} from 'react-syntax-highlighter/dist/styles';

const iframeStyle = {
  width: '100%',
  overflow: 'hidden',
  border: 'none',
};
let lineNumberStyles = {
  opacity: '0.25',
};

const codeSections = [
  {
    id: 'a',
    text:
      'Create a button or link on your page with an ID "plotly-data-export". Make sure your page is loading jQuery.',
    code: `<a href="#" id="plotly-data-export" target="_blank">Graph in Plotly</a>`,
    lang: 'html',
  },
  {
    id: 'b',
    text:
      'Create a global JavaScript function called getPlotlyGridData(). This function should return the data you want to be available to graph. See the code below for the correct syntax. In this example, "Data", "Amount", and "Source" will be column headers in the Plotly spreadsheet.',
    code: `<script>
        function getPlotlyGridData(){ 
            return {"cols":{
                "Date":{"data":[1, 2, 4, 2, 6, 3]},
                "Amount":{"data":[3, 4, 6, 1, 9, 2]},
                "Source":["data.gov","2013-11-11"]},
                "meta":{}
                }
            } 
        }
        </script>`,
    lang: 'javascript',
  },
  {
    id: 'c',
    text: 'Copy and paste the code below and insert it below the body tag of your page.',
    code: `<script>
        $('#plotly-data-export').click(function(){
            var hiddenform = $('<div id="hiddenform" '+
                'style="display:none;">'+
                '<form action="https://plot.ly/datagrid" '+
                'method="post" target="_blank">'+
                '<input type="text" '+
                'name="data" /></form></div>')
                .appendTo('body');
            hiddenform.find('input').val( 
                JSON.stringify( getPlotlyGridData() ) );
            hiddenform.find('form').submit();
            hiddenform.remove();
        });
    </script>`,
    lang: 'javascript',
  },
];

const lastSection = [
  {
    id: 'a',
    text:
      'Create a button or link on your page with an ID "plotly-graph-export". Make sure your page is loading jQuery.',
    code: `<a href="#" id="plotly-graph-export" target="_blank">Graph in Plotly</a>`,
    lang: 'html',
  },
  {
    id: 'b',
    text:
      'Create a global JavaScript called getPlotlyGraphData(). This function should return the data you want to graph. See the code below for the correct syntax.',
    code: `<script>
        function getPlotlyGraphData(){ 
            return [{"x":[1,2,3],"y":[2,4,3]},{"x":[1,2,3],"y":[9,7,8]}]; 
        }
        </script>`,
    lang: 'javascript',
  },
  {
    id: 'c',
    text: 'Copy and paste the code below and insert it below the body tag of your page.',
    code: `<script>
        function getPlotlyGridData(){
            return {'cols':{
                'Date':{'data':[1, 2]},
                'Amount':{'data':[3, 4]},
                'Source':['data.gov','2013-11-11']},
                'meta':{}
            };
        }
        $('#plotly-data-export').click(function(){
            var hiddenform = $('<div id="hiddenform" '+
                'style="display:none;">'+
                '<form action="https://plot.ly/datagrid" '+
                'method="post" target="_blank">'+
                '<input type="text" '+
                'name="data" /></form></div>')
                .appendTo('body');
            hiddenform.find('input').val(
                JSON.stringify( getPlotlyGridData()));
            hiddenform.find('form').submit();
            hiddenform.remove();
        });
        </script>`,
    lang: 'javascript',
  },
];

export default () => (
  <div className="export-page-main">
    <div className="quote-section">
      <div className="quote-wrapper">
        <div className="quote-item">
          <div className="quote-item-wrapper">
            <div className="quote-item-quote">
              <span>"</span>
              Plotly makes it easy to share and edit your work privately, with your co-workers, or
              the world. There is so much to learn from open government data and we are happy to
              feature tools like Plotly and CartoDB that make it easier for everyone to become a
              data scientist.
              <span>"</span>
            </div>
            <div className="quote-item-quotee">
              <div className="quote-item-quotee-img-wrapper">
                <img
                  src="https://plot.ly/static/img/export/datagov_white.74fa245099ee.png?auto=compress&auto=format"
                  alt="Data.Gov"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="quote-item">
          <div className="quote-item-wrapper">
            <div className="quote-item-quote">
              <span>"</span>
              Why did we choose Plot.ly for our first integration? Because we’re a great match! Both
              our platforms are designed to make the power of data more accessible.
              <span>"</span>
            </div>
            <div className="quote-item-quotee">
              <div className="quote-item-quotee-img-wrapper">
                <img
                  src="https://plot.ly/static/img/export/importio_white.9464af89bfd4.png?auto=compress&auto=format"
                  alt="import.io"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ContentSection>
      <ContentPane full center center-vertically text>
        <Title>See it in Action</Title>
        <Body>
          <p>
            View a showcase of how our partners are using the export option and how it is benefiting
            their users.
          </p>
          <div style={{maxWidth: '680px', margin: '20px auto'}}>
            <Graphic
              shadow="false"
              image="https://images-plotly.imgix.net/static/marketing/export-graphic.png?auto=compress&auto=format"
            />
          </div>
        </Body>
      </ContentPane>
    </ContentSection>

    <div id="steps" />
    <ContentSection>
      <ContentPane full center-vertically text>
        <Subtitle>Option 1</Subtitle>
        <Title>Export data into Plotly from an existing endpoint</Title>
        <Body>
          <iframe
            id="cp_embed_YXpGLQ"
            src="//codepen.io/plotly/embed/YXpGLQ?height=268&amp;theme-id=15263&amp;slug-hash=YXpGLQ&amp;default-tab=result&amp;user=plotly"
            scrolling="no"
            frameBorder="0"
            height="268"
            allowTransparency="true"
            allowFullScreen="true"
            name="CodePen Embed"
            title="CodePen Embed 3"
            className="cp_embed_iframe "
            style={iframeStyle}
          />
          <article className="export-step">
            <div className="export-step-title">
              <div className="export-step-number">Step A</div>
              <div className="export-step-text">
                <p>
                  For this example, we’re using this{' '}
                  <a href="https://www.quandl.com/api/v1/datasets/NVCA/VENTURE_3_10.csv">
                    endpoint from Quandl.
                  </a>
                </p>
              </div>
            </div>
            <div className="export-step-body" />
          </article>
          <article className="export-step">
            <div className="export-step-title">
              <div className="export-step-number">Alternative Option</div>
              <div className="export-step-text">
                <p>
                  <strong>
                    You can also sync Plotly graphs with arbitrary externally sourced data.
                  </strong>{' '}
                  These graphs can be shared by a URL and embedded in a webpage, and whenever a user
                  views the graph, Plotly fetches the latest data from your web service.
                </p>
                <p>
                  Use the external source plotter when you don’t want to send your user to Plotly’s
                  web-app.
                </p>
                <p>
                  We have examples documented for{' '}
                  <a
                    href="http://chriddyp.github.io/external-source-plotter/sqlite/"
                    target="_blank"
                  >
                    SQLite
                  </a>
                  ,{' '}
                  <a
                    href="http://chriddyp.github.io/external-source-plotter/tickers/"
                    target="_blank"
                  >
                    Flask
                  </a>
                  ,{' '}
                  <a
                    href="http://chriddyp.github.io/external-source-plotter/quandl/"
                    target="_blank"
                  >
                    Quandl
                  </a>
                  ,{' '}
                  <a
                    href="http://chriddyp.github.io/external-source-plotter/google-drive/"
                    target="_blank"
                  >
                    Google Drive
                  </a>
                  ,{' '}
                  <a
                    href="http://chriddyp.github.io/external-source-plotter/github-gist/"
                    target="_blank"
                  >
                    GitHub Gists,
                  </a>{' '}
                  and{' '}
                  <a
                    href="http://chriddyp.github.io/external-source-plotter/dropbox/"
                    target="_blank"
                  >
                    Dropbox
                  </a>
                  .{' '}
                  <a href="http://chriddyp.github.io/external-source-plotter/" target="_blank">
                    See it in action or read more about it
                  </a>
                </p>
              </div>
            </div>
            <div className="export-step-body" />
          </article>
        </Body>
      </ContentPane>
    </ContentSection>

    <ContentSection>
      <ContentPane full center-vertically text>
        <Subtitle>Option 2</Subtitle>
        <Title>Export data into a Plotly spreadsheet for easy graphing</Title>
        <Body>
          <iframe
            id="cp_embed_MwYQqY"
            src="//codepen.io/plotly/embed/MwYQqY?height=268&amp;theme-id=15263&amp;slug-hash=MwYQqY&amp;default-tab=result&amp;user=plotly"
            scrolling="no"
            frameBorder="0"
            height="268"
            allowTransparency="true"
            allowFullScreen="true"
            name="CodePen Embed"
            title="CodePen Embed 2"
            style={iframeStyle}
          />
          {codeSections.map((section, i) => {
            return (
              <article className="export-step" key={i}>
                <div className="export-step-title">
                  <div className="export-step-number">Step {section.id}</div>
                  <div className="export-step-text">{section.text}</div>
                </div>
                <div className="export-step-body">
                  <SyntaxHighlighter
                    language={section.lang}
                    style={github}
                    showLineNumbers={true}
                    wrapLines={true}
                    lineNumberStyle={lineNumberStyles}
                    lineStyle={lineNumber => {
                      let style = {display: 'block'};
                      return style;
                    }}
                  >
                    {section.code}
                  </SyntaxHighlighter>
                </div>
              </article>
            );
          })}
        </Body>
      </ContentPane>
    </ContentSection>

    <ContentSection>
      <ContentPane full center-vertically text>
        <Subtitle>Option 3</Subtitle>
        <Title>Export data directly into a Plotly graph</Title>
        <Body>
          <iframe
            id="cp_embed_MwYQqY"
            src="https://codepen.io/plotly/embed/vONMvo?height=268&theme-id=15263&slug-hash=vONMvo&default-tab=result&user=plotly"
            scrolling="no"
            frameBorder="0"
            height="268"
            allowTransparency="true"
            allowFullScreen="true"
            name="CodePen Embed"
            title="CodePen Embed 2"
            style={iframeStyle}
          />
          {lastSection.map((section, i) => {
            return (
              <article className="export-step" key={i}>
                <div className="export-step-title">
                  <div className="export-step-number">Step {section.id}</div>
                  <div className="export-step-text">{section.text}</div>
                </div>
                <div className="export-step-body">
                  <SyntaxHighlighter
                    language={section.lang}
                    style={github}
                    showLineNumbers={true}
                    wrapLines={true}
                    lineNumberStyle={lineNumberStyles}
                    lineStyle={lineNumber => {
                      let style = {display: 'block'};
                      return style;
                    }}
                  >
                    {section.code}
                  </SyntaxHighlighter>
                </div>
              </article>
            );
          })}
        </Body>
      </ContentPane>
    </ContentSection>
  </div>
);
