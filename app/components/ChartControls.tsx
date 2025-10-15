// app/components/ChartControls.tsx
"use client";

import React from "react";
import { ChartType } from "../lib/types";

interface ChartControlsProps {
  threshold: number | "";
  chartType: ChartType;
  onThresholdChange: (value: number | "") => void;
  onChartTypeChange: (value: ChartType) => void;
}

export default function ChartControls({
  threshold,
  chartType,
  onThresholdChange,
  onChartTypeChange,
}: ChartControlsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end p-4 border rounded-lg bg-white shadow-sm">
      <div>
        <label
          htmlFor="threshold-input"
          className="block text-sm font-medium text-slate-700"
        >
          Sales Threshold
        </label>
        <input
          id="threshold-input"
          value={threshold}
          onChange={(e) => {
            const value = e.target.value;
            // Handle empty string or convert to a number
            onThresholdChange(value === "" ? "" : Number(value));
          }}
          placeholder="e.g., 300000"
          type="number"
          className="mt-1 p-2 border border-slate-300 rounded-md w-full focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-1 text-xs text-slate-500">
          Filters products by total sales across all years.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Chart Type
        </label>
        <div className="flex gap-2">
          {(["bar", "line", "pie"] as ChartType[]).map((type) => (
            <button
              key={type}
              onClick={() => onChartTypeChange(type)}
              className={`px-4 py-2 rounded-md border text-sm font-semibold transition-colors ${
                chartType === type
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
              }`}
              aria-pressed={chartType === type}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
