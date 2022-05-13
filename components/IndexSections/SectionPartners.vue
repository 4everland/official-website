<template>
  <div class="home-block">
    <v-container class="my-16">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="block-titel">Partners</div>
        </v-col>
        <v-col
          v-for="item in list"
          :key="item.title"
          cols="12"
          md="3"
          lg="3"
          xl="2"
          class="my-4 d-flex"
        >
          <div class="img-box">
            <v-img contain :src="item.img" max-height="50"> </v-img>
          </div>
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
          img: require('@/assets/imgs/index/partners/ipfs.png'),
        },
        // {
        //   img: require('@/assets/imgs/index/partners/ethereum.png'),
        // },
        {
          img: require('@/assets/imgs/index/partners/filecoin.png'),
        },
        {
          img: require('@/assets/imgs/index/partners/arweave.png'),
        },
        {
          img: require('@/assets/imgs/index/partners/polygon.png'),
        },
        {
          img: require('@/assets/imgs/index/partners/bonfida.png'),
        },
        {
          img: require('@/assets/imgs/index/partners/ENS.png'),
        },
        {
          img: require('@/assets/imgs/index/partners/js13kgames.png'),
        },
        {
          img: require('@/assets/imgs/index/partners/harmony.png'),
        },
        {
          img: require('@/assets/imgs/index/partners/near.png'),
        },

        {
          img: require('@/assets/imgs/index/partners/heco.png'),
        },
        {
          img: require('@/assets/imgs/index/partners/metis.png'),
        },
        {
          img: require('@/assets/imgs/index/partners/fenbushi.png'),
        },
        {
          img: require('@/assets/imgs/index/partners/FBG.png'),
        },
        {
          img: require('@/assets/imgs/index/partners/nuls.png'),
        },
        {
          img: require('@/assets/imgs/index/partners/bixin.png'),
        },
        {
          img: require('@/assets/imgs/index/partners/mintVentures.png'),
        },
        {
          img: require('@/assets/imgs/index/partners/randomNumber.png'),
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
  display: flex;
  align-items: center;
  max-width: 100%;
}
</style>
