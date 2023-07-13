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
import {
  AddCustomer,
  GetCustomer,
  UpdateCustomer,
  GetMemberCardList,
  ActivateCustomer,
  GetMainMemberList,
} from "@/api/member";
import selectOption from "@/views/global-data/selectOption";

export default {
  name: "demoForm",
  mixins: [mixin],
  components: {
    Form,
  },
  data() {
    return {
      status: "",
      imageUrl: "",
      confirmchecked: false,
      submitObj: {},
      obj: {},
      query: {},
      cardTypeList: [],
      mainCardList: [],
      mainParam: {
        pageNum: 1,
        pageSize: 1000,
        keywords: "88",
      },
      openMasteCard: {
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
        disabled: this.$route.query.id?true:false,
        placeholder: "Please select",
        category: "searchSelect",
        source: true,
        apiUrl: "",
        key: "",
        val: "",
        check: true,
        multiplechoice: false,
        searchable: false,
        formStatus: true,
        customParameters: "mainCardID",
        options: this.mainCardList,
        remoteMethod: this.getMainCardList,
        loading: false,
      },
    };
  },
  watch: {},
  created() {
    this.getMainCardList();

    this.query = this.$route.query;
    this.getCradList();
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
      this.formObj.formData[1].disabled = false;
      this.formObj2.formData[0].disabled = false;
    } else {
      this.formObj.formData[1].disabled = true;
      this.formObj2.formData[0].disabled = true;

      
    }
    console.log(this.query);
  },
  methods: {
    async getMainCardList(val) {
      console.log(val, 8888);
      if (val) {
        this.mainParam.keywords = val;
        const res = await GetMainMemberList(this.mainParam);
        res.result.dataList.forEach((i) => {
          i["label"] = i.title + i.name + i.number;
          i["value"] = i.number;
        });
        this.$set(this.openMasteCard, "options", res.result.dataList);
        this.mainCardList = res.result.dataList;
      }
    },
    getCradList() {
      GetMemberCardList().then((res) => {
        res.result.forEach((i) => {
          i["label"] = i.title;
          i["value"] = i.id;
          i["disabled"] = false;
        });
        this.cardTypeList = res.result;
        if (this.query.id) {
          this.getDetailInfo();
        }
      });
    },
    async getDetailInfo() {
      const res = await GetCustomer(this.query.id);
      this.status = res.result.status;
      if (!this.status) {
        this.formObj.pageTitleSlot = {
          visible: true,
          text: "useCommonAll.isActivate",
          fn: this.activeFn,
        };
      }
      this.echoFn(this.formObj, res.result);
      // 称谓
      this.formObj.formData.find(
        (i) => i.customParameters == "name"
      ).inputSelectValue = res.result.title;
      this.formObj.formData.find(
        (i) => i.customParameters == "credentialsNum"
      ).inputSelectValue = res.result.credentialsType + "";
      this.formObj.formData.find(
        (i) => i.customParameters == "contactPhone"
      ).countryCode = Number(res.result.areaCode);
      this.echoFn(this.formObj2, {
        ...res.result.memberCardInfo,
        memberCardID: res.result.memberCardID,
        sendType: [res.result.memberCardInfo.sendType],
      });
      this.cardSelectFn({
        value: res.result.memberCardID,
        options: this.cardTypeList,
        customParameters: "memberCardID",
      });
      if (res.result.mainCardID) {
        this.getMainCardList(res.result.mainCardID);
        this.formObj2.formData.find(
          (i) => i.customParameters == "mainCardID"
        ).value = res.result.mainCardID;
      }

      this.echoFn(this.formObj3, res.result);
      this.echoFn(this.formObj4, res.result);
      this.echoFn(this.formObj5, res.result);
    },

    delItem(formType, key) {
      // console.log(formType.formData, "formType.formData");
      const tempIndex = formType.formData.findIndex(
        (i) => i.customParameters === key
      );
      if (~tempIndex) {
        formType.formData.splice(tempIndex, 1);
      }
    },

    cardSelectFn(val) {
      console.log(val, "val11222");
      const item = val.options.find((i) => i.id === val.value);
      // 设置权限类型值
      const authvalue = this.formObj2.formData.find(
        (i) => i.customParameters == "auth"
      );
      console.log(authvalue, "authvalue");
      authvalue.value = item.auth ? item.auth.split(",") : [];
      const openMasteCard = this.openMasteCard;

      const entranceFee = {
        // 单行文本框
        id: "input",
        span: 8 /*表单占据控件，容器分为 24份，需要整数*/,
        assemblyname: "input",
        label: "member.MembershFipFee",
        value: item.entranceFee /*控件value / 默认值*/,
        type: "" /*控件类型 支持原生*/,
        hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
        classname: "" /*自定义class*/,
        message: "brandMessage" /*校验提示语*/,
        disabled: true /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
        placeholder: "brandMessage" /*提示语*/,
        category: 14 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
        check: true /*是否校验*/,
        iconChekc: false /*是否展示icon*/,
        customParameters: "entranceFee" /*对应api的参数名称*/,
      };

      const monthlyFee = {
        // 单行文本框
        id: "input",
        span: 8 /*表单占据控件，容器分为 24份，需要整数*/,
        assemblyname: "input",
        label: "member.MonthlyFees",
        value: item.monthlyFee /*控件value / 默认值*/,
        type: "" /*控件类型 支持原生*/,
        hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
        classname: "" /*自定义class*/,
        message: "brandMessage" /*校验提示语*/,
        disabled: true /*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
        placeholder: "brandMessage" /*提示语*/,
        category: 14 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
        check: true /*是否校验*/,
        iconChekc: false /*是否展示icon*/,
        customParameters: "monthlyFee" /*对应api的参数名称*/,
      };

      // 选择附属卡 要求选择主卡
      if (
        item.label == "家庭卡（附属卡）" &&
        val.customParameters === "memberCardID"
      ) {
        this.delItem(this.formObj2, "entranceFee");
        this.delItem(this.formObj2, "monthlyFee");
        this.formObj2.formData.splice(1, 0, openMasteCard);
      } else if (
        (item.label == "家庭卡（全权会籍）" ||
          item.label == "家庭卡（公司/企业会籍）" ||
          item.label == "家庭卡（个人传承会籍）") &&
        val.customParameters === "memberCardID"
      ) {
        this.delItem(this.formObj2, "entranceFee");
        this.delItem(this.formObj2, "monthlyFee");
        // 选择主卡

        this.formObj2.formData.push(entranceFee);
        this.formObj2.formData.push(monthlyFee);
        this.delItem(this.formObj2, "mainCardID");
      } else if (
        (item.label == "青少年卡（全会籍）" ||
          item.label == "青少年卡（指定单项运动会籍）" ||
          item.label == "青少年卡（指定双项运动会籍）") &&
        val.customParameters === "memberCardID"
      ) {
        this.delItem(this.formObj2, "entranceFee");
        this.delItem(this.formObj2, "monthlyFee");
        // 选择青少年卡
        this.formObj2.formData.push(entranceFee);
        this.delItem(this.formObj2, "monthlyFee");
        this.delItem(this.formObj2, "mainCardID");
      } else if (val.customParameters === "memberCardID") {
        this.delItem(this.formObj2, "entranceFee");
        this.delItem(this.formObj2, "monthlyFee");
        this.delItem(this.formObj2, "mainCardID");
      } else if (val.customParameters === "mainCardID") {
        console.log(111);
      }
    },
    ChangeSubmit(data, obj) {
      // console.debug(data, obj);
      this.obj = obj;
    },

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
      let p3 = this.$refs.personInfo.validateFormPromis("dynamicValidateForm");
      let p4 = this.$refs.secretaryInfo.validateFormPromis(
        "dynamicValidateForm"
      );

      Promise.all([p1, p2, p3, p4])
        .then(async (result) => {
          const form1 = this.formMatForm1();
          const form2 = this.formMatForm2();
          const form3 = this.getStoreFormValue(this.formObj3.formData);
          const form4 = this.getStoreFormValue(this.formObj4.formData);
          const form5 = this.getStoreFormValue(this.formObj5.formData);
          const param = { ...form1, ...form2, ...form3, ...form4, ...form5 };
          if (this.query.id) {
            const res = await UpdateCustomer({ ...param, id: this.query.id });
            if (res.code == 200) {
              this.$message({
                type: "success",
                message: this.$t("useCommonAll.operatorSuciscess"),
              });
              this.$router.push({ path: "/memberManage/memberManage" });
            }
          } else {
            const res = await AddCustomer(param);
            if (res.code == 200) {
              this.$message({
                type: "success",
                message: this.$t("useCommonAll.operatorSuciscess"),
              });
              this.$router.push({ path: "/memberManage/memberManage" });
            }
          }
        })
        .catch((e) => console.log(e));
    },
    formMatForm1() {
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

      return form1;
    },

    formMatForm2() {
      let form2 = this.getStoreFormValue(this.formObj2.formData);
      form2 = {
        ...form2,
        auth: form2.auth ? form2.auth.join(",") : "",
        sendType: form2.sendType ? form2.sendType.join(",") : "",
      };

      return form2;
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
        .then(async () => {
          const res = await ActivateCustomer({ customerId: this.query.id });
          this.$message({
            type: "success",
            message: this.$t("useCommonAll.operatorSuciscess"),
          });
          location.reload();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: this.$t("useCommonAll.canceledOperator"),
          });
        });
    },

    echoFn(form, res) {
      form.formData.forEach((i) => {
        if (res[i.customParameters] + "") {
          i.value = res[i.customParameters];
        } else {
          i.value = "";
        }
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
