<template>
  <div class="ecosystem-banner">
    <v-img :src="banner" height="450" class="img-banner" />
    <div class="banner-box">
      <v-container class="text-center">
        <div class="banner-title">Hello! Welcome to 4EVERLAND Universe!</div>
        <div class="banner-tips">
          4EVERLAND Universe is a portal to showcase projects, Web 3.0 tech
          communities, tools, and products that have integrated 4EVERLAND.
        </div>
        <div class="btn-box">
          <v-btn
            class="top-btn white--text font-weight-bold ma-2"
            color="#452C92"
            rounded
            :large="$vuetify.breakpoint.mdAndDown"
            :x-large="$vuetify.breakpoint.xlOnly"
            href="https://forms.gle/ud4PXFy1sRRKtK1N7"
            target="_blank"
            >Submit your project</v-btn
          >
          <v-btn
            class="top-btn font-weight-bold ma-2"
            outlined
            color="#452C92"
            rounded
            :large="$vuetify.breakpoint.mdAndDown"
            :x-large="$vuetify.breakpoint.xlOnly"
            style="background: #fff"
            :href="hosting_web"
            target="_blank"
            >Try 4EVERLAND now</v-btn
          >
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banner: require('@/assets/imgs/ecosystem/banner.png'),
    }
  },
}
</script>
<style lang="less" scoped>
.ecosystem-banner {
  position: relative;
  .banner-box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    .banner-title {
      font-size: 34px;
      font-weight: bold;
      color: #000;
      font-family: 'BookmanOldStyle-Bold', sans-serif !important;
    }
    .banner-tips {
      max-width: 600px;
      margin: 0 auto;
      margin-top: 36px;
      font-size: 18px;
      font-weight: 400;
      color: #132642;
      font-family: 'Ubuntu', sans-serif !important;
    }
    .btn-box {
      margin-top: 69px;
      font-family: 'Ubuntu', sans-serif !important;
      text-align: center;
    }
  }
}
@media screen and (min-width: 1441px) {
  .ecosystem-banner {
    .img-banner {
      height: 800px !important;
    }
    .banner-box {
      .banner-title {
        font-size: 54px;
      }
      .banner-tips {
        font-size: 24px;
        max-width: 860px;
        margin-top: 60px;
      }
      .btn-box {
        margin-top: 123px;
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .ecosystem-banner {
    .banner-box {
      .banner-title {
        font-size: 28px;
      }
      .btn-box {
        margin-top: 20px;
      }
    }
  }
}
</style>
