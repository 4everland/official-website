<template>
  <div id="header">
    <v-app-bar fixed app color="#FAFAFA" height="80">
      <v-container class="d-flex align-center">
        <v-btn text color="transparent" to="/" class="always-active mr-8">
          <logo />
        </v-btn>
        <v-menu
          v-for="item in links"
          :key="item.text"
          open-on-hover
          bottom
          rounded="0"
          transition="slide-y-transition"
          offset-y
          position
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
              </span>
            </v-btn>
          </template>
          <div v-if="item.childs" class="white menu-down">
            <div style="max-width: 1400px; margin: 0 auto">
              <v-row>
                <v-col v-for="child in item.childs" :key="child.text" :cols="4">
                  <v-btn
                    plain
                    nuxt
                    :height="80"
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
                        <div class="nav-font text-subtitle-1 font-weight-bold">
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
            </div>
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
          class="hidden-sm-and-down"
          outlined
          tile
          color="#452c92"
        >
          <v-icon class="mr-2">{{ mdiWallet }}</v-icon>
          Login
          <v-icon class="ml-2">{{ mdiChevronRight }}</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
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

const LOGIN_URL = process.env.LOGIN_URL
const DASHBOARD_HOST = process.env.DASHBOARD_HOST

export default {
  components: { Logo },
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
              tips: 'Host websites or DApps on IPFS',
              icon: require('@/assets/imgs/nav/hosting.png'),
              link: '/hosting',
            },
            {
              text: 'Bucket',
              tips: 'Effortlessly upload & pin files to IPFS and Arweave',
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
              text: 'ENS Domain',
              tips: 'Decentralize your websites or applications further with an ENS Domain',
              icon: require('@/assets/imgs/nav/ENS Domain.png'),
              href: 'https://www.4everland.org/blog/Support_ENS_IPNS_January_15',
              target: '_blank',
            },
            // {
            //   text: 'SNS Domain',
            //   tips: 'Decentralize your websites or applications further with an SNS Domain',
            //   icon: require('@/assets/imgs/nav/SNS Domain.png'),
            //   link: '/bucket',
            // },
          ],
        },
        {
          text: 'Discover',
          link: '',
          childs: [
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
              href: '/4everland-whitepaper-en.pdf',
              target: '_blank',
            },
            {
              text: 'Grants',
              tips: 'Contribute to 4EVERLAND and get rewarded',
              icon: require('@/assets/imgs/nav/Grants.png'),
              link: '/grants',
            },
            {
              text: 'Bug Bounty',
              tips: 'Get rewarded for finding bugs and exploits',
              icon: require('@/assets/imgs/nav/Bug Bounty.png'),
              href: 'https://hosting.4everland.org/#/bug-bounty',
              target: '_blank',
            },
            {
              text: 'Dev Forum',
              tips: 'Join the forum and share your experience with more developers',
              icon: require('@/assets/imgs/nav/Dev Forum.png'),
              href: 'https://www.reddit.com/r/4everland/',
              target: '_blank',
            },
          ],
        },

        {
          text: 'Blogs',
          link: '/blog',
        },
        {
          text: 'Community',
          href: 'https://discord.com/invite/Cun2VpsdjF ',
          target: '_blank',
        },
      ],
    }
  },
}
</script>
<style scoped>
@font-face {
  font-family: 'PARaDOS';
  src: url('../static/fonts/PARaDOS.ttf');
}
.nav-font {
  font-family: 'PARaDOS', sans-serif !important;
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
  min-height: 216px;
}
.tips {
  padding-right: 10px;
}
</style>
