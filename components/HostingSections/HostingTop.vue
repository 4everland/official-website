<template>
  <div id="HostingTop">
    <v-container class="py-12">
      <v-row :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
        <v-col
          class="d-flex flex-column justify-center"
          cols="12"
          md="6"
          lg="6"
        >
          <div class="text-h3" style="max-width: 600px">
            Host websites or DApps based on the Web3.0
          </div>
          <div
            class="text-h6 mt-16 blue-grey--text text--darken-2"
            style="max-width: 600px"
          >
            4EVERLAND has everything you need to host fast, efficient, and
            censorship-proof websites or DApps on the Web3.0.
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
          md="6"
          lg="6"
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
#HostingTop {
  padding: 70px 0;
  background-image: url('@/assets/imgs/hosting/banner_bg.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.text-nowrap {
  white-space: nowrap;
}
.start-btn {
  width: 300px;
  height: 88px;
  background: linear-gradient(90deg, #fdb6fe, #acc0fd, #31adfe);
  border-radius: 44px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}
</style>
