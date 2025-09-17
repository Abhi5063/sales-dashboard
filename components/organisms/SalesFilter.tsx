"use client";

import { useState } from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { salesData } from "@/data/salesData";

export const SalesFilter = () => {
  const [threshold, setThreshold] = useState<number>(0);
  const [filtered, setFiltered] = useState(salesData);

  const handleFilter = () => {
    setFiltered(salesData.filter((d) => d.sales >= threshold));
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">Filter Sales by Threshold</h2>
      <div className="flex gap-2">
        <Input
          type="number"
          placeholder="Enter threshold"
          value={threshold || ""}
          onChange={(e) => setThreshold(Number(e.target.value))}
        />
        <Button onClick={handleFilter}>Apply</Button>
      </div>
      <ul className="mt-4 list-disc ml-6">
        {filtered.map((item) => (
          <li key={item.year}>
            {item.year}: {item.sales}
          </li>
        ))}
      </ul>
    </div>
  );
};
