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
        v-for="(service, index) in services.slice(0, 4)"
        :key="index"
        class="text-center list-first"
      >
        <v-card>
          <v-row align="center" class="pl-8">
            <div>
              <v-img :src="service.icon" width="100" class="mb-4"></v-img>
            </div>
            <p class="ml-1 white--text">{{ service.title }}</p>
          </v-row>
        </v-card>
      </div>
      <v-row>
        <v-col
          v-for="(service, index) in services.slice(4, 9)"
          :key="index"
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
      <div
        v-for="(service, index) in services.slice(9)"
        :key="index"
        class="text-center list-first"
      >
        <v-card max-width="344">
          <v-row align="center" class="pl-8">
            <div>
              <v-img :src="service.icon" width="100" class="mb-4"></v-img>
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
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Polygon',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
      },
      {
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Polygon',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
      },
      {
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Polygon',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
      },
      {
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Polygon',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
      },
      {
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Polygon',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
      },
      {
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Polygon',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
      },
      {
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Polygon',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
      },
      {
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Polygon',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
      },
      {
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Polygon',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
      },
      {
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Polygon',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
      },
      {
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Polygon',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
      },
      {
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Polygon',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
      },
      {
        icon: require('@/assets/imgs/service/polygon.png'),
        title: 'Polygon',
        hoverIcon: require('@/assets/imgs/service/hover/polygon.png'),
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
