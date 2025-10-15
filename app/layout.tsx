// app/layout.tsx
import "./globals.css";
import React from "react";

export const metadata = {
  title: "Sales Dashboard",
  description: "A demo sales dashboard built with Next.js and Recharts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-slate-800">
              Sales Dashboard
            </h1>
            <p className="text-slate-600">
              An interactive dashboard for analyzing product sales from
              2022-2024.
            </p>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
