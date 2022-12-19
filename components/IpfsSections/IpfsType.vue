<template>
  <div id="IpfsAbout">
    <v-container class="py-12">
      <div
        class="text-h4 font-weight-bold text-center mb-6"
        style="color: #132642"
      >
        Types of 4EVERLAND Gateways
      </div>
      <v-row class="mt-16 d-flex justify-space-around">
        <v-col
          v-for="(item, index) in list"
          :key="index"
          class="pa-4"
          cols="12"
          md="4"
          lg="4"
        >
          <div class="about-item pa-6">
            <img :src="item.img" alt="" />
          </div>
          <div class="item-title text-h6 font-weight-bold mb-4 mt-12">
            {{ item.title }}
          </div>
          <div class="item-desc text-body-2">{{ item.desc }}</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          title: 'Public Gateway',
          desc: 'You can use the gateway to access the IPFS content through your web browser without the installation of any other software or plugins. Over 200 edge caching locations around the world can make you enjoy global acceleration. Each user can take advantage of our public gateway for free.',
          img: require('~/assets/imgs/ipfs/type_01.png'),
        },
        {
          title: 'Dedicated Gateway',
          desc: 'Dedicated Gateways can be set as open or restricted. It means you can control whether your pinned content on IPFS is accessible through the gateway. Dedicated Gateways offer the fastest global acceleration, and support custom domain names, etc.',
          img: require('~/assets/imgs/ipfs/type_02.png'),
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.about-item {
  width: 100%;
  max-width: 500px;
  min-height: 360px;
  margin: 0 auto;
  background: linear-gradient(150deg, #e1f2ff, #f3ffe9);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    max-width: 300px;
  }
}
.item-title {
  color: #132642;
  text-align: center;
}
.item-desc {
  color: #6c7789;
}
</style>
