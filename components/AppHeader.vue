<template>
  <div id="header">
    <v-app-bar
      fixed
      app
      flat
      elevate-on-scroll
      :elevation="4"
      color="#fff"
      height="120"
    >
      <div style="width: 100%; padding-top: 40px">
        <app-top-tips />
        <v-container class="d-flex align-center" style="height: 80px">
          <v-btn text color="transparent" to="/" class="always-active mr-8">
            <logo />
          </v-btn>
          <v-menu
            v-for="item in links"
            :key="item.text"
            bottom
            rounded="0"
            transition="slide-y-transition"
            offset-y
            position
            z-index="99"
          >
            <template #activator="{ on, attrs }">
              <v-btn
                class="hidden-sm-and-down nav-btn text-subtitle-1"
                plain
                nuxt
                replace
                :height="80"
                :to="item.link"
                :href="item.href"
                :target="item.target"
                :ripple="false"
                v-bind="attrs"
                v-on="on"
              >
                <span class="nav-font">
                  {{ item.text }}
                  <v-icon v-if="item.childs">{{ mdiChevronDown }}</v-icon>
                  <v-img
                    v-if="item.icon"
                    class="hot-icon"
                    max-height="16"
                    max-width="16"
                    :src="item.icon"
                  ></v-img>
                </span>
              </v-btn>
            </template>
            <div v-if="item.childs" class="white menu-down">
              <v-container>
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
                      plain
                      nuxt
                      :height="60"
                      replace
                      :to="child.link"
                      :href="child.href"
                      :target="child.target"
                      :ripple="false"
                    >
                      <div class="d-flex align-center">
                        <v-img
                          max-height="34"
                          max-width="34"
                          :src="child.icon"
                        ></v-img>
                        <div class="ml-3 nav-font">
                          <div
                            class="nav-font text-subtitle-1 font-weight-bold"
                          >
                            {{ child.text }}
                          </div>
                          <div
                            class="nav-font caption grey-text text-lighten-1 tips"
                          >
                            {{ child.tips }}
                          </div>
                        </div>
                      </div>
                    </v-btn>
                  </v-col>
                </v-row>
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
            class="hidden-sm-and-down black white--text font-weight-bold"
            outlined
            tile
            color="#000"
          >
            Login
            <v-icon class="ml-2">{{ mdiChevronRight }}</v-icon>
          </v-btn>
        </v-container>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="showDrawer" right temporary fixed>
      <v-list>
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
                <span>
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
              text: 'Hosting',
              tips: 'Host websites and Dapps on IPFS, Arweave, Dfinity, and BNB Greenfield',
              icon: require('@/assets/imgs/nav/hosting.png'),
              link: '/hosting',
            },
            {
              text: 'Bucket',
              tips: 'Upload, pin files to IPFS and Arweave',
              icon: require('@/assets/imgs/nav/bucket.png'),
              link: '/bucket',
            },
            // {
            //   text: 'Explorer',
            //   tips: 'View statistics, pools, nodes and status of the network',
            //   icon: require('@/assets/imgs/nav/explorer.png'),
            //   href: 'https://explorer.4everland.org',
            //   target: '_blank',
            // },
            {
              text: 'IPFS Gateway',
              tips: 'Global distributed nodes for global acceleration and automatic allocation.',
              icon: require('@/assets/imgs/nav/IPFS Gateway.png'),
              link: '/ipfs',
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
              tips: 'Smoothly interact with Web3 across multiple chains',
              icon: require('@/assets/imgs/nav/rpc.png'),
              href: 'https://docs.4everland.org/rpc-beta/guides',
              target: '_blank',
            },
            {
              text: 'RaaS',
              tips: 'Deploy Layer2 seamlessly without code',
              icon: require('@/assets/imgs/nav/rollup.png'),
              href: 'https://docs.4everland.org/raas-beta/whats-rollups',
              target: '_blank',
            },
          ],
        },
        {
          text: 'Discover',
          link: '',
          childs: [
            {
              text: 'Universe',
              tips: 'Projects built on 4EVERLAND or Web 3.0 tech',
              icon: require('@/assets/imgs/nav/Universe.png'),
              link: '/universe',
            },
            {
              text: 'Docs',
              tips: 'Read the 4EVERLAND docs and get started on 4EVERLAND',
              icon: require('@/assets/imgs/nav/Docs.png'),
              href: 'https://docs.4everland.org/',
              target: '_blank',
            },
            {
              text: 'Litepaper',
              tips: 'Read the 4EVERLAND litepaper and discover the scope of the project',
              icon: require('@/assets/imgs/nav/Litepaper.png'),
              href: 'https://static.4everland.org/4everland-litepaper.pdf',
              target: '_blank',
            },
            {
              text: 'Grants',
              tips: 'Contribute to 4EVERLAND and get rewarded',
              icon: require('@/assets/imgs/nav/Grants.png'),
              link: '/grants',
            },
            // {
            //   text: 'Bug Bounty',
            //   tips: 'Get rewarded for finding bugs and exploits',
            //   icon: require('@/assets/imgs/nav/Bug Bounty.png'),
            //   href: 'https://dashboard.4everland.org/#/bug-bounty',
            //   target: '_blank',
            // },
            {
              text: 'Dev Forum',
              tips: 'Join the forum and share your experience with other developers',
              icon: require('@/assets/imgs/nav/Dev Forum.png'),
              href: 'https://www.reddit.com/r/4everland/',
              target: '_blank',
            },
            {
              text: 'Template-a-thon 🔥',
              tips: 'Join the Template-a-thon,  Share the 50,000,000 T-4EVER grant!',
              icon: require('@/assets/imgs/nav/Template-a-thon.png'),
              href: 'https://template.4everland.org/#/',
              target: '_blank',
            },
          ],
        },
        {
          text: 'Blogs',
          href: 'https://medium.com/4everland',
          target: '_blank',
        },
        {
          text: 'Pricing',
          href: 'https://docs.4everland.org/get-started/billing-and-pricing/pricing-model',
          target: '_blank',
        },
        {
          text: 'Community',
          href: 'http://discord.gg/4everland',
          target: '_blank',
        },
        //  {
        //    text: 'First Sowing',
        //    href: 'https://firstsowing.4everland.org/',
        //    target: '_blank',
        //    icon: require('@/assets/imgs/nav/icon_rocket_24x24.png'),
        //  },
        // {
        //   text: 'Unleash Arweave',
        //   href: 'https://unleashar.4everland.org/',
        //   target: '_blank',
        //   icon: require('@/assets/imgs/nav/icon_hot.svg'),
        // },
      ],
    }
  },
}
</script>
<style scoped>
#header {
  z-index: 99;
  position: relative;
}

.nav-font {
  font-family: 'Ubuntu-Blod', sans-serif !important;
  font-weight: bold;
  position: relative;
}
.hot-icon {
  position: absolute;
  right: -20px;
  top: -2px;
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
}
.menu-down {
  width: 100%;
  min-height: 180px;
}
.tips {
  padding-right: 10px;
}
.v-menu__content {
  max-width: 100%;
  width: 100%;
  top: 82px;
  left: 0;
}
</style>
