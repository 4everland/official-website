<template>
  <div class="home-block">
    <v-container class="my-16">
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <div class="title-underline">Your Trusted Partner</div>
          <div class="block-titel">Committed to Your Success</div>
          <div class="block-text">
            Now you can start your Web3 journey through 4EVERLAND, and deploy a
            Web3 application that belongs to you within 30s.
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-tabs v-model="tab" background-color="transparent">
          <v-tab :key="0">1. Connect your GitHub</v-tab>
          <v-tab :key="1">2.Add your build setting</v-tab>
          <v-tab :key="2">3. Deploy your site</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="mt-16">
          <v-tab-item v-for="item in items" :key="item.img">
            <v-row>
              <v-col class="step-box" cols="12" md="7" lg="7">
                <v-img :src="item.img"></v-img>
              </v-col>
              <v-col
                class="step-box btn-box"
                :style="
                  $vuetify.breakpoint.smAndDown ? 'align-items: center;' : ''
                "
                cols="12"
                md="5"
                lg="5"
              >
                <v-btn
                  href="https://youtu.be/7D9MuVk6NNA"
                  target="_blank"
                  class="usage-btn mb-8"
                  height="60"
                  tile
                  >USAGE VIDEO</v-btn
                >
                <v-btn
                  :href="hosting_web"
                  target="_blank"
                  tile
                  class="start-btn"
                  height="60"
                  >START DEPLOYING</v-btn
                >
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-row>
      <v-row class="mt-16">
        <v-col cols="12" md="12" lg="12">
          <div class="block-titel">
            Control the 4EVERLAND Hosting Suite With our CLI
          </div>
          <div class="block-text">
            4EVERLAND also supports command-line interface (CLI) that enables
            interaction with the platform using a terminal or automated system.
          </div>
        </v-col>

        <v-col class="step-box ma-auto mt-10" cols="12" md="6" lg="6">
          <v-img :src="cliGif"></v-img>
        </v-col>
        <v-col class="text-center mt-16 btn-box" cols="12" md="6" lg="6">
          <v-btn
            href="https://docs.hosting.4everland.org/cli/"
            target="_blank"
            tile
            class="usage-btn"
            height="60"
            >VIEW DOCS</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import '@/assets/styles/home.scss'
export default {
  data() {
    return {
      tab: 0,
      items: [
        { img: require('@/assets/imgs/index/step/step1.gif') },
        { img: require('@/assets/imgs/index/step/step2.gif') },
        { img: require('@/assets/imgs/index/step/step3.gif') },
      ],
      cliGif: require('@/assets/imgs/index/step/cli.gif'),
    }
  },
}
</script>
<style scoped>
/deep/ .v-slide-group__content {
  justify-content: space-between !important;
}
/deep/ .v-tabs-slider {
  background: linear-gradient(-90deg, #ce7cff, #2e9dfd);
}

.btn-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.usage-btn {
  width: 300px;
  height: 88px;
  background: #452c92 !important;
  border-radius: 44px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}
.start-btn {
  width: 300px;
  height: 88px;
  background: linear-gradient(90deg, #fdb6fe, #acc0fd, #31adfe);
  border-radius: 44px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}
</style>
