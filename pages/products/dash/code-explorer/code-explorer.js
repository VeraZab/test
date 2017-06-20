import styles from './code-explorer.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark} from 'react-syntax-highlighter/dist/styles';

const jsCode = `import dash
from dash.dependencies import Input, Output
import dash_core_components as dcc
import dash_html_components as html
from pandas_datareader import data as web
from datetime import datetime as dt

app = dash.Dash()

app.layout = html.Div([
    html.H1('Stock Tickers'),
    dcc.Dropdown(
        id='my-dropdown',
        options=[
            {'label': 'Coke', 'value': 'COKE'},
            {'label': 'Tesla', 'value': 'TSLA'},
            {'label': 'Apple', 'value': 'AAPL'}
        ],
        value='COKE'
    ),
    dcc.Graph(id='my-graph')
])

@app.callback(Output('my-graph', 'figure'), [Input('my-dropdown', 'value')])
def update_graph(selected_dropdown_value):
    df = web.DataReader(
        selected_dropdown_value, data_source='google',
        start=dt(2017, 1, 1), end=dt.now())
    return {
        'data': [{
            'x': df.index,
            'y': df.Close
        }]
    }

if __name__ == '__main__':
    app.run_server()`;


const languages = [
    {
        id: '4',
        title: "Javascript",
        slug: 'javascript',
        language: 'javascript',
        code: jsCode,
        graphic_src: '/static/images/dash/hello-world.gif',
        example_url: '/static/images/javascript_graphic.gif',
        button_text: 'Plotly Javascript API',
        button_link: 'http://google.com'
    }
];


export default class CodeExplorer extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            language: languages[0]
        };
    }


    setLanguage(language) {
        this.setState({
            language: language
        });
    }

    render() {
        let tabs = languages.map(language => {
            return (
                <div key={language.id}
                     className={`code-explorer-editor-tab ${this.state.language.id == language.id ? "active" : ""}`}>
                    <div className="code-explorer-editor-tab-label"
                         onClick={() => {
                             this.setLanguage(language)
                         }}>
                        {language.title}
                    </div>
                </div>
            );
        });

        let graphicStyles = {
            backgroundImage: 'url(' + this.state.language.graphic_src + ')'
        };

        let lineNumberStyles = {
            opacity: "0.25"
        };


        return (
            <div className="code-explorer gutter-top">
                <style dangerouslySetInnerHTML={{__html: styles}}/>
                <div className="code-explorer-wrapper">
                    <div className="code-explorer-graphic">
                        <div className="code-explorer-graphic-wrapper desktop-graphic">
                        <iframe src="https://dash-hello-world.herokuapp.com/"></iframe>
                        </div>
                        <div className="code-explorer-graphic-wrapper mobile-graphic">
                            <div className="graphic-img-wrapper">
                                <img src={languages[0].graphic_src} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="code-explorer-editor">
                        <div className="code-explorer-editor-wrapper">
                            <div className="code-explorer-editor-content">
                                <SyntaxHighlighter language={this.state.language.language}
                                                   style={atomOneDark}
                                                   showLineNumbers={true}
                                                   wrapLines={true}
                                                   lineNumberStyle={lineNumberStyles}
                                                   lineStyle={lineNumber => {
                                                       let style = {display: 'block'};
                                                       return style;
                                                   }}>
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