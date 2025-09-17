import kagglehub
import pandas as pd
import os

# Download dataset
path = kagglehub.dataset_download("buharishehu/retail-sales-dataset")
print("Dataset downloaded at:", path)

file_path = os.path.join(path, "retail_sales_dataset.xlsx")

# Load Excel file
df = pd.read_excel(file_path)

print("Columns in dataset:", df.columns.tolist())
print(df.head())

# Convert JoinDate to datetime and extract Year
df["JoinDate"] = pd.to_datetime(df["JoinDate"], errors="coerce")
df["Year"] = df["JoinDate"].dt.year

# Count customers joined per year = treat as sales
df_filtered = df.groupby("Year")["CustomerID"].count().reset_index()
df_filtered = df_filtered.rename(columns={"CustomerID": "Sales"})

print("Aggregated Sales by Year:")
print(df_filtered)

# Save processed data for Next.js
output_file = "public/salesData.json"
df_filtered.to_json(output_file, orient="records")
print(f"Processed sales data saved to {output_file}")
