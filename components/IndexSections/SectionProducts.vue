<template>
  <div class="home-block">
    <v-container class="my-16">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="title-underline">Products</div>
          <div class="block-titel">Build a Free World</div>
          <div class="block-text">
            Explore endless possibilities using products designed for complex
            and dynamic Web3.0.
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="item in list"
          :key="item.title"
          class="border-box"
          cols="12"
          md="6"
          lg="6"
          xl="4"
        >
          <div class="main pa-12">
            <v-row>
              <v-col cols="12" md="6" lg="6" xl="6">
                <div class="img-box">
                  <v-img
                    contain
                    :src="item.img"
                    max-height="100px"
                    class="ma-auto"
                  >
                  </v-img></div
              ></v-col>
              <v-col cols="12" md="6" lg="6" class="d-flex align-center">
                <div class="main-title text-h5">{{ item.title }}</div></v-col
              >
            </v-row>
          </div>
        </v-col>
      </v-row>
      <v-row class="my-16">
        <v-col cols="12" md="12" lg="12" class="text-center">
          <v-btn
            :href="hosting_web"
            target="_blank"
            tile
            class="start-btn"
            height="60"
            >START DEPLOYING</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import '@/assets/styles/home.scss'
export default {
  data() {
    return {
      list: [
        {
          img: require('@/assets/imgs/index/products/Dweb.png'),
          title: 'Dweb Hosting',
        },
        {
          img: require('@/assets/imgs/index/products/Gateway.png'),
          title: 'Decentralized Gateway',
        },
        {
          img: require('@/assets/imgs/index/products/Globally.png'),
          title: 'Globally Acceleration',
        },
        {
          img: require('@/assets/imgs/index/products/Domains.png'),
          title: 'Decentralized Domains',
        },
        {
          img: require('@/assets/imgs/index/products/Digital.png'),
          title: ' Digital Marketing System',
        },
        {
          img: require('@/assets/imgs/index/products/Services.png'),
          title: 'Data Services',
        },
      ],
    }
  },
}
</script>
<style scoped>
.start-btn {
  width: 300px;
  height: 88px;
  background: linear-gradient(90deg, #fdb6fe, #acc0fd, #31adfe);
  border-radius: 44px;
  font-size: 24px;
  color: #fff;
}
.main {
  min-height: 180px;
  background: linear-gradient(120deg, #e1f2ff, #fff6f6);
  border-radius: 20px;
  display: flex;
  align-items: center;
}
.main .img-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.main .main-title {
  color: #132642;
  font-weight: bold;
}
</style>
