<template>
  <v-container fluid class="main-container">
    <v-row justify="center" align="center" class="text-left">
      <v-col cols="12">
        <h2 class="white--text text-h3 font-weight-bold">
          TOP WEB3 PROJECTS ARE BUILDING WITH US
        </h2>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-16">
      <v-col cols="12">
        <div class="text-center mb-12">
          <v-btn @click="previousSlide" color="primary" class="mr-2">
            Previous
          </v-btn>
          <v-btn @click="nextSlide" color="primary">Next</v-btn>
        </div>
        <v-carousel :show-arrows="false" v-model="currentIndex" hide-delimiters>
          <v-carousel-item v-for="(item, index) in items" :key="index">
            <v-row>
              <v-col
                v-for="(card, cardIndex) in [
                  items[currentIndex],
                  items[(currentIndex + 1) % items.length],
                  items[(currentIndex + 2) % items.length],
                ]"
                :key="cardIndex"
              >
                <v-card class="mb-16" :class="`card-${cardIndex}`">
                  <v-row justify="space-between" align="center">
                    <div class="title">
                      <v-img :src="card.image" width="60"></v-img>
                      <h3 class="ml-2 white--text">{{ card.title }}</h3>
                    </div>
                    <div>
                      <v-btn color="#6172F3" class="right-icon">
                        <v-icon>mdi-arrow-right</v-icon>
                      </v-btn>
                    </div>
                  </v-row>
                  <v-divider class="mt-12 mb-12" />
                  <p class="white--text">
                    {{ card.description }}
                  </p>
                </v-card>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SectionBuild',
  data: () => ({
    currentIndex: 0,
    items: [
      {
        id: 1,
        image: require('@/assets/imgs/footer/telegram.png'),
        title: 'Snapshot',
        description:
          'Snapshot is a decentralized voting platform that empowers blockchain communities to make transparent and efficient collective decisions. By integrating with 4EVERLAND’s S3-compatible decentralized storage solutions, Snapshot ensures secure and reliable storage of voting data.',
      },
      {
        id: 2,
        image: 'https://via.placeholder.com/150',
        title: 'Liquity',
        description:
          'Liquify is an innovative DeFi platform that allows users to leverage their digital assets without losing ownership. Utilizing 4EVERLAND’s decentralized front-end deployment, Liquify can offer a resilient and streamlined user interface.',
      },
      {
        id: 3,
        image: 'https://via.placeholder.com/150',
        title: 'Optopia',
        description:
          'Optopia is an innovative Layer 2 blockchain platform compatible with the Ethereum Virtual Machine (EVM). By leveraging 4EVERLAND’s Rollup-as-a-Service (RaaS) solution, Optopia effectively deploys high-performance, EVM-compatible Layer 2 solutions to scale decentralized AI applications.',
      },
      {
        id: 4,
        image: 'https://via.placeholder.com/150',
        title: 'Card 4',
        description: 'This is the fourth card.',
      },
      {
        id: 5,
        image: 'https://via.placeholder.com/150',
        title: 'Card 5',
        description: 'This is the fifth card.',
      },
      {
        id: 6,
        image: 'https://via.placeholder.com/150',
        title: 'Card 6',
        description: 'This is the sixth card.',
      },
    ],
    startX: 0,
    currentX: 0,
    isDragging: false,
  }),

  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length
      if (this.currentIndex === 0) {
        this.currentIndex = 3
      }
    },
    previousSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.items.length) % this.items.length
      if (this.currentIndex === 3) {
        this.currentIndex = 0
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.main-container {
  padding: 64px 80px;
  max-width: 100%;
}
.build-color {
  background-color: lightgreen !important;
  max-width: 100%;
  width: 200%;
}
.v-card {
  padding: 64px 20px 0 20px;
  border-radius: 24px !important;
  height: 500px;
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
.card-0 {
  border: 1px solid #ffffff40;
  background: linear-gradient(171.12deg, #1c1b20 -27.03%, #757186 150.2%);
}
.card-1 {
  border: 1px solid #ffffff40;
  background: linear-gradient(
      159.24deg,
      rgba(133, 113, 227, 0.75) 2.47%,
      rgba(74, 188, 236, 0.75) 65.59%
    ),
    radial-gradient(
      42.82% 61.79% at 50% 25.8%,
      rgba(15, 225, 248, 0.15) 0%,
      rgba(15, 225, 248, 0) 100%
    );
  .right-icon {
    border: 1px solid #e0eaff80;
    background: linear-gradient(168.46deg, #4abcec -20.13%, #8571e3 83.92%);
  }
}
.card-2 {
  border: 1px solid #ffffff40;
  background: linear-gradient(171.12deg, #1c1b20 -27.03%, #757186 150.2%);
}
.card-3 {
  border: 1px solid #ffffff40;
  background: linear-gradient(168.46deg, #4abcec -20.13%, #8571e3 83.92%);
}

.title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
