import React from "react";

export function TableHeader(props) {
    const columnNames = props.columnNames;
    const tableHeadings = columnNames.map((name) => {
        return <th key={name}>{name}</th>
    });

    return (
        <thead>
            <tr>{tableHeadings}</tr>
        </thead>
    );
}