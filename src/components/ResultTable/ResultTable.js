import React from "react";

const ResultTable = (props) => {
  return (
    <table className="table table-hover table-sm">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Beer</th>
          <th scope="col">Brewery</th>
          <th scope="col">Check-in #</th>
        </tr>
      </thead>
      <tbody>{props.beers}</tbody>
    </table>
  );
};

export default ResultTable;
