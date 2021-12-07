<template>
  <v-theme-provider light>
    <v-container class="mt-4 rounded-t-xl pb-16 white bottom-round">
      <v-row no-gutters>
        <v-col cols="12" md="8" order-md="1" order-sm="2" order="2">
          <div
            v-for="article in articles"
            :key="article.title"
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
              <nuxt-link class="decoration-none" :to="`/blog/${article.slug}`">
                <h5 class="text-h5 grey--text text--darken-4">
                  {{ article.title }}
                </h5>
              </nuxt-link>
              <div v-if="article.img" class="my-4">
                <nuxt-link :to="`/blog/${article.slug}`">
                  <v-img :src="article.img" class="article-img"></v-img>
                </nuxt-link>
              </div>
              <div class="text-body-2">
                {{ article.description }}
              </div>
              <nuxt-link class="link-more" :to="`/blog/${article.slug}`">
                Read More
              </nuxt-link>
            </div>
          </div>
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
                class="ma-2"
                target="_blank"
                nofollow
              >
                <!-- <v-icon size="18">{{ link.icon }}</v-icon> -->
                <v-img width="18" :src="link.icon"></v-img>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-theme-provider>
</template>
<script>
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
        {
          icon: require('@/assets/imgs/footer/youtube.png'),
          href: 'https://www.youtube.com/channel/UC9gDft8jnTt_1yrtLfsUq0w',
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
  width: 100%;
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
