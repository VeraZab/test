import styles from 'components/code-explorer/code-explorer.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark} from 'react-syntax-highlighter/dist/styles';

const codeSample = `colors=['rgb(53,195,176)',
'rgb(168,201,121)',
'rgb(255,210,181)',
'rgb(255,169,164)',
'rgb(255,140,148)']

points=points_sphere(N=100)
data2=get_data(points,  R=1.005, arcs=False, colorscale=[], colors=colors)

fig2 = Figure(data=data2, layout=plot_layout(ax=noaxis))
fig2['layout'].update(title='Polyhedral approximation of a spherical Voronoi diagram')
py.iplot(fig2, filename='polyhedral-voronoi')`;


const languages = [
    {
        id: '4',
        title: "Python",
        slug: 'python',
        language: 'python',
        code: codeSample,
        graphic_src: 'https://images-plotly.imgix.net/static/marketing/python_graphic.gif',
        example_url: 'https://images-plotly.imgix.net/static/marketing/python_graphic.gif',
        button_text: 'Plotly Python API',
        button_link: 'https://plot.ly/python'
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
