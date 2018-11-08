import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import graphData from './graphData'

const Graph = () => (
  <div>
    Hello On Graph
    <ResponsiveLine 
      data={graphData}
      margin={{
        "top": 50,
        "right": 110,
        "bottom": 50,
        "left": 60
      }}
      xScale={{
        "type": "linear"
      }}
      yScale={{
        "type": "linear",
        "stacked": true,
        "min": "auto",
        "max": "auto"
      }}
      minY="auto"
      maxY="auto"
      stacked={true}
      axisTop={null}
      axisRight={null}
      axisBottom={{
          "orient": "bottom",
          "tickSize": 5,
          "tickPadding": 5,
          "tickRotation": 0,
          "legend": "transportation",
          "legendOffset": 36,
          "legendPosition": "middle"
      }}
      axisLeft={{
          "orient": "left",
          "tickSize": 5,
          "tickPadding": 5,
          "tickRotation": 0,
          "legend": "count",
          "legendOffset": -40,
          "legendPosition": "middle"
      }}
      dotSize={10}
      dotColor="inherit:darker(0.3)"
      dotBorderWidth={2}
      dotBorderColor="#ffffff"
      enableDotLabel={true}
      dotLabel="y"
      dotLabelYOffset={-12}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
    Hello Below Graph
  </div>
)

export default Graph