<template>
  <v-container class="px-15 pb-16 grey--text text--darken-4 white">
    <div class="text-h5 font-weight-bold pb-6">{{ title }}</div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
      light
      loading-text="Loading... Please wait"
      ><v-data-footer></v-data-footer
    ></v-data-table>
  </v-container>
</template>
<script>
export default {
  props: {
    title: { type: String, default: '' },
  },
  data() {
    return {
      headers: [
        {
          text: '',
          align: 'center',
          sortable: false,
          value: 'index',
        },
        { text: 'DApps', align: 'center', value: 'calories' },
        { text: 'Total UV', align: 'center', value: 'fat' },
        { text: 'Total PV', align: 'center', value: 'fat' },
        { text: '24H UV', align: 'center', value: 'carbs' },
        { text: '24H PV', align: 'center', value: 'protein' },
      ],
      desserts: [
        {
          index: '1',
          calories: 'Uniswap',
          fat: 10000,
          carbs: 10000,
          protein: 10000,
        },
        {
          index: '2',
          calories: 'Uniswap',
          fat: 10000,
          carbs: 10000,
          protein: 10000,
        },
        {
          index: '3',
          calories: 'Uniswap',
          fat: 10000,
          carbs: 10000,
          protein: 10000,
        },
        {
          index: '4',
          calories: 'Uniswap',
          fat: 10000,
          carbs: 10000,
          protein: 10000,
        },
        {
          index: '4',
          calories: 'Uniswap',
          fat: 10000,
          carbs: 10000,
          protein: 10000,
        },
        {
          index: '4',
          calories: 'Uniswap',
          fat: 10000,
          carbs: 10000,
          protein: 10000,
        },
        {
          index: '4',
          calories: 'Uniswap',
          fat: 10000,
          carbs: 10000,
          protein: 10000,
        },
        {
          index: '4',
          calories: 'Uniswap',
          fat: 10000,
          carbs: 10000,
          protein: 10000,
        },
        {
          index: '4',
          calories: 'Uniswap',
          fat: 10000,
          carbs: 10000,
          protein: 10000,
        },
        {
          index: '4',
          calories: 'Uniswap',
          fat: 10000,
          carbs: 10000,
          protein: 10000,
        },
        {
          index: '4',
          calories: 'Uniswap',
          fat: 10000,
          carbs: 10000,
          protein: 10000,
        },
        {
          index: '4',
          calories: 'Uniswap',
          fat: 10000,
          carbs: 10000,
          protein: 10000,
        },
        {
          index: '4',
          calories: 'Uniswap',
          fat: 10000,
          carbs: 10000,
          protein: 10000,
        },
        {
          index: '4',
          calories: 'Uniswap',
          fat: 10000,
          carbs: 10000,
          protein: 10000,
        },
        {
          index: '4',
          calories: 'Uniswap',
          fat: 10000,
          carbs: 10000,
          protein: 10000,
        },
        {
          index: '4',
          calories: 'Uniswap',
          fat: 10000,
          carbs: 10000,
          protein: 10000,
        },
      ],
    }
  },
}
</script>
<style scoped>
.bottom-radius {
  border-radius: 100% 100% 80% 80% / 0% 0% 10% 10%;
}
</style>
