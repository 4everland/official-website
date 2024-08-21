<!-- eslint-disable vue/no-lone-template -->
<template>
  <div id="banner" class="pt-xl-16">
    <v-container class="bannerContainer">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="topSectionMain d-flex justify-center align-center">
            <div ref="topTextBox" class="text-box">
              <div class="text-title">A Web3 Cloud</div>
              <div class="text-title2">Computing Platform</div>
              <div
                class="d-flex justify-center align-center mb-16 current-flex"
              >
                <div class="text-tips">
                  Offering a full-service solution for building Web3 DApps
                </div>
                <div class="btn-tips-wrap">
                  <div class="text-tips-button" :class="currentclass">
                    <div style="padding-left: 15px">{{ current }}</div>
                  </div>
                </div>
              </div>
              <div class="text-center pt-8 mb-16">
                <v-btn
                  rounded
                  class="btn_join mx-2"
                  href="https://dashboard.4everland.org/"
                  target="_blank"
                >
                  Get Started for Free
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
                <v-btn
                  rounded
                  class="btn-read mx-2"
                  href="https://docs.4everland.org/"
                  target="_blank"
                >
                  Read Docs
                </v-btn>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div id="bannerVideo" ref="bannerVideo" class="text-center bannervideo">
      <video-play
        video-src="https://static.4everland.org/4EVERLogo_Animation.webm"
      ></video-play>
    </div>
    <div id="logoWrap" ref="logoWrap" class="logoWrap">
      <Logolist></Logolist>
    </div>
    <div id="starRise" ref="starRise" class="starRiseWrap">
      <star-rise></star-rise>
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
      labels: [
        'DWeb Hosting',
        'Storage',
        'Gateway',
        'RPC',
        'RaaS',
        'AI Solution',
      ],
      current: '',
      activeIndex: 0,
      currentclass: '',
      bannerHeight: 0,
      lastScrollPosition: 0,
      scrolling: false,
      topTextBoxBottom: 0,
    }
  },
  mounted() {
    this.showLabel()
    this.bannerHeight = document.getElementById('banner').offsetHeight + 76
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
    setTimeout(() => {
      window.scrollTo(0, 0)
      const topTextBoxHeight = this.$refs.topTextBox.getBoundingClientRect().top
      this.$refs.topTextBox.style.top = topTextBoxHeight + 'px'
      this.topTextBoxBottom = this.getElementBottomRelativeToViewportBottom(
        this.$refs.topTextBox
      )
      this.timer = null
    }, 100)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    showLabel() {
      let nextIndex = 1
      setTimeout(() => {
        this.currentclass = 'enterActive'
        this.current = this.labels[this.activeIndex]
        this.activeIndex = nextIndex
      }, 50)
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
    onScroll(event) {
      this.scrolling = true
      this.$vuetify.goTo('#pionWrap', {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic',
      })
      setTimeout(() => {
        this.scrolling = false
      }, 500)
    },
    getElementBottomRelativeToViewportBottom(element) {
      const rect = element.getBoundingClientRect()
      return window.innerHeight - rect.bottom
    },
    handleScroll() {
      if (this.scrolling) {
        return
      }
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const scrollPercent =
        (scrollTop / (scrollHeight - this.bannerHeight)) * 100
      this.$refs.bannerVideo.style.transform = `translateY(${
        -scrollPercent * 100
      }px)`
      this.$refs.starRise.style.transform = `translateY(${
        -scrollPercent * 100
      }px)`
      // banner bottom to screen bottom
      const bottom = this.getElementBottomRelativeToViewportBottom(
        document.getElementById('banner')
      )
      // banner bottom to screen top
      const bottomToHeight = document
        .getElementById('banner')
        .getBoundingClientRect().bottom
      const delta = scrollTop - this.lastScrollPosition
      // if(bottom == 150)
      if (scrollPercent * 100 > this.bannerHeight / 2 - 330) {
        this.$refs.logoWrap.style.position = 'relative'
        // eslint-disable-next-line no-undef
        if (delta > 0) {
          if (bottom > 150 && bottomToHeight > 0) {
            this.onScroll()
          }
        }
      } else {
        this.$refs.logoWrap.style.position = 'fixed'
        this.$refs.logoWrap.style.bottom = '0px'
        this.$refs.logoWrap.style.top = 'unset'
      }
      this.lastScrollPosition = scrollTop
    },
  },
}
</script>
<style lang="less" scoped>
#banner {
  min-height: 120vh;
  position: relative;
  background-color: #000;
  margin-bottom: 250px;
  .topSectionMain {
    position: relative;
    z-index: 1;
    height: 100vh;
    .text-box {
      z-index: 2;
      position: sticky;
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
        color: rgba(255, 255, 255, 0.75);
      }
      .btn-tips-wrap {
        width: 240px;
        padding-left: 10px;
      }
      .text-tips-button {
        max-width: 240px;
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
.bannervideo {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 35%;
  left: 0;
  bottom: 0;
  margin-top: -80px;
  z-index: 0;
}
.logoWrap {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 90;
}
.starRiseWrap {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

@media (max-width: 960px) {
  #banner {
    .text-box {
      .text-title {
        font-size: 40px !important;
        line-height: unset;
        font-weight: normal;
      }
      .text-title2 {
        font-size: 40px !important;
      }
      .text-tips {
        font-size: 12px;
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
  .btn-read {
    width: 272px !important;
    margin-top: 20px;
  }
  .current-flex {
    flex-direction: column !important;
  }
  .btn-tips-wrap {
    margin-top: 20px;
  }
}
@media (max-width: 480px) {
  .bannervideo {
    top: 0;
  }
}
@media (min-width: 1904px) {
  .container {
    max-width: 100% !important;
  }
  #banner {
    margin-bottom: 30vh;
    .topSectionMain {
      .bannervideo {
        top: 40px;
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
