<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: 'levelbar'
  }
</script>

<style>
  .el-breadcrumb {
    float: left;
    line-height: 50px!important;
    margin-left: 10px;
  }
</style>
