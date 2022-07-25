/* eslint-disable */

import HappyScroll from './scroll.vue'

if (typeof window !== 'undefined' && window.Vue) {
  // eslint-disable-next-line
  Vue.component('happy-scroll', HappyScroll)
}

export default {
  install(Vue) {
    Vue.component('happy-scroll', HappyScroll)
  },
}

export { HappyScroll }
