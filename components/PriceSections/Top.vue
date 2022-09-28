<template>
  <div class="ecosystem-banner">
    <div class="banner-box">
      <v-container class="text-center">
        <div class="banner-title">Simple, Flexible Pricing</div>
        <div class="banner-tips">
          A better experience for developers creates <br />
          a better experience for users.
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
.ecosystem-banner {
  position: relative;
  .banner-box {
    width: 100%;
    height: 500px;
    background-image: url('@/assets/imgs/price/banner.png');
    background-size: cover;
    background-position: center;
    .banner-title {
      font-size: 68px;
      font-family: 'Ubuntu-Bold', sans-serif;
      font-weight: bold;
      color: #fff;
      margin-top: 98px;
    }
    .banner-tips {
      margin-top: 44px;
      font-size: 23px;
      font-family: 'Ubuntu-Medium', sans-serif;
      font-weight: bold;
      color: #fff;
    }
  }
}
@media screen and (min-width: 1441px) {
  .ecosystem-banner {
    .banner-box {
      height: 660px;
    }
  }
}
@media screen and (max-width: 960px) {
  .ecosystem-banner {
    .banner-box {
      height: auto;
      .banner-title {
        font-size: 28px;
      }
    }
  }
}
</style>
