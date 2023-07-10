<template>
  <div class="member-list">
    <div class="page-title">
      <PageTitle :title="$t('route.staffManagement')">
        <template slot="btn">
          <el-button @click="openOrderFn" size="large" type="primary">{{
            $t("useCommonAll.newMember")
          }}</el-button>
        </template>
      </PageTitle>
    </div>
    <div class="search-form">
      <FormCombination
        :formObj="formObj1"
        v-show="status"
        :tabData="tabData"
        :tabClose="tabClose"
        :handelSubmit="submit"
      />
      <FormCombination
        :formObj="formObj"
        v-show="!status"
        :handelSubmit="submit"
      />
    </div>

    <div class="table-list">
      <div>
        <!--table表格-->
        <Table
          :Obj="tableObj"
          :handelSubmit="operationSubmit"
          :HandleSizeChange="HandleSizeChange"
          :handleSelectionChangeCom="handleSelectionChangeCom"
          :HandleCurrentChange="HandleCurrentChange"
        >
          <template slot="status" scope="{row}">
            {{ entryStatus[row.status] }}
          </template>
          <template slot="gender" scope="{row}">
            {{ genderStatus[row.gender] }}
          </template>

          <template slot="appoint" scope="{row}">
            <a class="a_link" href="#" @click="viewOrderFn">
              查看详情
            </a>
          </template>
        </Table>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/componentsHK/public/PageTitle.vue";
import FormCombination from "@/componentsHK/public/FormCombination.vue";
import Table from "@/componentsHK/public/Tabel";
import { window_open } from "@/utils/index";
import { GetEmployeeList, GetEmployee } from "@/api/staff";
import tableMixins from "@/mixins/tableMixins";
import { entryStatus } from "@/views/global-data/selectOption";

