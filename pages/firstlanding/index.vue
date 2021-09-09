<template>
  <div class="pos-r">
    <section-top />
    <section-main />
    <div class="future">
      <img src="~/assets/imgs/index/skybg-mask@2x.png" class="skybg-mask" />
    </div>
  </div>
</template>

<script>
import SectionTop from '@/components/FirstlandingSections/SectionTop.vue'
import SectionMain from '@/components/FirstlandingSections/SectionMain.vue'
export default {
  components: {
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
