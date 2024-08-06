<!-- eslint-disable vue/no-lone-template -->
<template>
  <div id="banner">
    <v-container class="my-3 mt-md-16 mb-md-5">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="topSectionMain">
            <div class="text-box">
              <div class="text-title">A Web3 Cloud</div>
              <div class="text-title2">Computing Platform</div>
              <div class="text-tips">
                4EVERLAND delivers robust, scalable, and secure Web3 solutions:
              </div>
              <div class="d-flex justify-center mb-16">
                <div class="btn-tips-wrap">
                  <div class="text-tips-button" :class="currentclass">
                    <div style="padding-left: 15px">{{ current }}</div>
                  </div>
                </div>
              </div>
              <div class="text-center pt-8 mb-16">
                <v-btn rounded class="btn_join mx-2" :href="hosting_web">
                  Join Free Trial Now
                  <template>
                    <span class="join_button_icon_span d-flex justify-center">
                      <span class="d-flex align-center justify-center">
                        <v-img
                          class="join_button_icon"
                          :src="
                            require('@/assets/imgs/index/newui/arrow-narrow-right.svg')
                          "
                        ></v-img>
                      </span>
                    </span>
                  </template>
                </v-btn>
                <v-btn rounded class="btn-read mx-2" :href="hosting_web">
                  Read Docs
                </v-btn>
              </div>
            </div>
            <div
              id="bannerVideo"
              ref="bannerVideo"
              class="text-center bannervideo"
            >
              <video-play
                video-src="https://static.4everland.org/4EVERLogo_Animation.webm"
              ></video-play>
            </div>
            <div>
              <star-rise></star-rise>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div ref="logoWrap" class="logoWrap">
      <Logolist></Logolist>
    </div>
  </div>
</template>
<script>
import StarRise from '@/components/IndexSections/StarRise.vue'
import Logolist from '@/components/IndexSections/Logolist.vue'
import VideoPlay from '@/components/IndexSections/VideoPlay.vue'

export default {
  components: {
    StarRise,
    Logolist,
    VideoPlay,
  },
  data() {
    return {
      model: 0,
      labels: ['DWeb Hosting', 'Storage', 'Gateway', 'RPC', 'RaaS', 'AIRPC'],
      current: '',
      activeIndex: 0,
      currentclass: '',
    }
  },
  mounted() {
    this.showLabel()
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    showLabel() {
      let nextIndex = 0

      setInterval(() => {
        nextIndex = this.activeIndex + 1
        if (nextIndex > this.labels.length - 1) {
          nextIndex = 0
        }
        this.currentclass = 'exitActive'
        setTimeout(() => {
          this.currentclass = 'enterActive'
          this.current = this.labels[this.activeIndex]
          this.activeIndex = nextIndex
        }, 500)
      }, 3000)
    },
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const bannerHeight = document.getElementById('banner').offsetHeight
      const scrollHeight = document.documentElement.scrollHeight
      const scrollPercent = (scrollTop / (scrollHeight - bannerHeight)) * 100
      this.$refs.bannerVideo.style.transform = `translateY(${
        -scrollPercent * 50
      }px)`
      console.log(scrollPercent)
      if (scrollPercent > 2.5) {
        this.$refs.logoWrap.style.position = 'relative'
      } else {
        this.$refs.logoWrap.style.position = 'fixed'
      }
    },
  },
}
</script>
<style lang="less" scoped>
#banner {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  .topSectionMain {
    position: relative;
    z-index: 1;
    margin-top: 50px;
    .text-box {
      z-index: 2;
      position: relative;
      .text-title {
        font-size: 72px;
        line-height: 100%;
        text-align: center;
        -webkit-letter-spacing: -2px;
        -moz-letter-spacing: -2px;
        -ms-letter-spacing: -2px;
        letter-spacing: -2px;
        margin-bottom: 18px;
        font-weight: 700;
        color: #fff;
      }
      .text-title2 {
        font-size: 72px;
        line-height: 120%;
        text-align: center;
        -webkit-letter-spacing: -2px;
        -moz-letter-spacing: -2px;
        -ms-letter-spacing: -2px;
        letter-spacing: -2px;
        margin-bottom: 18px;
        font-weight: 700;
        background: linear-gradient(90deg, #fda9ff -0.02%, #039cff 99.98%),
          linear-gradient(135deg, #43cbff 0%, #9708cc 100%),
          linear-gradient(50.98deg, #6172f3 13.23%, #fda9ff 90.34%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .text-tips {
        font-size: 20px;
        text-align: center;
        margin: 20px auto 10px;
        color: rgba(255, 255, 255, 0.75);
      }
      .btn-tips-wrap {
        width: 184px;
      }
      .text-tips-button {
        max-width: 184px;
        overflow: hidden;
        height: 48px;
        line-height: 48px;
        color: #fff;
        font-size: 24px;
        text-align: left;
        border-left: 4px solid #6172f3;
        font-weight: 700;
        background: linear-gradient(
          90deg,
          rgba(97, 114, 243, 0.5) 0%,
          rgba(56, 66, 141, 0) 100%
        );
      }
      .btn_join {
        width: 272px;
        height: 56px;
        border-radius: 48px;
        font-size: 16px;
        font-weight: 700;
        color: #fff;
        padding-right: 0;
        background-color: #6172f3;
        letter-spacing: normal;
        .join_button_icon_span {
          width: 40px;
          height: 40px;
          border-radius: 40px;
          margin-left: 16px;
          background: #fff;
          .join_button_icon {
            width: 24px;
            height: 24px;
            max-width: 24px;
            text-align: center;
          }
        }
      }
      .btn-read {
        width: 162px;
        height: 56px;
        padding: 16px 40px 16px 40px;
        border-radius: 48px;
        border: 1px solid #c7d7fe;
        background: rgba(0, 0, 0, 0.25);
        color: #c7d7fe;
        white-space: normal;
        word-break: break-word;
      }
    }
    .bannervideo {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 0;
      z-index: 1;
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
.logoWrap {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
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
.enter {
  width: 0;
}

.enterActive {
  width: 100%;
  transition: width 0.5s ease 0.15s;
}

.exit {
  width: 100%;
}

.exitActive {
  width: 0;
  transition: width 0.5s ease 0.15s;
}
</style>
