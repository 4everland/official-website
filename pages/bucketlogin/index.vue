<template>
  <div id="bucketlogin">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="img-box my-16">
            <a href="https://bucket.4everland.org/#/login">
              <v-img
                contain
                class="ma-auto"
                :src="require('@/assets/imgs/bucket/login-bg.png')"
                max-width="800px"
              ></v-img>
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {},
}
</script>
<style scoped>
#bucketlogin {
  background-color: #fff;
}
.img-box {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}
.text-box {
  font-size: 48px;
  font-weight: bold;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 120px;
  text-align: center;
}
.login {
  color: #fff;
}
.bucket-name {
  color: #4a96fa;
}
.bucket-btn {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 250px;
}
</style>
