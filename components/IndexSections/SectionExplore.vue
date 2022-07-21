<template>
  <div id="Explore">
    <div class="front">
      <div class="universe-title">
        Explore endless possibilities using products Designed for complex and
        dynamic Web3.0.
      </div>
      <v-container>
        <v-row>
          <v-col
            v-for="(item, index) in imgItem"
            :key="index"
            :cols="item.cols"
          >
            <div class="item">
              <v-img
                v-if="item.img"
                :src="item.img"
                contain
                max-width="360px"
              ></v-img>
              <div class="item-name">{{ item.name }}</div>
              <div class="item-box">
                <div class="item-tips" v-html="item.tips"></div>
                <v-btn icon disabled>
                  <v-icon large color="#9097a0">mdi-chevron-right</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgItem: [
        {
          name: 'HOSTING',
          tips: '4EVERLAND Hosting service can help deveploers to host<br/>Webs or Dapps on IPFS (ICP & Arweave coming soon).<br/>Users can quickly deploy websites to IPFS through a<br/>Github authorization or a Cli local template build.',
          link: '',
          img: require('@/assets/imgs/index/explore/hosting.png'),
          cols: 6,
        },
        {
          name: 'BUCKET',
          tips: 'BUCKET enables users to upload, store, and fetch files<br/>from the IPFS and Arweave in a secure, convenient,<br/>and efficient manner. It is also compatible with AWS S3<br/>application programming interface, CLI, and other upload methods.',
          link: '',
          img: require('@/assets/imgs/index/explore/bucket.png'),
          cols: 6,
        },
        {
          name: 'ENS',
          tips: 'Host any websites by<br/>Ethereum Name Service (ENS)<br/>in a truly decentralized way on IPFS .',
          link: '',
          cols: 4,
        },
        {
          name: 'SNS',
          tips: 'Host any websites by<br/>Solona Name Service (SNS)<br/>in a truly decentralized way on IPFS .',
          link: '',
          cols: 4,
        },
        {
          name: 'GATEWAY',
          tips: '4EVERLAND Gateway is dedicated<br/>to coalesce various Web3 protocols.',
          link: '',
          cols: 4,
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
#Explore {
  margin-top: 60px;
  position: relative;
  overflow: hidden;
  .front {
    padding: 60px 0;
    position: relative;
    z-index: 9;
    background-image: url('@/assets/imgs/index/explore/bg.png');
    background-position: center;
    background-size: cover;
  }
  .universe-title {
    max-width: 800px;
    font-size: 36px;
    font-family: 'Ubuntu-Bold', sans-serif !important;
    font-weight: bold;
    color: #161617;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  .item {
    border: 1px solid #fff;
    border-radius: 10px;
    padding: 24px 36px;
    min-height: 210px;
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    .item-name {
      font-size: 18px;
      font-family: 'Ubuntu-Bold', sans-serif !important;
      font-weight: bold;
      margin: 30px 0;
    }
    .item-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .item-tips {
        text-align: left;
        font-size: 14px;
        color: #161617;
        font-family: 'Ubuntu-Medium', sans-serif !important;
        font-weight: 500;
        /deep/ a {
          text-decoration: none;
          color: #668df1;
        }
      }
    }
  }
  .item:hover {
    background-color: #8272d1;
    color: #fff;
    .item-tips {
      color: #fff;
      /deep/ a {
        color: #fff;
        font-weight: bold;
      }
    }
  }
}
</style>
