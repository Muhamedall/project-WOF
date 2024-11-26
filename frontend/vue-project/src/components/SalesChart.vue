<template>
    <div>
      <h2>Sales by Category</h2>
      <canvas id="salesChart"></canvas>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, watch, PropType } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  Chart.register(...registerables);
  
  export default defineComponent({
    props: {
      data: {
        type: Array as PropType<Array<{ category: string; percentage: string }>>,
        required: true,
      },
    },
    setup(props) {
      const renderChart = () => {
        const ctx = document.getElementById('salesChart') as HTMLCanvasElement;
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: props.data.map((d) => d.category),
            datasets: [
              {
                data: props.data.map((d) => parseFloat(d.percentage)),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              },
            ],
          },
        });
      };
  
      watch(() => props.data, renderChart);
  
      onMounted(renderChart);
    },
  });
  </script>