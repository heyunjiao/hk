<template>
    <div class="demo">
        <div style="margin-bottom: 30px;"><!--标题-->
            <PageTitle title="number"/>
        </div>
        <div><!--组合查询-->
            <div><!--模糊搜索-->
                <FormCombination :formObj="formObj" v-show="status" :tabData="tabData" :tabClose="tabClose"
                                 :handelSubmit="submit"/>
                <FormCombination :formObj="formObj1" v-show="!status" :handelSubmit="submit"/>
                <!--
                  TODO 组件使用方式：
                  formObj：组件数据源
                  v-show：组件显示隐藏（配合高级搜索与模糊搜索切换）
                  handelSubmit：组件事件方法
                -->
            </div>
        </div>
        <!--table表格-->
        <div>
            <Tabel :Obj="tableObj" :handelSubmit="operationSubmit" :HandleSizeChange="HandleSizeChange"
                   :handleSelectionChangeCom="handleSelectionChangeCom"
                   :HandleCurrentChange="HandleCurrentChange">
                <template slot="status" scope="{row}"><!--switch控件插槽-->
                    <el-switch
                            v-model="row.status"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                    </el-switch>
                </template>
                <template slot="localDropDownBox" scope="{row}"> <!--下拉框控件插槽-->
                    <el-select v-model="row.localDropDownBox" clearable placeholder="请选择">
                        <el-option
                                v-for="item in [{value: 1, label: '选项1'}]"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </template>
                <template slot="singleLineTextBox" scope="{row}"> <!--输入框控件插槽-->
                    <el-input
                            placeholder="请输入内容"
                            v-model="row.singleLineTextBox"
                            clearable>
                    </el-input>
                </template>
                <template slot="icon" scope="{row}"><!--icon图标控件插槽-->
                    {{ row.icon }}
                    <i class="el-icon-s-tools" style="font-size: 24px;"></i>
                </template>
                <template slot="type" scope="{row}"><!--文字下划线样式控件插槽-->
                    <p style="border-bottom: 2px solid;line-height: 20px;display: inline-block"
                       :style="row.type ? 'color: #5E9CFF;border-color: #5E9CFF;' : 'color: #EC8674;border-color: #EC8674;'">
                        {{ row.type ? $t('demo.page.approve') : $t('demo.page.Refuse') }}</p>
                </template>
            </Tabel>
        </div>
        <div style="margin-top: 20px;">
            <Tabel :obj="tableObj1"/>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/componentsHK/public/PageTitle';
import FormCombination from '@/componentsHK/public/FormCombination';
import Tabel from '@/componentsHK/public/Tabel';

