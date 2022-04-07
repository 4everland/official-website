import Vue from 'vue'
import BigNumber from 'bignumber.js'

const tools = {
  install(Vue) {
    Vue.prototype.hosting_web = 'https://dashboard.4everland.org'
    Vue.prototype.tools = {
      formatBigNum(num) {
        if (num) {
          let str = ''
          num = new BigNumber(num)
          if (Math.abs(num) > 1000000000) {
            num = num.div(1000000000).toFixed(1)
            str = ' B'
          } else if (Math.abs(num) > 1000000) {
            // num = num.dividedBy(1000000).toFixed(1)
            // str = ' M'
            num = num.toFixed()
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
      parseTime(time, cFormat) {
        if (arguments.length === 0 || !time) {
          return null
        }
        const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
        let date
        if (typeof time === 'object') {
          date = time
        } else {
          if (typeof time === 'string') {
            if (/^[0-9]+$/.test(time)) {
              // support "1548221490638"
              time = parseInt(time)
            } else {
              // support safari
              // https://stackoverflow.com/questions/4310953/invalid-date-in-safari

              time = time.replace(/-/gm, '/')
            }
          }

          if (typeof time === 'number' && time.toString().length === 10) {
            time = time * 1000
          }
          date = new Date(time)
        }
        const formatObj = {
          y: date.getFullYear(),
          m: date.getMonth() + 1,
          d: date.getDate(),
          h: date.getHours(),
          i: date.getMinutes(),
          s: date.getSeconds(),
          a: date.getDay(),
        }
        const timeStr = format.replace(/{([ymdhisa])+}/g, (result, key) => {
          const value = formatObj[key]
          // Note: getDay() returns 0 on Sunday
          if (key === 'a') {
            return ['日', '一', '二', '三', '四', '五', '六'][value]
          }
          return value.toString().padStart(2, '0')
        })
        return timeStr
      },
    }
  },
}
Vue.use(tools)
