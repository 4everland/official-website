<template>
  <div id="footer">
    <v-container class="align-center">
      <v-row :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
        <v-col cols="12" md="6" lg="6">
          <div class="footer-titele font-weight-black">Stay in the loop</div>
          <div class="footer-text mt-12">
            Subscribe to the newsletter to hear about Polkadot updates and
            events.
          </div>
          <div class="subscribe-input mt-12">
            <input
              v-model="email"
              class="enter-email mr-4 mb-4"
              placeholder="Your email address"
              type="email"
            />
            <v-btn
              :loading="loading"
              class="text-h6"
              color="#3c46d3"
              tile
              max-width="150"
              height="42"
              @click="subscribe"
              >Subscribe</v-btn
            >
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="6">
          <div class="footer-titele font-weight-black">Join the community</div>
          <div
            class="d-flex flex-wrap mt-12"
            :class="{ 'justify-center': $vuetify.breakpoint.smAndDown }"
          >
            <v-btn
              v-for="link in links"
              :key="link.href"
              :href="link.href"
              text
              icon
              class="text-center mr-8 mb-8"
              target="_blank"
              nofollow
            >
              <v-img width="36" :src="link.icon"></v-img>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row
        class="mt-16"
        :class="{ 'text-center': $vuetify.breakpoint.smAndDown }"
      >
        <v-col cols="12" md="6" lg="6">
          <div class="footer-titele font-weight-black">4EVERLAND</div>
          <div class="footer-text2 mt-12">
            4EVERLAND is a Blockchain Technology-Powered cloud computing
            platform using Web 3.0 that provides globally accelerated, open,
            permissionless, privacy-protected, ever-lasting storage solution,
            and network services to all users.
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="6">
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
    <v-divider></v-divider>
    <v-container>
      <div class="copy-right">&copy; 2021 4EVERLAND, Inc</div>
    </v-container>
    <div v-show="subSuccessShow" class="sub-success">
      <v-icon color="#2B85FB" size="64">{{ mdiEmoticonHappyOutline }}</v-icon>
      <span class="ml-4">Thank you for subscription.</span>
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
      mdiEmoticonHappyOutline,
      links: [
        {
          icon: require('@/assets/imgs/footer/github.png'),
          href: 'https://github.com/4everland',
        },
        {
          icon: require('@/assets/imgs/footer/twitter.png'),
          href: 'https://twitter.com/4everland_org',
        },
        {
          icon: require('@/assets/imgs/footer/telegram.png'),
          href: 'https://t.me/org_4everland',
        },
        {
          icon: require('@/assets/imgs/footer/reddit.png'),
          href: 'https://www.reddit.com/r/4everland/',
        },
        {
          icon: require('@/assets/imgs/footer/medium.png'),
          href: 'https://4everland.medium.com/',
        },
        {
          icon: require('@/assets/imgs/footer/discord.png'),
          href: 'https://discord.gg/Cun2VpsdjF',
        },
        {
          icon: require('@/assets/imgs/footer/email.png'),
          href: 'mailto:contact@4everland.org',
        },
      ],
      project: [
        {
          name: 'Project',
          list: [
            {
              name: 'Hosting',
              to: '/hosting',
            },
            {
              name: 'WhitePaper',
              href: '/4everland-whitepaper-en.pdf',
              target: '_blank',
            },
            {
              name: 'Blogs',
              to: '/blog',
            },
            {
              name: 'Roadmap',
              to: '/#roadmap',
            },
          ],
        },
        {
          name: 'Support',
          list: [
            {
              name: 'Documentation',
              href: 'https://docs.hosting.4everland.org/guide/',
              target: '_blank',
            },
            {
              name: 'Grants',
              to: '/grants',
            },
            {
              name: 'Bug Bounty',
              href: 'https://hosting.4everland.org/#/bug-bounty',
              target: '_blank',
            },
            {
              name: 'FAQ',
              to: '/hosting/#faq',
            },
            {
              name: 'Contact us',
              href: 'mailto:contact@4everlan.org',
            },
          ],
        },
        {
          name: 'Frameworks',
          list: [
            {
              name: 'Vue.js',
              href: 'https://hosting.4everland.org/#/solution/vue',
              target: '_blank',
            },
            {
              name: 'React App',
              href: 'https://hosting.4everland.org/#/solution/create-react-app',
              target: '_blank',
            },
            {
              name: 'Next.js',
              href: 'https://hosting.4everland.org/#/solution/nextjs',
              target: '_blank',
            },
            {
              name: 'Gatsby',
              href: 'https://hosting.4everland.org/#/solution/gatsby',
              target: '_blank',
            },
            {
              name: 'Angular',
              href: 'https://hosting.4everland.org/#/solution/angular',
              target: '_blank',
            },
          ],
        },
        {
          name: 'Legal',
          list: [
            {
              name: 'Terms of Users',
              to: '/term-of-use',
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
          if (resp.data.status === 'success') {
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
  padding-top: 88px;
}
.footer-titele {
  font-size: 28px;
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
  flex: 1;
}
.subscribe-input.disabled {
  background-color: #c1c1c1 !important;
}

input::-webkit-input-placeholder {
  color: #fff;
  font-size: 18px;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #fff;
  font-size: 18px;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #fff;
  font-size: 18px;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #fff;
  font-size: 18px;
}
.subscribe-input input {
  color: #fff;
  background-color: #666;
  font-size: 18px;
  padding-left: 30px;
  max-width: 490px;
  height: 42px;
  flex: auto;
}
.subscribe-input input:hover,
.subscribe-input input:focus {
  outline: none;
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
