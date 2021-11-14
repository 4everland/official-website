<template>
  <div>
    <v-row :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
      <v-col
        class="d-flex align-center justify-center"
        cols="12"
        md="12"
        lg="12"
      >
        <v-carousel
          v-model="model"
          cycle
          dark
          reverse
          hide-delimiter-background
          hide-delimiters
          interval="5000"
          height="auto"
        >
          <v-carousel-item
            v-for="(item, i) in banner"
            :key="i"
            class="text-center"
            :href="item.href"
            :to="item.to"
            :target="item.href ? '_blank' : ''"
          >
            <img
              class="cursor-pointer"
              alt="top-banner"
              style="width: 100%"
              :src="item.src"
            />
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import {
  mdiBookOpenVariant,
  mdiDownloadCircleOutline,
  mdiGithub,
  mdiCheckboxMarkedCircleOutline,
} from '@mdi/js'
export default {
  data() {
    return {
      mdiBookOpenVariant,
      mdiDownloadCircleOutline,
      mdiGithub,
      mdiCheckboxMarkedCircleOutline,
      model: 0,
      colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
      banner: [
        {
          src: require('@/assets/imgs/index/banner1.jpg'),
          to: '/firstlanding',
        },
        {
          src: require('@/assets/imgs/index/banner2.jpg'),
          href: this.hosting_web,
        },
        {
          src: require('@/assets/imgs/index/banner3.jpg'),
          to: '/grants',
        },
        {
          src: require('@/assets/imgs/index/banner4.jpg'),
          to: '/grants',
        },
      ],
    }
  },
}
</script>
<style scoped>
.text-nowrap {
  white-space: nowrap;
}
</style>
