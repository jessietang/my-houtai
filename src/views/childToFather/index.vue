<template>
  <div class="childToFather">
    <div class="parentComponent">
      <p>我是父组件</p>
      <p>{{childMsg}}</p>
    </div>
    <child-component v-on:message="receiveMessage"></child-component>
  </div>
</template>
<script>
  import childComponent from './childComponent'
  export default {
    name: 'childToFather',
    components: {
      childComponent
    },
    data () {
      return {
        childMsg: '子组件值未改变'
      }
    },
    methods: {
      receiveMessage (text) {
        alert('change')
        this.childMsg = '监听到子组件值改变了：' + text
      }
    }
  }
</script>
<style>
  .parentComponent {
    margin-bottom: 60px;
  }
</style>
