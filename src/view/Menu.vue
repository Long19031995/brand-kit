<template>
  <div class="menu">
    <router-link v-for="item in listMenu" :to="{ name: item.nameRoute }">
      <div class="menu-item">
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

