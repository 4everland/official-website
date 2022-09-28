<template>
  <div id="IPFS">
    <v-container>
      <v-row>
        <v-col
          v-for="(item, index) in items"
          :key="item.tag"
          cols="12"
          class="item"
        >
          <v-row>
            <v-col cols="12" md="6" lg="6" :order-md="index % 2">
              <v-img
                contain
                max-width="580px"
                max-height="360px"
                :src="item.img"
              >
              </v-img>
            </v-col>
            <v-col cols="12" md="6" lg="6" class="px-10 py-5">
              <div class="item-tag">{{ item.tag }}</div>
              <div class="item-title">{{ item.title }}</div>
              <div class="item-content">{{ item.content }}</div>
              <div class="item-btn-box">
                <v-btn
                  :href="hosting_web"
                  target="_blank"
                  class="item-btn"
                  tile
                  >{{ item.btn }}</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          tag: 'IPFS',
          title: 'IPFS powers the distributed Web',
          content:
            "With 4EVERLAND, your Websites or Applications will be automatically pinned to IPFS, a peer-to-peer hypermedia protocol designed to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open.",
          btn: 'Get started for free',
          img: require('@/assets/imgs/hosting/IPFS.png'),
        },
        {
          tag: 'Arweave',
          title: 'Arweave makes information permanence sustainable',
          content:
            "Arweave allows us to remember and preserve valuable information, apps, and history indefinitely. 4EVERLAND enables the first permanent deployment of front-end pages on the Arweave network through Arseeding's integration.",
          btn: 'Get started for free',
          img: require('@/assets/imgs/hosting/Arweave.png'),
        },
        {
          tag: 'Dfinity',
          title: 'Expanding the Superpowers of the Internet',
          content:
            '4EVERLAND makes it as easy to host static front ends on Internet computer canisters as it is anywhere else. Create, update and manage your canisters automatically and deploy trustless projects on IC in seconds.',
          btn: 'Get started for free',
          img: require('@/assets/imgs/hosting/Dfinity.png'),
        },
      ],
    }
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>
<style lang="less" scoped>
#IPFS {
  .item {
    padding: 40px 35px;
    margin: 70px 0;
    border-radius: 6px;

    .item-tag {
      width: 62px;
      height: 18px;
      background: #000;
      color: #fff;
      font-size: 11px;
      text-align: center;
    }
    .item-title {
      font-size: 31px;
      font-family: 'Ubuntu-Bold', sans-serif;
      font-weight: bold;
      color: #000;
      line-height: 36px;
      margin-top: 43px;
    }
    .item-content {
      font-size: 15px;
      font-family: 'Ubuntu-Medium', sans-serif;
      font-weight: 500;
      color: #000;
      line-height: 30px;
      margin-top: 13px;
    }
    .item-btn-box {
      margin-top: 45px;
      .item-btn {
        width: 236px;
        height: 45px;
        background: #000;
        color: #fff;
      }
    }
    &:hover {
      background-color: #8272d1;
      .item-btn-box {
        .item-btn {
          background: #fff;
          color: #8272d1;
        }
      }
    }
  }
}
</style>
