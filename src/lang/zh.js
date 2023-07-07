export default {
  route: {
    demo:'测试',
    dashboard: '首页',
    documentation: '文档',
    guide: '引导页',
    permission: '权限测试页',
    rolePermission: '角色权限',
    pagePermission: '页面权限',
    directivePermission: '指令权限',
    icons: '图标',
    components: '组件',
    tinymce: '富文本编辑器',
    markdown: 'Markdown',
    jsonEditor: 'JSON 编辑器',
    dndList: '列表拖拽',
    splitPane: 'Splitpane',
    avatarUpload: '头像上传',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'Count To',
    componentMixin: '小组件',
    backToTop: '返回顶部',
    dragDialog: '拖拽 Dialog',
    dragSelect: '拖拽 Select',
    dragKanban: '可拖拽看板',
    charts: '图表',
    keyboardChart: '键盘图表',
    lineChart: '折线图',
    mixChart: '混合图表',
    example: '综合实例',
    nested: '路由嵌套',
    menu1: '菜单1',
    'menu1-1': '菜单 1-1',
    'menu1-2': '菜单 1-2',
    'menu1-2-1': '菜单 1-2-1',
    'menu1-2-2': '菜单 1-2-2',
    'menu1-3': '菜单 1-3',
    menu2: '菜单 2',
    Table: 'Table',
    dynamicTable: '动态 Table',
    dragTable: '拖拽 Table',
    inlineEditTable: 'Table 内编辑',
    complexTable: '综合 Table',
    tab: 'Tab',
    form: '表单',
    createArticle: '创建文章',
    editArticle: '编辑文章',
    articleList: '文章列表',
    errorPages: '错误页面',
    page401: '401',
    page404: '404',
    errorLog: '错误日志',
    excel: 'Excel',
    exportExcel: '导出 Excel',
    selectExcel: '导出 已选择项',
    mergeHeader: '导出 多级表头',
    uploadExcel: '上传 Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: 'Export Zip',
    theme: '换肤',
    clipboardDemo: 'Clipboard',
    i18n: '国际化',
    externalLink: '外链',
    profile: '个人中心',
    memberManage:'会员管理',
    memberList:'会员列表',
    reservationManage:'预约管理',
    appointeList:'预约列表',
    orderManage:'订单管理',
    AddOrder:"新建订单",
    clubManage:'俱乐部管理',
    room:'房间管理',
    addRoom:'新建房间',
    class:'课程管理',
    account:'个人中心',
    accountInfo:'个人信息',
    staff:'员工管理',
    accountingManage:'账务管理',
    accountNumber:'账号管理',
staffManagement:'员工管理',
clubManage:'俱乐部管理',
roomManage:'房间管理',
packageManage:'课时包管理',
personalCenter:'个人中心',
personalInfo:'个人信息',
accountManage:'账号管理',
financialManage:'订单核销',
welcom:'欢迎您！'





  },
  member:{
    username:'姓名',
    sex:'性别',
    contactInfo:'联系方式',
    birthday:'出生日期',
    address:"地址",
    allergy:'过敏',
    tel:'手机号',
    cardType:'卡类型',
    masterCard:'成人会籍卡(主卡)',
    secondaryCard:'成人会籍卡(附属卡)',
    youngCard:'青少年会籍卡',
    openCard:'新建会员',
    preferred:'爱好',
    male:'男',
    female:'女',
    remark:'备注',
    basicInfo:'基础信息',
    accountInfo:'账户信息',
    MembershFipFee:'会籍费',
    annualFee:'年费' ,
    MonthlyFees:'月度行政费' ,
    chooseMasterCard:'选择主卡'
  },
  appointeManage:{
    openAppoint:'新建预约'
  },
  navbar: {
    dashboard: '首页',
    github: '项目地址',
    logOut: '退出登录',
    profile: '个人中心',
    theme: '换肤',
    size: '布局大小'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码',
    any: '随便填',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！'
  },
  documentation: {
    documentation: '文档',
    github: 'Github 地址'
  },
  permission: {
    addRole: '新增角色',
    editPermission: '编辑权限',
    roles: '你的权限',
    switchRoles: '切换权限',
    tips: '在某些情况下，不适合使用 v-permission。例如：Element-UI 的 el-tab 或 el-table-column 以及其它动态渲染 dom 的场景。你只能通过手动设置 v-if 来实现。',
    delete: '删除',
    confirm: '确定',
    cancel: '取消'
  },
  guide: {
    description: '引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于',
    button: '打开引导'
  },
  components: {
    documentation: '文档',
    tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
    dropzoneTips: '由于我司业务有特殊需求，而且要传七牛 所以没用第三方，选择了自己封装。代码非常的简单，具体代码你可以在这里看到 @/components/Dropzone',
    stickyTips: '当页面滚动到预设的位置会吸附在顶部',
    backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
    backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
    imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
  },
  table: {
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    importance: '重要性',
    type: '类型',
    remark: '点评',
    search: '搜索',
    add: '添加',
    export: '导出',
    reviewer: '审核人',
    id: '序号',
    date: '时间',
    author: '作者',
    readings: '阅读数',
    status: '状态',
    actions: '操作',
    edit: '编辑',
    publish: '发布',
    draft: '草稿',
    delete: '删除',
    cancel: '取 消',
    confirm: '确 定'
  },
  example: {
    warning: '创建和编辑页面是不能被 keep-alive 缓存的，因为keep-alive 的 include 目前不支持根据路由来缓存，所以目前都是基于 component name 来进行缓存的。如果你想类似的实现缓存效果，可以使用 localStorage 等浏览器缓存方案。或者不要使用 keep-alive 的 include，直接缓存所有页面。详情见'
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)'
  },
  pdf: {
    tips: '这里使用   window.print() 来实现下载pdf的功能'
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  settings: {
    title: '系统布局配置',
    theme: '主题色',
    tagsView: '开启 Tags-View',
    fixedHeader: '固定 Header',
    sidebarLogo: '侧边栏 Logo'
  },
  commen : {
    'demo.form.title': '标题',
    'title': '标题',
    'dome.title': '标题',
    'Add purchase order' : '新增采购单',
    'brand' : '品牌',
    'brandMessage' : '请输入',
    'Option 1' : '选项1',
    'Option 2' : '选项2',
    'Please select' : '请选择',
    'Supplier classification': '供应商分类',
    'mode of transportation': '交通方式',
    'Time selector': '时间选择器',
    'Date Pickers': '日期选择',
    'range-separator': '至',
    'start-placeholder': '开始时间',
    'end-placeholder': '结束时间',
    'switch': '开关',
    'submit': '提交',
    'reset': '重置',
    'operation': '操作',
    'Batch Approval': '批处理审批',
    'collapse': '折叠',
    'collape': '折叠',
    'number': '编号',
    'demo.page.approve': '审批中',
    'demo.page.Refuse': '已拒绝',
    'demo.page.singleLineTextBox': '单行文本框',
    'demo.page.name': '名称',
    'demo.page.id': '编号',
    'page.demo.icon': '图标',
    'page.demo.valueInputBox': '数值输入框',
    'page.demo.localDropDownBox': '下拉框',
    'page.demo.apiDropDownBox': '接口数据下拉框',
    'page.demo.timeSelection': '时间选择',
    'page.demo.dateSelection': '时间选择',
    'page.demo.dateRangeSelection': '日期区间选择',
    'page.demo.approvalStatus': '审批状态',
    'page.demo.workshop': '所属车间',
    'page.demo.section': '所属车间',
    'page.demo.enable': '启用',
    'page.demo.sort': '排序',
    'page.demo.updateTime': '更新时间',
    'page.demo.email': '邮箱',
    'page.demo.determine': '确定',
    'page.demo.preservation': '保存',
    'page.demo.saveAndAdd': '保存并新增',
    'page.demo.name': '名称',
    'page.demo.power': '功率',
    'page.demo.equipmentType': '设备类型',
    'page.demo.spinningCart': '细纱长车',
    'page.demo.workingProcedure': '工序',
    'page.demo.batchProcessing': '批处理',
    'page.demo.fuzzySearch': '模糊搜索',
    'page.demo.add': '添加',
    'page.demo.submit': '提交',
    'Search':'搜索',
    'formatNotrue':'格式不正确',
},


useCommonAll:{

  memberManage:'会员管理',
memberNumber:'会员号码',
memberCardType:'会员卡类型',
memberTitle:'称谓',
name:'姓名',
sex:'性别',
phone:'手机号',
activationStatus:'激活状态',
operate:'操作',
edit:'编辑',
view:'查看',
order:'订单',
searchName:'姓名搜索',
expand:'展开',
fold:'折叠',
createMember:'新建会员',
memberList:'会员列表',
forward:'前往',
total:'共',
section:'条',
page:'页',
emailAddress:'邮寄地址',
homeAddress:'家庭地址',
companyAddress:'公司地址',
companyPosition:'职位',
conmpanyName:'公司名称',
secretaryInfo:'秘书信息',
secretaryName:'秘书姓名',
secretaryPhone:'秘书电话',
input:'请输入',
select:'请选择',
search:'搜索',
nationality:'国籍',
email:'电子邮箱',
documentInfo:'证件信息',
identityCard:'身份证',
passport:'护照',
other:'其他',
identityType:'证件类型',
foundationInfo:'基础信息',
personalInfo:'个人信息',
allergic:'过敏',
otherPreference:'其他偏好',
hobby:'爱好',
contactSecretary:'优先联系秘书',
yes:'是',
no:'否',
accountInfo:'账户信息',
otherInfo:'其他信息',
memberTransfer:'会籍转让',
reamark:'备注',
checkInfo:'已核对以上信息，确认无误',
createMembership:'创建会籍',
reservationCourse:'预约课程',
instoreConsume:'店内消费',
inlineConsume:'线上消费',
sportProject:'运动项目',
familyCardAll:'家庭卡（全权会籍）',
familyCardPerson:'家庭卡（个人传承会籍）',
familyCardCompany:'家庭卡（公司/企业会籍）',
familyCardSub:'家庭卡（附属卡）',
youngCardAll:'青少年卡（全会籍）',
youngCardOne:'青少年卡（指定单项运动会籍）',
youngCardTwo:'青少年卡（指定双项运动会籍）',
updateMembership:'更新会籍',
reservationManage:'预约管理',
createreservation:'新建预约',
reservationList:'预约列表',
reservationBatch:'批量预约',
room:'房间',
coachName:'教练名称',
coachPhone:'教练电话',
reservationStatus:'预约状态',
delete:'删除',
cancel:'取消',
fuzzySearch:'模糊搜索',
reservationCoach:'预约教练',
reservationName:'预约姓名',
operator:'操作人',
startTime:'开始时间',
endTime:'结束时间',
reservationM:'预约方式',
contact:'联系人',
contactWay:'联系方式',
roomName:'房间名称',
tableNumber:'桌位号',
needCoach:'是否有教练',
save:'保存',
tableTennis:'乒乓球',
golf:'高尔夫',
dance:'舞蹈',
spa:'理疗',
dinning:'餐饮',
orderManage:'订单管理',
orderNumber:'订单编号',
consumeTime:'消费时间',
checked:'已确定',
payed:'已支付',
unpay:'未支付',
canceled:'已取消',
createOrder:'新建订单',
batchExport:'批量导入',
orderAmount:'订单金额',
payStatus:'支付状态',
financialManage:'订单核销',
batchVerification:'批量核销',
memberName:'会员姓名',
commodityContent:'商品内容',
commodityType:'商品类型',
souvenir:'纪念品',
coursePackage:'课时包',
otherCommodity:'其他商品',
status:'状态',
date:'日期',
reservationItem:'预约项目',
reservationRoom:'预约房间',
consumptionTime:'消费时间',
to:'至',
amount:'金额',
orderStatus:'订单状态',
verificationStatus:'核销状态',
details:'详情',
jobNumber:'工号',
entryStatus:'在职状态',
position:'职位',
birthday:'出生日期',
isVerification:'是否核销',
reservationTime:'预约时间',
creatTime:'创建时间',
reservationDetails:'预约详情',
payMethod:'支付方式',
remarkMessage:'备注信息',
accountManage:'账号管理',
account:'账号',
oldPassword:'旧密码',
newPassword:'新密码',
saveUpdate:'保存更新信息',
lastLoginTime:'最后登录时间',
entryTime:'入职时间',
rolePermissions:'角色权限',
receptionStaff:'前台员工',
restaurantStaff:'餐厅员工',
coach:'教练',
finance:'财务',
supervisor:'主管',
administrator:'管理员',
staffManagement:'员工管理',
personalCenter:'个人中心',
functions:'职能',
permissions:'权限',
clubManage:'俱乐部管理',
roomManage:'房间管理',
projectName:'项目名称',
createRoom:'新建房间',
tableNumber:'桌位/台位数量',
roomInformation:'房间信息',
projectType:'项目类型',
roomStatus:'房间状态',
capacity:'容量',
roomPrice:'房间价格',
packageManage:'课时包管理',
courseManage:'课程管理',
type:'类型',
codeNumber:'课时包代码编号',
price:'单价',
number:'数量',
discount:'折扣',
createCourse:'新建课程',
courseInformation:'课程信息',
courseName:'课程名称',
discountAmount:'优惠前总金额',
totalAmount:'实际总金额',
cardNumber:'会员卡数',
head:'头像',
address:'住宅地址',
permissionTtem:'权限项目',
reservationdate:'预约日期',
isPackage:'是否关联课时包',
checkRoomstatus:'查看房间状态',
reservationInfo:'预约信息',
isCancel:'是否确定取消此订单？',
isTicket:'是否产生罚单',
ticketAmount:'罚款金额',
newMember:'新建成员',
orderInfo:'订单信息',
isActivate:'是否激活',
orderType:'订单类型',
viewMemberDetail:'查看会员详情',
male:'男',
female:'女',
fine:'罚款',
phone:'电话',
mail:'邮件',
wechat:'微信/WhatsApp',
live:'现场',
reservationOrder:'预约订单',
classPackageOrder:'课时包订单',
merchandiseOrder:'商品订单',
cateringOrder:'餐饮订单',
penaltyOrder:'罚款订单',
singleLesson:'单节',
package:'套餐',
monthlyFee:'月费',
checkedOff:'已核销',
uncheck:'未核销',
completed:'已完成',
incomplete:'未完成',
ok:'确定',
viewDetail:'查看详情',
check:'核销',
isCheckOrder:'是否确认核销此订单',
isBatchCheckOrder:'是否确认批量核销订单',
prompt:'提示',
sureDeleteInfo:'确定删除此条信息吗',
canceledOperator:'已取消此操作',
operatorSuciscess:'操作成功',
isCancelReservation:'是否确认取消此预约',
formatNotrue:'格式不正确',
billMode:'账单发送模式',
paperMode:'纸质寄送(每月收取20$)',
paperModeFee:'每月收取20$',
confirme:'待确认',
orderConfirmHint:'此操作请务必对单个订单再做调整!!!',
selectRoom:'请选择预约的房间！',
batchBooking:'批量预定',
uploadFile:'上传文件',
roomNormal:'正常使用',
roomMaintenance:'维护中',
roomDisable:'停用',
passwordIncorrect:'两次输入密码不一致!',
roomUint:'计价单位',
roomUnitHour:'小时',
roomUnitMin:'45分钟',
roomUintDay:'天',
roomUnitWeek:'周',
roomUnitMonth:'月',
confirm:'确认',
commodityType:'商品类型收纳',
isPrimaryCard:'是否能为主卡',
ensureMember:'是否确认会员已到场！',
ensureReservation:'预约已确认，不可再次确认！',
ensureConfirmReservation:'预约已确认，不可修改状态！',
cancaleReservation:'预约已取消，不可修改状态！',
}
}






