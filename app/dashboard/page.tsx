"use client";
import React, { useState } from "react";
import SalesChart from "../components/SalesChart";
import ChartControls from "../components/ChartControls";
import { defaultSalesData } from "../data/salesData";

export default function DashboardPage() {
  const [threshold, setThreshold] = useState<number | "">("");
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");

  const filtered = defaultSalesData
    .map((series) => ({
      ...series,
      total: series.data.reduce((s, p) => s + p.value, 0),
    }))
    .filter((s) => (threshold === "" ? true : s.total >= Number(threshold)));

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 p-8">
      <h1 className="text-3xl font-bold mb-2">Sales Dashboard</h1>
      <p className="mb-6 text-slate-600">
        A demo app showing sales for 2022–2024
      </p>

      <section className="space-y-6">
        <ChartControls
          threshold={threshold}
          chartType={chartType}
          onThresholdChange={setThreshold}
          onChartTypeChange={setChartType}
        />
        <div className="bg-white p-4 rounded shadow">
          <SalesChart series={filtered} chartType={chartType} />
        </div>
      </section>
    </main>
  );
}
