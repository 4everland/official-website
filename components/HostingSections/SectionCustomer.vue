<template>
  <div id="UseCases" class="home-block mt-16">
    <v-container>
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="block-titel">Use Cases</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" lg="4" v-for="item in items" :key="item.name">
          <div class="item-box">
            <v-img :src="item.icon" max-width="48"></v-img>
            <div class="item-name">{{ item.name }}</div>
          </div>
          <div class="item-tips">{{ item.tips }}</div>
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
      items: [
        {
          name: 'UNISWAP',
          tips: 'Uniswap is a cryptocurrency exchange which uses a decentralized network protocol.',
          icon: require('@/assets/imgs/hosting/cases/uniswap.png'),
        },
        {
          name: 'DogeCoin',
          tips: 'Dogecoin is an open-source peer-to-peer digital currency, favoured by Shiba Inus worldwide.',
          icon: require('@/assets/imgs/hosting/cases/dogecoin.png'),
        },
        {
          name: 'AAVE',
          tips: 'Aave is a decentralized non-custodial liquidity protocol where users can participate as depositors or borrowers.',
          icon: require('@/assets/imgs/hosting/cases/aava.png'),
        },
      ],
    }
  },
}
</script>
<style scoped lang="less">
#UseCases {
  background: #faf8fd;
  min-height: 428px;
  display: flex;
  align-items: center;
  .item-box {
    display: flex;
    align-items: center;
    .item-name {
      width: 158px;
      font-size: 23px;
      font-family: 'Ubuntu-Bold', sans-serif;
      font-weight: bold;
      color: #000;
      border-bottom: 2px solid #d8d8d8;
      margin-left: 12px;
    }
  }
  .item-tips {
    width: 322px;
    font-size: 14px;
    font-family: 'Ubuntu-Medium', sans-serif;
    font-weight: 500;
    color: #000;
    margin-top: 17px;
  }
}
</style>
