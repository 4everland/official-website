<template>
  <div class="countdown" v-show="this.timestamp >= 1633305600000">
    <v-container class="py-12">
      <v-row v-if="timestamp" class="main">
        <v-col class="d-flex align-center justify-center" cols="12">
          <div class="text-h4">
            EVENT {{ type == 'start' ? 'STARTS' : 'ENDS' }} IN
            <v-tooltip top max-width="400">
              <template #activator="{ on, attrs }">
                <v-icon
                  v-if="type == 'end'"
                  color="#fff"
                  size="24"
                  v-bind="attrs"
                  v-on="on"
                  >{{ mdiAlertCircleOutline }}</v-icon
                >
              </template>
              <span
                >The event ends randomized between October 7th and 14th UTC,
                please participate in advance.</span
              >
            </v-tooltip>
          </div>
        </v-col>
        <v-col class="d-flex justify-center" cols="12">
          <div
            class="time-item"
            :class="{ 'mobile-time': $vuetify.breakpoint.smAndDown }"
          >
            <div class="num">{{ days | formatNum }}</div>
            <div>DAYS</div>
          </div>
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
      endTime: 1634169600000,
      days: 0,
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
    setTime() {
      let timer = 0
      if (this.type === 'start') {
        timer = this.startTime - this.timestamp
      } else {
        timer = this.endTime - this.timestamp
      }
      if (timer >= 0) {
        this.days = Math.floor(timer / (1000 * 60 * 60 * 24))
        this.hours = Math.floor((timer / (1000 * 60 * 60)) % 24)
        this.minutes = Math.floor((timer / (1000 * 60)) % 60)
        this.seconds = Math.floor((timer / 1000) % 60)
        timer -= 1000
      }
      setInterval(() => {
        if (timer >= 0) {
          this.days = Math.floor(timer / (1000 * 60 * 60 * 24))
          this.hours = Math.floor((timer / (1000 * 60 * 60)) % 24)
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
  div {
    font-size: 12px;
  }
}
.mobile-time:last-child {
  margin-right: 0;
}
</style>
