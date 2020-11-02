import React from "react";

import {
    VictoryBar,
    VictoryChart,
  } from "victory";

const BarChart = (props) => {
  return (
    <VictoryChart
    width={500}
    domainPadding={{ x: 10 }}
    >
        <VictoryBar
        animate={{
          duration: 1000,
          onLoad: { duration: 500 }
          
        }}
        barRatio={0.8}
        style={{ data: { fill: "#FFCC00", stroke: "black", strokeWidth: 1} }}
        data={props.data}/>
      </VictoryChart>
  );
};

export default BarChart;
