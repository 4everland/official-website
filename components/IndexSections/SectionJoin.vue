<template>
  <v-container fluid class="main-container">
    <v-row justify="center" align="center" class="text-left">
      <v-col cols="12">
        <h2 class="white--text header-title font-weight-bold">JUMP RIGHT IN</h2>
      </v-col>
    </v-row>
    <div class="mt-10 background-image">
      <v-row justify="center" align="center">
        <v-col>
          <p class="white--text get-start">
            Whether you're an individual eager to explore 4EVERLAND's offerings
            or a developer ready to innovate with our platform, there's no
            better time than now to get started.
          </p>
          <div class="get-btn">
            <v-btn
              color="#6172F3"
              href="https://dashboard.4everland.org/"
              target="_blank"
              class="white--text mt-16 start-btn"
            >
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
    </div>
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
.background-image {
  height: 400px;
  width: 1280px;
  background-image: url('@/assets/imgs/network/join-banner.png');
  background-size: cover;
  background-position: center;
  padding: 100px 40px;
}
.header-title {
  font-size: 44px;
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
.get-btn {
  text-align: right;
}
@media (max-width: 960px) {
  .main-container {
    padding: 64px 20px;
  }
  .get-start {
    width: 100%;
  }
  .background-image {
    height: 480px;
    width: 100%;
    background-image: url('@/assets/imgs/network/join-small.png');
    background-size: cover;
    background-position: center;
    padding: 100px 40px;
    border: 1px solid #ffffff40;
    border-radius: 24px;
  }
  .get-btn {
    text-align: center;
  }
  .header-title {
    font-size: 24px;
  }
}
@media (min-width: 1440px) {
  .main-container {
    margin: 0 auto;
    width: 1440px;
  }
}
</style>
