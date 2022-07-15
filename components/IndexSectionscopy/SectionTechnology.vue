<template>
  <div class="home-block">
    <v-container class="my-16">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="block-titel">Technologies</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="item in list" :key="item.title" cols="12" md="4" lg="4">
          <div class="text-center">
            <div
              class="border-box pa-10"
              :style="{ backgroundImage: `url('${item.img}')` }"
            >
              <div class="main-title mb-8">{{ item.title }}</div>
              <div class="main-text">
                {{ item.desc }}
              </div>
            </div>
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
          img: require('@/assets/imgs/index/technologies/proof.png'),
          title: 'Computing Architecture',
          desc: '4EVERLAND integrates public chains such as Ethereum, BSC, Solana, Polygon, etc., to achieve interconnection and interoperability between multiple chains, helping developers improve development efficiency and to better enjoy the resources of the ecosystem.',
        },
        {
          img: require('@/assets/imgs/index/technologies/storage.png'),
          title: 'Storage Architecture',
          desc: '4EVERLAND is compatible with open protocols such as IPFS, it uses Swarm technology to form a huge storage network of nodes and relies on node collaboration to achieve persistent storage of specific data.',
        },
        {
          img: require('@/assets/imgs/index/technologies/gateway.png'),
          title: 'Gateway Architecture',
          desc: "4EVER-GATEWAY helps users to access the nearest storage provider. Developers can quickly identify safe and reliable global acceleration based on 4EVERLAND's simple configuration.",
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
.border-box {
  min-height: 420px;
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  overflow: hidden;
}
.main-title {
  font-size: 24px;
  color: #132642;
  font-weight: bold;
}

.main-text {
  font-size: 18px !important;
  color: #6c7789;
}
</style>
