<template>
  <v-container class="px-15 pt-15 pb-8 white">
    <v-row class="pb-15 bd-dash">
      <v-col cols="12" md="2" lg="2">
        <div class="text-center mb-5">
          <v-avatar size="74">
            <img src="http://iph.href.lu/200x200?fg=666666&bg=cccccc" alt="" />
          </v-avatar>
        </div>
        <div class="text-center">
          <v-btn rounded outlined color="primary">Website</v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="10" lg="10">
        <div class="text-h6 grey--text text--darken-4">Upland</div>
        <div class="grey--text text--darken-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae nulla
          tenetur debitis eligendi nisi ad fugit fuga doloremque, commodi quos,
          distinctio nam sit eius? Inventore iste molestias minima veritatis
          quis, vitae aliquam voluptates numquam, libero esse eos illo commodi
          debitis?
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style scoped>
.bd-dash {
  border-bottom: 1px dashed #dbdbdb;
}
</style>
