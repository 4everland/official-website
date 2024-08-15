<template>
  <v-sheet dark class="logo-banner pa-2" style="overflow: hidden">
    <div id="logoContainer1" class="logo-container d-flex">
      <div ref="logoContainer" class="logo-row d-flex list1">
        <v-img
          v-for="item in logoList1"
          :key="item.alt"
          class="mx-4"
          :width="item.width"
          :height="item.height"
          :src="item.src"
          contain
        />
      </div>
      <div ref="logoContainer" class="logo-row d-flex list2">
        <v-img
          v-for="item in logoList1"
          :key="`logo-copy-${item.alt}`"
          class="mx-4"
          :width="item.width"
          :height="item.height"
          :src="item.src"
          contain
        />
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    animationId: null,
    animationId1: null,
    logoList1: [
      {
        src: require('@/assets/imgs/index/newui/logo/arweave.png'),
        alt: 'arweave',
        width: 155,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/fenbushi.png'),
        alt: 'fenbushi',
        width: 116,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/forward.png'),
        alt: 'forward',
        width: 87,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/bixin.png'),
        alt: 'bixin',
        width: 123,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/waterdrip.png'),
        alt: 'waterdrip',
        width: 72,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/BingVentures.png'),
        alt: 'BingVentures',
        width: 87,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/fbg.png'),
        alt: 'fbg',
        width: 79,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/Web3com.png'),
        alt: 'Web3com',
        width: 113,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/MintVentures.png'),
        alt: 'MintVentures',
        width: 69,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/ArweaveSCP.png'),
        alt: 'ArweaveSCP',
        width: 104,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/hillstone.png'),
        alt: 'hillstone',
        width: 108,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/gts-logo-white.png'),
        alt: 'GTS',
        width: 51,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/snapshot.png'),
        alt: 'snapshot',
        width: 103,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/SyncSwap.png'),
        alt: 'SyncSwap',
        width: 86,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/taiko.png'),
        alt: 'taiko',
        width: 81,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/Astar_White.png'),
        alt: 'Astar',
        width: 69,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/Linear.png'),
        alt: 'Linear',
        width: 87,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/venus.png'),
        alt: 'venus',
        width: 106,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/Hey.png'),
        alt: 'fbg',
        width: 61,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/tape.png'),
        alt: 'Web3com',
        width: 91,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/RSS3.png'),
        alt: 'RSS3',
        width: 86,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/MDEX.png'),
        alt: 'MDEX',
        width: 124,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/bella.png'),
        alt: 'bella',
        width: 71,
        height: 24,
      },
      {
        src: require('@/assets/imgs/index/newui/logo/ever.png'),
        alt: 'ever',
        width: 67,
        height: 24,
      },
    ],
  }),
  mounted() {
    // this.startAnimation2()
    // this.startAnimation1()
  },
  beforeDestroy() {
    this.stopAnimation()
  },
  methods: {
    startAnimation2() {
      const container = this.$refs.logoContainer
      let position = 0
      const speed = 1 // 调整滚动速度

      const animate = () => {
        position -= speed
        if (position <= -container.offsetWidth / 2) {
          position = 0
        }
        container.style.transform = `translateX(${position}px)`
        this.animationId = requestAnimationFrame(animate)
      }

      this.animationId = requestAnimationFrame(animate)
    },
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
  background: linear-gradient(180deg, #121536 0%, #000 100%);
}
.logo-container {
  height: 60px;
  white-space: nowrap;
}

.logo-row {
  height: 60px;
  display: flex;
  align-items: center;
}

#logoContainer1 .list1 {
  animation: styles_animate-1 140s linear infinite;
  animation-delay: -140s;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  will-change: transform;
}
#logoContainer1 .list2 {
  animation: styles_animate-2 140s linear infinite;
  animation-delay: -70s;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  will-change: transform;
}

@keyframes styles_animate-1 {
  0% {
    transform: translateX(100%);
  }

  to {
    transform: translateX(-100%);
  }
}

@keyframes styles_animate-2 {
  0% {
    transform: translateX(0);
  }

  to {
    transform: translateX(-200%);
  }
}

#logoContainer2 .list1 {
  animation: styles_animate-11 140s linear infinite;
  animation-delay: -140s;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  will-change: transform;
}
#logoContainer2 .list2 {
  animation: styles_animate-22 140s linear infinite;
  animation-delay: -70s;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  will-change: transform;
}

@keyframes styles_animate-11 {
  0% {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
}

@keyframes styles_animate-22 {
  0% {
    transform: translateX(-200%);
  }

  to {
    transform: translateX(0);
  }
}
</style>
