<template>
  <div id="home">
    <div class="top-alert">
      <v-alert
        v-model="alert"
        close-text="Close Alert"
        color="#e5e0fe"
        dark
        dismissible
        dense
        tile
        max-width="100%"
      >
        <a
          href="https://forms.gle/CrCVBoWFaA4V3RiB6"
          target="_blank"
          rel="noopener noreferrer"
          class="anima"
        >
          <v-icon color="#8272d1" dense class="mb-1 mr-2"
            >mdi-volume-high</v-icon
          >
          4EVERLAND MSP I is now live! A $15k bonus and vouchers are included in
          this 3-month program designed to empower Web3 developers and projects.
          Apply today.
        </a>
      </v-alert>
    </div>

    <section-one />
    <section-two />
    <section-three />
    <section-structure />
    <section-service />
    <section-build />
    <section-join />
    <section-receive />
  </div>
</template>

<script>
import SectionOne from '@/components/IndexSections/SectionOne.vue'
import SectionTwo from '@/components/IndexSections/SectionTwo.vue'
import SectionThree from '@/components/IndexSections/SectionThree.vue'
import SectionStructure from '@/components/IndexSections/SectionStructure.vue'
import SectionService from '@/components/IndexSections/SectionService.vue'
import SectionBuild from '@/components/IndexSections/SectionBuild.vue'
import SectionJoin from '@/components/IndexSections/SectionJoin.vue'
import SectionReceive from '@/components/IndexSections/SectionReceive.vue'
import SectionTop from '@/components/IndexSections/SectionTop.vue'
import SectionUniverse from '@/components/IndexSections/SectionUniverse.vue'
import SectionAbout from '@/components/IndexSections/SectionAbout.vue'
import SectionHelp from '@/components/IndexSections/SectionHelp.vue'
import SectionExplore from '@/components/IndexSections/SectionExplore.vue'
import SectionGlobe from '@/components/IndexSections/SectionGlobe.vue'
import SectionPartners from '@/components/IndexSections/SectionPartners.vue'
import SectionNew from '@/components/IndexSections/SectionNew.vue'
import SectionMilestones from '@/components/IndexSections/SectionMilestones.vue'

export default {
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionStructure,
    SectionService,
    SectionBuild,
    SectionJoin,
    SectionReceive,
    SectionTop,
    SectionUniverse,
    SectionAbout,
    SectionHelp,
    SectionExplore,
    SectionGlobe,
    SectionPartners,
    SectionNew,
    SectionMilestones,
  },
  data() {
    return {
      alert: true,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  methods: {},
}
</script>
<style lang="less">
.v-main {
  background-color: #000;
}
html {
  background-color: #000;
}
body {
  background-color: #000;
}
</style>
<style lang="less" scoped>
#home {
  background: #000;
  position: relative;
  font-family: Inter, Arial, sans-serif;
  .top-alert {
    position: sticky;
    top: 80px;
    z-index: 89;
    text-align: center;
    overflow: hidden;
    display: none;
    /deep/ .v-alert__content {
      overflow: hidden;
    }
    a {
      display: inline-block;
      color: #8272d1;
      text-decoration: none;
      font-family: 'Ubuntu', sans-serif !important;
      white-space: nowrap;
    }
  }
}
/deep/ .v-main {
  padding-top: 0 !important;
}

@media (max-width: 960px) {
  .anima {
    animation-name: move;
    animation-direction: normal;
    animation-timing-function: linear;
    animation-delay: 2s;
    animation-iteration-count: infinite;
    animation-duration: 20s;
  }
}

@keyframes move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(calc(200px - 100%), 0);
  }
}
</style>
