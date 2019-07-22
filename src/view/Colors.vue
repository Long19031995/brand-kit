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
        <Box v-for="(primaryColor, index) in primaryColors" :content="primaryColor.content" :key="index">
          <div :class="['item', primaryColor.class]">
            <div :class="['item__title', primaryColor.color]">
              {{ primaryColor.title }}
            </div>
          </div>
        </Box>
      </div>
    </div>

    <div class="secondary-colors">
      <div class="title">
        Secondary Colors
      </div>
      <div class="content">
        <Box v-for="(secondaryColor, index) in secondaryColors" :content="secondaryColor.content" :key="index">
          <div :class="['item', secondaryColor.class]">
            <div :class="['item__title', secondaryColor.color]">
              {{ secondaryColor.title }}
            </div>
          </div>
        </Box>
      </div>
    </div>

    <div class="extended">
      <div class="title">
        Extended
      </div>
      <div class="content">
        <Box v-for="(extend, index) in extended" :content="extend.content" :key="index">
          <div :class="['item', extend.class]">
            <div :class="['item__title', extend.color]">
              {{ extend.title }}
            </div>
          </div>
        </Box>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewColor',

  data () {
    return {
      primaryColors: [
        {
          class: 'brand-bg-o200',
          content: 'brand-text-o200',
          title: 'Ocean 200',
          color: 'color-white'
        },
        {
          class: 'brand-bg-n900',
          content: 'brand-text-n900',
          title: 'N900',
          color: 'color-white'
        },
        {
          class: 'brand-bg-white border-black',
          content: 'brand-text-white',
          title: 'Cloud',
          color: 'color-black'
        }
      ],
      secondaryColors: [
        {
          class: 'brand-bg-r200',
          content: 'brand-text-r200',
          title: 'Red 200',
          color: 'color-white'
        },
        {
          class: 'brand-bg-y200',
          content: 'brand-text-y200',
          title: 'Yellow 200',
          color: 'color-white'
        },
        {
          class: 'brand-bg-p200',
          content: 'brand-text-p200',
          title: 'Purple 200',
          color: 'color-white'
        },
        {
          class: 'brand-bg-g200',
          content: 'brand-text-g200',
          title: 'Green 200',
          color: 'color-white'
        }
      ],
      extended: [
        {
          class: 'brand-bg-r50',
          content: 'brand-text-r50',
          title: 'R50',
          color: 'color-black'
        },
        {
          class: 'brand-bg-y50',
          content: 'brand-text-y50',
          title: 'Y50',
          color: 'color-black'
        },
        {
          class: 'brand-bg-p50',
          content: 'brand-text-p50',
          title: 'P50',
          color: 'color-black'
        },
        {
          class: 'brand-bg-g50',
          content: 'brand-text-g50',
          title: 'G50',
          color: 'color-black'
        },
        {
          class: 'brand-bg-o50',
          content: 'brand-text-o50',
          title: 'O50',
          color: 'color-black'
        },
        {
          class: 'brand-bg-n50',
          content: 'brand-text-n50',
          title: 'N50',
          color: 'color-black'
        },
        {
          class: 'brand-bg-r75',
          content: 'brand-text-r75',
          title: 'R75',
          color: 'color-black'
        },
        {
          class: 'brand-bg-y75',
          content: 'brand-text-y75',
          title: 'Y75',
          color: 'color-black'
        },
        {
          class: 'brand-bg-p75',
          content: 'brand-text-p75',
          title: 'P75',
          color: 'color-black'
        },
        {
          class: 'brand-bg-g75',
          content: 'brand-text-g75',
          title: 'G75',
          color: 'color-black'
        },
        {
          class: 'brand-bg-o75',
          content: 'brand-text-o75',
          title: 'O75',
          color: 'color-black'
        },
        {
          class: 'brand-bg-n75',
          content: 'brand-text-n75',
          title: 'N75',
          color: 'color-black'
        },
        {
          class: 'brand-bg-r100',
          content: 'brand-text-r100',
          title: 'R100',
          color: 'color-black'
        },
        {
          class: 'brand-bg-y100',
          content: 'brand-text-y100',
          title: 'Y100',
          color: 'color-black'
        },
        {
          class: 'brand-bg-p100',
          content: 'brand-text-p100',
          title: 'P100',
          color: 'color-black'
        },
        {
          class: 'brand-bg-g100',
          content: 'brand-text-g100',
          title: 'G100',
          color: 'color-black'
        },
        {
          class: 'brand-bg-o100',
          content: 'brand-text-o100',
          title: 'O100',
          color: 'color-black'
        },
        {
          class: 'brand-bg-n100',
          content: 'brand-text-n100',
          title: 'N100',
          color: 'color-black'
        },
        {
          class: 'brand-bg-r200',
          content: 'brand-text-r200',
          title: 'R200',
          color: 'color-black'
        },
        {
          class: 'brand-bg-y200',
          content: 'brand-text-y200',
          title: 'Y200',
          color: 'color-black'
        },
        {
          class: 'brand-bg-p200',
          content: 'brand-text-p200',
          title: 'P200',
          color: 'color-black'
        },
        {
          class: 'brand-bg-g200',
          content: 'brand-text-g200',
          title: 'G200',
          color: 'color-black'
        },
        {
          class: 'brand-bg-o200',
          content: 'brand-text-o200',
          title: 'O200',
          color: 'color-black'
        },
        {
          class: 'brand-bg-n200',
          content: 'brand-text-n200',
          title: 'N200',
          color: 'color-black'
        },
        {
          class: 'brand-bg-r400',
          content: 'brand-text-r400',
          title: 'R400',
          color: 'color-black'
        },
        {
          class: 'brand-bg-y400',
          content: 'brand-text-y400',
          title: 'Y400',
          color: 'color-black'
        },
        {
          class: 'brand-bg-p400',
          content: 'brand-text-p400',
          title: 'P400',
          color: 'color-white'
        },
        {
          class: 'brand-bg-g400',
          content: 'brand-text-g400',
          title: 'G400',
          color: 'color-white'
        },
        {
          class: 'brand-bg-o400',
          content: 'brand-text-o400',
          title: 'O400',
          color: 'color-white'
        },
        {
          class: 'brand-bg-n400',
          content: 'brand-text-n400',
          title: 'N400',
          color: 'color-white'
        },
        {
          class: 'brand-bg-r600',
          content: 'brand-text-r600',
          title: 'R600',
          color: 'color-white'
        },
        {
          class: 'brand-bg-y600',
          content: 'brand-text-y600',
          title: 'Y600',
          color: 'color-white'
        },
        {
          class: 'brand-bg-p600',
          content: 'brand-text-p600',
          title: 'P600',
          color: 'color-white'
        },
        {
          class: 'brand-bg-g600',
          content: 'brand-text-g600',
          title: 'G600',
          color: 'color-white'
        },
        {
          class: 'brand-bg-o600',
          content: 'brand-text-o600',
          title: 'O600',
          color: 'color-white'
        },
        {
          class: 'brand-bg-n600',
          content: 'brand-text-n600',
          title: 'N600',
          color: 'color-white'
        },
        {
          class: 'brand-bg-r800',
          content: 'brand-text-r800',
          title: 'R800',
          color: 'color-white'
        },
        {
          class: 'brand-bg-y800',
          content: 'brand-text-y800',
          title: 'Y800',
          color: 'color-white'
        },
        {
          class: 'brand-bg-p800',
          content: 'brand-text-p800',
          title: 'P800',
          color: 'color-white'
        },
        {
          class: 'brand-bg-g800',
          content: 'brand-text-g800',
          title: 'G800',
          color: 'color-white'
        },
        {
          class: 'brand-bg-o800',
          content: 'brand-text-o800',
          title: 'O800',
          color: 'color-white'
        },
        {
          class: 'brand-bg-n800',
          content: 'brand-text-n800',
          title: 'N800',
          color: 'color-white'
        },
        {
          class: 'brand-bg-r900',
          content: 'brand-text-r900',
          title: 'R900',
          color: 'color-white'
        },
        {
          class: 'brand-bg-y900',
          content: 'brand-text-y900',
          title: 'Y900',
          color: 'color-white'
        },
        {
          class: 'brand-bg-p900',
          content: 'brand-text-p900',
          title: 'P900',
          color: 'color-white'
        },
        {
          class: 'brand-bg-g900',
          content: 'brand-text-g900',
          title: 'G900',
          color: 'color-white'
        },
        {
          class: 'brand-bg-o900',
          content: 'brand-text-o900',
          title: 'O900',
          color: 'color-white'
        },
        {
          class: 'brand-bg-n900',
          content: 'brand-text-n900',
          title: 'N900',
          color: 'color-white'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.color-white {
  color: white;
}

.color-black {
  color: #3c3e42;
}

.border-black {
  border: 1px solid #e6e8eb;
}

.view-color {
  padding: 80px 56px;
  .item {
    width: 160px;
    height: 80px;
    border-radius: 8px;
    position: relative;
    margin-right: 16px;
    margin-bottom: 4px;
    &__title {
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
    margin-bottom: 81px;
    .title {
      color: #3c3e42;
      font-size: 16px;
      font-family: NotoSans-Regular;
      line-height: 20px;
      margin-bottom: 18px;
    }
    .content {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .secondary-colors {
    margin-bottom: 81px;
    .title {
      color: #3c3e42;
      font-size: 16px;
      font-family: NotoSans-Regular;
      line-height: 20px;
      margin-bottom: 18px;
    }
    .content {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .extended {
    max-width: 1154px;
    .title {
      color: #3c3e42;
      font-size: 16px;
      font-family: NotoSans-Regular;
      line-height: 20px;
      margin-bottom: 18px;
    }
    .content {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
