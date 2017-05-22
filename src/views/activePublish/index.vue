<template>
  <div class="activePublish">
    <el-steps :space="200" :active="step">
      <el-step title="活动信息" description=""></el-step>
      <el-step title="报名签到" description=""></el-step>
      <el-step title="分享设置" description=""></el-step>
      <el-step title="个性化设置" description=""></el-step>
    </el-steps>
    <input type="text" v-model="name"/>
    <input type="text" v-model="info.name"/>
    <h2>{{newName}}</h2>
    <input type="text" v-model="phone" :class="{'success': isSuccess, 'error': isError}" placeholder="your phone"/>
    <transition name="fade">
      <router-view></router-view>
    </transition>

    <div class="btn-group">
      <el-button @click.native.prevent="handlePreStep" v-show="preStep">上一步</el-button>
      <el-button @click.native.prevent="handleNextStep" v-show="nextStep">下一步</el-button>
      <el-button @click.native.prevent="handlePublish" v-show="publish" type="primary">发布活动</el-button>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'activePublish',
    data () {
      return {
        preStep: false,
        nextStep: true,
        publish: false,
        step: 1,
        isRouter: false,
        name: 'jessie',
        newName: 'jessie',
        info: {
          name: 'cassie',
          sex: 'female'
        },
        phone: '',
        isSuccess: false,
        isError: false,
        query: {

        }
      }
    },
    created () { // 在实例创建之后同步调用
      this.getQuery()
    },
    methods: {
      getQuery () {
        this.query = this.$route.query
      },
      goStep (n) {
        switch (n) {
          case 1:
            this.preStep = false
            this.nextStep = true
            this.publish = false
            break
          case 2:
            this.preStep = true
            this.nextStep = true
            this.publish = false
            break
          case 3:
            this.preStep = true
            this.nextStep = true
            this.publish = false
            break
          case 4:
            this.preStep = true
            this.nextStep = false
            this.publish = true
            break
        }
      },
      handlePreStep () { // 上一步
        this.$router.go(-1)
        this.step--
        this.goStep(this.step)
        $('html,body').animate({
          scrollTop: 0
        }, 500)
      },
      handleNextStep () { // 下一步
        this.$router.push('/activePublish/step' + (parseInt(this.step) + 1))
        var _this = this
        setTimeout(function () {
          if (_this.isRouter) {
            _this.step++
            _this.goStep(_this.step)
          }
        })
        $('html,body').animate({
          scrollTop: 0
        }, 500)
      },
      handlePublish () {
        console.log('发布')
      },
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
      '$route' (to, from) { // 监听路由的变化
        this.isRouter = true
      },
      publish (newVal, oldVal) {
        alert('can publish')
      },
      name (newVal, oldVal) {
        var self = this
        if (newVal !== oldVal) {
          self.newName = newVal
        }
        console.log(self.query.name, self.query.type)
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
