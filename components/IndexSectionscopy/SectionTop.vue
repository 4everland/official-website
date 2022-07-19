<template>
  <div id="banner">
    <v-row :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
      <v-col cols="12" md="12" lg="12">
        <v-carousel
          cycle
          :height="$vuetify.breakpoint.smAndDown ? 1000 : bannerHeight"
          hide-delimiters
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(item, i) in banner"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-container>
                <div class="text-center">
                  <div
                    class="text-h3 text-center font-weight-bold text-uppercase"
                    style="color: #132642"
                    v-html="item.title"
                  ></div>
                  <div
                    class="text-h5 text-center mt-10 mb-16 text-uppercase"
                    style="color: #6c7789"
                    v-html="item.tips"
                  ></div>
                  <v-btn
                    class="banner-btn text-h5 mt-16 px-16 text-uppercase"
                    height="50"
                    elevation="6"
                    :to="item.to"
                    :href="item.href"
                    :target="item.href ? '_blank' : ''"
                  >
                    {{ item.button }}
                  </v-btn>
                </div>
              </v-container>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      screenWidth: null,
      screenHeight: null,
    }
  },
  computed: {
    bannerHeight() {
      const clientWidth = this.screenWidth
      let bannerHeight = (clientWidth / 2560) * 1000
      if (bannerHeight > 1000) {
        bannerHeight = 1000
      }
      return bannerHeight
    },
  },
  mounted() {
    window.screenWidth = document.body.clientWidth
    window.screenHeight = document.body.clientHeight
    this.screenWidth = window.screenWidth
    this.screenHeight = window.screenHeight
  },
  methods: {},
}
</script>
<style scoped>
#banner {
  min-height: 500px;
}
.banner-btn {
  background: linear-gradient(90deg, #fdb6fe, #acc0fd, #31adfe);
  border-radius: 44px;
  color: #fff;
  text-shadow: 0 5px 6px rgba(120, 167, 206, 0.22);
}
</style>
