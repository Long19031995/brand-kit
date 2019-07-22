<template>
  <div class="view-icon">
    <Box v-for="(icon, index) in listIcon"
          :content="`brand-icon-${icon}`"
          :key="index">
      <div :class="`brand-icon-${icon}`"></div>
    </Box>
  </div>
</template>

<script>
export default {
  name: 'Icon',

  data () {
    return {
      listIcon: [
        'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up',
        'arrow-tail-down', 'arrow-tail-left', 'arrow-tail-right', 'arrow-tail-up',
        'check', 'cross', 'medal', 'single', 'star'
      ]
    }
  }
}
</script>

<style lang="scss">
.view-icon {
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  .box {
    padding: 24px;
    border: 1px solid #eee;
    margin-right: 24px;
    transition: .15s ease-in-out;
    &:hover {
      cursor: pointer;
      border: 1px solid transparent;
    }
  }
}
</style>
