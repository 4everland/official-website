<template>
  <div>
    <div class="d-flex justify-center">
      <Logo class="mt-16 mb-12" :width="280" />
    </div>
    <v-row justify="center">
      <v-col md="5" class="d-flex justify-center align-stretch">
        <div
          class="subscribe-input"
          :style="{ height: `${$vuetify.breakpoint.smAndDown ? 60 : 65}px` }"
          :class="{
            disabled: disabled,
            'mx-16': !$vuetify.breakpoint.mdAndDown,
            'mx-4': $vuetify.breakpoint.mdAndDown,
          }"
        >
          <input v-model="email" placeholder="Enter Your Email" type="email" />
          <v-btn
            :loading="loading"
            :disabled="disabled"
            color="transparent"
            style="color: #fff !important"
            class="btn-subscribe"
            @click="subscribe"
          >
            Subscribe
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-12">
      <v-col md="6" class="d-flex justify-center media-links">
        <v-btn
          v-for="link in links"
          :key="link.link"
          :href="link.link"
          text
          icon
          rounded
          class="mx-4"
          target="_blank"
          nofollow
        >
          <v-icon size="24">{{ link.icon }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <div class="mb-12 text-center">
      <nuxt-link to="/term-of-use" class="link grey--text"
        >Terms of Use</nuxt-link
      >
      <nuxt-link to="/privacy-policy" class="link ml-8 grey--text"
        >Privacy Policy</nuxt-link
      >
    </div>
    <v-footer>
      <v-container class="text-caption text--secondary">
        &copy; 2021 4EVERLAND FOUNDATION LTD
      </v-container>
    </v-footer>
    <div v-show="subSuccessShow" class="sub-success">
      <v-icon color="#2B85FB" size="64">{{ mdiEmoticonHappyOutline }}</v-icon>
      <span class="ml-4">Thank you for subscription.</span>
    </div>
  </div>
</template>
<script>
import {
  mdiGithub,
  mdiTwitter,
  mdiTelegram,
  mdiReddit,
  mdiDiscord,
  mdiEmail,
  mdiEmoticonHappyOutline,
} from '@mdi/js'
export default {
  data() {
    return {
      email: '',
      loading: false,
      disabled: true,
      subSuccessShow: false,
      mdiEmoticonHappyOutline,
      links: [
        {
          icon: mdiGithub,
          link: 'https://github.com/4everland',
        },
        {
          icon: mdiTwitter,
          link: 'https://twitter.com/4everland_org',
        },
        {
          icon: mdiTelegram,
          link: 'https://t.me/org_4everland',
        },
        {
          icon: mdiReddit,
          link: 'https://www.reddit.com/user/4everland_org/',
        },
        {
          icon: 'M12,0 C5.3671875,0 0,5.3671875 0,12 C0,18.6328125 5.3671875,24 12,24 C18.6328125,24 24,18.6328125 24,12 C24,5.3671875 18.6328125,0 12,0 Z M9.2953125,17.7140625 L9.2953125,17.7140625 L9.2953125,17.7140625 L5.1046875,15.6609375 C5.0625,15.61875 4.9734375,15.5296875 4.9734375,15.440625 L4.9734375,5.934375 L9.2484375,8.071875 L9.2484375,17.7140625 L9.2953125,17.7140625 Z M9.8203125,13.1765625 L9.8203125,8.859375 L13.659375,15.0984375 L9.8203125,13.1765625 Z M11.521875,10.6453125 L14.4890625,5.8875 L18.8109375,8.0671875 L14.3578125,15.2671875 L11.521875,10.6453125 Z M18.9375,17.7140625 L18.9375,17.7140625 L18.9375,17.7140625 L14.746875,15.6609375 L18.9375,8.859375 L18.9375,17.7140625 Z',
          link: 'https://4everland.medium.com/',
        },
        {
          icon: mdiDiscord,
          link: 'https://discord.com/invite/sxtHDvvpuT',
        },
        {
          icon: mdiEmail,
          link: 'mailto:contact@4everland.org',
        },
      ],
    }
  },
  watch: {
    email(newVal) {
      this.disabled =
        !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(newVal)
    },
  },
  methods: {
    async subscribe() {
      this.loading = true
      try {
        const resp = await this.$axios.get(
          `https://mailsubscribe.4everland.org/?email=${this.email}`
        )
        // eslint-disable-next-line no-console
        // console.log(resp.data)
        if (resp.data.status) {
          if (resp.data.status === 'success') {
            // this.$dialog.message.success('Subscribed', {
            //   position: 'top',
            //   timeout: 2500,
            //   actions: [
            //     {
            //       text: 'OK',
            //       color: 'green accent-4',
            //       key: true,
            //     },
            //   ],
            // })
            this.subSuccessShow = true
            setTimeout(() => {
              this.subSuccessShow = false
            }, 2500)
          } else {
            this.$dialog.error({
              text: resp.data.detail?.title || 'Subscribe failed',
              title: 'Error',
            })
          }
        } else {
          this.$dialog.error({
            text: 'Subscribe failed',
            title: 'Error',
          })
        }
      } catch (ex) {
        this.$dialog.error({
          text: ex.message,
          title: 'Error',
        })
      } finally {
        this.loading = false
      }
    },
    emailChange() {
      this.disabled =
        !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email)
    },
  },
}
</script>
<style scoped>
.subscribe-input {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: #2b85fb;
  height: 64px;
  border-radius: 10px;
  overflow: hidden;
  max-width: 600px;
  flex: 1;
}
.subscribe-input.disabled {
  background-color: #c1c1c1 !important;
}
.subscribe-input input {
  background-color: #fff;
  border-radius: 8px;
  font-size: 16px;
  padding-left: 16px;
  min-width: 150px;
  flex: auto;
}

.subscribe-input input:hover,
.subscribe-input input:focus {
  outline: none;
}
.btn-subscribe {
  height: 100% !important;
  color: #fff !important;
  width: 120px;
  justify-content: center;
  padding: 0;
  align-content: center;
}
.media-links {
  flex-wrap: wrap;
}
.link {
  text-decoration: none;
  font-size: 14px;
}
.link:hover {
  text-decoration: underline;
}
.sub-success {
  width: 600px;
  height: 200px;
  line-height: 200px;
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
}
</style>
