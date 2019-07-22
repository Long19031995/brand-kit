<template>
  <div class="view-pagination">
    <Tab :list-item="['Demo', 'How to use']">
      <template slot="Demo">
        <Box content='<div id="pagination-id" class="brand-pagination" total="80" active="8"></div>'>
          <div id="pagination-id" class="brand-pagination" total="80" active="8"></div>
        </Box>
        <br><br>

        <div class="brand-h300">
          result: <span class="brand-text-r200">{{ page }}</span>
        </div>
      </template>

      <template slot="How to use">
        <div class="brand-h300">HTML</div>
        <pre>
          <code>
            <br>
            // total page = 80
            <br>
            // active page = 8
            <br><br>
            &#60;div id="pagination-id-1" class="brand-pagination" total="80" active="8">&#60;/div>
            <br><br>
            &#60;div id="pagination-id-2" class="brand-pagination" total="80" active="8">&#60;/div>
            <br>
          </code>
        </pre>

        <div class="brand-h300">JS</div>
        <pre>
          <code>
            <br>
            import { brandPagination } from 'brand-kit/js/index.js'
            <br><br>
            brandPagination.start()
            <br><br>
            // listen page change for pagination-id-1
            <br>
            brandPagination.on('pagination-id-1', (page) => { console.log(page) })
            <br><br>
            // listen page change for pagination-id-2
            <br>
            brandPagination.on('pagination-id-2', (page) => { console.log(page) })
            <br>
          </code>
        </pre>
      </template>
    </Tab>
  </div>
</template>

<script>
import { brandPagination } from '@/assets/js/pagination'
import hljs from 'highlight.js'

export default {
  name: 'ViewPagination',

  data () {
    return {
      page: 0
    }
  },

  mounted () {
    this.init()

    this.highlight()
  },

  methods: {
    init () {
      brandPagination.start()
      brandPagination.on('pagination-id', (page) => this.page = page)
    },

    highlight () {
      this.$el.querySelectorAll('pre > code').forEach((block) => {
        hljs.highlightBlock(block)
      })
    }
  }
}
</script>

<style lang="scss">
.view-pagination {
  padding: 24px;
  input {
    border: 1px solid #eee;
    padding: 8px;
    width: 50px;
  }
  .box {
    border: 1px solid #eee;
    padding: 16px 32px;
    transition: .15s ease-in-out;
    display: inline-block;
    &:hover {
      border: 1px solid transparent;
    }
  }
}
</style>
