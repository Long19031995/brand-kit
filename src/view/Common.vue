<template>
  <div class="view-common">
    <div class="title brand-h600">
      Dot
    </div>
    <div class="view-common__dot">
      <Box content="brand-nav-dot brand-bg-n75">
        <div class="brand-nav-dot brand-bg-n75"></div>
      </Box>
      <Box content="brand-nav-dot brand-bg-o100">
        <div class="brand-nav-dot brand-bg-o100"></div>
      </Box>
      <Box content="brand-nav-dot brand-bg-n75">
        <div class="brand-nav-dot brand-bg-n75"></div>
      </Box>
      <Box content="brand-nav-dot brand-bg-n75">
        <div class="brand-nav-dot brand-bg-n75"></div>
      </Box>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div class="title brand-h600">
      Scrollbar
    </div>
    <div class="view-common__scroll">
      <Box content="brand-scrollbar">
        <div class="brand-scrollbar font-regular">
          <p v-for="i in 50">scrollbar</p>
        </div>
      </Box>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewCommon'
}
</script>

<style lang="scss">
.view-common {
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__dot {
    display: flex;
    .box {
      padding: 24px;
      border: 1px solid #eee;
      transition: .15s ease-in-out;
      margin-right: 24px;
      &:hover {
        border: 1px solid transparent;
      }
    }
  }
  .title {
    margin-bottom: 24px;
  }
  .brand-scrollbar {
    width: 248px;
    height: 248px;
    padding: 12px;
    overflow-y: scroll;
    border: 1px solid #eee;
    transition: .15s ease-in-out;
    &:hover {
      border: 1px solid transparent;
    }
  }
}
</style>
