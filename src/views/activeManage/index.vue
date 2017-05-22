<template>
  <div class="allActivity">
    <el-row class="head">
      <el-col :span="18" style="padding: 20px 0; background-color: #33CCCC;">
        <el-col :span="8">
          200<br/>
          <span>活动总数</span>
        </el-col>
        <el-col :span="8">
          200<br/>
          <span>活动总数</span>
        </el-col>
        <el-col :span="8" style="border:none;">
          200<br/>
          <span>活动总数</span>
        </el-col>
      </el-col>

      <el-col :span="5" :offset="1" style="padding: 40px 0; background-color: #3091F2;">
        3<br/>
        <span>查看会员</span>
      </el-col>
    </el-row>

    <el-card class="box-card">
      <h3>活动列表</h3>
      <el-row type="flex" align="middle" :gutter="20" style="padding: 20px 0;">
        <el-col :span="5" style="width: 160px;text-align: center;">
          已选择0个活动
        </el-col>
        <el-col :span="5" style="width: 140px;">
          <el-select v-model="currentType" placeholder="请选择活动分类">
            <el-option v-for="type in types" :value="type" :key="type">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="13" style="text-align: left;">
          <!--<el-button :plain="true" type="info">设置活动分类</el-button>-->
          <el-button :plain="true" @click.native="" type="danger">删除</el-button>
          <el-button :plain="true" @click.native="" type="info">置顶</el-button>
          <el-button :plain="true" @click.native="" type="info">复制</el-button>
        </el-col>
      </el-row>

      <!--Table Events:  cell-click	当某个单元格被点击时会触发该事件 -->
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange">

        <el-table-column
          type="selection"
          width="50">
        </el-table-column>

        <el-table-column
          prop="title"
          label="活动名称"
          width="180">
        </el-table-column>

        <el-table-column
          prop="type"
          label="活动类型"
          width="180">
        </el-table-column>

        <el-table-column
          prop="status"
          label="活动状态"
          width="180">
        </el-table-column>

        <el-table-column
          prop="readNum"
          label="浏览数"
          width="180">
        </el-table-column>

        <el-table-column
          prop="signUpNum"
          label="报名数"
          width="180">
        </el-table-column>

        <el-table-column
          prop="auditNum"
          label="待审核"
          width="180">
        </el-table-column>

        <el-table-column inline-template label="操作" align="center" property="id">
          <el-button type="text" size="" @click.native="goDetail">查看详情</el-button>
        </el-table-column>

      </el-table>

      <el-row type="flex" justify="end" style="padding: 20px 0;">
        <el-pagination
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'activeManage',
    data () {
      return {
        multipleSelection: [],
        currentType: '全部',
        types: ['全部', '测试活动', '免费活动', '收费活动']
      }
    },
    computed: {
      ...mapState([
        'tableData'
      ])
    },
    methods: {
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      goDetail () {
        this.$router.push('/detail/page1')
      }
    }

  }
</script>

<style>
  .head {
    text-align: center;
    color: #fff;
    font-size: 30px;
    margin-bottom: 50px;
  }

  .head>.el-col>.el-col {
    padding: 20px 0;
    border-right: 1px solid #fff;
  }

  .head span {
    font-size: 16px;
  }

  .el-table th {
    text-align: center!important;
  }

</style>
