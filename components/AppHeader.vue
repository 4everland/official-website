<template>
  <div id="header">
    <v-app-bar fixed hide-on-scroll app flat dark class="app-bar">
      <div
        style="width: 100%; padding-top: 0"
        class="headerContainer d-flex align-center"
      >
        <v-container
          class="d-flex align-center"
          style="height: 22px; max-width: 100%"
        >
          <v-btn text color="transparent" to="/" class="always-active">
            <v-img
              :src="require('@/assets/imgs/index/newui/logo-new.svg')"
            ></v-img>
          </v-btn>
          <v-menu
            v-for="item in links"
            :key="item.text"
            bottom
            dark
            rounded="0"
            transition="slide-y-transition"
            offset-y
            position
            z-index="99"
            open-on-hover
          >
            <template #activator="{ on, attrs }">
              <v-btn
                class="hidden-sm-and-down nav-btn text-subtitle-1"
                :class="`btn-${item.id}`"
                plain
                nuxt
                replace
                :height="48"
                :to="item.link"
                :href="item.href"
                :target="item.target"
                :ripple="false"
                v-bind="attrs"
                v-on="on"
              >
                <span class="nav-font menu_text">
                  {{ item.text }}
                  <v-icon v-if="item.childs">{{ mdiChevronDown }}</v-icon>
                  <v-img
                    v-if="item.icon"
                    class="hot-icon"
                    max-height="20"
                    max-width="20"
                    :src="item.icon"
                  ></v-img>
                </span>
              </v-btn>
            </template>
            <div
              v-if="item.childs"
              class="menu-down"
              :class="`card-${item.id}`"
            >
              <v-container>
                <v-card class="menu-card">
                  <div class="divider"></div>
                  <v-row>
                    <v-col
                      v-for="child in item.childs"
                      :key="child.text"
                      :cols="12"
                      :md="6"
                      :lg="6"
                      :xl="6"
                    >
                      <v-btn
                        class="nav_sub_btn d-flex justify-left"
                        nuxt
                        :height="80"
                        :width="'100%'"
                        replace
                        :to="child.link"
                        :href="child.href"
                        :target="child.target"
                        :ripple="false"
                      >
                        <div class="d-flex align-center text-left">
                          <v-img
                            class="mr-2 boost-icon"
                            max-height="34"
                            max-width="34"
                            :src="child.icon"
                          ></v-img>
                          <div class="nav-font">
                            <div
                              class="nav-font text-subtitle-1 font-weight-bold"
                            >
                              {{ child.text }}
                            </div>
                            <div
                              class="nav-font text-lighten-1 caption grey-text tips"
                            >
                              {{ child.tips }}
                            </div>
                          </div>
                        </div>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </v-container>
            </div>
            <!-- <v-list v-if="item.childs">
            <v-list-item v-for="child in item.childs" :key="child.text">
              <v-btn
                class="hidden-sm-and-down nav-btn"
                plain
                nuxt
                :to="child.link"
                :href="child.href"
                :target="child.target"
                :ripple="false"
              >
                <span>
                  {{ child.text }}
                </span>
              </v-btn>
            </v-list-item>
          </v-list> -->
          </v-menu>
          <v-spacer />
          <div class="d-flex align-center">
            <v-btn
              href="https://t.me/org_4everland"
              target="_blank"
              plain
              text
              icon
              nofollow
              class="text-center mr-1"
              style="width: 20px"
            >
              <v-img
                width="20"
                :src="require('@/assets/imgs/footer/telegram-header.svg')"
              ></v-img>
            </v-btn>
            <v-btn
              href="https://twitter.com/4everland_org"
              target="_blank"
              plain
              text
              icon
              nofollow
              class="text-center"
              style="width: 32px"
            >
              <v-img
                width="32"
                :src="require('@/assets/imgs/footer/twitter-header.svg')"
              ></v-img>
            </v-btn>
            <v-btn
              href="https://discord.com/invite/Cun2VpsdjF"
              target="_blank"
              plain
              text
              icon
              nofollow
              class="text-center header-btn"
              style="width: 32px"
            >
              <v-img
                width="32"
                :src="require('@/assets/imgs/footer/discord-header.svg')"
              ></v-img>
            </v-btn>
            <div class="d-flex align-center">
              <v-btn
                class="hidden-md-and-up"
                text
                icon
                @click.stop="showDrawer = !showDrawer"
              >
                <v-icon>{{ mdiMenu }}</v-icon>
              </v-btn>
              <v-btn
                :href="loginUrl"
                target="_blank"
                class="header-menu-start hidden-sm-and-down font-weight-bold"
                rounded
                color="#000"
              >
                Get Started
              </v-btn>
            </div>
          </div>
        </v-container>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="showDrawer" right temporary fixed>
      <v-list dark>
        <template v-for="item in links">
          <v-list-group v-if="item.childs" :key="item.text" no-action>
            <template #activator>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </template>
            <v-list-item
              v-for="child in item.childs"
              :key="child.text"
              nuxt
              :to="child.link"
              :href="child.href"
              :target="child.target"
            >
              <v-list-item-title class="d-flex align-center">
                <img class="mr-2" :src="child.icon" alt="" width="20" />
                <span class="text-white">
                  {{ child.text }}
                </span>
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            nuxt
            :to="item.link"
            :href="item.href"
            :target="item.target"
          >
            <v-list-item-title>
              <span>
                {{ item.text }}
              </span>
            </v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import {
  mdiMenu,
  mdiGithub,
  mdiChevronDown,
  mdiChevronRight,
  mdiWallet,
} from '@mdi/js'
import Logo from '../components/Logo.vue'
import AppTopTips from './AppTopTips.vue'

