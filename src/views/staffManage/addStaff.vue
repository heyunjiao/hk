<template>
  <div class="setting">
    <div class="mrb_20">
      <Form
        ref="basicInfo"
        :data="formObj"
        :ChangeSubmit="ChangeSubmit"
        :reset="resetForm"
      >
        <!-- <template>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </template> -->
      </Form>
    </div>
    <div class="mrb_20">
      <Form
        ref="basicInfo"
        :data="formObj1"
        :ChangeSubmit="ChangeSubmit1"
        :reset="resetForm"
        :Change="ChangeSel"
      >
        <template>
          <el-form-item :label="$t('useCommonAll.functions')">
            <el-tree
              class="role-tree"
              :data="data"
              show-checkbox
              default-expand-all
              node-key="id"
              :default-checked-keys="roleKeys"
              :current-node-key="roleKeyString"
              ref="tree"
             :props="treeProps"
            >
            </el-tree>
          </el-form-item>
        </template>
      </Form>
    </div>

    <div class="btn-line" v-if="!this.formObj.formDisabled">
      <el-button @click="onSubmitFn" class="Search-btn"
        >{{ $t("useCommonAll.save") }}
      </el-button>
    </div>
  </div>
</template>

<script>
import "@/config/ele/elementForm";
import "@/config/ele/eleLayout";
import { mapState } from "vuex";
import Table from "@/componentsHK/public/Tabel";

