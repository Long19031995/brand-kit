<template>
  <div class="view-modals">
    <Tab :list-item="['Demo', 'How to use']">
      <template slot="Demo">
        <button modal-id="brand-modal">Show modal</button>
        <Box>
          <div id="brand-modal" class="brand-modal brand-fade-in">
            <div class="brand-modal__overlay"></div>
            <div class="brand-modal__content sm">
              <div class="brand-modal__content__header">
                <div class="brand-h300">Header</div>
              </div>
              <div class="brand-modal__content__body brand-scrollbar">
                <p>body</p>
                <p>body</p>
                <p>body</p>
                <p>body</p>
                <p>body</p>
                <p>body</p>
                <p>body</p>
                <p>body</p>
                <p>body</p>
                <p>body</p>
                <p>body</p>
                <p>body</p>
                <p>body</p>
              </div>
              <div class="brand-modal__content__footer">
                <div class="brand-h300">footer</div>
              </div>
            </div>
          </div>
        </Box>
      </template>

      <template slot="How to use">
        <div class="brand-h300">HTML</div>
        <pre>
          <code>
            <br>
            &#60;div id="brand-modal" class="brand-modal brand-fade-in">
            <br>
              &#60;div class="brand-modal__overlay">&#60;/div>
              <br>
              &#60;div class="brand-modal__content sm">
              <br>
                &#60;div class="brand-modal__content__header">
                <br>
                  header
                  <br>
                &#60;/div>
                <br>
                &#60;div class="brand-modal__content__body brand-scrollbar">
                <br>
                  body
                  <br>
                &#60;/div>
                <br>
                &#60;div class="brand-modal__content__footer">
                <br>
                  footer
                  <br>
                &#60;/div>
                <br>
              &#60;/div>
              <br>
            &#60;/div>
            <br>
          </code>
        </pre>

        <div class="brand-h300">JS</div>
        <pre>
          <code>
            <br>
            import { brandModal } from 'brand-kit/js/index.js'
            <br><br>
            brandModal.start()
            <br>
          </code>
        </pre>
      </template>
    </Tab>
  </div>
</template>

<script>
import { brandModal } from '@/assets/js'
import hljs from 'highlight.js'

export default {
  name: 'ViewModals',

  mounted () {
    this.init()
    this.highlight()
  },

  methods: {
    init () {
      brandModal.start()
    },

    highlight () {
      this.$el.querySelectorAll('pre > code').forEach((block) => {
        hljs.highlightBlock(block)
      })
    }
  }
}
</script>
