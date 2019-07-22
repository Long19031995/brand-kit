<template>
  <div class="view-logo-app">
    <div class="view-logo-app__item">
      <Box>
        <div class="brand-logo-app fit">
          <div class="brand-app dsc"></div>
        </div>
      </Box>
    </div>

    <div class="view-logo-app__item">
      <Box>
        <div class="brand-logo-app fit">
          <div class="brand-app phub"></div>
        </div>
      </Box>
    </div>

    <div class="view-logo-app__item">
      <Box>
        <div class="brand-logo-app">
          <div class="brand-app dsc"></div>
        </div>
      </Box>
    </div>

    <div class="view-logo-app__item">
      <Box>
        <div class="brand-logo-app">
          <div class="brand-app phub"></div>
        </div>
      </Box>
    </div>

    <div class="view-logo-app__item">
      <Box>
        <div class="brand-logo-app brand-bg-o200">
          <div class="brand-app dsc white"></div>
        </div>
      </Box>
    </div>

    <div class="view-logo-app__item">
      <Box>
        <div class="brand-logo-app brand-bg-o200">
          <div class="brand-app phub white"></div>
        </div>
      </Box>
    </div>

    <div class="view-logo-app__item">
      <Box>
        <div class="brand-logo-app fit">
          <div class="brand-app phub"></div>
          <div class="brand-name">PrintHub</div>
        </div>
      </Box>
    </div>

    <div class="view-logo-app__item">
      <Box>
        <div class="brand-logo-app">
          <div class="brand-app phub"></div>
          <div class="brand-name">PrintHub</div>
        </div>
      </Box>
    </div>

    <div class="view-logo-app__item">
      <Box>
        <div class="brand-logo-app fit">
          <div class="brand-app dsc"></div>
          <div class="brand-name">Dropship Connector</div>
        </div>
      </Box>
    </div>

    <div class="view-logo-app__item">
      <Box>
        <div class="brand-logo-app">
          <div class="brand-app dsc"></div>
          <div class="brand-name">Dropship Connector</div>
        </div>
      </Box>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoApp'
}
</script>

<style lang="scss">
.view-logo-app {
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__item {
    border: 1px solid #eee;
    transition: .15s ease-in-out;
    margin-bottom: 24px;
    &:hover {
      cursor: pointer;
      border: 1px solid transparent;
    }
  }
}
</style>
