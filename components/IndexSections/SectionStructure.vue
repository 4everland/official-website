<template>
  <v-container fluid class="main-container">
    <v-row justify="center" align="center" class="text-left">
      <v-col cols="12">
        <h4 class="white--text header-title font-weight-bold">
          THE ROBUST DEPIN NETWORK POWERS APPLICATIONS
        </h4>
        <p class="white--text get-start">
          We integrated DePINs and protocols to offer robust underlying
          capabilities, encompassing decentralized computing, storage, network,
          and more.
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
.header-title {
  font-size: 48px;
}
@media (max-width: 960px) {
  .main-container {
    padding: 64px 20px;
  }
  .header-title {
    font-size: 44px;
  }
}
</style>
