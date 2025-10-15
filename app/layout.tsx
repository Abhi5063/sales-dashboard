import "./globals.css";
import React from "react";

export const metadata = {
  title: "Sales Dashboard",
  description: "Basic sales dashboard with Recharts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen p-6">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold">Sales Dashboard</h1>
            <p className="text-sm text-slate-500">
              A demo app showing sales for 2022–2024
            </p>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
