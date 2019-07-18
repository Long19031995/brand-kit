<template>
  <div @click="copyContent" class="box">
    <slot/>
  </div>
</template>

<script>
import pretty from 'pretty'
import notify from '@/utils/notify'

export default {
  name: 'Box',

  props: {
    content: {
      type: String,
      default: ''
    }
  },

  methods: {
    copyContent () {
      const content = this.content || pretty(this.$el.innerHTML)

      this.copyToClipboard(content)

      this.showNotify()
    },

    copyToClipboard (content) {
      const el = document.createElement('textarea')
      el.value = content
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    },

    showNotify() {
      notify.emit('copied to clipboard')
    }
  }
}
</script>

<style lang="scss">
.box {
  &:hover {
    cursor: pointer;
  }
}
</style>
