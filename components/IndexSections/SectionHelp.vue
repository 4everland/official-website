<template>
  <div id="help">
    <v-container>
      <div class="universe-title">
        4EVERLAND Can Help You Rebuild the Web's Foundation Layer and Transition
        to a New and Unbiased Web 3.0.
      </div>
      <v-row>
        <v-col v-for="(item, index) in imgItem" :key="index" cols="6" md="3">
          <v-img
            :src="item.img"
            :height="$vuetify.breakpoint.smAndDown ? 100 : 180"
            contain
          ></v-img>
          <div class="item-tips" v-html="item.tips"></div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgItem: [
        {
          tips: 'Write once </br> Run any blockchain',
          img: require('@/assets/imgs/index/help/help_1.png'),
        },
        {
          tips: 'DApps can be created </br> without centralized components',
          img: require('@/assets/imgs/index/help/help_2.png'),
        },
        {
          tips: 'Compatible with the traditional </br> development environment',
          img: require('@/assets/imgs/index/help/help_3.png'),
        },
        {
          tips: 'Provide multiple </br> ecological resources',
          img: require('@/assets/imgs/index/help/help_4.png'),
        },
      ],
    }
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>
<style lang="less" scoped>
#help {
  .universe-title {
    max-width: 800px;
    font-size: 26px;
    font-family: 'Ubuntu-Bold', sans-serif !important;
    font-weight: bold;
    color: #161617;
    text-align: center;
    margin: 110px auto;
  }
  .item-tips {
    text-align: center;
    font-size: 18px;
    color: #161617;
    font-family: 'Ubuntu-Bold', sans-serif !important;
    font-weight: bold;
    margin-top: 38px;
  }
}
@media (max-width: 960px) {
  #help {
    .universe-title {
      font-size: 18px;
      font-weight: normal;
      margin: 45px auto;
      font-family: 'Ubuntu', sans-serif !important;
    }
    .item-tips {
      font-size: 12px;
      font-weight: normal;
      margin-top: 20px;
      font-family: 'Ubuntu', sans-serif !important;
    }
  }
}
</style>
