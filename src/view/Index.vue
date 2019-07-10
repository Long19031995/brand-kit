<template>
  <div class="view">
    <Menu/>
    <router-view/>
  </div>
</template>

<script>
import Menu from './Menu.vue'

export default {
  name: 'View',

  components: { Menu }
}
</script>
