<template>
  <v-container fluid class="main-container">
    <v-row justify="center" align="center" class="text-left">
      <v-col cols="12">
        <h2 class="white--text text-h2 font-weight-bold">JUMP RIGHT IN</h2>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mt-10">
      <v-col>
        <p class="white--text get-start">
          Whether you're an individual eager to explore 4EVERLAND's offerings or
          a developer ready to innovate with our platform, there's no better
          time than now to get started.
        </p>
        <div class="text-right">
          <v-btn color="#6172F3" class="white--text mt-8 start-btn">
            Get Started
            <div class="right-icon">
              <v-img
                class="join_button_icon"
                :src="
                  require('@/assets/imgs/index/newui/arrow-narrow-right.svg')
                "
              ></v-img>
            </div>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'JumpRightIn',
  data: () => ({}),
}
</script>

<style scoped>
.main-container {
  padding: 64px 80px;
  max-width: 100%;
}
.get-start {
  width: 66%;
}
.v-btn {
  justify-content: flex-end !important;
}
.start-btn {
  width: 203px;
  padding: 24px 0 !important;
  border-radius: 48px;
  font-weight: bold;
}
.right-icon {
  padding: 7px;
  border-radius: 20px;
  background-color: #fff;
  margin-left: 24px;
  margin-right: 8px;
}
.join_button_icon {
  width: 24px;
  height: 24px;
  max-width: 24px;
  text-align: center;
}
@media (max-width: 960px) {
  .get-start {
    width: 100%;
  }
}
</style>
