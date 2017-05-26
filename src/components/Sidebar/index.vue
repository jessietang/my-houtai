<template>
  <el-menu default-active="/activePublish" class="el-menu-vertical-demo">
    <router-link :to="{path: '/activePublish'}" :class="{'title-link' : $route.path == '/activePublish'}">
      <el-menu-item index="/activePublish"><i class="el-icon-menu"></i>活动发布</el-menu-item>
    </router-link>

    <router-link to="/activeManage" :class="{'title-link' : $route.path == '/activeManage'}">
      <el-menu-item index="/activeManage"><i class="el-icon-setting"></i>活动查看</el-menu-item>
    </router-link>

    <router-link to="/axiosTest" :class="{'title-link' : $route.path == '/axiosTest'}">
      <el-menu-item index="1"><i class="el-icon-menu"></i>axios测试</el-menu-item>
    </router-link>

    <el-submenu index="0">
      <template slot="title"><i class="el-icon-message"></i>路由信息对象的属性</template>
      <router-link :to="{path: '/queryTest', query: {name: 'yuyu', sex: 'female', type: 'people'}}" :class="{'title-link' : $route.path == '/queryTest'}">
        <el-menu-item index="1-1">query</el-menu-item>
      </router-link>

      <router-link to="/paramsTest/0925" :class="{'title-link' : $route.path == '/paramsTest/0925'}">
        <el-menu-item index="1-2">params</el-menu-item>
      </router-link>
    </el-submenu>

    <router-link to="/watchTest" :class="{'title-link' : $route.path == '/watchTest'}">
      <el-menu-item index="2"><i class="el-icon-setting"></i>watch的用法</el-menu-item>
    </router-link>

    <router-link to="/6" :class="{'title-link' : $route.path == '/6'}">
      <el-menu-item index="3"><i class="el-icon-menu"></i>活动发布</el-menu-item>
    </router-link>

    <router-link to="/7" :class="{'title-link' : $route.path == '/7'}">
      <el-menu-item index="4"><i class="el-icon-setting"></i>活动管理</el-menu-item>
    </router-link>
  </el-menu>
</template>

<script>
  export default {
    name: 'sidebar'
  }
</script>

<style>
  a {
    text-decoration: none;
  }

  .title-link  li {
    width: 180px;
    height: 56px;
    display: block;
    color: #20a0ff!important;
  }

  .el-menu-vertical-demo {
    min-height: 100%;
    background-color: #324157!important;
    text-align: left; /*找了很久的位置不对是在这里*/
  }

  .el-submenu .el-menu {
    background-color: #324157!important;
  }

  .el-menu-item:hover, .el-submenu__title:hover {
    background-color: #48576a!important;
  }

  .el-menu-item, .el-submenu__title {
    color: #fff!important;
  }

  .el-submenu [class^=el-icon-], .el-menu-item [class^=el-icon-] {
    margin-right: 15px!important;
  }

</style>
