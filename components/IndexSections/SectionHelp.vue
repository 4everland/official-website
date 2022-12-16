<template>
  <div id="help">
    <v-container>
      <div class="universe-title">Why Choose 4EVERLAND?</div>
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
          tips: 'One-stop solution for DApps building',
          img: require('@/assets/imgs/index/help/help_1.png'),
        },
        {
          tips: 'Provides resources of multiple ecosystems',
          img: require('@/assets/imgs/index/help/help_2.png'),
        },
        {
          tips: 'Compatible with traditional development environments',
          img: require('@/assets/imgs/index/help/help_3.png'),
        },
        {
          tips: 'Write once, run any blockchain',
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
    font-size: 36px;
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
