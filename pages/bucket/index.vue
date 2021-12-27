<template>
  <div id="bucket">
    <bucket-top />
    <bucket-main />
  </div>
</template>

<script>
import BucketTop from '@/components/BucketSections/BucketTop.vue'
import BucketMain from '@/components/BucketSections/BucketMain.vue'

export default {
  components: {
    BucketTop,
    BucketMain,
  },
  methods: {},
}
</script>
<style scoped>
#bucket {
  background-color: #fff;
}
</style>
