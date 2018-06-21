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

  render() {
    return (
      <ResponsiveContainer height={300}>
        <LineChart data={this.props.results} margin={{bottom: 100, left: 50}}>
          <XAxis dataKey="name" textAnchor="end" tick={{ angle: -45 }} interval={0}/>
          <YAxis domain={["auto", "auto"]} orientation="right"/>
          <CartesianGrid strokeDasharray="1 1"/>
          <Tooltip/>
          <Line type="monotone" dataKey="Scored" stroke="blue" animationDuration={200} />
          <Line type="monotone" dataKey="Lost" stroke="red" animationDuration={200} />
          <Line type="monotone" dataKey="Difference" stroke="orange" animationDuration={200} />
          <Line type="monotone" dataKey="Points" stroke="green" animationDuration={200} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default ResultsChart;
