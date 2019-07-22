<template>
  <div class="view-depths font-regular">
    <div class="title brand-h600">
      Standard
    </div>
    <div class="content">
      <Box content="brand-depths z500">
        <div class="brand-depths z500">
          z500
        </div>
      </Box>
      <Box content="brand-depths z300">
        <div class="brand-depths z300">
          z300
        </div>
      </Box>
      <Box content="brand-depths z200">
        <div class="brand-depths z200">
          z200
        </div>
      </Box>
      <Box content="brand-depths z100">
        <div class="brand-depths z100">
          z100
        </div>
      </Box>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="title brand-h600">
      Hover
    </div>
    <div class="content">
      <Box content="brand-depths z500 hover">
        <div class="brand-depths z500 hover">
          z500
        </div>
      </Box>
      <Box content="brand-depths z300 hover">
        <div class="brand-depths z300 hover">
          z300
        </div>
      </Box>
      <Box content="brand-depths z200 hover">
        <div class="brand-depths z200 hover">
          z200
        </div>
      </Box>
      <Box content="brand-depths z100 hover">
        <div class="brand-depths z100 hover">
          z100
        </div>
      </Box>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewDepths'
}
</script>

<style lang="scss">
.view-depths {
  padding: 24px;
  .title {
    margin-bottom: 24px;
    text-align: center;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .brand-depths {
    width: 240px;
    height: 120px;
    background-color: white;
    border-radius: 4px;
    margin-right: 24px;
    display: flex;
    align-items: center;
    justify-content: center
  }
}
</style>
