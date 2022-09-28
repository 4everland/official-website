<template>
  <div id="UseCases" class="home-block">
    <v-container>
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="block-titel white--text">
            Begin Your 4EVER-HOSTING Journey
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center mt-6">
          <v-btn
            :href="hosting_web"
            target="_blank"
            tile
            class="usage-btn"
            height="45"
            >Get Started</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import '@/assets/styles/home.scss'
export default {
  data() {
    return {}
  },
}
</script>
<style scoped lang="less">
#UseCases {
  background: #000;
  min-height: 359px;
  display: flex;
  align-items: center;
  .usage-btn {
    width: 236px;
    height: 45px;
    background: #fff !important;
    font-size: 14px;
    color: #000;
    font-family: 'Ubuntu-Medium', sans-serif !important;
  }
}
</style>
