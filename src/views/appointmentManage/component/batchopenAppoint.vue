<template>
  <div class="Form" id="Form">
    <!--表单组件-->
    <div class="mrb_20">
      <Form
        ref="basicInfo"
        :data="formObj"
        :ChangeSubmit="ChangeSubmit"
        :reset="resetForm"
        :Change="selectChange"

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
      <el-button @click="onSubmitFn" class="Search-btn">{{$t('useCommonAll.batchBooking')}} </el-button>
    </div>
  </div>
</template>

<script>
import "@/config/ele/elementForm";
import "@/config/ele/eleLayout";
import { mapState } from "vuex";
import Form from "@/componentsHK/public/Form";
import selectOption from "@/views/global-data/selectOption";
import { window_open } from "@/utils/index";
import Table from "@/componentsHK/public/Tabel";

export default {
  name: "openAppoint",
  mixins: [],
  components: {
    Form,
    Table,
  },
  data() {
    return {
      selectRoom: [],
      tableObj: {
        selectionStatus: true /*是否需要复选框*/,
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
          },
          {
            label: "useCommonAll.roomName" /*标题*/,
            prop: "name" /*绑定数据源obj展示字段*/,
          },
          {
            label: "useCommonAll.status" /*标题*/,
            prop: "hexiao" /*绑定数据源obj展示字段*/,
          },
          {
            label: "useCommonAll.tableNumber" /*标题*/,
            prop: "type" /*绑定数据源obj展示字段*/,
          },
        ],
        childrenHead: [
          /*子表头数组*/
        ],
        operationData: [],
        childrenOperationData: [
          /*字表操作栏*/
        ],
        tableData: [
          {
            name: "维多利亚",
            id: "1",
            type: "1",
            workshop: "1",
            section: "1",
            status: "1",
            localDropDownBox: "1",
            singleLineTextBox: "1",
            icon: "1",
            sort: "1",
            updateTime: "1",
            email: "1",
          },
        ],
      },
      minTime: "08:30",
      submitObj: {},
      obj: {},
      query: {},
      formObj: {
        title: "useCommonAll.reservationInfo" /*表单标题*/,
        // 插槽的按钮信息
        pageTitleSlot: {
          visible: true,
          text: "",
          fn: () => {
            window_open(
              "",
              "/memberManage/openCard",
              { type: "view", data: JSON.stringify({ a: "1" }) },
              this.$router
            );

            // this.$router.push({ path: "/memberManage/openCard", query: { type: "view" ,data:JSON.stringify({a:'1'})} });
          },
        },
        formDisabled: false,
        formproperties: {
          inline: true,
        },
        formData: [
        {
            id: "select",
            span: 12,
            assemblyname: "下拉框",
            label: "useCommonAll.memberNumber",
            value: "",
            type: "",
            hidelabels: true,
            classname: "",
            message: "brandMessage",
            disabled: false,
            placeholder: "brandMessage",
            category: 16,
            source: true,
            apiUrl: "",
            key: "",
            val: "",
            check: true,
            multiplechoice: false,
            searchable: false,
            formStatus: true,
            options: [
              { value: 1, label: "Option 1" },
              {
                value: 2,
                label: "Option 2",
              },
            ],
            customParameters: "memberNumber",
          },
          {
            id: "select",
            span: 12,
            assemblyname: "下拉框",
            label: "useCommonAll.memberName",
            value: "",
            type: "",
            hidelabels: true,
            classname: "",
            message: "brandMessage",
            disabled: false,
            placeholder: "brandMessage",
            category: 16,
            source: true,
            apiUrl: "",
            key: "",
            val: "",
            check: true,
            multiplechoice: false,
            searchable: false,
            formStatus: true,
            options: selectOption.nickNameType,
            customParameters: "memberName",
          },
          {
            span: "12",
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
            customParameters: "reservationdate",
            classname: "",
            classnameitem: "",
            check: true,
            message: "brandMessage" /*校验提示语*/,
          },

          {
            span: "6",
            id: "",
            label: "useCommonAll.startTime",
            value: "",
            type:
              "timeSel" /*TODO 控件类型 date 单选日期， daterange 日期区间选择， datetime 日期时间选择*/,
            hidelabels: true,
            startTime: "",
            endTime: "",
            message: "date",
            disabled: false,
            placeholder: "Please select",
            category: "20",
            format: "yyyy-MM-dd",
            customParameters: "startTime",
            classname: "timeSel",
            classnameitem: "mm",
            startTime: "",
            endTime: "",
            check: true,
            message: "brandMessage" /*校验提示语*/,
          },
          {
            span: "6",
            id: "",
            label: "useCommonAll.endTime",
            value: "",
            type:
              "timeSel" /*TODO 控件类型 date 单选日期， daterange 日期区间选择， datetime 日期时间选择*/,
            hidelabels: true,
            startTime: "",
            endTime: "",
            message: "date",
            disabled: false,
            placeholder: "Please select",
            category: "21",
            format: "yyyy-MM-dd",
            customParameters: "endTime",
            classname: "timeSel",
            classnameitem: "mm",
            startTime: "",
            endTime: "",
            check: true,
            minTime: this.minTime,
            message: "brandMessage" /*校验提示语*/,
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
            customParameters: "reservationM",
          },
          { span: 12 },

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
            customParameters: "contact" /*对应api的参数名称*/,
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
            customParameters: "contactWay" /*对应api的参数名称*/,
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
            customParameters: "reamark",
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
    console.log(this.query, "this.query");
    if (this.query.type === "view") {
      this.formObj.formDisabled = true;
      this.formObj.pageTitleSlot.visible = true;
    }
    if (this.query.type === "add") {
      this.formObj.pageTitleSlot.visible = false;
      this.$set(this.formObj, "pageTitleSlot", false);
      console.log(9999);
    } else if (type === "edit") {
      //   会员号码不能修改
      this.formObj.formData[0].disabled = true;
      this.formObj.formData[1].disabled = true;
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
      this.selectRoom = val;
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
    selectChange(data) {

      switch (data.customParameters) {
        case "memberNumber":
          this.updateValue(
            ["memberName"],
            [1 ],
            this.formObj
          );

          break;
        case "memberName":
          this.updateValue(
            ["memberNumber"],
            [2],
            this.formObj
          );

          break;
      
        default:
          break;
      }
    },
    updateValue(updateParam, updateData, formObj) {
      updateParam.forEach((i, index) => {
        const temp = formObj.formData.find(
          (item) => item.customParameters === i
        );
        temp.value = updateData[index];
      });
    },
    onSubmitFn() {
      let p1 = this.$refs.basicInfo.validateFormPromis("dynamicValidateForm");
      Promise.all([p1])
        .then((result) => {
          if (this.selectRoom.length > 0) {
            const form1 = this.getStoreFormValue(this.formObj.formData);
            this.$confirm(this.$t('useCommonAll.orderConfirmHint'), this.$t('useCommonAll.prompt'), {
              confirmButtonText: this.$t('useCommonAll.ok'),
          cancelButtonText:  this.$t('useCommonAll.cancel'),
              type: "warning",
            })
              .then(() => {
                this.$message.success(this.$t('useCommonAll.operatorSuciscess'))

                this.$router.push("/appointmentManage/index");
              })
              .catch(() => {
                this.$message({
                  type: "info",
                  message: this.$t('useCommonAll.canceled')
                });
              });
            console.log(form1, "form");
          } else {
            this.$message.error(this.$t('useCommonAll.selectRoom'));
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
.timeSel {
  // margin-left: -120px;
}
</style>
