<template>
  <div class="view-typography font-regular">
    <div class="brand-h200">
      <span class="brand-text-r400">*Note: </span><span class="brand-text-p200">Click to copy</span>
    </div>
    <br><br>
    <table>
      <thead>
        <tr class="brand-text-r200">
          <th>Type</th>
          <th>Class</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in listItem" :key="index">
          <td class="brand-text-o200">
            {{ item.type }}
          </td>
          <td class="brand-text-y100">
            <Box :content="item.copy">
              {{ item.class }}
            </Box>
          </td>
          <td>
            <Box :content="item.copy">
              <div :class="item.copy">
                {{ item.content }}
              </div>
            </Box>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ViewTypography',

  data () {
    return {
      listItem: [
        {
          type: 'Text Link',
          class: '.brand-link',
          copy: 'brand-link',
          content: 'Falconsekido.com'
        },
        {
          type: 'Text Link Small',
          class: '.brand-link .brand-link--small',
          copy: 'brand-link brand-link--small',
          content: 'Falconsekido.com'
        },
        {
          type: 'Heading 600',
          class: '.brand-h600',
          copy: 'brand-h600',
          content: 'Convert more visitors into revenue for e-commerce businesses.'
        },
        {
          type: 'Heading 500',
          class: '.brand-h500',
          copy: 'brand-h500',
          content: 'Convert more visitors into revenue for e-commerce businesses.'
        },
        {
          type: 'Heading 400',
          class: '.brand-h400',
          copy: 'brand-h400',
          content: 'Convert more visitors into revenue for e-commerce businesses.'
        },
        {
          type: 'Heading 300',
          class: '.brand-h300',
          copy: 'brand-h300',
          content: 'Convert more visitors into revenue for e-commerce businesses.'
        },
        {
          type: 'Heading 200',
          class: '.brand-h200',
          copy: 'brand-h200',
          content: 'Convert more visitors into revenue for e-commerce businesses.'
        },
        {
          type: 'Heading 100',
          class: '.brand-h100',
          copy: 'brand-h100',
          content: 'Convert more visitors into revenue for e-commerce businesses.'
        },
        {
          type: 'Paragraph',
          class: '.brand-paragraph',
          copy: 'brand-paragraph',
          content: `We know how hard it is to get your business up and running, to get everything in the right places. While it's difficult to attract new customers, it's even harder to make your visitors return and become loyal customers, especially for small business owners.`
        },
        {
          type: 'Small Text',
          class: '.brand-paragraph-sm',
          copy: 'brand-paragraph-sm',
          content: `We know how hard it is to get your business up and running, to get everything in the right places. While it's difficult to attract new customers, it's even harder to make your visitors return and become loyal customers, especially for small business owners.`
        },
        {
          type: 'Text Left',
          class: '.brand-text-left',
          copy: 'brand-text-left',
          content: 'Convert more visitors into revenue for e-commerce businesses.'
        },
        {
          type: 'Text Center',
          class: '.brand-text-center',
          copy: 'brand-text-center',
          content: 'Convert more visitors into revenue for e-commerce businesses.'
        },
        {
          type: 'Text Right',
          class: '.brand-text-right',
          copy: 'brand-text-right',
          content: 'Convert more visitors into revenue for e-commerce businesses.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.view-typography {
  padding: 24px;
  table {
    border-spacing: 0;
    th {
      text-align: left;
      padding: 8px 24px;
      border: 1px solid #eee;
    }
    td {
      padding: 8px 24px;
      border: 1px solid #eee;
    }
    tr {
      td {
        &:first-child {
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
