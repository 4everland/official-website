<template>
  <v-container
    class="px-15 grey--text text--darken-4 white bottom-round"
    style="padding-bottom: 120px"
  >
    <div class="text-h5 font-weight-bold pb-6">Retention Rate</div>
    <div v-if="!data">
      <v-skeleton-loader light type="table" />
    </div>
    <v-data-table
      v-else
      :headers="headers"
      :items="data"
      :items-per-page="7"
      class="elevation-1"
      light
      loading-text="Loading... Please wait"
      hide-default-footer
      disable-sort
    >
      <template #[`item.createAt`]="{ item }">
        {{ tools.parseTime(item.createAt, '{y}-{m}-{d}') }}
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Time',
          align: 'center',
          value: 'createAt',
        },
        { text: 'New Users', align: 'center', value: 'newUsers' },
        { text: '1 Day', align: 'center', value: 'd1' },
        { text: '2 Day', align: 'center', value: 'd2' },
        { text: '3 Day', align: 'center', value: 'd3' },
        { text: '4 Day', align: 'center', value: 'd4' },
        { text: '5 Day', align: 'center', value: 'd5' },
        { text: '6 Day', align: 'center', value: 'd6' },
        { text: '7 Day', align: 'center', value: 'd7' },
      ],
      data: null,
    }
  },
  mounted() {
    const id = this.$route.query.id
    this.getTable(id)
  },
  methods: {
    async getTable(id) {
      try {
        const { data } = await this.$axios.get(`/dapps/retention/${id}`)
        this.data = data.data
      } catch (error) {
        //
      }
    },
  },
}
</script>
<style lang="less" scoped>
/deep/ .v-data-table-header {
  background-color: #ecf4ff;
}
</style>
