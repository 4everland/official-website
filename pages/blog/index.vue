<template>
  <v-theme-provider light>
    <v-container class="white">
      <v-row no-gutters>
        <v-col cols="12" md="8" order-md="1" order-sm="2" order="2">
          <nuxt-link
            v-for="article in articles"
            :key="article.title"
            :to="`/blog/${article.slug}`"
            class="decoration-none grey--text text--darken-2"
          >
            <div
              class="article py-8"
              :class="{
                'px-16': !$vuetify.breakpoint.smAndDown,
                'px-8': $vuetify.breakpoint.smAndDown,
              }"
            >
              <div>
                <small
                  >{{
                    new Date(article.published).toLocaleDateString('en', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })
                  }}
                </small>
              </div>
              <h5 class="text-h5 grey--text text--darken-4">
                {{ article.title }}
              </h5>
              <p v-if="article.img" class="my-4">
                <v-img
                  :src="article.img"
                  height="300"
                  width="640"
                  class="article-img"
                  aspect-ratio="16/9"
                ></v-img>
              </p>
              <p class="text-body-2">
                {{ article.description }}
              </p>
              <nuxt-link class="link-more" :to="`/blog/${article.slug}`">
                Read More
              </nuxt-link>
            </div>
          </nuxt-link>
        </v-col>
        <v-col cols="12" md="4" order-md="2" order-sm="1" order="1">
          <div class="blog-intro grey--text text--darken-2 pa-8">
            <h5 class="text-h5 grey--text text--darken-4">4EVERLAND Blog</h5>
            <p class="mt-8 text-body-2">
              4everland is a cloud computing platform designed to help
              developers develop Web 3.0 applications efficiently:
              permissionless, censorship resistant, and free of centralized
              gatekeepers. Welcome to the new Internet.
            </p>
            <div class="mt-4">
              <v-btn
                v-for="link in links"
                :key="link.link"
                small
                :href="link.link"
                text
                icon
                rounded
                class="mr-2"
                target="_blank"
                nofollow
              >
                <v-icon size="18">{{ link.icon }}</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-theme-provider>
</template>
<script>
import {
  mdiGithub,
  mdiTwitter,
  mdiTelegram,
  mdiReddit,
  mdiDiscord,
  mdiEmail,
} from '@mdi/js'
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'slug', 'description', 'img', 'published'])
      .sortBy('published', 'desc')
      .fetch()
    // eslint-disable-next-line no-console
    // console.log(articles)
    return { articles }
  },
  data() {
    return {
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
}
</script>
<style scoped>
.blog-intro {
  position: relative;
}
.blog-intro::before {
  content: '';
  position: absolute;
  left: 0;
  top: 100px;
  border-left: 1px dashed #888;
  height: 360px;
}
.decoration-none {
  text-decoration: none;
}
.article-img {
  border-radius: 8px;
  overflow: hidden;
}
.link-more {
  text-decoration: none;
  color: rgb(100, 149, 237);
}
.link-more:hover {
  text-decoration: underline;
}
@media only screen and (max-width: 960px) {
  .blog-intro {
    border-bottom: 1px dashed #888;
  }
  .blog-intro::before {
    border-left: none;
  }
}
</style>
