<template>
  <v-app dark>
    <v-app-bar fixed app color="#161616" height="100">
      <v-container class="d-flex align-center">
        <v-btn text color="transparent" to="/" class="always-active mr-8">
          <logo />
        </v-btn>
        <v-menu
          v-for="item in links"
          :key="item.text"
          open-on-hover
          bottom
          transition="slide-y-transition"
          offset-y
        >
          <template #activator="{ on, attrs }">
            <v-btn
              class="hidden-sm-and-down nav-btn text-subtitle-1"
              plain
              nuxt
              replace
              :to="item.link"
              :href="item.href"
              :target="item.target"
              :ripple="false"
              v-bind="attrs"
              v-on="on"
              @click="item.event"
            >
              <v-img
                v-if="item.icon"
                contain
                width="90"
                :src="item.icon"
                alt=""
              />
              <span v-else>
                {{ item.text }}
                <v-icon v-if="item.childs">{{ mdiChevronDown }}</v-icon>
              </span>
            </v-btn>
          </template>
          <v-list v-if="item.childs">
            <v-list-item v-for="child in item.childs" :key="child.text">
              <v-btn
                class="hidden-sm-and-down nav-btn text-subtitle-1"
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
          </v-list>
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
          v-if="$route.name == 'bucket' || $route.name == 'bucketlogin'"
          to="/bucketlogin"
          class="hidden-sm-and-down transparent"
          tile
          text
          plain
        >
          <img src="@/assets/imgs/common/bucket-btn.png" width="140px" alt="" />
        </v-btn>
        <v-btn
          v-else
          :href="hosting_web"
          target="_blank"
          class="hidden-sm-and-down transparent"
          tile
          text
          plain
        >
          <img
            src="@/assets/imgs/common/hosting-btn.png"
            width="140px"
            alt=""
          />
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
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
              <v-list-item-title>
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
    <app-footer />
  </v-app>
</template>

<script>
import { mdiMenu, mdiGithub, mdiChevronDown } from '@mdi/js'
import Logo from '../components/Logo.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  components: { Logo, AppFooter },
  data() {
    return {
      mdiMenu,
      mdiGithub,
      mdiChevronDown,
      showDrawer: false,
      links: [
        {
          text: 'Developer',
          link: '',
          childs: [
            {
              text: 'Hosting',
              link: '/hosting',
            },
            {
              text: 'Bucket',
              link: '/bucket',
            },
            {
              text: ' WhitePaper',
              href: '/4everland-whitepaper-en.pdf',
              target: '_blank',
            },
            {
              text: ' Technical Docs',
              href: 'https://docs.hosting.4everland.org/guide/',
              target: '_blank',
            },
            {
              text: ' Dev Forum',
              href: 'https://www.reddit.com/r/4everland/',
              target: '_blank',
            },
            {
              text: ' BugBounty',
              href: 'https://hosting.4everland.org/#/bug-bounty',
              target: '_blank',
            },
          ],
        },
        {
          text: 'Ecosystem',
          link: '',
          childs: [
            {
              text: 'Dapps',
              link: '/firstlanding/dapps',
            },
            {
              text: ' Developer Grants',
              link: '/grants',
            },
          ],
        },
        {
          text: 'Blogs',
          link: '/blog',
        },
        {
          text: 'Contact',
          event(e) {
            window.location.replace('/#footer')
          },
        },
      ],
    }
  },
}
</script>
<style scoped>
.always-active {
  opacity: 1 !important;
}
.v-btn--active,
.nav-btn:hover {
  color: #2a7eed;
}
/deep/ .v-btn__content {
  opacity: 1 !important;
}
/deep/ .nav-btn .v-btn__content {
  opacity: 1 !important;
}
</style>
