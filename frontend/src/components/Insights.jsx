import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Jan', logs: 30 },
  { name: 'Feb', logs: 20 },
  { name: 'Mar', logs: 27 },
  { name: 'Apr', logs: 18 },
  { name: 'May', logs: 23 },
  { name: 'Jun', logs: 34 },
  { name: 'Jul', logs: 45 },
  { name: 'Aug', logs: 30 },
  { name: 'Sep', logs: 25 },
  { name: 'Oct', logs: 40 },
  { name: 'Nov', logs: 35 },
  { name: 'Dec', logs: 50 },
];

const pieData = [
  { name: 'IT', value: 400 },
  { name: 'HR', value: 300 },
  { name: 'Finance', value: 300 },
  { name: 'Marketing', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Insights = () => {
  return (
    <div className="p-4 mt-16 overflow-y-auto h-screen custom-scrollbar">
      <h2 className="text-[#16425b] text-xl font-bold mb-4">Insights</h2>
      <p className="text-[#16425b] mb-4">Here you can find insights derived from the logs.</p>
      
      <div className="mb-8">
        <h3 className="text-[#16425b] text-lg font-bold mb-4">Monthly Logs</h3>
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="logs" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>

      <div className="mb-8">
        <h3 className="text-[#16425b] text-lg font-bold mb-4">Logs by Department</h3>
        <BarChart width={600} height={300} data={pieData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </div>

      <div className="mb-8">
        <h3 className="text-[#16425b] text-lg font-bold mb-4">Department Distribution</h3>
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            cx={200}
            cy={200}
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default Insights;