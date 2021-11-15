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
          hide-delimiter-background
          hide-delimiters
          interval="5000"
          height="auto"
        >
          <v-carousel-item
            v-for="(item, i) in banner"
            :key="i"
            class="text-center cursor-pointer"
            :src="item.src"
            :href="item.href"
            :to="item.to"
            :target="item.href ? '_blank' : ''"
          >
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
          src: require('@/assets/imgs/index/banner1.png'),
          to: '/firstlanding',
        },
        {
          src: require('@/assets/imgs/index/banner2.png'),
          to: '/firstleap',
        },
        {
          src: require('@/assets/imgs/index/banner3.png'),
          to: '/grants',
        },
        {
          src: require('@/assets/imgs/index/banner4.png'),
          href: this.hosting_web,
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
