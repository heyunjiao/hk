<template>
  <div class="setting">
    <Form
      ref="basicInfo"
      :data="formObj"
      :change-submit="ChangeSubmit"
      :reset="resetForm"
      :change="upDataChange"
    />
    <div v-if="!this.formObj.formDisabled" class="btn-line">
      <el-button
        type="primary"
        :disabled="disabled"
        @click="onSubmitFn"
      >{{ $t("useCommonAll.saveUpdate") }}
      </el-button>
    </div>
  </div>
</template>

<script>
import '@/config/ele/elementForm'
import '@/config/ele/eleLayout'
import { mapState } from 'vuex'
import Form from '@/componentsHK/public/Form'
import selectOption from '@/views/global-data/selectOption'
import { SetPassword } from '@/api/staff'
import store from '@/store'

export default {
  components: {
    Form
  },
  data() {
    return {
      disabled: true,
      userInfo: '',
      formObj: {
        title: 'route.accountManage' /* 表单标题*/,

        formDisabled: false,
        formproperties: {
          inline: true
        },
        formData: [
          {
            // 单行文本框
            id: 'input',
            span: 12 /* 表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: 'input',
            label: 'useCommonAll.account',
            value: JSON.parse(localStorage.getItem('userInfo'))
              .workNum /* 控件value / 默认值*/,
            type: '' /* 控件类型 支持原生*/,
            hidelabels: true /* 是否展示label*/ /* 是否展示label标题*/,
            classname: '' /* 自定义class*/,
            message: 'brandMessage' /* 校验提示语*/,
            disabled: true /* 是否禁用*/ /* 是否禁用 true 禁用 false 启用*/,
            placeholder: 'brandMessage' /* 提示语*/,
            category: 0 /* (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
            check: false /* 是否校验*/,
            iconChekc: false /* 是否展示icon*/,
            customParameters: 'input' /* 对应api的参数名称*/
          },
          {
            span: 12 /* 表单占据控件，容器分为 24份，需要整数*/
          },

          {
            // 单行文本框
            id: 'input',
            span: 12 /* 表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: 'input',
            label: 'useCommonAll.oldPassword',
            value: '' /* 控件value / 默认值*/,
            type: 'password' /* 控件类型 支持原生*/,
            hidelabels: true /* 是否展示label*/ /* 是否展示label标题*/,
            classname: '' /* 自定义class*/,
            message: 'brandMessage' /* 校验提示语*/,
            disabled: false /* 是否禁用*/ /* 是否禁用 true 禁用 false 启用*/,
            placeholder: 'brandMessage' /* 提示语*/,
            category: 0 /* (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
            check: true /* 是否校验*/,
            iconChekc: false /* 是否展示icon*/,
            customParameters: 'password' /* 对应api的参数名称*/
          },
          {
            span: 12 /* 表单占据控件，容器分为 24份，需要整数*/
          },

          {
            // 单行文本框
            id: 'input',
            span: 12 /* 表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: 'input',
            label: 'useCommonAll.newPassword',
            value: '' /* 控件value / 默认值*/,
            type: 'password' /* 控件类型 支持原生*/,
            hidelabels: true /* 是否展示label*/ /* 是否展示label标题*/,
            classname: '' /* 自定义class*/,
            message: 'brandMessage' /* 校验提示语*/,
            disabled: false /* 是否禁用*/ /* 是否禁用 true 禁用 false 启用*/,
            placeholder: 'brandMessage' /* 提示语*/,
            category: 0 /* (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
            check: true /* 是否校验*/,
            iconChekc: false /* 是否展示icon*/,
            customParameters: 'newPassword' /* 对应api的参数名称*/
          },
          {
            span: 12 /* 表单占据控件，容器分为 24份，需要整数*/
          },
          {
            // 单行文本框
            id: 'input',
            span: 12 /* 表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: 'input',
            label: '确认新密码',
            value: '' /* 控件value / 默认值*/,
            type: 'password' /* 控件类型 支持原生*/,
            hidelabels: true /* 是否展示label*/ /* 是否展示label标题*/,
            classname: '' /* 自定义class*/,
            message: 'brandMessage' /* 校验提示语*/,
            disabled: false /* 是否禁用*/ /* 是否禁用 true 禁用 false 启用*/,
            placeholder: 'brandMessage' /* 提示语*/,
            category: 0 /* (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
            check: true /* 是否校验*/,
            iconChekc: false /* 是否展示icon*/,
            customParameters: 'confirmnewPassword' /* 对应api的参数名称*/
          }
        ]
      }
    }
  },
  methods: {
    ChangeSubmit(data, obj) {
      // console.debug(data, obj);
      this.obj = obj
    },
    resetForm() {
      console.debug('重置')
    },
    upDataChange(v) {
      const passwordvalue = this.formObj.formData
        .find((i) => i.customParameters == 'confirmnewPassword')
        .value.trim()
      const newPasswordvalue = this.formObj.formData
        .find((i) => i.customParameters == 'newPassword')
        .value.trim()
      console.log(passwordvalue, newPasswordvalue, 999)
      if (passwordvalue && newPasswordvalue) {
        if (
          (v.customParameters === 'newPassword' && passwordvalue) ||
          (v.customParameters === 'confirmnewPassword' && newPasswordvalue)
        ) {
          if (passwordvalue !== newPasswordvalue) {
            this.disabled = true
            this.$message.error(this.$t('useCommonAll.passwordIncorrect'))
          } else {
            this.disabled = false
          }
        }
      } else {
        this.disabled = true
      }
    },
    getStoreFormValue(key) {
      let tempdata
      this.$store.commit('keyValue', {
        data: key,
        Callback: (response) => {
          tempdata = response
        }
      })

      return tempdata
    },
    onSubmitFn() {
      const p1 = this.$refs.basicInfo.validateFormPromis('dynamicValidateForm')
      Promise.all([p1])
        .then(async(result) => {
          const form1 = this.getStoreFormValue(this.formObj.formData)
          const param = { ...form1 }
          delete param.confirmnewPassword
          const res = await SetPassword({
            employeeId: JSON.parse(localStorage.getItem('userInfo')).id,
            ...param
          })
          this.$message({
            type: 'success',
            message: this.$t('useCommonAll.operatorSuciscess')
          })
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
          console.log(form1, res, 'form')
        })
        .catch((e) => console.log(e))
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-line {
  margin-top: 20px;
  text-align: right;
  padding: 15px;
  background-color: #fff;
  margin-bottom: 10px;
  /* display: flex;
      flex-direction: column-reverse; */
}</style
>>
