<template>
  <v-container class="px-15 pb-15 grey--text text--darken-4 white">
    <v-row>
      <v-col cols="12" md="4" lg="4">
        <div class="bg-grey rounded-lg pa-6">
          <div class="text-h6 pb-6">Most Popular Recently</div>
          <div class="d-flex align-center pb-6 bd-dash">
            <img
              class="rounded-circle mr-4"
              src="http://iph.href.lu/200x200?fg=666666&bg=cccccc"
              alt=""
              width="36"
              height="36"
            />
            <div class="flex-grow-1">
              <div
                class="subtitle-2 cursor-pointer link-hover"
                @click="toDetail"
              >
                Dapp Name
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
                  25,590
                </div>
              </div>
              <div class="text-right">
                <div class="caption">Total PV</div>
                <div class="body-1 font-weight-bold blue--text tex--darken-1">
                  25,590
                </div>
              </div>
            </div>
            <div class="d-flex justify-space-between">
              <div class="text-left">
                <div class="caption">24H UV</div>
                <div class="body-1 font-weight-bold blue--text tex--darken-1">
                  25,590
                </div>
              </div>
              <div class="text-right">
                <div class="caption">24H PV</div>
                <div class="body-1 font-weight-bold blue--text tex--darken-1">
                  25,590
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
            <v-col cols="4">
              <div class="d-flex align-center">
                <img
                  class="rounded-circle mr-4"
                  src="http://iph.href.lu/200x200?fg=666666&bg=cccccc"
                  alt=""
                  width="36"
                  height="36"
                />
                <div class="flex-grow-1">
                  <div
                    class="subtitle-2 cursor-pointer link-hover"
                    @click="toDetail"
                  >
                    Dapp Name
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="8">
              <div class="d-flex justify-space-between">
                <div class="text-center">
                  <div class="caption">Total PV</div>
                  <div class="body-1 font-weight-bold blue--text tex--darken-1">
                    25,590
                  </div>
                </div>
                <div class="text-center">
                  <div class="caption">Total UV</div>
                  <div class="body-1 font-weight-bold blue--text tex--darken-1">
                    25,590
                  </div>
                </div>
                <div class="text-center">
                  <div class="caption">24H PV</div>
                  <div class="body-1 font-weight-bold blue--text tex--darken-1">
                    25,590
                  </div>
                </div>
                <div class="text-center">
                  <div class="caption">24H UV</div>
                  <div class="body-1 font-weight-bold blue--text tex--darken-1">
                    25,590
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="bg-grey rounded-lg pa-6">
          <div class="text-h6 pb-6">Recently Released</div>
          <v-row>
            <v-col cols="4">
              <div class="d-flex align-center">
                <img
                  class="rounded-circle mr-4"
                  src="http://iph.href.lu/200x200?fg=666666&bg=cccccc"
                  alt=""
                  width="36"
                  height="36"
                />
                <div class="flex-grow-1">
                  <div
                    class="subtitle-2 cursor-pointer link-hover"
                    @click="toDetail"
                  >
                    Dapp Name
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="4">
              <div class="d-flex align-center">
                <img
                  class="rounded-circle mr-4"
                  src="http://iph.href.lu/200x200?fg=666666&bg=cccccc"
                  alt=""
                  width="36"
                  height="36"
                />
                <div class="flex-grow-1">
                  <div
                    class="subtitle-2 cursor-pointer link-hover"
                    @click="toDetail"
                  >
                    Dapp Name
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="4">
              <div class="d-flex align-center">
                <img
                  class="rounded-circle mr-4"
                  src="http://iph.href.lu/200x200?fg=666666&bg=cccccc"
                  alt=""
                  width="36"
                  height="36"
                />
                <div class="flex-grow-1">
                  <div
                    class="subtitle-2 cursor-pointer link-hover"
                    @click="toDetail"
                  >
                    Dapp Name
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
    return {}
  },
  methods: {
    toDetail(id) {
      console.log(111)
      this.$router.push(`/dapps/1`)
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
