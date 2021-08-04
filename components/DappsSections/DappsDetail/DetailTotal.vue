<template>
  <v-container class="px-15 pt-15 pb-8 white">
    <div v-if="!data">
      <v-skeleton-loader light type="card" />
    </div>
    <template v-else>
      <v-row class="mb-8">
        <v-col
          v-for="(item, index) in colors"
          :key="index"
          cols="12"
          md="4"
          lg="4"
        >
          <div class="pa-10 rounded-lg" :style="{ background: item.color }">
            <p class="text-h6">{{ item.name }}</p>
            <div class="d-flex justify-space-between mb-2">
              <div>Today</div>
              <div>+{{ tools.formatBigNum(data[item.today]) }}</div>
            </div>
            <div class="d-flex justify-space-between">
              <div>Yesterday</div>
              <div>+{{ tools.formatBigNum(data[item.yesterday]) }}</div>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" lg="4">
          <div class="text-sm-center text-md-left">
            <div class="grey--text text--darken-1 mb-2">Total UV</div>
            <div class="text-h4 grey--text text--darken-4">
              {{ tools.formatBigNum(data.totalUsers) }}
            </div>
          </div></v-col
        >
        <v-col cols="12" md="4" lg="4">
          <div class="text-sm-center">
            <div class="grey--text text--darken-1 mb-2">Total PV</div>
            <div class="text-h4 grey--text text--darken-4">
              {{ tools.formatBigNum(data.totalPv) }}
            </div>
          </div></v-col
        >
        <v-col cols="12" md="4" lg="4">
          <div class="text-sm-center text-md-right">
            <div class="grey--text text--darken-1 mb-2">
              Next day retention rate
            </div>
            <div class="text-h4 grey--text text--darken-4">
              {{ data.retentionRate }}
            </div>
          </div></v-col
        >
      </v-row>
    </template>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      colors: [
        {
          color: '#75A6E7',
          name: 'New User',
          today: 'todayNewUser',
          yesterday: 'yesterdayNewUser',
        },
        {
          color: '#84D199',
          name: 'UV',
          today: 'todayUv',
          yesterday: 'yesterdayUv',
        },
        {
          color: '#BE80E0',
          name: 'PV',
          today: 'totalPv',
          yesterday: 'yesterdayPv',
        },
      ],
      data: null,
    }
  },
  mounted() {
    const id = this.$nuxt.$route.params.id
    this.getTotal(id)
  },
  methods: {
    async getTotal(id) {
      try {
        const { data } = await this.$axios.get(
          `/analytics/user/data/project/${id}`
        )
        this.data = data.data
      } catch (error) {
        //
      }
    },
  },
}
</script>
