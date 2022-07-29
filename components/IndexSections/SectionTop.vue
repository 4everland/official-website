<template>
  <div id="banner">
    <v-container class="my-16">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="text-box">
            <div class="text-title">
              Decentralize Your <br />
              <div>
                <v-carousel
                  v-model="model"
                  hide-delimiter-background
                  hide-delimiters
                  vertical
                  :show-arrows="false"
                  :height="$vuetify.breakpoint.smAndDown ? 42 : 120"
                  cycle
                  interval="3000"
                >
                  <v-carousel-item v-for="color in colors" :key="color">
                    <div class="text-title">{{ color }}</div>
                  </v-carousel-item>
                </v-carousel>
              </div>
            </div>
            <div class="text-tips">
              Build a Web3 application easily, efficiently, and cost-effectively
              on 4EVERLAND
            </div>
            <div style="margin-top: 65px">
              <v-btn color="#000" tile class="white--text" :href="hosting_web"
                >Get started for free</v-btn
              >
            </div>
          </div>
          <!-- <div class="css-75nahk">
            <video
              class="css-1jb4ggb"
              autoplay=""
              muted=""
              loop=""
              playsinline=""
            >
              <source
                src="@/assets/imgs/index/top/bg_video1803.mp4"
                type="video/mp4"
              />
            </video>
            <div class="css-hhqijc"><div class="css-k57fb3"></div></div>
          </div> -->
          <div class="text-center banner">
            <v-img
              class="web-img"
              :src="require('@/assets/imgs/index/top/mask-bg.png')"
            ></v-img>
          </div>
        </v-col>
      </v-row>
      <v-row class="item-list">
        <v-col
          v-for="(item, index) in items"
          :key="index"
          cols="6"
          md="3"
          lg="3"
        >
          <div class="d-flex align-center item-text">
            <v-img
              contain
              max-height="20"
              max-width="20"
              :src="item.icon"
              class="mr-3 hidden-sm-and-down"
            ></v-img>
            <span>{{ item.name }}</span>
          </div>
          <div class="item-tips">
            {{ item.tips }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'Web3 Aggregator',
          tips: ' A blockchain technology-powered, cloud computing platform for Web3.0',
          icon: require('@/assets/imgs/index/top/web3.png'),
          link: '',
        },
        {
          name: 'Storage',
          tips: 'A powerful storage network that is compatible with IPFS, Arweave and more storage protocols',
          icon: require('@/assets/imgs/index/top/storage.png'),
          link: '',
        },
        {
          name: 'Complute',
          tips: 'General-purpose computing layers based on multi-chain integration',
          icon: require('@/assets/imgs/index/top/complute.png'),
          link: '',
        },
        {
          name: 'Network',
          tips: 'Global acceleration network capabilities based on globally distributed gateway nodes',
          icon: require('@/assets/imgs/index/top/network.png'),
          link: '',
        },
      ],
      colors: ['Website', 'Storage', 'Data', 'Application'],
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
  .text-box {
    z-index: 2;
    position: relative;
    .text-title {
      font-size: 100px;
      line-height: 120px;
      text-align: left;
      -webkit-letter-spacing: -2px;
      -moz-letter-spacing: -2px;
      -ms-letter-spacing: -2px;
      letter-spacing: -2px;
      margin-bottom: 18px;
      font-weight: 700;
      color: #161617;
      font-family: 'Ubuntu-Bold', sans-serif;
    }
    .text-tips {
      font-size: 24px;
      text-align: left;
      max-width: 700px;
      color: #161617;
      font-family: 'Ubuntu', sans-serif !important;
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
    max-width: 860px;
    right: 50%;
    -webkit-transform: translateX(50%);
    -ms-transform: translateX(50%);
    transform: translateX(50%);
    top: 0;
    position: absolute;
    overflow: hidden;
    -webkit-mask-image: url('@/assets/imgs/index/top/mask-bg.png');
    mask-image: url('@/assets/imgs/index/top/mask-bg.png');
    -webkit-mask-position: 50% bottom;
    mask-position: 50% bottom;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    mask-size: contain;
    background: rgb(167, 155, 234);
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
        font-family: sans-serif;
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
    }
  }
}
</style>
