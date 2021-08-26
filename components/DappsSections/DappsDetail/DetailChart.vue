<template>
  <div>
    <div class="d-flex justify-space-between">
      <div class="text-h6">{{ title }}</div>
      <div class="d-flex">
        <div
          v-for="(item, index) in timeChoose"
          :key="index"
          class="d-flex align-end caption grey--text font-weight-bold"
        >
          <div
            :class="item.type == timeLimit ? 'link-active' : ''"
            class="link-hover cursor-pointer"
            @click="timeChange(item.type)"
          >
            {{ item.name }}
          </div>
          <div v-if="index < timeChoose.length - 1" class="px-1">|</div>
        </div>
      </div>
    </div>
    <div ref="chart" style="height: 240px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  props: {
    title: { type: String, default: '' },
    viewType: { type: String, default: '' },
  },
  data() {
    return {
      projectId: null,
      timeLimit: 'DAY_7',
      timeChoose: [
        {
          name: '90 Days',
          type: 'DAY_90',
        },
        {
          name: '30 Days',
          type: 'DAY_30',
        },
        {
          name: '7 Days',
          type: 'DAY_7',
        },
      ],
    }
  },
  mounted() {
    this.projectId = this.$route.query.id
    this.getChart(this.projectId, this.viewType, this.timeLimit)
  },
  methods: {
    async getChart(projectId, viewType, timeLimit) {
      try {
        const { data } = await this.$axios.get('/dapps/view/data', {
          params: {
            projectId,
            viewType,
            timeLimit,
          },
        })
        this.setData(data.data)
      } catch (error) {
        //
      }
    },
    setData(chartData) {
      let chart = echarts.getInstanceByDom(this.$refs.chart)
      if (chart == null) {
        chart = echarts.init(this.$refs.chart)
      }
      const viewDate = chartData.data
      const date = []
      const data = []
      for (const key in viewDate) {
        date.push(this.tools.parseTime(key, '{y}-{m}-{d}'))
        data.push(viewDate[key])
      }
      const option = {
        tooltip: {
          trigger: 'axis',
          position: (pt) => {
            return [pt[0], '10%']
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: date,
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false,
          },
          max: 'dataMax',
          minInterval: 1,
        },
        series: [
          {
            name: this.title,
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
              color: 'rgba(52, 169, 255, 0.5)',
            },
            areaStyle: {
              color: 'rgba(52, 169, 255, 0.2)',
            },
            data,
          },
        ],
      }
      chart.setOption(option)
    },
    timeChange(timeLimit) {
      this.timeLimit = timeLimit
      this.getChart(this.projectId, this.viewType, this.timeLimit)
    },
  },
}
</script>
