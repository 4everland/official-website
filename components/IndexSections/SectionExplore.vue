<template>
  <div id="Explore">
    <div class="front">
      <v-container>
        <div class="universe-title">
          Explore infinite possibilities with products designed for
          sophisticated and dynamic Web3.0 experience
        </div>
        <v-row>
          <v-col
            v-for="(item, index) in imgItem"
            :key="index"
            :cols="12"
            :md="item.cols"
          >
            <div
              class="item"
              :class="{ 'active-hover': item.hover, 'has-bg': index <= 1 }"
              @click="linkTo(item)"
            >
              <v-row :class="{ 'flex-row-reverse': index == 1 }">
                <v-col :cols="item.childCols">
                  <div class="item-conten">
                    <div class="item-name">{{ item.name }}</div>
                    <div class="item-box">
                      <div class="item-tips">{{ item.tips }}</div>
                    </div>
                    <v-btn
                      v-if="index <= 1"
                      tile
                      :to="item.link"
                      class="try-free hidden-sm-and-down"
                      >Try for free</v-btn
                    >
                  </div>
                </v-col>
                <v-col :cols="6" class="">
                  <div v-if="item.img">
                    <v-img
                      :src="item.img"
                      contain
                      :max-width="
                        $vuetify.breakpoint.smAndDown ? '155px' : '100%'
                      "
                    ></v-img>
                    <div class="item-img-box hidden-sm-and-down">
                      <img
                        v-for="(img, i) in item.imgs"
                        :key="i"
                        :src="img"
                        contain
                      />
                      <!-- <span>
                        <v-icon color="#000" class="mr-2"
                          >mdi-dots-horizontal-circle-outline</v-icon
                        >More</span
                      > -->
                    </div>
                  </div></v-col
                >
                <v-col v-if="item.img" :cols="12" class="hidden-md-and-up">
                  <div class="item-img-box hidden-md-and-up">
                    <img
                      v-for="(img, i) in item.imgs"
                      :key="i"
                      :src="img"
                      contain
                    />
                    <!-- <span>
                      <v-icon color="#000" dense class="mr-2"
                        >mdi-dots-horizontal-circle-outline</v-icon
                      >More</span
                    > -->
                  </div>
                </v-col>
              </v-row>
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
          name: 'DWeb Hosting',
          tips: '4EVERLAND Hosting Service helps developers host websites or DApps on multiple protocols such as IPFS, Arweave, BNB Greenfield, etc. Users can deploy websites to Web 3.0 by using Github authorization or a Cli local template build.',
          link: '/hosting',
          img: require('@/assets/imgs/index/explore/hosting.png'),
          imgs: [
            require('@/assets/imgs/index/explore/IPFS.png'),
            require('@/assets/imgs/index/explore/Arweave.png'),
            require('@/assets/imgs/index/explore/BNBGreenfield.png'),
            require('@/assets/imgs/index/explore/dfinity.png'),
            // require('@/assets/imgs/index/explore/more.png'),
          ],
          cols: 12,
          childCols: 6,
        },
        {
          name: 'Storage',
          tips: "Bucket enables users to upload, store, and fetch files from multiple protocols such as IPFS and Arweave in a secure, convenient, and efficient manner. It's compatible with AWS S3 APIs, interface operations, CLI, and other upload methods.",
          link: '/bucket',
          img: require('@/assets/imgs/index/explore/bucket.png'),
          imgs: [
            require('@/assets/imgs/index/explore/IPFS.png'),
            require('@/assets/imgs/index/explore/Arweave.png'),
            require('@/assets/imgs/index/explore/Filecoin.png'),
            // require('@/assets/imgs/index/explore/more.png'),
          ],
          cols: 12,
          childCols: 6,
        },
        {
          name: 'Decentralized Gateway',
          tips: '200+ globally distributed gateway nodes available to provide developers with more efficient and faster Web 3.0 access',
          herf: 'https://ipfs.4everland.io',
          cols: 4,
          childCols: 12,
          hover: true,
        },
        {
          name: 'Payments on Multiple Chains',
          tips: '4EVERLAND supports payments with assets on multiple chains for the greater convenience of users from different ecosystems.',
          herf: 'https://dashboard.4everland.org',
          cols: 4,
          childCols: 12,
          hover: true,
        },
        {
          name: 'Additional Features',
          tips: 'Come explore more with 4EVERLAND. We also provide data analytics, decentralized domains, and underlying computing features.',
          herf: 'https://dashboard.4everland.org',
          cols: 4,
          childCols: 12,
          hover: true,
        },
      ],
    }
  },
  computed: {},
  mounted() {},
  methods: {
    linkTo(item) {
      if (item.hover) {
        window.open(item.herf)
      }
      console.log(this.$vuetify.breakpoint.smAndDown)
      if (this.$vuetify.breakpoint.smAndDown) {
        if (item.link) {
          this.$router.push(item.link)
        }
      }
    },
  },
}
</script>
<style lang="less" scoped>
#Explore {
  margin-top: 130px;
  position: relative;
  overflow: hidden;
  a {
    text-decoration: none;
  }
  .front {
    padding: 60px 0;
    position: relative;
    z-index: 7;
    background-image: url('@/assets/imgs/index/explore/bg.png');
    background-position: center;
    background-size: cover;
  }
  .universe-title {
    max-width: 900px;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    // cursor: pointer;

    .item-conten {
      flex: 1;
    }

    .item-name {
      font-size: 18px;
      font-family: 'Ubuntu-Bold', sans-serif !important;
      font-weight: bold;
      margin: 30px 0;
      color: #161617;
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
    .item-img-box {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 26px;
      img {
        height: 30px;
        margin-right: 30px;
      }
      span {
        font-size: 14px;
        font-family: 'Ubuntu', sans-serif !important;
        // margin-left: auto;
      }
    }
    .try-free {
      width: 142px;
      height: 30px;
      background: #000;
      color: #fff;
      margin-top: 53px;
      &:hover {
        background: #fff;
        color: #8272d1;
      }
    }
  }
  .has-bg .item-conten {
    padding: 0 50px;
  }
  .active-hover {
    cursor: pointer;
  }
  .active-hover:hover {
    background-color: #8272d1;
    color: #fff;
    .item-name {
      color: #fff;
    }
    .item-tips {
      color: #fff;
      /deep/ a {
        color: #fff;
        font-weight: bold;
      }
    }
  }
}

