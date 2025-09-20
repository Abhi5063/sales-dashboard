"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  Legend,
} from "recharts";
import { ChartSwitcher } from "../molecules/ChartSwitcher";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

// Define a proper type for your sales data that satisfies Recharts requirements
interface Sale {
  Year: string;
  Sales: number;
  [key: string]: string | number;
}

// Type alias for Recharts compatibility
type ChartData = {
  [key: string]: string | number;
};

export const SalesChart = () => {
  const [salesData, setSalesData] = useState<Sale[]>([]);
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");

  useEffect(() => {
    fetch("/api/sales")
      .then((res) => res.json())
      .then((data: { year: number; sales: number }[]) => {
        // Transform the data to match our Sale interface
        const transformedData: Sale[] = data.map((item) => ({
          Year: item.year.toString(),
          Sales: item.sales,
        }));
        setSalesData(transformedData);
      });
  }, []);

  if (!salesData.length) return <p>Loading sales data...</p>;

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Sales Data (from Kaggle)</h2>

      <ChartSwitcher onSwitch={setChartType} />

      <div className="mt-4">
        {chartType === "bar" && (
          <BarChart width={500} height={300} data={salesData as ChartData[]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Sales" fill="#8884d8" />
          </BarChart>
        )}

        {chartType === "line" && (
          <LineChart width={500} height={300} data={salesData as ChartData[]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Sales" stroke="#82ca9d" />
          </LineChart>
        )}

        {chartType === "pie" && (
          <PieChart width={400} height={300}>
            <Pie
              data={salesData as ChartData[]}
              dataKey="Sales"
              nameKey="Year"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {salesData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        )}
      </div>
    </div>
  );
};
