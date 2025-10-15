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

interface SalesPoint {
  year: number;
  value: number;
}

interface SalesSeries {
  name: string;
  data: SalesPoint[];
}

interface SalesChartProps {
  series: SalesSeries[];
  chartType: "bar" | "line" | "pie";
}

export default function SalesChart({ series, chartType }: SalesChartProps) {
  const colors = ["#2563eb", "#10b981", "#f59e0b"];
  const mergedData = series[0].data.map((_, i) => ({
    year: series[0].data[i].year,
    ...Object.fromEntries(series.map((s) => [s.name, s.data[i].value])),
  }));

  if (chartType === "pie") {
    const total = series.map((s) => ({
      name: s.name,
      value: s.data.reduce((sum, p) => sum + p.value, 0),
    }));
    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie data={total} dataKey="value" nameKey="name" outerRadius={150}>
            {total.map((_, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  if (chartType === "line") {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={mergedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          {series.map((s, i) => (
            <Line
              key={s.name}
              dataKey={s.name}
              stroke={colors[i % colors.length]}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={mergedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        {series.map((s, i) => (
          <Bar key={s.name} dataKey={s.name} fill={colors[i % colors.length]} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
