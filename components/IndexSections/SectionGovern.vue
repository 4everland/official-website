<template>
  <div>
    <v-container fluid class="main-container">
      <div class="main-content">
        <v-row justify="center" align="center" class="text-left">
          <v-col cols="12">
            <h3 class="white--text header-title font-weight-bold">
              POWER THE DECENTRALIZED CLOUD
            </h3>
            <p class="p-text text-subtitle-1 py-3">
              Use $4EVER for Governance, Services, and Staking Across the
              Network.
              <a
                href="https://docs.4everland.org/get-started/tokenomics"
                target="_blank"
                class="read-more"
              >
                Read more!
              </a>
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3">
            <div class="get-back"></div>
            <div class="get-text">Get $4EVER</div>
          </v-col>
          <v-col cols="12" md="9" class="pt-10 right-item">
            <v-row class="d-flex align-center justify-center">
              <div
                v-for="(item, index) in list"
                :key="index"
                class="service-item d-flex align-center justify-center mb-10"
                :class="{ 'on-hover': item.hover }"
                @mouseenter="item.hover = true"
                @mouseleave="item.hover = false"
                @click="goLink(item.link)"
              >
                <div>
                  <v-img
                    :src="item.hover ? item.icon2 : item.icon"
                    :height="item.iconHeight"
                  ></v-img>
                </div>
                <div class="normal-left">
                  <v-img
                    :src="
                      item.hover
                        ? require('@/assets/imgs/governance/hover-left.svg')
                        : require('@/assets/imgs/governance/normal-left.svg')
                    "
                    height="65px"
                  ></v-img>
                </div>
                <div class="normal-right">
                  <v-img
                    :src="
                      item.hover
                        ? require('@/assets/imgs/governance/hover-right.svg')
                        : require('@/assets/imgs/governance/normal-right.svg')
                    "
                    height="65px"
                  ></v-img>
                </div>
                <div
                  class="right-icon"
                  :class="{ 'right-icon--active': item.hover }"
                >
                  <v-img
                    :src="
                      item.hover
                        ? require('@/assets/imgs/governance/light-narrow-right.svg')
                        : require('@/assets/imgs/governance/arrow-narrow-right.svg')
                    "
                    width="12px"
                  ></v-img>
                </div>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'SectionGovern',
  data: () => ({
    list: [
      {
        icon: require('@/assets/imgs/governance/gate-1.svg'),
        icon2: require('@/assets/imgs/governance/gate-2.svg'),
        iconHeight: 24,
        hover: false,
        link: 'https://www.gate.com/share/FVRCBEZH',
      },
      {
        icon: require('@/assets/imgs/governance/mexc-1.svg'),
        icon2: require('@/assets/imgs/governance/mexc-2.svg'),
        iconHeight: 20,
        hover: false,
        link: 'https://promote.mexc.com/b/FVRCBEZH',
      },
      {
        icon: require('@/assets/imgs/governance/bingx-1.svg'),
        icon2: require('@/assets/imgs/governance/bingx-2.svg'),
        iconHeight: 30,
        hover: false,
        link: 'https://bingx.com/partner/4EVER/0Uwu4p',
      },
      {
        icon: require('@/assets/imgs/governance/uniswap-1.svg'),
        icon2: require('@/assets/imgs/governance/uniswap-2.svg'),
        iconHeight: 36,
        hover: false,
        link: 'https://app.uniswap.org/explore/tokens/ethereum/0xe355de6a6043b0580ff5a26b46051a4809b12793?inputCurrency=NATIVE',
      },
      {
        icon: require('@/assets/imgs/governance/pancakeSwap-1.svg'),
        icon2: require('@/assets/imgs/governance/pancakeSwap-2.svg'),
        iconHeight: 28,
        hover: false,
        link: 'https://pancakeswap.finance/swap?inputCurrency=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c&outputCurrency=0x63eC886286f30AD392749b9e8f24f67F5b8Ac394&chain=bsc',
      },
    ],
  }),
  mounted() {
    this.list.forEach((item) => {
      const img = new Image()
      img.src = item.icon2
    })
  },
  methods: {
    goLink(url) {
      if (!url) return
      window.open(url, '_blank')
    },
  },
}
</script>

<style scoped>
.main-container {
  max-width: 100%;
  background-image: url('@/assets/imgs/governance/bg.png');
  background-position: center;
  background-size: cover;
}
.main-content {
  padding: 120px 4px;
  max-width: 1280px;
  margin: 0 auto;
}
.header-title {
  font-size: 44px;
  font-family: Inter, Arial, sans-serif;
}
.text-subtitle-1 {
  font-size: 20px !important;
  font-family: Inter, Arial, sans-serif !important;
}
.p-text {
  color: white;
  opacity: 0.7;
}
.get-back {
  width: 100%;
  height: 250px;
  background-image: url('@/assets/imgs/governance/get.png');
  background-position: center 50%;
  background-size: 126%;
}
.get-text {
  font-size: 40px;
  font-weight: 600;
  background: linear-gradient(180deg, #8098f9 0%, #e0eaff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-top: -48px;
}
.right-item {
  margin-top: 42px;
}
.service-item {
  position: relative;
  border-radius: 16px;
  border: 1px solid #1e293b;
  background: rgba(1, 5, 19, 0.5);
  box-shadow: 0 0 16px 0 rgba(224, 234, 255, 0.25) inset;
  padding: 20px 40px;
  height: 67px;
  margin-left: 40px;
}
.service-item.on-hover {
  cursor: pointer;
  border: 1px solid #6c798d;
  box-shadow: 0 0 12px 0 rgba(164, 188, 253, 0.5),
    0 0 32px 0 rgba(164, 188, 253, 0.25),
    0 0 16px 0 rgba(224, 234, 255, 0.5) inset;
}
.normal-left {
  position: absolute;
  left: 0;
  top: 0;
}
.normal-right {
  position: absolute;
  right: 0;
  top: 0;
}
.right-icon {
  padding: 4px;
  border-radius: 20px;
  background-color: #fff;
  margin-left: 24px;
}
.right-icon--active {
  background: #6172f3;
}
.read-more {
  text-decoration: none;
  border-bottom: 1px solid #b2ddff;
  padding-bottom: 2px;
  color: #b2ddff;
}
@media (max-width: 960px) {
  .main-container {
    width: 100%;
    padding: 0 20px;
    overflow-x: hidden;
  }
  .main-content {
    width: 100%;
    padding: 64px 20px;
  }
  .header-title {
    font-size: 24px;
  }
  .text-subtitle-1 {
    font-size: 14px !important;
  }
  .service-item {
    margin-left: 0;
    width: 350px;
  }
  .get-back {
    width: 100%;
    height: 280px;
    background-image: url('@/assets/imgs/governance/get.png');
    background-position: center 70%;
    background-size: 120%;
  }
  .get-text {
    margin-top: -72px;
  }
}
</style>
