<template>
  <v-container class="px-15 pt-15 pb-8 white">
    <div v-if="!data">
      <v-skeleton-loader light type="avatar,list-item-three-line,card" />
    </div>
    <template v-else>
      <v-row class="pb-15 bd-dash">
        <v-col cols="12" md="2" lg="2">
          <div class="text-center mb-5">
            <v-avatar size="74" rounded>
              <img v-if="data.icon" :src="data.icon" alt="" />
              <img
                v-else
                class="pa-1 blue lighten-2 rounded-circle"
                src="/dapps.svg"
                alt=""
              />
            </v-avatar>
          </div>
          <div class="text-center">
            <v-btn
              rounded
              outlined
              color="primary"
              :href="'https://' + data.domains[0].domain"
              target="_blank"
              >Website</v-btn
            >
          </div>
        </v-col>
        <v-col cols="12" md="10" lg="10">
          <div class="text-h6 grey--text text--darken-4">
            {{ data.projectName }}
          </div>
          <div class="grey--text text--darken-2">
            {{ data.desc ? data.desc : 'No introduction in the project.' }}
          </div>
        </v-col>
      </v-row>
      <v-row class="pt-15 mb-8">
        <v-col
          v-for="(item, index) in colors"
          :key="index"
          cols="12"
          md="4"
          lg="4"
        >
          <div class="pa-10 rounded-lg" :style="{ background: item.color }">
            <p class="text-h6">{{ item.name }}</p>
            <div class="d-flex justify-space-between mb-2">
              <div>Today</div>
              <div>
                <span v-if="index == 0">+</span
                >{{ tools.formatBigNum(data[item.today]) }}
              </div>
            </div>
            <div class="d-flex justify-space-between">
              <div>Yesterday</div>
              <div>
                <span v-if="index == 0">+</span
                >{{ tools.formatBigNum(data[item.yesterday]) }}
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" lg="4">
          <div class="text-sm-center text-md-left">
            <div class="grey--text text--darken-1 mb-2">Total Users</div>
            <div class="text-h4 grey--text text--darken-4">
              {{ tools.formatBigNum(data.totalUsers) }}
            </div>
          </div></v-col
        >
        <v-col cols="12" md="4" lg="4">
          <div class="text-sm-center">
            <div class="grey--text text--darken-1 mb-2">Total UV</div>
            <div class="text-h4 grey--text text--darken-4">
              {{ tools.formatBigNum(data.totalUv) }}
            </div>
          </div></v-col
        >
        <v-col cols="12" md="4" lg="4">
          <div class="text-sm-center text-md-right">
            <div class="grey--text text--darken-1 mb-2">Total PV</div>
            <div class="text-h4 grey--text text--darken-4">
              {{ tools.formatBigNum(data.totalPv) }}
            </div>
          </div></v-col
        >
        <!-- <v-col cols="12" md="4" lg="4">
          <div class="text-sm-center text-md-right">
            <div class="grey--text text--darken-1 mb-2">
              Next day retention rate
            </div>
            <div class="text-h4 grey--text text--darken-4">
              {{ data.retentionRate }}%
            </div>
          </div></v-col
        > -->
      </v-row>
    </template>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      colors: [
        {
          color: '#75A6E7',
          name: 'New User',
          today: 'todayNewUser',
          yesterday: 'yesterdayNewUser',
        },
        {
          color: '#84D199',
          name: 'UV',
          today: 'todayUv',
          yesterday: 'yesterdayUv',
        },
        {
          color: '#BE80E0',
          name: 'PV',
          today: 'todayPv',
          yesterday: 'yesterdayPv',
        },
      ],
      data: null,
    }
  },
  mounted() {
    const id = this.$route.query.id
    this.getTotal(id)
  },
  methods: {
    async getTotal(id) {
      try {
        const { data } = await this.$axios.get(`/dapps/data/${id}`)
        this.data = data.data
      } catch (error) {
        //
      }
    },
  },
}
</script>
<style scoped>
.bd-dash {
  border-bottom: 1px dashed #dbdbdb;
}
</style>
