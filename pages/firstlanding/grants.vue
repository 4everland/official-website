<template>
  <v-theme-provider light>
    <div class="banner">
      <img :src="banner" alt="" />
    </div>
    <v-container class="white">
      <v-row>
        <v-col class="text-center" cols="12"> </v-col>
      </v-row>
    </v-container>
  </v-theme-provider>
</template>
<script>
import { mdiCheckCircle } from '@mdi/js'
export default {
  data() {
    return {
      banner: require('@/assets/imgs/grants/banner.png'),
      mdiCheckCircle,
      text: [
        'Connect your domain name to the project;',
        'Add the official 4EVERLAND logo and links on their website.',
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
