<template>
  <div class="view-form">
    <Box>
      <div class="brand-dropdown">
        <div v-for="i in 5" class="brand-dropdown__item">
          Option {{ i }}
        </div>
      </div>
    </Box>
  </div>
</template>

<script>
export default {
  name: 'ViewForm'
}
</script>

<style lang="scss">
.view-form {
  padding: 24px;
  display: flex;
  justify-content: center;
}
</style>
