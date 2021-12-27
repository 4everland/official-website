<template>
  <div class="banner">
    <v-container>
      <v-row>
        <v-col
          class="d-flex align-center justify-center pa-0"
          cols="12"
          md="5"
          lg="5"
        >
          <div class="text-h4" style="max-width: 500px">
            Upload. Pin. Manage. Retrieve.
          </div>
          <div
            class="text-body-2 mt-16 grey--text text--lighten-1"
            style="max-width: 500px"
          >
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
        <v-col cols="12" md="7" lg=""> </v-col>
      </v-row>
    </v-container>
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
  background-image: url('~/assets/imgs/bucket/banner.png');
  .banner-img {
    // position: absolute;
  }
}
</style>
