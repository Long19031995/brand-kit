<template>
  <div class="menu">
    <div class="brand">
      VIEW
    </div>
    <router-link v-for="(item, index) in listMenu" :to="{ name: item.nameRoute }" :key="index">
      <div class="menu__item">
        {{ item.name }}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Menu',

  data () {
    return {
      listMenu: [
        {
          name: 'Button',
          nameRoute: 'view-button'
        },
        {
          name: 'Color',
          nameRoute: 'view-color'
        },
        {
          name: 'Common',
          nameRoute: 'view-common'
        },
        {
          name: 'Depths',
          nameRoute: 'view-depths'
        },
        {
          name: 'Form',
          nameRoute: 'view-form'
        },
        {
          name: 'Grids',
          nameRoute: 'view-grids'
        },
        {
          name: 'Modals',
          nameRoute: 'view-modals'
        },
        {
          name: 'Pagination',
          nameRoute: 'view-pagination'
        },
        {
          name: 'Typography',
          nameRoute: 'view-typography'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.menu {
  overflow-y: auto;
  width: 224px;
  height: 100%;
  float: left;
  background-color: black;
  .brand {
    color: white;
    padding: 24px;
    text-align: center;
  }
  a {
    text-decoration: none;
  }
  &__item {
    padding: 12px 24px;
    color: white;
    text-decoration: none;
    transition: .2s ease-in-out;
    &:hover {
      background-color: white;
      color: black;
    }
  }
}
</style>