@media (max-width: 960px) {
  #Explore {
    margin-top: 0;
    .front {
      padding: 20px 0;
      background-image: none;
    }
    .universe-title {
      font-size: 18px;
      font-weight: normal;
      text-align: left;
      margin-bottom: 25px;
      font-family: 'Ubuntu', sans-serif !important;
    }
    .item {
      border: none;
      border-bottom: 1px solid #bebebe;
      border-radius: 0;
      padding: 0;
      padding-bottom: 20px;
      min-height: 110px;
      background-color: transparent;

      .item-name {
        font-size: 14px;
        font-weight: bold;
        margin-top: 0;
        margin-bottom: 15px;
        font-family: 'Ubuntu', sans-serif !important;
      }
      .item-box {
        .item-tips {
          font-size: 12px;
          font-weight: normal;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          font-family: 'Ubuntu', sans-serif !important;
        }
      }
      .item-img-box {
        display: flex;
        align-items: center;
        margin-top: 10px;
        img {
          height: 25px;
          margin-right: 15px;
        }
        span {
          font-size: 12px;
          font-family: 'Ubuntu', sans-serif !important;
          // margin-left: auto;
        }
      }
    }
    .has-bg {
      border-bottom: none;
      background-image: url('@/assets/imgs/index/explore/bg.png');
      background-position: center;
      background-size: cover;
      border-radius: 10px;
      padding: 15px 10px;
    }
    .has-bg .item-conten {
      padding: 0;
    }
    .active-hover:hover {
      background-color: transparent;
      color: #161617;
      .item-name {
        color: #161617;
      }
      .item-tips {
        color: #161617;
        /deep/ a {
          color: #161617;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
