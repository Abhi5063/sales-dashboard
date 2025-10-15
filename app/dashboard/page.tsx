// app/dashboard/page.tsx
"use client";

import React, { useState, useEffect, useMemo } from "react";
import SalesChart from "../components/SalesChart";
import ChartControls from "../components/ChartControls";
import { fetchSalesData } from "../data/salesData";
import { ChartType, SalesSeries } from "../lib/types";

// A simple loading spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-full">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

export default function DashboardPage() {
  const [allSeries, setAllSeries] = useState<SalesSeries[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [threshold, setThreshold] = useState<number | "">("");
  const [chartType, setChartType] = useState<ChartType>("bar");

  // useEffect to fetch data on component mount, simulating an API call.
  // This demonstrates handling asynchronous operations[cite: 50].
  useEffect(() => {
    fetchSalesData()
      .then((data) => {
        setAllSeries(data);
      })
      .catch(() => {
        setError("Failed to load sales data. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // useMemo ensures the expensive filtering logic only runs when its dependencies change[cite: 73].
  const filteredSeries = useMemo(() => {
    if (threshold === "") {
      return allSeries;
    }
    return allSeries.filter((series) => {
      const totalSales = series.data.reduce(
        (sum, point) => sum + point.sales,
        0
      );
      return totalSales >= Number(threshold);
    });
  }, [allSeries, threshold]);

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }

    if (error) {
      return <p className="text-center text-red-600">{error}</p>;
    }

    if (filteredSeries.length === 0) {
      return (
        <p className="text-center text-slate-500">
          No data matches the selected filter.
        </p>
      );
    }

    return <SalesChart series={filteredSeries} chartType={chartType} />;
  };

  return (
    <div className="space-y-6">
      <ChartControls
        threshold={threshold}
        chartType={chartType}
        onThresholdChange={setThreshold}
        onChartTypeChange={setChartType}
      />
      <div className="bg-white p-4 rounded-lg shadow-sm min-h-[400px]">
        {renderContent()}
      </div>
    </div>
  );
}
