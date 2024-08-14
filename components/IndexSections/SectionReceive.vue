<template>
  <v-container fluid class="main-container">
    <v-divider color="#474747" />
    <v-row justify="center" align="center" class="text-left mt-6 mb-6">
      <v-col cols="12" sm="6">
        <h6 class="white--text text-h6 font-weight-bold">
          Sign up for our newsletter
        </h6>
        <p class="white--text mt-4">
          Join 300,000+ builders and stay up to date with our latest updates and
          news.
        </p>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex justify-end">
        <div class="email-input pl-4 pr-2">
          <div>
            <v-icon color="#FFF">mdi-email-outline </v-icon>
          </div>
          <v-col class="subscribe-btn">
            <v-text-field
              v-model="email"
              dark
              label="Your Email"
              variant="solo"
              hide-details
              single-line
              type="email"
              class="white-label"
            ></v-text-field>
            <v-btn
              dark
              color="#6172F3"
              :loading="loading"
              :disabled="disabled"
              @click="subscribe"
            >
              Subscribe
            </v-btn>
          </v-col>
        </div>
      </v-col>
    </v-row>
    <v-divider color="#474747" />
  </v-container>
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
.main-container {
  padding: 64px 80px 20px 80px;
  max-width: 100%;
}
.email-input {
  width: 80%;
  height: 56px;
  line-height: 56px;
  border: 1px solid #6172f3;
  border-radius: 40px;
  display: flex;
  align-items: center;
}
.v-text-field {
  margin-top: 0 !important;
  padding: 0 !important;
}
.v-btn {
  color: #fff;
  border-radius: 20px;
}
.white-label .v-label {
  color: white !important;
}
.subscribe-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/deep/ .white-label input {
  border: none !important;
}
/deep/ .white-label .v-input__slot::before {
  border: none !important;
}

.white-label input:hover,
.white-label input:focus,
.white-label input:active {
  outline: none;
  border: none !important;
}

/deep/ .v-text-field > .v-input__control > .v-input__slot::after {
  transition: none;
  border: none !important;
}
/deep/
  .v-text-field.v-input--is-focused
  > .v-input__control
  > .v-input__slot::after {
  border: none !important;
}
/deep/.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover)
  .v-btn__content {
  opacity: 1;
}
@media (max-width: 960px) {
  .email-input {
    width: 100%;
  }

  .main-container {
    padding: 64px 20px;
  }
}
@media (min-width: 1440px) {
  .main-container {
    margin: 0 auto;
    width: 1440px;
  }
}
</style>
