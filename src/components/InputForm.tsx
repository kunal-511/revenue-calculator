import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
interface InputFormProps {
  currentRevenue: number | null;
  setCurrentRevenue: (value: number | null) => void;
  growthRate: number | null;
  setGrowthRate: (value: number | null) => void;
  errors: { currentRevenue: string; growthRate: string };
}

const InputForm = ({
  currentRevenue,
  setCurrentRevenue,
  growthRate,
  setGrowthRate,
  errors,
}: InputFormProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="current-revenue" className="text-sm font-medium">
          Current Revenue
        </Label>
        <Input
          id="current-revenue"
          type="number"
          placeholder="Enter current revenue"
          value={currentRevenue ?? ""}
          onChange={(e) =>
            setCurrentRevenue(e.target.value ? Number(e.target.value) : null)
          }
          className={`w-full ${errors.currentRevenue ? "border-red-500" : ""}`}
          aria-invalid={errors.currentRevenue ? "true" : "false"}
          aria-describedby={
            errors.currentRevenue ? "current-revenue-error" : undefined
          }
        />
        {errors.currentRevenue && (
          <p id="current-revenue-error" className="text-sm text-red-500 mt-1">
            {errors.currentRevenue}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="growth-rate" className="text-sm font-medium">
          Annual Growth Rate (%)
        </Label>
        <div className="flex items-center space-x-4">
          <Slider
            id="growth-rate"
            min={-100}
            max={100}
            step={0.1}
            value={[growthRate]}
            onValueChange={(value) => setGrowthRate(value[0])}
            className="flex-grow"
          />
          <Input
            type="number"
            value={growthRate}
            onChange={(e) => setGrowthRate(Number(e.target.value))}
            className="w-20"
            aria-label="Growth rate percentage"
          />
        </div>
      </div>
    </div>
  );
};

export default InputForm;
