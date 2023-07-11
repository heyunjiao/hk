<template>
  <div class="setting">
    <div class="mrb_20">
      <Form
        ref="basicInfo"
        :data="formObj"
        :change-submit="ChangeSubmit"
        :reset="resetForm"
      />
    </div>
    <div class="mrb_20">
      <Form
        ref="positioinInfo"
        :data="formObj1"
        :change-submit="ChangeSubmit1"
        :reset="resetForm"
        :change="ChangeSel"
      >
        <template>
          <el-form-item :label="$t('useCommonAll.functions')">
            <el-tree
              ref="tree"
              class="role-tree"
              :data="data"
              show-checkbox
              default-expand-all
              node-key="id"
              :default-checked-keys="roleKeys"
              :current-node-key="roleKeyString"
              :props="treeProps"
            />
          </el-form-item>
        </template>
      </Form>
    </div>

    <div v-if="!this.formObj.formDisabled" class="btn-line">
      <el-button
        class="Search-btn"
        @click="onSubmitFn"
      >{{ $t("useCommonAll.save") }}
      </el-button>
    </div>
  </div>
</template>

<script>
import '@/config/ele/elementForm'
import '@/config/ele/eleLayout'
import { mapState } from 'vuex'
import Table from '@/componentsHK/public/Tabel'

