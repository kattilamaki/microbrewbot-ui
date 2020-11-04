import React from "react";

import {
    VictoryLine,
    VictoryChart,
  } from "victory";

const LineChart = (props) => {

  if (props.data.length !== 0) {
    return (
      <VictoryChart
      width={500}
      domainPadding={{ x: 10 }}
      >
          <VictoryLine
          animate={{
            duration: 1000,
            onLoad: { duration: 500 }
            
          }}
          style={{ data: { stroke: "#c43a31"} }}
          data={props.data}/>
        </VictoryChart>
    );
  } else {
    return (<p></p>);
  }
  
};

export default LineChart;
