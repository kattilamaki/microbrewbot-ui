import React from "react";

import {
    VictoryBar,
    VictoryChart,
  } from "victory";

const BarChart = (props) => {
  return (
    <VictoryChart>
        <VictoryBar
        style={{ data: { fill: "#c43a31" } }}
        data={props.data}/>
      </VictoryChart>
  );
};

export default BarChart;
