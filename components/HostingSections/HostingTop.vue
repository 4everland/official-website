<template>
  <div id="banner">
    <v-container class="my-4 my-md-16">
      <v-row>
        <v-col cols="12" md="6" lg="6" class="tit-box">
          <div class="text-box">
            <div class="tags">HOSTING</div>
            <div class="text-title">
              Host websites and Dapps on IPFS, Arweave, Dfinity, and BNB
              Greenfield
            </div>
            <div class="text-tips">
              4EVERLAND offers everything you need to host fast and effective
              Web 3.0 censorship-resistant websites or apps.
            </div>
            <div style="margin-top: 69px">
              <v-btn
                :href="hosting_web"
                target="_blank"
                color="#000"
                tile
                class="white--text"
                >Get started for free</v-btn
              >
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="6">
          <div class="text-center">
            <v-img
              class="web-img"
              :src="require('@/assets/imgs/hosting/top.jpg')"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="item-list">
      <v-container>
        <v-row>
          <v-col
            v-for="(item, index) in items"
            :key="index"
            cols="12"
            md="4"
            lg="4"
            class="d-flex justify-center align-center"
          >
            <div>
              <v-img
                max-width="75"
                contain
                :src="item.icon"
                class="mr-5"
              ></v-img>
            </div>
            <div>
              <div class="d-flex align-center item-text">
                <span>{{ item.name }}</span>
              </div>
              <div class="item-tips">
                {{ item.tips }}
              </div>
            </div>
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
      model: 0,
      items: [
        {
          name: 'Automatic',
          tips: 'Deploy contracts and front-ends in a single click',
          icon: require('@/assets/imgs/hosting/Automatic.png'),
        },
        {
          name: 'Compatible',
          tips: 'No additional learning costs for development and deployment.',
          icon: require('@/assets/imgs/hosting/Compatible.png'),
        },
        {
          name: 'Selective',
          tips: 'Supports multiple protocols and public chains on a single dashboard',
          icon: require('@/assets/imgs/hosting/Selective.png'),
        },
      ],
    }
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>
<style lang="less" scoped>
#banner {
  min-height: 500px;
  position: relative;
  .tit-box {
    background-image: url('@/assets/imgs/hosting/top-bg.png');
    background-size: 270px;
    background-position: right bottom;
  }
  .text-box {
    z-index: 2;
    position: relative;
    .tags {
      width: 68px;
      height: 18px;
      background: #000;
      font-size: 11px;
      color: #fff;
      text-align: center;
      margin-bottom: 29px;
    }
    .text-title {
      font-size: 31px;
      line-height: 38px;
      text-align: left;
      margin-bottom: 13px;
      color: #000;
      font-family: 'Ubuntu-Bold', sans-serif;
    }
    .text-tips {
      font-size: 15px;
      text-align: left;
      max-width: 700px;
      color: #161617;
      font-family: 'Ubuntu-Medium', sans-serif !important;
    }
  }
  .item-list {
    margin-top: 50px;
    background-color: #e6eefb;
    min-height: 285px;
    display: flex;
    align-items: center;
  }
  .item-text {
    font-size: 23px;
    max-width: 170px;
    font-family: 'Ubuntu-Bold', sans-serif !important;
  }
  .item-tips {
    margin-top: 10px;
    font-family: 'Ubuntu-Medium', sans-serif !important;
    font-size: 14px;
    max-width: 230px;
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
