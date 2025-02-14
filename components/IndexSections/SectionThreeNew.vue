<template>
  <v-container id="slideWrap" ref="slideWrap" class="main-container" fluid>
    <div class="slideListWrap">
      <div class="slideTopContent container">
        <div class="slideTopInner">
          <v-row justify="center" align="center" class="top-content text-left">
            <v-col cols="12">
              <h3 class="white--text header-title font-weight-bold">
                Get A FULLY PERSONALIZED EXPERIENCE
              </h3>
              <p class="p-text text-subtitle mt-1 py-5">
                Immerse yourself in the full suite of Web3 services: AI
                Solution, Dweb, Hosting,Storage, Gateway, RPC, and RaaS.
              </p>
            </v-col>
          </v-row>
          <v-row
            justify="space-between"
            class="pl-2 align-center pt-xl-16 mt-5 mb-14 delimiters-start styles_slide_link"
          >
            <v-col class="delimiters-left">
              <div class="carousel-delimiters">
                <div class="carousel-delimiter" @click="goto(0)">
                  <span class="style_bar_outer">
                    <span
                      ref="slideDelimiters0"
                      class="style_bar_inner"
                      style="width: 0%"
                    ></span>
                  </span>
                </div>
                <div class="carousel-delimiter" @click="goto(1)">
                  <span class="style_bar_outer">
                    <span
                      ref="slideDelimiters1"
                      class="style_bar_inner"
                      style="width: 0%"
                    ></span>
                  </span>
                </div>
                <div class="carousel-delimiter" @click="goto(2)">
                  <span class="style_bar_outer">
                    <span
                      ref="slideDelimiters2"
                      class="style_bar_inner"
                      style="width: 0%"
                    ></span>
                  </span>
                </div>
                <div class="carousel-delimiter" @click="goto(3)">
                  <span class="style_bar_outer">
                    <span
                      ref="slideDelimiters3"
                      class="style_bar_inner"
                      style="width: 0%"
                    ></span>
                  </span>
                </div>
                <div class="carousel-delimiter" @click="goto(4)">
                  <span class="style_bar_outer">
                    <span
                      ref="slideDelimiters4"
                      class="style_bar_inner"
                      style="width: 0%"
                    ></span>
                  </span>
                </div>
                <div class="carousel-delimiter" @click="goto(5)">
                  <span class="style_bar_outer">
                    <span
                      ref="slideDelimiters5"
                      class="style_bar_inner"
                      style="width: 0%"
                    ></span>
                  </span>
                </div>
              </div>
            </v-col>
            <v-col align="right" class="btn-center">
              <v-btn
                color="#6172F3"
                href="https://dashboard.4everland.org/"
                target="_blank"
                class="white--text start-btn"
              >
                Get Started
                <div class="right-icon">
                  <v-img
                    class="join_button_icon"
                    :src="
                      require('@/assets/imgs/index/newui/arrow-narrow-right.svg')
                    "
                  ></v-img>
                </div>
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </div>
      <div class="styles_slideList_wrap">
        <!-- slide1 -->
        <div ref="slide1" class="styles_slide_item styles_ai">
          <div ref="slide11" class="styles_slideBg_animate styles_ai">
            <div ref="slide12" class="styles_slideBgInner styles_ai"></div>
          </div>
          <div ref="slideContent1" class="styles_slideContent_wrap">
            <v-container>
              <v-row>
                <v-col class="text-title styles_content_outer">
                  <div class="item-icon mt-4 mb-4 d-flex justify-start">
                    <div>
                      <v-img
                        class="mr-2"
                        :src="require('@/assets/imgs/forward/icon/AI.svg')"
                        width="20"
                        height="20"
                      ></v-img>
                    </div>
                    <p class="mb-0">AI Solution</p>
                  </div>
                  <h3 class="white--text description font-weight-bold">
                    A Streamlined Interface to Leverage Diverse Large Language
                    Models
                  </h3>
                  <p class="p-text text-subtitle-1 mt-4">
                    A unified interface for 100+ LLMs, enabling to explore,
                    compare, and select models and pricing options tailored to
                    your specific needs.
                  </p>
                </v-col>
                <v-col class="col-item-img">
                  <div>
                    <v-img
                      :src="require('@/assets/imgs/forward/showcase/ai.png')"
                      class="item-img"
                    >
                    </v-img>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        <!-- slide2 -->
        <div
          ref="slide2"
          class="styles_slide_item styles_hosting_item styles_isVisible"
        >
          <div
            ref="slide21"
            class="styles_slideBg_animate styles_hosting_item styles_isVisible"
          >
            <div
              ref="slide22"
              class="styles_slideBgInner styles_hosting_item styles_isVisible"
            ></div>
          </div>
          <div
            ref="slideContent2"
            class="styles_slideContent_wrap styles_isActive_content"
          >
            <v-container>
              <v-row>
                <v-col class="text-title styles_content_outer">
                  <div class="item-icon mt-4 mb-4 d-flex justify-start">
                    <div>
                      <v-img
                        class="mr-2"
                        :src="require('@/assets/imgs/forward/icon/hosting.svg')"
                        width="20"
                        height="20"
                      ></v-img>
                    </div>
                    <p class="mb-0">DWeb Hosting</p>
                  </div>
                  <h3 class="white--text description font-weight-bold">
                    Scalable, Secure, and Efficient Decentralized Hosting
                    Solution
                  </h3>
                  <p class="p-text text-subtitle-1 mt-4">
                    Effortlessly build, deploy, and host decentralized websites
                    and apps on IPFS, Arweave, Dfinity, or BNB Greenfield in
                    seconds.
                  </p>
                </v-col>
                <v-col class="col-item-img">
                  <div>
                    <v-img
                      :src="
                        require('@/assets/imgs/forward/showcase/hosting.png')
                      "
                      class="item-img"
                    >
                    </v-img>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        <!-- slide3 -->
        <div ref="slide3" class="styles_slide_item styles_storage">
          <div ref="slide31" class="styles_slideBg_animate styles_storage">
            <div ref="slide32" class="styles_slideBgInner styles_storage"></div>
          </div>
          <div ref="slideContent3" class="styles_slideContent_wrap">
            <v-container>
              <v-row>
                <v-col class="text-title styles_content_outer">
                  <div class="item-icon mt-4 mb-4 d-flex justify-start">
                    <div>
                      <v-img
                        class="mr-2"
                        :src="require('@/assets/imgs/forward/icon/Storage.svg')"
                        width="20"
                        height="20"
                      ></v-img>
                    </div>
                    <p class="mb-0">Storage</p>
                  </div>
                  <h3 class="white--text description font-weight-bold">
                    Effortlessly Upload & Pin Files to IPFS and Arweave
                  </h3>
                  <p class="p-text text-subtitle-1 mt-4">
                    Use our UI, CLI, or SDK to easily decentralize your files.
                    Our built-in pinning orchestration makes the process of
                    uploading and pinning files to IPFS and Arweave seamless.
                  </p>
                </v-col>
                <v-col class="col-item-img">
                  <div>
                    <v-img
                      :src="
                        require('@/assets/imgs/forward/showcase/storage.png')
                      "
                      class="item-img"
                    >
                    </v-img>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>

        <!-- slide4 -->
        <div ref="slide4" class="styles_slide_item styles_gateway">
          <div ref="slide41" class="styles_slideBg_animate styles_gateway">
            <div ref="slide42" class="styles_slideBgInner styles_gateway"></div>
          </div>
          <div ref="slideContent4" class="styles_slideContent_wrap">
            <v-container>
              <v-row>
                <v-col class="text-title styles_content_outer">
                  <div class="item-icon mt-4 mb-4 d-flex justify-start">
                    <div>
                      <v-img
                        class="mr-2"
                        :src="require('@/assets/imgs/forward/icon/Gateway.svg')"
                        width="20"
                        height="20"
                      ></v-img>
                    </div>
                    <p class="mb-0">Gateway</p>
                  </div>
                  <h3 class="white--text description font-weight-bold">
                    Enhanced Speed, Reliability, and Automatic Resource
                    Allocation
                  </h3>
                  <p class="p-text text-subtitle-1 mt-4">
                    The 4EVERLAND gateway leverages globally distributed nodes
                    to facilitate seamless access to decentralized networks like
                    IPFS, Arweave, Dfinity, and BNB Greenfield.
                  </p>
                </v-col>
                <v-col class="col-item-img">
                  <div>
                    <v-img
                      :src="
                        require('@/assets/imgs/forward/showcase/gateway.png')
                      "
                      class="item-img"
                    >
                    </v-img>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        <!-- slide5 -->
        <div ref="slide5" class="styles_slide_item styles_rpc">
          <div ref="slide51" class="styles_slideBg_animate styles_rpc">
            <div ref="slide52" class="styles_slideBgInner styles_rpc"></div>
          </div>
          <div ref="slideContent5" class="styles_slideContent_wrap">
            <v-container>
              <v-row>
                <v-col class="text-title styles_content_outer">
                  <div class="item-icon mt-4 mb-4 d-flex justify-start">
                    <div>
                      <v-img
                        class="mr-2"
                        :src="require('@/assets/imgs/forward/icon/RPC.svg')"
                        width="20"
                        height="20"
                      ></v-img>
                    </div>
                    <p class="mb-0">RPC</p>
                  </div>
                  <h3 class="white--text description font-weight-bold">
                    High-Speed, Reliable, and Cost-Effective Blockchain Node
                    Access
                  </h3>
                  <p class="p-text text-subtitle-1 mt-4">
                    4EVERLAND RPC offers high-speed, reliable remote procedure
                    call (RPC) services for seamless interaction with diverse
                    blockchain networks.
                  </p>
                </v-col>
                <v-col class="col-item-img">
                  <div>
                    <v-img
                      :src="require('@/assets/imgs/forward/showcase/rpc.png')"
                      class="item-img"
                    >
                    </v-img>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        <!-- slide6 -->
        <div ref="slide6" class="styles_slide_item styles_raas">
          <div ref="slide61" class="styles_slideBg_animate styles_raas">
            <div ref="slide62" class="styles_slideBgInner styles_raas"></div>
          </div>
          <div ref="slideContent6" class="styles_slideContent_wrap">
            <v-container>
              <v-row>
                <v-col class="text-title styles_content_outer">
                  <div class="item-icon mt-4 mb-4 d-flex justify-start">
                    <div>
                      <v-img
                        class="mr-2"
                        :src="require('@/assets/imgs/forward/icon/RaaS.svg')"
                        width="20"
                        height="20"
                      ></v-img>
                    </div>
                    <p class="mb-0">RaaS</p>
                  </div>
                  <h3 class="white--text description font-weight-bold">
                    Customizable Rollup Solutions for Enhanced Blockchain
                    Scalability
                  </h3>
                  <p class="p-text text-subtitle-1 mt-4">
                    Customize your Layer2 blockchain with 4EVERLAND Rollup as a
                    Service (RaaS).
                  </p>
                </v-col>
                <v-col class="col-item-img">
                  <div>
                    <v-img
                      :src="require('@/assets/imgs/forward/showcase/raas.png')"
                      class="item-img"
                    >
                    </v-img>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        icon: require('@/assets/imgs/forward/icon/AI.svg'),
        title: 'AI Solution',
        description:
          'A Streamlined Interface to Leverage Diverse Large Language Models',
        text: ' A unified interface for 100+ LLMs, enabling to explore, compare, and select models and pricing options tailored to your specific needs.',
        img: require('@/assets/imgs/forward/showcase/ai.png'),
        background: require('@/assets/imgs/forward/background/background_ai.png'),
        width: '0%',
      },
      {
        icon: require('@/assets/imgs/forward/icon/hosting.svg'),
        title: 'DWeb Hosting',
        description:
          'Scalable, Secure, and Efficient Decentralized Hosting Solution',
        text: 'Effortlessly build, deploy, and host decentralized websites and apps on IPFS, Arweave, Dfinity, or BNB Greenfield in seconds.',
        img: require('@/assets/imgs/forward/showcase/hosting.png'),
        background: require('@/assets/imgs/forward/background/background_hosting.png'),
        width: '0%',
      },
      {
        icon: require('@/assets/imgs/forward/icon/Storage.svg'),
        title: 'Storage',
        description: 'Effortlessly Upload & Pin Files to IPFS and Arweave',
        text: 'Use our UI, CLI, or SDK to easily decentralize your files. Our built-in pinning orchestration makes the process of uploading and pinning files to IPFS and Arweave seamless.',
        img: require('@/assets/imgs/forward/showcase/storage.png'),
        background: require('@/assets/imgs/forward/background/background_storage.png'),
        width: '0%',
      },
      {
        icon: require('@/assets/imgs/forward/icon/Gateway.svg'),
        title: 'Gateway',
        description:
          'Enhanced Speed, Reliability, and Automatic Resource Allocation',
        text: 'The 4EVERLAND gateway leverages globally distributed nodes to facilitate seamless access to decentralized networks like IPFS, Arweave, Dfinity, and BNB Greenfield.',
        img: require('@/assets/imgs/forward/showcase/gateway.png'),
        background: require('@/assets/imgs/forward/background/background_gateway.png'),
        width: '0%',
      },
      {
        icon: require('@/assets/imgs/forward/icon/RPC.svg'),
        title: 'RPC',
        description:
          'High-Speed, Reliable, and Cost-Effective Blockchain Node Access',
        text: '4EVERLAND RPC offers high-speed, reliable remote procedure call (RPC) services for seamless interaction with diverse blockchain networks.',
        img: require('@/assets/imgs/forward/showcase/rpc.png'),
        background: require('@/assets/imgs/forward/background/background_rpc.png'),
        width: '0%',
      },
      {
        icon: require('@/assets/imgs/forward/icon/RaaS.svg'),
        title: 'RaaS',
        description:
          'Customizable Rollup Solutions for Enhanced Blockchain Scalability',
        text: 'Customize your Layer2 blockchain with 4EVERLAND Rollup as a Service (RaaS).',
        img: require('@/assets/imgs/forward/showcase/raas.png'),
        background: require('@/assets/imgs/forward/background/background_raas.png'),
        width: '0%',
      },
    ],
    currentIndex: 0,
    startHeight: 0,
    lastScrollPosition: 0,
    lastPosition: 0,
    timer: null,
    slideWrapTop: 0,
    scrolling: false,
    slideHeight: 0,
    slideListWrapTop: 0,
    currentSlideIndex: 0,
  }),
  mounted() {
    window.addEventListener('scroll', this.debouncedHandleScroll)
    window.addEventListener('resize', this.handleResize)
    this.slideListWrapTop = document.getElementById('slideWrap').offsetTop
    // console.log('slideListWrapTop', this.slideListWrapTop)
    // this.slideWrapTop = document
    //   .getElementById('slideWrap')
    //   .getBoundingClientRect().top
    this.slideHeight = this.roundToHundred(
      document.getElementById('slideWrap').offsetHeight / 7
    )
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.debouncedHandleScroll)
  },
  methods: {
    handleResize() {
      this.slideListWrapTop = document.getElementById('slideWrap').offsetTop
      this.slideHeight = this.roundToHundred(
        document.getElementById('slideWrap').offsetHeight / 7
      )
    },
    roundToHundred(number) {
      return number // Math.floor(number / 100) * 100
    },
    changeSlide(index) {
      this.currentIndex = index
    },
    onCarouselChange(index) {
      this.currentIndex = index
    },
    debouncedHandleScroll() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.handleScroll()
        this.timer = null
      }, 0)
    },
    goto(position) {
      this.$vuetify.goTo(
        this.slideListWrapTop + this.slideHeight * position + 150,
        {
          duration: 0,
          offset: 0,
          easing: 'easeInOutCubic',
        }
      )
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.handleScroll()
        this.timer = null
      }, 20)
      for (let i = 0; i < position; i++) {
        this.$refs[`slide${i + 1}`].classList.add('styles_isVisible')
        this.$refs[`slide${i + 1}1`].classList.add('styles_isVisible')
        this.$refs[`slide${i + 1}2`].classList.add('styles_isVisible')
      }
      for (let i = 5; i > position; i--) {
        this.$refs[`slide${i + 1}`].classList.remove('styles_isVisible')
        this.$refs[`slide${i + 1}1`].classList.remove('styles_isVisible')
        this.$refs[`slide${i + 1}2`].classList.remove('styles_isVisible')
      }
      for (let i = 0; i < 6; i++) {
        this.$refs[`slideContent${i + 1}`].classList.remove(
          'styles_isActive_content'
        )
        this.$refs[`slideContent${position + 1}`].classList.add(
          'styles_isActive_content'
        )
      }
    },
    getElementBottomRelativeToViewportBottom(element) {
      const rect = element.getBoundingClientRect()
      return window.innerHeight - rect.bottom
    },
    handleScroll(event) {
      if (this.scrolling) return
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      // console.log('scrollTop', scrollTop - this.slideListWrapTop)
      // console.log('offsetTop2', (scrollTop - this.slideListWrapTop) / 1500)
      // this.services[0].width =
      //   ((scrollTop - this.slideListWrapTop) * 100) / 1500 + '%'
      const scrollHeight = scrollTop - this.slideListWrapTop

      if (scrollHeight > this.slideHeight) {
        this.$refs.slideDelimiters0.style.width = '100%'
      } else {
        this.$refs.slideDelimiters0.style.width =
          (scrollHeight * 100) / this.slideHeight + '%'
        this.$refs.slideDelimiters1.style.width = 0
      }
      if (scrollHeight > this.slideHeight * 2) {
        this.$refs.slideDelimiters1.style.width = '100%'
      } else {
        this.$refs.slideDelimiters1.style.width =
          ((scrollHeight - this.slideHeight) * 100) / this.slideHeight + '%'
        this.$refs.slideDelimiters2.style.width = 0
      }
      if (scrollHeight > this.slideHeight * 3) {
        this.$refs.slideDelimiters2.style.width = '100%'
      } else {
        this.$refs.slideDelimiters2.style.width =
          ((scrollHeight - this.slideHeight * 2) * 100) / this.slideHeight + '%'
        this.$refs.slideDelimiters3.style.width = '0'
      }
      if (scrollHeight > this.slideHeight * 4) {
        this.$refs.slideDelimiters3.style.width = '100%'
      } else {
        this.$refs.slideDelimiters3.style.width =
          ((scrollHeight - this.slideHeight * 3) * 100) / this.slideHeight + '%'
        this.$refs.slideDelimiters4.style.width = '0'
      }
      if (scrollHeight > this.slideHeight * 5) {
        this.$refs.slideDelimiters4.style.width = '100%'
      } else {
        this.$refs.slideDelimiters4.style.width =
          ((scrollHeight - this.slideHeight * 4) * 100) / this.slideHeight + '%'
        this.$refs.slideDelimiters5.style.width = '0'
      }
      if (scrollHeight > this.slideHeight * 6) {
        this.$refs.slideDelimiters5.style.width = '100%'
      } else {
        this.$refs.slideDelimiters5.style.width =
          ((scrollHeight - this.slideHeight * 5) * 100) / this.slideHeight + '%'
      }
      this.$nextTick()

      if (
        scrollTop - this.slideListWrapTop <= this.slideHeight &&
        scrollTop - this.slideListWrapTop > 0
      ) {
        this.$refs.slide1.classList.add('styles_isVisible')
        this.$refs.slide11.classList.add('styles_isVisible')
        this.$refs.slide12.classList.add('styles_isVisible')
        this.$refs.slide2.classList.remove('styles_isVisible')
        this.$refs.slide21.classList.remove('styles_isVisible')
        this.$refs.slide22.classList.remove('styles_isVisible')
        this.$refs.slideContent1.classList.add('styles_isActive_content')
        this.$refs.slideContent2.classList.remove('styles_isActive_content')
        this.currentSlideIndex = 0
      } else if (
        scrollTop - this.slideListWrapTop > this.slideHeight &&
        scrollTop - this.slideListWrapTop <= this.slideHeight * 2
      ) {
        this.$refs.slide2.classList.add('styles_isVisible')
        this.$refs.slide21.classList.add('styles_isVisible')
        this.$refs.slide22.classList.add('styles_isVisible')
        this.$refs.slide3.classList.remove('styles_isVisible')
        this.$refs.slide31.classList.remove('styles_isVisible')
        this.$refs.slide32.classList.remove('styles_isVisible')
        this.$refs.slideContent2.classList.add('styles_isActive_content')
        this.$refs.slideContent1.classList.remove('styles_isActive_content')
        this.$refs.slideContent3.classList.remove('styles_isActive_content')
        this.currentSlideIndex = 1
      } else if (
        scrollTop - this.slideListWrapTop > this.slideHeight * 2 &&
        scrollTop - this.slideListWrapTop <= this.slideHeight * 3
      ) {
        this.$refs.slide3.classList.add('styles_isVisible')
        this.$refs.slide31.classList.add('styles_isVisible')
        this.$refs.slide32.classList.add('styles_isVisible')
        this.$refs.slide4.classList.remove('styles_isVisible')
        this.$refs.slide41.classList.remove('styles_isVisible')
        this.$refs.slide42.classList.remove('styles_isVisible')
        this.$refs.slideContent3.classList.add('styles_isActive_content')
        this.$refs.slideContent2.classList.remove('styles_isActive_content')
        this.$refs.slideContent4.classList.remove('styles_isActive_content')
        this.currentSlideIndex = 2
      } else if (
        scrollTop - this.slideListWrapTop > this.slideHeight * 3 &&
        scrollTop - this.slideListWrapTop <= this.slideHeight * 4
      ) {
        this.$refs.slide4.classList.add('styles_isVisible')
        this.$refs.slide41.classList.add('styles_isVisible')
        this.$refs.slide42.classList.add('styles_isVisible')
        this.$refs.slide5.classList.remove('styles_isVisible')
        this.$refs.slide51.classList.remove('styles_isVisible')
        this.$refs.slide52.classList.remove('styles_isVisible')
        this.$refs.slideContent4.classList.add('styles_isActive_content')
        this.$refs.slideContent3.classList.remove('styles_isActive_content')
        this.$refs.slideContent5.classList.remove('styles_isActive_content')
        this.currentSlideIndex = 3
      } else if (
        scrollTop - this.slideListWrapTop > this.slideHeight * 4 &&
        scrollTop - this.slideListWrapTop <= this.slideHeight * 5
      ) {
        this.$refs.slide5.classList.add('styles_isVisible')
        this.$refs.slide51.classList.add('styles_isVisible')
        this.$refs.slide52.classList.add('styles_isVisible')
        this.$refs.slide6.classList.remove('styles_isVisible')
        this.$refs.slide61.classList.remove('styles_isVisible')
        this.$refs.slide62.classList.remove('styles_isVisible')
        this.$refs.slideContent5.classList.add('styles_isActive_content')
        this.$refs.slideContent4.classList.remove('styles_isActive_content')
        this.$refs.slideContent6.classList.remove('styles_isActive_content')
        this.currentSlideIndex = 4
      } else if (
        scrollTop - this.slideListWrapTop > this.slideHeight * 5 &&
        scrollTop - this.slideListWrapTop <= this.slideHeight * 6
      ) {
        this.$refs.slide6.classList.add('styles_isVisible')
        this.$refs.slide61.classList.add('styles_isVisible')
        this.$refs.slide62.classList.add('styles_isVisible')
        this.$refs.slideContent6.classList.add('styles_isActive_content')
        this.$refs.slideContent5.classList.remove('styles_isActive_content')
        this.currentSlideIndex = 5
      } else if (scrollTop - this.slideListWrapTop < 0) {
        this.$refs.slide2.classList.remove('styles_isVisible')
        this.$refs.slide21.classList.remove('styles_isVisible')
        this.$refs.slide22.classList.remove('styles_isVisible')
        this.$refs.slideContent2.classList.remove('styles_isActive_content')
        this.$refs.slideContent1.classList.add('styles_isActive_content')
        this.currentSlideIndex = 0
      } else if (scrollTop - this.slideListWrapTop > this.slideHeight * 6) {
        this.$refs.slideContent1.classList.remove('styles_isActive_content')
      }
    },
  },
}
</script>

