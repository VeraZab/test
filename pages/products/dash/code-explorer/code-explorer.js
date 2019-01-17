import styles from './code-explorer.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark} from 'react-syntax-highlighter/dist/styles';

const jsCode = `import dash
import dash_core_components as dcc
import dash_html_components as html

import colorlover as cl
import datetime as dt
import flask
import os
import pandas as pd
import time

app = dash.Dash(
    __name__,
    assets_external_scripts='https://cdn.plot.ly/plotly-finance-1.28.0.min.js'
)
server = app.server

app.scripts.config.serve_locally = False

colorscale = cl.scales['9']['qual']['Paired']

df = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/dash-stock-ticker-demo.csv')

app.layout = html.Div([
    html.Div([
        html.H2('Finance Explorer',
                style={'display': 'inline',
                       'float': 'left',
                       'font-size': '2.65em',
                       'margin-left': '7px',
                       'font-weight': 'bolder',
                       'font-family': 'Product Sans',
                       'color': "rgba(117, 117, 117, 0.95)",
                       'margin-top': '20px',
                       'margin-bottom': '0'
                       }),
        html.Img(src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/logo/new-branding/dash-logo-by-plotly-stripe.png",
                style={
                    'height': '100px',
                    'float': 'right'
                },
        ),
    ]),
    dcc.Dropdown(
        id='stock-ticker-input',
        options=[{'label': s[0], 'value': str(s[1])}
                 for s in zip(df.Stock.unique(), df.Stock.unique())],
        value=['YHOO', 'GOOGL'],
        multi=True
    ),
    html.Div(id='graphs')
], className="container")

def bbands(price, window_size=10, num_of_std=5):
    rolling_mean = price.rolling(window=window_size).mean()
    rolling_std  = price.rolling(window=window_size).std()
    upper_band = rolling_mean + (rolling_std*num_of_std)
    lower_band = rolling_mean - (rolling_std*num_of_std)
    return rolling_mean, upper_band, lower_band

@app.callback(
    dash.dependencies.Output('graphs','children'),
    [dash.dependencies.Input('stock-ticker-input', 'value')])

def update_graph(tickers):
    graphs = []

    if not tickers:
        graphs.append(html.H3(
            "Select a stock ticker.",
            style={'marginTop': 20, 'marginBottom': 20}
        ))
    else:
        for i, ticker in enumerate(tickers):

            dff = df[df['Stock'] == ticker]

            candlestick = {
                'x': dff['Date'],
                'open': dff['Open'],
                'high': dff['High'],
                'low': dff['Low'],
                'close': dff['Close'],
                'type': 'candlestick',
                'name': ticker,
                'legendgroup': ticker,
                'increasing': {'line': {'color': colorscale[0]}},
                'decreasing': {'line': {'color': colorscale[1]}}
            }
            bb_bands = bbands(dff.Close)
            bollinger_traces = [{
                'x': dff['Date'], 'y': y,
                'type': 'scatter', 'mode': 'lines',
                'line': {'width': 1, 'color': colorscale[(i*2) % len(colorscale)]},
                'hoverinfo': 'none',
                'legendgroup': ticker,
                'showlegend': True if i == 0 else False,
                'name': '{} - bollinger bands'.format(ticker)
            } for i, y in enumerate(bb_bands)]
            graphs.append(dcc.Graph(
                id=ticker,
                figure={
                    'data': [candlestick] + bollinger_traces,
                    'layout': {
                        'margin': {'b': 0, 'r': 10, 'l': 60, 't': 0},
                        'legend': {'x': 0}
                    }
                }
            ))

    return graphs

if __name__ == '__main__':
    app.run_server(debug=True)`;

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
              <iframe src="https://dash-gallery.plotly.host/dash-stock-tickers-demo-app" />
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
