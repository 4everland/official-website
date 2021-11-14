<template>
  <div style="background: #222">
    <v-container class="py-12">
      <v-row :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
        <v-col
          class="d-flex flex-column justify-center"
          cols="12"
          md="5"
          lg="5"
        >
          <div class="text-h4" style="max-width: 500px">
            Host websites or DApps based on the Web3.0
          </div>
          <div
            class="text-body-2 mt-16 grey--text text--lighten-1"
            style="max-width: 500px"
          >
            4EVERLAND has everything you need to host fast , efficient, and
            censorship-proof websites or DApps on the web3.0.
          </div>
          <p class="mt-8">
            <v-btn
              :href="hosting_web"
              target="_blank"
              tile
              class="start-btn"
              height="60"
              >Get Started for Free</v-btn
            >
          </p>
        </v-col>
        <v-col
          class="d-flex align-center justify-center pa-10"
          cols="12"
          md="7"
          lg="7"
        >
          <img
            alt="top-banner"
            style="width: 100%; max-width: 800px"
            src="~/assets/imgs/hosting/top@2x.png"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mdiCheckboxMarkedCircleOutline } from '@mdi/js'
export default {
  data() {
    return {
      mdiCheckboxMarkedCircleOutline,
    }
  },
}
</script>
<style scoped>
.text-nowrap {
  white-space: nowrap;
}
.start-btn {
  width: 300px;
  height: 60px;
  background: linear-gradient(-90deg, #ffb830, #e31313, #ff30f8);
  font-size: 20px;
  font-weight: bold;
}
</style>
