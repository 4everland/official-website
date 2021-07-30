<template>
  <v-container class="px-15 pt-15 pb-8 white">
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
            <div>+235</div>
          </div>
          <div class="d-flex justify-space-between">
            <div>Yesterday</div>
            <div>+235</div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4" lg="4">
        <div class="text-sm-center text-md-left">
          <div class="grey--text text--darken-1 mb-2">Total User</div>
          <div class="text-h4 grey--text text--darken-4">64,589</div>
        </div></v-col
      >
      <v-col cols="12" md="4" lg="4">
        <div class="text-sm-center">
          <div class="grey--text text--darken-1 mb-2">
            Use Time(7days average)
          </div>
          <div class="text-h4 grey--text text--darken-4">00:15:36</div>
        </div></v-col
      >
      <v-col cols="12" md="4" lg="4">
        <div class="text-sm-center text-md-right">
          <div class="grey--text text--darken-1 mb-2">
            Next day retention rate
          </div>
          <div class="text-h4 grey--text text--darken-4">37.23%</div>
        </div></v-col
      >
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      colors: [
        { color: '#75A6E7', name: 'New User', number: '113,187' },
        { color: '#84D199', name: 'UV', number: '3113,187' },
        { color: '#BE80E0', name: 'PV', number: '113,187' },
      ],
    }
  },
}
</script>
