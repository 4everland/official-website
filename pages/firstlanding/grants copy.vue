<template>
  <v-theme-provider light>
    <v-container class="mt-4 rounded-t-xl white">
      <v-row>
        <v-col class="text-center main" cols="12">
          <div class="main-top">
            <div
              class="grey--text text--darken-4 text-h4 font-weight-bold mb-12"
            >
              Development Grant Rewards
            </div>
            <div class="grey--text text--darken-2 text-subtitle-1 mb-12">
              <p>
                20 million 4EVER sponsorship tokens will be available to
                qualified projects for their long term development.
              </p>
              <p>
                All 4EVERLAND HOSTING projects are welcome to apply for
                Development Grant.
              </p>
              <p>To be eligible for the Development Grant you will need to:</p>
            </div>
            <v-btn
              class="
                mb-9
                white--text
                px-9
                py-6
                text-subtitle-1
                font-weight-bold
              "
              rounded
              color="#2B85FB"
              href="https://forms.gle/iMaFNYdyjWp36msS6"
              target="_blank"
              >SUBMIT DEVELOPER GRANT APPLCATION</v-btn
            >
          </div>

          <v-divider></v-divider>
          <div class="main-top">
            <div
              class="grey--text text--darken-4 text-h4 font-weight-bold my-16"
            >
              Focus Areas
            </div>
            <div class="text-left d-inline-block" style="margin: 0 auto">
              <div
                v-for="(item, index) in text"
                :key="index"
                class="mb-6 text-center text-item"
              >
                <v-icon color="#2B85FB" size="24">{{ mdiCheckCircle }}</v-icon>
                <span class="grey--text text--darken-2 text-subtitle-1">{{
                  item
                }}</span>
              </div>
              <div class="grey--text text--darken-2 text-subtitle-1">
                *This event is valid until all rewards are given. Plagiarism and
                illegally copied project are not qualified for Grants.
              </div>
            </div>
          </div>
        </v-col>
        <v-col
          class="
            text-center
            grey
            lighten-2
            grey--text
            text--darken-2 text-subtitle-1
            py-16
            main-bottom
          "
        >
          <div class="pb-8">
            <p>
              More details contact us at
              <a href="mailto:contact@4everland.org">contact@4everland.org</a>
            </p>
            <p>
              Individuals, teams and researchers are all welcome to subrmit
              inquiry form.
            </p>
            <v-btn
              class="mt-12 px-15 py-6 font-weight-bold"
              rounded
              outlined
              color="#2B85FB"
              href="https://forms.gle/iMaFNYdyjWp36msS6"
              target="_blank"
              >Apply Now</v-btn
            >
          </div>
          <img src="~/assets/imgs/index/skybg-mask@2x.png" class="skybg-mask" />
        </v-col>
      </v-row>
    </v-container>
  </v-theme-provider>
</template>
<script>
import { mdiCheckCircle } from '@mdi/js'
export default {
  data() {
    return {
      mdiCheckCircle,
      text: [
        'Connect your domain name to the project;',
        'Add the official 4EVERLAND logo and links on their website.',
      ],
    }
  },
}
</script>
<style scoped>
.main {
  /* padding: 0 120px; */
  padding-top: 95px;
  padding-bottom: 140px;
}
.main-top {
  /* padding: 0 160px; */
}
.main-bottom {
  position: relative;
}
.skybg-mask {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
.text-item {
  display: inline-block;
  margin-left: 26%;
}
</style>
