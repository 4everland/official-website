<template>
  <div id="about">
    <v-container class="about-box">
      <v-row>
        <v-col cols="12" md="6" lg="6">
          <div class="text-box">
            <div class="text-title">What's is the 4EVERLAND?</div>
            <div class="text-tips">
              4EVERLAND is a Web 3.0 cloud computing platform that integrates
              storage, computing, and network core capabilities. It aims to help
              the user to make a smooth leap from Web 2.0 to Web 3.0 and become
              the infrastructure for millions of Web 3.0 developers and
              applications.
            </div>
          </div>
        </v-col>
        <v-col :cols="12">
          <div class="btn-box">
            <v-btn
              outlined
              tile
              v-for="(item, index) in btnItem"
              :key="index"
              :to="item.link"
              class="btn-item"
              >{{ item.name }}</v-btn
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
          name: 'Hosting',
          link: '/hosting',
        },
        {
          name: 'Bucket',
          link: '/bucket',
        },
        {
          name: 'Gateway',
          link: '/ipfs',
        },
        {
          name: 'ENS',
          link: '/ens',
        },
        {
          name: 'SNS',
          link: '/sns',
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
  .about-box {
    height: 100%;
    background-image: url('@/assets/imgs/index/about/about-bg.png');
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;
    .text-box {
      .text-title {
        font-size: 45px;
        text-align: left;
        color: #161617;
        font-family: 'Ubuntu-Bold', sans-serif !important;
        font-weight: bold;
        margin-bottom: 30px;
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
      margin-top: 60px;
    }
    .btn-item {
      width: 143px;
      height: 25px;
      margin-right: 23px;
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
        margin-top: 30px;
      }
      .btn-item {
        width: 100px;
        height: 30px;
        margin-right: 20px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
