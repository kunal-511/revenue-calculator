import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface ChartProps {
  projectedRevenue: number[];
}

const Chart = ({ projectedRevenue }: ChartProps) => {
  const chartData = projectedRevenue.map((revenue, index) => ({
    year: `Year ${index + 1}`,
    revenue: revenue,
  }));
  return (
    <div className="space-y-4">
      <h3 className="text-lg md:text-xl font-semibold">
        Revenue Projection Chart
      </h3>
      <div className="h-[300px] ">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="hsl(var(--primary))"
              name="Projected Revenue"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
