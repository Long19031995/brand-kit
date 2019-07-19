<template>
  <div class="tab">
    <div class="list-title">
      <div v-for="(item, index) in listItem"
           @click="activeItem(index)"
           :class="['list-title__item', { 'active': index === indexActive }]"
           :key="index">
        {{ item }}
      </div>
    </div>
    <div class="list-content">
      <div v-for="(item, index) in listItem"
           :class="['list-content__item', { 'active': index === indexActive }]"
           :key="index">
        <slot :name="item"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab',

  props: {
    listItem: {
      type: Array,
      default: []
    }
  },

  data () {
    return {
      indexActive: 0
    }
  },

  methods: {
    activeItem (index) {
      this.indexActive = index
    }
  }
}
</script>

<style lang="scss">
.tab {
  padding: 24px;
  .list-title {
    display: flex;
    &__item {
      padding: 12px 24px;
      border: 1px solid black;
      margin-left: -1px;
      background-color: black;
      color: white;
      &:first-child() {
        margin-left: 0;
      }
      &:hover {
        cursor: pointer;
        background-color: white;
        color: black;
      }
      &.active {
        background-color: white;
        color: black;
      }
    }
  }
  .list-content {
    &__item {
      border: 1px solid black;
      margin-top: -1px;
      margin-left: -1px;
      padding: 24px;
      display: none;
      &.active {
        display: block;
      }
    }
  }
}
</style>
