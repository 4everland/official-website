<template>
  <div class="home-block">
    <v-container class="my-16">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="block-titel">
            Works for almost all sites&amp;popular frameworks
          </div>
        </v-col>
        <v-col
          cols="12"
          md="12"
          lg="12"
          class="d-flex justify-center flex-wrap"
        >
          <div v-for="item in list" :key="item.title" class="text-center pa-12">
            <div class="img-box mb-4">
              <v-img :src="item.img" max-width="86" max-height="86"> </v-img>
            </div>
            <div>{{ item.title }}</div>
          </div>
        </v-col>
        <!-- <v-col cols="12" md="12" lg="12">
          <div class="text-center">
            <v-btn
              text
              plain
              class="text-h6 text-center grey--text text--lighten-2"
              >View sites &amp;frameworks we support
              <v-icon> mdi-chevron-right </v-icon></v-btn
            >
          </div>
        </v-col> -->
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
          img: require('@/assets/imgs/index/vue.png'),
          title: 'Vue',
        },
        {
          img: require('@/assets/imgs/index/next.png'),
          title: 'Next.js',
        },
        {
          img: require('@/assets/imgs/index/gatsby.png'),
          title: 'Gatsby',
        },
        {
          img: require('@/assets/imgs/index/nuxt.png'),
          title: 'Nuxt.js',
        },
        {
          img: require('@/assets/imgs/index/angular.png'),
          title: 'Angular',
        },
        {
          img: require('@/assets/imgs/index/react.png'),
          title: 'React APP',
        },
      ],
    }
  },
}
</script>
<style scoped>
.start-btn {
  width: 300px;
  height: 60px;
  background: linear-gradient(-90deg, #ffb830, #e31313, #ff30f8);
  font-size: 20px;
  font-weight: bold;
}
.img-box {
  width: 86px;
  height: 86px;
  line-height: 86px;
  display: flex;
  align-items: center;
}
</style>
