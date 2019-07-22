<template>
  <div class="view-logo">
    <div class="view-logo__item">
      <Box>
        <div class="brand-logo fit">
          <div class="brand-logo-bflow"></div>
        </div>
      </Box>
    </div>

    <div class="view-logo__item">
      <Box>
        <div class="brand-logo">
          <div class="brand-logo-bflow"></div>
        </div>
      </Box>
    </div>

    <div class="view-logo__item">
      <Box>
        <div class="brand-logo brand-bg-o200">
          <div class="brand-logo-bflow white"></div>
        </div>
      </Box>
    </div>

    <div class="view-logo__item">
      <Box>
        <div class="brand-logo fit">
          <div class="brand-logo-bflow"></div>
          <div class="brand-logo-boost">Boostflow</div>
        </div>
      </Box>
    </div>

    <div class="view-logo__item">
      <Box>
        <div class="brand-logo">
          <div class="brand-logo-bflow black"></div>
          <div class="brand-logo-boost">Boostflow</div>
        </div>
      </Box>
    </div>

    <div class="view-logo__item">
      <Box>
        <div class="brand-logo">
          <div class="brand-logo-bflow"></div>
          <div class="brand-logo-boost">Boostflow</div>
        </div>
      </Box>
    </div>

    <div class="view-logo__item">
      <Box>
        <div class="brand-logo">
          <div class="brand-logo-bflow"></div>
          <div class="brand-logo-boost">Boost</div>
          <div class="brand-logo-app">Upsell</div>
        </div>
      </Box>
    </div>

    <div class="view-logo__item">
      <Box>
        <div class="brand-logo">
          <div class="brand-logo-bflow"></div>
          <div class="brand-logo-boost">Boostflow</div>
          <div class="brand-logo-app">Upsell</div>
        </div>
      </Box>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewLogo'
}
</script>

<style lang="scss">
.view-logo {
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  .box {
    margin-bottom: 24px;
    border: 1px solid #eee;
    transition: .15s ease-in-out;
    &:hover {
      border: 1px solid transparent;
    }
  }
}
</style>
