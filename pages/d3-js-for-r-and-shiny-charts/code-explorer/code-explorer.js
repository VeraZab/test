import styles from '../../../components/code-explorer/code-explorer.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark} from 'react-syntax-highlighter/dist/styles';

const codeSample = `m <- SharedData$new(mpg)

p1 <- ggplot(m, 
    aes(displ, fill = class)) + 
	geom_density()

p2 <- ggplot(m, 
    aes(displ, hwy, fill = class)) + 
    geom_point()

subplot(p1, p2) %>% 
    highlight("plotly_click") %>% 
    hide_legend()`;


const languages = [
    {
        id: '4',
        title: "R",
        slug: 'r',
        language: 'python',
        code: codeSample,
        graphic_src: 'https://images.plot.ly/static/marketing/r_graphic.gif',
        example_url: 'https://images.plot.ly/static/marketing/r_graphic.gif',
        button_text: 'Plotly R API',
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
                                    <a href={this.state.language.button_link} className="button button-primary button-emerald">
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