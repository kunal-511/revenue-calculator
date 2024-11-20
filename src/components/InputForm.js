import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
const InputForm = ({ currentRevenue, setCurrentRevenue, growthRate, setGrowthRate, errors, }) => {
    return (React.createElement("div", { className: "space-y-6" },
        React.createElement("div", { className: "space-y-2" },
            React.createElement(Label, { htmlFor: "current-revenue", className: "text-sm font-medium" }, "Current Revenue"),
            React.createElement(Input, { id: "current-revenue", type: "number", placeholder: "Enter current revenue", value: currentRevenue !== null && currentRevenue !== void 0 ? currentRevenue : "", onChange: (e) => setCurrentRevenue(e.target.value ? Number(e.target.value) : null), className: `w-full ${errors.currentRevenue ? "border-red-500" : ""}`, "aria-invalid": errors.currentRevenue ? "true" : "false", "aria-describedby": errors.currentRevenue ? "current-revenue-error" : undefined }),
            errors.currentRevenue && (React.createElement("p", { id: "current-revenue-error", className: "text-sm text-red-500 mt-1" }, errors.currentRevenue))),
        React.createElement("div", { className: "space-y-2" },
            React.createElement(Label, { htmlFor: "growth-rate", className: "text-sm font-medium" }, "Annual Growth Rate (%)"),
            React.createElement("div", { className: "flex items-center space-x-4" },
                React.createElement(Slider, { id: "growth-rate", min: -100, max: 100, step: 0.1, value: [growthRate], onValueChange: (value) => setGrowthRate(value[0]), className: "flex-grow" }),
                React.createElement(Input, { type: "number", value: growthRate, onChange: (e) => setGrowthRate(Number(e.target.value)), className: "w-20", "aria-label": "Growth rate percentage" })))));
};
export default InputForm;
