// app/data/salesData.ts

import { SalesSeries } from "../lib/types";

// SIMULATES FETCHING DATA FROM AN API
// This new structure is more logical for charting and filtering.
export const fetchSalesData = (): Promise<SalesSeries[]> => {
  const salesData: SalesSeries[] = [
    {
      name: "Product A",
      data: [
        { year: 2022, sales: 125000 },
        { year: 2023, sales: 155000 },
        { year: 2024, sales: 185000 },
      ],
    },
    {
      name: "Product B",
      data: [
        { year: 2022, sales: 85000 },
        { year: 2023, sales: 110000 },
        { year: 2024, sales: 140000 },
      ],
    },
    {
      name: "Product C",
      data: [
        { year: 2022, sales: 210000 },
        { year: 2023, sales: 240000 },
        { year: 2024, sales: 275000 },
      ],
    },
  ];

  // Return a promise that resolves after a short delay to simulate a network request.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(salesData);
    }, 500); // 500ms delay
  });
};
