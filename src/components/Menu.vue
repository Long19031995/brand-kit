<template>
  <div class="menu font-regular">
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
          name: 'Logo',
          nameRoute: 'view-logo'
        },
        {
          name: 'Logo App',
          nameRoute: 'view-logo-app'
        },
        {
          name: 'Colors',
          nameRoute: 'view-colors'
        },
        {
          name: 'Typography',
          nameRoute: 'view-typography'
        },
        {
          name: 'Grids',
          nameRoute: 'view-grids'
        },
        {
          name: 'Icons',
          nameRoute: 'view-icons'
        },
        {
          name: 'Depths',
          nameRoute: 'view-depths'
        },
        {
          name: 'Buttons',
          nameRoute: 'view-buttons'
        },
        {
          name: 'Pagination',
          nameRoute: 'view-pagination'
        },
        {
          name: 'Modals',
          nameRoute: 'view-modals'
        },
        {
          name: 'Form',
          nameRoute: 'view-form'
        },
        {
          name: 'Common',
          nameRoute: 'view-common'
        },
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
    &.router-link-active {
      .menu__item {
        background-color: white;
        color: black;
      }
    }
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
