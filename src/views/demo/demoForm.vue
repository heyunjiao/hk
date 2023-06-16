<template>
  <div class="Form" id="Form"><!--表单组件-->
    <div>
      <Form :data="formObj" :ChangeSubmit="ChangeSubmit" :submit="submitForm" :reset="resetForm"/>
      <!--
      data： 数据源
      submit： 确认按钮事件
      reset： 清空按钮事件
      resetText：重置按钮文字内容
      submitText：提交按钮文字内容
      -->
    </div>
  </div>
</template>

<script>
import '@/config/ele/elementForm';
import '@/config/ele/eleLayout';
import {mapState} from "vuex";
import Form from '@/componentsHK/public/Form'

export default {
  name: "demoForm",
  components: {
    Form,
  },
  data() {
    return {
      obj: {},
      formObj: {
        "title": "Demo表单演示",/*表单标题*/
        "formproperties": {
          // "width": "100%",  /*表单宽度*/
          // "labelalignment": "top",  /*标题展示位置 top， left， righr*/
          // "formlabelwidth": "120px",  /*标题宽度*/
          // "classname": "",  /*自定义class*/
        },
        "formData": [
          { // 单行文本框
            "id": 'input',
            "span": 12, /*表单占据控件，容器分为 24份，需要整数*/
            "assemblyname": "input",
            "label": "demo.page.singleLineTextBox",
            "value": "", /*控件value / 默认值*/
            "type": "", /*控件类型 支持原生*/
            "hidelabels": true,  /*是否展示label标题*/ /*是否展示label*/
            "classname": "",  /*自定义class*/
            "message": "brandMessage", /*校验提示语*/
            "disabled": false, /*是否禁用 true 禁用 false 启用*/  /*是否禁用*/
            "placeholder": "brandMessage", /*提示语*/
            "category": 12, /*(0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)*/
            "check": true, /*是否校验*/
            "iconChekc": false, /*是否展示icon*/
            "customParameters": "input", /*对应api的参数名称*/
          }, { // 数值文本框
            "id": 'numberInput',
            "span": 12,
            "assemblyname": "numberInput",
            "label": "page.demo.valueInputBox",
            "value": "",
            "type": "number",
            "hidelabels": true,
            "classname": "",
            "message": "brandMessage",
            "disabled": false,
            "placeholder": "brandMessage",
            "category": 0,
            "check": true,
            "iconChekc": false,
            "customParameters": "numberInput",
            "formStatus": true
          }, { // 下拉框
            "id": 'select',
            "span": 12,
            "assemblyname": "下拉框",
            "label": "page.demo.localDropDownBox",
            "value": "",
            "type": "",
            "hidelabels": true,
            "classname": "",
            "message": "brandMessage",
            "disabled": false,
            "placeholder": "Please select",
            "category": 1,
            "source": true,
            "apiUrl": "",
            "key": "",
            "val": "",
            "check": false,
            "multiplechoice": true,
            "searchable": false,
            "formStatus": true,
            "options": [{"value": 1, "label": "Option 1",}, {
              "value": 2,
              "label": "Option 2",
            }],
            "customParameters": "select"
          }, {  //api下拉框
            "id": 'apiSelect',
            "span": 12,
            "assemblyname": "下拉框",
            "label": "page.demo.apiDropDownBox",
            "value": "",
            "type": "",
            "hidelabels": true,
            "classname": "",
            "message": "brandMessage",
            "disabled": false,
            "placeholder": "Please select",
            "category": 1,
            "source": false,
            "apiUrl": "/",
            "key": "key",
            "val": "value",
            "check": false,
            "multiplechoice": false,
            "searchable": false,
            "formStatus": true,
            "options": [],
            "customParameters": "apiSelect"
          }, { // 单选框组
            "id": 'Radio',
            "span": 12,
            "assemblyname": "",
            "label": "单选框组",
            "value": "",
            "type": "",
            "hidelabels": true,
            "classname": "",
            "message": "brandMessage",
            "placeholder": "Please select",
            "category": 2,
            "source": false,
            "check": false,
            "layoutmode": 0,
            "formStatus": true,
            "options": [{"value": 1, "label": "Option 1", "disabled": false}, {
              "value": 2,
              "label": "Option 2",
              "disabled": true
            }],
            "customParameters": "Radio"
          }, { // 多选框组
            "id": 'Checkbox',
            "span": 12,
            "assemblyname": "多选框组",
            "label": "多选框组",
            "value": [],
            "type": "",
            "hidelabels": true,
            "classname": "",
            "message": "brandMessage",
            "placeholder": "Please select",
            "category": 3,
            "source": false,
            "check": false,
            "layoutmode": 0,
            "formStatus": true,
            "options": [{"value": 1, "label": "Option 1", "disabled": false}, {
              "value": 2,
              "label": "Option 2",
              "disabled": true
            }],
            "customParameters": "Checkbox"
          }, { // 时间选选择器
            "id": 'time',
            "span": 12,
            "assemblyname": "",
            "label": "时间选选择器",
            "value": "",
            "type": "",
            "hidelabels": true,
            "classname": "",
            "message": "brandMessage",
            "disabled": false,
            "placeholder": "Please select",
            "category": 4,
            "check": true,
            "format": "HH:mm:ss",
            "customParameters": "time",
            "formStatus": true
          }, { // 日期选择器
            "id": 'dateSelection',
            "span": 12,
            "assemblyname": "日期选择器",
            "label": "日期选择",
            "value": "",
            "type": "date",
            "hidelabels": true,
            "classname": "",
            "message": "brandMessage",
            "disabled": false,
            "placeholder": "Please select",
            "category": 5,
            "check": true,
            "format": "yyyy-MM-dd",
            "customParameters": "dateSelection",
            "formStatus": true
          }, { // switch开关
            "id": 'switch',
            "span": 12,
            "assemblyname": "",
            "label": "switch",
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
            "customParameters": "switch",
            "formStatus": true
          }, { // 多行文本框
            "id": 'textarea',
            "span": 12,
            "assemblyname": "多行文本框",
            "label": "多行文本框",
            "value": "",
            "type": "textarea",
            "hidelabels": true,
            "classname": "",
            "message": "brandMessage",
            "disabled": false,
            "placeholder": "brandMessage",
            "category": 0,
            "check": true,
            "iconChekc": false,
            "customParameters": "textarea",
            "formStatus": true
          }, {
            "id": "email",
            "span": 12,
            "assemblyname": "email",
            "label": "role.email.email",
            "value": "",
            "type": "",
            "hidelabels": true,
            "classname": "",
            "message": "brandMessage",
            "disabled": false,
            "placeholder": "brandMessage",
            "category": 15,
            "check": true,
            "iconChekc": false,
            "customParameters": "email",
            "inputSelectValue": "",
            "inputSelectOptions": [
              {
                label: '@163.com',
                value: '@163.com'
              }
            ]
          }]
      },
      tableObj: {
        son: false, /*是否有子级表单*/
        operation: true,  /*是否展示操作按钮功能*/
        childrenOperation: true, /*是否展示子表操作按钮功能*/
        operationText: 'operation', /*操作栏标题*/
        selectionStatus: false,  /*是否需要复选框*/
        childrenOperationText: 'operation', /*子表操作栏标题*/
        paginationStatus: true, /*是否启用分页组件*/
        total: 0, /*总条数 通过 this.tableObj.total = 接口返回的总条数字段 api 请求*/
        page: 1,
        head: [ /*表头数据*/
          {
            label: 'page.demo.name',  /*标题*/
            prop: 'name', /*绑定数据源obj展示字段*/
            fixed: 'left',  /*表头固定，参数：left / right / ''*/
            width: '180', /*表头宽度*/
            // slot: false,  /*是否需要插槽*/
          }, {
            label: 'demo.page.id',  /*标题*/
            prop: 'code', /*绑定数据源obj展示字段*/
          }, {
            label: 'page.demo.power',  /*标题*/
            prop: 'power', /*绑定数据源obj展示字段*/
          }, {
            label: 'page.demo.equipmentType',  /*标题*/
            prop: 'type', /*绑定数据源obj展示字段*/
          }, {
            label: 'page.demo.workingProcedure',  /*标题*/
            prop: 'working', /*绑定数据源obj展示字段*/
          }
        ],
        operationData: [
          {
            "id": 8,
            "value": "",  /*按钮内容*/
            "classname": "",  /*自定义class*/
            "disabled": false,  /*是否被禁用*/
            "type": "text", /*按钮类型 primary / success / warning / danger / info / text*/
            "size": "mini", /*按钮大小 medium / small / mini*/
            "icon": "el-icon-delete", /*按钮icon*/
          }
        ],
        tableData: [{
          name: 'name',
          code: '0293202',
          power: '019123',
          type: '细纱段车',
          working: '细纱'
        }]
      }
    }
  },
  created() {
    // this.$message({message: 'success', type: "warning"});
    // this.$message({message: 'success', type: "info"});
  },
  methods: {
    saveAndAdd() {
      console.debug(this.tableObj.tableData, this.obj);
    },
    operationSubmit(v, index) {
      this.tableObj.tableData.splice(index, 1)
    },
    HandleSizeChange(val) {
      console.debug(val)
    },
    handleSelectionChangeCom(val) {
      console.debug(val)
    },
    HandleCurrentChange(val) {
      console.debug(val)
    },
    ChangeSubmit(data, obj) {
      // console.debug(data, obj);
      this.obj = obj;
    },
    submitForm(data, status, obj) {
      this.$message({message: 'success', type: "success"});

      console.debug(data, obj)
      let type = '';
      let working = '';
      data[3].options.forEach((f) => {
        if (f.value == obj.type) {
          type = f.label
        }
      });
      data[4].options.forEach((f) => {
        if (f.value == obj.type) {
          working = f.label
        }
      });
      this.tableObj.tableData.push({
        name: obj.name,
        code: obj.code,
        power: obj.power,
        type,
        working
      })
      /*TODO 表单数据处理方法
      *  data：根据组件返回的数据一一处理，如data[0].value 为第一个控件的value
      *  obj：设置customParameters参数调用返回提交表单参数*/
    },
    resetForm() {
      console.debug('重置')
    }
  },
  computed: {
    ...mapState({
      formObj: state => state.form.formObj,
    })
  }
}
</script>

<style scoped>
.Form {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 15px;
  overflow: auto;
}
</style>

<style scoped>
/deep/ .el-input__inner {
  height: 32px !important;
  border-radius: 4px !important;
  opacity: 0.49 !important;
  border: 1px solid #979797 !important;
}

.el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 100% !important;
}
</style>
