import styles from '../../../../../components/code-explorer/code-explorer.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark} from 'react-syntax-highlighter/dist/styles';

const pythonCode = `colors=['rgb(53,195,176)',
'rgb(168,201,121)',
'rgb(255,210,181)',
'rgb(255,169,164)',
'rgb(255,140,148)']

points=points_sphere(N=100)
data2=get_data(points,  R=1.005, arcs=False, colorscale=[], colors=colors)

fig2 = Figure(data=data2, layout=plot_layout(ax=noaxis))
fig2['layout'].update(title='Polyhedral approximation of a spherical Voronoi diagram')
py.iplot(fig2, filename='polyhedral-voronoi')`;
const rCode = `m <- SharedData$new(mpg)

p1 <- ggplot(m, 
    aes(displ, fill = class)) + 
	geom_density()

p2 <- ggplot(m, 
    aes(displ, hwy, fill = class)) + 
    geom_point()

subplot(p1, p2) %>% 
    highlight("plotly_click") %>% 
    hide_legend()`;
const matlabCode = `x = linspace(-2*pi,2*pi);
y = linspace(0,4*pi);
[X,Y] = meshgrid(x,y);
Z = sin(X)+cos(Y);

figure

% Use contour() for a contour plot
contour(X,Y,Z)

% Use surf() for a surface plot
% surf(X,Y,Z)

% CONVERT TO PLOTLY
response = fig2plotly();
plotly_url = response.url;`;
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
        id: '1',
        title: 'Python',
        slug: 'python',
        language: 'python',
        code: pythonCode,
        graphic_src: 'https://images.plot.ly/static/marketing/python_graphic.gif',
        example_url: 'https://images.plot.ly/static/marketing/python_graphic.gif',
        button_text: 'Plotly Python API',
        button_link: 'https://plot.ly/python'
    },
    {
        id: '2',
        title: "R",
        slug: 'r',
        language: 'r',
        code: rCode,
        graphic_src: 'https://images.plot.ly/static/marketing/r_graphic.gif',
        example_url: 'https://images.plot.ly/static/marketing/r_graphic.gif',
        button_text: 'Plotly R API',
        button_link: 'https://plot.ly/r'
    },
    {
        id: '3',
        title: "MATLAB",
        slug: 'matlab',
        language: 'matlab',
        code: matlabCode,
        graphic_src: 'https://images.plot.ly/static/marketing/matlab_graphic.gif',
        example_url: 'https://images.plot.ly/static/marketing/matlab_graphic.gif',
        button_text: 'Plotly matlab API',
        button_link: 'https://plot.ly/matlab'
    },
    {
        id: '4',
        title: "Javascript",
        slug: 'javascript',
        language: 'javascript',
        code: jsCode,
        graphic_src: 'https://images.plot.ly/static/marketing/javascript_graphic.gif',
        example_url: 'https://images.plot.ly/static/marketing/javascript_graphic.gif',
        button_text: 'Plotly Javascript API',
        button_link: 'https://plot.ly/javascript'
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
                            <div className="code-explorer-editor-header">
                                {tabs}
                            </div>
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
