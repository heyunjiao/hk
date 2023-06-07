<template>
  <div class="tabel" style="">
    <div class="table" style="overflow:hidden;">
      <el-table
          row-key="webId"
          :border="false"
          :tree-props="tableObj.treeProps == 0 ? {} : {children: 'children', hasChildren: 'hasChildren'}"
          v-loading="loading"
          ref="multipleTable"
          :data="tableObj.tableData"
          @selection-change="handleSelectionChange"
          :summary-method="summaryMethod"
          :show-summary="tableObj.showSummary"
          :header-cell-style="tableObj.backgroundStyle || {background:'#133B29',color:'#fff'}"
          style="width: 100%">
        <el-table-column type="expand" v-if="tableObj.son">
          <template slot-scope="props">
            <div
                style="margin-left: 0px;box-shadow: 1px 5px 5px rgba(1,51,122,0.1400);border-radius: 8px;overflow:hidden; width: 100%;margin-right: 0;"
                class="">
              <el-table
                  :border="false"
                  :data="props.row.children"
                  :header-cell-style="{background:'#EEEEEE',color:'#686565'}"
                  :row-style="{'border-radius': '8px'}"
              >
                <el-table-column v-for="(z, zindex) in tableObj.childrenHead" :key="zindex"
                                 :label="$t(z.label)"
                                 :prop="z.prop">
                </el-table-column>
                <el-table-column v-if="tableObj.childrenOperation"
                                 :label="$t(tableObj.childrenOperationText)"
                                 :width="tableObj.childrenWidth">
                  <template slot-scope="{row, $index}">
                    <el-button v-for="(v, index) in tableObj.operationData" :icon="v.icon"
                               :size="v.size" :type="v.type"
                               :key="Number(index)" @click="rightBtn(v, $index, row)">{{
                        $t(v.value)
                      }}
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </template>
        </el-table-column>
        <!--                序号-->
        <el-table-column v-if="tableObj.indexStatus || false"
                         fixed
                         type="index"
                         width="50">
        </el-table-column>
        <!--        复选框-->
        <el-table-column v-if="tableObj.selectionStatus || false"
                         type="selection"
                         fixed
                         width="55">
        </el-table-column>
        <!--        icon-->
        <el-table-column v-if="tableObj.icon"
                         label="page.demo.icon"
                         width="50"
                         prop="icon">
          <template slot-scope="{row}">
            <i :class="row.icon"></i>
          </template>
        </el-table-column>

        <!-- 多级表头 -->

        <el-table-column v-for="(v, index) in activeFields" :key="index" :sortable="v.sortable" :prop="v.prop"
                         :fixed="v.fixed" :label="$t(v.label)" :width="v.width || ''">
          <template v-if="v.children">
            <el-table-column v-for="o in v.children" :show-overflow-tooltip="v.tooltip ? false : true"
                             :key="o.prop" :sortable="o.sortable" :prop="o.prop" :fixed="o.fixed"
                             :label="$t(o.label)" :width="o.width || ''">
              <template slot-scope="scope">
                <slot v-if="o.slot" :name="scope.column.property" :row="scope.row"
                      :$index="scope.$index">
                  {{ scope.column.property }}
                </slot>
                <span v-else>{{ scope.row[scope.column.property] }}</span>
              </template>
            </el-table-column>
          </template>
          <template slot-scope="scope">
            <slot v-if="v.slot" :name="scope.column.property" :row="scope.row" :$index="scope.$index">
              {{ scope.column.property }}
            </slot>
            <div v-else>
              <span v-if="scope.column.property.includes('VALUE')">
                <el-input size="mini" style="width: 120px" v-model="scope.row[scope.column.property]"></el-input>
              </span>
              <span v-else>{{ scope.row[scope.column.property] }}</span>
            </div>
          </template>
        </el-table-column>

        <!-- 审批status 开关 -->
        <el-table-column :label="$t('workflow.table.status')" v-if="[1,0].includes(approveStatusVisible)">
          <template slot-scope="scope">
            <el-switch
                v-model="scope.row.status"
                active-color="#00B38A"
                inactive-color="#999999"
                :active-value='0'
                :inactive-value='1'
                :disabled='true'
                :class="approveStatusVisible == 0 || ([3, 6].includes(scope.row.approvalStatus)) ?'switch-disabled' : ''"
                @click.native="changeIsNeedCaptcha(scope.row.status,scope.row)">
            </el-switch>
          </template>
        </el-table-column>

        <!-- 是否显示审批状态 approvalStatus -->
        <el-table-column :label="$t('workflow.table.approvalStatus')" v-if="approveStatusVisible == 1">
          <template slot-scope="scope">
            <p @click="skipApproval(scope.row)">
              <span
                  :style="[{color:scope.row.approvalStatus==0?'#c1c1c1':scope.row.approvalStatus==1?'#1890FF':scope.row.approvalStatus==2?'#FAAD14':scope.row.approvalStatus==3?
                  '#00B38A':scope.row.approvalStatus==4?'#EC826F':scope.row.approvalStatus==4?'#687E9E':''},{cursor: 'pointer'}]">{{
                  scope.row.approvalStatusDesc
                }}
              </span>
            </p>
          </template>
        </el-table-column>

        <!-- operation -->
        <el-table-column v-if="tableObj.operation" :label="$t(tableObj.operationText)" fixed="right"
                         style="text-align: center;" :width="tableObj.operationWidth">
          <template slot-scope="{row, $index}">
            <!-- 操作栏审批按钮 -->
            <span v-if="approveStatusVisible == 1">
                      <i v-if="[1].includes(row.approvalStatus) && approvalingList.includes(row.id)"
                         :title="$t('Approve')"
                         class="icon-btn-color iconfont shenhezhong" style="color: dodgerblue"
                         @click="approve(row)"></i>
                      <i v-if="[0,2,4,5].includes(row.approvalStatus)" :title="$t('Initiate')"
                         class="icon-btn-color iconfont faqishenpi" @click="initiate(row)"></i>
                      <i v-if="[1].includes(row.approvalStatus)" style="color: orange"
                         class="icon-btn-color iconfont chexiaoshenpi" @click="cancel(row)"
                          :title="$t('commen.demo.form.title')"></i>
                    </span>
            <!-- 操作栏 -->
            <el-button v-for="(v, index) in tableObj.operationData"
                       :disabled="v.disabled || (row.className == 'btn-disable' && v.classname) ||
                                (['edit','delete'].includes(v.id) && [1,3].includes(row.approvalStatus) && approveStatusVisible == 1 )"
                       :icon="v.icon" :size="v.size"
                       :type="v.type" :title="$t(v.title) || ''" :style="'color:'+v.color || ''"
                       :key="Number(index)"
                       :class="[index == 5 ? (row.className) : '' , (row.className && v.classname) ? row.className : '']"
                       class="btn-color"
                       @click.stop="rightBtn(v, $index, row, tableObj.tableData)">{{ $t(v.value) }}
            </el-button>
          </template>
        </el-table-column>

        <!--        heder自定义2.3需求-->
      </el-table>

      <!-- pageSize -->
      <div class="d-flex" style="justify-content: end;padding: 20px;background:#fff;"
           v-if="tableObj.paginationStatus || false">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4 || 1"
            :page-sizes="tableObj.pageSizes || [10, 20, 30, 40, 50]"
            :page-size="tableObj.pageSize || 10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableObj.total || 0">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import '@/config/ele/eleTips';
