<template>
  <v-container class="px-15 pt-15 pb-8 white">
    <v-row>
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
          <p class="text-h3">{{ item.number }}</p>
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
        { color: '#75A6E7', name: 'Total DApps', number: '113,187' },
        { color: '#84D199', name: 'Total Developers', number: '3113,187' },
        { color: '#BE80E0', name: 'Total Uesrs', number: '113,187' },
      ],
    }
  },
}
</script>
