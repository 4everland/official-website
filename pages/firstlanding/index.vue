<template>
  <div class="pos-r">
    <count-down type="start" />
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
  methods: {},
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
</style>