import '@/config/ele/tabel';
import {mapState} from 'vuex';

export default {
  name: "DataTable",
  props: ['Obj', 'handelSubmit', 'handleSelectionChangeCom', 'HandleCurrentChange', 'HandleSizeChange', 'initiateApprovalUrl', 'moduleName', 'params'],
  data() {
    return {
      loading: false,
      dialogVisibleHeaderCustom: false,
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: [],
      cityOptions: [],
      isIndeterminate: true,
      paramsTable: {},
      ids: [],
      approvalingList: [],
      statusVisible: false,
      decId: null,
      approveStatusVisible: null,
      dialogVisible: false,
      visible: false,
      textarea: '',
      currentPage4: 1,
      tableObj: {},
      row: {},
      initiateRow: {},
      initiateVisible: false,
      data: [{
        id: 1,
        name: 'ZhangSan'
      }, {
        id: 2,
        name: 'liSi'
      }]
    }
  },
  created() {
    this.tableObj = this.Obj;
    this.paramsTable = this.params;
    /*
    * let data = [{
    *   id: 1,
    * name: 'liMing',
    * value: 100
    * }, {
    *   id: 2,
    * name: 'liNing',
    * value: 200
    * }, ]
    * */
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
    HeaderCustomDetermine() {
      this.dialogVisibleHeaderCustom = false;
    },
    InputShow(v1) {
      let status = false;
      // console.debug(v1);
      this.tableObj.tableData.forEach((z) => {
        if (z.number == v1) {
          status = true;
        }
      })
      // status = typeof v1 == "number" ? true : false

      return status;
    },
    tableObjPropVmodel() {
      this.tableObj.tableData.forEach((item) => {
        this.$set(item, item.prop, '');
      })
    },
    Callback(params, prop) {
      /* params.Callback(params.data.reduce((obj, curr) => {
         obj[curr.customParameters] = curr.value;
         return obj;
       }, {}))*/
      let val = '';
      // console.debug(Object.keys(params), prop);
      Object.keys(params).forEach((f, index) => {
        if (f == prop) {
          val = Object.values(params)[index];
        }
      });

      return val;
    },
    rightBtn(v, index, row, list) {
      this.handelSubmit(v, index, row, list, this.paramsTable)
    },
    /* 此合计方法接受两个值,columns是列信息,data是行信息 */
    summaryMethod({columns, data}) {
      const sums = [];
      if (columns.length > 0) {
        columns.forEach((column, index) => {
          if ([0].includes(index)) {
            sums[index] = "合计";
          } else if ((this.tableObj.summaryExclude || []).includes(column.property)) {   // 写在此数组中的列不会被合计
            //过滤某些字段不参与计算
            sums[index] = "-";
          } else {
            let values = data.map((item) => Number(item[column.property]));
            if (!values.every((value) => isNaN(value))) {
              sums[index] = values.reduce((prev, curr) => {
                const value = Number(curr);
                if (!isNaN(value)) {
                  return prev + curr;
                } else {
                  return prev;
                }
              }, 0);
            }
          }
        });
      }
      return sums;
    },
    handleSizeChange(val) {
      console.debug(`每页 ${val} 条`);
      this.HandleSizeChange(val)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.HandleCurrentChange(val)
    },
    handleSelectionChange(val) {
      this.handleSelectionChangeCom(val)
    },
    toggleSelection() {
    },
    checkoutAll() {
      /*      this.$nextTick(() => {
              this.tableObj.tableData.forEach((f) => {
                this.$refs.multipleTable.toggleRowSelection(f, true);
              });
            })*/

    },
    handleReset() {
      this.$refs.multipleTable.clearSelection();
    },
    close() {
      this.visible = false;
      this.row = {};
    },
    handleClose() {
      this.dialogVisible = false;
      this.textarea = ''
    },
    skipApproval(row) {
      if (row.approvalStatus == 0) return
      this.decId = row.id;
      this.statusVisible = true;
      //this.$router.push({path: "approvalDec", query: {id: row.id}});
    },
    closeStatusVisible() {
      this.statusVisible = false;
    }
  },
  computed: {
    ...mapState({
      // loading: state => state.app.loading
    }),
    activeFields: function () {
      return this.Obj.head.filter((item) => {
        return item.multilingualProp ? item.visible : item;
      })
    }
  },
  mounted() {
  },
  watch: {
    'Obj': async function (New) {
      this.tableObj = New;
    },
    'Obj.tableData': async function (New) {
      if (New) {
        if (this.moduleName) {
          // await this.isApprove();
        }
        // this.$store.commit('loadingMethod', false)
      }
    },
    'params': async function (New) {
      this.paramsTable = New
    }
  }
}
</script>

