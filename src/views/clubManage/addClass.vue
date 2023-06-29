<template>
  <div class="Form" id="Form">
    <!--表单组件-->
    <div class="mrb_20">
      <Form
        ref="basicInfo"
        :data="formObj"
        :ChangeSubmit="ChangeSubmit"
        :reset="resetForm"
        :Change="computedChange"
      />
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
import Form from "@/componentsHK/public/Form";
import selectOption from "@/views/global-data/selectOption";
import { window_open } from "@/utils/index";

export default {
  name: "openAppoint",
  mixins: [],
  components: {
    Form,
  },
  data() {
    return {
      submitObj: {},
      obj: {},
      query: {},
      formObj: {
        title: "useCommonAll.courseInformation" /*表单标题*/,

        formDisabled: false,
        formproperties: {
          inline: true,
        },
        formData: [
          {
            // 下拉框
            id: "select",
            span: 12,
            assemblyname: "下拉框",
            label: "useCommonAll.projectName",
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
            customParameters: "projectName",
          },
          {
            // 单行文本框
            id: "input",
            span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: "input",
            label: "useCommonAll.courseName",
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
            customParameters: "courseName" /*对应api的参数名称*/,
          },
          {
            // 下拉框
            id: "select",
            span: 12,
            assemblyname: "下拉框",
            label: "useCommonAll.projectType",
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
            options: selectOption.classType,
            customParameters: "projectType",
          },

          {
            // 单行文本框
            id: "input",
            span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: "input",
            label: "useCommonAll.price",
            value: "" /*控件value / 默认值*/,
            type: "number" /*控件类型 支持原生*/,
            hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
            classname: "" /*自定义class*/,
            message: "brandMessage" /*校验提示语*/,
            disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
            placeholder: "brandMessage" /*提示语*/,
            category: 14 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
            check: true /*是否校验*/,
            iconChekc: false /*是否展示icon*/,
            customParameters: "price" /*对应api的参数名称*/,
            min: 1,
          },
          {
            // 单行文本框
            id: "input",
            span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: "input",
            label: "useCommonAll.number",
            value: "" /*控件value / 默认值*/,
            type: "number" /*控件类型 支持原生*/,
            hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
            classname: "" /*自定义class*/,
            message: "brandMessage" /*校验提示语*/,
            disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
            placeholder: "" /*提示语*/,
            category: 14 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
            check: true /*是否校验*/,
            min: 1,
            unit: " ",
            iconChekc: false /*是否展示icon*/,
            customParameters: "number" /*对应api的参数名称*/,
          },
          {
            // 单行文本框
            id: "input",
            span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: "input",
            label: "useCommonAll.discount",
            unit: "%",
            value: "" /*控件value / 默认值*/,
            type: "number" /*控件类型 支持原生*/,
            hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
            classname: "" /*自定义class*/,
            message: "brandMessage" /*校验提示语*/,
            disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
            placeholder: "" /*提示语*/,
            category: 14 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
            check: false /*是否校验*/,
            iconChekc: false /*是否展示icon*/,
            customParameters: "discount" /*对应api的参数名称*/,
            min: 1,
            max: 100,
          },
          {
            // 单行文本框
            id: "input",
            span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: "input",
            label: "useCommonAll.discountAmount",
            value: "" /*控件value / 默认值*/,
            type: "number" /*控件类型 支持原生*/,
            hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
            classname: "" /*自定义class*/,
            message: "brandMessage" /*校验提示语*/,
            disabled: true /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
            placeholder: "" /*提示语*/,
            category:
              "14" /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
            check: false /*是否校验*/,
            iconChekc: false /*是否展示icon*/,
            customParameters: "discountAmount" /*对应api的参数名称*/,
          },
          {
            // 单行文本框
            id: "input",
            span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: "input",
            label: "useCommonAll.totalAmount",
            value: "" /*控件value / 默认值*/,
            type: "number" /*控件类型 支持原生*/,
            hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
            classname: "" /*自定义class*/,
            message: "brandMessage" /*校验提示语*/,
            disabled: true /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
            placeholder: "" /*提示语*/,
            category: 14 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
            check: false /*是否校验*/,
            iconChekc: false /*是否展示icon*/,
            customParameters: "totalAmount" /*对应api的参数名称*/,
          },
        ],
      },
    };
  },
  created() {
    const { type, data } = this.$route.query;
    // this.query = { ...this.query, type, data: JSON.parse(data) };
    this.query = { ...this.query, type };
    console.log(this.query, "this.query");
    if (this.query.type === "view") {
      this.formObj.formDisabled = true;
      this.formObj.pageTitleSlot.visible = true;
    }
    if (this.query.type === "add") {
      this.formObj.pageTitleSlot.visible = false;
      this.$set(this.formObj, "pageTitleSlot", false);
      console.log(9999);
    } else if (type === "edit") {
      this.formObj.formData[0].disabled = true;
      this.formObj.formData[1].disabled = true;
    }
  },

  methods: {
    updateValue(updateParam, updateData, formObj) {
      updateParam.forEach((i, index) => {
        const temp = formObj.formData.find(
          (item) => item.customParameters === i
        );
        temp.value = updateData[index];
      });
    },
    computedChange(data) {
      const priceValue = this.formObj.formData.find(
        i => i.customParameters === "price"
      )
      const numberValue = this.formObj.formData.find(
        (i) => i.customParameters == "number"
      );
      const discountValue = this.formObj.formData.find(
        (i) => i.customParameters == "discount"
      );
      const totalAmount = priceValue.value * numberValue.value * ((1 - discountValue.value/100));
      const discountAmount = priceValue.value * numberValue.value;
      console.log(priceValue.value,totalAmount,discountAmount);
      switch (data.customParameters) {
        case "price":
          this.updateValue(
            ["discountAmount", "totalAmount"],
            [discountAmount, totalAmount],
            this.formObj
          );
          break;
        case "number":
          this.updateValue(
            ["discountAmount", "totalAmount"],
            [discountAmount, totalAmount],
            this.formObj
          );
          break;
        case "discount":
          this.updateValue(
            ["discountAmount", "totalAmount"],
            [discountAmount, totalAmount],
            this.formObj
          );
          break;

        default:
          break;
      }
    },
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
    delItem(formType, key) {
      const tempIndex = formType.formData.findIndex(
        (i) => i.customParameters === key
      );
      if (~tempIndex) {
        formType.formData.splice(tempIndex, 1);
      }
    },

    ChangeSubmit(data, obj) {
      // console.debug(data, obj);
      this.obj = obj;
    },

    // submitFormBasic(data, status, obj) {
    //   this.submitObj={...obj,...this.submitObj}
    // },
    // submitFormAccount(data, status, obj) {
    //   this.submitObj={...obj,...this.submitObj}

    // },
    resetForm() {
      console.debug("重置");
    },
    getStoreFormValue(key) {
      let tempdata;
      this.$store.commit("keyValue", {
        data: key,
        Callback: (response) => {
          tempdata = response;
        },
      });

      return tempdata;
    },
    onSubmitFn() {
      let p1 = this.$refs.basicInfo.validateFormPromis("dynamicValidateForm");
      Promise.all([p1])
        .then((result) => {
          const form1 = this.getStoreFormValue(this.formObj.formData);
          this.$router.push({ path: "/clubManage/class" });
          console.log(form1, "form");
          this.$message.success(this.$t('useCommonAll.operatorSuciscess'))
          console.log(form1, "form");
        })
        .catch((e) => console.log(e));
    },
  },
  computed: {
    ...mapState({
      // formObj: (state) => state.form.formObj,
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
  text-align: right;
  padding: 15px;
  background-color: #fff;
  margin-bottom: 10px;
  /* display: flex;
        flex-direction: column-reverse; */
}
</style>
