<template>
  <v-container class="px-15 pb-15 grey--text text--darken-4 white">
    <v-row class="mb-6">
      <v-col v-for="item in chartList" :key="item.title" cols="12" md="6">
        <dapps-chart :title="item.title" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DappsChart from '../DappsChart.vue'
export default {
  comments: { DappsChart },
  data() {
    return {
      chartList: [
        {
          title: 'Total User',
        },
        {
          title: 'New Users',
        },
        {
          title: 'Unique Visitor',
        },
        {
          title: 'Page View',
        },
      ],
      tableList: [],
      tableLoading: false,
    }
  },
  methods: {},
}
</script>
