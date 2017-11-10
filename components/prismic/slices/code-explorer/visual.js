import React from 'react'

import createPlotlyComponent from 'react-plotly.js/factory'
import axios from 'axios'
const PlotlyComponent = createPlotlyComponent(Plotly)

export default class CodeVisual extends React.Component {
  constructor(props) {
    super(props)

    let data,
      layout = false

    if (props.data) {
      data = true
    }
    if (props.layout) {
      layout = true
    }
    this.state = {
      data: [],
      layout: null,
      needToLoad: {
        data,
        layout,
      },
    }
  }

  componentDidMount() {
    if (this.state.needToLoad.data) {
      axios
        .get(this.props.data)
        .then(data => {
          this.setState({
            data: data.data,
          })
        })
        .catch(function(error) {})
    }
    if (this.state.needToLoad.layout) {
      axios
        .get(this.props.layout)
        .then(data => {
          this.setState({
            layout: data.data,
          })
        })
        .catch(function(error) {})
    }
  }

  render() {
    // const {data, layout} = this.props;

    let data, layout

    if (this.state.data.length) {
      data = eval(this.state.data)
    }

    if (this.state.layout) {
      layout = eval(this.state.layout)
    }

    let plot = {
      data,
      layout: {
        ...layout,
        width: this.props.size.width,
        height: this.props.size.height,
        plot_bgcolor: '#fff',
        paper_bgcolor: '#fff',
      },
    }

    return (
      <div>
        <PlotlyComponent
          key={this.props.key}
          data={plot.data}
          layout={plot.layout}
        />
      </div>
    )
  }
}
