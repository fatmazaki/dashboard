import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Products.css'

function Products() {
  const data = [
    {
      name: 'Cairo',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Giza',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Alex',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Aswan',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'North Coast',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Luxor',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Sharm-Elsheikh',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className='products'>
      <div><h1>Sales</h1></div>
      <div className='chart'>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Products
