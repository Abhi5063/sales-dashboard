# Sales Dashboard

A responsive and interactive sales dashboard built with Next.js, TypeScript, and Recharts. This application visualizes sales data for multiple products across several years and allows users to filter the data dynamically.

---

### Live Demo

**[Insert Your Vercel Deployment Link Here]**

### Screenshot

_(Replace this with a screenshot of your running application)_

---

## Features

- **Dynamic Charting**: Visualize sales data using Bar, Line, and Pie charts.
- **Interactive Controls**: Seamlessly switch between different chart types.
- **Data Filtering**: Filter the displayed products based on a total sales threshold.
- **Responsive Design**: A clean and modern UI that works across all screen sizes.
- **Loading & Empty States**: Provides clear user feedback during data fetching and when filters result in no data.

---

## Tech Stack & Architectural Decisions

[cite_start]This project was built with a modern, professional tech stack chosen for performance, type safety, and developer experience[cite: 41, 64].

- [cite_start]**[Next.js](https://nextjs.org/)**: Used as the React framework for its powerful features like file-based routing (App Router), server components, and built-in optimizations[cite: 57, 74].
- **[React](https://react.dev/)**: The core library for building the user interface with a component-based architecture.
- [cite_start]**[TypeScript](https://www.typescriptlang.org/)**: Ensures type safety, which reduces bugs and improves code maintainability, especially in larger applications[cite: 90].
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework that allows for rapid UI development without leaving the HTML.
- **[Recharts](https://recharts.org/)**: A composable charting library built on top of React components, chosen for its simplicity and flexibility.

[cite_start]The application architecture separates concerns effectively[cite: 44, 55]:

- **Page Components (`/app/dashboard/page.tsx`)**: Handle state management, data fetching logic, and composition of UI components.
- **UI Components (`/app/components/*`)**: Reusable, presentational components responsible for rendering UI elements (`SalesChart`, `ChartControls`).
- **Data Layer (`/app/data/*`)**: Mock data fetching is separated to simulate a real API, making it easy to swap for a live data source in the future.
- **Shared Types (`/app/lib/types.ts`)**: Centralized TypeScript interfaces ensure data consistency across the application.

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18.x or later recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/your-username/sales-dashboard.git](https://github.com/your-username/sales-dashboard.git)
    cd sales-dashboard
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    # yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Future Improvements

This project serves as a solid foundation. Future enhancements could include[cite: 69, 91]:

- **Backend Integration**: Replace the mock data with a real API endpoint to fetch dynamic sales data.
- **Unit & Integration Testing**: Implement tests using Jest and React Testing Library to ensure component reliability and prevent regressions.
- **Advanced Filtering**: Add more complex filtering options, such as filtering by date range or specific products.
- **Accessibility Enhancements**: Conduct a full accessibility audit to ensure the application is usable by everyone.
