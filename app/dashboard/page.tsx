import { SalesChart } from "@/components/organisms/SalesChart";
import { SalesFilter } from "@/components/organisms/SalesFilter";

export default function DashboardPage() {
  return (
    <div className="p-8 grid gap-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <SalesChart />
      <SalesFilter />
    </div>
  );
}
