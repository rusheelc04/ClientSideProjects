import React from "react";
import { SenatorTable } from "./SenatorTable.js";

export function App(props) {
    const senatorsList = props.senatorsList;
    const title = "US Senators (Jan 2022)";

    return (
        <div className="container">
            <h1>{title}</h1>
            <SenatorTable senatorsList={senatorsList} />
        </div>
    );
}