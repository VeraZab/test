import React  from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
import axios from 'axios';
const PlotlyComponent = createPlotlyComponent(Plotly);

export default class CodeVisual extends React.Component {
  constructor(props) {
    super(props);

    const { data, layout } = props;

    this.state = {
      data: [],
      layout: null,
      loading: true,
      dataLoaded: false,
      layoutLoaded: false,
      needToLoad: {
        data,
        layout,
      },
    };
  }

  async fetchData() {
    const { data, layout } = this.props;

    if (data || layout) {
      this.setState({
        loading: true,
      });
    }

    if (data) {
      await axios
        .get(data)
        .then((res) => {
          this.setState({
            data: res.data,
            dataLoaded: true,
          });
        })
        .catch(function(error) {});
    }
    if (layout) {
      await axios
        .get(layout)
        .then((res) => {
          this.setState({
            layout: res.data,
            layoutLoaded: true,
          });
        })
        .catch(function(error) {});
    }

    if (data && layout && this.state.dataLoaded && this.state.layoutLoaded) {
      this.setState({
        loading: false,
      });
    }
    if (data && !layout && this.state.dataLoaded) {
      this.setState({
        loading: false,
      });
    }
    if (!data && layout && this.state.layoutLoaded) {
      this.setState({
        loading: false,
      });
    }
  }

  componentDidMount() {
    if (
      (this.props.data && !this.state.dataLoaded) ||
      (this.props.layout && !this.state.layoutLoaded)
    ) {
      this.fetchData();
    }
  }

  render() {
    const { data, layout, loading } = this.state;

    const { key, size: { width, height } } = this.props;

    if (loading) {
      return <div style={{
        flexGrow: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>Loading...</div>;
    }

    let Data = null;
    let Layout = null;

    if (data && data.length) {
      Data = eval(data);
    }

    if (layout) {
      Layout = eval(layout);
    }

    const plot = {
      data: Data,
      layout: {
        ...Layout,
        width,
        height,
        plot_bgcolor: '#fff',
        paper_bgcolor: '#fff',
      },
    };

    return <PlotlyComponent key={key} data={plot.data} layout={plot.layout} />;
  }
}
