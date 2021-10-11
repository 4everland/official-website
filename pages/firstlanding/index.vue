<template>
  <div class="pos-r">
    <v-container style="position: relative">
      <nuxt-link to="/firstlanding/dapps"
        ><img
          class="featured"
          src="@/assets/imgs/firstlanding/Featured.png"
          alt=""
      /></nuxt-link>
    </v-container>
    <count-down v-if="active_status == 1" type="end" />
    <section-top />
    <section-main />
    <div class="future">
      <img src="~/assets/imgs/index/skybg-mask@2x.png" class="skybg-mask" />
    </div>
  </div>
</template>

<script>
import CountDown from '@/components/FirstlandingSections/CountDown.vue'
import SectionTop from '@/components/FirstlandingSections/SectionTop.vue'
import SectionMain from '@/components/FirstlandingSections/SectionMain.vue'
export default {
  components: {
    CountDown,
    SectionTop,
    SectionMain,
  },
  data() {
    return {
      active_status: null,
    }
  },
  mounted() {
    this.getStatus()
  },
  methods: {
    async getStatus() {
      try {
        const { data } = await this.$axios.get('/dapps/status')
        this.active_status = data.data
      } catch (error) {
        //
      }
    },
  },
}
</script>
<style scoped>
.pos-r {
  background-image: linear-gradient(to bottom, #1e2226, #1e2945);
  position: relative;
}
.future {
  padding-bottom: 120px;
}
.skybg-mask {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
.featured {
  position: absolute;
  left: 8%;
  top: 20px;
}
</style>