export default {
  name: "memberList",
  mixins: [tableMixins],
  components: { PageTitle, FormCombination, Table },
  data() {
    return {
      // 在职状态
      entryStatus: ["", "在职", "离职", "已删除"],
      genderStatus: [, "男", "女", "其他"],
      status: true,
      title: "",
      tabData: [],
      tableObj: {
        son: false /*是否有子级表单*/,
        operation: true /*是否展示操作按钮功能*/,
        childrenOperation: true /*是否展示子表操作按钮功能*/,
        operationText: "operation" /*操作栏标题*/,
        selectionStatus: false /*是否需要复选框*/,
        childrenOperationText: "operation" /*子表操作栏标题*/,
        paginationStatus: true /*是否启用分页组件*/,
        operationWidth: "200",
        totalCount: 0 /*总条数 通过 this.tableObj.total = 接口返回的总条数字段 api 请求*/,
        pageNum: 1,
        pageSize: 10,
        head: [
          /*表头数据*/
          {
            label: "useCommonAll.jobNumber" /*标题*/,
            prop: "workNum" /*绑定数据源obj展示字段*/,
            fixed: "left" /*表头固定，参数：left / right / ''*/,
            // width: "100" /*表头宽度*/,
            // slot: false,  /*是否需要插槽*/
          },

          {
            label: "useCommonAll.position" /*标题*/,
            prop: "roleName" /*绑定数据源obj展示字段*/,
            // width: "100" /*表头宽度*/,
          },
          {
            label: "useCommonAll.name" /*标题*/,
            prop: "name" /*绑定数据源obj展示字段*/,
            fixed: "left" /*表头固定，参数：left / right / ''*/,
            // width: "200" /*表头宽度*/,
            // slot: false,  /*是否需要插槽*/
          },

          {
            label: "useCommonAll.phone" /*标题*/,
            prop: "mobilePhone" /*绑定数据源obj展示字段*/,
            // width: "140" /*表头宽度*/,
            // slot: false,  /*是否需要插槽*/
          },

          {
            label: "useCommonAll.sex" /*标题*/,
            prop: "gender" /*绑定数据源obj展示字段*/,
            width: "140" /*表头宽度*/,
            slot: true /*是否需要插槽*/,
          },
          {
            label: "useCommonAll.email" /*标题*/,
            prop: "email" /*绑定数据源obj展示字段*/,
            width: "140" /*表头宽度*/,
            // slot: false,  /*是否需要插槽*/
          },

          {
            label: "useCommonAll.entryStatus" /*标题*/,
            prop: "status" /*绑定数据源obj展示字段*/,
            // width: "140" /*表头宽度*/,
            slot: true /*是否需要插槽*/,
          },
          {
            label: "useCommonAll.lastLoginTime" /*标题*/,
            prop: "LoginTime" /*绑定数据源obj展示字段*/,
            
          },
        ],
        childrenHead: [],
        operationData: [
          {
            id: "edit" /*按钮ID*/,
            value: "useCommonAll.edit" /*按钮内容*/,
            classname: "" /*自定义class*/,
            disabled: false /*是否被禁用*/,
            type:
              "text" /*按钮类型 primary / success / warning / danger / info / text*/,
            size: "mini" /*按钮大小 medium / small / mini*/,
            icon: "el-icon-edit-outline" /*按钮icon*/,
          },
          {
            id: "view" /*按钮ID*/,
            value: "useCommonAll.view" /*按钮内容*/,
            classname: "" /*自定义class*/,
            disabled: false /*是否被禁用*/,
            type:
              "text" /*按钮类型 primary / success / warning / danger / info / text*/,
            size: "mini" /*按钮大小 medium / small / mini*/,
            icon: "" /*按钮icon*/,
          },

          // {
          //   id: "cancel" /*按钮ID*/,
          //   value: "角色授权" /*按钮内容*/,
          //   classname: "" /*自定义class*/,
          //   disabled: false /*是否被禁用*/,
          //   type:
          //     "text" /*按钮类型 primary / success / warning / danger / info / text*/,
          //   size: "mini" /*按钮大小 medium / small / mini*/,
          //   icon: "" /*按钮icon*/,
          // },
        ],
        childrenOperationData: [],
        tableData: [],
      },
      formObj: {
        title: "",
        formproperties: {},
        formData: [
          /*TODO 控件配置数组*/

          {
            // 文本框
            id: "workNum" /*自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: "useCommonAll.jobNumber" /*todo 修改 控件label*/,
            value: "",
            hidelabels: true /*是否展示label标题*/,
            placeholder: "brandMessage",
            category: 0 /*todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            customParameters: "workNum" /*对应api的参数名称*/,
            classname: "" /*默认为空*/,
            classnameitem: "" /*默认为空*/,
          },
          {
            // 文本框
            id: "name" /*自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: "useCommonAll.name" /*todo 修改 控件label*/,
            value: "",
            hidelabels: true /*是否展示label标题*/,
            placeholder: "brandMessage",
            category: 0 /*todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            customParameters: "name" /*对应api的参数名称*/,
            classname: "" /*默认为空*/,
            classnameitem: "" /*默认为空*/,
          },
          {
            // 文本框
            id: "roleName" /*自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: "useCommonAll.position" /*todo 修改 控件label*/,
            value: "",
            hidelabels: true /*是否展示label标题*/,
            placeholder: "brandMessage",
            category: 0 /*todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            customParameters: "roleName" /*对应api的参数名称*/,
            classname: "" /*默认为空*/,
            classnameitem: "" /*默认为空*/,
          },
          {
            // 文本框
            id:
              "mobilePhone" /*自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: "useCommonAll.phone" /*todo 修改 控件label*/,
            value: "",
            hidelabels: true /*是否展示label标题*/,
            placeholder: "brandMessage",
            category: 0 /*todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            customParameters: "mobilePhone" /*对应api的参数名称*/,
            classname: "" /*默认为空*/,
            classnameitem: "" /*默认为空*/,
          },

          {
            id: "collape" /*自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: "" /*todo 修改 控件label*/,
            value: "useCommonAll.fold",
            hidelabels: true /*是否展示label标题*/,
            disabled: false /*是否禁用 true 禁用 false 启用*/,
            placeholder: "Please select" /*todo 修改 placeholder 提示语*/,
            category: 7 /*todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            type:
              "Filter-btn" /*todo 修改 按钮类型 Filter-btn / Search-btn 对应目前两种样式*/,
            size: "" /*按钮大小 medium / small / mini*/,
            icon: "el-icon-arrow-up" /*自定义icon，在 模糊搜索或按钮时候生效*/,
            classname: "" /*默认为空*/,
            classnameitem: "" /*默认为空*/,
          },
          {
            id: "Search" /*自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: "" /*todo 修改 控件label*/,
            value: "Search",
            hidelabels: true /*是否展示label标题*/,
            disabled: false /*是否禁用 true 禁用 false 启用*/,
            placeholder: "Please select" /*todo 修改 placeholder 提示语*/,
            category: 7 /*todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            activecolor: "" /*switch 开启颜色*/,
            inactivecolor: "" /*switch 关闭颜色*/,
            type:
              "Search-btn" /*todo 修改 按钮类型 Filter-btn / Search-btn 对应目前两种样式*/,
            size: "" /*按钮大小 medium / small / mini*/,
            icon: "el-icon-search" /*自定义icon，在 模糊搜索或按钮时候生效*/,
            classname: "" /*默认为空*/,
            classnameitem: "" /*默认为空*/,
          },
        ],
      },
      formObj1: {
        /*TODO 组件数据集合*/
        formproperties: {
          classname:
            "form-box" /*自定义class参数，组合查询模糊搜索必须有 form-box*/,
        },
        formData: [
          /*TODO 控件配置数组*/ {
            id: 0 /*自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: "demo.page.singleLineTextBox" /*todo 修改 控件label*/,
            value: "" /*todo 修改 控件 v-model 参数*/,
            hidelabels: false /*是否展示label标题*/,
            disabled: false /*是否禁用 true 禁用 false 启用*/,
            placeholder: "brandMessage" /*todo 修改 placeholder 提示语*/,
            category: 0 /*todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            iconChekc: true /*是否带icon 模糊搜索 icon搜索框一体时候使用*/,
            classname: "" /*自定义class*/,
            customParameters: "workNum" /*对应api的参数名称*/,
          },
          {
            id: 1,
            label: "",
            value: "useCommonAll.expand",
            hidelabels: false,
            classname: "" /*自定义class*/,
            message: "brandMessage",
            disabled: false,
            placeholder: "Please select",
            category: 8,
            type:
              "Filter-btn" /*todo 修改 按钮类型 Filter-btn / Search-btn 对应目前两种样式*/,
          },
        ],
      },
      url: {
        getListUrl: GetEmployeeList,
      },
    };
  },
  created() {
    this.list(this.tableObj.page, this.tableObj.pageSize, "");
  },
  methods: {
    tabClose(data, v) {
      console.log(data, v, 999);
      this.$store.commit("functionTabClose", {
        v: v,
        formObj1: this.formObj,
        data: data,
        Callback: (response) => {
          v = response.v;
          this.formObj = response.formObj1;
          this.tabData = response.data;
        },
      });
    },

    openOrderFn() {
      this.$router.push({
        path: "/staff/addStaff",
        query: { type: "add" },
      });
    },
    viewOrderFn(e) {
      window_open(
        e,
        "/appointmentManage/openAppoint",
        { type: "view", data: JSON.stringify({ a: "1" }) },
        this.$router
      );
    },
    // tablecao'z操作按钮设置
    operationSubmit(v, index, row) {
      /*
       * v：当前点击按钮内容
       * index：当前点击行数索引
       * row：当前点击行数对象*/
      console.log(v, index, row);
      if (v.id == "edit") {
        this.$router.push({
          path: "/staff/editStaff",
          query: { type: v.id, id: row.id },
        });
      }
      if (v.id == "view") {
        this.$router.push({
          path: "/staff/detailStaff",
          query: { type: v.id, id: row.id },
        });
      }
      if (v.id == "cancel") {
        this.dialogFormVisible = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.role {
  .tree {
    width: 100%;
    border: 1px solid #ccc;
    padding: 20px;
  }
}
.member-list {
}
</style>
