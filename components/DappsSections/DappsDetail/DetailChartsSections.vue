<template>
  <v-container class="px-15 pb-15 grey--text text--darken-4 white">
    <v-row class="mb-6">
      <v-col v-for="item in chartList" :key="item.title" cols="12" md="6">
        <detail-chart :title="item.title" :view-type="item.viewType" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DetailChart from './DetailChart.vue'
export default {
  components: { DetailChart },
  data() {
    return {
      chartList: [
        {
          title: 'Total User',
          viewType: 'TOTAL_USERS',
        },
        {
          title: 'New Users',
          viewType: 'NEW_USERS',
        },
        {
          title: 'Unique Visitor',
          viewType: 'UNIQUE_VISITOR',
        },
        {
          title: 'Page View',
          viewType: 'PAGE_VIEW',
        },
      ],
    }
  },
  methods: {},
}
</script>
