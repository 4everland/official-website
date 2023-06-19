<template>
  <div id="Partner">
    <div class="front">
      <v-container class="partner-box">
        <v-row>
          <v-col cols="12" md="4">
            <div class="text-box">
              <div class="text-title">Partners</div>
            </div>
          </v-col>
          <v-col cols="12" md="8" class="partner-tips">
            <div class="my-md-4">
              We have earned the trust of outstanding Web3.0 projects and are
              working together to create a new Web3.0 world.
            </div>
            <!-- <div class="mt-4" style="color: #257eff">
              <nuxt-link to="/universe">
                <v-icon color="#257EFF" class="mr-6" size="32">
                  mdi-arrow-right </v-icon
                >Explore the 4EVERLAND ecosystem</nuxt-link
              >
            </div> -->
          </v-col>
        </v-row>
      </v-container>
      <v-row class="mt-4 mt-md-8 container-wrapper">
        <happy-scroll
          color="rgba(5, 31, 48, 1)"
          size="8"
          resize
          hide-vertical
          :hide-horizontal="
            !$vuetify.breakpoint.smAndDown && dappsList.length <= 16
          "
        >
          <v-col cols="12" class="partner-list">
            <div
              v-for="(item, index) in dappsList"
              :key="index"
              class="item-img-box"
              @click="linkTo(item.website)"
            >
              <v-img
                class="mr-2 rounded-circle"
                contain
                max-height="50"
                max-width="50"
                :src="item.logo"
                style="background-color: #eee"
              ></v-img>
              <div class="partner-item-name">{{ item.name }}</div>
            </div>
            <div class="pa-5"></div>
          </v-col>
        </happy-scroll>
      </v-row>
      <!-- <v-container class="touch-bar-box hidden-sm-and-down">
        <div class="touch-bar"></div>
      </v-container> -->
    </div>
  </div>
</template>
<script>
import { HappyScroll } from '@/plugins/happy-scroll/index.js'
import '@/plugins/happy-scroll/scroll.css'

export default {
  components: {
    'happy-scroll': HappyScroll,
  },
  data() {
    return {
      dappsList: [],
    }
  },
  mounted() {
    this.getDappsList()
  },
  methods: {
    async getDappsList() {
      const { data } = await this.$axios.get(
        'https://eco.4everland.space/json/partner.json'
      )
      const { list } = data
      this.dappsList = list
      this.isShow = true
    },
    linkTo(url) {
      window.open(url)
    },
  },
}
</script>
<style lang="less" scoped>
#Partner {
  position: relative;
  overflow: hidden;
  .front {
    position: relative;
    z-index: 7;
    background-image: url('@/assets/imgs/index/partner/bg.png');
    background-position: center;
    background-size: cover;
    padding-bottom: 150px;
  }
  .partner-box {
    padding-top: 86px;

    .partner-tips {
      font-size: 18px;
      text-align: left;
      color: #051f30;
      font-family: 'Ubuntu-Medium', sans-serif !important;
      font-weight: 500;
    }
    .text-box {
      .text-title {
        font-size: 45px;
        text-align: left;
        color: #051f30;
        font-family: 'Ubuntu-Bold', sans-serif !important;
        font-weight: 500;
      }
    }
  }

  .container-wrapper {
    overflow: hidden;
    .partner-list {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      height: 380px;
      padding-left: calc(52vw - 1220px * 0.19) !important;
      padding-right: 20px;
      // overflow: scroll hidden;
      .item-img-box {
        display: flex;
        align-items: center;
        width: 180px;
        height: 76px;
        background: rgba(255, 255, 255, 0.3);
        border: 1px solid #fff;
        border-radius: 8px;
        margin: 4px;
        padding: 0 15px;
        cursor: pointer;
      }
      .partner-item-name {
        font-size: 14px;
        font-family: 'Ubuntu', sans-serif !important;
        color: #051f30;
      }
      .item-img-box:hover {
        background-color: #8272d1;
        border: 1px solid #8272d1;
        .partner-item-name {
          color: #fff;
        }
      }
    }
  }

  .touch-bar-box {
    position: relative;
    .touch-bar {
      position: absolute;
      right: auto;
      left: 0;
      top: 0;
      border-radius: 50px;
      cursor: pointer;
      pointer-events: auto;
      min-height: 0;
      min-width: 10px;
      width: 180px !important;
      height: 8px;
      transform: translate3d(0, 0, 0);
      display: block;
      &::before {
        position: absolute;
        content: '';
        width: 180px;
        height: 8px;
        border-radius: 50px;
        opacity: 1;
        transition: 0.3s linear;
        background-color: #051f30;
      }
    }
  }
  .back-ball-box {
    width: 100%;
    position: relative;
    z-index: 1;
    span {
      width: 40vmin;
      height: 40vmin;
      border-radius: 20vmin;
      backface-visibility: hidden;
      position: absolute;
      animation-name: move;
      animation-duration: 6s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      opacity: 0.3;
    }
    span:nth-child(1) {
      color: #7f17ff;
      top: 54%;
      left: 41%;
      animation-duration: 26s;
      animation-delay: -15.3s;
      transform-origin: 15vw 100px;
      box-shadow: -60vmin 0 12.328532637vmin 40px currentColor;
    }
    span:nth-child(2) {
      color: #ff7417;
      top: 0;
      left: 45%;
      animation-duration: 18s;
      animation-delay: 2s;
      transform-origin: 14vw 20px;
      box-shadow: 60vmin 0 10.2115006212vmin 20px currentColor;
    }
    span:nth-child(3) {
      color: #17ff95;
      top: 35%;
      left: 60%;
      animation-duration: 10s;
      animation-delay: -8.6s;
      transform-origin: 0 -82px;
      box-shadow: -60vmin 0 8.9038134634vmin 30px currentColor;
    }
  }
  a {
    text-decoration: none;
  }
}

::-webkit-scrollbar {
  display: none;
}

@keyframes move {
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
}
@media (max-width: 960px) {
  #Partner {
    position: relative;
    overflow: hidden;
    .front {
      padding-bottom: 45px;
    }
    .partner-box {
      padding-top: 34px;
      .partner-tips {
        font-size: 12px;
        text-align: left;
        font-family: 'Ubuntu', sans-serif !important;
        font-weight: normal;
      }
      .text-box {
        .text-title {
          font-size: 18px;
          font-family: 'Ubuntu', sans-serif !important;
          font-weight: normal;
        }
      }
    }

    .container-wrapper {
      padding-left: 20px;
      .partner-list {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        height: 300px;
        .item-img-box {
          display: flex;
          align-items: center;
          width: 180px;
          height: 76px;
          background: rgba(255, 255, 255, 0.3);
          border: 1px solid #fff;
          border-radius: 8px;
          margin: 4px;
          padding: 0 15px;
        }
        .partner-item-name {
          font-size: 14px;
          font-family: 'Ubuntu', sans-serif !important;
          color: #051f30;
        }
      }
    }

    .touch-bar-box {
      position: relative;
      .touch-bar {
        position: absolute;
        right: auto;
        left: 0;
        top: 0;
        border-radius: 50px;
        cursor: pointer;
        pointer-events: auto;
        min-height: 0;
        min-width: 10px;
        width: 180px !important;
        height: 8px;
        transform: translate3d(0, 0, 0);
        display: block;
        &::before {
          position: absolute;
          content: '';
          width: 180px;
          height: 8px;
          border-radius: 50px;
          opacity: 1;
          transition: 0.3s linear;
          background-color: #051f30;
        }
      }
    }
  }
}
</style>
