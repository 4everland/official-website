<template>
  <div id="universe">
    <v-container>
      <div class="universe-title">Make a smooth leap from Web2.0 to Web3.0</div>
      <v-row>
        <v-col cols="12" md="6" lg="6">
          <div class="text-box">
            <div class="text-title">
              Use 4EVERLAND and join our Web 3.0 Universe fam
            </div>

            <div style="margin-top: 72px" class="hidden-sm-and-down">
              <v-btn color="#000" tile class="white--text" to="/universe"
                >Explore Universe</v-btn
              >
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="6" class="universe-list">
          <div
            v-for="(item, index) in universeItem"
            v-show="$vuetify.breakpoint.smAndDown ? index < 9 : true"
            :key="index"
            class="item-img-box"
          >
            <v-img
              class="ma-auto mb-4"
              contain
              max-height="75"
              max-width="75"
              :src="item.img"
            ></v-img>
            <div class="universe-item-name">{{ item.name }}</div>
          </div>
        </v-col>
        <v-col cols="12" class="hidden-md-and-up">
          <div class="text-center" style="margin-top: 42px">
            <v-btn color="#000" tile class="white--text"
              >Explore Universe</v-btn
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
      universeItem: [
        {
          name: 'Snapshot',
          img: require('@/assets/imgs/index/universe/Snapshot.png'),
        },
        {
          name: 'Celer',
          img: require('@/assets/imgs/index/universe/Celer.png'),
        },
        {
          name: 'Metis',
          img: require('@/assets/imgs/index/universe/Metis.png'),
        },
        {
          name: 'RSS3',
          img: require('@/assets/imgs/index/universe/RSS3.png'),
        },
        {
          name: 'REI',
          img: require('@/assets/imgs/index/universe/REI.png'),
        },
        // {
        //   name: 'Cryptoswap',
        //   img: require('@/assets/imgs/index/universe/Cryptoswap.png'),
        // },
        {
          name: 'SyncSwap',
          img: require('@/assets/imgs/index/universe/SyncSwap.png'),
        },
        {
          name: 'Relationlabs',
          img: require('@/assets/imgs/index/universe/Relationlabs.png'),
        },
        {
          name: 'everPay',
          img: require('@/assets/imgs/index/universe/Everpay.png'),
        },
        {
          name: 'Realy',
          img: require('@/assets/imgs/index/universe/Realy.png'),
        },
        {
          name: '.bit',
          img: require('@/assets/imgs/index/universe/bit.png'),
        },
        {
          name: 'Mintbox',
          img: require('@/assets/imgs/index/universe/Mintbox.png'),
        },
        {
          name: 'Bella',
          img: require('@/assets/imgs/index/universe/Bella.png'),
        },
        {
          name: 'Gamedevs',
          img: require('@/assets/imgs/index/universe/Gamedevs.png'),
        },
        // {
        //   name: 'Celestial',
        //   img: require('@/assets/imgs/index/universe/Celestial.png'),
        // },
        {
          name: 'SPACE ID',
          img: require('@/assets/imgs/index/universe/SPACEID.png'),
        },
        {
          name: 'Quest3',
          img: require('@/assets/imgs/index/universe/Quest3.png'),
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
#universe {
  padding-bottom: 200px;
  .universe-title {
    font-size: 18px;
    font-family: 'Ubuntu', sans-serif !important;
    font-weight: 400;
    color: #888;
    text-align: center;
    margin: 40px 0;
    margin-bottom: 80px;
  }
  .text-box {
    .text-title {
      font-size: 36px;
      text-align: left;
      color: #161617;
      font-family: 'Ubuntu-Medium', sans-serif !important;
      font-weight: 500;
    }
  }
  .universe-list {
    display: flex;
    flex-wrap: wrap;
    .item-img-box {
      width: 20%;
      text-align: center;
      margin: 12px 0;
    }
    .universe-item-name {
      font-size: 18px;
      font-family: 'Ubuntu', sans-serif !important;
      color: #161617;
    }
  }
}
@media (max-width: 960px) {
  #universe {
    padding-bottom: 40px;
    .universe-title {
      text-align: center;
      font-size: 12px;
      margin-top: 10px;
      margin-bottom: 20px;
    }
    .text-box {
      .text-title {
        font-size: 21px;
        text-align: left;
        color: #161617;
        font-weight: normal;
        font-family: 'Ubuntu', sans-serif !important;
      }
    }
    .universe-list {
      .item-img-box {
        width: 33%;
        text-align: center;
        margin: 12px 0;
      }
      .universe-item-name {
        font-size: 14px;
      }
    }
  }
}
</style>
