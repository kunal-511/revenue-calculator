import React from "react";
const RevenueSummary = ({ totalRevenue, averageGrowth, }) => {
    return (React.createElement("div", { className: "bg-gray-100 p-4 rounded-md space-y-2" },
        React.createElement("h3", { className: "text-lg md:text-xl font-semibold" }, "Revenue Upside Summary"),
        React.createElement("p", { className: "text-sm md:text-base" },
            "Total Revenue over 5 years:",
            " ",
            React.createElement("span", { className: "font-semibold" }, totalRevenue.toLocaleString())),
        React.createElement("p", { className: "text-sm md:text-base" },
            "Average Annual Growth",
            " ",
            React.createElement("span", { className: "font-semibold" },
                " ",
                averageGrowth,
                "%"))));
};
export default RevenueSummary;
