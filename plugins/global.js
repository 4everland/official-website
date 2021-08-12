import Vue from 'vue'
import BigNumber from 'bignumber.js'

const tools = {
  install(Vue) {
    Vue.prototype.hosting_web = 'https://hosting.4everland.org'
    Vue.prototype.tools = {
      formatBigNum(num) {
        if (num) {
          let str = ''
          num = new BigNumber(num)
          if (Math.abs(num) > 1000000000) {
            num = num.div(1000000000).toFixed(1)
            str = ' B'
          } else if (Math.abs(num) > 1000000) {
            num = num.dividedBy(1000000).toFixed(1)
            str = ' M'
          } else {
            num = num.toFixed()
          }
          const parts = num.toString().split('.')
          parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          return parts.join('.') + str
        } else {
          return '0'
        }
      },
    }
  },
}
Vue.use(tools)
