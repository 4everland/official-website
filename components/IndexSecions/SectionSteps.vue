<template>
  <v-theme-provider light>
    <div id="steps">
      <v-container class="px-8 pb-16">
        <h3
          class="
            text-h3
            font-weight-light
            text-center
            mb-16
            grey--text
            text--darken-4
          "
        >
          Deploy a website based on<br />
          Web3.0 in 30 seconds
        </h3>
        <v-row>
          <v-col
            v-for="step in steps"
            :key="step.title"
            cols="12"
            lg="4"
            md="4"
          >
            <v-card flat class="step">
              <div>
                <img style="width: 100%" :src="step.img" />
              </div>
              <v-card-text>
                <p class="text-center">{{ step.title }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-theme-provider>
</template>
<script>
export default {
  data() {
    return {
      steps: [
        {
          title: '1. Connect your GitHub',
          img: require('~/assets/imgs/index/step_1@2x.png'),
        },
        {
          title: '2. Add your build setting',
          img: require('~/assets/imgs/index/step_2@2x.png'),
        },
        {
          title: '3. Deploy your site',
          img: require('~/assets/imgs/index/step_3@2x.png'),
        },
      ],
    }
  },
}
</script>
<style scoped>
#steps {
  background: #fff;
}
</style>
