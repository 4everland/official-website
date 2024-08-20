<template>
  <v-container id="structure" fluid class="main-container">
    <v-row justify="center" align="center" class="text-left">
      <v-col cols="12">
        <h4 class="white--text header-title font-weight-bold">
          THE ROBUST DEPIN NETWORK POWERS APPLICATIONS
        </h4>
        <p class="p-text get-start">
          We integrated DePINs and protocols to offer robust underlying
          capabilities, encompassing decentralized computing, storage, network,
          and more.
        </p>
      </v-col>
    </v-row>
    <div class="mt-10 bottom-img">
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
  padding: 160px 80px 100px 80px;
  max-width: 100%;
}
.p-text {
  color: white;
  opacity: 0.7;
}
.header-title {
  font-size: 48px;
}
.bottom-img {
  padding-bottom: 80px;
  background: url('@/assets/imgs/forward/Grid.png');
  width: 100%;
  background-size: cover;
  background-position: center bottom;
}
@media (max-width: 960px) {
  .main-container {
    padding: 64px 20px;
  }
  .header-title {
    font-size: 32px;
  }
}
@media (min-width: 1440px) {
  .main-container {
    margin: 0 auto;
    width: 1440px;
  }
}
</style>
