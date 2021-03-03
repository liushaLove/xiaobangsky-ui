<template>
<article class="markdown-body" v-html="content">
</article>
</template>

<script lang="ts">
import {
  ref
} from 'vue'
export default {
  //动态加载md文件，这会导致一个问题，build后找不到md文件，解决这个问题就要先导入
  props: {
    // path: {
    //   type: String,
    //   required: true
    // }
    content: {
      type: String,
      required: true
    }
  },
  // setup(props) {
  //   const content = ref < string > (null)
  //   import(props.path).then(result => {
  //     content.value = result.default
  //   })
  //   return {
  //     content
  //   }
  // }
}
</script>