<template>
  <v-theme-provider light>
    <v-container
      class="white grey--text text--darken-4"
      :class="{ 'pa-16': !$vuetify.breakpoint.smAndDown }"
    >
      <h2 class="text-h2 text-center mb-8 mt-8">Privacy Policy</h2>
      <p class="text-body-2 text-center">Effective date: 06/07/2021</p>
      <div
        :class="{
          'px-16': !$vuetify.breakpoint.smAndDown,
          'px-8': $vuetify.breakpoint.smAndDown,
          'pt-16 pb-8': !$vuetify.breakpoint.smAndDown,
          'pt-8 pb-4': $vuetify.breakpoint.smAndDown,
        }"
        class="content rounded-lg mt-16 grey lighten-4 grey--text"
      >
        <privacy-policy />
      </div>
    </v-container>
  </v-theme-provider>
</template>
<script>
import PrivacyPolicy from '../components/Markdowns/PrivacyPolicy.vue'
export default {
  components: {
    PrivacyPolicy,
  },
}
</script>
<style scoped>
.content p {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 30px;
}
</style>
