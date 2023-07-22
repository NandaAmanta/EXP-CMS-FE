import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Tools", uv: 600, pv: 600, amt: 400 },
  { name: "Activity", uv: 50, pv: 2400, amt: 2400 },
  { name: "Used", uv: 400, pv: 2400, amt: 2400 },
];

const RenderLineChart: React.FC = () => (
  <div style={{ width: "83vw" }}>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line
          type="monotone"
          dataKey="uv"
          stroke="rgb(75, 192, 192)"
          fill="false"
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default RenderLineChart;
