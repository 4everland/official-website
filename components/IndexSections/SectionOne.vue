<template>
  <div id="banner">
    <v-container class="my-4 my-md-16">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="text-box">
            <div class="text-title">A Web3 Cloud</div>
            <div class="text-title">Computing Platform</div>
            <div class="text-tips">
              4EVERLAND delivers robust, scalable, and secure Web3 solutions:
            </div>
            <div class="d-flex justify-center mb-6">
              <div class="text-tips-button d-flex align-center justify-center">
                Dapp Hosting
              </div>
            </div>
            <div style="margin-top: 65px">
              <v-btn color="#000" tile class="white--text" :href="hosting_web"
                >Get started for free</v-btn
              >
            </div>
          </div>
          <div>
            <Logolist></Logolist>
          </div>
          <div class="text-center banner">
            <v-img
              class="banner-bg"
              :src="require('@/assets/imgs/index/newui/union1.png')"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Logolist from '@/components/IndexSections/Logolist.vue'

export default {
  components: {
    Logolist,
  },
  data() {
    return {
      model: 0,
    }
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>
<style lang="less" scoped>
#banner {
  min-height: 350px;
  position: relative;
  overflow: hidden;

  .text-box {
    z-index: 2;
    position: relative;
    .text-title {
      font-size: 72px;
      line-height: 180%;
      text-align: center;
      -webkit-letter-spacing: -2px;
      -moz-letter-spacing: -2px;
      -ms-letter-spacing: -2px;
      letter-spacing: -2px;
      margin-bottom: 18px;
      font-weight: 700;
      color: #fff;
      font-family: 'Ubuntu-Bold', sans-serif;
    }
    .text-tips {
      font-size: 20px;
      text-align: center;
      color: #fff;
      font-family: 'Ubuntu', sans-serif !important;
    }
    .text-tips-button {
      width: 184px;
      height: 48px;
      color: #fff;
      font: 24px;
      text-align: center;
      border-left: 4px solid #6172f3;
      background: linear-gradient(
        90deg,
        rgba(97, 114, 243, 0.5) 0%,
        rgba(56, 66, 141, 0) 100%
      );
    }
  }
  .item-list {
    margin-top: 160px;
  }
  .css-1jb4ggb {
    width: 100%;
    height: 100%;
    object-position: bottom;
    object-fit: cover;
    position: relative;
    z-index: 1;
  }
  .banner {
    width: 100%;
  }
  .item-text {
    max-width: 170px;
    border-bottom: 1px solid #161617;
    padding: 10px 0;
    font-family: 'Ubuntu-Bold', sans-serif !important;
  }
  .item-tips {
    margin-top: 7px;
    font-family: 'Ubuntu-Medium', sans-serif !important;
    font-size: 11px;
    max-width: 220px;
  }
}

@media (max-width: 960px) {
  #banner {
    .text-box {
      .text-title {
        font-size: 28px;
        line-height: unset;
        font-weight: normal;
      }
      .text-tips {
        font-size: 12px;
        max-width: 208px;
      }
    }
    .banner {
      right: 10%;
    }
    .item-list {
      margin-top: 50px;
      .mobile-item-one {
        border-bottom: 2px solid #8272d1;
      }
    }
  }
}
</style>
