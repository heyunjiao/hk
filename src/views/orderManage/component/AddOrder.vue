<template>
  <div class="Form" id="Form">
    <!--表单组件-->
    <div>
      <Form
        ref="basicInfo"
        :data="formObj"
        :ChangeSubmit="ChangeSubmit"
        :reset="resetForm"
      />
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
      query:{},
    
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
