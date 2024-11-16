import React, { useState } from 'react'; //import React Component

export default function TeamSelectForm(props) {

  //Your work goes here
  const [selectedTeam, setSelectedTeam] = useState("");
  const [includeRunnerUp, setIncludeRunnerUp] = useState(false);

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleRunnerUpChange = (event) => {
    setIncludeRunnerUp(event.target.checked);
  };

  const handleSubmitClick = () => {
    props.applyFilterCallback(selectedTeam, includeRunnerUp);
  };

  const optionElems = props.teamOptions.map((teamName) => {
    return <option key={teamName} value={teamName}>{teamName}</option>
  })

  return (
    <div className="row align-items-center mb-3">
      <div className="col-auto">

        <select id="teamSelect" className="form-select" value={selectedTeam} onChange={handleTeamChange}>
          <option value="">Show all teams</option>
          {optionElems}
        </select>
      </div>
      <div className="col-auto">
        <div className="form-check">
          <input id="runnerupCheckbox" type="checkbox" className="form-check-input" checked={includeRunnerUp} onChange={handleRunnerUpChange} />
          <label htmlFor="runnerupCheckbox" className="form-check-label">Include runner-up</label>
        </div>
      </div>
      <div className="col-auto">
        <button id="submitButton" type="submit" className="btn btn-warning" onClick={handleSubmitClick}>Apply Filter</button>
      </div>
    </div>
  );
}