<template>
  <div class="member-list">
    <div class="page-title">
      <PageTitle title="useCommonAll.memberManage">
        <template slot="btn">
          <el-button size="large" type="primary" @click="openCardFn">{{
            $t("useCommonAll.createMember")
          }}</el-button>
        </template>
      </PageTitle>
    </div>
    <div class="search-form">
      <FormCombination
        v-show="!status"
        :form-obj="formObj"
        :handel-submit="submit"
      />
      <FormCombination
        v-show="status"
        :form-obj="formObj1"
        :tab-data="tabData"
        :tab-close="tabClose"
        :handel-submit="submit"
      />
    </div>

    <div class="table-list">
      <div>
        <!--table表格-->
        <Table
          :obj="tableObj"
          :handel-submit="operationSubmit"
          :handle-size-change="HandleSizeChange"
          :handle-current-change="HandleCurrentChange"
        >
          <template slot="cardCount" scope="{row}">
            <span>{{ row.cardCount ? row.cardCount : "-" }}</span>
          </template>
          <template slot="status" scope="{row}">
            <p v-if="!row.status">
              <el-switch
                :value="row.status"
                @change="memberStatusChange(row)"
              />
            </p>
            <p v-else>已激活</p>
          </template>

          <template slot="number" scope="{row}">
            <p
              class="a_link"
              href="#"
              @click="() => pushToDetail({ id: 'view' }, row)"
            >
              {{ row.number }}
            </p>
          </template>
          <template slot="memberCardInfo" scope="{row}">
            <p
              class="a_link"
              href="#"
              @click="pushToDetail({ id: 'view' }, row)"
            >
              {{ row.memberCardInfo.title  }}
            </p>
          </template>
        </Table>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/componentsHK/public/PageTitle.vue'
