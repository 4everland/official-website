<template>
  <v-container class="px-15 pb-16 grey--text text--darken-4 white">
    <div class="text-h5 font-weight-bold pb-6">Leaderboard</div>
    <div v-if="!data">
      <v-skeleton-loader light type="table" />
    </div>
    <v-data-table
      v-else
      :headers="headers"
      :items="data.content"
      light
      loading-text="Loading... Please wait"
      disable-sort
      @click:row="
        (item) => {
          toDetail(item.projectId)
        }
      "
    >
    </v-data-table>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: '',
          align: 'center',
          value: 'index',
        },
        { text: 'DApps', align: 'center', value: 'dAppName' },
        { text: 'Total UV', align: 'center', value: 'totalUv' },
        { text: 'Total PV', align: 'center', value: 'totalPv' },
        { text: '24H UV', align: 'center', value: 'uv' },
        { text: '24H PV', align: 'center', value: 'pv' },
      ],
      page: 0,
      size: 10,
      data: null,
    }
  },
  mounted() {
    this.getTable(this.page, this.size)
  },
  methods: {
    toDetail(id) {
      this.$router.push(`/dapps/${id}`)
    },
    async getTable(page, size) {
      try {
        const { data } = await this.$axios.get('/dapps/list', {
          params: {
            page,
            size,
          },
        })
        data.data.content.map((item, index) => {
          item.totalUv = this.tools.formatBigNum(item.totalUv)
          item.totalPv = this.tools.formatBigNum(item.totalPv)
          item.uv = this.tools.formatBigNum(item.uv)
          item.pv = this.tools.formatBigNum(item.pv)
          item.index = index + 1
          return item
        })
        this.data = data.data
      } catch (error) {
        //
      }
    },
    print(item) {
      console.log(item)
    },
  },
}
</script>
<style lang="less" scoped>
/deep/ .v-data-table-header {
  background-color: #ecf4ff;
}
/deep/ tbody tr {
  cursor: pointer;
}
</style>
