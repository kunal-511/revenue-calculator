import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, } from "recharts";
const Chart = ({ projectedRevenue }) => {
    const chartData = projectedRevenue.map((revenue, index) => ({
        year: `Year ${index + 1}`,
        revenue: revenue,
    }));
    return (React.createElement("div", { className: "space-y-4" },
        React.createElement("h3", { className: "text-lg md:text-xl font-semibold" }, "Revenue Projection Chart"),
        React.createElement("div", { className: "h-[300px] " },
            React.createElement(ResponsiveContainer, { width: "100%", height: "100%" },
                React.createElement(LineChart, { data: chartData },
                    React.createElement(CartesianGrid, { strokeDasharray: "3 3" }),
                    React.createElement(XAxis, { dataKey: "year" }),
                    React.createElement(YAxis, null),
                    React.createElement(Tooltip, null),
                    React.createElement(Legend, null),
                    React.createElement(Line, { type: "monotone", dataKey: "revenue", stroke: "hsl(var(--primary))", name: "Projected Revenue" }))))));
};
export default Chart;
