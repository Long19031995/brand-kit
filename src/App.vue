<template>
  <div class="app">
    <Menu/>

    <div class="view">
      <router-view/>
    </div>

    <Notify/>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Notify from '@/components/Notify.vue'
import hljs from 'highlight.js'

export default {
  name: 'App',

  components: { Menu, Notify },

  mounted () {
    hljs.configure({useBR: true})
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app {
  width: 100vw;
  height: 100vh;
}

.view {
  float: left;
  width: calc(100% - 224px);
  height: 100%;
  overflow-y: auto;
}
</style>
