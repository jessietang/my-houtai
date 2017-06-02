<template>
  <div class="nav-header">
    <el-menu class="navbar" mode="horizontal">
      <div class="hamburger-container">
        <!--父组件向子组件传值，将要传递的值绑定到某个属性，然后到子组件里面去用props接收-->
        <!--<Hamburger v-bind:isActive="sidebar.opened" v-bind:toggleClick="toggleSidebar"/>-->
        <Hamburger :isActive="sidebar.opened" :toggleClick="toggleSidebar"/>
      </div>
      <Levelbar/>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" :src="userInfo.avatar_img">
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu class="user-dropdown" slot="dropdown">
          <router-link  class='inlineBlock' to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <router-link  class='inlineBlock' to="/admin/profile">
            <el-dropdown-item>
              设置
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided><span style="display:block;">退出登录</span></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu>

  </div>
</template>

<script>
  import Hamburger from '../Hamburger/index'
  import Levelbar from '../Levelbar/index'
  import {mapGetters} from 'vuex'

  export default {
    name: 'navbar',
    components: {
      Hamburger,
      Levelbar
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'userInfo'
      ])
    },
    methods: {
      toggleSidebar () {
        this.$store.dispatch('toggleSideBar')
      }
    }
  }
</script>

<style>
  .navbar {
    height: 50px;
    line-height: 50px;
  }

  .hamburger-container {
    float: left;
    padding: 0 10px;
    height: 50px;
    line-height: 50px;
  }

  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute!important;
    right: 35px;
  }

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
</style>
