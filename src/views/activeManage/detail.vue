<template>
  <div class="detail">
    <h2>{{activeTitle}}</h2>
    <el-row class="activeRow">
      <el-col :span="5">发起人：{{hostPerson}}</el-col>
      <el-col :span="10">发起时间：{{hostTime}}</el-col>
      <el-col :span="5">浏览次数：{{readNum}}</el-col>
    </el-row>
    <hr/>
    <el-row>
      <el-col :span="24">
        <el-tabs v-model="activeName" @tab-click="routerTo">
          <el-tab-pane label="活动详情" name="first">活动详情</el-tab-pane>
          <el-tab-pane label="报名管理" name="second">报名管理</el-tab-pane>
          <el-tab-pane label="签到" name="third">签到</el-tab-pane>
          <el-tab-pane label="数据统计" name="fourth">数据统计</el-tab-pane>
          <el-tab-pane label="评价管理" name="fifth">评价管理</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    data () {
      return {
        activeName: 'first',
        activeTitle: '活动主题',
        hostPerson: '唐静',
        hostTime: '2017-10-12',
        readNum: '1994'
      }
    },
    methods: {
      routerTo (tab, event) {
        this.$router.push('/detail/page' + (parseInt(tab.index) + 1))
      }
    }
  }
</script>

<style>
  .activeRow {
    margin: 20px 0;
  }
</style>
