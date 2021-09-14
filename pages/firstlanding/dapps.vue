<template>
  <v-theme-provider light>
    <v-container class="mt-16">
      <div
        class="top-bar text-center"
        :style="{
          top: $vuetify.breakpoint.smAndDown ? '56px' : '64px',
        }"
      >
        <div
          v-for="(item, index) in award"
          :key="index"
          class="up-item text-h6 text-truncate"
        >
          {{
            item.awardUserName +
            item.awardInfo +
            formatSeconds(item.timestamp) +
            ' Seconds ago.'
          }}
        </div>
      </div>
      <!-- <count-down type="end" /> -->
      <div v-if="!total">
        <v-skeleton-loader light type="image" />
      </div>
      <v-row v-else>
        <v-col
          v-for="(item, index) in colors"
          :key="index"
          cols="12"
          md="4"
          lg="4"
        >
          <div class="pa-10 rounded-lg text-center item-block">
            <p class="text-h4 font-weight-bold">{{ item.name }}</p>
            <p class="text-h3 font-weight-bold" style="color: #2b85fb">
              {{ tools.formatBigNum(total[item.key]) }}
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-16">
        <v-col cols="6">
          <div class="text-h4">DApp List</div>
        </v-col>
        <v-col cols="6" class="text-right"
          ><v-btn
            href="/firstlanding"
            class="font-weight-bold"
            rounded
            outlined
            color="#2b85fb"
            >Rules</v-btn
          >
          <v-btn
            href="/firstlanding/grants"
            class="font-weight-bold"
            rounded
            outlined
            color="#2b85fb"
            >Grants</v-btn
          ></v-col
        >
      </v-row>
      <v-row v-if="data.length > 0" class="pb-8">
        <v-col cols="12">
          <div class="rounded-lg" style="overflow: hidden">
            <v-data-table
              :headers="headers"
              :items="data"
              light
              loading-text="Loading... Please wait"
              disable-sort
              hide-default-footer
              :items-per-page="itemsPerPage"
              class="white--text"
              @click:row="
                (item) => {
                  toDetail(item.domain)
                }
              "
            >
              <template #[`item.index`]="{ item }">
                <img
                  v-if="item.index <= 3"
                  :src="rankIcon[item.index - 1]"
                  alt=""
                  width="50"
                />
                <span v-else>
                  {{ item.index | rank }}
                </span>
              </template>
              <template #[`item.projectName`]="{ item }">
                <div class="d-flex align-center">
                  <img v-if="item.icon" :src="item.icon" alt="" width="36" />
                  <img
                    v-else
                    class="pa-1 blue lighten-2 rounded-circle"
                    src="/dapps.svg"
                    alt=""
                    width="36"
                  />
                  <span class="ml-4">
                    {{ item.projectName }}
                  </span>
                </div>
              </template>
            </v-data-table>
            <div v-if="showMoreBtn" class="text-center mt-4">
              <v-btn icon @click="showMore">
                <v-icon color="#5461be" size="48">
                  {{ mdiChevronDown }}
                </v-icon>
              </v-btn>
            </div>
            <!-- <div class="back-top" v-if="!$vuetify.breakpoint.smAndDown">
              <v-btn icon @click="backTop">
                <img src="~/assets/imgs/firstlanding/toTop.png" alt="" />
              </v-btn>
            </div> -->
          </div>
        </v-col>
      </v-row>
      <!-- <img src="~/assets/imgs/index/skybg-mask@2x.png" class="skybg-mask" /> -->
    </v-container>
  </v-theme-provider>
