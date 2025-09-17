import kagglehub
import pandas as pd
import os

# Download dataset from Kaggle
path = kagglehub.dataset_download("buharishehu/retail-sales-dataset")
print("Dataset downloaded at:", path)

file_path = os.path.join(path, "retail_sales_dataset.xlsx")

# Load Excel file
df = pd.read_excel(file_path)
print("Columns in dataset:", df.columns.tolist())
print(df.head())

# Convert JoinDate to datetime safely
df["JoinDate"] = pd.to_datetime(df["JoinDate"], errors="coerce")

# Drop rows with invalid dates
df = df.dropna(subset=["JoinDate"])

# Extract year
df["Year"] = df["JoinDate"].dt.year

# Aggregate sales: count of customers per year
df_filtered = df.groupby("Year")["CustomerID"].count().reset_index()
df_filtered = df_filtered.rename(columns={"CustomerID": "Sales"})

# Optional: sort by Year ascending
df_filtered = df_filtered.sort_values("Year")

print("Aggregated Sales by Year:")
print(df_filtered)

# Save processed data as JSON for Next.js
output_file = "public/salesData.json"
os.makedirs(os.path.dirname(output_file), exist_ok=True)
df_filtered.to_json(output_file, orient="records")
print(f"Processed sales data saved to {output_file}")
