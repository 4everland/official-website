<template>
  <v-sheet dark class="logo-banner pa-2" style="overflow: hidden">
    <div ref="logoContainer" class="logo-container">
      <div v-for="i in 2" :key="i" class="logo-row">
        <v-icon v-for="j in 7" :key="`github-${i}-${j}`" large class="mx-4">
          mdi-github
        </v-icon>
        <v-img
          v-for="j in 7"
          :key="`vercel-${i}-${j}`"
          class="mx-4"
          max-width="24"
          :src="require('@/assets/imgs/index/newui/github_icon.png')"
        />
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    animationId: null,
  }),
  mounted() {
    this.startAnimation()
  },
  beforeDestroy() {
    this.stopAnimation()
  },
  methods: {
    startAnimation() {
      const container = this.$refs.logoContainer
      let position = 0

      const animate = () => {
        position -= 1
        if (position <= -container.offsetWidth / 2) {
          position = 0
        }
        container.style.transform = `translateX(${position}px)`
        this.animationId = requestAnimationFrame(animate)
      }

      this.animationId = requestAnimationFrame(animate)
    },
    stopAnimation() {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId)
      }
    },
  },
}
</script>

<style scoped>
.logo-banner {
  background-color: #0d1117 !important;
}

.logo-container {
  display: flex;
  white-space: nowrap;
}

.logo-row {
  display: flex;
  align-items: center;
}

.v-icon {
  color: white;
}

.v-img {
  filter: invert(1);
}
</style>