</template>
<script>
import CountDown from '@/components/FirstlandingSections/CountDown.vue'
import { mdiChevronDown } from '@mdi/js'
export default {
  components: {
    CountDown,
  },
  filters: {
    rank(index) {
      return index
    },
  },
  data() {
    return {
      mdiChevronDown,
      headers: [
        {
          text: 'Rank',
          align: 'center',
          value: 'index',
          width: 300,
        },
        { text: 'DApps', align: 'left', value: 'projectName', width: 450 },
        { text: 'Total users', align: 'left', value: 'totalUsers' },
        { text: 'AtCreated', align: 'left', value: 'createAt' },
      ],
      colors: [
        { color: '#75A6E7', name: 'Total DApps', key: 'totalDApps' },
        { color: '#84D199', name: 'Total Developers', key: 'totalDevelopers' },
        { color: '#BE80E0', name: 'Total Uesrs', key: 'totalUsers' },
      ],
      award: [],
      total: null,
      data: [],
      rankIcon: [
        require('@/assets/imgs/firstlanding/rank1.png'),
        require('@/assets/imgs/firstlanding/rank2.png'),
        require('@/assets/imgs/firstlanding/rank3.png'),
      ],
      itemsPerPage: 20,
      showMoreBtn: true,
    }
  },
  mounted() {
    this.getTable()
    this.getTotal()
    this.getAward()
  },
  methods: {
    toDetail(url) {
      window.open(url)
    },
    async getTable() {
      try {
        const { data } = await this.$axios.get('/dapps/bigbang/projects')
        data.data.map((item, index) => {
          item.createAt = this.tools.parseTime(item.createAt)
          item.totalUsers = this.tools.formatBigNum(item.totalUsers)
          item.index = index + 1
          return item
        })
        this.data = data.data
      } catch (error) {
        //
      }
    },
    async getTotal() {
      try {
        const { data } = await this.$axios.get('/dapps/total/detail')
        this.total = data.data
      } catch (error) {
        //
      }
    },
    async getAward() {
      try {
        const { data } = await this.$axios.get('/dapps/award')
        this.award = data.data
        setTimeout(() => {
          this.getAward()
        }, 20000)
      } catch (error) {
        //
      }
    },
    showMore() {
      this.itemsPerPage = this.itemsPerPage + 10
      if (this.itemsPerPage >= this.data.length) {
        this.showMoreBtn = false
      }
    },
    backTop() {
      scrollTo(0, 0)
    },
    formatSeconds(time) {
      let s = Date.parse(new Date()) / 1000 - time
      if (s === 0) {
        s = 1
      }
      return s
    },
  },
}
</script>
<style scoped lang="less">
.top-bar {
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  height: 48px;
  line-height: 48px;
  background-image: linear-gradient(to left, #24befc, #21a4fc, #1573fc);
  overflow: hidden;
  padding: 0 10px;
}
.item-block {
  background-image: linear-gradient(#5c5a8d, #32374e, #242839);
}
.dapps-table {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .row {
    width: 100%;
    height: 80px;
  }
}
/deep/ .v-data-table-header {
  background-color: #000;
  background-image: linear-gradient(#5c5a8d, #32374e, #242839);
  height: 80px;
  th {
    color: #fff !important;
    font-size: 24px !important;
    font-weight: bold !important;
  }
}
/deep/ tbody {
  background-color: #000;
  tr {
    height: 80px;
    cursor: pointer;
    td {
      font-size: 18px !important;
      font-weight: bold !important;
    }
  }
  tr:nth-child(even) {
    background-color: #282d3b;
    td {
      background-color: #282d3b;
    }
  }
  tr:nth-child(odd) {
    background-color: #1e2226;
    td {
      background-color: #1e2226;
    }
  }
  tr:hover:nth-child(even) {
    background-color: #282d3b !important;
  }

  tr:hover:nth-child(odd) {
    background-color: #1e2226 !important;
  }
}
.back-top {
  position: fixed;
  right: 100px;
  top: 40%;
}
.skybg-mask {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
.up-item {
  position: relative;
  animation: moveup 20s 2s infinite;
  -webkit-animation: moveup 20s 2s infinite;
  height: 48px;
  line-height: 48px;
}

@keyframes moveup {
  0% {
    top: 0;
  }
  10% {
    top: -48px;
  }
  20% {
    top: -96px;
  }
  30% {
    top: -144px;
  }
  40% {
    top: -192px;
  }
  50% {
    top: -240px;
  }
  60% {
    top: -288px;
  }
  70% {
    top: -336px;
  }
  80% {
    top: -384px;
  }
  90% {
    top: -432px;
  }
  100% {
    top: -480px;
  }
}
@-webkit-keyframes moveup /*Safari and Chrome*/ {
  0% {
    top: 0;
  }
  10% {
    top: -48px;
  }
  20% {
    top: -96px;
  }
  30% {
    top: -144px;
  }
  40% {
    top: -192px;
  }
  50% {
    top: -240px;
  }
  60% {
    top: -288px;
  }
  70% {
    top: -336px;
  }
  80% {
    top: -384px;
  }
  90% {
    top: -432px;
  }
  100% {
    top: -480px;
  }
}
</style>
