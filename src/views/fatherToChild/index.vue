<template>
  <div class="fatherToChild">
    <div class="parentComponent">
      <div class="box">
        1. <input type="checkbox" v-model="isChecked"/>显示
        <label for="">{{isChecked}}</label>
      </div>
      <div class="info">
        2. <input type="text" placeholder="请输入要传给子组件的内容" v-model="msg"/>
      </div>
      <div class="myEvent">
        <p>3. testData: {{testData}}</p>
      </div>
    </div>
    <!--使用v-on绑定自定义事件-->
    <!--<child-component v-bind:messages="msg" v-bind:isShow="isChecked" v-on:clearTestData="clearData" class="childComp"></child-component>-->
    <child-component :messages="msg" :isShow="isChecked" @clearTestData="clearData" class="childComp"></child-component>
  </div>
</template>
<script>
  import childComponent from './childComponent'
  export default {
    name: 'fatherToChild',
    components: {
      childComponent
    },
    data () {
      return {
        msg: '',
        isChecked: true,
        testData: '我是test data, 你确定要去掉我吗？'
      }
    },
    methods: {
      clearData () {
        this.testData = '~~~好吧，你最终还是不要我了，再见！'
      }
    }
  }
</script>
<style>
  .parentComponent {
    margin-bottom: 60px;
  }

  .box, .info, .myEvent {
    margin-top: 20px;
  }

  .info input {
    border: none;
    border: 1px solid #666;
    width: 300px;
    height: 30px;
    padding-left: 5px;
  }

  .box {
    margin-top: 10px;
  }
</style>
