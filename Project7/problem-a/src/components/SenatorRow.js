import React from "react";

//example senator data objects:
// { id: "C000127", name: "Maria Cantwell", state: "WA", party: "Democrat", phone: "202-224-3441", twitter: "SenatorCantwell" },
// { id: "M001111", name: "Patty Murray", state: "WA", party: "Democrat", phone: "202-224-2621", twitter: "PattyMurray" }

export function SenatorRow(props) {
    const senatorData = props.senatorData;
    const senatorName = <td>{senatorData.name}</td>;
    const senatorPartyState = <td>{senatorData.party.charAt(0)} - {senatorData.state}</td>;
    const senatorPhone = <td><a href={"tel:" + senatorData.phone}>{senatorData.phone}</a></td>;
    const senatorTwitter = <td><a href={"https://twitter.com/" + senatorData.twitter}>@{senatorData.twitter}</a></td>;

    return (
        <tr>
            {senatorName}
            {senatorPartyState}
            {senatorPhone}
            {senatorTwitter}
        </tr>
    );
}