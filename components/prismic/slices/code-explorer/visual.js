import React from 'react'

import createPlotlyComponent from 'react-plotly.js/factory'
import Plotly from 'plotly.js/dist/plotly-basic'

const PlotlyComponent = createPlotlyComponent(Plotly)


export default class CodeVisual extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

  }


  render() {

    const {data, layout} = this.props;


    let plot = {
      data: eval(data),
      layout: {
        ...eval(layout),
        width: this.props.size.width,
        height: this.props.size.height,
        plot_bgcolor: '#fff',
        paper_bgcolor: '#fff'
      }
    }

    return (
      <PlotlyComponent
        key={this.props.key}
        data={ plot.data }
        layout={ plot.layout }
      />
    )
  }
}
