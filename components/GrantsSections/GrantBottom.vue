<template>
  <div>
    <h2>Grantee Use Cases</h2>
    <v-row>
      <v-col v-for="(it, i) in granteeList" :key="i" cols="6" md="3">
        <a class="d-b bg-black hover-1 item-bg" :href="it.url" target="_blank">
          <div class="d-flex al-c pa-3">
            <div class="bdrs-100 shrink-0 ov-h">
              <v-img width="40" :src="it.logo"></v-img>
            </div>
            <div class="ml-2 lh-1">
              <div class="fw-b" style="color: #132642">{{ it.title }}</div>
              <div class="mt-1 fz-14 op-8" style="color: #6c7789">
                {{ it.type }}
              </div>
            </div>
          </div>

          <v-img height="160" :src="it.cover"></v-img>

          <div class="pa-3 fz-14 op-9" style="min-height: 88px; color: #6c7789">
            {{ it.desc }}
          </div>
        </a>
      </v-col>
    </v-row>

    <h2>Application Process</h2>
    <process></process>

    <h2>Are you ready?</h2>
    <div class="label-1 fz-14 pos-r">
      <div>Individuals, teams and researchers</div>
      <div class="mt-1">are all welcome to submit applications.</div>
      <div class="mt-10">
        <a
          class="grant-btn1 hover-1"
          href="https://docs.google.com/forms/d/e/1FAIpQLSe57urVpB68gbkUaeHpzDt1hmry_dcUHgIeY1pwc2vVR-00WA/viewform?vc=0&c=0&w=1&flr=0"
          target="_blank"
          >SUBMIT YOUR DEVELOPER GRANT APPLICATION HERE</a
        >
      </div>
      <div class="mt-6">
        For more details contact us at contact@4everland.org
      </div>

      <div
        class="pos-a go-img"
        :class="{
          mobile: asMobile,
        }"
      >
        <v-img :src="goImg" max-width="300" />
      </div>
    </div>

    <div class="pa-10"></div>
  </div>
</template>

<script>
import Process from './GrantProcess.vue'

export default {
  components: {
    Process,
  },
  data() {
    return {
      goImg: require('@/assets/imgs/grants/go.png'),
      granteeList: [
        {
          title: 'Uniswap',
          type: 'DEX',
          url: 'https://uniswap-org.4everland.app/',
          desc: 'Uniswap is the first automated market-making transaction protocol built on the Ethereum.',
          logo: require('@/assets/imgs/grants/case/00.png'),
          cover: require('@/assets/imgs/grants/case/0.png'),
        },
        {
          title: 'DOGECOIN',
          type: 'Public Chain',
          url: 'https://dogecoin.4everland.app/',
          desc: 'Dogecoin is an open source peer-to-peer digital currency, favored by Shiba Inus worldwide.',
          logo: require('@/assets/imgs/grants/case/11.png'),
          cover: require('@/assets/imgs/grants/case/1.png'),
        },
        {
          title: 'Yam Finance',
          type: 'DeFi',
          url: 'https://yam-www.4everland.app/',
          desc: 'Yam Finance is an experimental protocol.',
          logo: require('@/assets/imgs/grants/case/22.png'),
          cover: require('@/assets/imgs/grants/case/2.png'),
        },
        {
          title: 'LOSSST',
          type: 'Game',
          url: 'https://lossst.4everland.app/',
          desc: 'Web games: A snake in space.',
          logo: require('@/assets/imgs/grants/case/33.png'),
          cover: require('@/assets/imgs/grants/case/3.png'),
        },
      ],
    }
  },
  computed: {
    asMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },
  },
}
</script>
<style scoped>
.item-bg {
  background: linear-gradient(120deg, #e1f2ff, #fff6f6);
}
</style>
