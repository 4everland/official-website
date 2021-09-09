<template>
  <v-container class="px-15 pb-15 grey--text text--darken-4 white">
    <div v-if="!data">
      <v-skeleton-loader light type="avatar,article" />
    </div>
    <v-row v-else>
      <v-col cols="12" md="4" lg="4">
        <div class="bg-grey rounded-lg pa-6">
          <div class="text-h6 pb-6">Most Popular Recently</div>
          <div class="d-flex align-center pb-6 bd-dash">
            <v-avatar
              size="36"
              rounded
              class="mr-4 cursor-pointer"
              @click="toDetail(mostPopularRecently.projectId)"
            >
              <img
                v-if="mostPopularRecently.icon"
                :src="mostPopularRecently.icon"
                alt=""
              />
              <img
                v-else
                class="pa-1 blue lighten-2 rounded-circle"
                src="/dapps.svg"
                alt=""
              />
            </v-avatar>
            <div class="flex-grow-1">
              <div
                class="subtitle-2 cursor-pointer link-hover"
                @click="toDetail(mostPopularRecently.projectId)"
              >
                {{ mostPopularRecently.dappName }}
              </div>
              <div class="caption grey--text text--darken-1">
                Recently data during 3 days
              </div>
            </div>
          </div>
          <div class="pt-6">
            <div class="d-flex justify-space-between pb-8">
              <div class="text-left">
                <div class="caption">Total UV</div>
                <div class="body-1 font-weight-bold blue--text tex--darken-1">
                  {{ tools.formatBigNum(mostPopularRecently.totalUv) }}
                </div>
              </div>
              <div class="text-right">
                <div class="caption">Total PV</div>
                <div class="body-1 font-weight-bold blue--text tex--darken-1">
                  {{ tools.formatBigNum(mostPopularRecently.totalPv) }}
                </div>
              </div>
            </div>
            <div class="d-flex justify-space-between">
              <div class="text-left">
                <div class="caption">24H UV</div>
                <div class="body-1 font-weight-bold blue--text tex--darken-1">
                  {{ tools.formatBigNum(mostPopularRecently.uv) }}
                </div>
              </div>
              <div class="text-right">
                <div class="caption">24H PV</div>
                <div class="body-1 font-weight-bold blue--text tex--darken-1">
                  {{ tools.formatBigNum(mostPopularRecently.pv) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col
        cols="12"
        md="8"
        lg="8"
        class="d-flex flex-column justify-space-between"
      >
        <div class="bg-grey rounded-lg pa-6 mb-6">
          <div class="text-h6 pb-6">Best Today</div>
          <v-row>
            <v-col cols="12" md="4" lg="4">
              <div class="d-flex align-center">
                <v-avatar
                  size="36"
                  rounded
                  class="mr-4 cursor-pointer"
                  @click="toDetail(bestToday.projectId)"
                >
                  <img v-if="bestToday.icon" :src="bestToday.icon" alt="" />
                  <img
                    v-else
                    class="pa-1 blue lighten-2 rounded-circle"
                    src="/dapps.svg"
                    alt=""
                  />
                </v-avatar>
                <div class="flex-grow-1">
                  <div
                    class="subtitle-2 cursor-pointer link-hover"
                    @click="toDetail(bestToday.projectId)"
                  >
                    {{ bestToday.dappName }}
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="8" lg="8">
              <div class="d-flex justify-space-between flex-wrap">
                <div class="text-center">
                  <div class="caption">Total UV</div>
                  <div class="body-1 font-weight-bold blue--text tex--darken-1">
                    {{ tools.formatBigNum(bestToday.totalUv) }}
                  </div>
                </div>
                <div class="text-center">
                  <div class="caption">Total PV</div>
                  <div class="body-1 font-weight-bold blue--text tex--darken-1">
                    {{ tools.formatBigNum(bestToday.totalPv) }}
                  </div>
                </div>
                <div class="text-center">
                  <div class="caption">24H UV</div>
                  <div class="body-1 font-weight-bold blue--text tex--darken-1">
                    {{ tools.formatBigNum(bestToday.uv) }}
                  </div>
                </div>
                <div class="text-center">
                  <div class="caption">24H PV</div>
                  <div class="body-1 font-weight-bold blue--text tex--darken-1">
                    {{ tools.formatBigNum(bestToday.pv) }}
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="bg-grey rounded-lg pa-6">
          <div class="text-h6 pb-6">Recently Released</div>
          <v-row>
            <v-col
              v-for="item in recentlyReleased"
              :key="item.projectId"
              cols="12"
              md="4"
              lg="4"
            >
              <div class="d-flex align-center">
                <v-avatar
                  size="36"
                  rounded
                  class="mr-4 cursor-pointer"
                  @click="toDetail(item.projectId)"
                >
                  <img v-if="item.icon" :src="item.icon" alt="" />
                  <img
                    v-else
                    class="pa-1 blue lighten-2 rounded-circle"
                    src="/dapps.svg"
                    alt=""
                  />
                </v-avatar>
                <div class="flex-grow-1">
                  <div
                    class="subtitle-2 cursor-pointer link-hover"
                    @click="toDetail(item.projectId)"
                  >
                    {{ item.dappName }}
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      data: null,
      bestToday: {},
      mostPopularRecently: {},
      recentlyReleased: {},
    }
  },
  mounted() {
    this.getRecently()
  },
  methods: {
    async getRecently() {
      try {
        const { data } = await this.$axios.get('/dapps/recently/detail')
        this.data = data.data
        this.bestToday = data.data.bestToday || {}
        this.mostPopularRecently = data.data.mostPopularRecently || {}
        this.recentlyReleased = data.data.recentlyReleased || {}
      } catch (error) {
        //
      }
    },
    toDetail(id) {
      this.$router.push(`/dapps/detail?id=${id}`)
    },
  },
}
</script>
<style scoped>
.bg-grey {
  background-color: #f3f3f3;
}
.bd-dash {
  border-bottom: 1px dashed #dbdbdb;
}
</style>
