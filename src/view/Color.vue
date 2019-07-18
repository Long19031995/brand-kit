<template>
  <div class="view-color">
    <div class="color-swatches">
      <div class="title">
        Color Swatches
      </div>
    </div>
    <div class="primary-colors">
      <div class="title">
        Primary Colors
      </div>
      <div class="content">
        <Box content=".text-o200">
          <div class="item bg-o200">
            <div class="item__title">
              Ocean 200
            </div>
          </div>
        </Box>

        <Box content=".text-n900">
          <div class="item bg-n900">
            <div class="item__title">
              N900
            </div>
          </div>
        </Box>

        <Box content=".text-white">
          <div class="item bg-white">
            <div class="item__title">
              Cloud
            </div>
          </div>
        </Box>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewColor'
}
</script>

<style lang="scss">
.view-color {
  padding: 80px 56px;
  .item {
    width: 160px;
    height: 80px;
    border-radius: 8px;
    position: relative;
    margin-right: 16px;
    &__title {
      color: #ffffff;
      font-family: NotoSans-Regular;
      font-size: 14px;
      line-height: 20px;
      position: absolute;
      left: 16px;
      bottom: 17px;
    }
  }

  .color-swatches {
    margin-bottom: 62px;
    .title {
      color: #9c9ea2;
      font-size: 16px;
      font-family: NotoSans-Bold;
      font-weight: bold;
      line-height: 20px;
    }
  }

  .primary-colors {
    .title {
      color: #3c3e42;
      font-size: 16px;
      font-family: NotoSans-Regular;
      line-height: 20px;
      margin-bottom: 18px;
    }
    .content {
      display: flex;
      .box {
        &:nth-child(3) {
          .item {
            border: 1px solid #e6e8eb;
            border-radius: 8px;
            &__title {
              color: #3c3e42;
            }
          }
        }
      }
    }
  }
}
</style>
