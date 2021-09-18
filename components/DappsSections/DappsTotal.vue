<template>
  <v-container class="px-15 pt-15 pb-8 white">
    <div v-if="!data">
      <v-skeleton-loader light type="card" />
    </div>
    <v-row v-else>
      <v-col
        v-for="(item, index) in colors"
        :key="index"
        cols="12"
        md="4"
        lg="4"
      >
        <div
          class="pa-10 rounded-lg text-center"
          :style="{ background: item.color }"
        >
          <p class="text-h6">{{ item.name }}</p>
          <p class="text-h3">{{ tools.formatBigNum(data[item.key]) }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      colors: [
        { color: '#75A6E7', name: 'Total DApps', key: 'totalDApps' },
        { color: '#84D199', name: 'Total Developers', key: 'totalDevelopers' },
        { color: '#BE80E0', name: 'Total Users', key: 'totalUsers' },
      ],
      data: null,
    }
  },
  mounted() {
    this.getTotal()
  },
  methods: {
    async getTotal() {
      try {
        const { data } = await this.$axios.get('/dapps/total/detail')
        this.data = data.data
      } catch (error) {
        //
      }
    },
  },
}
</script>
