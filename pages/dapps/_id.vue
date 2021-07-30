<template>
  <div>
    <detail-info />
    <detail-total />
    <detail-charts-sections />
    <detail-table />
  </div>
</template>

<script>
import DetailInfo from '@/components/DappsSections/DappsDetail/DetailInfo.vue'
import DetailTotal from '@/components/DappsSections/DappsDetail/DetailTotal.vue'
import DetailChartsSections from '@/components/DappsSections/DappsDetail/DetailChartsSections.vue'
import DetailTable from '@/components/DappsSections/DappsDetail/DetailTable.vue'

export default {
  components: {
    DetailInfo,
    DetailTotal,
    DetailChartsSections,
    DetailTable,
  },
  methods: {},
}
</script>
