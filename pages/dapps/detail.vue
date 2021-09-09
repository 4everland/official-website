<template>
  <div>
    <detail-total />
    <detail-charts-sections />
    <detail-table />
  </div>
</template>

<script>
import DetailTotal from '@/components/DappsSections/DappsDetail/DetailTotal.vue'
import DetailChartsSections from '@/components/DappsSections/DappsDetail/DetailChartsSections.vue'
import DetailTable from '@/components/DappsSections/DappsDetail/DetailTable.vue'

export default {
  components: {
    DetailTotal,
    DetailChartsSections,
    DetailTable,
  },
  methods: {},
  mounted() {
    console.log(this.$route.query.id)
  },
}
</script>
