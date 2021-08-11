<template>
  <v-container class="py-12">
    <v-row :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
      <v-col cols="12" md="6" lg="6">
        <img alt="top-banner" src="~/assets/imgs/hosting/Hosting.png" />
        <h1
          class="text-h2 mt-8"
          :class="{ 'text-nowrap': !$vuetify.breakpoint.mdAndDown }"
        >
          Host Websites or Dapps <br />based on the <strong>Web3.0</strong>
        </h1>

        <p class="my-16">
          <v-btn
            href="https://hosting-website.vercel.app"
            target="_blank"
            class="blue darken-1"
            rounded
            x-large
          >
            <span>Get Started for Free |</span>
            <v-icon right size="20">{{
              mdiCheckboxMarkedCircleOutline
            }}</v-icon>
          </v-btn>
        </p>
      </v-col>
      <v-col class="d-flex align-center justify-center" cols="12" md="6" lg="6">
        <img
          alt="top-banner"
          style="width: 100%; max-width: 450px"
          src="~/assets/imgs/hosting/top@2x.png"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mdiCheckboxMarkedCircleOutline } from '@mdi/js'
export default {
  data() {
    return {
      mdiCheckboxMarkedCircleOutline,
    }
  },
}
</script>
<style scoped>
.text-nowrap {
  white-space: nowrap;
}
</style>
