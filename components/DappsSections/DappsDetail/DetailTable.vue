<template>
  <v-container class="px-15 pb-16 grey--text text--darken-4 white">
    <div class="text-h5 font-weight-bold pb-6">Retention Rate</div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="7"
      class="elevation-1"
      light
      loading-text="Loading... Please wait"
      hide-default-footer
      disable-sort
    ></v-data-table>
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
          value: 'time',
        },
        { text: 'New Users', align: 'center', value: 'newUsers' },
        { text: '1 Day', align: 'center', value: 'day1' },
        { text: '2 Day', align: 'center', value: 'day2' },
        { text: '3 Day', align: 'center', value: 'day3' },
        { text: '4 Day', align: 'center', value: 'day4' },
        { text: '5 Day', align: 'center', value: 'day5' },
        { text: '6 Day', align: 'center', value: 'day6' },
        { text: '7 Day', align: 'center', value: 'day7' },
      ],
      desserts: [
        {
          time: '2021/07/28',
          newUsers: 100,
          day1: '89.89%',
          day2: '89.89%',
          day3: '89.89%',
          day4: '89.89%',
          day5: '89.89%',
          day6: '89.89%',
          day7: '89.89%',
        },
        {
          time: '2021/07/28',
          newUsers: 100,
          day1: '89.89%',
          day2: '89.89%',
          day3: '89.89%',
          day4: '89.89%',
          day5: '89.89%',
          day6: '89.89%',
        },
        {
          time: '2021/07/28',
          newUsers: 100,
          day1: '89.89%',
          day2: '89.89%',
          day3: '89.89%',
          day4: '89.89%',
          day5: '89.89%',
        },
        {
          time: '2021/07/28',
          newUsers: 100,
          day1: '89.89%',
          day2: '89.89%',
          day3: '89.89%',
          day4: '89.89%',
        },
        {
          time: '2021/07/28',
          newUsers: 100,
          day1: '89.89%',
          day2: '89.89%',
          day3: '89.89%',
        },
        {
          time: '2021/07/28',
          newUsers: 100,
          day1: '89.89%',
          day2: '89.89%',
        },
        {
          time: '2021/07/28',
          newUsers: 100,
          day1: '89.89%',
        },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
/deep/ .v-data-table-header {
  background-color: #ecf4ff;
}
</style>
