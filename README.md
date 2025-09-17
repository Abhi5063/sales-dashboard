# 📊 Sales Dashboard (Next.js 15 + TypeScript + Tailwind + Recharts)

This is a basic sales dashboard project following the **Atomic Design Principle**.  
It visualizes mock sales data for 2022, 2023, and 2024.

## 🚀 Features

- Atomic component structure (atoms, molecules, organisms, templates)
- Sales data visualization with Recharts
- Chart switching (Bar, Line, Pie)
- Custom filter input for sales threshold
- Ready for API integration (replace mock data with real data)

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)

## 📂 Structure

- `atoms/` → smallest components (Input, Button)
- `molecules/` → combinations (ChartSwitcher)
- `organisms/` → complex sections (SalesChart, SalesFilter)
- `templates/` → page layouts
- `dashboard/` → main dashboard page

## ⚡ Setup

```bash
# Clone repo
git clone https://github.com/YOUR_GITHUB/sales-dashboard.git

# Install deps
cd sales-dashboard
npm install

# Run dev server
npm run dev
```
