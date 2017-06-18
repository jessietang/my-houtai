<template>
  <div class="child">
    <h3>----------------这里是子组件----------------</h3>
    <div class="box">
      <input type="text" v-model="msg" @keyup="onInput"/>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'childComponent',
    data () {
      return {
        msg: '请输入值'
      }
    },
    methods: {
      onInput () {
        var msg = this.msg.trim()
        if (msg) {
          this.$emit('message', this.msg) // 使用$emit触发父组件的自定义事件
        }
      }
    }
  }
</script>
<style>
  .box {
    margin-top: 30px;
  }
</style>

