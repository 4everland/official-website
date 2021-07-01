<template>
  <v-container
    class="white grey--text text--darken-3"
    :class="{
      'pa-16': !$vuetify.breakpoint.smAndDown,
      'pa-6': $vuetify.breakpoint.smAndDown,
    }"
  >
    <v-row justify="center">
      <v-col cols="12" md="9">
        <p>
          <nuxt-link class="link grey--text text--darken-4" to="/blog">
            &lt;&nbsp;Back
          </nuxt-link>
        </p>
        <h4 class="text-h4 text-center my-8">{{ article.title }}</h4>
        <article>
          <nuxt-content :document="article" />
        </article>
        <div
          class="pagination d-flex mt-16"
          :class="{
            'justify-end': !prev,
            'justify-space-between': prev && next,
          }"
        >
          <nuxt-link
            v-if="prev"
            class="link grey--text text--darken-3 d-flex align-center mr-1"
            :to="toLink(prev.slug)"
          >
            <v-icon color="grey">{{ mdiArrowLeft }}</v-icon>
            <span>{{ prev.title || 'Back' }}</span>
          </nuxt-link>
          <nuxt-link
            v-if="next"
            class="link grey--text text--darken-3 d-flex align-center ml-1"
            :to="toLink(next.slug)"
          >
            <span>{{ next.title }}</span>
            <v-icon color="grey">{{ mdiArrowRight }}</v-icon>
          </nuxt-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js'
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('published', 'desc')
      .surround(params.slug)
      .fetch()
    return { article, prev, next }
  },
  data() {
    return {
      mdiArrowLeft,
      mdiArrowRight,
    }
  },
  methods: {
    toLink(slug) {
      if (slug === 'index') {
        return '/blog'
      } else {
        return slug
      }
    },
  },
}
</script>
<style scoped>
.link {
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}
.link2 {
  text-decoration: none;
}
.pagination {
  border-top: 1px solid #eee;
  padding-top: 24px;
}
</style>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content img {
  width: 100%;
  border-radius: 8px;
}
</style>
