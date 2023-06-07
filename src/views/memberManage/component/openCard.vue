<template>
  <div class="Form" id="Form">
    <!--表单组件-->
    <div class="mrb_20">
      <Form
        ref="basicInfo"
        :data="formObj"
        :ChangeSubmit="ChangeSubmit"
        :submit="submitForm"
        :reset="resetForm"
      />

      <!--
        data： 数据源
        submit： 确认按钮事件
        reset： 清空按钮事件
        resetText：重置按钮文字内容
        submitText：提交按钮文字内容
        -->
    </div>

    <div class="mrb_20">
      <Form
        :data="formObj2"
        :ChangeSubmit="ChangeSubmit"
        :submit="submitAll"
        :reset="resetForm"
      />
    </div>

    <div class="btn-line">
      <el-button class="Search-btn"
        >{{ $t(submitText || "Submit") }}
      </el-button>
    </div>
  </div>
</template>

<script>
import "@/config/ele/elementForm";
import "@/config/ele/eleLayout";
import { mapState } from "vuex";
import Form from "@/componentsHK/public/Form";

export default {
  name: "demoForm",
  components: {
    Form,
  },
  data() {
    return {
      obj: {},
      formObj: {
        title: "member.basicInfo" /*表单标题*/,
        formproperties: {
          inline: true,
          // "width": "100%",  /*表单宽度*/
          // "labelalignment": "top",  /*标题展示位置 top， left， righr*/
          // "formlabelwidth": "120px",  /*标题宽度*/
          // "classname": "",  /*自定义class*/
        },
        formData: [
          {
            // 单行文本框
            id: "input",
            span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: "input",
            label: "member.username",
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
            label: "member.sex",
            value: "",
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
            options: [
              { value: 1, label: "member.male" },
              {
                value: 2,
                label: "member.female",
              },
            ],
            customParameters: "select",
          },
          {
            // 单行文本框
            id: "input",
            span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: "input",
            label: "member.contactInfo",
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
            // 时间选选择器
            id: "dateSelection",
            span: 12,
            assemblyname: "",
            label: "member.birthday",
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
            // 单行文本框
            id: "input",
            span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: "input",
            label: "member.allergy",
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
            label: "member.preferred",
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
            // 多行文本框
            id: "textarea",
            span: 24,
            assemblyname: "多行文本框",
            label: "member.address",
            value: "member.address",
            type: "textarea",
            hidelabels: true,
            classname: "",
            message: "brandMessage",
            disabled: false,
            placeholder: "brandMessage",
            category: 0,
            check: true,
            iconChekc: false,
            customParameters: "textarea",
            formStatus: true,
          },
          {
            // 多行文本框
            id: "textarea",
            span: 24,
            assemblyname: "多行文本框",
            label: "member.remark",
            value: "",
            type: "textarea",
            hidelabels: true,
            classname: "",
            message: "brandMessage",
            disabled: false,
            placeholder: "brandMessage",
            category: 0,
            check: true,
            iconChekc: false,
            customParameters: "textarea",
            formStatus: true,
          },
        ],
      },

      formObj2: {
        title: "member.accountInfo" /*表单标题*/,
        formproperties: {
          inline: true,
          // "width": "100%",  /*表单宽度*/
          // "labelalignment": "top",  /*标题展示位置 top， left， righr*/
          // "formlabelwidth": "120px",  /*标题宽度*/
          // "classname": "",  /*自定义class*/
        },
        formData: [
          {
            // 下拉框
            id: "select",
            span: 12,
            assemblyname: "下拉框",
            label: "member.cardType",
            value: "",
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
            options: [
              { value: 1, label: "member.masterCard" },
              {
                value: 2,
                label: "member.secondaryCard",
              },
              {
                value: 3,
                label: "member.youngCard",
              },
            ],
            customParameters: "select",
          },
          {
            // 多选框组
            id: "Checkbox",
            span: 24,
            assemblyname: "多选框组",
            label: "permission.roles",
            value: [],
            type: "",
            hidelabels: true,
            classname: "",
            message: "brandMessage",
            placeholder: "Please select",
            category: 3,
            source: false,
            check: false,
            layoutmode: 0,
            formStatus: true,
            options: [
              { value: 1, label: "预约课程", disabled: false },
              {
                value: 2,
                label: "店内消费",
                disabled: true,
              },
              {
                value: 3,
                label: "线上消费",
              },
              {
                value: 4,
                label: "运动项目",
              },
              {
                value: 5,
                label: "会籍转让",
              },
            ],
            customParameters: "Checkbox",
          },
          {
            // 单行文本框
            id: "input",
            span: 6 /*表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: "input",
            label: "member.MembershFipFee",
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
            span: 6 /*表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: "input",
            label: "member.annualFee",
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
            span: 6 /*表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: "input",
            label: "member.MonthlyFees",
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
        ],
      },
    };
  },
  created() {
    // this.$message({message: 'success', type: "warning"});
    // this.$message({message: 'success', type: "info"});
  },
  methods: {
    saveAndAdd() {
      console.debug(this.tableObj.tableData, this.obj);
    },
    operationSubmit(v, index) {
      this.tableObj.tableData.splice(index, 1);
    },
    HandleSizeChange(val) {
      console.debug(val);
    },
    handleSelectionChangeCom(val) {
      console.debug(val);
    },
    HandleCurrentChange(val) {
      console.debug(val);
    },
    ChangeSubmit(data, obj) {
      // console.debug(data, obj);
      this.obj = obj;
    },
    submitAll() {
      console.log(this.$refs.basicInfo, 9999);
    },
    submitForm(data, status, obj) {
      this.$message({ message: "success", type: "success" });

      console.debug(data, obj);
      let type = "";
      let working = "";
      data[3].options.forEach((f) => {
        if (f.value == obj.type) {
          type = f.label;
        }
      });
      data[4].options.forEach((f) => {
        if (f.value == obj.type) {
          working = f.label;
        }
      });
      this.tableObj.tableData.push({
        name: obj.name,
        code: obj.code,
        power: obj.power,
        type,
        working,
      });
      /*TODO 表单数据处理方法
       *  data：根据组件返回的数据一一处理，如data[0].value 为第一个控件的value
       *  obj：设置customParameters参数调用返回提交表单参数*/
    },
    resetForm() {
      console.debug("重置");
    },
  },
  computed: {
    ...mapState({
      // formObj: state => state.form.formObj,
    }),
  },
};
</script>

<style scoped>
.Form {
  width: 100%;
  height: 100%;
  /* background: #fff; */
  border-radius: 15px;
  overflow: auto;
}
</style>

<style scoped>
/deep/ .el-input__inner {
  height: 32px !important;
  border-radius: 4px !important;
  color: #000;
  /* opacity: 0.49 !important; */
  border: 1px solid #ccc !important;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100% !important;
}

.btn-line {
  padding: 15px;
  background-color: #fff;
  /* display: flex;
    flex-direction: column-reverse; */
}
</style>
