import React, { useState } from "react";
import { LineChart, Line, CartesianGrid, ResponsiveContainer } from "recharts";
import "./Chart.scss";

const data = [
  { name: "Tools", uv: 600, pv: 600, amt: 400 },
  { name: "Activity", uv: 50, pv: 2400, amt: 2400 },
  { name: "Used", uv: 400, pv: 2400, amt: 2400 },
];

interface DropdownSelection {
  selectedYear: string;
}

export const RenderLineChart: React.FC = () => (
  <div style={{ width: "83vw" }} className="sm:w-auto md:w-full  ">
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


const Chart = () => {
  const [state, setState] = useState<DropdownSelection>({
    selectedYear: "This Year",
  });

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = event.target.value;
    setState((prevState) => ({
      ...prevState,
      selectedYear: selectedYear,
    }));
  };

  return (
    <>
      <div className="top_overview">
        <h1 className="text-3xl font-bold">Overview</h1>
      </div>
      <div className="overview">
        <div className="overview__text_chart">
          <span>Activity</span>
          <select value={state.selectedYear} onChange={handleYearChange}>
            <option value="This Year">This Year</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            {/* Add more years as needed */}
          </select>
        </div>
        <div className="overview__chart">
          {/* <Chart year={state.selectedYear} /> */}
          <RenderLineChart />
        </div>
        <div className="overview__total_used">
          <div className="text_total">
            <span>150</span>
            <span>Tools</span>
          </div>
          <div className="text_total">
            <span>21k</span>
            <span>Activity</span>
          </div>
          <div className="text_total">
            <span>20</span>
            <span>Used</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
