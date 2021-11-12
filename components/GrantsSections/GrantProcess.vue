<template>
  <div class="grant-process">
    <div class="d-flex f-center con">
      <template v-for="(it, i) in list">
        <div :key="i" class="ta-c item">
          <img :src="it.img" style="height: 75px" />
          <div class="mt-4 fz-14 label-1">
            <a v-if="it.link" :href="it.link" target="_blank">{{ it.label }}</a>
            <span v-else>{{ it.label }}</span>
          </div>
        </div>
        <div v-show="i < list.length - 1" :key="i" class="mt-3">
          <v-icon size="50" color="#8B9CA6">mdi-chevron-right</v-icon>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          label: 'Add Accelerated & Hosted by 4EVERLAND',
          img: require('@/assets/imgs/grants/process/code.png'),
          link: '',
        },
        {
          label: 'Submit Your Developer Grant Application Here',
          img: require('@/assets/imgs/grants/process/date.png'),
          link: 'https://forms.gle/iMaFNYdyjWp36msS6',
        },
        {
          label: 'Project Review',
          img: require('@/assets/imgs/grants/process/apps.png'),
        },
        {
          label: 'Approved & Rewards',
          img: require('@/assets/imgs/grants/process/reward.png'),
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.grant-process {
  overflow: auto;
  .con {
    min-width: 560px;
  }
  .item {
    width: 180px;
  }
}
</style>
