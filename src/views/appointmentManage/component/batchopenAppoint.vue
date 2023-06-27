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
        <Table
          :Obj="tableObj"
          :handelSubmit="operationSubmit"
          :HandleSizeChange="HandleSizeChange"
          :handleSelectionChangeCom="handleSelectionChangeCom"
          :HandleCurrentChange="HandleCurrentChange"
          
        >
         
        </Table>
      </div>
  
      <div class="btn-line" v-if="!this.formObj.formDisabled">
        <el-button @click="onSubmitFn" class="Search-btn"
          >批量预定
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
import Table from "@/componentsHK/public/Tabel";
  
  export default {
    name: "openAppoint",
    mixins: [],
    components: {
      Form,
      Table
    },
    data() {
      return {
        selectRoom:[],
        tableObj: {
            selectionStatus: true,  /*是否需要复选框*/
        son: false /*是否有子级表单*/,
        operation: false /*是否展示操作按钮功能*/,
        childrenOperation: true /*是否展示子表操作按钮功能*/,
        operationText: "operation" /*操作栏标题*/,
        childrenOperationText: "operation" /*子表操作栏标题*/,
        paginationStatus: true /*是否启用分页组件*/,
        operationWidth: "200",
        total: 0 /*总条数 通过 this.tableObj.total = 接口返回的总条数字段 api 请求*/,
        page: 1,
        head: [
          /*表头数据*/
          {
            label: "useCommonAll.projectName" /*标题*/,
            prop: "id" /*绑定数据源obj展示字段*/,
            fixed: "left" /*表头固定，参数：left / right / ''*/,
            width: "200" /*表头宽度*/,
            // slot: false,  /*是否需要插槽*/
          },
          {
            label: "useCommonAll.roomName" /*标题*/,
            prop: "name" /*绑定数据源obj展示字段*/,
            // slot: false,  /*是否需要插槽*/
          },
          {
            label: "useCommonAll.status" /*标题*/,
            prop: "hexiao" /*绑定数据源obj展示字段*/,
            // slot: false,  /*是否需要插槽*/
          },
          {
            label: "useCommonAll.tableNumber" /*标题*/,
            prop: "type" /*绑定数据源obj展示字段*/,
            // slot: false,  /*是否需要插槽*/
          },
          
         
        ],
        childrenHead: [
          /*子表头数组*/
        ],
        operationData: [
          
        
        ],
        childrenOperationData: [
          /*字表操作栏*/
        ],
        tableData: [{
              name: '维多利亚',
              id: '1',
              type: '1',
              workshop: '1',
              section: '1',
              status: '1',
              localDropDownBox: '1',
              singleLineTextBox: '1',
              icon: '1',
              sort: '1',
              updateTime: '1',
              email: '1',
            }],
      },
        minTime:'08:30',
        submitObj: {},
        obj: {},
        query: {},
        formObj: {
          title: "预约信息" /*表单标题*/,
          // 插槽的按钮信息
          pageTitleSlot: {
            visible: true,
            text: "",
            fn: () => {
          window_open('','/memberManage/openCard', { type: "view" ,data:JSON.stringify({a:'1'})},this.$router)
  
              // this.$router.push({ path: "/memberManage/openCard", query: { type: "view" ,data:JSON.stringify({a:'1'})} });
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
              label: "useCommonAll.memberNumber",
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
              label: "useCommonAll.memberName",
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
              span:"12",
              id: 6,
              label: "useCommonAll.reservationdate",
              value: "",
              type:
                "date" /*TODO 控件类型 date 单选日期， daterange 日期区间选择， datetime 日期时间选择*/,
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
              span:"6",
              id: '',
              label: "useCommonAll.startTime",
              value: "",
              type:
                "timeSel" /*TODO 控件类型 date 单选日期， daterange 日期区间选择， datetime 日期时间选择*/,
              hidelabels: true,
              startTime:'',
              endTime:'',
              message: "date",
              disabled: false,
              placeholder: "Please select",
              category: '20',
              format: "yyyy-MM-dd",
              customParameters: "ww",
              classname: "timeSel",
              classnameitem: "mm",
              startTime:'',
              endTime:'',
              check:true,
              message: "333" /*校验提示语*/,
            },
            {
              span:"6",
              id: '',
              label: "useCommonAll.endTime",
              value: "",
              type:
                "timeSel" /*TODO 控件类型 date 单选日期， daterange 日期区间选择， datetime 日期时间选择*/,
              hidelabels: true,
              startTime:'',
              endTime:'',
              message: "date",
              disabled: false,
              placeholder: "Please select",
              category: '21',
              format: "yyyy-MM-dd",
              customParameters: "DateSelection",
              classname: "timeSel",
              classnameitem: "mm",
              startTime:'',
              endTime:'',
              check:true,
              minTime:this.minTime,
              message: "hhhhhhhhhh" /*校验提示语*/,
            },
            {
              // 下拉框
              id: "select",
              span: 12,
              assemblyname: "下拉框",
              label: "useCommonAll.reservationM",
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
          {span:12},
           
            
            {
              // 单行文本框
              id: "input",
              span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
              assemblyname: "input",
              label: "useCommonAll.contact",
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
              // 单行文本框
              id: "input",
              span: 12 /*表单占据控件，容器分为 24份，需要整数*/,
              assemblyname: "input",
              label: "useCommonAll.contactWay",
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
              // 多行文本框
              id: "textarea",
              span: 24,
              assemblyname: "多行文本框",
              label: "useCommonAll.reamark",
              value: "",
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
        HandleCurrentChange(val) {
      /*当前页*/
      console.debug(val);
      this.tableObj.page = val;
      this.list();
    },
    HandleSizeChange(val) {
      /*每页多少条*/
      console.debug(val);
      this.tableObj.page = 1;
      this.tableObj.pageSize = val;
      this.list();
    },
    handleSelectionChangeCom(val) {
      /*复选框选中事件*/
      console.debug(val);
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
        this.selectRoom=val
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
            if(this.selectRoom.length>0){
                const form1 = this.getStoreFormValue(this.formObj.formData);
            this.$confirm('此操作请务必对单个订单再做调整!!!', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.$message({
            type: 'success',
            message: '批量创建订单！'
          });   
            this.$router.push('/appointmentManage/index')

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
            console.log(form1, "form");
            }else{
            this.$message.error('请选择预约的房间！')
            }
           
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
  
  
  <style lang="scss">
  .timeSel{
    // margin-left: -120px;
  
  }
  </style>
  