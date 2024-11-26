# Simplified Shopping Cart Analysis Tool

## Description
This project is an analysis tool designed to help an e-commerce site administrator gather insights about the best-selling products, sales distribution by category, and sales trends.

## Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud, like MongoDB Atlas)
- Vue CLI (for the frontend)

## Installation of Dependencies

### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
Install the dependencies:
bash
Copier le code
npm install
Frontend
Navigate to the frontend directory:
bash
Copier le code
cd ../frontend
Install the dependencies:
bash
Copier le code
npm install
Running the Application
Backend
Navigate to the backend directory:
bash
Copier le code
cd backend
Start the server:
bash
Copier le code
ts-node src/server.ts
Frontend
Navigate to the frontend directory:
bash
Copier le code
cd ../frontend
Start the Vue application:
bash
Copier le code
npm run dev
API Endpoints
Total Sales

URL: /analytics/total_sales
Method: GET
Parameters:
startDate: Start date (format: YYYY-MM-DD)
endDate: End date (format: YYYY-MM-DD)
Example Request:
bash
Copier le code
GET http://localhost:5000/analytics/total_sales?startDate=2023-01-01&endDate=2023-12-31
Example Response:
json
Copier le code
15000.75
Trending Products

URL: /analytics/trending_products
Method: GET
Example Request:
bash
Copier le code
GET http://localhost:5000/analytics/trending_products
Example Response:
json
Copier le code
[
  {
    "product": {
      "ProductID": 2,
      "ProductName": "Laptop",
      "Category": "Electronics",
      "Price": 468.75
    },
    "totalQuantity": 150,
    "totalSales": 70312.5
  },
  {
    "product": {
      "ProductID": 1,
      "ProductName": "Smartphone",
      "Category": "Electronics",
      "Price": 91.31
    },
    "totalQuantity": 120,
    "totalSales": 10957.2
  }
]
Sales Distribution by Category

URL: /analytics/category_sales
Method: GET
Example Request:
bash
Copier le code
GET http://localhost:5000/analytics/category_sales
Example Response:
json
Copier le code
[
  {
    "category": "Electronics",
    "totalSales": 10000,
    "percentage": "66.67"
  },
  {
    "category": "Home Appliances",
    "totalSales": 5000,
    "percentage": "33.33"
  }
]
List of Products

URL: /products
Method: GET
Example Request:
bash
Copier le code
GET http://localhost:5000/products
Example Response:
json
Copier le code
[
  {
    "ProductID": 1,
    "ProductName": "Smartphone",
    "Category": "Electronics",
    "Price": 91.31
  },
  {
    "ProductID": 2,
    "ProductName": "Laptop",
    "Category": "Electronics",
    "Price": 468.75
  }
]
