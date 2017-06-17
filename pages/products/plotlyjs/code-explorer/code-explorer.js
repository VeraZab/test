import styles from './code-explorer.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark} from 'react-syntax-highlighter/dist/styles';

const jsCode = `Plotly.d3.json('http://rickyreusser.com/animation-experiments/data/gapminder-with-frames.json', function(err, d) {  
  d.layout.sliders = [{
    currentvalue: {
      prefix: 'Year: ',
      xanchor: 'right',
      font: {
        size: 20,
        color: '#888'
      }
    },
    x: 0.1,
    len: 0.9,
    pad: {t: 40, b: 20},
    steps: d.frames.map(function(f) {
      return {
        method: 'animate',
        args: [[f.name], {mode: 'immediate', frame: {redraw: false}}],
        label: f.name
      }
    })
  }];
  
  d.layout.width = window.innerWidth;
  d.layout.height = window.innerHeight;
  d.layout.title = 'Life Expectancy vs. GDP Per Capita';
  
  Plotly.plot('graph', d.data, d.layout, d.config).then(function() {
    return Plotly.addFrames('graph', d.frames);
  });
});`;


const languages = [
    {
        id: '4',
        title: "Javascript",
        slug: 'javascript',
        language: 'javascript',
        code: jsCode,
        graphic_src: '/static/images/javascript_graphic.gif',
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
                        <div className="code-explorer-graphic-wrapper" style={graphicStyles}>

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
                            <div className="code-explorer-editor-actions">
                                <div className="buttons">
                                    <a href={this.state.language.button_link} className="button button-primary">
                                        {this.state.language.button_text} →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}