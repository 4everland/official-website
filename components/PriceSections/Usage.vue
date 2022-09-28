<template>
  <div id="Usage" class="home-block">
    <v-container class="py-16">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="block-titel white--text">Usage cost calculator</div>
          <div class="block-text white--text">
            Select a monthly plan and get a transparent estimate of your usage
            cost.
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="7">
          <v-row>
            <v-col cols="12" md="6">
              <div class="cols-title">Configuration</div>
              <v-select :items="items" label="Ethereum" solo></v-select>
            </v-col>
            <v-col cols="12" md="6"> </v-col>
            <v-col
              v-for="(item, index) in sliderLists"
              :key="item.name"
              cols="12"
              md="6"
            >
              <div class="cols-title">{{ item.name }}</div>
              <v-slider
                v-model="item.value"
                thumb-label
                color="##FFFFFF"
                track-color="#514F4F"
                track-fill-color="#8272D1"
                thumb-color="#8272D1"
                :max="item.max"
                :min="item.min"
                hide-details
                :thumb-size="64"
                @change="
                  (val) => {
                    slideYChange(val, index)
                  }
                "
              >
                <template v-slot:thumb-label="{ value }">
                  <span class="text-body-2">
                    {{ item.format(value) }}
                  </span>
                </template>
              </v-slider>
              <div class="unit">
                <span>{{ item.minUnit }}</span>
                <span>{{ item.maxUnit }}</span>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="5" class="d-flex justify-center align-center">
          <div class="price-box">
            <div class="price">$ {{ countPrice }}</div>
            <div class="tips">usage cost</div>
            <div>
              <v-btn
                tile
                class="start-btn"
                href="https://dashboard.4everland.org/resource"
                target="_blank"
                width="230"
                height="45"
                >Purchase</v-btn
              >
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
    const that = this
    return {
      countPrice: '0.00',
      price: {},
      priceList: [0, 0, 0, 0],
      items: ['Ethereum', 'Polygon', 'BSC'],
      sliderLists: [
        {
          name: 'Bandwidth',
          minUnit: '1M',
          maxUnit: '500GB',
          min: 1 * 1024 * 1024,
          max: 500 * 1024 * 1024 * 1024,
          format: (val) => {
            return that.bytesToSize(val)
          },
        },
        {
          name: 'Build Minutes',
          minUnit: '1Min',
          maxUnit: '5000Min',
          min: 1 * 60,
          max: 5000 * 60,
          format: (val) => {
            return Math.floor(val / 60) + 'Min'
          },
        },
        {
          name: 'IPFS',
          minUnit: '1M',
          maxUnit: '500GB',
          min: 1 * 1024 * 1024,
          max: 500 * 1024 * 1024 * 1024,
          format: (val) => {
            return that.bytesToSize(val)
          },
        },
        {
          name: 'Arweave',
          minUnit: '1M',
          maxUnit: '500GB',
          min: 1 * 1024 * 1024,
          max: 500 * 1024 * 1024 * 1024,
          format: (val) => {
            return that.bytesToSize(val)
          },
        },
      ],
    }
  },
  mounted() {
    this.getPrice()
  },
  methods: {
    async getPrice() {
      try {
        const { data } = await this.$axios.get('/common/resource/price')
        this.price = data.data
      } catch (error) {
        //
      }
    },
    bytesToSize(bytes) {
      if (bytes === 0) return '0 B'
      const k = 1024 // or 1024
      const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i]
    },
    slideYChange(val, index) {
      let price = 0
      switch (index) {
        case 0:
          price = Math.floor(val * this.price.trafficUnitPrice) / 1e18
          break
        case 1:
          price = Math.floor(val * this.price.buildTimeUnitPrice) / 1e18
          break
        case 2:
          price =
            Math.floor(
              val * this.price.ipfsStorageUnitPrice * 60 * 60 * 24 * 30
            ) / 1e18
          break
        case 3:
          price = Math.floor(val * this.price.arStorageUnitPrice) / 1e18
          break
        default:
          break
      }
      // price = Math.floor(price) / 100
      this.priceList[index] = price
      this.countPrice = this.sum(this.priceList)
    },
    sum(arr) {
      let s = 0
      arr.forEach(function (val, idx, arr) {
        s += val
      }, 0)
      return s.toFixed(2)
    },
  },
}
</script>
<style lang="less" scoped>
#Usage {
  background-image: url('@/assets/imgs/price/bg.png');
  background-size: cover;
  background-position: 100% 100%;
  .cols-title {
    font-size: 18px;
    font-family: 'Ubuntu-Bold', sans-serif;
    font-weight: bold;
    color: #fff;
    margin-bottom: 15px;
    position: relative;
  }
  .unit {
    color: #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
  }
  .price-box {
    max-width: 100%;
    width: 407px;
    height: 296px;
    background: #fff;
    border-radius: 8px;
    padding: 50px 34px;
    .price {
      font-size: 45px;
      font-family: 'Ubuntu-Bold', sans-serif;
      font-weight: bold;
      color: #8272d1;
    }
    .tips {
      font-size: 18px;
      font-family: 'Ubuntu-Medium', sans-serif;
      font-weight: 500;
      color: #666;
    }
    .start-btn {
      margin-top: 42px;
      background-color: #8272d1;
      color: #fff;
    }
  }
}
</style>
