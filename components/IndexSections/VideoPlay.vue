<!-- eslint-disable prettier/prettier -->
<template>
  <div class="video-container">
    <video ref="videoPlayer" :class="{ 'pause': isPaused }" muted loop>
      <source :src="videoSrc" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: 'ScrollableVideo',
  props: {
    videoSrc: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      lastScrollPosition: 0,
      isPaused: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      const delta = currentScrollPosition - this.lastScrollPosition
      if (delta > 0) {
        this.playVideo()
      } else {
        this.rewindVideo()
      }

      this.lastScrollPosition = currentScrollPosition

      if (delta === 0) {
        this.pauseVideo()
      }
    },
    playVideo() {
      this.$refs.videoPlayer.play()
      this.isPaused = false
    },
    rewindVideo() {
      this.$refs.videoPlayer.currentTime = Math.max(
        this.$refs.videoPlayer.currentTime - 1,
        0
      )
      this.isPaused = false
    },
    pauseVideo() {
      this.$refs.videoPlayer.pause()
      this.isPaused = true
    },
  },
}
</script>

<style scoped>
.video-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.video-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-container video.paused {
  animation-play-state: paused;
}
</style>
