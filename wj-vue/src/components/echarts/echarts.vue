<template>
    <div ref="echartsContainer" style="width: 100%; height: 400px;"></div>
  </template>
  
  <script>
  import echarts from 'echarts';
  
  export default {
    mounted() {
      // 获取DOM容器
      const chartDom = this.$refs.echartsContainer;
      const myChart = echarts.init(chartDom);
  
      // 柱状图数据
      const option = {
        title: {
          text: '柱状图示例',
        },
        xAxis: {
          data: ['A', 'B', 'C', 'D', 'E'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10],
          },
        ],
      };
  
      // 渲染图表
      myChart.setOption(option);
    },
  };
  </script>
  