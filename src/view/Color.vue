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
          class: 'bg-o200',
          content: 'text-o200',
          title: 'Ocean 200',
          color: 'color-white'
        },
        {
          class: 'bg-n900',
          content: 'text-n900',
          title: 'N900',
          color: 'color-white'
        },
        {
          class: 'bg-white',
          content: 'text-white',
          title: 'Cloud',
          color: 'color-black'
        }
      ],
      secondaryColors: [
        {
          class: 'bg-r200',
          content: 'text-r200',
          title: 'Red 200',
          color: 'color-white'
        },
        {
          class: 'bg-y200',
          content: 'text-y200',
          title: 'Yellow 200',
          color: 'color-white'
        },
        {
          class: 'bg-p200',
          content: 'text-p200',
          title: 'Purple 200',
          color: 'color-white'
        },
        {
          class: 'bg-g200',
          content: 'text-g200',
          title: 'Green 200',
          color: 'color-white'
        }
      ],
      extended: [
        {
          class: 'bg-r50',
          content: 'text-r50',
          title: 'R50',
          color: 'color-black'
        },
        {
          class: 'bg-y50',
          content: 'text-y50',
          title: 'Y50',
          color: 'color-black'
        },
        {
          class: 'bg-p50',
          content: 'text-p50',
          title: 'P50',
          color: 'color-black'
        },
        {
          class: 'bg-g50',
          content: 'text-g50',
          title: 'G50',
          color: 'color-black'
        },
        {
          class: 'bg-o50',
          content: 'text-o50',
          title: 'O50',
          color: 'color-black'
        },
        {
          class: 'bg-n50',
          content: 'text-n50',
          title: 'N50',
          color: 'color-black'
        },
        {
          class: 'bg-r75',
          content: 'text-r75',
          title: 'R75',
          color: 'color-black'
        },
        {
          class: 'bg-y75',
          content: 'text-y75',
          title: 'Y75',
          color: 'color-black'
        },
        {
          class: 'bg-p75',
          content: 'text-p75',
          title: 'P75',
          color: 'color-black'
        },
        {
          class: 'bg-g75',
          content: 'text-g75',
          title: 'G75',
          color: 'color-black'
        },
        {
          class: 'bg-o75',
          content: 'text-o75',
          title: 'O75',
          color: 'color-black'
        },
        {
          class: 'bg-n75',
          content: 'text-n75',
          title: 'N75',
          color: 'color-black'
        },
        {
          class: 'bg-r100',
          content: 'text-r100',
          title: 'R100',
          color: 'color-black'
        },
        {
          class: 'bg-y100',
          content: 'text-y100',
          title: 'Y100',
          color: 'color-black'
        },
        {
          class: 'bg-p100',
          content: 'text-p100',
          title: 'P100',
          color: 'color-black'
        },
        {
          class: 'bg-g100',
          content: 'text-g100',
          title: 'G100',
          color: 'color-black'
        },
        {
          class: 'bg-o100',
          content: 'text-o100',
          title: 'O100',
          color: 'color-black'
        },
        {
          class: 'bg-n100',
          content: 'text-n100',
          title: 'N100',
          color: 'color-black'
        },
        {
          class: 'bg-r200',
          content: 'text-r200',
          title: 'R200',
          color: 'color-black'
        },
        {
          class: 'bg-y200',
          content: 'text-y200',
          title: 'Y200',
          color: 'color-black'
        },
        {
          class: 'bg-p200',
          content: 'text-p200',
          title: 'P200',
          color: 'color-black'
        },
        {
          class: 'bg-g200',
          content: 'text-g200',
          title: 'G200',
          color: 'color-black'
        },
        {
          class: 'bg-o200',
          content: 'text-o200',
          title: 'O200',
          color: 'color-black'
        },
        {
          class: 'bg-n200',
          content: 'text-n200',
          title: 'N200',
          color: 'color-black'
        },
        {
          class: 'bg-r400',
          content: 'text-r400',
          title: 'R400',
          color: 'color-black'
        },
        {
          class: 'bg-y400',
          content: 'text-y400',
          title: 'Y400',
          color: 'color-black'
        },
        {
          class: 'bg-p400',
          content: 'text-p400',
          title: 'P400',
          color: 'color-white'
        },
        {
          class: 'bg-g400',
          content: 'text-g400',
          title: 'G400',
          color: 'color-white'
        },
        {
          class: 'bg-o400',
          content: 'text-o400',
          title: 'O400',
          color: 'color-white'
        },
        {
          class: 'bg-n400',
          content: 'text-n400',
          title: 'N400',
          color: 'color-white'
        },
        {
          class: 'bg-r600',
          content: 'text-r600',
          title: 'R600',
          color: 'color-white'
        },
        {
          class: 'bg-y600',
          content: 'text-y600',
          title: 'Y600',
          color: 'color-white'
        },
        {
          class: 'bg-p600',
          content: 'text-p600',
          title: 'P600',
          color: 'color-white'
        },
        {
          class: 'bg-g600',
          content: 'text-g600',
          title: 'G600',
          color: 'color-white'
        },
        {
          class: 'bg-o600',
          content: 'text-o600',
          title: 'O600',
          color: 'color-white'
        },
        {
          class: 'bg-n600',
          content: 'text-n600',
          title: 'N600',
          color: 'color-white'
        },
        {
          class: 'bg-r800',
          content: 'text-r800',
          title: 'R800',
          color: 'color-white'
        },
        {
          class: 'bg-y800',
          content: 'text-y800',
          title: 'Y800',
          color: 'color-white'
        },
        {
          class: 'bg-p800',
          content: 'text-p800',
          title: 'P800',
          color: 'color-white'
        },
        {
          class: 'bg-g800',
          content: 'text-g800',
          title: 'G800',
          color: 'color-white'
        },
        {
          class: 'bg-o800',
          content: 'text-o800',
          title: 'O800',
          color: 'color-white'
        },
        {
          class: 'bg-n800',
          content: 'text-n800',
          title: 'N800',
          color: 'color-white'
        },
        {
          class: 'bg-r900',
          content: 'text-r900',
          title: 'R900',
          color: 'color-white'
        },
        {
          class: 'bg-y900',
          content: 'text-y900',
          title: 'Y900',
          color: 'color-white'
        },
        {
          class: 'bg-p900',
          content: 'text-p900',
          title: 'P900',
          color: 'color-white'
        },
        {
          class: 'bg-g900',
          content: 'text-g900',
          title: 'G900',
          color: 'color-white'
        },
        {
          class: 'bg-o900',
          content: 'text-o900',
          title: 'O900',
          color: 'color-white'
        },
        {
          class: 'bg-n900',
          content: 'text-n900',
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
      .box {
        &:nth-child(3) {
          .item {
            border: 1px solid #e6e8eb;
            &__title {
              color: #3c3e42;
            }
          }
        }
      }
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