export default {
    name: 'demoPage',
    components: {PageTitle, FormCombination, Tabel},
    data() {
        //模糊搜索-未编辑
        return {
           
            title: '模糊搜索-未编辑',
            status: true,
            tabData: [],
            formObj: {  /*TODO 组件数据集合*/
                "formproperties": {
                    "classname": "form-box",  /*自定义class参数，组合查询模糊搜索必须有 form-box*/
                },
                "formData": [/*TODO 控件配置数组*/{
                    "id": 0,  /*自定义参数建议不重复 没有类型限制 建议用英文字母*/
                    "label": "demo.page.singleLineTextBox", /*todo 修改 控件label*/
                    "value": "", /*todo 修改 控件 v-model 参数*/
                    "hidelabels": false, /*是否展示label标题*/
                    "disabled": false,  /*是否禁用 true 禁用 false 启用*/
                    "placeholder": "brandMessage",  /*todo 修改 placeholder 提示语*/
                    "category": 0,  /*todo 修改  (0: input), (1: select), (2: radio), (3: checkbox 多选)， (4: timePicker 时间选择器)， (5: datePicker 日期选择器)， (6: switch 开关)，(7: 按钮)，（8：）*/
                    "iconChekc": true,  /*是否带icon 模糊搜索 icon搜索框一体时候使用*/
                    "classname": "", /*自定义class*/
                }, {
                    "id": 1,
                    "label": "",
                    "value": "Filter",
                    "hidelabels": false,
                    "classname": "", /*自定义class*/
                    "message": "brandMessage",
                    "disabled": false,
                    "placeholder": "Please select",
                    "category": 8,
                    "type": "Filter-btn", /*todo 修改 按钮类型 Filter-btn / Search-btn 对应目前两种样式*/
                }],
                "buttom": [{/*右侧展示按钮*/
                    "id": 2,
                    "value": "Batch Approval",
                    "hidelabels": true,
                    "message": "brandMessage",
                    "category": 7,
                    "type": "Filter-btn", /*按钮样式 */
                    "icon": 'el-icon-coordinate', /*图标*/
                    "customParameters": 3
                }, {
                    "id": 3,
                    "value": "New",
                    "hidelabels": true,
                    "message": "brandMessage",
                    "category": 7,
                    "type": "Search-btn",
                    "icon": 'el-icon-circle-plus-outline',
                    "customParameters": 3
                }]
            },
            formObj1: {
                "title": "",
                "formproperties": {},
                "formData": [
                    {
                        "id": 1,
                        "label": "demo.page.singleLineTextBox",
                        "value": "",
                        "hidelabels": true,
                        "message": "brandMessage",
                        "placeholder": "brandMessage",
                        "category": 0,
                        "customParameters": "TextBox",  /*自定义参数 可设置为提交接口参数的key 提交事件之后根据自定义参数返回 */
                        "classname": '',
                        "classnameitem": ''
                    }, {
                        "id": 2,
                        "label": "page.demo.valueInputBox",
                        "value": "",
                        "type": "number", /*控件类型， 根据原生*/
                        "hidelabels": true,
                        "message": "brandMessage",
                        "placeholder": "brandMessage",
                        "category": 0,
                        "customParameters": "code1",
                        "classname": '',
                        "classnameitem": ''
                    }, {
                        "id": 3,
                        "label": "page.demo.localDropDownBox",
                        "value": "",
                        "hidelabels": true,
                        "message": "brandMessage",
                        "disabled": false,
                        "placeholder": "Please select",
                        "category": 1,
                        "source": true, /*todo 修改  true 本地数据 false 接口数据 必须get 请求 返回格式必须统一*/
                        "apiUrl": "",/*接口api*/
                        "key": "",  /*TODO 筛选框  给用户展示的字段根据接口定义 label*/
                        "val": "",  /*TODO 筛选框  服务端所需字段根据接口定义 接口参数key*/
                        "options": [  /*筛选 数据源*/
                            {"value": 1, "label": "Option 1", "disabled": false}, {
                                "value": 2, /*选中参数*/
                                "label": "Option 2",  /*选中标题*/
                                "disabled": false /*选项是否禁用*/
                            }],
                        "customParameters": "Select",
                        "classname": '',
                        "classnameitem": ''
                    }, {
                        "id": 4,
                        "label": "page.demo.apiDropDownBox",
                        "value": "",
                        "hidelabels": true,
                        "message": "brandMessage",
                        "disabled": false,
                        "placeholder": "Please select",
                        "category": 1,
                        "source": false,
                        "apiUrl": "/process/product/selectAll",
                        "key": "name",
                        "val": "id",
                        "options": [],
                        "customParameters": "apiSelect",
                        "classname": '',
                        "classnameitem": ''
                    }, {
                        "id": 5,
                        "span": 24,
                        "label": "page.demo.timeSelection",
                        "value": "",
                        "hidelabels": true,
                        "message": "brandMessage",
                        "disabled": false,
                        "placeholder": "Please select",
                        "category": 4,
                        "format": "HH:mm:ss", /*显示在输入框中的格式*/
                        "customParameters": "TimeSelection",
                        "classname": '',
                        "classnameitem": ''
                    }, {
                        "id": 6,
                        "label": "page.demo.dateSelection",
                        "value": "",
                        "type": "date", /*TODO 控件类型 date 单选日期， daterange 日期区间选择， datetime 日期时间选择*/
                        "hidelabels": true,
                        "message": "date",
                        "disabled": false,
                        "placeholder": "Please select",
                        "category": 5,
                        "format": "yyyy-MM-dd",
                        "customParameters": "DateSelection",
                        "classname": '',
                        "classnameitem": ''
                    }, {
                        "id": 7,
                        "label": "page.demo.dateRangeSelection",
                        "value": "",
                        "type": "daterange",
                        "hidelabels": true,
                        "message": "brandMessage",
                        "disabled": false,
                        "placeholder": "Please select",
                        "category": 5,
                        "format": "yyyy-MM-dd",
                        "customParameters": "DateRangeSelection",
                        "classname": '',
                        "classnameitem": ''
                    }, {
                        "id": 'collape',
                        "label": "",
                        "value": "collape",
                        "hidelabels": true,
                        "message": "brandMessage",
                        "disabled": false,
                        "placeholder": "Please select",
                        "category": 7,
                        "type": "Filter-btn",
                        "size": "",
                        "icon": "el-icon-arrow-up",
                        "classname": '',
                        "classnameitem": ''
                    }, {
                        "id": 9,
                        "label": "",
                        "value": "Search",
                        "hidelabels": true,
                        "message": "brandMessage",
                        "disabled": false,
                        "placeholder": "Please select",
                        "category": 7,
                        "activecolor": "",/*switch 开启颜色*/
                        "inactivecolor": "",  /*switch 关闭颜色*/
                        "type": "Search-btn",
                        "size": "",
                        "icon": "el-icon-search",
                        "classname": '',
                        "classnameitem": ''
                    }, {
                        "id": 10,
                        "label": "",
                        "value": "Batch Approval",
                        "hidelabels": true,
                        "message": "brandMessage",
                        "disabled": false,
                        "placeholder": "Please select",
                        "category": 7,
                        "activecolor": "",/*switch 开启颜色*/
                        "inactivecolor": "",  /*switch 关闭颜色*/
                        "type": "Filter-btn",
                        "size": "",
                        "icon": "el-icon-coordinate",
                        "classname": '',
                        "classnameitem": ''
                    }, {
                        "id": 11,
                        "label": "",
                        "value": "New",
                        "hidelabels": true,
                        "message": "brandMessage",
                        "disabled": false,
                        "placeholder": "Please select",
                        "category": 7,
                        "activecolor": "",/*switch 开启颜色*/
                        "inactivecolor": "",  /*switch 关闭颜色*/
                        "type": "Search-btn",
                        "size": "",
                        "icon": "el-icon-circle-plus-outline",
                        "classname": '',
                        "classnameitem": ''
                    }]
            },
            tableObj: {
                son: false, /*是否有子级表单*/
                operation: true,  /*是否展示操作按钮功能*/
                childrenOperation: true, /*是否展示子表操作按钮功能*/
                operationText: 'operation', /*操作栏标题*/
                selectionStatus: true,  /*是否需要复选框*/
                childrenOperationText: 'operation', /*子表操作栏标题*/
                paginationStatus: true, /*是否启用分页组件*/
                operationWidth: '200',
                total: 0, /*总条数 通过 this.tableObj.total = 接口返回的总条数字段 api 请求*/
                page: 1,
                head: [ /*表头数据*/
                    {
                        label: 'commen.title',  /*标题*/
                        prop: 'name',/*绑定数据源obj展示字段*/
                        fixed: 'left',  /*表头固定，参数：left / right / ''*/
                        width: '180', /*表头宽度*/
                        // slot: false,  /*是否需要插槽*/
                    }, {
                        label: 'commen.demo.page.id',/*标题*/
                        prop: 'id',/*绑定数据源obj展示字段*/
                        width: ''/*表头固定，参数：left / right / ''*/
                    }, {
                        label: 'page.demo.approvalStatus',/*标题*/
                        prop: 'type',/*绑定数据源obj展示字段*/
                        width: '80',/*表头固定，参数：left / right / ''*/
                        slot: true/*表头宽度*/
                    }, {
                        label: 'page.demo.workshop',/*标题*/
                        prop: 'workshop',/*绑定数据源obj展示字段*/
                    }, {
                        label: 'page.demo.section',/*标题*/
                        prop: 'section',/*绑定数据源obj展示字段*/
                    }, {
                        label: 'page.demo.enable',/*标题*/
                        prop: 'status',/*绑定数据源obj展示字段*/
                        width: '80',/*表头固定，参数：left / right / ''*/
                        slot: true/*表头宽度*/
                    }, {
                        label: 'page.demo.localDropDownBox',/*标题*/
                        prop: 'localDropDownBox',/*绑定数据源obj展示字段*/
                        width: '180',/*表头固定，参数：left / right / ''*/
                        slot: true/*表头宽度*/
                    }, {
                        label: 'demo.page.singleLineTextBox',/*标题*/
                        prop: 'singleLineTextBox',/*绑定数据源obj展示字段*/
                        width: '180',/*表头固定，参数：left / right / ''*/
                        slot: true/*表头宽度*/
                    }, {
                        label: 'page.demo.icon',/*标题*/
                        prop: 'icon',/*绑定数据源obj展示字段*/
                        width: '80',/*表头固定，参数：left / right / ''*/
                        slot: true/*表头宽度*/
                    }, {
                        label: 'page.demo.sort',/*标题*/
                        prop: 'sort',/*绑定数据源obj展示字段*/
                        width: ''/*表头固定，参数：left / right / ''*/
                    }, {
                        label: 'page.demo.updateTime',/*标题*/
                        prop: 'updateTime',/*绑定数据源obj展示字段*/
                        width: '120'/*表头固定，参数：left / right / ''*/
                    }, {
                        label: 'page.demo.email',/*标题*/
                        prop: 'email',/*绑定数据源obj展示字段*/
                        width: '200'/*表头固定，参数：left / right / ''*/
                    }
                ],
                childrenHead: [/*子表头数组*/],
                operationData: [
                    {
                        "id": 'edit', /*按钮ID*/
                        "value": "",  /*按钮内容*/
                        "classname": "",  /*自定义class*/
                        "disabled": false,  /*是否被禁用*/
                        "type": "text", /*按钮类型 primary / success / warning / danger / info / text*/
                        "size": "mini", /*按钮大小 medium / small / mini*/
                        "icon": "el-icon-edit-outline", /*按钮icon*/
                    }, {
                        "id": 'delete',/*按钮ID*/
                        "value": "",/*按钮内容*/
                        "classname": "",/*自定义class*/
                        "disabled": false,/*是否被禁用*/
                        "type": "text",/*按钮类型 primary / success / warning / danger / info / text*/
                        "size": "mini",/*按钮大小 medium / small / mini*/
                        "icon": "el-icon-delete",/*按钮icon*/
                    }, {
                        "id": 'copy',/*按钮ID*/
                        "value": "",/*按钮内容*/
                        "classname": "",/*自定义class*/
                        "disabled": false,/*是否被禁用*/
                        "type": "text",/*按钮类型 primary / success / warning / danger / info / text*/
                        "size": "mini",/*按钮大小 medium / small / mini*/
                        "icon": "el-icon-document-copy",/*按钮icon*/
                    }, {
                        "id": 'connection',/*按钮ID*/
                        "value": "",/*按钮内容*/
                        "classname": "",/*自定义class*/
                        "disabled": false,/*是否被禁用*/
                        "type": "text",/*按钮类型 primary / success / warning / danger / info / text*/
                        "size": "mini",/*按钮大小 medium / small / mini*/
                        "icon": "el-icon-connection",/*按钮icon*/
                    }, {
                        "id": 'lock',/*按钮ID*/
                        "value": "",/*按钮内容*/
                        "classname": "",/*自定义class*/
                        "disabled": false,/*是否被禁用*/
                        "type": "text",/*按钮类型 primary / success / warning / danger / info / text*/
                        "size": "mini",/*按钮大小 medium / small / mini*/
                        "icon": "el-icon-lock",/*按钮icon*/
                    }, {
                        "id": 'check',/*按钮ID*/
                        "value": "",/*按钮内容*/
                        "classname": "",/*自定义class*/
                        "disabled": false,/*是否被禁用*/
                        "type": "text",/*按钮类型 primary / success / warning / danger / info / text*/
                        "size": "mini",/*按钮大小 medium / small / mini*/
                        "icon": "el-icon-s-check",/*按钮icon*/
                    }
                ],
                childrenOperationData: [/*字表操作栏*/],
                tableData: [{}]
            },
            tableObj1: {
                son: false, /*是否有子级表单*/
                operation: true,  /*是否展示操作按钮功能*/
                childrenOperation: true, /*是否展示子表操作按钮功能*/
                operationText: 'operation', /*操作栏标题*/
                selectionStatus: false,  /*是否需要复选框*/
                childrenOperationText: 'operation', /*子表操作栏标题*/
                paginationStatus: true, /*是否启用分页组件*/
                operationWidth: '200',
                total: 0, /*总条数 通过 this.tableObj.total = 接口返回的总条数字段 api 请求*/
                page: 1,
                head: [ /*表头数据*/
                    {
                        label: '日期',  /*标题*/
                        prop: 'date',/*绑定数据源obj展示字段*/
                        fixed: 'left',  /*表头固定，参数：left / right / ''*/
                        width: '180', /*表头宽度*/
                    }, {
                        label: '姓名',/*标题*/
                        prop: 'name',/*绑定数据源obj展示字段*/
                        width: ''/*表头固定，参数：left / right / ''*/
                    }, {
                        label: '地址',/*标题*/
                        prop: 'address',/*绑定数据源obj展示字段*/
                        width: '',/*表头固定，参数：left / right / ''*/
                        slot: true/*表头宽度*/
                    }
                ],
                childrenHead: [/*子表头数组*/],
                operationData: [
                    {
                        "id": 'edit', /*按钮ID*/
                        "value": "",  /*按钮内容*/
                        "classname": "",  /*自定义class*/
                        "disabled": false,  /*是否被禁用*/
                        "type": "text", /*按钮类型 primary / success / warning / danger / info / text*/
                        "size": "mini", /*按钮大小 medium / small / mini*/
                        "icon": "el-icon-edit-outline", /*按钮icon*/
                    }, {
                        "id": 'delete',/*按钮ID*/
                        "value": "",/*按钮内容*/
                        "classname": "",/*自定义class*/
                        "disabled": false,/*是否被禁用*/
                        "type": "text",/*按钮类型 primary / success / warning / danger / info / text*/
                        "size": "mini",/*按钮大小 medium / small / mini*/
                        "icon": "el-icon-delete",/*按钮icon*/
                    }, {
                        "id": 'copy',/*按钮ID*/
                        "value": "",/*按钮内容*/
                        "classname": "",/*自定义class*/
                        "disabled": false,/*是否被禁用*/
                        "type": "text",/*按钮类型 primary / success / warning / danger / info / text*/
                        "size": "mini",/*按钮大小 medium / small / mini*/
                        "icon": "el-icon-document-copy",/*按钮icon*/
                    }, {
                        "id": 'connection',/*按钮ID*/
                        "value": "",/*按钮内容*/
                        "classname": "",/*自定义class*/
                        "disabled": false,/*是否被禁用*/
                        "type": "text",/*按钮类型 primary / success / warning / danger / info / text*/
                        "size": "mini",/*按钮大小 medium / small / mini*/
                        "icon": "el-icon-connection",/*按钮icon*/
                    }, {
                        "id": 'lock',/*按钮ID*/
                        "value": "",/*按钮内容*/
                        "classname": "",/*自定义class*/
                        "disabled": false,/*是否被禁用*/
                        "type": "text",/*按钮类型 primary / success / warning / danger / info / text*/
                        "size": "mini",/*按钮大小 medium / small / mini*/
                        "icon": "el-icon-lock",/*按钮icon*/
                    }, {
                        "id": 'check',/*按钮ID*/
                        "value": "",/*按钮内容*/
                        "classname": "",/*自定义class*/
                        "disabled": false,/*是否被禁用*/
                        "type": "text",/*按钮类型 primary / success / warning / danger / info / text*/
                        "size": "mini",/*按钮大小 medium / small / mini*/
                        "icon": "el-icon-s-check",/*按钮icon*/
                    }
                ],
                childrenOperationData: [/*字表操作栏*/],
                tableData: [
                    {
                    webId: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    webId: 2,
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    webId: 3,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    children: [{
                        webId: 31,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        webId: 32,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄',
                        children: [{
                            webId: 321,
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1519 弄'
                        }, {
                            webId: 322,
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1519 弄',
                            children: [{
                                webId: 3221,
                                date: '2016-05-01',
                                name: '王小虎',
                                address: '上海市普陀区金沙江路 1519 弄'
                            }, {
                                webId: 3221,
                                date: '2016-05-01',
                                name: '王小虎',
                                address: '上海市普陀区金沙江路 1519 弄'
                            }]
                        }]
                    }]
                }, {
                    webId: 4,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                tableData1: [{
                    webId: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    webId: 2,
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    webId: 3,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    hasChildren: true
                }, {
                    webId: 4,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        }
    },
    created() {
        this.list(this.tableObj.page, this.tableObj.pageSize, '');
    },
    methods: {
        tabClose(data, v) {
            this.$store.commit('functionTabClose', {
                v: v,
                formObj1: this.formObj1,
                data: data,
                Callback: ((response) => {
                    v = response.v;
                    this.formObj1 = response.formObj1;
                    this.tabData = response.data;
                })
            })
        },
        list() {
            let tableObj = this.tableObj;
            tableObj.tableData = [{
              name: '1',
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
            }];
        },
        HandleCurrentChange(val) {  /*当前页*/
            console.debug(val)
            this.tableObj.page = val;
            this.list();
        },
        HandleSizeChange(val) { /*每页多少条*/
            console.debug(val)
            this.tableObj.page = 1;
            this.tableObj.pageSize = val;
            this.list();
        },
        handleSelectionChangeCom(val) { /*复选框选中事件*/
            console.debug(val)
        },
        submit(v, index, data, obj) {
            /*
            * TODO 参数：
            * TODO v：当前点击按钮本身参数
            * TODO index：当前点击按钮在集合的中的顺序
            * TODO data：获取当前集合所有参数（包含input框输入值value等）;
            * TODO obj key-value形式处理后数据 配合 customParameters
            *  */
            console.debug(v.id, index, data, obj)

            if (v.id == 0) {
                this.$message('搜索');
                console.debug('搜索');
                /* getTableData({
                   value: v.value
                 })*/
            }

            if (v.id == 1) {
                this.title = '高级搜索展开样式';
                this.status = false;

                this.$store.commit('functionAmbiguity', {
                    data: data,
                    formObj1: this.formObj1,
                    Callback: ((response) => {
                        this.formObj1 = response.formObj1;
                    })
                });
                return '';
            }
            if (v.id == 'collape') {
                this.title = this.$t('page.demo.fuzzySearch')
                this.status = true;
                this.tabData = [];
                this.$store.commit('functionTabData', {
                    data: data,
                    formObj: this.formObj,
                    tabData: this.tabData,
                    Callback: ((response) => {
                        this.formObj = response.formObj;
                        this.tabData = response.tabData;
                    })
                })
                return '';
            }
            if (v.id == 2 || v.id == 10) {
                console.debug('批处理');
                this.$message(this.$t('page.demo.batchProcessing'));
                return '';
            }
            if (v.id == 3 || v.id == 11) {
                console.debug('新增');
                /* this.$router.push({
                   path: '/Form'
                 })*/
                window.open('/Form')
                return '';
            }
        },
        operationSubmit(v, index, row) {
            /*
            * v：当前点击按钮内容
            * index：当前点击行数索引
            * row：当前点击行数对象*/
            console.debug(v, index, row)
            if (v.id == 13) {
                console.log('审批')
                this.$message('审批');
            }

        }
    },
    mounted() {
    }
}
</script>

<style scoped>
</style>
