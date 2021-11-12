<template>
  <div class="section-video">
    <v-container>
      <v-row class="video-box">
        <v-col
          class="d-flex flex-column justify-center"
          cols="12"
          md="5"
          lg="5"
        >
          <div class="text-h3 mb-16">What is 4EVERLAND?</div>
          <div class="text-h6">
            4EVERLAND is a Web3.0 cloud computing platform with global
            acceleration, privacy protection, distributed storage and other
            technical features.
          </div>
        </v-col>
        <v-col cols="12" md="7" lg="7">
          <video
            controls
            class="video-play"
            src="@/assets/media/4EVERLAND.mp4"
          ></video>
        </v-col>
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
<style scoped>
.text-nowrap {
  white-space: nowrap;
}
.section-video {
  padding: 90px 0;
  background-image: url('@/assets/imgs/index/video-bg.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.video-play {
  max-width: 1200px;
  width: 100%;
}
</style>
