import React from "react";

import {
    VictoryBar,
    VictoryChart,
    VictoryTheme,
  } from "victory";

const BarChart = (props) => {

  if (props.data.length !== 0) {
    return (
      <VictoryChart
      theme={VictoryTheme.material}
      width={500}
      domainPadding={{ x: 40 }}
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
  } else {
    return (<p></p>);
  }
  
};

export default BarChart;
