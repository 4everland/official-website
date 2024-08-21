<template>
  <v-container fluid class="main-container">
    <v-row justify="center">
      <v-col cols="12">
        <v-row
          class="d-flex text-left align-center title justify-space-between"
        >
          <div>
            <h2 class="white--text header-title font-weight-bold">
              TOP WEB3 PROJECTS ARE BUILDING WITH US
            </h2>
            <p class="p-text text-subtitle-1 mt-5 py-8">
              Numerous projects have harnessed the charm of our diverse
              solutions
            </p>
          </div>
          <div class="text-right scroll-btn">
            <v-btn
              color="primary"
              class="mr-2 slide-icon"
              :disabled="isLeftDisabled"
              @click="scrollCards('left')"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              color="primary"
              class="slide-icon"
              :disabled="isRightDisabled"
              @click="scrollCards('right')"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </v-row>
        <div class="card-shadow mt-6">
          <div class="build-card">
            <div
              v-for="(card, index) in items"
              :key="index"
              class="mr-5 card-item"
            >
              <v-card
                :href="card.link"
                target="_blank"
                class="mb-6"
                :class="`card-${index}`"
              >
                <div>
                  <v-row
                    class="card-header"
                    justify="space-between"
                    align="center"
                  >
                    <div class="title">
                      <v-img
                        :src="card.image"
                        class="logo-header"
                        width="52"
                      ></v-img>
                      <h3 class="ml-4 white--text">{{ card.title }}</h3>
                    </div>
                    <div>
                      <v-btn
                        :href="card.link"
                        target="_blank"
                        class="right-icon"
                      >
                        <v-icon>mdi-arrow-right</v-icon>
                      </v-btn>
                    </div>
                  </v-row>
                  <v-divider class="mt-12" />
                  <div class="background-image mt-7">
                    <p class="white--text">
                      {{ card.description }}
                    </p>
                  </div>
                </div>
              </v-card>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SectionBuild',
  data: () => ({
    items: [
      {
        id: 1,
        image: require('@/assets/imgs/case/logo/logo_snapshot.png'),
        title: 'Snapshot',
        description:
          'Through integrating our S3-compatible decentralized storage solution, Snapshot has achieved secure and reliable decentralized storage of its voting data.',
        link: 'https://medium.com/4everland/4everland-case-study-enhancing-snapshot-with-decentralized-storage-solutions-b08a53f1386a',
      },
      {
        id: 2,
        image: require('@/assets/imgs/case/logo/logo_taiko.png'),
        title: 'Taiko',
        description:
          'Taiko harnesses the power of our gateway to swiftly accelerate content distribution while leveraging decentralized storage to empower their projects cost-effectively and conveniently.',
        link: 'https://taiko.xyz/',
      },
      {
        id: 3,
        image: require('@/assets/imgs/case/logo/logo_syncswap.png'),
        title: 'Syncswap',
        description:
          'Syncswap employs our DWeb Hosting service to realize decentralized front-end deployment, ensuring users can access the resilient and seamless interface.',
        link: 'https://syncswap.xyz/intro',
      },
      {
        id: 4,
        image: require('@/assets/imgs/case/logo/logo_hey.png'),
        title: 'Hey.xyz',
        description:
          'Hey.xyz capitalizes on our IPFS storage to enable decentralized storage of user-generated content, ensuring high resilience and security.',
        link: 'https://hey.xyz/',
      },
      {
        id: 5,
        image: require('@/assets/imgs/case/logo/logo_tape.png'),
        title: 'Tape',
        description:
          'Tape utilizes our IPFS storage to decentralize user-generated data while also enhancing resilience and security measures to improve the overall user experience.',
        link: 'https://tape.xyz/',
      },
      {
        id: 6,
        image: require('@/assets/imgs/case/logo/logo_optopia.png'),
        title: 'Optopia',
        description:
          'Optopia leverages 4EVERLAND RaaS to efficiently deploy high-performance, EVM-compatible Layer 2 solutions for scaling decentralized AI applications.',
        link: 'https://medium.com/4everland/case-study-optopia-ai-8cf9031acf84',
      },
    ],
    currentIndex: 0,
    cardWidth: 400,
    isLeftDisabled: true,
    isRightDisabled: false,
    firstVisibleIndex: 0,
    lastVisibleIndex: 0,
  }),
  mounted() {
    const container = this.$el.querySelector('.build-card')
    const cards = container.querySelectorAll('.card-item')
    container.addEventListener('scroll', () => {
      const cardWidth = cards[0].offsetWidth
      this.firstVisibleIndex = Math.floor(container.scrollLeft / cardWidth)
      const visibleCardsCount = Math.floor(container.offsetWidth / cardWidth)
      this.lastVisibleIndex = this.firstVisibleIndex + visibleCardsCount - 1

      if (this.firstVisibleIndex !== 0) {
        this.isLeftDisabled = false
      } else {
        this.isLeftDisabled = true
      }
      if (this.lastVisibleIndex === 5) {
        this.isRightDisabled = true
      } else {
        this.isRightDisabled = false
      }
    })
  },
  methods: {
    scrollCards(direction) {
      const container = this.$el.querySelector('.build-card')
      const scrollAmount = this.cardWidth
      if (direction === 'left') {
        container.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth',
        })
        console.log('left', scrollAmount)
      } else if (direction === 'right') {
        container.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        })
        console.log('right', scrollAmount)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.main-container {
  padding: 180px 80px 100px 80px;
  max-width: 100%;
}
.header-title {
  font-size: 44px;
}
.text-subtitle-1 {
  font-family: Inter, Arial, sans-serif !important;
}
.p-text {
  color: white;
  opacity: 0.7;
}
.v-card {
  border: 1px solid #ffffff40;
  border-radius: 24px !important;
}
.right-icon {
  height: 36px;
  width: 36px;
  padding: 0 !important;
  margin-left: 18px;
  border-radius: 18px;
  color: #fff;
  text-align: center;
}
.v-btn:not(.v-btn--round).v-size--default {
  min-width: 36px !important;
}
.build-card {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
}
.card-item {
  flex: 0 0 auto;
  width: 400px;
  scroll-snap-align: end;
}
.card-header {
  padding: 53px 32px 0 32px;
}
.logo-header {
  border-radius: 16px;
}
.background-image {
  padding: 20px;
}
.v-divider {
  margin: 0 20px;
}
.card-0 {
  background: linear-gradient(171.12deg, #1c1b20 -27.03%, #757186 150.2%);
  background-size: cover;
  background-position: right bottom;
  height: 560px;
  .background-image {
    border-radius: 24px;
    background: url('@/assets/imgs/case/background/snapshot.png');
    height: 400px;
    background-size: cover;
    background-position: center bottom;
  }
  .right-icon {
    border: 1px solid #f2f4f740;
    background: linear-gradient(
      180deg,
      rgba(164, 188, 253, 0) 0%,
      rgba(164, 188, 253, 0.5) 100%
    );
  }
}
.card-1 {
  background: linear-gradient(
      159.24deg,
      rgba(111, 134, 231, 0.75) 2.47%,
      rgba(187, 155, 250, 0.75) 65.59%
    ),
    radial-gradient(
      42.82% 61.79% at 50% 25.8%,
      rgba(247, 242, 255, 0.25) 0%,
      rgba(247, 242, 255, 0) 100%
    );
  background-size: cover;
  background-position: right bottom;
  height: 560px;
  .background-image {
    border-radius: 24px;
    background: url('@/assets/imgs/case/background/syncswap.png');
    height: 400px;
    background-size: cover;
    background-position: center bottom;
  }
  .right-icon {
    border: 1px solid #f2f4f740;
    background: linear-gradient(
      180deg,
      rgba(164, 188, 253, 0) 0%,
      rgba(164, 188, 253, 0.5) 100%
    );
  }
}
.card-2 {
  background: linear-gradient(
      159.24deg,
      rgba(9, 10, 18, 0.75) 2.47%,
      rgba(187, 21, 125, 0.75) 65.59%
    ),
    radial-gradient(
      42.82% 61.79% at 50% 25.8%,
      rgba(114, 172, 182, 0.25) 0%,
      rgba(114, 172, 182, 0) 100%
    );
  background-size: cover;
  background-position: right bottom;
  height: 560px;
  .background-image {
    border-radius: 24px;
    background: url('@/assets/imgs/case/background/taiko.png');
    height: 400px;
    background-size: cover;
    background-position: center bottom;
  }
  .right-icon {
    border: 1px solid #e0eaff80;
    background: linear-gradient(
      180deg,
      rgba(164, 188, 253, 0) 0%,
      rgba(164, 188, 253, 0.5) 100%
    );
  }
}
.card-3 {
  background: linear-gradient(
      158.1deg,
      rgba(120, 194, 255, 0.75) 3.95%,
      rgba(87, 95, 213, 0.75) 33.9%,
      rgba(188, 73, 129, 0.75) 60.94%,
      rgba(253, 76, 93, 0.75) 81.42%
    ),
    radial-gradient(
      42.82% 61.79% at 50% 25.8%,
      rgba(199, 215, 254, 0.15) 0%,
      rgba(199, 215, 254, 0) 100%
    );
  background-size: cover;
  background-position: right bottom;
  height: 560px;
  .background-image {
    border-radius: 24px;
    background: url('@/assets/imgs/case/background/hey.png');
    height: 400px;
    background-size: cover;
    background-position: center bottom;
  }
  .right-icon {
    border: 1px solid #e0eaff80;
    background: linear-gradient(
      180deg,
      rgba(164, 188, 253, 0) 0%,
      rgba(164, 188, 253, 0.5) 100%
    );
  }
}
.card-4 {
  background: linear-gradient(
      158.22deg,
      rgba(4, 140, 209, 0.75) 2.57%,
      rgba(57, 196, 255, 0.75) 52.67%
    ),
    radial-gradient(
      42.82% 61.79% at 50% 25.8%,
      rgba(195, 228, 205, 0.15) 0%,
      rgba(195, 228, 205, 0) 100%
    );
  background-size: cover;
  background-position: right bottom;
  height: 560px;
  .background-image {
    border-radius: 24px;
    background: url('@/assets/imgs/case/background/Tape.png');
    height: 400px;
    background-size: cover;
    background-position: center bottom;
  }
  .right-icon {
    border: 1px solid #e0eaff80;
    background: linear-gradient(
      180deg,
      rgba(164, 188, 253, 0) 0%,
      rgba(164, 188, 253, 0.5) 100%
    );
  }
}
.card-5 {
  background: linear-gradient(159.57deg, #130004 -74.18%, #1c1b20 63.09%),
    radial-gradient(
      42.82% 61.79% at 50% 25.8%,
      rgba(255, 26, 45, 0.15) 0%,
      rgba(255, 26, 45, 0) 100%
    );
  background-size: cover;
  background-position: right bottom;
  height: 560px;
  .background-image {
    border-radius: 24px;
    background: url('@/assets/imgs/case/background/Optopia.png');
    height: 400px;
    background-size: cover;
    background-position: center bottom;
  }
  .right-icon {
    border: 1px solid #e0eaff80;
    background: linear-gradient(
      180deg,
      rgba(164, 188, 253, 0) 0%,
      rgba(164, 188, 253, 0.5) 100%
    );
  }
}
.v-card:hover {
  box-shadow: inset 0 0 200px rgba(0, 0, 0, 0.8);
  border-color: rgba(0, 0, 0, 0.2);
  .right-icon {
    border: 1px solid #fff;
  }
}
.card-shadow {
  position: relative;
}

.card-shadow::before,
.card-shadow::after {
  content: '';
  position: absolute;
  top: 0;
  width: 100px;
  height: 100%;
  z-index: 1;
}

.card-shadow::before {
  left: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0) 100%
  );
}

.card-shadow::after {
  right: 0;
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0) 100%
  );
}
.title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.slide-icon {
  height: 52px !important;
  width: 52px;
  border-radius: 28px;
  background: linear-gradient(180deg, #121536 0%, #06090f 100%);
  border: 1px solid #ffffff40 !important;
}
.theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
  .v-icon {
    color: rgb(56, 57, 70) !important;
  }
}
.overflow-x-auto {
  overflow-x: auto;
  white-space: nowrap;
}
.scroll-btn {
  margin-left: 56px;
  margin-bottom: 40px;
}
@media (max-width: 960px) {
  .main-container {
    padding: 64px 20px;
  }
  .card-item {
    width: 320px;
  }
  .card-shadow::before,
  .card-shadow::after {
    display: none;
  }
  .scroll-btn {
    width: 100%;
    text-align: right !important;
    margin-right: 16px;
  }
  .title {
    padding-left: 12px;
  }
  .header-title {
    font-size: 32px;
  }
}
@media (min-width: 1441px) {
  .main-container {
    margin: 0 auto;
    width: 1440px;
  }
}
</style>
