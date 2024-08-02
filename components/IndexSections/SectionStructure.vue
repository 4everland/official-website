<template>
  <v-container fluid class="main-container">
    <v-row justify="center" align="center" class="text-left">
      <v-col cols="12">
        <h3 class="white--text text-h3 font-weight-bold">
          THE 4EVERLAND NETWORK STRUCTURE
        </h3>
        <p class="white--text get-start">
          Showcasing an efficient, trustless, and decentralized cloud computing
          platform.
        </p>
      </v-col>
    </v-row>
    <div class="mt-10">
      <v-img :src="require('@/assets/imgs/network/Structure.png')"></v-img>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'NetworkStructure',
  data: () => ({}),
}
</script>

<style scoped>
.main-container {
  padding: 64px 80px;
  max-width: 100%;
  min-height: 100vh;
}
</style>
