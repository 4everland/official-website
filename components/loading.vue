<template>
  <div class="loading-page" v-if="loading">
    <div class="logo-box">
      <img src="@/assets/imgs/loading/logo.png" alt="" class="logo" />
      <span class="logo-mask"></span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: true,
  }),
  mounted() {
    setTimeout(() => this.finish(), 2000)
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  background-image: url('@/assets/imgs/loading/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 99999999;
  display: flex;
  align-items: center;
}
.logo-box {
  position: relative;
  width: 240px;
  margin: 0 auto;
}
.logo {
  width: 100%;
  display: block;
  opacity: 0.3;
}
.logo-mask {
  background-size: cover;
  background-image: url('../assets/imgs/loading/logo.png');
  width: 200px;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: imgloading 6s linear infinite;
  animation: imgloading 6s linear infinite;
  will-change: width, opacity;
  transform-origin: 0 100%;
}

@keyframes imgloading {
  0% {
    width: 0%;
    opacity: 1;
  }
  95% {
    width: 100%;
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 0;
  }
}
</style>