const LOGIN_URL = process.env.LOGIN_URL
const DASHBOARD_HOST = process.env.DASHBOARD_HOST

export default {
  components: { Logo, AppTopTips },
  data() {
    return {
      lastScrollPosition: 0,
      fixed: true,
      mdiMenu,
      mdiGithub,
      mdiChevronDown,
      mdiChevronRight,
      mdiWallet,
      showDrawer: false,
      loginUrl: LOGIN_URL,
      dashboardUrl: DASHBOARD_HOST,
      links: [
        {
          text: 'Products',
          link: '',
          childs: [
            {
              text: 'DWeb Hosting',
              tips: 'Deploy your websites and DApps in seconds. ',
              icon: require('@/assets/imgs/forward/icon/hosting.svg'),
              href: 'https://docs.4everland.org/hositng/what-is-hosting',
              target: '_blank',
            },
            {
              text: 'Storage',
              tips: 'Seamlessly upload, manage, and fetch files to decentralized protocols.',
              icon: require('@/assets/imgs/forward/icon/Storage.svg'),
              href: 'https://docs.4everland.org/storage/bucket',
              target: '_blank',
            },
            // {
            //   text: 'Explorer',
            //   tips: 'View statistics, pools, nodes and status of the network',
            //   icon: require('@/assets/imgs/nav/explorer.png'),
            //   href: 'https://explorer.4everland.org',
            //   target: '_blank',
            // },
            {
              text: 'Gateway',
              tips: 'Globally distributed nodes for global acceleration and automatic resource allocation.',
              icon: require('@/assets/imgs/forward/icon/Gateway.svg'),
              href: 'https://docs.4everland.org/gateways/ipfs-gateway',
              target: '_blank',
            },
            // {
            //   text: 'ENS Domain',
            //   tips: 'Decentralize your websites or applications further with an ENS Domain',
            //   icon: require('@/assets/imgs/nav/ENS Domain.png'),
            //   link: '/ens',
            // },
            // {
            //   text: 'SNS Domain',
            //   tips: 'Decentralize your websites or applications further with an SNS Domain',
            //   icon: require('@/assets/imgs/nav/SNS Domain.png'),
            //   link: '/sns',
            // },
            {
              text: 'RPC',
              tips: 'Facilitate seamless interactions with Web3 across multiple blockchain networks.',
              icon: require('@/assets/imgs/forward/icon/RPC.svg'),
              href: 'https://docs.4everland.org/rpc-beta/guides',
              target: '_blank',
            },
            {
              text: 'RaaS',
              tips: 'Deploy Layer 2 blockchains effortlessly without any coding required.',
              icon: require('@/assets/imgs/forward/icon/RaaS.svg'),
              href: 'https://docs.4everland.org/raas-beta/whats-rollups',
              target: '_blank',
            },
            {
              text: 'AI RPC',
              tips: 'Easily get access to 100+ AI LLMs through a unified interface.',
              icon: require('@/assets/imgs/forward/icon/AI.svg'),
              href: 'https://docs.4everland.org/ai/ai-rpc',
              target: '_blank',
            },
            {
              text: '4EVER Boost',
              tips: 'Join our mining journey and maximize rewards by engaging with Storage, Computing, and Network nodes.',
              icon: require('@/assets/imgs/nav/icon_boost.png'),
              link: 'https://dashboard.4everland.org/boost',
            },
            {
              text: 'Telegram MiniApp',
              tips: 'Discover project mining opportunities and earn points/tokens on an on-stop aggregator platform.',
              icon: require('@/assets/imgs/nav/icon_tg_mini.png'),
              link: 'https://t.me/tg_4everland_bot/start',
            },
          ],
        },
        {
          text: 'Discover',
          link: '',
          childs: [
            {
              text: 'Ecosystem',
              tips: 'Projects built with 4EVERLAND or Web 3.0 tech',
              link: '/universe',
            },
            {
              text: 'Template a thon',
              tips: 'Join the Template-a-thon, and Share the 50,000,000 T4EVER grant!',
              href: 'https://template.4everland.org/#/',
              target: '_blank',
            },
            {
              text: 'Blogs',
              tips: 'Stay updated with the latest posts, feature updates, and insightful articles',
              href: 'https://medium.com/4everland',
              target: '_blank',
            },
            {
              text: '4EVER Network',
              tips: 'Integrate advanced DePINs and resources to empower developers',
              href: 'https://docs.4everland.org/depin/4ever-network',
              target: '_blank',
            },
          ],
        },
        {
          text: 'Docs',
          href: 'https://docs.4everland.org/',
          target: '_blank',
        },
        {
          text: 'Pricing',
          href: 'https://docs.4everland.org/get-started/billing-and-pricing',
          target: '_blank',
        },
        {
          text: 'Staking',
          href: 'https://dashboard.4everland.org/boost',
          icon: require('@/assets/imgs/nav/icon_staking.png'),
          target: '_blank',
        },
        {
          text: 'Airdrop',
          icon: require('@/assets/imgs/forward/airdrop.png'),
          href: 'https://dashboard.4everland.org/boost',
          target: '_blank',
        },
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      const delta = currentScrollPosition - this.lastScrollPosition
      if (delta > 0) {
        this.fixed = false
      } else {
        this.fixed = true
      }
      this.lastScrollPosition = currentScrollPosition
    },
  },
}
</script>
<style>
.v-main {
  padding: 0 !important;
}
</style>
<style scoped>
.app-bar {
  background-color: transparent;
  margin-top: 8px !important;
}
#header {
  z-index: 99;
  position: relative;
  background-color: #000;
}
.headerContainer {
  border: 1px solid #ffffff40;
  border-radius: 24px;
  height: 48px;
  background-color: #000;
}
/deep/ .theme--dark.v-app-bar.v-toolbar.v-sheet {
  background-color: transparent;
}
.divider {
  height: 3px;
  background: linear-gradient(90deg, #fda9ff -0.02%, #039cff 99.98%);
  margin: 0 20px 10px;
}
.menu_text {
  font-size: 14px;
}
.nav-font {
  font-family: Inter, Arial, sans-serif;
  font-weight: bold;
  position: relative;
  width: 240px;
}
.text-subtitle-1 {
  font-family: Inter, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
}
.caption {
  font-family: Inter, Arial, sans-serif !important;
  font-size: 12px;
  font-weight: 400;
}
.hot-icon {
  position: absolute;
  left: -24px;
  top: -1px;
}
.nav-btn {
  word-wrap: break-word;
  white-space: normal;
}
.always-active {
  opacity: 1 !important;
}
.v-btn--active,
#header .nav-btn:hover {
  color: #2a7eed;
}
/deep/ .v-btn__content {
  opacity: 1 !important;
}
/deep/ .nav-btn .v-btn__content {
  opacity: 1 !important;
  display: inline-block;
  flex: auto;
}
/deep/ .v-btn.v-btn--has-bg {
  background-color: transparent !important;
}
.menu-card {
  width: 648px;
  padding: 28px 20px;
  background: #121536 !important;
}
.card-3 .menu-card {
  width: 500px;
  padding-left: 30px;
  padding-right: 30px;
}
.card-3 .nav-font {
  width: 162px;
}
.card-3 .icon-hover {
  padding-left: 20px;
}
.btn-3 {
  margin-left: 20px;
}
.header-btn {
  margin-right: 12px;
}
.nav_sub_btn {
  width: 100%;
  flex: auto;
  box-shadow: none;
  word-wrap: break-word;
  white-space: normal;
}
.nav_sub_btn:hover {
  color: #101828;
  background-color: #fff !important;
}
.card-3 .boost-icon {
  margin-left: 20px;
}
/deep/ .nav_sub_btn .v-btn__content {
  flex: auto;
  justify-content: left;
  word-wrap: break-word;
  white-space: normal;
}
.menu-down {
  min-height: 180px;
  background: transparent !important;
}
.tips {
  padding-right: 10px;
}
.v-menu__content {
  left: 0;
  box-shadow: none;
}
/deep/ .v-btn.v-btn--has-bg.header-menu-start {
  background-color: #fff !important;
}
.header-menu-start {
  width: 126px;
  height: 32px;
  padding: 8px 24px 8px 24px;
  border-radius: 48px;
  color: #000;
  background-color: #fff !important;
}
/deep/ .header-menu-start .v-btn__content {
  color: #101828;
  font-family: Inter, Arial, sans-serif !important;
  font-weight: 400;
}
.v-navigation-drawer {
  background-color: #000 !important;
}
.text-white {
  color: #fff !important;
  opacity: 0.7;
}
@media (max-width: 960px) {
  .header-btn {
    margin-right: -8px;
  }
  .app-bar {
    margin-top: 4px !important;
  }
}
@media (min-width: 1440px) {
  .app-bar {
    margin: 0 auto;
    width: 1440px;
  }
}
</style>