<style scoped>
.main-container {
  max-width: 100%;
  height: 1000vh;
  padding: 0;
  position: relative;
  top: 0;
  z-index: 1;
}
.main-content {
  padding: 64px 80px;
  max-width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: right bottom;
}
.p-text {
  color: white;
  opacity: 0.7;
}
.header-title {
  font-size: 44px;
}
.v-btn {
  justify-content: flex-end !important;
}
.start-btn {
  width: 203px;
  padding: 24px 0 !important;
  border-radius: 48px;
  font-weight: bold;
  margin-right: 15px;
  margin-top: 30px;
}
.col-item-img {
  padding-right: 0;
}
.item-img {
  width: 600px;
  margin-left: 20px !important;
}
.delimiters-left {
  padding-left: 0;
  flex: 2;
}
.right-icon {
  padding: 7px;
  border-radius: 20px;
  background-color: #fff;
  margin-left: 24px;
  margin-right: 8px;
}
.join_button_icon {
  width: 24px;
  height: 24px;
  max-width: 24px;
  text-align: center;
}
.carousel-container {
  position: relative;
}
.carousel-sheet {
  background-color: transparent !important;
}
.text-subtitle {
  line-height: 20px;
  font-size: 20px !important;
  margin-bottom: 0 !important;
}
.text-subtitle-1 {
  line-height: 20px;
  margin-bottom: 0 !important;
}
.description {
  font-size: 32px;
  line-height: 32px;
}
.carousel-delimiters {
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel-delimiter {
  width: 20%;
  height: 4px;
  border-radius: 2px;
  background-color: #30384a;
  margin: 0 4px;
  cursor: pointer;
  position: relative;
}
.carousel-delimiter:hover {
  height: 12px;
  border-radius: 12px;
  background-color: #30384a;
  margin: 0 4px;
}

.style_bar_outer {
  display: block;
  height: 4px;
  position: relative;
  overflow: hidden;
  width: 100%;
}
.carousel-delimiter:hover .style_bar_outer {
  height: 12px;
  border-radius: 12px;
}

.style_bar_inner {
  bottom: 0;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-color: #fff;
  width: 0%;
  border-radius: 2px;
}

.carousel-delimiter:hover .style_bar_inner {
  border-radius: 12px;
}

.carousel-delimiter.active {
  background-color: #fff;
}
p {
  color: #fff;
}
.host-icon div {
  margin: 0 10px;
}
.text-title {
  padding-top: 40px;
}
@media (max-width: 480px) {
  .main-container {
    padding: 20px 0 !important;
  }
  .main-content {
    padding: 10px 20px;
    height: 100vh;
  }
}
@media (max-width: 960px) {
  .main-container {
    padding: 60px 20px;
    height: 1000vh !important;
  }
  .header-title {
    font-size: 24px;
    line-height: 30px;
  }
  .carousel-delimiters {
    max-width: 100%;
    width: 200%;
  }
  .delimiters-left {
    padding-left: 0;
    padding-bottom: 8px;
    padding-top: 8px;
  }
  .col-item-img {
    margin-top: 20px !important;
    padding-top: 0 !important;
    padding-right: 0 !important;
  }
  .item-img {
    width: 340px;
    margin-left: 0 !important;
  }
  .item-icon {
    margin-top: 10px !important;
    margin-bottom: 10px !important;
  }
  .description {
    font-size: 16px;
    line-height: 20px;
  }
  .text-subtitle-1 {
    line-height: 18px;
    font-size: 12px !important;
    margin-bottom: 0 !important;
    margin-top: 12px !important;
  }
  .text-subtitle {
    font-size: 14px !important;
    padding: 6px 0 !important;
  }
  .text-title {
    padding: 0 12px !important;
  }
  .carousel-wrap {
    margin-top: 0 !important;
  }
  .delimiters-start {
    margin-top: 0 !important;
    margin-bottom: 20px !important;
  }
  .btn-center {
    display: flex;
    align-items: center !important;
  }
  .start-btn {
    margin: 0 auto;
  }
}

.slideListWrap {
  height: 100vh;
  left: 0;
  overflow: hidden;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
}
.slideTopContent {
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100px;
  z-index: 10;
}
.slideTopInner {
  margin: 0 auto;
}
.styles_slide_link {
  width: 100%;
  margin: 0 auto;
}

.styles_slideList_wrap {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

.styles_slide_item {
  pointer-events: none;
}

.styles_content_outer {
  opacity: 0;
  transform: translateY(50%);
  transition: transform 1000ms cubic-bezier(0.65, 0, 0.35, 1),
    opacity 1000ms cubic-bezier(0.65, 0, 0.35, 1);
  visibility: hidden;
}

.styles_isActive_content .styles_content_outer {
  opacity: 1;
  transform: none;
  transition: transform 1000ms cubic-bezier(0.65, 0, 0.35, 1),
    opacity 1000ms cubic-bezier(0.65, 0, 0.35, 1);
  visibility: visible;
}

.styles_slideBg_animate,
.styles_slide_item {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 101;
}
.styles_slideContent_wrap {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  opacity: 0;
  padding: 16px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 350px;
  width: 100%;
  transition: opacity 250ms cubic-bezier(0.33, 1, 0.68, 1);
  z-index: 102;
}
.styles_slideContent_wrap.styles_isActive_content {
  opacity: 1;
}
.styles_slideBg_animate {
  overflow: hidden;
  transform-origin: 50% 50%;
  transform: translateY(100%);
  transition: transform 1000ms 100ms cubic-bezier(0.33, 1, 0.68, 1);
}

.styles_slideBg_animate.styles_isVisible {
  transform: none;
  transition: transform 1000ms 100ms cubic-bezier(0.33, 1, 0.68, 1);
}

.styles_slideBg_animate.styles_hosting_item {
  transform: none;
  transition: none;
}

.styles_slideBg_animate.styles_hosting_item.styles_isVisible {
  transition: none;
}

.styles_slideBgInner {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  background-blend-mode: screen, normal;
  background-position: 50% 50%;
  background-size: cover;
  transform-origin: 50% 50%;
  transition: transform 500ms cubic-bezier(0.33, 1, 0.68, 1);
  transform: translateY(0%) scale(100%, 100%);
  z-index: 90;
}
.styles_slideBgInner.styles_isVisible {
  transform: none;
  transition: transform 1000ms 500ms cubic-bezier(0.33, 1, 0.68, 1);
}

.styles_slideBgInner.styles_hosting_item {
  background-image: url('../../assets/imgs/forward/background/background_hosting.png');
  transform: none;
  transition: opacity 500ms cubic-bezier(0.65, 0, 0.35, 1);
  opacity: 0;
}

.styles_slideBgInner.styles_hosting_item.styles_isVisible {
  opacity: 1;
  transition: opacity 1000ms 100ms cubic-bezier(0.65, 0, 0.35, 1);
}

.styles_slideBgInner.styles_storage {
  background-image: url('../../assets/imgs/forward/background/background_storage.png');
}

.styles_slideBgInner.styles_gateway {
  background-image: url('../../assets/imgs/forward/background/background_gateway.png');
}

.styles_slideBgInner.styles_rpc {
  background-image: url('../../assets/imgs/forward/background/background_rpc.png');
}

.styles_slideBgInner.styles_raas {
  background-image: url('../../assets/imgs/forward/background/background_raas.png');
}

.styles_slideBgInner.styles_ai {
  background-image: url('../../assets/imgs/forward/background/background_ai.png');
}

@media (min-width: 1441px) {
  .main-container {
    height: 1000vh;
  }
  .carousel-container {
    margin: 0 auto;
    width: 1280px;
    margin-top: 100px;
  }
  .carousel-wrap {
    margin-top: 150px !important;
  }
  .styles_slideContent_wrap {
    top: 390px;
  }
}
@media (min-width: 1900px) {
  .main-container {
    height: 1000vh;
  }
  .carousel-container {
    margin: 0 auto;
    width: 1280px;
    margin-top: 100px;
  }
  .carousel-wrap {
    margin-top: 150px !important;
  }
  .styles_slideContent_wrap {
    top: 460px;
  }
}
</style>
