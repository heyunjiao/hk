/*
 * @Descripttion:
 * @Author: pz.w
 * @Date: 2021-05-24 20:15:03
 */
import { asyncConfirm } from '@/utils/asyncConfirm'
const orderMap = {
  ascending: 'asc',
  descending: 'desc'
}
export default {
  data() {
    return {
      multipleSelection: [],
      sortParams: {
        order: '',
        prop: ''
      },
      pageFilters: {
        'pageNum': 1,
        'pageSize': 10
      }
    }
  },
  methods: {
    tabClose(data, v) {
      this.$store.commit('functionTabClose', {
        v: v,
        formObj1: this.formObj,
        data: data,
        Callback: (response) => {
          v = response.v
          this.formObj = response.formObj1
          this.tabData = response.data
        }
      })
    },
    // 排序
    sortChange(sObj) {
      const { order, prop } = sObj
      this.sortParams = { order, prop }
      this.handleSearch()
    },
    // 获取数据列表
    async list(data) {
      const params = {
        ...this.searchParams,
        ...this.pageFilters,
        ...data,
        ...this.url?.otherParam
      }
      //   if (this.paramsIdName) {
      //     // 详情列表
      //     params[this.paramsIdName] = this.detailid;
      //   }

      const res = await this.url.getListUrl(params)
      if (res.code === 200) {
        // if (res.data instanceof Array) {
        //   // 不分页数据
        //   this.tableData = res.data;
        // } else {
        this.tableObj.tableData = res.result.dataList
        // }
        this.tableObj.totalCount = res.result.totalCount || 0
      }
    },

    HandleCurrentChange(val) {
      /* 当前页*/
      console.debug(val)
      this.tableObj.page = val
      this.list()
    },
    HandleSizeChange(val) {
      /* 每页多少条*/
      console.debug(val)
      this.tableObj.page = 1
      this.tableObj.pageSize = val
      this.list()
    },
    handleSelectionChangeCom(val) {
      /* 复选框选中事件*/
      console.debug(val)
    },
    submit(v, index, data, obj) {
      console.log(v, index, data, obj)

      if (v.id == 0 || v.id === 'Search') {
        // 单个模糊搜索
        this.list(obj)
      }

      if (v.id == 1) {
        this.status = false
        this.$store.commit('functionAmbiguity', {
          data: data,
          formObj1: this.formObj,
          Callback: (response) => {
            this.formObj = response.formObj1
          }
        })

        return ''
      }
      if (v.id == 'collape') {
        this.status = true
        this.tabData = []
        this.$store.commit('functionTabData', {
          data: data,
          formObj: this.formObj1,
          tabData: this.tabData,
          Callback: (response) => {
            // console.log(response,'response');
            this.formObj1 = response.formObj
            this.tabData = response.tabData
          }
        })
        return ''
      }
    },

    // // 搜索
    // handleSearch() {
    //   let { order, prop } = this.sortParams;
    //   this.pageFilters = {
    //     page: 1,
    //     limit: 10,
    //     count: 0
    //   },
    //     this.pageFilters = Object.assign(this.pageFilters, { ...this.searchParams, sorted: prop || undefined, ordered: orderMap[order] || undefined });
    //   this.getList();
    // },
    // /**
    //    * 时间搜索
    //    * dateArr 时间数组
    //    * start 开始时间字段
    //    * start 结束时间字段
    //    */
    // searchChangeDate(dateArr, start, end) {
    //   let date = dateArr[0] || [];
    //   this.searchParams[start] = date[0];
    //   this.searchParams[end] = date[1];
    // },
    // // 多选
    // handleSelectionChange(val) {
    //   this.multipleSelection = val
    // },
    // 删除
    handleDel(ids, method, param) {
      if (method === 'post') {
        asyncConfirm({ con: '是否确定删除？' }, async (done, instance) => {
          await this.$api.post(this.pageApi.delApi, param).catch(e => { })
          instance.confirmButtonLoading = false
          done()
          this.$resetCurPage(this)
          this.getList()
        })
      } else {
        asyncConfirm({ con: '是否确定删除？' }, async (done, instance) => {
          await this.$api.delete(`${this.pageApi.delApi}?id=${ids}`).catch(e => { })
          instance.confirmButtonLoading = false
          done()
          this.$resetCurPage(this)
          this.getList()
        })
      }
    }

  }
}
