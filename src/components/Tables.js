import React from "react";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow, } from "./ui/table";
const Tables = ({ projectedRevenue, highestGrowthYear }) => {
    return (React.createElement("div", { className: "space-y-4" },
        React.createElement("h3", { className: "text-lg md:text-xl font-semibold" }, "Project Revenue Output"),
        React.createElement("div", { className: "overflow-x-auto" },
            React.createElement(Table, null,
                React.createElement(TableHeader, null,
                    React.createElement(TableRow, null,
                        React.createElement(TableHead, { className: "w-1/2" }, "Year"),
                        React.createElement(TableHead, { className: "w-1/2" }, "Project Revenue "))),
                React.createElement(TableBody, null, projectedRevenue.map((revenue, index) => (React.createElement(TableRow, { key: index, className: index + 1 === highestGrowthYear ? "bg-green-400" : "" },
                    React.createElement(TableCell, null, index + 1),
                    React.createElement(TableCell, null, revenue.toLocaleString())))))))));
};
export default Tables;
