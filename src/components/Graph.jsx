import React from 'react'
import {
    Area,
    XAxis,
    YAxis,
    linearGradient , 
    CartesianGrid,
    LineChart,
    Label,
    Legend,
    Line,
    ResponsiveContainer,
    AreaChart,
    Tooltip,
  } from "recharts";
function Graph({data}) {
  return (
    <>
      <ResponsiveContainer>
          <AreaChart data={data} width={1000} height={1000}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tick= {false}>
          </XAxis>
          <YAxis domain = {["dataMin" , "dataMax"]} tick = {false} width={0}/>
          {/* <CartesianGrid strokeDasharray="0 0" /> */}
          <Tooltip />
          <Area type="monotone" dataKey="val" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
    </ResponsiveContainer>
  </>
  )
}

export default Graph
