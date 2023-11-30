<template>
<div >
    <br><br><br><br>
    <div class="block" style="position: fixed;right: 25px;">
      <span class="demonstration"></span>   
        <el-date-picker    
          v-model="value"
          type="datetimerange"
          @change="filterDataAndRenderChart"
          range-separator="to"
          start-placeholder="startDate"
          end-placeholder="endDate">
        </el-date-picker>
    </div>
    <div ref="lightChart" class="chart">
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
    return {
      lightList: [], // 初始化一个空数组来存储光敏数据集合
      lightChart: null, // 用于存储ECharts图表实例
      value: [],      //日期起始和结束时间
      filteredData:[]//用于存储筛选过日期的温湿度数据
    };
  },
  mounted() {
    this.fetchlightData();
  },
  methods: {
    fetchlightData() {
      axios.get('/light') // 后端API端点
        .then(response => {
          this.lightList = response.data; // 将集合数据存储在sensorDataList中
          this.filterDataAndRenderChart();
        })
        .catch(error => {
          console.error('获取传感器数据失败', error);
        });    
    },
    filterDataAndRenderChart() {
      const startDate = this.value[0];   // 根据日期范围筛选数据
      const endDate = this.value[1];
      this.filteredData = this.lightList.filter(data => {
        const dataDate = new Date(data.createTime);
        return dataDate >= startDate && dataDate <= endDate;
      });
      // 初始化图表
      this.initializeChart();
    },
    initializeChart() {
      this.lightChart = echarts.init(this.$refs.lightChart); // 初始化ECharts图表

      const option = {
        title: {
          text: '光敏趋势图',
          left: 'center', // 标题水平居中
          bottom: '-7', // 标题位于底部
        },
        legend: {
          data: ['光照强度(Lux)'], // 图例的数据项名称
        },
        tooltip: {
          trigger: 'axis',  // 当鼠标悬停在坐标轴上时显示提示框
          axisPointer: {
            animation: false  //无动画效果
          }
        },
        xAxis: {
          type: 'category',
          data: this.filteredData.map(data => data.createTime)
        },
        yAxis: [
        {
          type: 'value',
          axisLine: { show: false }, 
          axisLabel: { show: true },
          name:'光照强度(Lux)'
          }
        ],
        series: [
          {
            name:'光照强度(Lux)',
            data: this.filteredData.map(data => data.lightIntensity),
            type: 'line',
            yAxisIndex: 0, // 与第一个Y轴关联
            smooth: true,
            label: {
            show: true, // 启用数据标签
            position: 'top' // 标签显示在数据点的上方
            }
          }
        ]
      };
      this.lightChart.setOption(option); // 设置图表配置
    }
  },
  }
</script>

<style scoped>
.chart {
    width: 80%;
    height: 400px; 
    margin: 0 auto; 
    top: 150px;
    margin-left: 1px;
  }
</style>