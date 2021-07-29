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
            :class="item.type == defaultType ? 'link-active' : ''"
            class="link-hover cursor-pointer"
            @click="defaultType = item.type"
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
  },
  data() {
    return {
      defaultType: 4,
      timeChoose: [
        {
          name: 'All',
          type: 1,
        },
        {
          name: '90 Days',
          type: 2,
        },
        {
          name: '30 Days',
          type: 3,
        },
        {
          name: '7 Days',
          type: 4,
        },
      ],
    }
  },
  mounted() {
    this.setData()
  },
  methods: {
    setData() {
      const el = this.$refs.chart
      const chart = echarts.init(el)

      let base = +new Date(1968, 9, 3)
      const oneDay = 24 * 3600 * 1000
      const date = []

      const data = [Math.random() * 300]

      for (let i = 1; i < 20000; i++) {
        const now = new Date((base += oneDay))
        date.push(
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/')
        )
        data.push(
          Math.abs(Math.round((Math.random() - 0.5) * 200 + data[i - 1]))
        )
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
        },
        series: [
          {
            name: '模拟数据',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
              color: 'rgba(74, 150, 250, 1)',
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(74, 150, 250, 1)',
                },
                {
                  offset: 1,
                  color: 'rgba(74, 150, 250, 1)',
                },
              ]),
            },
            data,
          },
        ],
      }
      chart.setOption(option)
    },
  },
}
</script>
