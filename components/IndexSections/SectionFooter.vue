<template>
  <div id="footer">
    <div class="black py-16">
      <v-container class="align-center">
        <v-row :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
          <v-col cols="12">
            <div class="footer-titele font-weight-black">
              Stay up to date on developer updates from 4EVERLAND
            </div>
            <div class="subscribe-input mt-12">
              <!-- <div class="emain-title">E-mail</div> -->
              <input
                v-model="email"
                class="enter-email"
                type="email"
                placeholder="E-mail"
              />
              <v-btn
                :loading="loading"
                :disabled="disabled"
                class="text-body2 white--text"
                color="#000"
                tile
                max-width="150"
                height="24"
                @click="subscribe"
                >Subscribe</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div v-show="subSuccessShow" class="sub-success">
      <v-icon color="#2B85FB" size="64">{{ mdiEmoticonHappyOutline }}</v-icon>
      <span class="ml-4">Thank you for subscription.</span>
    </div>
    <div v-show="subPendingShow" class="sub-success">
      <v-icon color="#2B85FB" size="64">{{ mdiEmoticonHappyOutline }}</v-icon>
      <span class="ml-4"
        >We have sent a subscription confirmation email. To complete the
        subscription process, please click the confirmation link.</span
      >
      <div style="flex-basis: 100%">
        <v-btn
          color="#2b85fb"
          class="white--text"
          @click="subPendingShow = false"
          >ok</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mdiEmoticonHappyOutline } from '@mdi/js'
const Reg =
  // eslint-disable-next-line
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
  data() {
    return {
      email: '',
      loading: false,
      disabled: true,
      subSuccessShow: false,
      subPendingShow: false,
      mdiEmoticonHappyOutline,
    }
  },
  watch: {
    email(newVal) {
      this.disabled = !Reg.test(newVal)
    },
  },
  methods: {
    async subscribe() {
      this.loading = true
      try {
        const resp = await this.$axios.post(
          `https://auth.foreverland.xyz/events/email-subscription?email=${this.email}`
        )
        // eslint-disable-next-line no-console
        if (resp.data.code === 200) {
          this.subSuccessShow = true
          setTimeout(() => {
            this.subSuccessShow = false
          }, 2500)
        } else if (resp.data.code === 400) {
          this.$dialog.error({
            text: 'The email has already subscribed.',
            title: 'Error',
          })
        } else {
          this.$dialog.error({
            text: 'Subscription failed, please try again later.',
            title: 'Error',
          })
        }
      } catch (err) {
        this.$dialog.error({
          text: err.message,
          title: 'Error',
        })
      } finally {
        this.loading = false
      }
    },
    emailChange() {
      this.disabled = !Reg.test(this.email)
    },
  },
}
</script>
<style scoped>
#footer {
  padding-top: 0;
}
.footer-titele {
  font-size: 23px;
  color: #fff;
  text-align: center;
}
.footer-text {
  font-size: 18px;
  color: #b1b6bb;
}
.footer-text2 {
  max-width: 460px;
  font-size: 16px;
  color: #b1b6bb;
}
.subscribe-input {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  background-color: #fff;
  width: 100%;
  max-width: 900px;
  height: 76px;
  margin: 0 auto;
}
.emain-title {
  font-size: 18px;
  font-weight: bold;
}
.enter-email {
  width: 100%;
}
.subscribe-input.disabled {
  background-color: #c1c1c1 !important;
}

input::-webkit-input-placeholder {
  color: #000;
  font-size: 18px;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #000;
  font-size: 18px;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #000;
  font-size: 18px;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #000;
  font-size: 18px;
  font-weight: bold;
}
.subscribe-input input {
  color: #000;
  font-size: 18px;
  max-width: 600px;
  height: 100%;
  flex: auto;
}
.subscribe-input input:hover,
.subscribe-input input:focus {
  outline: none;
}
.join-us {
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
}
.v-btn {
  text-transform: none !important;
}
.copy-right {
  padding: 30px 0;
  text-align: right;
  color: #b1b6bb;
}
.sub-success {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 600px;
  min-height: 240px;
  background: #fff;
  border: 2px solid #2b85fb;
  border-radius: 10px;
  color: #666;
  font-size: 18px;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 120px;
  margin: auto;
  padding: 20px;
}
/deep/.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover)
  .v-btn__content {
  opacity: 1;
}

@media (max-width: 960px) {
  .subscribe-input {
    padding: 0 14px;
    height: 44px;
  }
  .subscribe-input input {
    width: 50px;
    font-size: 14px;
    padding: 0 14px;
  }
  .btn-box {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .btn-item {
    width: 100px;
    height: 30px;
    border-radius: 4px;
    font-size: 12px;
    margin: 10px;
  }
}
</style>
