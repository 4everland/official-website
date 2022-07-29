<template>
  <div id="IpfsAbout">
    <v-container>
      <div
        class="text-h4 font-weight-bold text-center mb-6"
        style="color: #132642"
      >
        Plan Details
      </div>
      <div class="mt-16 text-center">
        <v-img :src="table"></v-img>
        <v-btn
          :href="hosting_web"
          target="_blank"
          tile
          class="start-btn"
          width="203"
          height="50"
          color="#452c92"
          >Start Deploying
        </v-btn>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      table: require('@/assets/imgs/price/table.png'),
    }
  },
}
</script>
<style lang="scss" scoped>
.start-btn {
  color: #fff;
  margin-top: 75px;
  font-size: 18px;
  font-weight: bold;
}
</style>
