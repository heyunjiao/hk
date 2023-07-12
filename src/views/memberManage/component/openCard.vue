<template>
  <div class="Form open-card" id="Form">
    <!--表单组件-->
    <div class="mrb_20">
      <Form
        ref="basicInfo"
        :data="formObj"
        :ChangeSubmit="ChangeSubmit"
        :reset="resetForm"
        :realtimeform="realtimeform1"
      >
      </Form>
    </div>
    <div class="mrb_20">
      <Form
        ref="personInfo"
        :data="formObj3"
        :ChangeSubmit="ChangeSubmit"
        :reset="resetForm"
      />
    </div>
    <div class="mrb_20">
      <Form
        ref="secretaryInfo"
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
      <Form ref="otherInfo" :data="formObj5" :reset="resetForm" />
    </div>

    <div class="btn-line" v-if="!this.formObj.formDisabled">
      <el-checkbox v-model="confirmchecked"
        ><span class="whrite-red">{{
          $t("useCommonAll.checkInfo")
        }}</span></el-checkbox
      >
      <el-button @click="onSubmitFn" type="primary" :disabled="!confirmchecked"
        >{{
          query.type == "add"
            ? $t("useCommonAll.createMembership")
            : $t("useCommonAll.updateMembership")
        }}
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
import selectOption from "@/views/global-data/selectOption";

