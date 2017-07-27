<template>
  <div class="activePublish">
    <h2>创建活动</h2>
    <br/>
    <hr/>
    <el-form ref="form" :model="activity" label-width="80px" style="margin-top:30px;">
      <el-form-item label="活动名称">
        <el-input v-model="activity.title"></el-input>
      </el-form-item>

      <el-form-item label="活动类型">
        <el-select v-model="activity.type" placeholder="请选择活动类型">
          <el-option v-for="type in types" :key="type" :value="type">{{type}}</el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="活动状态">
        <el-select v-model="activity.status" placeholder="请选择活动状态">
          <el-option v-for="status in activityStatus" :key="status" :value="status">{{status}}</el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="活动时间">
        <el-col :span="6">
          <el-date-picker type="date" placeholder="选择开始日期" v-model="activity.startTime" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col :span="1" style="text-align: center;">——</el-col>
        <el-col :span="6">
          <el-date-picker type="date" placeholder="选择结束日期" v-model="activity.endTime" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="活动地点">
        <!-- 自己封装的一个二级联动地址选择器  开始这样用，不知道怎么获取当前选中的地址，不能保存地址，所以，就把封装的直接拿出来使用了-->
        <!--<address-select ref="place"
          :province="activity.place.province"
          :city="activity.place.city"
          :detail="activity.place.detail"
          ></address-select>-->
        <el-form class="demo-ruleForm"  label-position="top">
          <el-row :gutter="20" class="address">
            <el-col :span="5">
              <el-form-item prop="province">
                <el-select v-model="activity.place.province" placeholder="请输入省" >
                  <el-option
                    v-for="item in provinces"
                    :key="item.value"
                    :value="item.value"
                    ></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="5">
              <el-form-item  prop="city">
                <el-select v-model="activity.place.city" placeholder="请输入市" >
                  <el-option
                    v-for="item in cities"
                    :key="item.value"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item prop="detail">
                <el-input placeholder="请填写详细地址" :number="true" v-model="activity.place.detail" ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-form-item>

      <el-form-item label="报名数">
        <el-input v-model="activity.signUpNum"></el-input>
      </el-form-item>

      <el-form-item label="待审核">
        <el-input v-model="activity.auditNum"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button @click="cancel()">cancel</el-button>
        <el-button type="primary" @click="publish()">publish</el-button>
      </el-form-item>

      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        size="tiny"
        :before-close="handleClose">
        <span class="hidden" :class="{'publish_success': 'isPublish'}">publish success!</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-form>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import addressData from '../../assets/js/addressData.js'
  function formatData (data) {
    var result = []
    for (var key in data) {
      console.log(key)
      result.push({
        value: key
      })
    }
    console.log(result)
    return result
  }
  export default {
    name: 'activePublish',
    data () {
      return {
        activity: {
          id: 0,
          title: '',
          type: '',
          status: '',
          startTime: '',
          endTime: '',
          place: {
            province: '',
            city: '',
            detail: ''
          },
          signUpNum: 0,
          auditNum: 0
        },
        provinces: formatData(addressData),
        dialogVisible: false, // 对话框隐藏
        isPublish: false
      }
    },
    created () { // 在实例创建之后同步调用

    },
    computed: {
      ...mapState([
        'activityStatus',
        'types'
      ]),
      cities () {
        return formatData(addressData[this.activity.place.province])
      }
    },
    methods: {
      formatDate (timeM) {
        var time = new Date(parseInt(timeM))
        var y = time.getFullYear()
        var m = time.getMonth() + 1
        var d = time.getDate()
        if (m < 10) {
          m = '0' + m
        }
        if (d < 10) {
          d = '0' + d
        }
        return y + '-' + m + '-' + d
      },
      // 取消发布
      cancel () {
        var self = this
        // 输入框置空
        self.activity = {
          id: 0,
          title: '',
          type: '',
          status: '',
          startTime: '',
          endTime: '',
          place: {
            province: '',
            city: '',
            detail: ''
          },
          signUpNum: 0,
          auditNum: 0
        }
      },
      // 确认发布
      publish () {
        var self = this
        // 这里要把日期转换一下，转成类似2017-05-26
        self.activity.startTime = self.formatDate(Date.parse(new Date(self.activity.startTime)))
        self.activity.endTime = self.formatDate(Date.parse(new Date(self.activity.endTime)))
        console.log(self.activity.startTime)
        self.$store.dispatch('publish', self.activity)
        self.isPublish = true // 显示“publish success”文本消息
        self.dialogVisible = true // 显示对话框
        // 置空输入框
        self.activity = {
          id: 0,
          title: '',
          type: '',
          status: '',
          startTime: '',
          endTime: '',
          place: {
            province: '',
            city: '',
            detail: ''
          },
          signUpNum: 0,
          auditNum: 0
        }
      },
      // 点击对话框的“X”关闭对话框
      handleClose () {
        self.dialogVisible = false
      }
    },
    watch: {
      '$route' (to, from) { // 监听路由的变化
        this.isRouter = true
      },
      publish (newVal, oldVal) {
        alert('can publish')
      }
    }
  }
</script>
<style>
  .hidden {
    display: none;
  }

  .publish_success {
    display: block;
    font-size: 30px;
  }
</style>
