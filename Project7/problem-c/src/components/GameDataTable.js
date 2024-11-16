import React, { useState } from "react";
import _ from 'lodash';

export default function GameDataTable(props) {

  //Your state and event work goes here
  const [sortByCriteria, setSortByCriteria] = useState(null);
  const [isAscending, setIsAscending] = useState(null);

  const handleClick = (event) => {
    const name = event.currentTarget.name;
    if (sortByCriteria !== name) {
      setSortByCriteria(name);
      setIsAscending(true);
    } else {
      if (isAscending === true) {
        setIsAscending(false);
      } else {
        setSortByCriteria(null);
        setIsAscending(null);
      }
    }
  };

  //Map the `props.data` value into an array of `<GameDataRow>` elements here
  const data = props.data;

  let sortedData;
  if (sortByCriteria !== null) {
    sortedData = _.sortBy(data, sortByCriteria);
    if (isAscending === false) {
      _.reverse(sortedData);
    }
  } else {
    sortedData = data;
  }

  const gameDataRows = sortedData.map((gameObj) => {
    return <GameDataRow key={gameObj.year} gameObj={gameObj} />
  });

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>
              Year
              <SortButton name="year" active={sortByCriteria === "year"} ascending={isAscending} onClick={handleClick} />
            </th>
            <th className="text-end">
              Winner
              <SortButton name="winner" active={sortByCriteria === "winner"} ascending={isAscending} onClick={handleClick} />
            </th>
            <th className="text-center">
              Score
              <SortButton name="score" active={sortByCriteria === "score"} ascending={isAscending} onClick={handleClick} />
            </th>
            <th>
              Runner-Up
              <SortButton name="runner_up" active={sortByCriteria === "runner_up"} ascending={isAscending} onClick={handleClick} />
            </th>
          </tr>
        </thead>
        <tbody>
          {gameDataRows}
        </tbody>
      </table>
    </div>
  );
}

//Component for managing display logic of sort button
//Props: 
//  `active` [boolean] if icon should be highlighted,
//  `ascending` [boolean] if icon should be in ascending order (flipped)
//  `onClick` [function] click handler (passthrough)
function SortButton(props) {
  let iconClasses = ""
  if (props.active) { iconClasses += ` active` }
  if (props.ascending) { iconClasses += ` flip` };

  return (
    <button className="btn btn-sm btn-sort" name={props.name} onClick={props.onClick}>
      <span className={"material-icons" + iconClasses} aria-label={`sort by ${props.name}`}>sort</span>
    </button>
  );
}

function GameDataRow({ gameObj }) { //gameObj = props.gameObj
  return (
    <tr>
      <td>{gameObj.year}</td>
      <td className="text-end">{gameObj.winner} {gameObj.winner_flag}</td>
      <td className="text-center">{gameObj.score}</td>
      <td>{gameObj.runner_up_flag}&nbsp;&nbsp;{gameObj.runner_up}</td>
    </tr>
  );
}