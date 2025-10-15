"use client";
import React from "react";

type ChartType = "bar" | "line" | "pie";

interface ChartControlsProps {
  threshold: number | "";
  chartType: ChartType;
  onThresholdChange: (v: number | "") => void;
  onChartTypeChange: (v: ChartType) => void;
}

export default function ChartControls({
  threshold,
  chartType,
  onThresholdChange,
  onChartTypeChange,
}: ChartControlsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
      <div>
        <label className="block text-sm font-medium text-slate-700">
          Sales threshold (total yearly sales)
        </label>
        <input
          value={threshold}
          onChange={(e) => {
            const v = e.target.value;
            onThresholdChange(v === "" ? "" : Number(v));
          }}
          placeholder="e.g. 120000"
          type="number"
          className="mt-1 p-2 border rounded w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Chart type
        </label>
        <div className="mt-1 flex gap-2">
          {(["bar", "line", "pie"] as ChartType[]).map((type) => (
            <button
              key={type}
              onClick={() => onChartTypeChange(type)}
              className={`px-3 py-2 rounded border ${
                chartType === type
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-slate-700 border-slate-300"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Notes
        </label>
        <div className="mt-1 text-sm text-slate-500">
          Showing aggregated sales per year. Use threshold to filter series.
        </div>
      </div>
    </div>
  );
}
