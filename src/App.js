import React, { Component } from "react";
import { getResults } from "./services/persistanceService";
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {list: []}
  }

  componentDidMount() {
    const list = getResults()
    const nameWithSmallestDiff = this.getSmallestDifferenceTeamName(list)
    this.setState({
      list,
      nameWithSmallestDiff
    })
  }

  getSmallestDifferenceTeamName(list) {
    return list.reduce( (acc, item) => {
      const diff = Math.abs(item.A - item.F)
      return diff < acc.diff ? {diff, name: item.name} : acc
    }, {diff: Infinity, name: ''}).name
  }

  getRowClass(name) {
    return name === this.state.nameWithSmallestDiff ? 'App-row-with-smallest-diff' : ''
  }

  renderTeams() {
    console.log(this.state.nameWithSmallestDiff)
    return this.state.list.map((result, idx) => (
      <tr key={idx} className={this.getRowClass(result.name)}>
        <td>{result.name}</td>
        <td>{result.F}</td>
        <td>{result.A}</td>
        <td>{result.Pts}</td>
      </tr>
    ));
  }

  render() {
    return (
      <section className="section">
        <h1 className="title">Premier League results</h1>
        <p className="subtitle">
          Visualization of results <strong>with React</strong>!
        </p>
        <div className="columns">
          <div className="column">
            <div className="columns">
              <div className="column">
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Text input"
                    />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label">For</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Text input"
                    />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label">Against</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Text input"
                    />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label">Points</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Text input"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="button is-link">Add result</button>

            <table className="table">
              <thead>
                <tr>
                  <th>Team</th>
                  <th>Goals for</th>
                  <th>Goals against</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>{this.renderTeams()}</tbody>
            </table>
          </div>
          <div className="column">
            TODO: add chart with for / against difference<br />
            TODO: add chart with points results
          </div>
        </div>
      </section>
    );
  }
}

export default App;
