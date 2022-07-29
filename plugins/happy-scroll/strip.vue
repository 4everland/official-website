<template>
  <div
    ref="stripContainer"
    class="happy-scroll-strip"
    :style="[initLocation]"
    :class="[
      horizontal
        ? 'happy-scroll-strip--horizontal'
        : 'happy-scroll-strip--vertical',
    ]"
    @wheel.capture.stop="handlerWheel"
  >
    <div
      ref="strip"
      class="happy-scroll-bar"
      :style="[
        translate,
        { [config.sizeAttr]: length + 'px' },
        initSize,
        { background: color },
        { opacity: isOpacity },
      ]"
      @mousedown.stop="handlerMouseDown"
    ></div>
  </div>
</template>
<script>
/* eslint-disable */

import { on, off, generateThrottle } from './util'
export default {
  name: 'happy-scroll-strip',
  props: {
    horizontal: Boolean,
    left: Boolean,
    top: Boolean,
    move: {
      type: Number,
      default: 0,
    },
    size: {
      type: [Number, String],
      default: 4,
    },
    minLengthV: {
      type: Number,
      default: 40,
    },
    minLengthH: {
      type: Number,
      default: 40,
    },
    color: {
      type: String,
      default: 'rgba(51,51,51,0.2)',
    },
    throttle: {
      type: Number,
      default: 14,
    },
  },
  data() {
    return {
      config: {},
      startMove: false,
      binded: false,
      length: 0,
      percentage: 0,
      maxOffset: 0,
      currentOffset: 0,
      moveThrottle: generateThrottle(this.throttle),
    }
  },
  watch: {
    currentOffset(newVal) {
      if (newVal === 0) {
        this.emitLocationEvent('start', 0)
      } else if (newVal === this.maxOffset) {
        this.emitLocationEvent('end', newVal / this.percentage)
      }
    },
  },
  computed: {
    initSize() {
      return {
        [this.horizontal ? 'height' : 'width']: this.size + 'px',
      }
    },
    isOpacity() {
      return this.percentage < 1 ? 1 : 0
    },
    translate() {
      let offset = this.move * this.percentage

      if (!this.$refs.stripContainer) return

      if (offset < 0) {
        offset = 0
      }
      if (offset > this.maxOffset) {
        offset = this.maxOffset
      }
      this.currentOffset = offset
      return {
        transform: `${this.config.translate}(${offset}px)`,
      }
    },
    initLocation() {
      if (this.horizontal) {
        return this.top ? { top: 0, bottom: 'auto' } : ''
      }
      return this.left ? { left: 0, right: 'auto' } : ''
    },
  },
  methods: {
    emitLocationEvent(type, outsideOffset) {
      const direction = this.horizontal ? 'horizontal' : 'vertical'
      this.$emit(`${direction}-${type}`, outsideOffset)
    },

    computeStrip(scrollSize, clientSize) {
      const currentSize = this.$refs.stripContainer[this.config.client]

      let length = currentSize * (clientSize / scrollSize)
      // if (length > 240) {
      //   length = 240
      // }
      this.length = length
      let minLength = this.horizontal ? this.minLengthH : this.minLengthV
      if (minLength < 1) {
        minLength = currentSize * minLength
      }
      this.length = this.length < minLength ? minLength : this.length
      const space = (this.maxOffset = currentSize - this.length)

      this.percentage = space / (scrollSize - clientSize)
    },
    bindEvents() {
      if (this.binded) return
      on(document, 'mouseup', this.handlerMouseUp)
      on(document, 'mousemove', this.handlerMove)
      this.binded = true
    },
    handlerMouseDown(event) {
      if (event.button !== 0) {
        return
      }

      event.preventDefault()
      event.stopPropagation()
      event.stopImmediatePropagation()

      this.startMove = true
      this.axis = event[this.config.clientAxis]

      this.bindEvents()

      return false
    },
    handlerMouseUp() {
      this.startMove = false
    },
    handlerMove(event) {
      if (!this.startMove || !this.moveThrottle(Date.now())) return

      event.preventDefault()
      event.stopPropagation()
      event.stopImmediatePropagation()

      const parentRect = this.$refs.stripContainer.getBoundingClientRect()
      const rect = this.$refs.strip.getBoundingClientRect()
      const contrastParentOffset =
        rect[this.config.direction] - parentRect[this.config.direction]

      const offset =
        event[this.config.clientAxis] - this.axis + contrastParentOffset
      this.axis = event[this.config.clientAxis]

      this.changeOffset(offset)
    },
    handlerWheel(event) {
      const parentRect = this.$refs.stripContainer.getBoundingClientRect()
      const rect = this.$refs.strip.getBoundingClientRect()
      const contrastParentOffset =
        rect[this.config.direction] - parentRect[this.config.direction]
      const offset = contrastParentOffset + event[this.config.wheelDelta]

      this.changeOffset(offset, event)
    },
    changeOffset(offset, event) {
      if (offset < 0) {
        offset = 0
      }

      if (offset > this.maxOffset) {
        offset = this.maxOffset
      }

      if (event && offset > 0 && offset < this.maxOffset) {
        event.preventDefault()
        event.stopImmediatePropagation()
      }
      this.currentOffset = offset
      this.$refs.strip.style.transform = `${this.config.translate}(${offset}px)`

      this.$emit('change', offset / this.percentage)
    },
  },
  created() {
    const configs = {
      h: {
        sizeAttr: 'width',
        client: 'clientWidth',
        clientAxis: 'clientX',
        translate: 'translateX',
        direction: 'left',
        wheelDelta: 'deltaX',
      },
      v: {
        sizeAttr: 'height',
        client: 'clientHeight',
        clientAxis: 'clientY',
        translate: 'translateY',
        direction: 'top',
        wheelDelta: 'deltaY',
      },
    }

    this.config = this.horizontal ? configs['h'] : configs['v']
  },
  destroyed() {
    off(document, 'mouseup', this.handlerClickUp)
    off(document, 'mousemove', this.handlerMove)
  },
}
</script>
