import styles from './code-explorer.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark} from 'react-syntax-highlighter/dist/styles';

const jsCode = `import dash
from dash.dependencies import Input, Output
import dash_core_components as dcc
import dash_html_components as html

import flask
import pandas as pd
import time
import os

server = flask.Flask('app')
server.secret_key = os.environ.get('secret_key', 'secret')

df = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/hello-world-stock.csv')

app = dash.Dash('app', server=server)

app.scripts.config.serve_locally = False
dcc._js_dist[0]['external_url'] = 'https://cdn.plot.ly/plotly-basic-latest.min.js'

app.layout = html.Div([
    html.H1('Stock Tickers'),
    dcc.Dropdown(
        id='my-dropdown',
        options=[
            {'label': 'Tesla', 'value': 'TSLA'},
            {'label': 'Apple', 'value': 'AAPL'},
            {'label': 'Coke', 'value': 'COKE'}
        ],
        value='TSLA'
    ),
    dcc.Graph(id='my-graph')
], className="container")

@app.callback(Output('my-graph', 'figure'),
              [Input('my-dropdown', 'value')])

def update_graph(selected_dropdown_value):
    dff = df[df['Stock'] == selected_dropdown_value]
    return {
        'data': [{
            'x': dff.Date,
            'y': dff.Close,
            'line': {
                'width': 3,
                'shape': 'spline'
            }
        }],
        'layout': {
            'margin': {
                'l': 30,
                'r': 20,
                'b': 30,
                't': 20
            }
        }
    }

if __name__ == '__main__':
    app.run_server()`;

const languages = [
  {
    id: '4',
    title: 'Javascript',
    slug: 'javascript',
    language: 'javascript',
    code: jsCode,
    graphic_src: 'https://images-plotly.imgix.net/static/marketing/dash/hello-world.gif',
    example_url: 'https://images-plotly.imgix.net/static/marketing/javascript_graphic.gif',
    button_text: 'Plotly Javascript API',
    button_link: 'https://plot.ly/javascript',
  },
];

export default class CodeExplorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: languages[0],
    };
  }

  setLanguage(language) {
    this.setState({
      language: language,
    });
  }

  render() {
    let tabs = languages.map(language => {
      return (
        <div
          key={language.id}
          className={`code-explorer-editor-tab ${
            this.state.language.id == language.id ? 'active' : ''
          }`}
        >
          <div
            className="code-explorer-editor-tab-label"
            onClick={() => {
              this.setLanguage(language);
            }}
          >
            {language.title}
          </div>
        </div>
      );
    });

    let graphicStyles = {
      backgroundImage: 'url(' + this.state.language.graphic_src + ')',
    };

    let lineNumberStyles = {
      opacity: '0.25',
    };

    return (
      <div className="code-explorer gutter-top">
        <style dangerouslySetInnerHTML={{__html: styles}} />
        <div className="code-explorer-wrapper">
          <div className="code-explorer-graphic">
            <div className="code-explorer-graphic-wrapper desktop-graphic">
              <iframe src="https://dash-hello-world.herokuapp.com/" />
            </div>
            <div className="code-explorer-graphic-wrapper mobile-graphic">
              <div className="graphic-img-wrapper">
                <img src={languages[0].graphic_src} alt="" />
              </div>
            </div>
          </div>
          <div className="code-explorer-editor">
            <div className="code-explorer-editor-wrapper">
              <div className="code-explorer-editor-content">
                <SyntaxHighlighter
                  language={this.state.language.language}
                  style={atomOneDark}
                  showLineNumbers={true}
                  wrapLines={true}
                  lineNumberStyle={lineNumberStyles}
                  lineStyle={lineNumber => {
                    let style = {display: 'block'};
                    return style;
                  }}
                >
                  {this.state.language.code}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
