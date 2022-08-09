<template>
  <v-theme-provider light>
    <v-container
      class="white grey--text text--darken-4"
      :class="{ 'pa-16': !$vuetify.breakpoint.smAndDown }"
    >
      <h2 class="text-h2 text-center mb-8 mt-8">Term of Service</h2>
      <p
        class="text-subtitle-1 text-center"
        :class="{ 'px-16': !$vuetify.breakpoint.smAndDown }"
      >
        PLEASE NOTE THAT YOUR USE OF AND ACCESS TO OUR SERVICES DEFINED BELOW
        ARE SUBJECT TO THE FOLLOWING TERMS AND CONDITIONS. IF YOU DO NOT AGREE
        TO ALL OF THE FOLLOWING, YOU MAY NOT USE OR ACCESS OUR SERVICES IN ANY
        MANNER
      </p>
      <p class="text-body-2 text-center">Effective date: 05/01/20</p>
      <div
        :class="{
          'px-16': !$vuetify.breakpoint.smAndDown,
          'px-8': $vuetify.breakpoint.smAndDown,
          'pt-16 pb-8': !$vuetify.breakpoint.smAndDown,
          'pt-8 pb-4': $vuetify.breakpoint.smAndDown,
        }"
        class="content rounded-lg mt-16 grey lighten-4 grey--text"
      >
        <term-of-use />
      </div>
    </v-container>
  </v-theme-provider>
</template>
<script>
import TermOfUse from '../components/Markdowns/TermOfUse.vue'
export default {
  components: {
    TermOfUse,
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
