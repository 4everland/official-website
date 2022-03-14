<script>
/* eslint-disable vue/no-v-html */
</script>

<template>
  <div>
    <div class="grant-process">
      <div class="d-flex f-center con">
        <template v-for="(it, i) in list">
          <div
            :key="i"
            class="ta-c item"
            :class="it.link ? 'link-1' : 'label-1'"
            @click="onItem(it)"
          >
            <img :src="it.img" style="height: 75px" />
            <div class="mt-4 fz-14">
              <span>{{ it.label }}</span>
            </div>
          </div>
          <div v-show="i < list.length - 1" :key="i" class="mt-3">
            <v-icon size="50" color="#8B9CA6">mdi-chevron-right</v-icon>
          </div>
        </template>
      </div>
    </div>

    <v-dialog v-model="showCode" max-width="700">
      <div class="bd-b2 pa-8 pos-r">
        <div class="pos-a right-0 top-0 pa-5 hover-1" @click="showCode = false">
          <v-icon>mdi-close</v-icon>
        </div>
        <h3>Copy this code on your website footer</h3>
        <div v-for="(it, i) in codeList" :key="i">
          <v-row>
            <v-col cols="8">
              <div class="d-flex al-c mt-8 mb-5">
                <span class="fz-18">{{ it.type }}</span>
                <v-btn
                  :color="it.copied ? 'success' : 'primary'"
                  small
                  class="ml-auto"
                  @click="onCopy(it)"
                  >{{ it.copied ? 'Copied' : 'Copy' }}</v-btn
                >
              </div>
              <div class="pa-6 gray-3 fz-14" style="border: 1px solid #000">
                {{ it.html }}
              </div>
            </v-col>
            <v-col cols="4">
              <div class="mt-8">Example</div>
              <div class="mt-6 code-demo fz-14" v-html="it.html"></div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import * as clipboard from 'clipboard-polyfill/text'

export default {
  data() {
    return {
      list: [
        {
          label: 'Add `Powered by 4EVERLAND`',
          img: require('@/assets/imgs/grants/process/code.png'),
          link: 'showCode',
        },
        {
          label: 'Submit Your Developer Grant Application Here',
          img: require('@/assets/imgs/grants/process/date.png'),
          link: 'https://docs.google.com/forms/d/e/1FAIpQLSe57urVpB68gbkUaeHpzDt1hmry_dcUHgIeY1pwc2vVR-00WA/viewform?vc=0&c=0&w=1&flr=0',
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
      showCode: false,
      codeList: [
        {
          type: 'Text',
          html: `<a href="https://4everland.org" target="blank">Powered by 4EVERLAND</a>`,
        },
        {
          type: 'Picture',
          html: `<a href="https://4everland.org" target="blank">
		  	<img src="https://hosting.4everland.org/img/brand.png" alt="4EVERLAND" />
			</a>`,
        },
      ],
    }
  },
  methods: {
    onItem(it) {
      if (it.link === 'showCode') {
        this.showCode = true
      } else if (it.link) {
        window.open(it.link)
      }
    },
    async onCopy(it) {
      try {
        await clipboard.writeText(it.html)
        // this.$toast('Copied to clipboard !')
        this.$set(it, 'copied', true)
        setTimeout(() => {
          this.$set(it, 'copied', false)
        }, 1e3)
      } catch (error) {
        // this.$toast('Copied fail')
      }
    },
  },
}
</script>

<style lang="scss">
.grant-process {
  overflow: auto;
  .con {
    min-width: 600px;
  }
  .item {
    width: 180px;
  }
}
.code-demo img {
  width: 100%;
}
</style>
