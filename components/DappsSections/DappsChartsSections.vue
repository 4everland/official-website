<template>
  <v-container class="px-15 pb-15 grey--text text--darken-4 white">
    <v-row class="mb-6">
      <v-col v-for="item in chartList" :key="item.title" cols="12" md="6">
        <dapps-chart :title="item.title" :view-type="item.viewType" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DappsChart from './DappsChart.vue'
export default {
  components: { DappsChart },
  data() {
    return {
      chartList: [
        {
          title: 'Total Dapps',
          viewType: 'TOTAL_DAPPS',
        },
        {
          title: 'New Dapps',
          viewType: 'NEW_DAPPS',
        },
        {
          title: 'Total Users',
          viewType: 'TOTAL_USERS',
        },
        {
          title: 'New Users',
          viewType: 'NEW_USERS',
        },
      ],
    }
  },
  methods: {},
}
</script>
