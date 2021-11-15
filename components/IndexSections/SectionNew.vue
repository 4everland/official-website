<template>
  <div class="home-block">
    <v-container class="my-16">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="block-titel">Welcome to the new internet - Web 3.0</div>
          <div class="block-text">
            4EVERLAND Can Help You Rebuild the Web’s Foundation Layer and
            Transition to a New and Unbiased Web 3.0.
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col
        v-for="item in list"
        :key="item.title"
        class="border-box"
        cols="12"
        md="4"
        lg="4"
      >
        <div class="win py-16">
          <!-- <div class="border_corner border_corner_left_top"></div>
          <div class="border_corner border_corner_right_top"></div>
          <div class="border_corner border_corner_left_bottom"></div>
          <div class="border_corner border_corner_right_bottom"></div> -->
          <div class="main text-center">
            <v-img :src="item.img" width="150px" class="ma-auto"> </v-img>
            <div class="main-title mb-8">{{ item.title }}</div>
            <div class="main-text">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import '@/assets/styles/home.scss'
export default {
  data() {
    return {
      list: [
        {
          img: require('@/assets/imgs/index/new/new1.png'),
          title: 'Global Acceleration',
          desc: 'The consensus-driven Swarm network, improves network throughput massively and high availability, provides more efficient and fast Web3.0 access for global developers.',
        },
        {
          img: require('@/assets/imgs/index/new/new2.png'),
          title: 'Privacy Protection',
          desc: '4EVERLAND does not require KYC, that ensures user anonymity and data security.',
        },
        {
          img: require('@/assets/imgs/index/new/new3.png'),
          title: 'Distributed Storage',
          desc: '4EVERLAND builds a Swarm distributed storage network to achieve data availability and reliability.',
        },
      ],
    }
  },
}
</script>
<style scoped>
.text-nowrap {
  white-space: nowrap;
}
</style>
