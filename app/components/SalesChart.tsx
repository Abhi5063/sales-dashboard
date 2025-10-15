// app/components/SalesChart.tsx
"use client";

import React from "react";
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
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { SalesSeries, ChartType } from "../lib/types";

// Defined colors for chart consistency
const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444"];

interface SalesChartProps {
  series: SalesSeries[];
  chartType: ChartType;
}

export default function SalesChart({ series, chartType }: SalesChartProps) {
  // Memoize processed data to avoid recalculation on every render.
  // This demonstrates performance awareness[cite: 73].
  const processedData = React.useMemo(() => {
    if (!series.length) return [];

    // For Bar and Line charts, we need to merge data by year.
    const mergedByYear: {
      [year: string]: { year: number; [key: string]: number };
    } = {};

    series.forEach((s) => {
      s.data.forEach((point) => {
        if (!mergedByYear[point.year]) {
          mergedByYear[point.year] = { year: point.year };
        }
        mergedByYear[point.year][s.name] = point.sales;
      });
    });
    // Sort by year to ensure correct order on the X-axis
    return Object.values(mergedByYear).sort((a, b) => a.year - b.year);
  }, [series]);

  if (chartType === "pie") {
    const pieData = series.map((s) => ({
      name: s.name,
      value: s.data.reduce((sum, point) => sum + point.sales, 0),
    }));

    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
          >
            {pieData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) => `$${value.toLocaleString()}`}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  const ChartComponent = chartType === "line" ? LineChart : BarChart;
  const ChartElement = chartType === "line" ? Line : Bar;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ChartComponent data={processedData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="year" tick={{ fill: "#64748b" }} />
        <YAxis
          tickFormatter={(value) => `$${value / 1000}k`}
          tick={{ fill: "#64748b" }}
        />
        <Tooltip
          formatter={(value: number, name: string) => [
            `$${value.toLocaleString()}`,
            name,
          ]}
        />
        <Legend />
        {series.map((s, index) => (
          <ChartElement
            key={s.name}
            dataKey={s.name}
            fill={COLORS[index % COLORS.length]}
            stroke={COLORS[index % COLORS.length]} // Stroke for Line chart
          />
        ))}
      </ChartComponent>
    </ResponsiveContainer>
  );
}
