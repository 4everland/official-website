<template>
  <div class="home-block section-future">
    <v-container>
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="block-titel mb-4">Where we're going</div>
          <div class="block-text text-left">
            4EVERLAND is a great place to pursue developers' ideal paradigm for
            Web 3.0, releasing them from the shackles of centeredness completely
            and creating more robust and secure services. We hope that more
            developers and scholars will join us along the way to build a
            globally accelerated, forever-linked network service for more users
            using 4EVERLAND, which is a distributed, highly efficient,
            self-motivated, and low-cost cloud computing network. Witness the
            radical change in server architecture together and the giant
            technical leaps in Web3.0.
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
  padding: 70px 0;
  background-image: url('@/assets/imgs/index/future.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.home-block .block-text {
  font-size: 15px;
}
</style>