export default {
  name: "demoForm",
  mixins: [mixin],
  components: {
    Form,
  },
  data() {
    return {
      imageUrl: "",
      confirmchecked: false,
      submitObj: {},
      obj: {},
      query: {},
    };
  },
  watch: {
    // query: {
    //   handler(newVal, oldVal) {
    //     console.log(`新的值: ${newVal}`);
    //     console.log(`旧的值: ${oldVal}`);
    //   },
    //   immediate: true,
    // },
  },
  created() {
    const { type, data } = this.$route.query;
    if (data) {
      this.query = { ...this.query, type, data: JSON.parse(data) };
    } else {
      this.query = { ...this.query, type };
      console.log(this.query, "created");
    }

    if (this.query.type === "view") {
      this.formObj.formDisabled = true;
      this.formObj4.formDisabled = true;
      this.formObj2.formDisabled = true;
      this.formObj3.formDisabled = true;
      this.formObj5.formDisabled = true;
      this.formObj6.formDisabled = true;
      this.formObj7.formDisabled = true;
    }
    if (this.query.type === "add") {
      this.delItem(this.formObj, "active");
    } else {
      this.formObj.formData[0].disabled = true;
      this.formObj2.formData[0].disabled = true;
      if (!this.query.data.memberstatus) {
        this.formObj.pageTitleSlot = {
          visible: true,
          text: "useCommonAll.isActivate",
          fn: this.activeFn,
        };
      }
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
      console.log(formType.formData, "formType.formData");
      const tempIndex = formType.formData.findIndex(
        (i) => i.customParameters === key
      );
      if (~tempIndex) {
        formType.formData.splice(tempIndex, 1);
      }
    },

    cardSelectFn(item) {
      console.log(item, "item");
      const openMasteCard = {
        // 下拉框
        id: "select",
        span: 12,
        assemblyname: "下拉框",
        label: "member.chooseMasterCard",
        value: "1",
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
        options: selectOption.cardType,
      };
      const MembershFipFee = {
        // 单行文本框
        id: "input",
        span: 8 /*表单占据控件，容器分为 24份，需要整数*/,
        assemblyname: "input",
        label: "member.MembershFipFee",
        value: "2" /*控件value / 默认值*/,
        type: "" /*控件类型 支持原生*/,
        hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
        classname: "" /*自定义class*/,
        message: "brandMessage" /*校验提示语*/,
        disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
        placeholder: "brandMessage" /*提示语*/,
        category: 14 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
        check: true /*是否校验*/,
        iconChekc: false /*是否展示icon*/,
        customParameters: "MembershFipFee" /*对应api的参数名称*/,
      };

      const MonthlyFees = {
        // 单行文本框
        id: "input",
        span: 8 /*表单占据控件，容器分为 24份，需要整数*/,
        assemblyname: "input",
        label: "member.MonthlyFees",
        value: "3" /*控件value / 默认值*/,
        type: "" /*控件类型 支持原生*/,
        hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
        classname: "" /*自定义class*/,
        message: "brandMessage" /*校验提示语*/,
        disabled: false /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
        placeholder: "brandMessage" /*提示语*/,
        category: 14 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
        check: true /*是否校验*/,
        iconChekc: false /*是否展示icon*/,
        customParameters: "MonthlyFees" /*对应api的参数名称*/,
      };

      // 选择附属卡 要求选择主卡
      if (item.value === 2 && item.customParameters === "memberCardID") {
        this.delItem(this.formObj2, "MembershFipFee");
        this.delItem(this.formObj2, "MonthlyFees");
        this.formObj2.formData.splice(1, 0, openMasteCard);
      } else if (
        (item.value === 1 || item.value === 4 || item.value === 8) &&
        item.customParameters === "memberCardID"
      ) {
        this.delItem(this.formObj2, "MembershFipFee");
        this.delItem(this.formObj2, "MonthlyFees");
        // 选择主卡
        this.formObj2.formData.push(MembershFipFee);
        this.formObj2.formData.push(MonthlyFees);
        this.delItem(this.formObj2, "chooseMasterCard");
      } else if (
        (item.value === 5 || item.value === 6 || item.value === 7) &&
        item.customParameters === "memberCardID"
      ) {
        this.delItem(this.formObj2, "MembershFipFee");
        this.delItem(this.formObj2, "MonthlyFees");
        // 选择青少年卡
        this.formObj2.formData.push(MembershFipFee);
        this.delItem(this.formObj2, "MonthlyFees");
        this.delItem(this.formObj2, "chooseMasterCard");
      } else if (item.customParameters === "memberCardID") {
        this.delItem(this.formObj2, "MembershFipFee");
        this.delItem(this.formObj2, "MonthlyFees");
        this.delItem(this.formObj2, "chooseMasterCard");
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
      const form2 = this.getStoreFormValue(this.formObj2.formData);
      console.log(form2,888);
      let p1 = this.$refs.basicInfo.validateFormPromis("dynamicValidateForm");
      let p2 = this.$refs.accountInfo.validateFormPromis("dynamicValidateForm");
      let p3 = this.$refs.personInfo.validateFormPromis("dynamicValidateForm");
      let p4 = this.$refs.secretaryInfo.validateFormPromis(
        "dynamicValidateForm"
      );



      Promise.all([p1, p2, p3, p4])
        .then((result) => {
          const form1=this.formMatForm1()
          const form2 = this.getStoreFormValue(this.formObj2.formData);
          const form3 = this.getStoreFormValue(this.formObj3.formData);
          const form4 = this.getStoreFormValue(this.formObj4.formData);
          const form5 = this.getStoreFormValue(this.formObj5.formData);
          
          console.log( form2, form3, form4, form5, "form");
        })
        .catch((e) => console.log(e));
    },
    formMatForm1(){
      let form1 = this.getStoreFormValue(this.formObj.formData); // 称谓
          const title = this.formObj.formData.find(
            (i) => i.customParameters == "name"
          ).inputSelectValue; // 身份证类型
          const credentialsType = this.formObj.formData.find(
            (i) => i.customParameters == "credentialsNum"
          ).inputSelectValue;

          const areaCode = this.formObj.formData.find(
            (i) => i.customParameters == "contactPhone"
          ).countryCode;
          form1 = { ...form1, title, credentialsType, areaCode };

          return form1
    },
    
    activeFn() {
      this.$confirm(
        this.$t("useCommonAll.isActivate"),
        this.$t("useCommonAll.prompt"),
        {
          confirmButtonText: this.$t("useCommonAll.ok"),
          cancelButtonText: this.$t("useCommonAll.cancel"),
          type: "warning",
        }
      )
        .then(() => {
          // v.memberstatus=1
          this.$message({
            type: "success",
            message: this.$t("useCommonAll.operatorSuciscess"),
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: this.$t("useCommonAll.canceledOperator"),
          });
        });
    },
  },
  computed: {
    // ...mapState({
    //   formObj: (state) => state.form.formObj,
    // }),
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #fff;
  margin-bottom: 10px;
  /* display: flex;
    flex-direction: column-reverse; */
}
.label-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 10px;
}
</style>

<style lang="scss">
.open-card {
  .el-col.el-col-24 {
    height: auto !important;
    min-height: 60px !important;
  }
}
</style>