import Form from '@/componentsHK/public/Form'
import selectOption from '@/views/global-data/selectOption'
import { AddEmployee, GetEmployee, UpdateEmployee } from '@/api/staff'
import { updateTitle } from '@/utils/index'
export default {
  components: {
    Form,
    Table
  },
  data() {
    return {
      addtitle: 'useCommonAll.newMember',
      editTitle: 'route.editStaff',
      viewTitle: 'route.staffDetail',
      id: '',
      roleKeys: [1, 2, 3, 4, 9, 10],
      roleKeyString: '1,2,3,4,9,10',
      data: [
        {
          id: 1,
          label: 'route.memberManage',
          disabled: true
        },
        {
          id: 2,
          label: 'route.appointeList',
          disabled: true
        },
        {
          id: 3,
          label: 'route.orderManage',
          disabled: true
        },
        {
          id: 11,
          label: 'route.staffManagement',
          disabled: true
        },
        {
          id: 5,
          label: 'route.clubManage',
          disabled: true,
          children: [
            {
              id: 7,
              label: 'route.roomManage',
              disabled: true
            },
            {
              id: 8,
              label: 'route.packageManage',
              disabled: true
            }
          ]
        },
        {
          id: 4,
          label: 'route.personalCenter',
          disabled: true,
          children: [
            {
              id: 9,
              label: 'route.personalInfo',
              disabled: true
            },
            {
              id: 10,
              label: 'route.accountManage',
              disabled: true
            }
          ]
        },
        {
          id: 6,
          label: 'route.financialManage',
          disabled: true
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      imageUrl: '',

      formObj: {
        title: 'useCommonAll.newMember' /* 表单标题*/,
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
            label: 'useCommonAll.jobNumber',
            value: '' /* 控件value / 默认值*/,
            type: '' /* 控件类型 支持原生*/,
            hidelabels: true /* 是否展示label*/ /* 是否展示label标题*/,
            classname: '' /* 自定义class*/,
            message: 'brandMessage' /* 校验提示语*/,
            disabled: false /* 是否禁用*/ /* 是否禁用 true 禁用 false 启用*/,
            placeholder: 'brandMessage' /* 提示语*/,
            category: 0 /* (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
            check: true /* 是否校验*/,
            iconChekc: false /* 是否展示icon*/,
            customParameters: 'workNum' /* 对应api的参数名称*/
          },
          {
            // 单行文本框
            id: 'input',
            span: 12 /* 表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: 'input',
            label: 'useCommonAll.name',
            value: '' /* 控件value / 默认值*/,
            type: '' /* 控件类型 支持原生*/,
            hidelabels: true /* 是否展示label*/ /* 是否展示label标题*/,
            classname: '' /* 自定义class*/,
            message: 'brandMessage' /* 校验提示语*/,
            disabled: false /* 是否禁用*/ /* 是否禁用 true 禁用 false 启用*/,
            placeholder: 'brandMessage' /* 提示语*/,
            category: 0 /* (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
            check: true /* 是否校验*/,
            iconChekc: false /* 是否展示icon*/,
            customParameters: 'name' /* 对应api的参数名称*/
          },

          {
            // 下拉框
            id: 'select',
            span: 12,
            assemblyname: '下拉框',
            label: 'useCommonAll.sex',
            value: null,
            type: '',
            hidelabels: true,
            classname: '',
            message: 'brandMessage',
            disabled: false,
            placeholder: 'Please select',
            category: 1,
            source: true,
            apiUrl: '',
            key: '',
            val: '',
            check: false,
            multiplechoice: false,
            searchable: false,
            formStatus: true,
            options: selectOption.sexType,
            customParameters: 'gender'
          },
          {
            // 下拉框
            id: 'select',
            span: 12,
            assemblyname: '下拉框',
            label: 'useCommonAll.entryStatus',
            value: null,
            type: '',
            hidelabels: true,
            classname: '',
            message: 'brandMessage',
            disabled: false,
            placeholder: 'Please select',
            category: 1,
            source: true,
            apiUrl: '',
            key: '',
            val: '',
            check: true,
            multiplechoice: false,
            searchable: false,
            formStatus: true,
            options: selectOption.entryStatusList,
            customParameters: 'status'
          },
          // {
          //   // 下拉框
          //   id: "select",
          //   span: 12,
          //   assemblyname: "下拉框",
          //   label: "useCommonAll.position",
          //   value: null,
          //   type: "",
          //   hidelabels: true,
          //   classname: "",
          //   message: "brandMessage",
          //   disabled: false,
          //   placeholder: "Please select",
          //   category: 1,
          //   source: true,
          //   apiUrl: "",
          //   key: "",
          //   val: "",
          //   check: true,
          //   multiplechoice: false,
          //   searchable: false,
          //   formStatus: true,
          //   options: selectOption.positionList,
          //   customParameters: "roleId",
          // },

          {
            // 单行文本框
            id: 'input',
            span: 12 /* 表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: 'input',
            label: 'useCommonAll.phone',
            value: '' /* 控件value / 默认值*/,
            type: 'number' /* 控件类型 支持原生*/,
            hidelabels: true /* 是否展示label*/ /* 是否展示label标题*/,
            classname: '' /* 自定义class*/,
            message: 'brandMessage' /* 校验提示语*/,
            disabled: false /* 是否禁用*/ /* 是否禁用 true 禁用 false 启用*/,
            placeholder: 'brandMessage' /* 提示语*/,
            category: 0 /* (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
            check: true /* 是否校验*/,
            iconChekc: false /* 是否展示icon*/,
            customParameters: 'mobilePhone' /* 对应api的参数名称*/
          },
          {
            // 单行文本框
            id: 'input',
            span: 12 /* 表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: 'input',
            label: 'useCommonAll.email',
            value: '' /* 控件value / 默认值*/,
            type: 'email' /* 控件类型 支持原生*/,
            hidelabels: true /* 是否展示label*/ /* 是否展示label标题*/,
            classname: '' /* 自定义class*/,
            message: 'brandMessage' /* 校验提示语*/,
            disabled: false /* 是否禁用*/ /* 是否禁用 true 禁用 false 启用*/,
            placeholder: '' /* 提示语*/,
            category: 0 /* (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
            check: true /* 是否校验*/,
            iconChekc: false /* 是否展示icon*/,
            customParameters: 'email' /* 对应api的参数名称*/,
            rule: {
              type: 'email',
              // pattern:'/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/',
              message: 'formatNotrue'
            }
          },

          {
            // 时间选选择器
            id: 'dateSelection',
            span: 12,
            assemblyname: '',
            label: 'useCommonAll.birthday',
            value: '',
            type: 'date',
            hidelabels: true,
            classname: '',
            message: 'brandMessage',
            disabled: false,
            placeholder: 'Please select',
            category: 5,
            check: true,
            format: 'yyyy-MM-dd',
            customParameters: 'birthday',
            formStatus: true
          },
          {
            // 时间选选择器
            id: 'dateSelection',
            span: 12,
            assemblyname: '',
            label: 'useCommonAll.entryTime',
            value: '',
            type: 'date',
            hidelabels: true,
            classname: '',
            message: 'brandMessage',
            disabled: false,
            placeholder: 'Please select',
            category: 5,
            check: true,
            format: 'yyyy-MM-dd',
            customParameters: 'hiredate',
            formStatus: true
          }
        ]
      },
      formObj1: {
        title: 'useCommonAll.position' /* 表单标题*/,

        formDisabled: false,
        formproperties: {
          inline: true
        },
        formData: [
          {
            // 多选框组
            id: 'Checkbox',
            span: 24,
            assemblyname: '多选框组',
            label: 'useCommonAll.position',
            value: 1,
            type: '',
            hidelabels: true,
            classname: '',
            message: 'brandMessage',
            placeholder: 'Please select',
            category: 2,
            source: false,
            check: true,
            layoutmode: 0,
            formStatus: true,
            options: selectOption.positionList,
            customParameters: 'roleId'
          }
        ]
      },
      treeProps: {
        label: (data, node) => this.customLabel(data, node)
      }
    }
  },
  created() {
    this.query = { type: this.$route.query.type, id: this.$route.query.id }
    updateTitle(this.formObj, this.addtitle, this.editTitle, this.viewTitle, this.query)

    if (this.query.id) {
      this.getDetail(this.query.id)
      if (this.query.type === 'view') {
        this.formObj.formDisabled = true
        this.formObj1.formDisabled = true
      } else if (this.query.type === 'edit') {
        this.formObj.formData[0].disabled = true
      }
    } else {
    }
  },
  methods: {

    echoFn(res) {
      this.formObj.formData.forEach((i) => {
        if (res[i.customParameters]) {
          i.value = res[i.customParameters]
        } else {
          i.value = ''
        }
      })

      this.formObj1.formData[0].value = +res.roleId
      this.ChangeSel({ value: +res.roleId })
    },
    async getDetail(id) {
      const res = await GetEmployee(id)
      this.echoFn(res.result)
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
    ChangeSubmit(data, obj) {
      // console.debug(data, obj);
      this.obj = obj
      console.log(data, obj)
    },
    ChangeSubmit1(data, obj) {
      // console.debug(data, obj);
      this.obj = obj
      console.log(data, obj)
    },
    ChangeSel(data) {
      console.log(data)
      switch (data.value) {
        case 1:
          this.$refs.tree.setCheckedKeys([1, 2, 3, 4, 9, 10])
          break
        case 2:
          this.$refs.tree.setCheckedKeys([2, 4, 9, 10])

          break
        case 3:
          this.$refs.tree.setCheckedKeys([2, 4, 9, 10])

          break
        case 4:
          this.$refs.tree.setCheckedKeys([2, 6, 4, 9, 10])

          break
        case 5:
          this.$refs.tree.setCheckedKeys([1, 2, 3, 4, 5, 7, 8, 9, 10])

          break
        case 6:
          this.$refs.tree.setCheckedKeys([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

          break

        default:
          break
      }
    },
    resetForm() {
      console.debug('重置')
    },
    onSubmitFn() {
      const p1 = this.$refs.basicInfo.validateFormPromis('dynamicValidateForm')
      const p2 = this.$refs.positioinInfo.validateFormPromis(
        'dynamicValidateForm'
      )
      Promise.all([p1])
        .then(async(result) => {
          const form1 = this.getStoreFormValue(this.formObj.formData)
          const form2 = this.getStoreFormValue(this.formObj1.formData)
          if (this.query.id) {
            const res = await UpdateEmployee({
              ...form1,
              ...form2,
              id: this.query.id
            })
          } else {
            const res = await AddEmployee({ ...form1, ...form2 })
          }

          this.$message({
            type: 'success',
            message: this.$t('useCommonAll.operatorSuciscess')
          })
          this.$router.push({ path: '/staff/staffList' })
        })
        .catch((e) => console.log(e))
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'png'
      console.log(isJPG, 'isJPG')
      const isLt2M = file.size / 1024 / 1024 < 2

      // if (!isJPG) {
      //   this.$message.error("上传头像图片只能是 JPG 格式!");
      // }
      // if (!isLt2M) {
      //   this.$message.error("上传头像图片大小不能超过 2MB!");
      // }
      // return isJPG && isLt2M;
    },
    customLabel(data) {
      return this.$t(data.label)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-line {
  text-align: right;
  padding: 15px;
  background-color: #fff;
  margin-bottom: 10px;
  /* display: flex;
    flex-direction: column-reverse; */
}
</style>
<style lang="scss">
.role-tree {
  .el-tree-node__content {
    cursor: not-allowed;
    &:hover {
      background-color: #fff;
    }
  }
}
</style>
