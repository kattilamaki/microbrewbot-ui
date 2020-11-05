import React from "react";

const ResultTable = (props) => {
  return (
    <table class="table table-hover">
      <thead class="thead-dark">
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
