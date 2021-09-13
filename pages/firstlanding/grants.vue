<template>
  <v-theme-provider light>
    <v-container class="mt-4 rounded-t-xl white">
      <v-row>
        <v-col class="text-center main" cols="12">
          <div class="main-top">
            <div
              class="grey--text text--darken-4 text-h4 font-weight-bold mb-12"
            >
              4EVERLAND Developer Grant Program
            </div>
            <div class="grey--text text--darken-2 text-subtitle-1 mb-12">
              <p>
                The 4EVERLAND Developer Grant Program aims to catalyze the
                growth of the Internet Computer
              </p>
              <p>
                ecosystem and make the Internet Computer accessible and
                approachable to more developers around
              </p>
              <p>
                the world by providing support to promising developers and
                teams.
              </p>
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
                class="mb-6 ml-16"
              >
                <v-icon color="#2B85FB" size="24">{{ mdiCheckCircle }}</v-icon>
                <span class="grey--text text--darken-2 text-subtitle-1">{{
                  item
                }}</span>
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
        'Caniater Development Kits (CDKS)& Agents',
        'Developer Tooling ite g IDts, dbsgers, loging ibraies',
        'infrasructure leg oracles, asset bridges',
        'Integrations & APis (e g chat email, maps)',
        'Apps & Open Internet Services',
      ],
    }
  },
}
</script>
<style scoped>
.main {
  padding: 0 120px;
  padding-top: 95px;
  padding-bottom: 140px;
}
.main-top {
  padding: 0 160px;
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
</style>
