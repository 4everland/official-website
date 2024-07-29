<template>
  <v-container fluid class="pa-0 main-container">
    <v-row justify="center" align="center" class="text-center">
      <v-col cols="12">
        <h1 class="white--text text-h2 font-weight-bold">
          4EVERLAND IS IN A STATE OF GENERAL AVAILABILITY
        </h1>
        <p class="white--text text-subtitle-1 mt-4">
          Offering comprehensive services to support & drive your innovation
          forward.
        </p>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-8">
      <v-col cols="12" sm="4">
        <v-progress-linear
          color="white"
          height="2"
          value="100"
        ></v-progress-linear>
      </v-col>
    </v-row>

    <v-row justify="end" class="mt-8 mr-4">
      <v-btn color="#7B61FF" rounded large dark class="px-8">
        Get Started
        <v-icon right>mdi-arrow-right</v-icon>
      </v-btn>
    </v-row>

    <v-row justify="center" class="mt-16">
      <v-col
        v-for="(service, index) in services"
        :key="index"
        cols="12"
        sm="4"
        class="text-center"
      >
        <v-img :src="service.icon" contain height="100" class="mb-4"></v-img>
        <h2 class="white--text text-h4 font-weight-bold mb-4">
          {{ service.title }}
        </h2>
        <p class="white--text">{{ service.description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: '4EverLandServices',
  data: () => ({
    services: [
      {
        icon: '/path/to/dapp-hosting-icon.png',
        title: 'Dapp Hosting',
        description:
          'Scalable, secure, and efficient decentralized hosting solution',
      },
      {
        icon: '/path/to/storage-icon.png',
        title: 'Storage',
        description:
          'Seamlessly Upload And Pin Files To IPFS And Arweave For Secure, Decentralized Storage',
      },
      {
        icon: '/path/to/gateway-icon.png',
        title: 'Gateway',
        description:
          'Leverage Globally Distributed Nodes For Enhanced Speed, Reliability, And Automatic Resource Allocation',
      },
    ],
  }),
}
</script>

<style scoped>
.main-container {
  background: linear-gradient(to bottom right, #1e0057, #3d0e61);
  min-height: 100vh;
  padding: 64px 0;
}
</style>
