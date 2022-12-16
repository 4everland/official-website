<template>
  <div id="about">
    <v-container class="about-box">
      <v-row>
        <v-col cols="12" md="6" lg="6">
          <div class="text-box">
            <div class="text-title">What is 4EVERLAND?</div>
            <div class="text-tips">
              4EVERLAND is a Web 3.0 cloud computing platform that integrates
              storage, computing, and network as its core capabilities. It aims
              to help users make a smooth leap from Web 2.0 to Web 3.0 and
              become the infrastructure for millions of Web 3.0 developers and
              applications.
            </div>
          </div>
        </v-col>
        <v-col :cols="12" :md="9">
          <div class="btn-box">
            <span
              v-for="(item, index) in btnItem"
              :key="index"
              class="btn-item"
              >{{ item.name }}</span
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btnItem: [
        {
          name: 'DWeb Hosting',
        },
        {
          name: 'IPFS/AR Storage',
        },
        {
          name: 'Decentralized Gateway',
        },
        {
          name: 'General-purpose Computing',
        },
        {
          name: 'Data Services',
        },
        {
          name: 'More...',
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
#about {
  height: 640px;
  background-color: #f3e8fe;
  background-image: url('@/assets/imgs/index/about/bg.png');
  background-position: center;
  background-size: cover;
  .about-box {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/imgs/index/about/about-bg.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    align-items: center;
    .text-box {
      .text-title {
        font-size: 45px;
        text-align: left;
        color: #161617;
        font-family: 'Ubuntu-Bold', sans-serif !important;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .text-tips {
        font-size: 18px;
        text-align: left;
        color: #161617;
        font-family: 'Ubuntu-Medium', sans-serif !important;
        font-weight: 500;
      }
    }
    .btn-box {
      margin-top: 10px;
    }
    .btn-item {
      display: inline-block;
      min-width: 143px;
      text-align: center;
      // height: 25px;
      margin-right: 23px;
      margin-top: 10px;
      border: 1px solid #161617;
      padding: 0 10px;
    }
  }
}
@media (max-width: 960px) {
  #about {
    height: 345px;
    background-color: #f3e8fe;
    .about-box {
      .text-box {
        .text-title {
          font-size: 21px;
          text-align: left;
          color: #161617;
          font-weight: normal;
          margin-bottom: 20px;
          font-family: 'Ubuntu', sans-serif !important;
        }
        .text-tips {
          font-size: 12px;
          text-align: left;
          font-weight: normal;
          font-family: 'Ubuntu', sans-serif !important;
        }
      }
      .btn-box {
        margin-top: 10px;
      }
      .btn-item {
        width: 48%;
        font-size: 12px;
        // height: 30px;
        padding: 4px 0;
        margin: 0 2px;
        margin-bottom: 10px;
        border-radius: 4px;
      }
    }
  }
}
</style>
