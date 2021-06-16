import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
    preLoad: 1.33,
    error: '',
    loading: '',
    attempt: 2,
    throttleWait: 500
})