import React, { Component } from "react";
import { getResults } from "./services/persistanceService";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {list: []}
  }

  componentDidMount() {
    const list = getResults()
    this.setState({list})
  }

  renderTeams() {
    return this.state.list.map((result, idx) => (
      <tr key={idx}>
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
