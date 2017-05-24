<template>
  <div class="watchTest">
    <h2>1.监听变量</h2>
    <div>name: <input type="text" v-model="name"/></div>
    <p>newName: {{newName}}</p>

    <h2>2.监听对象，深度watcher</h2>
    <div>info.name: <input type="text" v-model="info.name"/></div>

    <h2>3.监听方法名[在变异（不是替换）对象或数组时，旧值将与新值相同，因为它们的引用指向同一个对象/数组。Vue 不会保留变异之前值的副本。]</h2>
    <input type="text" v-model="phone" :class="{'success': isSuccess, 'error': isError}" placeholder="your phone"/>
  </div>
</template>

<script>
  export default {
    name: 'watchTest',
    data () {
      return {
        name: 'jessie',
        newName: 'jessie',
        info: {
          name: 'cassie',
          sex: 'female'
        },
        phone: '',
        isSuccess: false,
        isError: false
      }
    },
    methods: {
      formatPhone (newVal, oldVal) {
        if (/^1[\d]{10}$/.test(newVal) === false) {
          this.isSuccess = false
          this.isError = true
        } else {
          this.isSuccess = true
          this.isError = false
        }
      }
    },
    watch: {
      name (newVal, oldVal) {
        var self = this
        if (newVal !== oldVal) {
          self.newName = newVal
        }
      },
      // 深度 watcher
      info: {
        handler (newVal, oldVal) {
          console.log(newVal, oldVal)
        },
        deep: true // 使用深度watch
      },
      phone: 'formatPhone' // 方法名
    }
  }
</script>

<style>
  .success {
    border: none;
    border: 2px solid green;
  }

  .error {
    border: none;
    border: 2px solid red;
  }
</style>

