<template>
  <div class="Form add-order" id="Form">
    <!--表单组件-->
    <div>
      <Form
        ref="basicInfo"
        :data="formObj"
        :ChangeSubmit="ChangeSubmit"
        :reset="resetForm"
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
import mixin from "./mixin.js";
export default {
  name: "demoForm",
  mixins: [mixin],
  components: {
    Form,
  },
  data() {
    return {
      submitObj: {},
      obj: {},
      query: {},
    };
  },
  created() {
    const { type, data } = this.$route.query;
    this.query = { ...this.query, type, data: JSON.parse(data) };
    if (this.query.type === "view") {
      this.formObj.formDisabled = true;
      const arr = [
        {
          // 单行文本框
          id: "input",
          span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
          assemblyname: "input",
          label: "useCommonAll.operator",
          value: "" /*控件value / 默认值*/,
          type: "" /*控件类型 支持原生*/,
          hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
          classname: "" /*自定义class*/,
          message: "brandMessage" /*校验提示语*/,
          disabled: true /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
          placeholder: "brandMessage" /*提示语*/,
          category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
          check: false /*是否校验*/,
          iconChekc: false /*是否展示icon*/,
          customParameters: "operator" /*对应api的参数名称*/,
        },
        {
          // 单行文本框
          id: "input",
          span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
          assemblyname: "input",
          label: "useCommonAll.creatTime",
          value: "" /*控件value / 默认值*/,
          type: "" /*控件类型 支持原生*/,
          hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
          classname: "" /*自定义class*/,
          message: "brandMessage" /*校验提示语*/,
          disabled: true /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
          placeholder: "brandMessage" /*提示语*/,
          category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
          check: false /*是否校验*/,
          iconChekc: false /*是否展示icon*/,
          customParameters: "creatTime" /*对应api的参数名称*/,
        },
      ];
      this.formObj.formData = this.formObj.formData.concat(arr);
    }
    if (this.query.type === "add") {
      delItem(this.formObj, "active");
    } else {
    }
    console.log(this.query);
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
          this.$message({
            type: 'success',
            message:this.$t('useCommonAll.operatorSuciscess') 
          });
          this.$router.push({ path: "/orderManage/index" });
          console.log(form1, "form");
        })
        .catch((e) => console.log(e));
    },
  },
  computed: {
    ...mapState({
      formObj: (state) => state.form.formObj,
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

<style lang="scss">
.add-order {
  .el-col {
    height: auto !important;
    min-height: 60px;
  }
}
</style>
