import React, { Component } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

class ResultsChart extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state.results = []
  // }

  // prepareResults() {

  // }

  // componentDidMount() {
  //   const results = this.prepareResults()
  //   this.setState({results})
  // }

  render() {
    return (
      <ResponsiveContainer height={300}>
        <LineChart data={this.props.results} margin={{bottom: 100, left: 50}}>
          <XAxis dataKey="name" textAnchor="end" tick={{ angle: -45 }} interval={0}/>
          <YAxis domain={["auto", "auto"]} orientation="right"/>
          <CartesianGrid strokeDasharray="1 1"/>
          <Tooltip/>
          <Line type="monotone" dataKey="F" stroke="blue" animationDuration={200} />
          <Line type="monotone" dataKey="A" stroke="red" animationDuration={200} />
          <Line type="monotone" dataKey="diff" stroke="orange" animationDuration={200} />
          <Line type="monotone" dataKey="Pts" stroke="green" animationDuration={200} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default ResultsChart;