import Form from "@/componentsHK/public/Form";
import selectOption from "@/views/global-data/selectOption";
export default {
  components: {
    Form,
    Table,
  },
  data() {
    return {
      roleKeys: [1, 2, 3, 4, 9, 10],
      roleKeyString: "1,2,3,4,9,10",
      data: [
        {
          id: 1,
          label: "route.memberManage",
          disabled: true,
        },
        {
          id: 2,
          label: "route.appointeList",
          disabled: true,
        },
        {
          id: 3,
          label: "route.orderManage",
          disabled: true,
        },
        {
          id: 11,
          label: "route.staffManagement",
          disabled: true,
        },
        {
          id: 5,
          label: "route.clubManage",
          disabled: true,
          children: [
            {
              id: 7,
              label: "route.roomManage",
              disabled: true,
            },
            {
              id: 8,
              label: "route.packageManage",
              disabled: true,
            },
          ],
        },
        {
          id: 4,
          label: "route.personalCenter",
          disabled: true,
          children: [
            {
              id: 9,
              label: "route.personalInfo",
              disabled: true,
            },
            {
              id: 10,
              label: "route.accountManage",
              disabled: true,
            },
          ],
        },
        {
          id: 6,
          label: "route.financialManage",
          disabled: true,
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      imageUrl: "",

      formObj: {
        title: "useCommonAll.newMember" /*表单标题*/,

        formDisabled: false,
        formproperties: {
          inline: true,
        },
        formData: [
        {
            // 单行文本框
            id: "input",
            span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: "input",
            label: "useCommonAll.jobNumber",
            value: "" /*控件value / 默认值*/,
            type: "" /*控件类型 支持原生*/,
            hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
            classname: "" /*自定义class*/,
            message: "brandMessage" /*校验提示语*/,
            disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
            placeholder: "brandMessage" /*提示语*/,
            category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
            check: true /*是否校验*/,
            iconChekc: false /*是否展示icon*/,
            customParameters: "input" /*对应api的参数名称*/,
          },
          {
            // 单行文本框
            id: "input",
            span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: "input",
            label: "useCommonAll.name",
            value: "" /*控件value / 默认值*/,
            type: "" /*控件类型 支持原生*/,
            hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
            classname: "" /*自定义class*/,
            message: "brandMessage" /*校验提示语*/,
            disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
            placeholder: "brandMessage" /*提示语*/,
            category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
            check: true /*是否校验*/,
            iconChekc: false /*是否展示icon*/,
            customParameters: "input" /*对应api的参数名称*/,
          },
          
          {
            // 下拉框
            id: "select",
            span: 12,
            assemblyname: "下拉框",
            label: "useCommonAll.sex",
            value: 1,
            type: "",
            hidelabels: true,
            classname: "",
            message: "brandMessage",
            disabled: false,
            placeholder: "Please select",
            category: 1,
            source: true,
            apiUrl: "",
            key: "",
            val: "",
            check: false,
            multiplechoice: false,
            searchable: false,
            formStatus: true,
            options: selectOption.sexType,
            customParameters: "select",
          },
          {
            // 下拉框
            id: "select",
            span: 12,
            assemblyname: "下拉框",
            label: "useCommonAll.entryStatus",
            value: 1,
            type: "",
            hidelabels: true,
            classname: "",
            message: "brandMessage",
            disabled: false,
            placeholder: "Please select",
            category: 1,
            source: true,
            apiUrl: "",
            key: "",
            val: "",
            check: true,
            multiplechoice: false,
            searchable: false,
            formStatus: true,
            options: selectOption.yesOrNo,
            customParameters: "select",
          },
          {
            // 下拉框
            id: "select",
            span: 12,
            assemblyname: "下拉框",
            label: "useCommonAll.position",
            value: 1,
            type: "",
            hidelabels: true,
            classname: "",
            message: "brandMessage",
            disabled: false,
            placeholder: "Please select",
            category: 1,
            source: true,
            apiUrl: "",
            key: "",
            val: "",
            check: true,
            multiplechoice: false,
            searchable: false,
            formStatus: true,
            options: selectOption.projectType,
            customParameters: "select",
          },

          {
            // 单行文本框
            id: "input",
            span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: "input",
            label: "useCommonAll.phone",
            value: "" /*控件value / 默认值*/,
            type: "number" /*控件类型 支持原生*/,
            hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
            classname: "" /*自定义class*/,
            message: "brandMessage" /*校验提示语*/,
            disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
            placeholder: "brandMessage" /*提示语*/,
            category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
            check: true /*是否校验*/,
            iconChekc: false /*是否展示icon*/,
            customParameters: "input" /*对应api的参数名称*/,
          },
          {
            // 单行文本框
            id: "input",
            span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: "input",
            label: "useCommonAll.email",
            value: "" /*控件value / 默认值*/,
            type: "email" /*控件类型 支持原生*/,
            hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
            classname: "" /*自定义class*/,
            message: "brandMessage" /*校验提示语*/,
            disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
            placeholder: "" /*提示语*/,
            category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
            check: true /*是否校验*/,
            iconChekc: false /*是否展示icon*/,
            customParameters: "input" /*对应api的参数名称*/,
          },

          {
            // 时间选选择器
            id: "dateSelection",
            span: 12,
            assemblyname: "",
            label: "useCommonAll.birthday",
            value: "",
            type: "date",
            hidelabels: true,
            classname: "",
            message: "brandMessage",
            disabled: false,
            placeholder: "Please select",
            category: 5,
            check: true,
            format: "yyyy-MM-dd",
            customParameters: "dateSelection",
            formStatus: true,
          },
          {
            // 时间选选择器
            id: "dateSelection",
            span: 12,
            assemblyname: "",
            label: "useCommonAll.entryTime",
            value: "",
            type: "date",
            hidelabels: true,
            classname: "",
            message: "brandMessage",
            disabled: false,
            placeholder: "Please select",
            category: 5,
            check: true,
            format: "yyyy-MM-dd",
            customParameters: "dateSelection",
            formStatus: true,
          },
        ],
      },
      formObj1: {
        title: 'useCommonAll.position'/*表单标题*/,

        formDisabled: false,
        formproperties: {
          inline: true,
        },
        formData: [
          {
            // 多选框组
            id: "Checkbox",
            span: 24,
            assemblyname: "多选框组",
            label: "useCommonAll.position",
            value: 1,
            type: "",
            hidelabels: true,
            classname: "",
            message: "brandMessage",
            placeholder: "Please select",
            category: 2,
            source: false,
            check: true,
            layoutmode: 0,
            formStatus: true,
            options: [
              { value: 1, label: "useCommonAll.receptionStaff", disabled: false },
              {
                value: 2,
                label: "useCommonAll.restaurantStaff",
              },
              {
                value: 3,
                label: "useCommonAll.coach",
              },
              {
                value: 4,
                label: "useCommonAll.finance",
              },
              {
                value: 5,
                label: "useCommonAll.supervisor",
              },
              {
                value: 6,
                label: "useCommonAll.administrator",
              },
            ],
            customParameters: "Checkbox",
          },
        ],
      },
      treeProps:{
      label:(data,node)=>this.customLabel(data,node)
    },
    };
  },
  methods: {
    ChangeSubmit(data, obj) {
      // console.debug(data, obj);
      this.obj = obj;
      console.log(data, obj);
    },
    ChangeSubmit1(data, obj) {
      // console.debug(data, obj);
      this.obj = obj;
      console.log(data, obj);
    },
    ChangeSel(data) {
      console.log(data);
      switch (data.value) {
        case 1:
          this.roleKeys = [1, 2, 3, 4, 9, 10];
          this.roleKeyString = "1,2,3,4,9,10";
          this.$refs.tree.setCheckedKeys([1, 2, 3, 4, 9, 10]);
          break;
        case 2:
          this.roleKeys = [];
          this.roleKeyString = "";
          this.$refs.tree.setCheckedKeys([]);

          break;
        case 3:
          this.roleKeys = [4, 9, 10];
          this.roleKeyString = "4,9,10";
          this.$refs.tree.setCheckedKeys([4, 9, 10]);

          break;
        case 4:
          this.roleKeys = [2,6, 4, 9, 10];
          this.roleKeyString = "6,4,9,10";
          this.$refs.tree.setCheckedKeys([2,6, 4, 9, 10]);

          break;
        case 5:
          this.roleKeys = [1, 3, 4, 5, 7, 8, 9, 10];
          this.roleKeyString = "1,3,4,5,7,8,9,10";
          this.$refs.tree.setCheckedKeys([1, 3, 4, 5, 7, 8, 9, 10,11]);

          break;
        case 6:
          this.roleKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
          this.roleKeyString = "1,2,3,4,5,6,7,8,9,10";
          this.$refs.tree.setCheckedKeys([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

          break;

        default:
          break;
      }
    },
    resetForm() {
      console.debug("重置");
    },
    onSubmitFn() {
      let p1 = this.$refs.basicInfo.validateFormPromis("dynamicValidateForm");
      let p2 = this.$refs.accountInfo.validateFormPromis("dynamicValidateForm");
      Promise.all([p1, p2])
        .then((result) => {
          const form1 = this.getStoreFormValue(this.formObj.formData);
          const form2 = this.getStoreFormValue(this.formObj2.formData);

          console.log(form1, form2, "form");
        })
        .catch((e) => console.log(e));
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "png";
      console.log(isJPG, "isJPG");
      const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error("上传头像图片只能是 JPG 格式!");
      // }
      // if (!isLt2M) {
      //   this.$message.error("上传头像图片大小不能超过 2MB!");
      // }
      // return isJPG && isLt2M;
    },
    customLabel(data){
      return this.$t(data.label)
    }
  },
};
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
