<template>
  <div class="price-footer">
    <v-container>
      <v-row class="py-16">
        <v-col cols="12" md="6">
          <div class="footer-title">See 4EVERLAND in action</div>
          <div class="footer-content">
            Come and be a part of the next era of infinite possibilities at
            4EVERLAND
          </div>
          <div style="margin-top: 65px">
            <v-btn
              tile
              class="black--text white"
              :href="hosting_web"
              target="_blank"
              width="230"
              height="45"
              >Get started for free</v-btn
            >
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            contain
            max-width="555"
            :src="require('@/assets/imgs/price/action.png')"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.price-footer {
  background-color: #000;
  .footer-title {
    font-size: 45px;
    font-family: 'Ubuntu-Bold', sans-serif;
    font-weight: bold;
    color: #fff;
  }
  .footer-content {
    font-size: 18px;
    font-family: 'Ubuntu-Medium', sans-serif;
    font-weight: 500;
    color: #fff;
  }
}
</style>
