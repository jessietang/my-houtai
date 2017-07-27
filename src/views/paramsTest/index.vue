<template>
  <div class="paramsTest">
    <div class="detail">
      <h2>$route.params</h2>
      <p>类型: Object</p>
      <p>一个 key/value 对象，包含了 动态片段 和 全匹配片段，如果没有路由参数，就是一个空对象。</p>
    </div>
    <h2>proId: {{params.proId}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'paramsTest',
    data () {
      return {
        params: {}
      }
    },
    created () {
      this.getParams()
    },
    methods: {
      getParams () {
        this.params = this.$route.params
      }
    }
  }
</script>
