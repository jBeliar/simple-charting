import React, { Component } from "react";

const data = [
  { name: "Arsenal", F: 79, A: 36, Pts: 87 },
  { name: "Liverpool", F: 67, A: 30, Pts: 80 },
  { name: "Manchester_U", F: 87, A: 45, Pts: 77 },
  { name: "Newcastle", F: 74, A: 52, Pts: 71 },
  { name: "Leeds", F: 53, A: 37, Pts: 66 },
  { name: "Chelsea", F: 66, A: 38, Pts: 64 },
  { name: "West_Ham", F: 48, A: 57, Pts: 53 },
  { name: "Aston_Villa", F: 46, A: 47, Pts: 50 },
  { name: "Tottenham", F: 49, A: 53, Pts: 50 },
  { name: "Blackburn", F: 55, A: 51, Pts: 46 },
  { name: "Southampton", F: 46, A: 54, Pts: 45 },
  { name: "Middlesbrough", F: 35, A: 47, Pts: 45 },
  { name: "Fulham", F: 36, A: 44, Pts: 44 },
  { name: "Charlton", F: 38, A: 49, Pts: 44 },
  { name: "Everton", F: 45, A: 57, Pts: 43 },
  { name: "Bolton", F: 44, A: 62, Pts: 40 },
  { name: "Sunderland", F: 29, A: 51, Pts: 40 },
  { name: "Ipswich", F: 41, A: 64, Pts: 36 },
  { name: "Derby", F: 33, A: 63, Pts: 30 },
  { name: "Leicester", F: 30, A: 64, Pts: 28 }
];

class App extends Component {
  renderTeams() {
    return data.map((result, idx) => (
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
