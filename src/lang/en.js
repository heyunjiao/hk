export default {
  route: {
    demo:'demo',
    dashboard: 'Dashboard',
    documentation: 'Documentation',
    guide: 'Guide',
    permission: 'Permission',
    pagePermission: 'Page Permission',
    rolePermission: 'Role Permission',
    directivePermission: 'Directive Permission',
    icons: 'Icons',
    components: 'Components',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    dndList: 'Dnd List',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'Count To',
    componentMixin: 'Mixin',
    backToTop: 'Back To Top',
    dragDialog: 'Drag Dialog',
    dragSelect: 'Drag Select',
    dragKanban: 'Drag Kanban',
    charts: 'Charts',
    keyboardChart: 'Keyboard Chart',
    lineChart: 'Line Chart',
    mixChart: 'Mix Chart',
    example: 'Example',
    nested: 'Nested Routes',
    menu1: 'Menu 1',
    'menu1-1': 'Menu 1-1',
    'menu1-2': 'Menu 1-2',
    'menu1-2-1': 'Menu 1-2-1',
    'menu1-2-2': 'Menu 1-2-2',
    'menu1-3': 'Menu 1-3',
    menu2: 'Menu 2',
    Table: 'Table',
    dynamicTable: 'Dynamic Table',
    dragTable: 'Drag Table',
    inlineEditTable: 'Inline Edit',
    complexTable: 'Complex Table',
    tab: 'Tab',
    form: 'Form',
    createArticle: 'Create Article',
    editArticle: 'Edit Article',
    articleList: 'Article List',
    errorPages: 'Error Pages',
    page401: '401',
    page404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    mergeHeader: 'Merge Header',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    pdf: 'PDF',
    exportZip: 'Export Zip',
    theme: 'Theme',
    clipboardDemo: 'Clipboard',
    i18n: 'I18n',
    externalLink: 'External Link',
    profile: 'Profile',
    memberManage:'Member Management',
    memberList:'Member List',
    reservationManage:'Reservation Management',
    appointeList:'Appointe Manage List',
    orderManage:'Order Management',
    AddOrder:"New order",
    clubManage:'Club management',
    room:'room Management',
    addRoom:'New Room',
    class:'class Management',
    account:'Personal Center',
    accountInfo:'Personal Account Info',
    staff:'staff Management',
    accountingManage:'Accounting management',
    accountNumber:'Account Number management',
  staffManagement:'Staff Management',
  clubManage:'Club Manage',
  roomManage:'Room Manage',
  packageManage:'Course Package Management',
  personalCenter:'Personal Center',
  personalInfo:'Personal information',
  accountManage:'Account Management',
  financialManage:'Financial Management',
  welcom:'Welcome'



  },
  member:{
    username:'User Name',
    sex:'Gender',
    contactInfo:'Contact Information',
    birthday:'Birthday',
    address:"Address",
    allergy:'Allergy',
    tel:'cell-phone number',
    cardType:'Card Category',
    masterCard:'Master Card',
    secondaryCard:'Secondary Card',
    youngCard:'Young Card',
    openCard:'activate a bank card',
    preferred:"preferred",
    male:'male',
    female:'female',
    remark:'remark',
    basicInfo:'User Basic Info',
    accountInfo:'Account Information',
    MembershFipFee:'MembershFip Fee',
    annualFee:'Annual Fee' ,
    MonthlyFees:'Monthly administrative fees',
    chooseMasterCard:'Select Master Card'
  },
  appointeManage:{
    openAppoint:'New Appointment'
  },
  navbar: {
    dashboard: 'Dashboard',
    github: 'Github',
    logOut: 'Log Out',
    profile: 'Profile',
    theme: 'Theme',
    size: 'Global Size'
  },
  login: {
    title: 'Login Form',
    logIn: 'Login',
    username: 'Username',
    password: 'Password',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  permission: {
    addRole: 'New Role',
    editPermission: 'Edit',
    roles: 'Your roles',
    switchRoles: 'Switch roles',
    tips: 'In some cases, using v-permission will have no effect. For example: Element-UI  el-tab or el-table-column and other scenes that dynamically render dom. You can only do this with v-if.',
    delete: 'Delete',
    confirm: 'Confirm',
    cancel: 'Cancel'
  },
  guide: {
    description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    button: 'Show Guide'
  },
  components: {
    documentation: 'Documentation',
    tinymceTips: 'Rich text is a core feature of the management backend, but at the same time it is a place with lots of pits. In the process of selecting rich texts, I also took a lot of detours. The common rich texts on the market have been basically used, and I finally chose Tinymce. See the more detailed rich text comparison and introduction.',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Imp',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm'
  },
  example: {
    warning: 'Creating and editing pages cannot be cached by keep-alive because keep-alive include does not currently support caching based on routes, so it is currently cached based on component name. If you want to achieve a similar caching effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all pages directly. See details'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export Selected Items',
    placeholder: 'Please enter the file name (default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name (default file)'
  },
  pdf: {
    tips: 'Here we use window.print() to implement the feature of downloading PDF.'
  },
  theme: {
    change: 'Change Theme',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  settings: {
    title: 'Page style setting',
    theme: 'Theme Color',
    tagsView: 'Open Tags-View',
    fixedHeader: 'Fixed Header',
    sidebarLogo: 'Sidebar Logo'
  },
  commen: {
    'demo.form.title': 'title',
    'title': 'title',
    'Sign up a New Ticket': 'Sign up a New Ticket',
    'Add purchase order': 'Add purchase order',
    'brand': 'brand',
    'brandMessage': 'Please enter',
    'Option 1': 'Option 1',
    'Option 2': 'Option 2',
    'Please select': 'Please select',
    'Supplier classification': 'Supplier classification',
    'mode of transportation': 'mode of transportation',
    'Time selector': 'Time selector',
    'Date Pickers': 'Date Pickers',
    'range-separator': 'to',
    'start-placeholder': 'start time',
    'end-placeholder': 'end time',
    'switch': 'switch',
    'submit': 'Submit',
    'reset': 'reset',
    'Operation': 'Operation',
    'Batch Approval': 'Batch Approval',
    'collape': 'Collape',
    'number': 'NO',
    'demo.page.test': 'demo.page.test',
    'demo.page.approve': 'Approve',
    'demo.page.Refuse': 'Refuse',
    'demo.page.singleLineTextBox': 'Single line text box',
    'demo.page.name': 'name',
    'demo.page.id': 'ID',
    'page.demo.icon': 'icon',
    'page.demo.valueInputBox': 'value input box',
    'page.demo.localDropDownBox': 'Local drop-down box',
    'page.demo.apiDropDownBox': 'Drop Down Box',
    'page.demo.timeSelection': 'Time selection',
    'page.demo.dateSelection': 'Date selection',
    'page.demo.dateRangeSelection': 'Date Range Selection',
    'page.demo.approvalStatus': 'Approval status',
    'page.demo.workshop': 'Workshop',
    'page.demo.section': 'Section',
    'page.demo.enable': 'Enable',
    'page.demo.sort': 'Sort',
    'page.demo.updateTime': 'Update time',
    'page.demo.email': 'Email',
    'page.demo.determine': 'determine',
    'page.demo.preservation': 'Save',
    'page.demo.saveAndAdd': 'Save and Add',
    'page.demo.name': 'name',
    'page.demo.power': 'power',
    'page.demo.equipmentType': 'Equipment type',
    'page.demo.SpinningCart': 'Spinning cart',
    'page.demo.workingProcedure': 'working procedure',
    'page.demo.batchProcessing': 'Batch processing',
    'page.demo.fuzzySearch': 'Fuzzy search',
    'page.demo.add': 'Add',
    'page.demo.submit': 'submit',
    'Search':'Search',
    'formatNotrue':'The format is incorrect',

},
useCommonAll:{
  memberManage:'Member Management',
memberNumber:'Member No.',
memberCardType:'Member Type',
memberTitle:'Title',
name:'Name',
sex:'Gender',
phone:'Mobile Phone',
activationStatus:'Activation',
operate:'Operation',
edit:'Edit',
view:'View',
order:'Order',
searchName:'Search Names',
expand:'Expand',
fold:'Fold',
createMember:'New membership',
memberList:'All Members',
forward:'Go',
total:'Total',
section:'Article',
page:'Page',
emailAddress:'Email',
homeAddress:'Home address',
companyAddress:'Company address',
companyPosition:'Position',
conmpanyName:'Company name',
secretaryInfo:'Secretary Information',
secretaryName:'Secretary Name',
secretaryPhone:'Secretary Phone',
input:'Please input',
select:'Please select',
search:'Search',
nationality:'Nationality',
email:'Email',
documentInfo:'ID information',
identityCard:'ID',
passport:'Passport',
other:'Other',
identityType:'Type of ID',
foundationInfo:'General Information',
personalInfo:'Personal Information',
allergic:'Allergy',
otherPreference:'Other Preference',
hobby:'Hobbies',
contactSecretary:'Prefer contact secretary',
yes:'Yes',
no:'No',
accountInfo:'Account information',
otherInfo:'Other Information',
memberTransfer:'Membership Transfer',
reamark:'Remarks',
checkInfo:'The above information has been checked and has confirmed',
createMembership:'New membership',
reservationCourse:'Book a course',
instoreConsume:'On-site consumption',
inlineConsume:'Online Consume',
sportProject:'Sport',
familyCardAll:'Family Card (Full Membership)',
familyCardPerson:'Family Card(Personal Heritage Membership)',
familyCardCompany:'Family Card (Corporate/Corporate Membership)',
familyCardSub:'Family Card (Supplementary Card)',
youngCardAll:'Youth Card (Full Membership)',
youngCardOne:'Youth Card (Single sport membership)',
youngCardTwo:'Youth Card (Dual sports membership)',
updateMembership:'Update membership',
reservationManage:'Reservation Management',
createreservation:'New Reservation',
reservationList:'Reservation list',
reservationBatch:'Batch Reservation',
room:'Room',
coachName:'Coach Name',
coachPhone:'Coach Phone',
reservationStatus:'Reservation status',
delete:'Delete',
cancel:'Cancel',
fuzzySearch:'Fuzzy Search',
reservationCoach:'Reservation coach',
reservationName:'Reservation name',
operator:'Operator',
startTime:'Start Time',
endTime:'End Time',
reservationM:'Reservation Mode',
contact:'Contact person',
contactWay:'Contact',
roomName:'Room',
tableNumber:'Table',
needCoach:'need coach there',
save:'Save',
tableTennis:'Table tennis',
golf:'Golf',
dance:'Dance',
spa:'Physiotherapy',
dinning:'Dining',
orderManage:'Order Management',
orderNumber:'Order No.',
consumeTime:'Order Time',
checked:'Checked',
payed:'Paid',
unpay:'Unpaid',
canceled:'cancelled',
createOrder:'New order',
batchExport:'Bulk import',
orderAmount:'Order amount',
payStatus:'Payment status',
financialManage:'cancellation of orders',
batchVerification:'Batch Verification',
memberName:'Member Name',
commodityContent:'Products',
commodityType:'Product type',
souvenir:'Souvenir',
coursePackage:'Course packages',
otherCommodity:'Other products',
status:'Status',
date:'Date',
reservationItem:'Reservation item',
reservationRoom:'Reservation Room',
consumptionTime:'Order Time',
to:'to',
amount:'Amount',
orderStatus:'Order status',
verificationStatus:'Checkout status',
details:'Details',
jobNumber:'Job No.',
entryStatus:'Service status',
position:'Position',
birthday:'Date of birth',
isVerification:'Verificated',
reservationTime:'Reservation time',
creatTime:'Create Time',
reservationDetails:'Reservation details',
payMethod:'Payment method',
remarkMessage:'Remark message',
accountManage:'Account Management',
account:'Account',
oldPassword:'Old Password',
newPassword:'New Password',
saveUpdate:'Save updated information',
lastLoginTime:'Last login time',
entryTime:'Entry time',
rolePermissions:'Role permissions',
receptionStaff:'Reception Staff',
restaurantStaff:'Restaurant Staff',
coach:'Coach',
finance:'Finance',
supervisor:'Supervisor',
administrator:'Administrator',
staffManagement:'Staff Management',
personalCenter:'Personal Center',
functions:'Functions',
permissions:'Permissions',
clubManage:'Club Manage',
roomManage:'Room Manage',
projectName:'Project name',
createRoom:'New Room',
tableNumber:'Number of tables/stations',
roomInformation:'Room information',
projectType:'Sport',
roomStatus:'Room status',
capacity:'Capacity',
roomPrice:'Room Price',
packageManage:'Course Package Management',
courseManage:'CourseManage',
type:'Type',
codeNumber:'Class package code number',
price:'Unit price',
number:'Quantity',
discount:'Discount',
createCourse:'New course',
courseInformation:'Course information',
courseName:'Course name',
discountAmount:'Total amount before discount',
totalAmount:'Actual total amount',
cardNumber:'Number of cards',
head:'Avatar',
address:'Residential address',
permissionTtem:'Permission item',
reservationdate:'Reservation date',
isPackage:'Associated with a course package order',
checkRoomstatus:'Check the status of the room',
reservationInfo:'Reservation information',
isCancel:'Are you sure you want to cancel this order?' ,
isTicket:'Is a ticket generated',
ticketAmount:'The amount of the fine',
newMember:'New member',
orderInfo:'Order information',
isActivate:'Whether to activate',
orderType:'Order type',
viewMemberDetail:'View Member Details',
male:'Male',
female:'female',
fine:'fine',
phone:'Phone',
mail:'Email',
wechat:'WeChat/WhatsApp',
live:'live',
reservationOrder:'ReservationOrder',
classPackageOrder:'Course package order',
merchandiseOrder:'Products order',
cateringOrder:'Dinner order',
penaltyOrder:'Penalty Order',
singleLesson:'Single Section',
package:'package',
monthlyFee:'Monthly Fee',
checkedOff:'Checked off',
uncheck:'Not checked',
completed:'completed',
incomplete:'not completed',
ok:'OK',
viewDetail:'view Details',
check:'check',
isCheckOrder:'confirm the cancellation of this order',
isBatchCheckOrder:'whether to confirm batch cancellation orders',
prompt:'prompt',
sureDeleteInfo:'Are you sure to delete this message',
canceledOperator:'This operation has been cancelled',
operatorSuciscess:'Operation successful',
isCancelReservation:'Confirm to cancel this appointment',
formatNotrue:'The format is incorrect',
billMode:'Billing delivery mode',
papperMode:'paper delivery(20$ per month)',
paperModeFee:'20$ per month',
confirme:'To be confirmed',
orderConfirmHint:'This operation must be adjusted for a single order!!!',
selectRoom:'Please select the room you want to book!',
batchBooking:'Batch Booking',
uploadFile:'Upload file',
roomNormal:'Normal',
roomMaintenance:'Maintenance',
roomDisable:'Disable',
passwordIncorrect:'The two passwords entered do not match!',
roomUint:'Pricing Unit',
roomUnitHour:'Hour',
roomUnitMin:'45 minutes',
roomUintDay:'Day',
roomUnitWeek:'Week',
roomUnitMonth:'Month',
}
}
