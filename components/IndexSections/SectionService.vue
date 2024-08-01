<template>
  <v-container fluid class="main-container">
    <v-row justify="center" align="center" class="text-left">
      <v-col cols="12">
        <h2 class="white--text text-h3 font-weight-bold">
          THE SERVICES TRUSTED BY VARIOUS BLOCKCHAIN ECOSYSTEMS
        </h2>
        <p class="white--text text-subtitle-1 mt-4">
          Offering decentralized storage, cloud computing, RPC, and more.
        </p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <div
        v-for="service in services.slice(0, 4)"
        :key="service.id"
        class="text-center list-first"
      >
        <v-card
          @mouseover="service.isHover = true"
          @mouseleave="service.isHover = false"
        >
          <v-row align="center" class="pl-8">
            <div>
              <v-img
                :src="service.isHover ? service.hoverIcon : service.icon"
                width="100"
                class="mb-4"
              ></v-img>
            </div>
            <p class="ml-1 white--text">{{ service.title }}</p>
          </v-row>
        </v-card>
      </div>
      <v-row>
        <v-col
          v-for="service in services.slice(4, 9)"
          :key="service.id"
          class="text-center"
        >
          <v-card
            max-width="344"
            @mouseover="service.isHover = true"
            @mouseleave="service.isHover = false"
          >
            <v-row align="center" class="pl-8">
              <div>
                <v-img
                  :src="service.isHover ? service.hoverIcon : service.icon"
                  width="100"
                  class="mb-4"
                ></v-img>
              </div>
              <p class="ml-2 white--text">{{ service.title }}</p>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <div
        v-for="service in services.slice(9)"
        :key="service.id"
        class="text-center list-first"
      >
        <v-card
          max-width="344"
          @mouseover="service.isHover = true"
          @mouseleave="service.isHover = false"
        >
          <v-row align="center" class="pl-8">
            <div>
              <v-img
                :src="service.isHover ? service.hoverIcon : service.icon"
                width="100"
                class="mb-4"
              ></v-img>
            </div>
            <p class="ml-2 white--text">{{ service.title }}</p>
          </v-row>
        </v-card>
      </div>
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
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Polygon',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
        isHover: false,
      },
      {
        id: 2,
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'BSC',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
        isHover: false,
      },
      {
        id: 3,
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Ethereum',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
        isHover: false,
      },
      {
        id: 4,
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'opBNB',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
        isHover: false,
      },
      {
        i: 5,
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Arbitrum',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
        isHover: false,
      },
      {
        id: 6,
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'zkSync Era',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
        isHover: false,
      },
      {
        id: 7,
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Optimism',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
        isHover: false,
      },
      {
        id: 8,
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'everPay',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
        isHover: false,
      },
      {
        id: 9,
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Scroll',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
        isHover: false,
      },
      {
        id: 10,
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Blast',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
        isHover: false,
      },
      {
        id: 11,
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Taiko',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
        isHover: false,
      },
      {
        id: 12,
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Zksync Lite',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
        isHover: false,
      },
      {
        id: 13,
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'More...',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
        isHover: false,
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
  margin-top: 40px;
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
  .v-card {
    height: 100px;
    width: 167px;
  }
}
</style>
