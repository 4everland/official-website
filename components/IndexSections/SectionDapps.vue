<template>
  <v-theme-provider light>
    <div
      id="hostingDapps"
      :style="{ background: background == 'black' ? '#121212' : '#ffffff' }"
    >
      <v-container class="px-8 pb-16">
        <h3
          class="text-h3 font-weight-light text-center mb-16"
          :class="
            background == 'black' ? 'white--text' : 'grey--text text--darken-4'
          "
        >
          Dapps already Deployed
        </h3>
        <v-row class="pa-4 rounded-lg" style="background: #f1f4fa">
          <v-col
            cols="12"
            lg="5"
            md="6"
            class="d-flex flex-column justify-space-between"
          >
            <v-card
              v-for="item in 3"
              :key="item"
              class="d-flex flex-row align-center pa-4 rounded-lg mb-2"
            >
              <v-img
                class="rounded-lg"
                src="http://iph.href.lu/120x120?fg=666666&bg=cccccc"
                :aspect-ratio="1"
                width="120"
                height="120"
              ></v-img>
              <div>
                <v-card-title class="pt-0">Dapp Name</v-card-title>
                <v-card-subtitle class="pb-2"
                  >http://4everland.com</v-card-subtitle
                >
                <v-card-text class="pb-0"
                  >introduction,introduction,introduction
                  introduction,introduction,introduction
                  introduction,introduction</v-card-text
                >
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" lg="7" md="6">
            <v-img
              src="http://iph.href.lu/1024x800?fg=666666&bg=cccccc"
              height="500"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-theme-provider>
</template>
<script>
export default {
  props: { background: { type: String, default: 'white' } },
  data() {
    return {}
  },
}
</script>
