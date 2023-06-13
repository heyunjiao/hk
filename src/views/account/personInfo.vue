<template>
  <div class="setting">
   <div class="mrb_20">
    <Form
          ref="basicInfo"
          :data="formObj"
          :ChangeSubmit="ChangeSubmit"
          :reset="resetForm"
        />
       
      </div>

    <div class="table-list mrb_20" >
      <div>
        <!--table表格-->
        <Table
          :Obj="tableObj"
          :HandleSizeChange="HandleSizeChange"
          :HandleCurrentChange="HandleCurrentChange"
        >
          <template slot="status" scope="{row}"
            ><!--switch控件插槽-->
            <el-switch
              v-model="row.status"
             
            >
            </el-switch>
          </template>
          <!-- c查看订单详情 -->
          <template slot="orderView" scope="{row}"
            ><!--switch控件插槽-->
           <a class="a_link" href="#" @click="viewOrderFn">
          查看
          </a>
          </template>
        </Table>
      </div>


     
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
import Table from "@/componentsHK/public/Tabel";

  import Form from "@/componentsHK/public/Form";
  import selectOption from "@/views/global-data/selectOption";
export default {
  components: {
      Form,
      Table
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
              // 下拉框
              id: "select",
              span: 12,
              assemblyname: "下拉框",
              label: "在职状态",
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
              options: selectOption.yesOrNo,
              customParameters: "select",
            },
            {
              // 下拉框
              id: "select",
              span: 12,
              assemblyname: "下拉框",
              label: "职位",
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
              options: selectOption.projectType,
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
            {
                // 时间选选择器
                id: "dateSelection",
                span: 12,
                assemblyname: "",
                label: "头像",
                value: "",
                type: "date",
                hidelabels: true,
                classname: "",
                message: "brandMessage",
                disabled: false,
                placeholder: "Please select",
                category: 12,
                check: false,
                format: "yyyy-MM-dd",
                customParameters: "dateSelection",
                formStatus: true,
              },
           
              
       
          ],
        },
        tableObj: {
        son: false /*是否有子级表单*/,
        operation: false /*是否展示操作按钮功能*/,
        childrenOperation: true /*是否展示子表操作按钮功能*/,
        operationText: "operation" /*操作栏标题*/,
        selectionStatus: false /*是否需要复选框*/,
        childrenOperationText: "operation" /*子表操作栏标题*/,
        paginationStatus: true /*是否启用分页组件*/,
        operationWidth: "200",
        total: 0 /*总条数 通过 this.tableObj.total = 接口返回的总条数字段 api 请求*/,
        page: 1,
        head: [
          /*表头数据*/
          {
            label: "订单编号" /*标题*/,
            prop: "id" /*绑定数据源obj展示字段*/,
            fixed: "left" /*表头固定，参数：left / right / ''*/,
            width: "200" /*表头宽度*/,
            // slot: false,  /*是否需要插槽*/
          },
          {
            label: "是否核销" /*标题*/,
            prop: "hexiao" /*绑定数据源obj展示字段*/,
            width: "100" /*表头宽度*/,
            // slot: false,  /*是否需要插槽*/
          },
          {
            label: "会员姓名" /*标题*/,
            prop: "type" /*绑定数据源obj展示字段*/,
            width: "140" /*表头宽度*/,
            // slot: false,  /*是否需要插槽*/
          },
         
          {
            label: "预约时间" /*标题*/,
            prop: "timeLong" /*绑定数据源obj展示字段*/,
            width: "200" /*表头固定，参数：left / right / ''*/,
          },
          {
            label: "订单创建时间" /*标题*/,
            prop: "timeLong" /*绑定数据源obj展示字段*/,
            width: "200" /*表头固定，参数：left / right / ''*/,
          },
          {
            label: "预约项目" /*标题*/,
            prop: "type" /*绑定数据源obj展示字段*/,
            width: "120" /*表头固定，参数：left / right / ''*/,
          },
          {
            label: "预约房间" /*标题*/,
            prop: "home" /*绑定数据源obj展示字段*/,
            width: "80" /*表头固定，参数：left / right / ''*/,
          },
          {
            label: "预约详情" /*标题*/,
            prop: "appoint" /*绑定数据源obj展示字段*/,
            width: "80" /*表头固定，参数：left / right / ''*/,
            slot:true
          },
          {
            label: "支付方式" /*标题*/,
            prop: "pay" /*绑定数据源obj展示字段*/,
            width: "80" /*表头固定，参数：left / right / ''*/,
          },
          {
            label: "订单状态" /*标题*/,
            prop: "pay" /*绑定数据源obj展示字段*/,
            width: "80" /*表头固定，参数：left / right / ''*/,
          },
         
          {
            label: "备注信息" /*标题*/,
            prop: "remark" /*绑定数据源obj展示字段*/,
          },
          
         
        ],
        childrenHead: [
          /*子表头数组*/
        ],
        operationData: [],
        childrenOperationData: [
          /*字表操作栏*/
        ],
        tableData: [{}],
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
    HandleSizeChange(val) {
      /*每页多少条*/
      console.debug(val);
      this.tableObj.page = 1;
      this.tableObj.pageSize = val;
      this.list();
    },
    HandleCurrentChange(val) {
      /*当前页*/
      console.debug(val);
      this.tableObj.page = val;
      this.list();
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

