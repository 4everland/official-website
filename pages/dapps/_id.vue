<template>
  <div>
    <detail-info />
    <detail-total />
    <dapps-charts-sections />
    <dapps-table title="Retention Rate" />
  </div>
</template>

<script>
import DetailInfo from '@/components/DappsSections/DappsDetail/DetailInfo.vue'
import DetailTotal from '@/components/DappsSections/DappsDetail/DetailTotal.vue'
import DappsChartsSections from '@/components/DappsSections/DappsChartsSections.vue'
import DappsTable from '@/components/DappsSections/DappsTable.vue'

export default {
  components: {
    DetailInfo,
    DetailTotal,
    DappsChartsSections,
    DappsTable,
  },
  methods: {},
}
</script>
