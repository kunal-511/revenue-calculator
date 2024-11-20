import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "../ui/card";
import { Button } from "../ui/button";
import InputForm from "../InputForm";
import Tables from "../Tables";
import RevenueSummary from "../RevenueSummary";
import Chart from "../Chart";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { CheckCircle2 } from "lucide-react";
const Home = () => {
    const [currentRevenue, setCurrentRevenue] = useState(null);
    const [growthRate, setGrowthRate] = useState(5);
    const [projectedRevenue, setProjectedRevenue] = useState([]);
    const [highestGrowthYear, setHighestGrowthYear] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [averageGrowth, setAverageGrowth] = useState(0);
    const [errors, setErrors] = useState({ currentRevenue: "", growthRate: "" });
    const [showSuccess, setShowSuccess] = useState(false);
    const calculateProjectedRevenue = () => {
        let hasErrors = false;
        const newErrors = { currentRevenue: "", growthRate: "" };
        if (currentRevenue === null || isNaN(currentRevenue)) {
            newErrors.currentRevenue = "Please enter a valid current revenue";
            hasErrors = true;
        }
        setErrors(newErrors);
        if (hasErrors) {
            setShowSuccess(false);
            return;
        }
        const revenue = [];
        let highest = 0;
        let highestYear = 0;
        let total = currentRevenue;
        for (let i = 0; i < 5; i++) {
            const projected = i === 0
                ? currentRevenue * (1 + growthRate / 100)
                : revenue[i - 1] * (1 + growthRate / 100);
            revenue.push(Number(projected.toFixed(2)));
            total += projected;
            if (i > 0) {
                const growth = (revenue[i] - revenue[i - 1]) / revenue[i - 1];
                if (growth > highest) {
                    highest = growth;
                    highestYear = i + 1;
                }
            }
        }
        setProjectedRevenue(revenue);
        setHighestGrowthYear(highestYear);
        setTotalRevenue(Number(total.toFixed(2)));
        setAverageGrowth(parseFloat(Number((Math.pow((revenue[4] / currentRevenue), (1 / 5)) - 1) * 100).toFixed(2)));
        setShowSuccess(true);
    };
    const downloadCSV = () => {
        const csvContent = `Year,Projected Revenue \n${projectedRevenue
            .map((revenue, index) => `${index + 1},${revenue}`)
            .join("\n")}`;
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "projected_revenue.csv");
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    return (React.createElement(Card, { className: "w-full max-w-4xl mx-auto bg-cyan-200 " },
        React.createElement(CardHeader, null,
            React.createElement(CardTitle, { className: "text-2xl md:text-3xl" }, "Revenue Upside Calculator"),
            React.createElement(CardDescription, { className: "text-sm md:text-base" }, "Calculate projected revenue for the next 5 years")),
        React.createElement(CardContent, null,
            React.createElement("div", { className: "space-y-6" },
                React.createElement(InputForm, { currentRevenue: currentRevenue, setCurrentRevenue: setCurrentRevenue, growthRate: growthRate, setGrowthRate: setGrowthRate, errors: errors }),
                React.createElement(Button, { onClick: calculateProjectedRevenue, className: "w-full md:w-auto" }, "Calculate Projected Revenue"),
                showSuccess && (React.createElement(Alert, { className: "bg-green-100 border-green-500" },
                    React.createElement(CheckCircle2, { className: "h-4 w-4 text-green-500" }),
                    React.createElement(AlertTitle, null, "Success"),
                    React.createElement(AlertDescription, null, "The projected revenue has been calculated successfully."))),
                projectedRevenue.length > 0 && (React.createElement("div", { className: "space-y-6 mt-8" },
                    React.createElement(Tables, { projectedRevenue: projectedRevenue, highestGrowthYear: highestGrowthYear }),
                    React.createElement(RevenueSummary, { totalRevenue: totalRevenue, averageGrowth: averageGrowth }),
                    React.createElement(Chart, { projectedRevenue: projectedRevenue }),
                    React.createElement(Button, { onClick: downloadCSV, className: "w-full md:w-auto" }, "Download Projections as CSV")))))));
};
export default Home;
