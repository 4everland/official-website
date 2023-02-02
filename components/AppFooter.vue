<template>
  <div id="footer">
    <v-container class="hidden-sm-and-down mt-8">
      <v-row :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
        <v-col cols="12" md="4" lg="4">
          <div class="ml-4 mb-4 text-h6">Join us</div>
          <div class="join-us">
            <v-col
              :cols="3"
              v-for="link in links"
              :key="link.href"
              class="text-center"
              style="margin: -10px 0"
            >
              <v-btn
                :href="link.href"
                target="_blank"
                plain
                text
                icon
                nofollow
                class="text-center"
                style="width: 24px"
              >
                <!-- {{ link.name }} -->
                <v-img width="24" :src="link.icon"></v-img>
              </v-btn>
            </v-col>
          </div>
        </v-col>
        <v-col cols="12" md="8" lg="8">
          <v-row>
            <v-col
              v-for="item in project"
              :key="item.name"
              cols="6"
              lg="3"
              md="3"
              class="d-flex flex-column"
            >
              <div class="ml-4 mb-4 text-h6">{{ item.name }}</div>
              <div v-for="link in item.list" :key="link.name">
                <v-btn
                  :to="link.to"
                  :href="link.href"
                  :target="link.target"
                  color="#B1B6BB"
                  plain
                  text
                  nofollow
                >
                  {{ link.name }}
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="btn-box hidden-md-and-up">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn outlined tile class="btn-item" v-bind="attrs" v-on="on"
            >Join us
            <v-icon right dark size="12"> mdi-plus </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in links" :key="index">
            <v-list-item-title>
              <v-btn
                :to="item.to"
                :href="item.href"
                :target="item.target"
                plain
                text
                nofollow
              >
                {{ item.name }}
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y v-for="(items, index) in project" :key="index">
        <template v-slot:activator="{ on, attrs }">
          <v-btn outlined tile class="btn-item" v-bind="attrs" v-on="on"
            >{{ items.name }}
            <v-icon right dark size="12"> mdi-plus </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items.list" :key="index">
            <v-list-item-title>
              <v-btn
                :to="item.to"
                :href="item.href"
                :target="item.target"
                plain
                text
                nofollow
              >
                {{ item.name }}
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
    <v-container>
      <div
        class="copy-right"
        :class="{ 'text-center': $vuetify.breakpoint.smAndDown }"
      >
        &copy; 2023 4EVERLAND, Inc
      </div>
    </v-container>
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
export default {
  data() {
    return {
      email: '',
      loading: false,
      disabled: true,
      subSuccessShow: false,
      subPendingShow: false,
      mdiEmoticonHappyOutline,
      links: [
        {
          name: 'GitHub',
          icon: require('@/assets/imgs/footer/github.png'),
          href: 'https://github.com/4everland',
        },
        {
          name: 'Twitter',
          icon: require('@/assets/imgs/footer/twitter.png'),
          href: 'https://twitter.com/4everland_org',
        },
        {
          name: 'Telegram',
          icon: require('@/assets/imgs/footer/telegram.png'),
          href: 'https://t.me/org_4everland',
        },
        {
          name: 'Reddit',
          icon: require('@/assets/imgs/footer/reddit.png'),
          href: 'https://www.reddit.com/r/4everland/',
        },
        {
          name: 'Medium',
          icon: require('@/assets/imgs/footer/medium.png'),
          href: 'https://4everland.medium.com/',
        },
        {
          name: 'Discord',
          icon: require('@/assets/imgs/footer/discord.png'),
          href: 'http://discord.gg/4everland',
        },
        {
          name: 'Email',
          icon: require('@/assets/imgs/footer/email.png'),
          href: 'mailto:contact@4everland.org',
        },
        {
          name: 'Youtube',
          icon: require('@/assets/imgs/footer/youtube.png'),
          href: 'https://www.youtube.com/channel/UC9gDft8jnTt_1yrtLfsUq0w',
        },
      ],
      project: [
        {
          name: 'Products',
          list: [
            {
              name: 'Hosting',
              to: '/hosting',
            },
            {
              name: 'Bucket',
              to: '/bucket',
            },
            {
              name: 'ENS Domain',
              to: '/ens',
            },
            {
              name: 'SNS Domain',
              to: '/sns',
            },
            {
              name: 'IPFS Gateway',
              to: '/ipfs',
            },
          ],
        },
        {
          name: 'Resources',
          list: [
            {
              name: 'Documentation',
              href: 'https://docs.4everland.org/',
              target: '_blank',
            },
            {
              name: 'Litepaper',
              href: 'https://static.4everland.org/4everland-litepaper.pdf',
              target: '_blank',
            },
            {
              name: 'Blogs',
              href: 'https://medium.com/4everland',
              target: '_blank',
            },
            {
              name: 'Brand Resources',
              href: '/logo.zip',
              target: '_blank',
            },
            {
              name: 'Status',
              href: 'https://4everland.statuspage.io/',
              target: '_blank',
            },
          ],
        },
        {
          name: 'Developers',
          list: [
            {
              name: 'Dashboard',
              href: 'https://dashboard.4everland.org/',
              target: '_blank',
            },
            // {
            //   name: 'Bug Bounty',
            //   href: 'https://hosting.4everland.org/#/bug-bounty',
            //   target: '_blank',
            // },
            {
              name: 'Grants',
              to: '/grants',
            },
          ],
        },
        {
          name: 'Legal',
          list: [
            {
              name: 'Term of Service',
              to: '/term-of-service',
            },
            {
              name: 'Privacy Policy',
              to: '/privacy-policy',
            },
          ],
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
          if (resp.data.status === 'success' && resp.data.pending) {
            this.subPendingShow = true
          } else if (resp.data.status === 'success') {
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
