<template>
  <div class="banner">
    <a :href="hosting_web">
      <v-img
        :src="require('~/assets/imgs/bucket/banner.png')"
        width="100%"
        contain
      ></v-img>
    </a>
    <!-- <v-container class="con">
      <v-row>
        <v-col class="pa-0" cols="12" md="5" lg="5">
          <div class="text-h2 tit-color" style="max-width: 500px">
            Upload. Pin. Manage. Retrieve.
          </div>
          <div class="text-h5 mt-16 tit-color" style="max-width: 500px">
            Embrace the Open Web instead of the cloud. BUCKET makes it easy to
            upload, store, pin, and fetch files from IPFS in a secure,
            convenient, and efficient way, including UI, API, and CLI interface.
          </div>
          <p class="mt-8">
            <v-btn
              :href="hosting_web"
              target="_blank"
              tile
              class="start-btn"
              height="60"
              >Try for Free</v-btn
            >
          </p>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style scoped lang="scss">
.banner {
  width: 100%;
  position: relative;
  .con {
    position: absolute;
    top: 0;
  }
}
.tit-color {
  color: #484d72;
}
</style>
