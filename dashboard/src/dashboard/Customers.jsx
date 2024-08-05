import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import './Coustomers.css'
function Coustomers() {
  const data01 = [
    { name: 'Age>12:18', value: 40 },
    { name: 'Age>19:25', value: 10 },
    { name: 'Age>26:35', value: 30 },
    { name: 'Age>35:', value: 20 },
  ];
  return (
   <div className='customer'>
    <div><h1>Customer Age</h1></div>
    <div className='chart'>
   <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
   </div>
   </div>
  )
}

export default Coustomers
