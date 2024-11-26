<template>
    <div class="p-6 bg-gray-100 min-h-screen">
    
      <div class="bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 class="text-3xl font-semibold text-gray-800">Dashboard</h1>
        <p class="mt-2 text-gray-500">Overview of sales and products</p>
      </div>
  
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold text-gray-700">Total Sales</h2>
          <p class="text-3xl font-bold text-gray-900">${{ totalSales }}</p>
        </div>
  
      
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold text-gray-700">Top Products</h2>
          <ul class="space-y-2 mt-4">
            <li v-for="product in trendingProducts" :key="product.product.ProductID" class="flex justify-between">
              <span class="text-gray-700">{{ product.product.ProductName }}</span>
              <span class="text-gray-500">{{ product.totalQuantity }} sold</span>
            </li>
          </ul>
        </div>
  
      
        <div class="bg-white p-6 rounded-lg shadow-md">
          <SalesChart :data="categorySales" />
        </div>
      </div>
  
     
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold text-gray-700">All Products</h2>
        <table class="min-w-full mt-4 table-auto border-collapse">
          <thead>
            <tr>
              <th class="px-4 py-2 text-left text-gray-600">Product Name</th>
              <th class="px-4 py-2 text-left text-gray-600">Category</th>
              <th class="px-4 py-2 text-left text-gray-600">Price</th>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in allProducts" :key="product.ProductID">
              <td class="px-4 py-2 text-gray-800">{{ product.ProductName }}</td>
              <td class="px-4 py-2 text-gray-800">{{ product.Category }}</td>
              <td class="px-4 py-2 text-gray-800">${{ product.Price }}</td>
             
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import api from '../api';
  import SalesChart from './SalesChart.vue';
  
  export default defineComponent({
    components: { SalesChart },
    setup() {
      const totalSales = ref(0);
      const trendingProducts = ref([]);
      const categorySales = ref([]);
      const allProducts = ref([]);
  
      const fetchData = async () => {
    
        const salesRes = await api.get('/analytics/total_sales', {
          params: { startDate: '2023-01-01', endDate: '2023-12-31' },
        });
        totalSales.value = salesRes.data;
  
     
        const trendingRes = await api.get('/analytics/trending_products');
        trendingProducts.value = trendingRes.data;
  
        
        const categoryRes = await api.get('/analytics/category_sales');
        categorySales.value = categoryRes.data;
  
        const productsRes = await api.get('/products');  
        allProducts.value = productsRes.data;
      };
  
      onMounted(fetchData);
  
      return { totalSales, trendingProducts, categorySales, allProducts };
    },
  });
  </script>
  
  <style scoped>

  .table-auto {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table-auto th, .table-auto td {
    border: 1px solid #e5e7eb;
    padding: 8px;
  }
  
  .table-auto th {
    background-color: #f3f4f6;
  }
  
  .table-auto tr:hover {
    background-color: #f9fafb;
  }
  
  button {
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #4C51BF; /* Tailwind Blue */
  }
  </style>
  