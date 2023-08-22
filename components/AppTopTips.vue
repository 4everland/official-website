<template>
  <div class="top-tips-box" @click="openNewPage">
    <v-container class="d-flex align-center" style="padding: 0">
      <div class="top-tips">
        <div class="top-tips-title">Unleash Arweave:</div>
        <div>
          Don't miss this opportunity to experience the power of decentralized
          storage | Enjoy FREE Uploads for content ≤ 150KB now!
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <path
            d="M3.16699 8H13.8337M13.8337 8L9.83366 4M13.8337 8L9.83366 12"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  mounted() {},

  methods: {
    openNewPage() {
      window.open('https://unleashar.4everland.org/')
    },
  },
}
</script>

<style scoped>
.top-tips-box {
  width: 100%;
  background-color: #000;
  position: fixed;
  left: 0;
  top: 0;
  height: 40px;
  z-index: 999999;
  cursor: pointer;
}
.top-tips {
  width: 100%;
  height: 40px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Ubuntu', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
.top-tips-title {
  font-family: 'Ubuntu-Bold', sans-serif;
  font-weight: 700;
  margin-right: 4px;
}
</style>
