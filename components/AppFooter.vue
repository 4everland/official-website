<template>
  <div id="footer" dark>
    <v-container dark class="mt-4">
      <v-row
        :class="{ 'text-center': $vuetify.breakpoint.smAndDown }"
        dark
        justify="space-between"
      >
        <v-col cols="12" md="4" lg="4" class="text-center">
          <div class="title-icon">
            <v-img
              :src="require('@/assets/imgs/index/newui/logo-new.svg')"
              width="227px"
              class="title-img"
            ></v-img>
          </div>
          <div class="join-us">
            <v-col
              v-for="link in links"
              :key="link.href"
              :cols="3"
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
                style="width: 40px"
              >
                <!-- {{ link.name }} -->
                <v-img width="40" :src="link.icon"></v-img>
              </v-btn>
            </v-col>
          </div>
        </v-col>
        <v-col cols="12" md="8" lg="8" class="text-left">
          <v-row>
            <v-col
              v-for="item in project"
              :key="item.name"
              cols="6"
              lg="3"
              md="3"
              class="d-flex flex-column"
            >
              <div class="ml-4 mb-4 text-h6 link-name">{{ item.name }}</div>
              <div v-for="link in item.list" :key="link.name">
                <v-btn
                  :to="link.to"
                  :href="link.href"
                  :target="link.target"
                  color="#98A2B3"
                  class="link-name"
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
      <!-- <v-menu offset-y>
        <template #activator="{ on, attrs }">
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
      </v-menu> -->
      <!-- <v-menu v-for="(items, index) in project" :key="index" offset-y>
        <template #activator="{ on, attrs }">
          <v-btn outlined tile class="btn-item" v-bind="attrs" v-on="on"
            >{{ items.name }}
            <v-icon right dark size="12"> mdi-plus </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index1) in items.list" :key="index1">
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
      </v-menu> -->
    </v-container>
    <v-container class="copy">
      <v-divider color="#474747" />
      <div
        class="copy-right"
        :class="{ 'text-center': $vuetify.breakpoint.smAndDown }"
      >
        &copy; 2024 4everland.org. All rights reserved.
      </div>
    </v-container>
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
          name: 'Telegram',
          icon: require('@/assets/imgs/footer/telegram.svg'),
          href: 'https://t.me/org_4everland',
        },
        {
          name: 'Discord',
          icon: require('@/assets/imgs/footer/discord.svg'),
          href: 'https://discord.com/invite/Cun2VpsdjF',
        },
        {
          name: 'Twitter',
          icon: require('@/assets/imgs/footer/twitter.svg'),
          href: 'https://twitter.com/4everland_org',
        },
        {
          name: 'Youtube',
          icon: require('@/assets/imgs/footer/youtube.svg'),
          href: 'https://www.youtube.com/channel/UC9gDft8jnTt_1yrtLfsUq0w',
        },
        {
          name: 'GitHub',
          icon: require('@/assets/imgs/footer/github.svg'),
          href: 'https://github.com/4everland',
        },

        {
          name: 'Reddit',
          icon: require('@/assets/imgs/footer/reddit.svg'),
          href: 'https://www.reddit.com/r/4everland/',
        },
        {
          name: 'Medium',
          icon: require('@/assets/imgs/footer/medium.svg'),
          href: 'https://4everland.medium.com/',
        },
        {
          name: 'Email',
          icon: require('@/assets/imgs/footer/email.svg'),
          href: 'mailto:contact@4everland.org',
        },
      ],
      project: [
        {
          name: 'Products',
          list: [
            {
              name: 'DWeb Hosting',
              href: 'https://docs.4everland.org/hositng/what-is-hosting',
              target: '_blank',
            },
            {
              name: 'Storage',
              href: 'https://docs.4everland.org/storage/bucket',
              target: '_blank',
            },
            {
              name: 'Gateway',
              href: 'https://docs.4everland.org/gateways/ipfs-gateway',
              target: '_blank',
            },
            {
              name: 'RPC',
              href: 'https://docs.4everland.org/rpc/guides',
              target: '_blank',
            },
            {
              name: 'RaaS',
              href: 'https://docs.4everland.org/raas-beta/whats-rollups',
              target: '_blank',
            },
            {
              name: 'AI Solution',
              href: 'https://docs.4everland.org/ai/ai-rpc',
              target: '_blank',
            },
          ],
        },
        {
          name: 'Resources',
          list: [
            {
              name: 'Blogs',
              href: 'https://medium.com/4everland',
              target: '_blank',
            },
            {
              name: 'Brand Resources',
              href: 'https://www.4everland.org/logo.zip',
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
              name: 'Template a thon',
              href: 'https://template.4everland.org/#/',
              target: '_blank',
            },
            {
              name: 'Documentation',
              href: 'https://docs.4everland.org/',
              target: '_blank',
            },
            {
              name: '4EVER Network',
              href: 'https://link.medium.com/N8xx2jigdMb',
              target: '_blank',
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
  background-color: #000;
}
.container {
  max-width: 1440px;
  margin-left: 68px !important;
  margin-right: 68px !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
}
.link-name {
  font-family: Inter, Arial, sans-serif !important;
}
.footer-title {
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
.title-icon {
  margin-bottom: 64px;
}
.v-btn {
  text-transform: none !important;
}
.copy-right {
  padding: 30px 80px;
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
.text-h6 {
  color: #fff;
}

@media (max-width: 960px) {
  .container {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
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
  .join-us {
    max-width: 320px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  .title-img {
    margin: 0 auto;
  }
  .title-icon {
    margin-bottom: 48px;
  }
}
@media (min-width: 1440px) {
  .container {
    max-width: 1320px !important;
    margin: 0 auto !important;
  }
}
</style>
