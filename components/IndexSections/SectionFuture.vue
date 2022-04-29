<template>
  <div class="home-block section-future">
    <v-container>
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="block-titel mb-4">Where we're going</div>
          <div class="block-text text-center">
            4EVERLAND is a good place to pursue developers' ideal Web 3.0
            paradigm, freeing them from the constraints of centeredness and
            creating more robust and secure services. We hope that more
            developers and scholars will join us on this journey to help build a
            infrastructure for millions of Web 3.0 developers and applications,
            as well as to help more users in making a smooth leap from Web 2.0
            to Web 3.0. Witness the radical shift in server architecture and the
            massive technical leaps in Web3.0 together.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import '@/assets/styles/home.scss'

export default {
  data() {
    return {}
  },
}
</script>
<style scoped>
.text-nowrap {
  white-space: nowrap;
}
.section-future {
  padding: 100px 0;
  background-image: url('@/assets/imgs/index/future.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.home-block .block-titel {
  margin-top: 0;
}
.home-block .block-text {
  max-width: 1000px;
  font-size: 16px;
}
</style>
