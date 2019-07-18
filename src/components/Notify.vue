<template>
  <div v-if="message" class="notify">
    {{ message }}
  </div>
</template>

<script>
import notify from '@/utils/notify'

export default {
  name: 'Notify',

  data () {
    return {
      message: ''
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      notify.on((message) => {
        this.message = ''
        this.$nextTick(() => {
          this.message = message
        })
      })
    }
  }
}
</script>

<style lang="scss">
.notify {
  position: fixed;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  color: white;
  border-radius: 2px;
  padding: 4px 16px;
  animation-name: slideUp;
  animation-duration: 2.1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
@keyframes slideUp {
  0% { transform: translateY(16px) translateX(-50%); opacity: 0 }
  10% { transform: translateY(0) translateX(-50%); opacity: 1 }
  90% { transform: translateY(0) translateX(-50%); opacity: 1 }
  100% { transform: translateY(16px) translateX(-50%); opacity: 0 }
}
</style>
