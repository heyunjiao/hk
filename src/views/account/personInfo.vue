<template>
  <div class="setting">
   
    <Form
          ref="basicInfo"
          :data="formObj"
          :ChangeSubmit="ChangeSubmit"
          :reset="resetForm"
        />
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
  import selectOption from "@/views/global-data/selectOption";
export default {
  components: {
      Form,
    },
  data(){
  return{
    formObj: {
          title: "个人信息" /*表单标题*/,
          
          formDisabled: false,
          formproperties: {
            inline: true,
          },
          formData: [
          // {
          //     // 下拉框
          //     id: "select",
          //     span: 12,
          //     assemblyname: "下拉框",
          //     label: "项目类型",
          //     value: 1,
          //     type: "",
          //     hidelabels: true,
          //     classname: "",
          //     message: "brandMessage",
          //     disabled: false,
          //     placeholder: "Please select",
          //     category: 1,
          //     source: true,
          //     apiUrl: "",
          //     key: "",
          //     val: "",
          //     check: false,
          //     multiplechoice: false,
          //     searchable: false,
          //     formStatus: true,
          //     options: selectOption.projectType,
          //     customParameters: "select",
          //   },
          {
              // 单行文本框
              id: "input",
              span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
              assemblyname: "input",
              label: "姓名",
              value: "维多利亚" /*控件value / 默认值*/,
              type: "" /*控件类型 支持原生*/,
              hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
              classname: "" /*自定义class*/,
              message: "brandMessage" /*校验提示语*/,
              disabled:true/*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
              placeholder: "brandMessage" /*提示语*/,
              category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
              check: false /*是否校验*/,
              iconChekc: false /*是否展示icon*/,
              customParameters: "input" /*对应api的参数名称*/,
            },
          {
              // 下拉框
              id: "select",
              span: 12,
              assemblyname: "下拉框",
              label: "性别",
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
              // 单行文本框
              id: "input",
              span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
              assemblyname: "input",
              label: "手机号",
              value: "" /*控件value / 默认值*/,
              type: "number" /*控件类型 支持原生*/,
              hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
              classname: "" /*自定义class*/,
              message: "brandMessage" /*校验提示语*/,
              disabled:false/*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
              placeholder: "brandMessage" /*提示语*/,
              category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
              check: false /*是否校验*/,
              iconChekc: false /*是否展示icon*/,
              customParameters: "input" /*对应api的参数名称*/,
            },
            {
              // 单行文本框
              id: "input",
              span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
              assemblyname: "input",
              label: "邮箱",
              value: "" /*控件value / 默认值*/,
              type: "email" /*控件类型 支持原生*/,
              hidelabels: true /*是否展示label*/ /*是否展示label标题*/,
              classname: "" /*自定义class*/,
              message: "brandMessage" /*校验提示语*/,
              disabled:false/*是否禁用*/ /*是否禁用 true 禁用 false 启用*/,
              placeholder: "" /*提示语*/,
              category: 0 /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/,
              check: false /*是否校验*/,
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
                check: false,
                format: "yyyy-MM-dd",
                customParameters: "dateSelection",
                formStatus: true,
              },
           
            
       
          ],
        },
  }},
  methods: {
    ChangeSubmit(data, obj) {
        // console.debug(data, obj);
        this.obj = obj;
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
    }
}
</script>

<style lang="scss" scoped>


.btn-line {
  text-align: right;
  padding: 15px;
  background-color: #fff;
  /* display: flex;
    flex-direction: column-reverse; */
}

</style>>

