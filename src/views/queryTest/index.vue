<template>
  <div class="queryTest">
    <div class="detail">
      <h2>$route.query [$route.query： 用来查询ulr里面的参数 [常用]]</h2>
      <p>类型: Object</p>
      <p>一个 key/value 对象，表示 URL 查询参数。例如，对于路径 /foo?user=1，则有 $route.query.user == 1，如果没有查询参数，则是个空对象。</p>
    </div>
    <h2>info:</h2>
    <p>name: {{query.name}}</p>
    <p>sex: {{query.sex}}</p>
    <p>type: {{query.type}}</p>
  </div>
</template>

<script>
  export default {
    name: 'queryTest',
    data () {
      return {
        query: {}
      }
    },
    created () {
      this.getQuery()
    },
    methods: {
      getQuery () {
        this.query = this.$route.query
      }
    }
  }
</script>
