<template>
  <div class="member-list">
    <div class="page-title">
      <PageTitle title="route.memberList">
        <template slot="btn">
          <el-button @click="openCardFn" size="large" type="primary">{{
            $t("member.openCard")
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
      <FormCombination :formObj="formObj" v-show="!status" :handelSubmit="submit"/>
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
          <template slot="status" scope="{row}"
            ><!--switch控件插槽-->
            <el-switch
              v-model="row.status"
             
            >
            </el-switch>
          </template>
          <!-- c查看订单详情 -->
          <template slot="id" scope="{row}"
            ><!--switch控件插槽-->
           <p class="a_link" href="#" @click="()=>pushToDetail({id:'view'},row)">
         {{row.id}}
           </p>
          </template>
          <template slot="cardType" scope="{row}"
            ><!--switch控件插槽-->
           <p class="a_link" href="#" @click="pushToDetail({id:'view'},row)">
         {{row.type}}
           </p>
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
import userMixin from "./useMixin";
import {window_open} from '@/utils/index'

export default {
  name: "memberList",
  mixins: [userMixin],
  components: { PageTitle, FormCombination, Table },
  data() {
    return {
      status: true,
      title:'',
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
        total: 0 /*总条数 通过 this.tableObj.total = 接口返回的总条数字段 api 请求*/,
        page: 1,
        head: [
          /*表头数据*/
          {
            label: "会员号码" /*标题*/,
            prop: "id" /*绑定数据源obj展示字段*/,
            fixed: "left" /*表头固定，参数：left / right / ''*/,
            width: "200" /*表头宽度*/,
            slot: true,  /*是否需要插槽*/
          },
          {
            label: "member.cardType" /*标题*/,
            prop: "cardType" /*绑定数据源obj展示字段*/,
            fixed: "left" /*表头固定，参数：left / right / ''*/,
            width: "160" /*表头宽度*/,
            slot: true,  /*是否需要插槽*/
          },
          {
            label: "头衔" /*标题*/,
            prop: "nikename" /*绑定数据源obj展示字段*/,
            fixed: "left" /*表头固定，参数：left / right / ''*/,
            width: "80" /*表头宽度*/,
            // slot: false,  /*是否需要插槽*/
          },
          {
            label: "member.username" /*标题*/,
            prop: "name" /*绑定数据源obj展示字段*/,
            fixed: "left" /*表头固定，参数：left / right / ''*/,
            width: "80" /*表头宽度*/,
            // slot: false,  /*是否需要插槽*/
          },
         
          {
            label: "member.sex" /*标题*/,
            prop: "sex" /*绑定数据源obj展示字段*/,
            width: "80" /*表头固定，参数：left / right / ''*/,
          },
          {
            label: "member.tel" /*标题*/,
            prop: "tel" /*绑定数据源obj展示字段*/,
            width: "" /*表头固定，参数：left / right / ''*/,
          },
          // {
          //   label: "是否优先联系秘书" /*标题*/,
          //   prop: "yes" /*绑定数据源obj展示字段*/,
          //   width: "140" /*表头宽度*/,
          //   // slot: false,  /*是否需要插槽*/
          // },
          // {
          //   label: "秘书姓名" /*标题*/,
          //   prop: "name" /*绑定数据源obj展示字段*/,
          //   width: "80" /*表头固定，参数：left / right / ''*/,
          // },
          // {
          //   label: "秘书电话" /*标题*/,
          //   prop: "tel" /*绑定数据源obj展示字段*/,
          //   width:'120'
          // },
          {
            label: "激活状态" /*标题*/,
            prop: "status" /*绑定数据源obj展示字段*/,
            width: "80" /*表头固定，参数：left / right / ''*/,
            slot: true /*表头宽度*/,
          },
          // {
          //   label: "查看订单详情" /*标题*/,
          //   prop: "orderView" /*绑定数据源obj展示字段*/,
          //   width: "140" /*表头固定，参数：left / right / ''*/,
          //   slot: true /*表头宽度*/,
          // },
        ],
        childrenHead: [
          /*子表头数组*/
        ],
        operationData: [
          {
            id: "edit" /*按钮ID*/,
            value: "编辑" /*按钮内容*/,
            classname: "" /*自定义class*/,
            disabled: false /*是否被禁用*/,
            type:
              "text" /*按钮类型 primary / success / warning / danger / info / text*/,
            size: "mini" /*按钮大小 medium / small / mini*/,
            icon: "el-icon-edit-outline" /*按钮icon*/,
          },
          {
            id: "view" /*按钮ID*/,
            value: "查看" /*按钮内容*/,
            classname: "" /*自定义class*/,
            disabled: false /*是否被禁用*/,
            type:
              "text" /*按钮类型 primary / success / warning / danger / info / text*/,
            size: "mini" /*按钮大小 medium / small / mini*/,
            icon: "el-icon-view" /*按钮icon*/,
          },
          {
            id: "view" /*按钮ID*/,
            value: "订单" /*按钮内容*/,
            classname: "" /*自定义class*/,
            disabled: false /*是否被禁用*/,
            type:
              "text" /*按钮类型 primary / success / warning / danger / info / text*/,
            size: "mini" /*按钮大小 medium / small / mini*/,
            icon: "el-icon-view" /*按钮icon*/,
          },
        
        ],
        childrenOperationData: [
          /*字表操作栏*/
        ],
        tableData: [{}],
      },
      formObj: {
        title: "",
        formproperties: {},
        formData: [
          /*TODO 控件配置数组*/
          {
            // 文本框
            id: "input" /*自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: "会员号码" /*todo 修改 控件label*/,
            value: "",
            hidelabels: true /*是否展示label标题*/,
            placeholder: "brandMessage",
            category: 0 /*todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            customParameters: "Product name" /*对应api的参数名称*/,
            classname: "" /*默认为空*/,
            classnameitem: "" /*默认为空*/,
          },
          {
            // 文本框
            id: "input" /*自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: "member.username" /*todo 修改 控件label*/,
            value: "",
            hidelabels: true /*是否展示label标题*/,
            placeholder: "brandMessage",
            category: 0 /*todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            customParameters: "Product name" /*对应api的参数名称*/,
            classname: "" /*默认为空*/,
            classnameitem: "" /*默认为空*/,
          },
          {
            // 文本框
            id: "input" /*自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: "member.tel" /*todo 修改 控件label*/,
            value: "",
            hidelabels: true /*是否展示label标题*/,
            placeholder: "brandMessage",
            category: 0 /*todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            customParameters: "Tel" /*对应api的参数名称*/,
            classname: "" /*默认为空*/,
            classnameitem: "" /*默认为空*/,
          },
          {
            // 下拉框本地取值
            id: "localDropDownBox" /*下拉框例子*/,
            label: "member.cardType" /*todo 修改 控件label*/,
            value: "",
            hidelabels: true /*是否展示label标题*/,
            disabled: false /*是否禁用 true 禁用 false 启用*/,
            placeholder: "Please select" /*todo 修改 placeholder 提示语*/,
            category: 1 /*todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            source: true /*todo 修改  true 本地数据 false 接口数据 必须get 请求 返回格式必须统一*/,
            options: [
              /*筛选 数据源*/ {
                value: 1,
                label: "成人会籍卡",
                disabled: false,
              },
              {
                value: 2 /*选中参数*/,
                label: "青少年会籍卡" /*选中标题*/,
                disabled: false /*选项是否禁用*/,
              },
            ],
            customParameters: "Select" /*对应api的参数名称*/,
            classname: "" /*默认为空*/,
            classnameitem: "" /*默认为空*/,
          },
         
          {
            // 文本框
            id: "input" /*自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: "秘书姓名" /*todo 修改 控件label*/,
            value: "",
            hidelabels: true /*是否展示label标题*/,
            placeholder: "brandMessage",
            category: 0 /*todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            customParameters: "mishuname" /*对应api的参数名称*/,
            classname: "" /*默认为空*/,
            classnameitem: "" /*默认为空*/,
          },
          {
            // 文本框
            id: "input" /*自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: "秘书电话" /*todo 修改 控件label*/,
            value: "",
            hidelabels: true /*是否展示label标题*/,
            placeholder: "brandMessage",
            category: 0 /*todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            customParameters: "mishuTel" /*对应api的参数名称*/,
            classname: "" /*默认为空*/,
            classnameitem: "" /*默认为空*/,
          },
          {
            // 文本框
            id: "input" /*自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: "公司名称" /*todo 修改 控件label*/,
            value: "",
            hidelabels: true /*是否展示label标题*/,
            placeholder: "brandMessage",
            category: 0 /*todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            customParameters: "mishuTel" /*对应api的参数名称*/,
            classname: "" /*默认为空*/,
            classnameitem: "" /*默认为空*/,
          },

          {
          "id": 'collape',/*自定义参数建议不重复 没有类型限制 建议用英文字母*/
          "label": "",/*todo 修改 控件label*/
          "value": "collape",
          "hidelabels": true, /*是否展示label标题*/
          "disabled": false, /*是否禁用 true 禁用 false 启用*/
          "placeholder": "Please select", /*todo 修改 placeholder 提示语*/
          "category": 7, /*todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/
          "type": "Filter-btn", /*todo 修改 按钮类型 Filter-btn / Search-btn 对应目前两种样式*/
          "size": "", /*按钮大小 medium / small / mini*/
          "icon": "el-icon-arrow-up",/*自定义icon，在 模糊搜索或按钮时候生效*/
          "classname": '', /*默认为空*/
          "classnameitem": '' /*默认为空*/
        }, {
          "id": 'Search1',/*自定义参数建议不重复 没有类型限制 建议用英文字母*/
          "label": "",/*todo 修改 控件label*/
          "value": "Search",
          "hidelabels": true, /*是否展示label标题*/
          "disabled": false, /*是否禁用 true 禁用 false 启用*/
          "placeholder": "Please select", /*todo 修改 placeholder 提示语*/
          "category": 7, /*todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/
          "activecolor": "",/*switch 开启颜色*/
          "inactivecolor": "",  /*switch 关闭颜色*/
          "type": "Search-btn", /*todo 修改 按钮类型 Filter-btn / Search-btn 对应目前两种样式*/
          "size": "", /*按钮大小 medium / small / mini*/
          "icon": "el-icon-search", /*自定义icon，在 模糊搜索或按钮时候生效*/
          "classname": '', /*默认为空*/
          "classnameitem": '' /*默认为空*/
        },
        ],
      },
      formObj1: {  /*TODO 组件数据集合*/
                "formproperties": {
                    "classname": "form-box",  /*自定义class参数，组合查询模糊搜索必须有 form-box*/
                },
                "formData": [/*TODO 控件配置数组*/{
                    "id": 0,  /*自定义参数建议不重复 没有类型限制 建议用英文字母*/
                    "label": "demo.page.singleLineTextBox", /*todo 修改 控件label*/
                    "value": "", /*todo 修改 控件 v-model 参数*/
                    "hidelabels": false, /*是否展示label标题*/
                    "disabled": false,  /*是否禁用 true 禁用 false 启用*/
                    "placeholder": "姓名搜索",  /*todo 修改 placeholder 提示语*/
                    "category": 0,  /*todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/
                    "iconChekc": true,  /*是否带icon 模糊搜索 icon搜索框一体时候使用*/
                    "classname": "", /*自定义class*/
                }, {
                    "id": 1,
                    "label": "",
                    "value": "展开",
                    "hidelabels": false,
                    "classname": "", /*自定义class*/
                    "message": "brandMessage",
                    "disabled": false,
                    "placeholder": "Please select",
                    "category": 8,
                    "type": "Filter-btn", /*todo 修改 按钮类型 Filter-btn / Search-btn 对应目前两种样式*/
                }],
                // "buttom": [{/*右侧展示按钮*/
                //     "id": 2,
                //     "value": "Batch Approval",
                //     "hidelabels": true,
                //     "message": "brandMessage",
                //     "category": 7,
                //     "type": "Filter-btn", /*按钮样式 */
                //     "icon": 'el-icon-coordinate', /*图标*/
                //     "customParameters": 3
                // }, {
                //     "id": 3,
                //     "value": "New",
                //     "hidelabels": true,
                //     "message": "brandMessage",
                //     "category": 7,
                //     "type": "Search-btn",
                //     "icon": 'el-icon-circle-plus-outline',
                //     "customParameters": 3
                // }]
            },
    };
  },
  created() {
    this.list(this.tableObj.page, this.tableObj.pageSize, "");
  },
  methods: {
    tabClose(data, v) {
      this.$store.commit("functionTabClose", {
        v: v,
        formObj1: this.formObj1,
        data: data,
        Callback: (response) => {
          v = response.v;
          this.formObj1 = response.formObj1;
          this.tabData = response.data;
        },
      });
    },
    list() {
      console.log(this.tableDataMock, "this.tableDataMock");
      let tableObj = this.tableObj;
      tableObj.tableData = this.tableDataMock;
    },
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
    submit(v, index, data, obj) {
      /*
       * TODO 参数：
       * TODO v：当前点击按钮本身参数
       * TODO index：当前点击按钮在集合的中的顺序
       * TODO data：获取当前集合所有参数（包含input框输入值value等）;
       * TODO obj key-value形式处理后数据 配合 customParameters
       *  */
      console.log(v, index, data, obj);

      if (v.id == 0) {
        this.$message("搜索");
        console.debug("搜索");
        /* getTableData({
                   value: v.value
                 })*/
      }

      if (v.id == 1) {
        this.title = "高级搜索展开样式";
        this.status = false;

        this.$store.commit("functionAmbiguity", {
          data: data,
          formObj1: this.formObj1,
          Callback: (response) => {
            this.formObj1 = response.formObj1;
          },
        });
        return "";
      }
      if (v.id == "collape") {
        this.title = this.$t("page.demo.fuzzySearch");
        this.status = true;
        this.tabData = [];
        this.$store.commit("functionTabData", {
          data: data,
          formObj: this.formObj,
          tabData: this.tabData,
          Callback: (response) => {
            this.formObj = response.formObj;
            this.tabData = response.tabData;
          },
        });
        return "";
      }
      // if (v.id == 2 || v.id == 10) {
      //   console.debug("批处理");
      //   this.$message(this.$t("page.demo.batchProcessing"));
      //   return "";
      // }
      // if (v.id == 3 || v.id == 11) {
      //   console.debug("新增");
      //   /* this.$router.push({
      //              path: '/Form'
      //            })*/
      //   window.open("/Form");
      //   return "";
      // }
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
          path: "/openCard",
          query: { type: v.id, data: JSON.stringify(row) },
        });
      }
      if (v.id == "view") {
        this.$router.push({
          path: "/openCard",
          query: { type: v.id, data: JSON.stringify(row) },
        });
      }
      // if (v.id == 13) {
      //   console.log("审批");
      //   this.$message("审批");
      // }
    },
  pushToDetail(v,row){
     this.$router.push({
          path: "/openCard",
          query: { type: v.id, data: JSON.stringify(row) },
        });
  },
    openCardFn() {
      console.log(111);
      this.$router.push({
        path: "/openCard",
        query: { type: 'add'},

      });
    },
    viewOrderFn(e) {
        window_open(e,'/orderManage/index',{},this.$router)
   
    },
  },
};
</script>

<style scoped>
.member-list {
}
</style>
