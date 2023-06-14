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

    <div class="btn-line" v-if="!this.formObj.formDisabled">
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
import selectOption from "@/views/global-data/selectOption";
import {window_open} from '@/utils/index'

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
        title: "预约信息" /*表单标题*/,
        // 插槽的按钮信息
        pageTitleSlot: {
          visible: true,
          text: "查看会员详情",
          fn: () => {
        window_open('','/openCard', { type: "view" ,data:JSON.stringify({a:'1'})},this.$router)

            // this.$router.push({ path: "/openCard", query: { type: "view" ,data:JSON.stringify({a:'1'})} });
          },
        },
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
            label: "会员号码",
            value: "4567890987544455665" /*控件value / 默认值*/,
            type: "" /*控件类型 支持原生*/,
            hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
            classname: "" /*自定义class*/,
            message: "brandMessage" /*校验提示语*/,
            disabled:false/*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
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
            label: "会员姓名",
            value: "4567890987544455665" /*控件value / 默认值*/,
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
            label: "预约方式",
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
            options: selectOption.apponitMethod,
            customParameters: "select",
          },
          {
            // 单行文本框
            id: "input",
            span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
            assemblyname: "input",
            label: "联系方式",
            value: "19988867888" /*控件value / 默认值*/,
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
            id: 6,
            label: "预约时间",
            value: "",
            type:
              "daterange" /*TODO 控件类型 date 单选日期， daterange 日期区间选择， datetime 日期时间选择*/,
            hidelabels: true,
            message: "date",
            disabled: false,
            placeholder: "Please select",
            category: 5,
            format: "yyyy-MM-dd",
            customParameters: "DateSelection",
            classname: "",
            classnameitem: "",
            check:true,
            message: "brandMessage" /*校验提示语*/,
          },
          {
            // 下拉框
            id: "select",
            span: 12,
            assemblyname: "下拉框",
            label: "预约项目",
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
            // 多选框组
            id: "Checkbox",
            span: 12,
            assemblyname: "多选框组",
            label: "是否有教练",
            value: [],
            type: "",
            hidelabels: true,
            classname: "",
            message: "brandMessage",
            placeholder: "Please select",
            category: 2,
            source: false,
            check: false,
            layoutmode: 0,
            formStatus: true,
            options: selectOption.yesOrNo,
            customParameters: "Checkbox",
          },
          {
            id: 3,
            label: "教练姓名",
            value: "",
            hidelabels: true,
            message: "brandMessage",
            disabled: false,
            placeholder: "Please select",
            category: 1,
            source: true /*todo 修改  true 本地数据 false 接口数据 必须get 请求 返回格式必须统一*/,
            apiUrl: "" /*接口api*/,
            key: "" /*TODO 筛选框  给用户展示的字段根据接口定义 label*/,
            val: "" /*TODO 筛选框  服务端所需字段根据接口定义 接口参数key*/,
            options: selectOption.coach,
            customParameters: "Select",
            classname: "",
            classnameitem: "",
          },
         
          {
            id: 3,
            label: "房间名称",
            value: "",
            hidelabels: true,
            message: "brandMessage",
            disabled: false,
            placeholder: "Please select",
            category: 1,
            source: true /*todo 修改  true 本地数据 false 接口数据 必须get 请求 返回格式必须统一*/,
            apiUrl: "" /*接口api*/,
            key: "" /*TODO 筛选框  给用户展示的字段根据接口定义 label*/,
            val: "" /*TODO 筛选框  服务端所需字段根据接口定义 接口参数key*/,
            options: selectOption.coach,
            customParameters: "Select",
            classname: "",
            classnameitem: "",
          },
          {
            // 多选框组
            id: "Checkbox",
            span: 12,
            assemblyname: "多选框组",
            label: "是否包场",
            value: [],
            type: "",
            hidelabels: true,
            classname: "",
            message: "brandMessage",
            placeholder: "Please select",
            category: 2,
            source: false,
            check: false,
            layoutmode: 0,
            formStatus: true,
            options: selectOption.yesOrNo,
            customParameters: "Checkbox",
          },
          {
            id: 3,
            label: "桌位号",
            value: "",
            hidelabels: true,
            message: "brandMessage",
            disabled: false,
            placeholder: "Please select",
            category: 1,
            source: true /*todo 修改  true 本地数据 false 接口数据 必须get 请求 返回格式必须统一*/,
            apiUrl: "" /*接口api*/,
            key: "" /*TODO 筛选框  给用户展示的字段根据接口定义 label*/,
            val: "" /*TODO 筛选框  服务端所需字段根据接口定义 接口参数key*/,
            options: selectOption.coach,
            customParameters: "Select",
            classname: "",
            classnameitem: "",
          },
          // {
          //   id: 3,
          //   label: "消费金额",
          //   value: "￥2984973",
          //   hidelabels: true,
          //   message: "brandMessage",
          //   disabled: true,
          //   placeholder: "Please select",
          //   category: 1,
          //   source: true /*todo 修改  true 本地数据 false 接口数据 必须get 请求 返回格式必须统一*/,
          //   apiUrl: "" /*接口api*/,
          //   key: "" /*TODO 筛选框  给用户展示的字段根据接口定义 label*/,
          //   val: "" /*TODO 筛选框  服务端所需字段根据接口定义 接口参数key*/,
          //   options: selectOption.coach,
          //   customParameters: "Select",
          //   classname: "",
          //   classnameitem: "",
          // },

          {
            // 多行文本框
            id: "textarea",
            span: 24,
            assemblyname: "多行文本框",
            label: "备注",
            value: "上海市杨浦区XXXX",
            type: "textarea",
            hidelabels: true,
            classname: "",
            message: "brandMessage",
            disabled: false,
            placeholder: "brandMessage",
            category: 0,
            check: false,
            iconChekc: false,
            customParameters: "textarea",
            formStatus: true,
          },
        ],
      },
    };
  },
  created() {
    const { type, data } = this.$route.query;
    // this.query = { ...this.query, type, data: JSON.parse(data) };
    this.query = { ...this.query, type };
    console.log(this.query,'this.query');
    if (this.query.type === "view") {
      this.formObj.formDisabled = true;
      this.formObj.pageTitleSlot.visible = true;
  
    }
    if (this.query.type === "add") {
      this.formObj.pageTitleSlot.visible = false;
      this.$set(this.formObj, "pageTitleSlot", false);
      console.log(9999);
    } else if(type==='edit') {
          //   会员号码不能修改
    this.formObj.formData[0].disabled=true
    this.formObj.formData[1].disabled=true
    }
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
  /* display: flex;
      flex-direction: column-reverse; */
}
</style>
