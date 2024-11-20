import React from "react";

interface RevenueSummaryProps {
  totalRevenue: number;
  averageGrowth: number;
}

const RevenueSummary = ({
  totalRevenue,
  averageGrowth,
}: RevenueSummaryProps) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md space-y-2">
      <h3 className="text-lg md:text-xl font-semibold">
        Revenue Upside Summary
      </h3>
      <p className="text-sm md:text-base">
        Total Revenue over 5 years:{" "}
        <span className="font-semibold">{totalRevenue.toLocaleString()}</span>
      </p>
      <p className="text-sm md:text-base">
        Average Annual Growth{" "}
        <span className="font-semibold"> {averageGrowth}%</span>
      </p>
    </div>
  );
};

export default RevenueSummary;
