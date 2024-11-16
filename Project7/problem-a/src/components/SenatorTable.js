import React from "react";
import { TableHeader } from "./TableHeader.js";
import { SenatorRow } from "./SenatorRow.js";

// const EXAMPLE_SENATORS = [
//   { id: "C000127", name: "Maria Cantwell", state: "WA", party: "Democrat", phone: "202-224-3441", twitter: "SenatorCantwell" },
//   { id: "M001111", name: "Patty Murray", state: "WA", party: "Democrat", phone: "202-224-2621", twitter: "PattyMurray" }
// ];

export function SenatorTable(props) {
  const senatorsList = props.senatorsList;
  const columnNames = ["Name", "State", "Phone", "Twitter"];

  // const senatorRows = EXAMPLE_SENATORS.map(senator => 
  //   <SenatorRow key={senator.name} senatorData={senator} />
  // );

  const senatorRows = senatorsList.map(senator =>
    <SenatorRow key={senator.name} senatorData={senator} />
  );

  return (
    <table className="table table-bordered">
      <TableHeader columnNames={columnNames} />
      <tbody>
        {senatorRows}
      </tbody>
    </table>
  );
}