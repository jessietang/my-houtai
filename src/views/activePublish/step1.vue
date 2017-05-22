<template>
  <div class="step1">
    <h2>step1</h2>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name" ></el-input>
      </el-form-item>

      <el-form-item label="" prop="fenLei">
        <el-row style="height:35px;" type="flex" align="middle">
          <el-col :span="3" style="width:90px;">
            <div class="el-form-item__label" style="padding-bottom: 0;">活动分类</div>
          </el-col>
          <el-col :span="2">
            <el-button type="text" style="margin: 0;padding: 0;">设置</el-button>
          </el-col>
        </el-row>
        <el-radio-group v-model="ruleForm.fenLei">
          <el-radio v-for="item in ruleForm.fenLeis" :label="item.name" :key="item.name"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="活动标签" required>
        <el-tag
          v-for="tag in ruleForm.tags"
          :key="tag"
          :closable="true"
          type="primary"
          @close="handleClose(tag)"
          >
        </el-tag>
        <el-button icon="plus" size="large" @click.native="showDialog" style="vertical-align: middle;margin: 10px;"></el-button>
        <transition name="fade">
          <div class="el-form-item__error" v-show="tagsValid">{{ tagsError }}</div>
        </transition>
      </el-form-item>

      <el-form-item label="活动时间" required style="width: 750px;">
        <el-col :span="5">
          <el-form-item prop="activeStartTimeDate">
            <el-date-picker
              v-model="ruleForm.activeStartTimeDate"
              type="date"
              placeholder="活动开始日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item prop="activeStartTimeTime">
            <el-time-select
              placeholder="请选择时间点"
              v-model="ruleForm.activeStartTimeTime"
              :picker-options="{start: '00:00',step: '00:15',end: '23:45'}">
            </el-time-select>
          </el-form-item>
        </el-col>
        <el-col :span="1" style="text-align: center;">——</el-col>
        <el-col :span="5">
          <el-form-item prop="activeEndTimeDate">
            <el-date-picker
              v-model="ruleForm.activeEndTimeDate"
              type="date"
              placeholder="活动结束日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item prop="activeEndTimeTime">
            <el-time-select
              placeholder="请选择时间点"
              v-model="ruleForm.activeEndTimeTime"
              :picker-options="{start: '00:00',step: '00:15',end: '23:45'}">
            </el-time-select>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label="活动地点" required>
        <!-- 自己封装的一个二级联动地址选择器 -->
        <address-select
          :province="ruleForm.province"
          :city="ruleForm.city"
          :detail="ruleForm.detail"
          :isAddressTrue="isAddressTrue"
          ></address-select>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  import addressSelect from '../../components/address'
  export default {
    name: 'step1',
    components: {
      'address-select': addressSelect
    },
    data () {
      return {
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'change'}
          ],
          fenLei: [
            {required: true, message: '请选择活动分类', trigger: 'change'}
          ],
          activeStartTimeDate: [
            {required: true, message: '请选择活动开始日期', trigger: 'change'}
          ],
          activeStartTimeTime: [
            {required: true, message: '请选择活动开始时间', trigger: 'change'}
          ],
          activeEndTimeDate: [
            {required: true, message: '请选择活动结束日期', trigger: 'change'}
          ],
          activeEndTimeTime: [
            {required: true, message: '请选择活动结束时间', trigger: 'change'}
          ],
          signStartTimeDate: [
            {required: true, message: '请选择报名开始日期', trigger: 'change'}
          ],
          signStartTimeTime: [
            {required: true, message: '请选择报名开始时间', trigger: 'change'}
          ],
          signEndTimeDate: [
            {required: true, message: '请选择报名截止日期', trigger: 'change'}
          ],
          signEndTimeTime: [
            {required: true, message: '请选择报名截止时间', trigger: 'change'}
          ]
        },
        ruleForm: {
          name: '',
          fenLeis: [
            {name: '未发布'},
            {name: '测试活动'},
            {name: '精彩活动'}
          ],
          fenLei: '',
          tags: [
            {name: 'tag1'},
            {name: 'tag2'}
          ],
          activeStartTimeDate: '',
          activeStartTimeTime: '',
          activeEndTimeDate: '',
          activeEndTimeTime: '',
          signStartTimeDate: '',
          signStartTimeTime: '',
          signEndTimeDate: '',
          signEndTimeTime: '',
          activePerson: '',
          activePersonNum: '',
          activeDescribe: '',
          UseMsgShow: '',
          evaluate: '',
          adTitle: '',
          adContent: '',
          adLink: ''
        }
      }
    }
  }
</script>

<style>
  .step{margin-bottom: 30px;}
  .step1 .demo-ruleForm .el-form-item{margin-bottom: 25px;margin-right: 50px;}

  .step1 .el-form-item.is-required .el-form-item__label:after {
    content: '*';
    color: #ff4949;
    margin-right: 4px;
  }
  .step1 .el-form-item.is-required .el-form-item__label:before { display: none; }
  /* 标签 */
  .step1 .el-tag{padding: 10px 15px;margin:10px;vertical-align: middle;height: auto;}
  .step1 .el-tag:first-child{margin-left: 0;}

  /* 对话框 */
  .step1 .el-dialog--small{width: 564px;}
  .step1 .el-dialog__body{padding-bottom: 0;}
  .step1 .el-dialog__body .el-form-item{margin-bottom: 10px;}
  .step1 .el-dialog__wrapper  .el-button{margin-left: 15px;}


  /* 时间选择器 */
  .step1 .el-date-editor{width:150px;}

  .step1 .el-form-item .router-link{color:#fff;}
  .el-form-item__error{white-space: nowrap;}

  .el-form-item__content {
    margin-left: 0!important;
  }

  .el-form-item__label {
    text-align: left!important;
  }

  .el-form-item__label {
    display: inline-block;
    width: 100% !important;
  }
</style>
