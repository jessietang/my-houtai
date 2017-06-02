<template>
  <div class="childComponent">
    <h3>----------------这里是子组件----------------</h3>
    <div class="div">
      <h4>1.通过父组件传递过来的值来控制隐藏或显示：</h4>
      <p :class="{'hidden': !isShow}">test test test!!!</p>
    </div>
    <div class="div">
      <h4>2.我是通过父组件传递过来的值：</h4>
      <p>{{messages}}</p>
    </div>
    <div class="div">
      <h4>3.子组件使用$emit触发父组件的自定义事件：</h4>
      <button @click="clearData" class="btn" :class="{'btnDel': del}">点我触发父组件的自定义事件clearTestData，清除test data</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'childComponent',
    data () {
      return {
        del: false
      }
    },
    props: ['messages', 'isShow'], // 父组件使用props将数据传给子组件
    methods: {
      clearData () {
        this.$emit('clearTestData') // 使用$emit触发父组件的自定义事件
        this.del = true
      }
    }
  }
</script>
<style>
  .hidden {
    display: none;
  }

  .div {
    margin-top: 30px;
  }

  .div p {
    color: red;
    margin-top: 10px;
  }

  .btn {
    margin-top: 10px;
    border: none;
    border: 1px solid #666;
    background-color: #3c0b0d;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .btnDel {
    background-color: #eee;
    border: none;
    color: #666;
  }


</style>
