<template>
  <div>
    <dapps-total />
    <dapps-rank />
    <dapps-charts-sections />
    <dapps-table />
  </div>
</template>

<script>
import DappsTotal from '@/components/DappsSections/DappsTotal.vue'
import DappsRank from '@/components/DappsSections/DappsRank.vue'
import DappsChartsSections from '@/components/DappsSections/DappsChartsSections.vue'
import DappsTable from '@/components/DappsSections/DappsTable.vue'

export default {
  components: {
    DappsTotal,
    DappsRank,
    DappsChartsSections,
    DappsTable,
  },
  methods: {},
}
</script>
