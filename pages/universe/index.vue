<template>
  <div id="ecosystem">
    <eco-top />
    <eco-explore />
  </div>
</template>

<script>
import ecoTop from '@/components/EcosystemSections/Top.vue'
import ecoExplore from '@/components/EcosystemSections/Explore.vue'

export default {
  components: {
    ecoTop,
    ecoExplore,
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
  background-color: #000;
  font-family: Inter, Arial, sans-serif;
}
</style>