import FormCombination from '@/componentsHK/public/FormCombination.vue'
import Table from '@/componentsHK/public/Tabel'
import tableMixins from '@/mixins/tableMixins'
import { GetCustomerList, ActivateCustomer,GetMemberCardList } from '@/api/member'
import { window_open } from '@/utils/index'
import selectOption from '@/views/global-data/selectOption'
export default {
  name: 'MemberList',
  components: { PageTitle, FormCombination, Table },
  filters: {
    // formatCardType: (value) => {
    //   switch (value) {
    //     case 1:
    //       return '家庭卡'
    //       break

    //     case 2:
    //       return '青少年卡'
    //       break

    //     default:
    //       break
    //   }
    // }

  },
  mixins: [tableMixins],
  data() {
    return {
      cardTypeList:[],
      status: true,
      title: '',
      tabData: [],
      url: {
        getListUrl: GetCustomerList
      },
      tableObj: {
        treeProps: {
          children: 'customerSubList'
        },
        son: false /* 是否有子级表单*/,
        operation: true /* 是否展示操作按钮功能*/,
        childrenOperation: true /* 是否展示子表操作按钮功能*/,
        operationText: 'operation' /* 操作栏标题*/,
        selectionStatus: false /* 是否需要复选框*/,
        childrenOperationText: 'operation' /* 子表操作栏标题*/,
        paginationStatus: true /* 是否启用分页组件*/,
        operationWidth: '200',
        total: 0 /* 总条数 通过 this.tableObj.total = 接口返回的总条数字段 api 请求*/,
        page: 1,
        pageSize: 10,
        head: [
          {
            label: '' /* 标题*/,
            prop: 'index' /* 绑定数据源obj展示字段*/,
            fixed: 'left' /* 表头固定，参数：left / right / ''*/,
            width: '50' /* 表头宽度*/
          },
          /* 表头数据*/
          {
            label: 'useCommonAll.memberNumber' /* 标题*/,
            prop: 'number' /* 绑定数据源obj展示字段*/,
            fixed: 'left' /* 表头固定，参数：left / right / ''*/,
            slot: true /* 是否需要插槽*/
          },
          {
            label: 'useCommonAll.memberCardType' /* 标题*/,
            prop: 'memberCardInfo' /* 绑定数据源obj展示字段*/,
            width: '160' /* 表头宽度*/,
            slot: true /* 是否需要插槽*/
          },
          {
            label: 'useCommonAll.memberTitle' /* 标题*/,
            prop: 'title' /* 绑定数据源obj展示字段*/,
            width: '80' /* 表头宽度*/
            // slot: false,  /*是否需要插槽*/
          },
          {
            label: 'useCommonAll.name' /* 标题*/,
            prop: 'name' /* 绑定数据源obj展示字段*/,
            width: '80' /* 表头宽度*/
            // slot: false,  /*是否需要插槽*/
          },

          {
            label: 'useCommonAll.sex' /* 标题*/,
            prop: 'gender' /* 绑定数据源obj展示字段*/,
            width: '80' /* 表头固定，参数：left / right / ''*/

          },
          {
            label: 'useCommonAll.phone' /* 标题*/,
            prop: 'contactPhone' /* 绑定数据源obj展示字段*/,
            width: '' /* 表头固定，参数：left / right / ''*/
          },
          {
            label: 'useCommonAll.email' /* 标题*/,
            prop: 'email' /* 绑定数据源obj展示字段*/,
            width: '' /* 表头固定，参数：left / right / ''*/
          },
          {
            label: 'useCommonAll.cardNumber' /* 标题*/,
            prop: 'cardCount' /* 绑定数据源obj展示字段*/,
            width: '130px' /* 表头固定，参数：left / right / ''*/,
            slot: true
          },

          {
            label: 'useCommonAll.activationStatus' /* 标题*/,
            prop: 'status' /* 绑定数据源obj展示字段*/,
            slot: true /* 表头宽度*/
          }
        ],
        childrenHead: [],
        operationData: [
          {
            id: 'edit' /* 按钮ID*/,
            value: 'useCommonAll.edit' /* 按钮内容*/,
            classname: '' /* 自定义class*/,
            disabled: false /* 是否被禁用*/,
            type:
              'text' /* 按钮类型 primary / success / warning / danger / info / text*/,
            size: 'mini' /* 按钮大小 medium / small / mini*/,
            icon: 'el-icon-edit-outline' /* 按钮icon*/
          },
          {
            id: 'view' /* 按钮ID*/,
            value: 'useCommonAll.view' /* 按钮内容*/,
            classname: '' /* 自定义class*/,
            disabled: false /* 是否被禁用*/,
            type:
              'text' /* 按钮类型 primary / success / warning / danger / info / text*/,
            size: 'mini' /* 按钮大小 medium / small / mini*/,
            icon: 'el-icon-view' /* 按钮icon*/
          },
          {
            id: 'order' /* 按钮ID*/,
            value: 'useCommonAll.order' /* 按钮内容*/,
            classname: '' /* 自定义class*/,
            disabled: false /* 是否被禁用*/,
            type:
              'text' /* 按钮类型 primary / success / warning / danger / info / text*/,
            size: 'mini' /* 按钮大小 medium / small / mini*/,
            icon: 'el-icon-view' /* 按钮icon*/
          }
        ],
        childrenOperationData: [
          /* 字表操作栏*/
        ],
        tableData: []
      },
      formObj: {
        title: '',
        formproperties: {},
        formData: [
          /* TODO 控件配置数组*/
          {
            // 文本框
            id: 'input' /* 自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: 'useCommonAll.memberNumber' /* todo 修改 控件label*/,
            value: '',
            hidelabels: true /* 是否展示label标题*/,
            placeholder: 'commen.brandMessage',
            category: 0 /* todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            customParameters: 'number' /* 对应api的参数名称*/,
            classname: '' /* 默认为空*/,
            classnameitem: '' /* 默认为空*/
          },
          {
            // 文本框
            id: 'input' /* 自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: 'useCommonAll.name' /* todo 修改 控件label*/,
            value: '',
            hidelabels: true /* 是否展示label标题*/,
            placeholder: 'commen.brandMessage',
            category: 0 /* todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            customParameters: 'name' /* 对应api的参数名称*/,
            classname: '' /* 默认为空*/,
            classnameitem: '' /* 默认为空*/
          },
          {
            // 文本框
            id: 'input' /* 自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: 'useCommonAll.phone' /* todo 修改 控件label*/,
            value: '',
            hidelabels: true /* 是否展示label标题*/,
            placeholder: 'commen.brandMessage',
            category: 0 /* todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            customParameters: 'contactPhone' /* 对应api的参数名称*/,
            classname: '' /* 默认为空*/,
            classnameitem: '' /* 默认为空*/
          },
          {
            
            id: 'localDropDownBox' /* 下拉框例子*/,
            label: 'useCommonAll.memberCardType' /* todo 修改 控件label*/,
            value: '',
            hidelabels: true /* 是否展示label标题*/,
            disabled: false /* 是否禁用 true 禁用 false 启用*/,
            placeholder: 'commen.brandMessage' /* todo 修改 placeholder 提示语*/,
            category: 1 /* todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            source: true /* todo 修改  true 本地数据 false 接口数据 必须get 请求 返回格式必须统一*/,
            customParameters: 'memberCardID' /* 对应api的参数名称*/,
            classname: '' /* 默认为空*/,
            classnameitem: '' /* 默认为空*/,
            "apiUrl": "/Customer/GetMemberCardList",
            "source": false,
            key:'title',
            val:'id'
          },

          {
            // 文本框
            id: 'input' /* 自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: 'useCommonAll.secretaryName' /* todo 修改 控件label*/,
            value: '',
            hidelabels: true /* 是否展示label标题*/,
            placeholder: 'commen.brandMessage',
            category: 0 /* todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            customParameters: 'secName' /* 对应api的参数名称*/,
            classname: '' /* 默认为空*/,
            classnameitem: '' /* 默认为空*/
          },
          {
            // 文本框
            id: 'input' /* 自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: 'useCommonAll.secretaryPhone' /* todo 修改 控件label*/,
            value: '',
            hidelabels: true /* 是否展示label标题*/,
            placeholder: 'commen.brandMessage',
            category: 0 /* todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            customParameters: 'secPhone' /* 对应api的参数名称*/,
            classname: '' /* 默认为空*/,
            classnameitem: '' /* 默认为空*/
          },
          {
            // 文本框
            id: 'input' /* 自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: 'useCommonAll.conmpanyName' /* todo 修改 控件label*/,
            value: '',
            hidelabels: true /* 是否展示label标题*/,
            placeholder: 'commen.brandMessage',
            category: 0 /* todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            customParameters: 'companyName' /* 对应api的参数名称*/,
            classname: '' /* 默认为空*/,
            classnameitem: '' /* 默认为空*/
          },

          {
            id: 'collape' /* 自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: '' /* todo 修改 控件label*/,
            value: 'useCommonAll.fold',
            hidelabels: true /* 是否展示label标题*/,
            disabled: false /* 是否禁用 true 禁用 false 启用*/,
            placeholder: 'commen.brandMessage' /* todo 修改 placeholder 提示语*/,
            category: 7 /* todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            type:
              'Filter-btn' /* todo 修改 按钮类型 Filter-btn / Search-btn 对应目前两种样式*/,
            size: '' /* 按钮大小 medium / small / mini*/,
            icon: 'el-icon-arrow-up' /* 自定义icon，在 模糊搜索或按钮时候生效*/,
            classname: '' /* 默认为空*/,
            classnameitem: '' /* 默认为空*/
          },
          {
            id: 'Search' /* 自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: '' /* todo 修改 控件label*/,
            value: 'Search',
            hidelabels: true /* 是否展示label标题*/,
            disabled: false /* 是否禁用 true 禁用 false 启用*/,
            placeholder: 'commen.brandMessage' /* todo 修改 placeholder 提示语*/,
            category: 7 /* todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            activecolor: '' /* switch 开启颜色*/,
            inactivecolor: '' /* switch 关闭颜色*/,
            type:
              'Search-btn' /* todo 修改 按钮类型 Filter-btn / Search-btn 对应目前两种样式*/,
            size: '' /* 按钮大小 medium / small / mini*/,
            icon: 'el-icon-search' /* 自定义icon，在 模糊搜索或按钮时候生效*/,
            classname: '' /* 默认为空*/,
            classnameitem: '' /* 默认为空*/
          }
        ]
      },
      formObj1: {
        /* TODO 组件数据集合*/
        formproperties: {
          classname:
            'form-box' /* 自定义class参数，组合查询模糊搜索必须有 form-box*/
        },
        formData: [
          /* TODO 控件配置数组*/ {
            id: 0 /* 自定义参数建议不重复 没有类型限制 建议用英文字母*/,
            label: 'demo.page.singleLineTextBox' /* todo 修改 控件label*/,
            value: '' /* todo 修改 控件 v-model 参数*/,
            hidelabels: false /* 是否展示label标题*/,
            disabled: false /* 是否禁用 true 禁用 false 启用*/,
            placeholder:
              'useCommonAll.memberNumber' /* todo 修改 placeholder 提示语*/,
            category: 0 /* todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/,
            iconChekc: true /* 是否带icon 模糊搜索 icon搜索框一体时候使用*/,
            classname: '' /* 自定义class*/,
            customParameters: 'number' /* 对应api的参数名称*/
          },
          {
            id: 1,
            label: '',
            value: 'useCommonAll.expand',
            hidelabels: false,
            classname: '' /* 自定义class*/,
            message: 'brandMessage',
            disabled: false,
            placeholder: 'Please select',
            category: 8,
            type:
              'Filter-btn' /* todo 修改 按钮类型 Filter-btn / Search-btn 对应目前两种样式*/
          }
        ]
      }
    }
  },
  created() {
    this.list(this.tableObj.page, this.tableObj.pageSize, '')
    // this.getCradList()
  },
  methods: {
      getCradList() {
      GetMemberCardList().then((res) => {
        res.result.forEach((i) => {
          i["label"] = i.title;
          i["value"] = i.id;
          i["disabled"] = false;
        });
        this.cardTypeList = res.result;
        
      });
    },
  
    // tablecao'z操作按钮设置
    operationSubmit(v, index, row) {
      /*
       * v：当前点击按钮内容
       * index：当前点击行数索引
       * row：当前点击行数对象*/
      console.log(v, index, row)
      if (v.id == 'edit') {
        this.$router.push({
          path: '/memberManage/openCard',
          query: { type: v.id, id:row.id }
        })
      }
      if (v.id == 'view') {
        this.$router.push({
          path: '/memberManage/openCard',
          query: { type: v.id,id:row.id}
        })
      }
      if (v.id == 'order') {
        this.$router.push({
          path: '/orderManage/index',
          query: { name: row.name }
        })
      }
      // if (v.id == 13) {
      //   console.log("审批");
      //   this.$message("审批");
      // }
    },
    pushToDetail(v, row) {
      this.$router.push({
        path: '/memberManage/openCard',
        query: { type: v.id,id:row.id}
      })
    },
    openCardFn() {
      console.log(111)
      this.$router.push({
        path: '/memberManage/openCard',
        query: { type: 'add' }
      })
    },

    viewOrderFn(e) {
      window_open(e, '/orderManage/index', {}, this.$router)
    },
    memberStatusChange(v) {
      this.$confirm(
        this.$t('useCommonAll.isActivate'),
        this.$t('useCommonAll.prompt'),
        {
          confirmButtonText: this.$t('useCommonAll.ok'),
          cancelButtonText: this.$t('useCommonAll.cancel'),
          type: 'warning'
        }
      )
        .then(async() => {
          const res = await ActivateCustomer({ customerId: v.id })
          this.$message({
            type: 'success',
            message: this.$t('useCommonAll.operatorSuciscess')
          })
          this.list()
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: this.$t('useCommonAll.canceledOperator')
          })
        })
    }
  }
}
</script>

<style scoped>
.member-list {
}
</style>
