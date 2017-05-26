<template>
  <div class="allActivity">
    <el-row class="head">
      <el-col :span="18" style="padding: 20px 0; background-color: #33CCCC;">
        <el-col :span="8">
          {{tableData.length}}<br/>
          <span>活动总数</span>
        </el-col>
        <el-col :span="8">
          {{allSignUpNum}}<br/>
          <span>报名总数</span>
        </el-col>
        <el-col :span="8" style="border:none;">
          {{allAuditNum}}<br/>
          <span>待审核</span>
        </el-col>
      </el-col>

      <el-col :span="5" :offset="1" style="padding: 40px 0; background-color: #3091F2;">
        {{allStatusIng}}<br/>
        <span>进行中</span>
      </el-col>
    </el-row>

    <el-card class="box-card">
      <h3>活动列表</h3>
      <el-row type="flex" align="middle" :gutter="20" style="padding: 20px 0;">
        <el-col :span="5" style="width: 160px;text-align: center;">
          已选择{{ activeNum }}个活动
        </el-col>
        <el-col :span="5" style="width: 140px;">
          <el-select v-model="currentType" placeholder="请选择活动分类">
            <el-option v-for="type in types" :value="type" :key="type">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="13" style="text-align: left;">
          <!--<el-button :plain="true" type="info">设置活动分类</el-button>-->
          <el-button :plain="true" @click.native="handleRemove" type="danger">删除</el-button>
          <el-button :plain="true" @click.native="handleMoveToTop" type="info">置顶</el-button>
        </el-col>
      </el-row>

      <el-table :data="tableData"  style="width: 100%" @selection-change="selectionchange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column property="title" label="活动名称"></el-table-column>
        <el-table-column property="type" label="活动分类" ></el-table-column>
        <el-table-column property="status" label="活动状态"></el-table-column>
        <el-table-column property="startTime" label="开始时间"></el-table-column>
        <el-table-column property="endTime" label="结束时间"></el-table-column>
        <el-table-column property="address" label="活动地点"></el-table-column>
        <el-table-column property="signUpNum" label="报名数"></el-table-column>
        <el-table-column property="auditNum" label="待审核"></el-table-column>
        <el-table-column inline-template label="操作" align="center" property="id">
          <el-button type="text" size="mini" @click.native="goDetail(row.id)">查看详情</el-button>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'activeManage',
    data () {
      return {
        currentType: '全部',
        types: ['全部', '测试活动', '免费活动', '收费活动'],
        activeNum: 0,
        selectItems: []
      }
    },
    computed: {
      // 活动分类筛选
      tableData () {
        var type = this.currentType
        return this.$store.state.tableData.filter(data => {
          data.address = data.place.province + data.place.city + data.place.detail
          if (type === '全部' || type === '') {
            return true
          } else {
            return data.type === type
          }
        })
      },
      allSignUpNum () {
        var allSignUpNum = 0
        this.tableData.forEach(item => {
          allSignUpNum += parseInt(item.signUpNum)
        })
        return allSignUpNum
      },
      allAuditNum () {
        var allAuditNum = 0
        this.tableData.forEach(item => {
          allAuditNum += parseInt(item.auditNum)
        })
        return allAuditNum
      },
      allStatusIng () {
        var allStatusIng = 0
        this.tableData.forEach(item => {
          if (item.status === '进行中') {
            allStatusIng += 1
          }
        })
        return allStatusIng
      }
    },
    methods: {
      // 选择列表
      selectionchange (val) {
        var arr = []
        val.forEach((item) => {
          arr.push(item)
        })
        this.selectItems = arr
        this.activeNum = this.selectItems.length
        console.log(arr)
      },
      // 删除选中的所有项
      handleRemove () {
        var self = this
        self.$store.dispatch('handleRemove', self.selectItems)
        self.selectItems = []
      },
      // 置顶
      handleMoveToTop () {
        var self = this
        self.$store.dispatch('handleMoveToTop', self.selectItems)
        this.selectItems = []
      },
      goDetail (id) {
        this.$router.push('/detail/' + id)
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

  .cell {
    text-align: center;
  }

  .el-table th {
    text-align: center!important;
  }
  .activeTable {
    width: 100%;
  }

  .activeTable, .activeTable th, .activeTable td {
    border-collapse: collapse;
    border-color: #e0e6ed;
  }
  .activeTable tr th {
    background-color: #eff2f7;
  }

  .activeTable tr th, .activeTable tr td {
    width: 200px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }

  .activeTable tr td a {
    text-decoration: none;
    color: #20a0ff;
  }



</style>
