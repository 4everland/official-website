<template>
  <div class="countdown">
    <v-container class="py-12">
      <v-row class="main">
        <v-col
          class="d-flex align-center justify-center"
          cols="12"
          md="4"
          lg="4"
        >
          <div class="text-h4">
            EVENT {{ type == 'start' ? 'START' : 'ENDS' }} IN
            <v-icon v-if="type == 'end'" color="#fff" size="48">{{
              mdiAlertCircleOutline
            }}</v-icon>
          </div>
        </v-col>
        <v-col class="d-flex justify-center" cols="12" md="8" lg="8">
          <div
            class="time-item"
            :class="{ 'mobile-time': $vuetify.breakpoint.smAndDown }"
          >
            <div class="num">{{ hours | formatNum }}</div>
            <div>HOURS</div>
          </div>
          <div
            class="time-item"
            :class="{ 'mobile-time': $vuetify.breakpoint.smAndDown }"
          >
            <div class="num">{{ minutes | formatNum }}</div>
            <div>MINUTES</div>
          </div>
          <div
            class="time-item"
            :class="{ 'mobile-time': $vuetify.breakpoint.smAndDown }"
          >
            <div class="num">{{ seconds | formatNum }}</div>
            <div>SECONDS</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mdiAlertCircleOutline } from '@mdi/js'

export default {
  filters: {
    formatNum(num) {
      if (num < 10) {
        return '0' + num
      } else {
        return num
      }
    },
  },
  props: {
    type: { type: String, default: undefined },
  },
  data() {
    return {
      mdiAlertCircleOutline,
      timestamp: 0,
      startTime: 1631664000000,
      endTime: 1631664000000,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  },
  mounted() {
    this.getTimestamp()
  },
  methods: {
    async getTimestamp() {
      try {
        const { data } = await this.$axios.get('/dapps/timestamp')
        this.timestamp = data.data
        this.setTime()
      } catch (error) {
        //
      }
    },
    setTime(timestamp) {
      let timer = 0
      if (this.type === 'start') {
        timer = this.startTime - this.timestamp
      } else {
        timer = this.endTime - this.timestamp
      }
      setInterval(() => {
        if (timer >= 0) {
          this.hours = Math.floor(timer / (1000 * 60 * 60))
          this.minutes = Math.floor((timer / (1000 * 60)) % 60)
          this.seconds = Math.floor((timer / 1000) % 60)
          timer -= 1000
        }
      }, 1000)
    },
  },
}
</script>
<style scoped lang="scss">
.main {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}
.time-item {
  background-image: url('~/assets/imgs/firstlanding/time-bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  text-align: center;
  padding: 30px 40px;
  margin-right: 32px;
  min-width: 160px;
  div {
    color: #8287ac;
    font-size: 18px;
    font-weight: bold;
  }
  .num {
    font-size: 48px;
    color: #fff;
  }
}
.time-item:last-child {
  margin-right: 0;
}
.mobile-time {
  padding: 6px 12px;
  margin-right: 12px;
  min-width: 80px;
}
.mobile-time:last-child {
  margin-right: 12px;
}
</style>
