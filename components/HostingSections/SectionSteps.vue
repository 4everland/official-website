<template>
  <div class="home-block">
    <div style="background: #fefcf6; padding: 100px 0">
      <v-container>
        <v-row>
          <v-col cols="12" md="12" lg="12">
            <div class="block-titel ma-auto mb-16" style="max-width: 1100px">
              Deploy a Website in 30 secs. No Really, Its That Simple and Free.
              So, Get Started Today!
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-tabs v-model="tab" background-color="transparent">
            <v-tab :key="0" class="Ubuntu-Bold">1. Connect your GitHub</v-tab>
            <v-tab :key="1" class="Ubuntu-Bold">2.Add your build setting</v-tab>
            <v-tab :key="2" class="Ubuntu-Bold">3. Deploy you DWeb</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab" class="mt-16 mx-auto">
            <v-tab-item v-for="item in items" :key="item.img">
              <v-row>
                <v-col cols="12">
                  <v-img :src="item.img"></v-img>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs-items>
        </v-row>
        <v-row>
          <v-col class="btn-box" cols="12">
            <v-btn
              href="https://youtu.be/7D9MuVk6NNA"
              target="_blank"
              class="usage-btn"
              height="45"
              tile
              >Usage Video
              <v-icon class="ml-4">mdi-play-circle-outline</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row class="mt-16">
          <v-col cols="12" md="12" lg="12">
            <div class="block-titel">
              Control the 4EVERLAND Hosting Suite With our CLI
            </div>
          </v-col>
          <v-col class="step-box ma-auto mt-10" cols="12" md="7" lg="7">
            <v-img :src="cliGif"></v-img>
          </v-col>
          <v-col class="text-center mt-16" cols="12">
            <v-btn
              href="https://docs.4everland.org/hositng/hosting-cli"
              target="_blank"
              tile
              class="usage-btn"
              height="45"
              >CLI Docs</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </div>
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
  margin-top: 52px;
}
.usage-btn {
  width: 236px;
  height: 45px;
  background: #000 !important;
  font-size: 14px;
  color: #fff;
  font-family: 'Ubuntu-Medium', sans-serif !important;
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
