<template>
  <v-container fluid class="main-container">
    <v-row justify="center" align="center" class="text-left">
      <v-col cols="12">
        <h3 class="white--text text-h3 font-weight-bold">
          Embracing Multiple Blockchain Ecosystems
        </h3>
        <p class="white--text text-subtitle-1 mt-4">
          Provide full-service solutions for an elevated experience.
        </p>
      </v-col>
    </v-row>
    <v-row v-if="$vuetify.breakpoint.lgAndUp" justify="center">
      <v-col cols="12" md="10">
        <v-row justify="center">
          <v-col
            v-for="service in services.slice(0, 7)"
            :key="service.id"
            cols="12"
            sm="3"
            class="text-center"
          >
            <v-card max-width="344">
              <v-row align="center" class="pl-8">
                <div>
                  <v-img :src="service.icon" width="100" class="mb-4"></v-img>
                </div>
                <p class="ml-2 white--text">{{ service.title }}</p>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col
            v-for="service in services.slice(7)"
            :key="service.id"
            cols="12"
            sm="3"
            class="text-center"
          >
            <v-card max-width="344">
              <v-row align="center" class="pl-8">
                <div>
                  <v-img :src="service.icon" width="100" class="mb-4"></v-img>
                </div>
                <p class="ml-2 white--text">{{ service.title }}</p>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-else justify="space-between" class="row-card">
      <v-col
        v-for="service in services"
        :key="service.id"
        cols="6"
        class="text-center ecosystems-card"
      >
        <v-card>
          <v-row class="mr-1" justify="center" align="center">
            <div>
              <v-img :src="service.icon" width="56" class="mt-3"></v-img>
            </div>
            <p class="mt-6 white--text">{{ service.title }}</p>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Service',
  data: () => ({
    services: [
      {
        id: 1,
        icon: require('@/assets/imgs/network/arweave.png'),
        title: 'arweave',
      },
      {
        id: 2,
        icon: require('@/assets/imgs/network/BNBChain.png'),
        title: 'BNBChain',
      },
      {
        id: 3,
        icon: require('@/assets/imgs/network/IPFS.png'),
        title: 'IPFS',
      },
      {
        id: 4,
        icon: require('@/assets/imgs/network/Dfinity.png'),
        title: 'Dfinity',
      },
      {
        i: 5,
        icon: require('@/assets/imgs/network/Ethereum.png'),
        title: 'Ethereum',
      },
      {
        id: 6,
        icon: require('@/assets/imgs/network/Polygon.png'),
        title: 'Polygon',
      },
      {
        id: 7,
        icon: require('@/assets/imgs/network/Arbitrum.png'),
        title: 'Arbitrum',
      },
      {
        id: 8,
        icon: require('@/assets/imgs/network/zkSync.png'),
        title: 'zkSync Era',
      },
      {
        id: 9,
        icon: require('@/assets/imgs/network/Optimism.png'),
        title: 'Optimism',
      },
      {
        id: 10,
        icon: require('@/assets/imgs/network/everPay.png'),
        title: 'everPay',
      },
      {
        id: 11,
        icon: require('@/assets/imgs/network/Scroll.png'),
        title: 'Scroll',
      },
      {
        id: 12,
        icon: require('@/assets/imgs/network/Blast.png'),
        title: 'Blast',
      },
      {
        id: 13,
        icon: require('@/assets/imgs/network/Taiko.png'),
        title: 'Taiko',
      },
      {
        id: 14,
        icon: require('@/assets/imgs/network/more.png'),
        title: 'More...',
      },
    ],
    // hoverStates: Array(this.services.length).fill(false),
  }),
  methods: {},
}
</script>

<style scoped>
.main-container {
  padding: 64px 80px;
  max-width: 100%;
  min-height: 100vh;
}
.service-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-first {
  margin-right: 24px;
}
.v-card {
  height: 100px;
  width: 240px;
  background: linear-gradient(180deg, #121536 0%, #06090f 100%);
  border-radius: 16px !important;
  margin-top: 12px;
  box-shadow: 0 2px 4px 0 rgba(255, 255, 255, 0.15) inset,
    0 -2px 4px 0 rgba(45, 50, 130, 0.5) inset;
}
.v-card:hover {
  background: linear-gradient(180deg, #121536 0%, #1f235b 100%);
  box-shadow: 0 2px 4px 0 rgba(255, 255, 255, 0.1529) inset,
    0 -2px 4px 0 rgba(45, 50, 130, 0.502) inset,
    0 0 8px 0 rgba(97, 114, 243, 0.502);
}
@media (max-width: 960px) {
  .main-container {
    padding: 64px 20px;
  }
  .v-card {
    height: 80px;
    width: 167px;
  }
  .row-card {
    padding-right: 12px !important;
  }
  .ecosystems-card {
    padding-top: 0 !important;
    padding-right: 0 !important;
  }
}
</style>
