<template>
  <div class="Form" id="Form">
    <!--表单组件-->
    <div class="mrb_20">
      <Form
        ref="basicInfo"
        :data="formObj"
        :ChangeSubmit="ChangeSubmit"
        :reset="resetForm"
      />
    </div>
    <div class="mrb_20">
      <Form
        ref="basicInfo"
        :data="formObj3"
        :ChangeSubmit="ChangeSubmit"
        :reset="resetForm"
      />
    </div>
    <div class="mrb_20">
      <Form
        ref="basicInfo"
        :data="formObj4"
        :ChangeSubmit="ChangeSubmit"
        :reset="resetForm"
      />
    </div>

    <div class="mrb_20">
      <Form
        ref="accountInfo"
        :data="formObj2"
        :Change="cardSelectFn"
        :ChangeSubmit="ChangeSubmit"
        :reset="resetForm"
      />
    </div>
    <div class="mrb_20">
      <Form ref="accountInfo" :data="formObj5" :reset="resetForm" />
    </div>

    <div class="btn-line" v-if=" !this.formObj.formDisabled">
      <el-button @click="onSubmitFn" class="Search-btn"
        >{{ $t("page.demo.preservation") }}
      </el-button>
    </div>
  </div>
</template>

<script>
import "@/config/ele/elementForm";
import "@/config/ele/eleLayout";
import { mapState } from "vuex";
import Form from "@/componentsHK/public/Form";
import mixin from "./mixin";
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
      query:{},
      activeBtnCfg: { // switch开关
                "id": 'switch',
                "span": 12,
                "assemblyname": "",
                "label": "是否激活",
                "value": "",
                "hidelabels": true,
                "classname": "",
                "message": "brandMessage",
                "disabled": false,
                "placeholder": "Please select",
                "category": 6,
                "check": true,
                "activecolor": "",
                "inactivecolor": "",
                "customParameters": "active",
                "formStatus": true,
                activecolor:''
              },
    };
  },
  created() {
    const {type,data}=this.$route.query
    this.query={...this.query,type,data:JSON.parse(data)}
    if(this.query.type==='view'){
    this.formObj.formDisabled=true
    this.formObj4.formDisabled=true
    this.formObj2.formDisabled=true
    this.formObj3.formDisabled=true
    this.formObj5.formDisabled=true
    } if(this.query.type==='add'){
      delItem(this.formObj,'active')
    }else{
      this.formObj.formData[1]=this.activeBtnCfg
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
    delItem(formType,key) {
      const tempIndex = formType.formData.findIndex(
        (i) => i.customParameters === key
      );
      if (~tempIndex) {
        formType.formData.splice(tempIndex, 1);
      }
    },

    cardSelectFn(item) {
      const openMasteCard = {
        // 下拉框
        id: "select",
        span: 12,
        assemblyname: "下拉框",
        label: "member.chooseMasterCard",
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
        check: true,
        multiplechoice: false,
        searchable: false,
        formStatus: true,
        customParameters: "chooseMasterCard",
        options: [
          { value: 4, label: "123456" },
          {
            value: 5,
            label: "99999999",
          },
          {
            value: 6,
            label: "8988888888",
          },
        ],
      };
      const MembershFipFee = {
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
        customParameters: "MembershFipFee" /*对应api的参数名称*/,
      };

      const MonthlyFees = {
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
        customParameters: "MonthlyFees" /*对应api的参数名称*/,
      };

      this.delItem(this.formObj2,"MembershFipFee");
      this.delItem(this.formObj2,"MonthlyFees");

      // 选择附属卡 要求选择主卡
      if (item.value === 2 && item.customParameters === "masterCard") {
        this.formObj2.formData.splice(1, 0, openMasteCard);
      } else if (item.value === 1 && item.customParameters === "masterCard") {
        // 选择主卡
        this.formObj2.formData.push(MembershFipFee);
        this.formObj2.formData.push(MonthlyFees);
      } else if (item.value === 3 && item.customParameters === "masterCard") {
        // 选择青少年卡
        this.formObj2.formData.push(MembershFipFee);
        this.delItem(this.formObj2,"MonthlyFees");
        this.delItem(this.formObj2,"chooseMasterCard");
      } else if (item.customParameters === "masterCard") {
        this.delItem(this.formObj2,"chooseMasterCard");
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
      let p2 = this.$refs.accountInfo.validateFormPromis("dynamicValidateForm");
      Promise.all([p1, p2])
        .then((result) => {
          const form1 = this.getStoreFormValue(this.formObj.formData);
          const form2 = this.getStoreFormValue(this.formObj2.formData);

          console.log(form1, form2, "form");
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
  /* display: flex;
    flex-direction: column-reverse; */
}
</style>
