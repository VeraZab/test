import React from 'react'
import PlotlyComponent from 'react-plotly.js'


export default class CodeVisual extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    let plot = {
      data: [{
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        name: 'SF Zoo',
        type: 'bar',
        'marker': {color: '#19d3f3'}
      }, {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [12, 18, 29],
        name: 'LA Zoo',
        type: 'bar',
        marker: {color: '#ab63fa'}
      }],
      layout: {
        width: 500,
        height: 580,
        plot_bgcolor: '#F5F7FA',
        paper_bgcolor: '#F5F7FA',
      }
    }

    const {data, layout} = this.props;



    if (data) {
      plot.data = eval(data);
    }
    if (layout) {
      plot.layout = eval(layout)
    }
    return (
      <PlotlyComponent
        data={ plot.data }

        layout={ plot.layout }
      />
    )
  }
}
