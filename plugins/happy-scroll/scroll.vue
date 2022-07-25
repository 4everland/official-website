<template>
  <div class="happy-scroll" ref="happy-scroll">
    <div
      class="happy-scroll-container"
      ref="container"
      :style="[initSize]"
      @scroll.stop="onScroll"
    >
      <div
        class="happy-scroll-content"
        ref="content"
        :style="[contentBorderStyle]"
      >
        <slot></slot>
      </div>
    </div>
    <happy-scroll-strip
      ref="stripY"
      v-if="!hideVertical"
      v-bind="$attrs"
      v-on="$listeners"
      :throttle="throttle"
      :move="moveY"
      @change="slideYChange"
    >
    </happy-scroll-strip>
    <happy-scroll-strip
      ref="stripX"
      v-if="!hideHorizontal"
      horizontal
      v-bind="$attrs"
      v-on="$listeners"
      :throttle="throttle"
      :move="moveX"
      @change="slideXChange"
    >
    </happy-scroll-strip>
  </div>
</template>
<script>
/* eslint-disable */

import Vue$ from 'vue'
import { generateThrottle, debounce } from './util'
import HappyScrollStrip from './strip.vue'
import ElementResizeDetectorMaker from 'element-resize-detector'
import './scroll.css'
let Vue = Vue$
if (typeof window !== 'undefined' && window.Vue) {
  Vue = window.Vue
}
export default {
  name: 'happy-scroll',
  inheritAttrs: false,
  components: {
    HappyScrollStrip,
  },
  props: {
    scrollTop: {
      type: [Number, String],
      default: 0,
    },
    scrollLeft: {
      type: [Number, String],
      default: 0,
    },
    hideVertical: Boolean,
    hideHorizontal: Boolean,
    throttle: {
      type: Number,
      default: 14,
    },
    resize: Boolean,
    smallerMoveH: {
      type: String,
      default: '',
    },
    smallerMoveV: {
      type: String,
      default: '',
    },
    biggerMoveH: {
      type: String,
      default: '',
    },
    biggerMoveV: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      initSize: {},
      moveX: +this.scrollLeft,
      moveY: +this.scrollTop,
      scrollThrottle: generateThrottle(this.throttle),
      browserHSize: 0,
      browserVSize: 0,
      isScrollNotUseSpace: undefined,
    }
  },
  watch: {
    scrollTop(newVal) {
      this.$refs.container.scrollTop = this.moveY = +newVal
    },
    scrollLeft(newVal) {
      this.$refs.container.scrollLeft = this.moveX = +newVal
    },
    hideVertical(newVal) {
      if (!newVal) {
        this.$nextTick(this.computeStripY)
      }
    },
    hideHorizontal(newVal) {
      if (!newVal) {
        this.$nextTick(this.computeStripX)
      }
    },
  },
  computed: {
    contentBorderStyle() {
      if (this.isScrollNotUseSpace === undefined) {
        return {}
      }

      return {
        'border-right': `${20 - this.browserHSize}px solid transparent`,
        'border-bottom': `${20 - this.browserVSize}px solid transparent`,
      }
    },
  },
  methods: {
    slideYChange(newVal) {
      this.$refs.container.scrollTop = newVal
      this.$emit('update:scrollTop', this.$refs.container.scrollTop)
    },
    slideXChange(newVal) {
      this.$refs.container.scrollLeft = newVal
      this.$emit('update:scrollLeft', this.$refs.container.scrollLeft)
    },
    onScroll(e) {
      if (!this.scrollThrottle(Date.now())) return false
      this.moveY = e.target.scrollTop
      this.moveX = e.target.scrollLeft
      this.updateSyncScroll()
    },
    initBrowserSize() {
      if (this.isScrollNotUseSpace === undefined) {
        return
      }

      if (this.isScrollNotUseSpace === true) {
        this.browserHSize = 0
        this.browserVSize = 0
      } else {
        this.browserHSize =
          this.$refs.container.offsetWidth - this.$refs.container.clientWidth
        this.browserVSize =
          this.$refs.container.offsetHeight - this.$refs.container.clientHeight
      }
    },
    computeStripX() {
      if (this.hideHorizontal) {
        return
      }
      const clientEle = this.$refs['happy-scroll']
      const slotEle = this.$slots.default[0]['elm']
      this.$refs.stripX.computeStrip(slotEle.scrollWidth, clientEle.clientWidth)
    },
    computeStripY() {
      if (this.hideVertical) {
        return
      }
      const clientEle = this.$refs['happy-scroll']
      const slotEle = this.$slots.default[0]['elm']
      this.$refs.stripY.computeStrip(
        slotEle.scrollHeight,
        clientEle.clientHeight
      )
    },
    resizeListener() {
      if (!this.resize) return

      let elementResizeDetector = ElementResizeDetectorMaker({
        strategy: 'scroll',
        callOnAdd: false,
      })

      const ele = this.$slots.default[0]['elm']
      let lastHeight = ele.clientHeight
      let lastWidth = ele.clientWidth
      elementResizeDetector.listenTo(ele, (element) => {
        this.computeStripX()
        this.computeStripY()
        this.initBrowserSize()
        let moveTo
        if (element.clientHeight < lastHeight) {
          moveTo = this.smallerMoveH.toLocaleLowerCase()
        }
        if (element.clientHeight > lastHeight) {
          moveTo = this.biggerMoveH.toLocaleLowerCase()
        }

        if (moveTo === 'start') {
          this.moveY = 0
          this.slideYChange(this.moveY)
        }
        if (moveTo === 'end') {
          this.moveY = element.clientHeight
          this.slideYChange(this.moveY)
        }

        lastHeight = element.clientHeight

        moveTo = ''
        if (element.clientWidth < lastWidth) {
          moveTo = this.smallerMoveV.toLocaleLowerCase()
        }
        if (element.clientWidth > lastWidth) {
          moveTo = this.biggerMoveV.toLocaleLowerCase()
        }
        if (moveTo === 'start') {
          this.moveX = 0
          this.slideXChange(this.moveX)
        }
        if (moveTo === 'end') {
          this.moveX = element.clientWidth
          this.slideXChange(this.moveX)
        }

        lastWidth = element.clientWidth
      })
    },
    setContainerSize() {
      this.initSize = {
        width: this.$refs['happy-scroll'].clientWidth + 20 + 'px',
        height: this.$refs['happy-scroll'].clientHeight + 20 + 'px',
      }
    },
    checkScrollMode() {
      // eslint-disable-next-line
      if (Vue._happyJS._isScrollNotUseSpace !== undefined) {
        return
      }

      const ele = this.$slots.default[0]['elm']
      const container = this.$refs.container
      if (
        ele.offsetHeight > container.clientHeight ||
        ele.offsetWidth > container.clientWidth
      ) {
        if (
          container.offsetWidth > container.clientWidth ||
          container.offsetHeight > container.clientHeight
        ) {
          // eslint-disable-next-line
          Vue._happyJS._isScrollNotUseSpace = false
        } else {
          // eslint-disable-next-line
          Vue._happyJS._isScrollNotUseSpace = true
        }
        // eslint-disable-next-line
        this.isScrollNotUseSpace = Vue._happyJS._isScrollNotUseSpace
      }
    },
  },
  beforeCreate() {
    // eslint-disable-next-line
    const happyJS = (Vue._happyJS = Vue._happyJS || {})

    this.isScrollNotUseSpace = happyJS._isScrollNotUseSpace
  },
  created() {
    this.updateSyncScroll = debounce(function () {
      this.$emit('update:scrollTop', this.moveY)
      this.$emit('update:scrollLeft', this.moveX)
    }, this.throttle)
  },
  mounted() {
    this.setContainerSize()
    this.$nextTick(() => {
      this.computeStripX()
      this.computeStripY()
      this.checkScrollMode()
      this.initBrowserSize()

      this.$nextTick(() => {
        this.scrollTop && (this.$refs.container.scrollTop = +this.scrollTop)
        this.scrollLeft && (this.$refs.container.scrollLeft = +this.scrollLeft)
      })
    })

    this.resizeListener()

    this.$watch('browserHSize', this.setContainerSize)
    this.$watch('browserVSize', this.setContainerSize)
  },
}
</script>
