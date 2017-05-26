<template>
  <el-form ref="form" :model="activity" label-width="80px">
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
      <el-button @click="back()">back</el-button>
      <el-button type="primary" @click="save()">save</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {mapState} from 'vuex'
  import addressData from '../../assets/js/addressData.js'
  function formatData (data) {
    var result = []
    for (var key in data) {
      result.push({
        value: key
      })
    }
    return result
  }
  export default {
    name: 'detail',
    data () {
      return {
        activityId: 0,
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
        params: {}
      }
    },
    created () {
      this.getParams()
      this.getActivity(this.activityId)
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
      getParams () {
        this.params = this.$route.params
        this.activityId = this.$route.params.activityId
      },
      getActivity (activityId) {
        var self = this
        self.$store.state.tableData.forEach((activity) => {
          console.log(activityId + '--' + typeof activityId + '传进来的') // 5
          console.log(activity.id + '--' + typeof activity.id + '循环的')
          if (parseInt(activity.id) === parseInt(activityId)) {
            console.log(activity.title)
            self.activity = {
              id: activityId,
              title: activity.title,
              type: activity.type,
              status: activity.status,
              startTime: activity.startTime,
              endTime: activity.endTime,
              place: {
                province: activity.place.province,
                city: activity.place.city,
                detail: activity.place.detail
              },
              signUpNum: activity.signUpNum,
              auditNum: activity.auditNum
            }
            console.log(self.activity)
          }
        })
      },
      back () {
        this.$router.go(-1)
      },
      // 毫秒转成年月日
      formatDate (timeM) {
        var time = new Date(parseInt(timeM))
        var y = time.getFullYear()
        var m = time.getMonth() + 1
        var d = time.getDate()
        return y + '-' + m + '-' + d
      },
      save () {
        var self = this
        self.activity.title = self.activity.title.trim()
        console.log(self.activity.startTime) // Thu May 25 2017 00:00:00 GMT+0800 (中国标准时间)
        console.log(new Date(self.activity.startTime)) // Thu May 25 2017 00:00:00 GMT+0800 (中国标准时间)
        console.log(Date.parse(new Date(self.activity.startTime))) // 1495641600000
        self.activity.startTime = self.formatDate(Date.parse(new Date(self.activity.startTime)))
        self.activity.endTime = self.formatDate(Date.parse(new Date(self.activity.endTime)))
        if (self.activity.title && self.activity.type && self.activity.status && self.activity.startTime &&
          self.activity.endTime && self.activity.place && self.activity.signUpNum && self.activity.auditNum) {
          console.log(self.activity.startTime)
          console.log(self.activity.place.province)
          self.$store.dispatch('save', self.activity)
          self.back()
        } else {
          alert('各项必填！')
        }
      }
    }
  }
</script>

<style>
  .el-form-item__content {
    padding-left: 10px;
  }

  .demo-ruleForm .el-col.el-col-5 {
    padding-left: 0!important;
  }
</style>
