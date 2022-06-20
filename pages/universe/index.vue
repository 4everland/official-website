<template>
  <div id="ecosystem">
    <eco-top />
    <eco-explore />
    <eco-grant />
  </div>
</template>

<script>
import ecoTop from '@/components/EcosystemSections/Top.vue'
import ecoExplore from '@/components/EcosystemSections/Explore.vue'
import ecoGrant from '@/components/EcosystemSections/Grant.vue'

export default {
  components: {
    ecoTop,
    ecoExplore,
    ecoGrant,
  },
  data() {
    return {
      title:
        'Universe| Empowered Project Towards to New Phase of Web.3.0 Tech |4EVERLAND',
      description: 'Display your Web.3.0 tech around the world with 4EVERLAND',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
      ],
    }
  },
}
</script>
<style scoped>
#ecosystem {
  background-color: #fff;
}
@font-face {
  font-family: 'Ubuntu';
  src: url('../../static/fonts/Ubuntu-R-9.ttf');
}
@font-face {
  font-family: 'BookmanOldStyle-Bold';
  src: url('../../static/fonts/Bookman-Old-Style-Bold-2.ttf');
}
</style>
