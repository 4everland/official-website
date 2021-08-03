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
            <v-avatar size="36" class="mr-4">
              <img
                src="http://iph.href.lu/200x200?fg=666666&bg=cccccc"
                alt=""
              />
            </v-avatar>
            <div class="flex-grow-1">
              <div
                class="subtitle-2 cursor-pointer link-hover"
                @click="toDetail(data.mostPopularRecently.projectId)"
              >
                {{ data.mostPopularRecently.dappName }}
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
                  {{ tools.formatBigNum(data.mostPopularRecently.totalUv) }}
                </div>
              </div>
              <div class="text-right">
                <div class="caption">Total PV</div>
                <div class="body-1 font-weight-bold blue--text tex--darken-1">
                  {{ tools.formatBigNum(data.mostPopularRecently.totalPv) }}
                </div>
              </div>
            </div>
            <div class="d-flex justify-space-between">
              <div class="text-left">
                <div class="caption">24H UV</div>
                <div class="body-1 font-weight-bold blue--text tex--darken-1">
                  {{ tools.formatBigNum(data.mostPopularRecently.uv) }}
                </div>
              </div>
              <div class="text-right">
                <div class="caption">24H PV</div>
                <div class="body-1 font-weight-bold blue--text tex--darken-1">
                  {{ tools.formatBigNum(data.mostPopularRecently.pv) }}
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
                <v-avatar size="36" class="mr-4">
                  <img
                    src="http://iph.href.lu/200x200?fg=666666&bg=cccccc"
                    alt=""
                  />
                </v-avatar>
                <div class="flex-grow-1">
                  <div
                    class="subtitle-2 cursor-pointer link-hover"
                    @click="toDetail(data.bestToday.projectId)"
                  >
                    {{ data.bestToday.dappName }}
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="8" lg="8">
              <div class="d-flex justify-space-between flex-wrap">
                <div class="text-center">
                  <div class="caption">Total UV</div>
                  <div class="body-1 font-weight-bold blue--text tex--darken-1">
                    {{ tools.formatBigNum(data.bestToday.totalUv) }}
                  </div>
                </div>
                <div class="text-center">
                  <div class="caption">Total PV</div>
                  <div class="body-1 font-weight-bold blue--text tex--darken-1">
                    {{ tools.formatBigNum(data.bestToday.totalPv) }}
                  </div>
                </div>
                <div class="text-center">
                  <div class="caption">24H UV</div>
                  <div class="body-1 font-weight-bold blue--text tex--darken-1">
                    {{ tools.formatBigNum(data.bestToday.uv) }}
                  </div>
                </div>
                <div class="text-center">
                  <div class="caption">24H PV</div>
                  <div class="body-1 font-weight-bold blue--text tex--darken-1">
                    {{ tools.formatBigNum(data.bestToday.pv) }}
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
              v-for="item in data.recentlyReleased"
              :key="item.projectId"
              cols="12"
              md="4"
              lg="4"
            >
              <div class="d-flex align-center">
                <v-avatar size="36" class="mr-4">
                  <img
                    src="http://iph.href.lu/200x200?fg=666666&bg=cccccc"
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
      } catch (error) {
        //
      }
    },
    toDetail(id) {
      this.$router.push(`/dapps/${id}`)
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