<style scoped>
.icon-btn-color {
  margin-right: 10px;
  cursor: pointer;
  font-size: 14px;
}

.switch-disabled.el-switch.is-disabled {
  opacity: 1 !important;
}

::v-deep .switch-disabled.el-switch.is-disabled .el-switch__core,
::v-deep .switch-disabled.el-switch.is-disabled .el-switch__label {
  cursor: pointer !important;
}

/deep/ .el-table__expand-icon {
  width: 24px !important;
  height: 24px !important;
  background: #EEEEEE !important;
  border-radius: 50%;
  color: #999999;
  transition: .1s;
}

/deep/ .el-table__expand-icon--expanded {
  background: #133B29 !important;
  color: #fff;
}

/deep/ .table {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 9px 6px rgba(1, 51, 122, 0.14);
}

/deep/ .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #E3EEFD !important;
  color: #0D7BFF !important;
}

/deep/ .btn-color {
  color: #133B29;
}

/deep/ .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #E3EEFD !important;
  color: #133B29 !important;
}

/deep/ table .el-table__row:last-child td {
  border-bottom: none !important;
}

/deep/ .el-table th.el-table__cell > .cell {
  text-align: center !important;
}

/deep/ .el-table td.el-table__cell div {
  text-align: center !important;
}

/deep/ .el-table__expand-icon--expanded {
  /*width: auto !important;*/
  /*height: auto !important;*/
  background: none !important;
  color: #000;
}

/deep/ .el-table__expand-icon {
  background: none !important;
}

/*表格突然出现边框兼容处理*/
/deep/ .is-leaf {
  border: none !important;
}

/deep/ .el-table__cell {
  border-right: none !important;
}

/*********************/
</style>
