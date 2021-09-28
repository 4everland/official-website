<template>
  <div id="firstlanding">
    <div class="firstlanding">
      <v-container class="py-12">
        <v-row>
          <v-col
            class="d-flex justify-end align-center"
            style="position: relative"
            cols="12"
            md="6"
            lg="6"
          >
            <v-img width="100%" max-width="679" :src="banner[0]" />
            <nuxt-link to="/firstlanding/dapps"
              ><img
                class="featured"
                src="@/assets/imgs/firstlanding/Featured.png"
                alt=""
            /></nuxt-link>
          </v-col>
          <v-col
            class="d-flex flex-column align-center"
            cols="12"
            md="6"
            lg="6"
          >
            <v-img contain width="100%" max-width="590" :src="banner[1]" />
            <v-btn
              class="py-6 px-6 mt-4 text-h6"
              rounded
              color="#2b85fb"
              href="https://hosting.4everland.org/#/dashboard/first-landing"
              target="_blank"
              >Start Deploy for Free</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banner: [
        require('@/assets/imgs/firstlanding/top1.png'),
        require('@/assets/imgs/firstlanding/top2.png'),
      ],
    }
  },
}
</script>
<style scoped>
.firstlanding {
  background-image: url('~/assets/imgs/firstlanding/bg.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.featured {
  position: absolute;
  left: 5%;
  top: 2%;
}
</style>
