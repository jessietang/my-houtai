<template>
  <div class="page1">
    <p style="color: #999;font-size: 14px;">活动详情的按照内容板块可分别编辑，活动结束后不可编辑。</p>
    <!--Tabs Events:  tab-click	tab 被选中时触发	  回调参数：被选中的标签 tab 实例-->
    <el-tabs type="card" @tab-click="routerTo" class="page1-tab">
      <el-tab-pane label="活动信息"></el-tab-pane>
      <el-tab-pane label="报名签到"></el-tab-pane>
      <el-tab-pane label="分享设置"></el-tab-pane>
      <el-tab-pane label="个性化设置"></el-tab-pane>
    </el-tabs>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <div class="btn-group">
      <el-button @click.native.prevent="handleCancel">取消</el-button>
      <el-button @click.native.prevent="handleSave" type="primary">保存</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page1',
    data () {
      return {
      }
    },
    methods: {
      routerTo (tab, event) {
        this.$router.push('/detail/page1/step' + (parseInt(tab.index) + 1))
      }
    }
  }
</script>

<style>
  .page1-tab {
    margin: 20px 0;
  }
</style>
