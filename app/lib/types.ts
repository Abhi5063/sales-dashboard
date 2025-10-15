// app/lib/types.ts

export type ChartType = "bar" | "line" | "pie";

export interface SalesDataPoint {
  year: number;
  sales: number;
}

export interface SalesSeries {
  name: string; // Represents a product or region
  data: SalesDataPoint[];
}
