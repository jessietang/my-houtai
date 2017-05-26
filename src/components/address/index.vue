<!--地址选择组件-->
<template>
  <el-form :model="form" class="demo-ruleForm" :rules="rules" ref="form" label-position="top">
    <el-row :gutter="20" class="address">
      <el-col :span="5">
        <el-form-item prop="province">
          <el-select v-model="form.province" placeholder="请输入省" @change="proChange" ref="province">
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
          <el-select v-model="form.city" placeholder="请输入市" @change="cityChange" ref="city">
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
          <el-input placeholder="请填写详细地址" :number="true" v-model="form.detail" ref="detail"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
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
    name: 'address',
    props: ['province', 'city', 'detail', 'isAddressTrue'],
    data () {
      return {
        rules: {
          province: [
            {
              message: '请选择省份',
              trigger: 'change'
            }
          ],
          city: [
            {
              message: '请选择城市',
              trigger: 'change'
            }
          ],
          detail: [
            {
              message: '请填写详细地址',
              trigger: 'change'
            }
          ]
        },
        form: {
          province: this.province,
          city: this.city,
          detail: this.detail
        },
        provinces: formatData(addressData)
      }
    },
    watch: {
      form: {
        handler () {
          this.$store.commit('SETRULEFORM', this.form)
        },
        deep: true
      },
      ifCheckFrom (val, oldVal) {
        if (val) {
          this.$refs.form.validate((valid) => {})
        }
      }
    },
    computed: {
      cities () {
        return formatData(addressData[this.form.province])
      }
    },
    methods: {
      proChange (val, oldVal) {
        if (oldVal) {
          this.form.city = ''
          this.form.detail = ''
        }
        var data = formatData(addressData[this.form.province])
        for (var i = 0; i < data.length; i++) {
          this.$set(this.cities, i, data[i])
        }
      },
      cityChange (val, oldVal) {
        if (oldVal) {
          this.form.detail = ''
        }
      }
    }
  }
</script>
