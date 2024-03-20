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
  const ddata = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];
function Graph({data}) {
  return (
    <>
    <div style={{color:"white" , fontSize : "1rem" , position:"relative" , zIndex:"2" , top:0 , right:0}}> 
        MSFT
    </div>
    <ResponsiveContainer>
   <AreaChart data={data}
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
