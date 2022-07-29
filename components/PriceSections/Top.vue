<template>
  <div class="ecosystem-banner">
    <div class="banner-box">
      <v-container class="text-center">
        <div class="banner-title">
          4everland provides developers with a better experience
        </div>
        <div class="banner-tips">Support we offer</div>
        <v-row class="banner-img">
          <v-col
            v-for="(item, index) in bannerList"
            :key="index"
            cols="12"
            md="3"
          >
            <v-img :src="item" width="205" class="ma-auto"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bannerList: [
        require('@/assets/imgs/price/0.png'),
        require('@/assets/imgs/price/1.png'),
        require('@/assets/imgs/price/2.png'),
        require('@/assets/imgs/price/3.png'),
      ],
    }
  },
}
</script>
<style lang="less" scoped>
.ecosystem-banner {
  position: relative;
  .banner-box {
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    background-image: linear-gradient(-30deg, #f2ffe9 0%, #aaeaff 100%),
      linear-gradient(#f1f1f1, #f1f1f1);
    background-blend-mode: normal, normal;
    .banner-title {
      font-size: 24px;
      font-weight: bold;
      color: #132642;
    }
    .banner-tips {
      margin-top: 30px;
      font-size: 30px;
      font-weight: bold;
      color: #132642;
    }
    .banner-img {
      margin-top: 70px;
    }
  }
}
@media screen and (min-width: 1441px) {
  .ecosystem-banner {
    .banner-box {
      height: 800px !important;
      .banner-title {
        font-size: 27px;
      }
      .banner-tips {
        font-size: 34px;
        margin-top: 35px;
      }
      .banner-img {
        margin-top: 80px;
      }
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
      .banner-img {
        margin-top: 0;
      }
    }
  }
}
</style>
